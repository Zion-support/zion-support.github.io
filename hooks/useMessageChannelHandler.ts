<<<<<<< HEAD
=======
import { useEffect, useCallback } from 'react';
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}
>>>>>>> c9abe902f4e156a854fa9adfeb4892dd1a62a086
=======
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
