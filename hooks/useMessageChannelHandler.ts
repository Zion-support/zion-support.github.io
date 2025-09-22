import { useEffect, useCallback } from "react";

// Type definition for MessageEvent
interface MessageEvent {
  data: unknown;
  origin: string;
  source: Window | MessagePort | ServiceWorker | null;
  type: string;
}

export function useMessageChannelHandler(
  handler: (event: MessageEvent) => void,
  dependencies: unknown[] = []
) {
  const handleMessage = useCallback(handler, dependencies);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);
}