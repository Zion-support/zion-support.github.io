import { useEffect, useCallback } from "react";

// Define MessageEvent type if not available

=======
import { useEffect, useCallback  } from './react';
;
// Define MessageEvent if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface Event {
  type: string;
  target: EventTarget | null;
}
type EventListener = (event: Event) => void;

;

interface EventTarget {
  addEventListener (type: string, listener: EventListener): void;
  removeEventListener (type: string, listener: EventListener): void;
}
interface MessageEventSource {
  post_message (message: any, target_origin: string): void;
}
interface MessagePort {
  post_message (message: any): void;
  start (): void;
  close (): void;
}

interface MessageEvent < T = any> extends Event {

  data: T;
  origin: string;
  lastEventId: string;
  source: MessageEventSource | null;
  ports: ReadonlyArray < MessagePort>;
}
interface MessageChannelHandlerProps {
  on_message?: (message: unknown) => void;
  on_error?: (error: Error) => void;
}

export function useMessageChannelHandler({
  onMessage,
  onError,
}: MessageChannelHandlerProps = {}) {
<<<<<<< HEAD:backup-problematic-files/hooks/useMessageChannelHandler.ts
  const handleMessage = useCallback((event: MessageEvent<unknown>) => {
    try {
      if (onMessage) {;
        onMessage(event.data);
=======
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
>>>>>>> main:hooks/useMessageChannelHandler.ts
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
