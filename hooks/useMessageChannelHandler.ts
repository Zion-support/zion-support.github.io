import { useEffect, useCallback } from "react";

// Define MessageEvent if not available
interface Event {
  type: string;
  target: EventTarget | null;
}

type EventListener = (event: Event) => void;

interface EventTarget {
  addEventListener(type: string, listener: EventListener): void;
  removeEventListener(type: string, listener: EventListener): void;
}

interface MessageEventSource {
  postMessage(message: any, targetOrigin: string): void;
}

interface MessagePort {
  postMessage(message: any): void;
  start(): void;
  close(): void;
}

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
  onError,
}: MessageChannelHandlerProps = {}) {
  const handleMessage = useCallback((event: MessageEvent) => {
    try {
      if (onMessage) {
        onMessage(event.data);
      }
    },
    [onMessage, onError],
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);
}
