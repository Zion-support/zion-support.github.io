<<<<<<< HEAD
=======
import { useEffect, useCallback } from 'react';
// Type definition for MessageEvent
interface MessageEvent {
  data: unknown;
}
interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}
export function useMessageChannelHandler({
  onMessage,
  onError
}: MessageChannelHandlerProps = {}) {
  const handleMessage = useCallback((event: MessageEvent) => {
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
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}
>>>>>>> main
