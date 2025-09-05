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
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
