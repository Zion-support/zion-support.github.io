import { useState, useEffect, useCallback } from "react";

export const useMessageChannelHandler = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Hook implementation
  }, []);

  return { state, setState };
};

export default useMessageChannelHandler;
import { useEffect, useCallback } from "react";

// Define MessageEvent type if not available
interface Event {
  type: string;
  target: EventTarget | null;
}
interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}

export function useMessageChannelHandler({
  onMessage,
  onError,
}: MessageChannelHandlerProps = {}) {
  const handleMessage = useCallback(
    (event: MessageEvent) => {
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
    [onMessage, onError],
  );
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);
}
