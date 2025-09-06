<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect,useCallback } from 'react, interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void, onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]), useEffect(() => { window.addEventListener('message',handleMessage), return () => { window.removeEventListener(message',handleMessage)}},[handleMessage])};
,
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
// Type definition for MessageEvent
interface MessageEvent {
  data: unknown;
}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
// Type definition for MessageEvent
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
interface MessageEvent {
  data: unknown;
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void;
  onError?: (error: Error) => void;
}
<<<<<<< HEAD
export function useMessageChannelHandler({
  onMessage,
>>>>>>> main
  onError
=======

export function useMessageChannelHandler({
  onMessage,
<<<<<<< HEAD
<<<<<<< HEAD
  onError,
=======
>>>>>>> main
=======
  onMessage;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  onError
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
}: MessageChannelHandlerProps = {}) {
=======
  onError,}: MessageChannelHandlerProps = {}) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleMessage = useCallback((event: MessageEvent<unknown>) => {
    try {
      if (onMessage) {;
        onMessage(event.data);
      }
<<<<<<< HEAD
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
=======
    },
    [onMessage, onError],
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
<<<<<<< HEAD
      window.removeEventListener("message", handleMessage);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    };
  }, [handleMessage]);
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
      window.removeEventListener("message", handleMessage)
};
  }, [handleMessage]);
}
import { useEffect,useCallback } from 'react'; interface MessageEvent { data: unknown} interface MessageChannelHandlerProps { onMessage?: (message: unknown) => void; onError?: (error: Error) => void} export function useMessageChannelHandler({ onMessage,onError }: MessageChannelHandlerProps = {}) { const handleMessage = useCallback((event: MessageEvent) => { try { if (onMessage) { onMessage(event.data)} } catch (error) { if (onError) { onError(error as Error)} } },[onMessage,onError]); useEffect(() => { window.addEventListener('message',handleMessage); return () => { window.removeEventListener('message',handleMessage)}},[handleMessage])}>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
