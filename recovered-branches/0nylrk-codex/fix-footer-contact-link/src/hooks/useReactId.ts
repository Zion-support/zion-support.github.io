import * as React from "react"

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
<<<<<<< HEAD
export function useReactId(): string {;
  if (typeof (React as any).useId === &quot;function&quot;) {
=======
export function useReactId(): string {
  if (typeof (React as any).useId === "function") {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    return (React as any).useId()
  }
;
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {;
    idRef.current = Math.random().toString(36).slice(2);
  }
  return idRef.current;
}
;