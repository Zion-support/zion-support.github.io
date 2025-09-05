<<<<<<< HEAD
import * as React from "react";
;
/**;
 * React 18 introduced `useId` for generating unique IDs. If an older;
 * React version is used where `useId` is unavailable, this hook provides;
 * a small fallback that mimics the API using `useRef`.;
 */;
export function useReactId():string {;
  if (typeof (React as any).useId === "function") {;
    return (React as any).useId();
  }
;
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {;
    idRef.current = Math.random().toString(36).slice(2);
  }
  return idRef.current;
=======
import * as React from &quot;react&quot;

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
export function useReactId(): string {
  if (typeof (React as any).useId === &quot;function&quot;) {
    return (React as any).useId()
  }
  const _idRef = React.useRef<string | null>(null)
  if (idRef.current === null) {_idRef.current = Math.random().toString(36).slice(2)}
  return idRef.current
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
