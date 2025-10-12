// Utility functions for safe message handling
// This prevents the "message channel closed" error

export interface MessageEvent<T = any> extends Event {
  data: T;
  origin: string;
  lastEventId: string;
  source: MessageEventSource | null;
  ports: ReadonlyArray<MessagePort>;
}

export interface MessageHandlerOptions {
  onMessage?: (data: any) => void;
  onError?: (error: Error) => void;
  preventAsyncResponse?: boolean; // Default: true
}

/**
 * Safe message handler that prevents async response errors
 * @param event - The message event
 * @param options - Handler options
 * @returns false to prevent async response error
 */
export function handleMessageSafely(
  event: MessageEvent,
  options: MessageHandlerOptions = {}
): boolean {
  const { onMessage, onError, preventAsyncResponse = true } = options;

  try {
    if (event.data && onMessage) {
      onMessage(event.data);
    }
  } catch (error) {
    if (onError) {
      onError(error as Error);
    } else {
      console.error('Message handling error:', error);
    }
  }

  // Always return false to prevent async response error
  // unless explicitly told not to
  return preventAsyncResponse ? false : true;
}

/**
 * Safe service worker message handler
 * @param event - The message event
 * @returns false to prevent async response error
 */
export function handleServiceWorkerMessage(event: MessageEvent): boolean {
  if (event.data && typeof event.data === 'object') {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        // Handle skip waiting synchronously
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
        }
        break;
      case 'GET_VERSION':
        // Handle version request synchronously
        if (event.ports && event.ports[0]) {
          event.ports[0].postMessage({
            type: 'VERSION_INFO',
            version: '1.0.0'
          });
        }
        break;
      default:
        // For unknown message types, don't return true
        break;
    }
  }
  
  // Don't return true to prevent the async response error
  return false;
}

/**
 * Safe postMessage wrapper
 * @param message - The message to send
 * @param targetOrigin - The target origin (default: '*')
 * @param target - The target window (default: window.parent)
 */
export function postMessageSafely(
  message: any,
  targetOrigin: string = '*',
  target: Window = window.parent
): void {
  if (typeof window !== 'undefined' && target !== window) {
    try {
      target.postMessage(message, targetOrigin);
    } catch (error) {
      console.error('Failed to post message:', error);
    }
  }
}

/**
 * Create a safe message listener
 * @param handler - The message handler function
 * @returns Cleanup function
 */
export function createSafeMessageListener(
  handler: (event: MessageEvent) => boolean
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const safeHandler = (event: MessageEvent) => {
    try {
      return handler(event);
    } catch (error) {
      console.error('Message listener error:', error);
      return false; // Always return false on error
    }
  };

  window.addEventListener('message', safeHandler);
  
  return () => {
    window.removeEventListener('message', safeHandler);
  };
}
