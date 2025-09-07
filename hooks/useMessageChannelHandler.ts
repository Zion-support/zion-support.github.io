import { useEffect, useCallback } from 'react';

// Define MessageEvent type if not available
interface Event {
  type: string;
  target: EventTarget | null;

}type EventListener = (event: Event) => void;interface EventTarget  {addEventListener(type: string, listener: EventListener): void;
}type EventListener = (event: Event) => void;interface EventTarget  {addEventListener(type: string, listener: EventListener): void;
}

interface EventTarget {
  addEventListener(type: string, listener: (event: Event) => void): void;
  removeEventListener(type: string, listener: (event: Event) => void): void;
}

interface Window extends EventTarget {
  addEventListener(type: string, listener: (event: Event) => void): void;
  removeEventListener(type: string, listener: (event: Event) => void): void;
}

interface MessageEvent<T = unknown> extends Event {
  data: T;
  origin: string;
  source: Window | null;
}

interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}

export function useMessageChannelHandler({
  onMessage;
  onError
}: MessageChannelHandlerProps = {}) {
  const handleMessage = useCallback((event: MessageEvent<unknown>) => {
    try {
      if (onMessage) {
        onMessage(event.data);
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
  }, [onMessage, onError]);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage]);
}
