<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState, useEffect, useCallback } from 'react';

export const useMessageChannelHandler = () => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Hook implementation
  }, []);
  
  return { state, setState };
};

<<<<<<< HEAD
export default useMessageChannelHandler;
=======
export default useMessageChannelHandler;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { useEffect, useCallback } from 'react';

// Define MessageEvent type if not available
interface Event {
<<<<<<< HEAD
  type: string, target: EventTarget | null,
}

interface EventTarget {
  addEventListener(type: string, listener: (event: Event) => void): void,
  removeEventListener(type: string, listener: (event: Event) => void): void,
}

interface Window extends EventTarget {
  addEventListener(type: string, listener: (event: Event) => void): void,
  removeEventListener(type: string, listener: (event: Event) => void): void,
}

interface MessageEvent<T = unknown> extends Event {
  data: T, origin: string,
  source: Window | null,
}

interface MessageChannelHandlerProps {
  onMessage?: (message: unknown) => void, onError?: (error: Error) => void,
=======
  type: string;
  target: EventTarget | null;
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
<<<<<<< HEAD
}
>>>>>>> 7a79ab46aa7794ec396c2388b3c38de69cb877ae
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
