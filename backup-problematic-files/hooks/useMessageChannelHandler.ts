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
  const handleMessage = useCallback(
    (event: MessageEvent<unknown>) => {
      try {
        // Check condition
if ( {) {
  $2
}
          on_message (event.data);
        }
      } catch (error) {
        // Check condition
if ( {) {
  $2
}
          on_error (error as Error);
        }
      }
    } catch (error) {
      if (onError) {
        onError(error as Error);
      }
    }
    [onMessage, onError]
  );
  useEffect(() => {
