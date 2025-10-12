import { useEffect, useCallback } from 'react';

interface MessageEvent<T = any> extends Event {
  data: T;
  origin: string;
  lastEventId: string;
  source: MessageEventSource | null;
  ports: ReadonlyArray<MessagePort>;
}

interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}

export function useMessageChannelHandler({
  onMessage,
  onError
}: MessageChannelHandlerProps = {}) {
  const handleMessage = useCallback(
    (event: MessageEvent<unknown>) => {
      try {
        if (onMessage) {
          onMessage(event.data);
        }
      } catch (error) {
        if (onError) {
          onError(error as Error);
        }
      }
    },
    [onMessage, onError]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', handleMessage);
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }
  }, [handleMessage]);
}

// Utility function for safe message posting
export function postMessageSafely(message: any, targetOrigin: string = '*') {
  if (typeof window !== 'undefined' && window.parent !== window) {
    try {
      window.parent.postMessage(message, targetOrigin);
    } catch (error) {
      console.error('Failed to post message:', error);
    }
  }
}

// Utility function for handling service worker messages
export function handleServiceWorkerMessage(event: MessageEvent) {
  // Don't return true unless we're actually handling the message asynchronously
  // This prevents the "message channel closed" error
  if (event.data && typeof event.data === 'object') {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        // Handle skip waiting synchronously
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
        }
        break;
      default:
        // For other messages, don't return true unless we're actually handling them asynchronously
        break;
    }
  }
  // Don't return true to prevent the async response error
  return false;
}
