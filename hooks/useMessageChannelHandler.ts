import { useEffect, useCallback } from 'react';

interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}

export function useMessageChannelHandler({
  onMessage,
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