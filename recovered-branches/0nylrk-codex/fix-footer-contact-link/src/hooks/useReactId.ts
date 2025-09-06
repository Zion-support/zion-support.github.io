<<<<<<< HEAD
import * as React from &quot;react&quot;
=======
import * as React from "react"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
<<<<<<< HEAD
}

export function useReactId(): string {
=======
<<<<<<< HEAD
export function useReactId(): string {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  if (typeof (React as any).useId === &quot;function&quot;) {
=======
export function useReactId(): string {
  if (typeof (React as any).useId === "function") {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    return (React as any).useId()
  }
<<<<<<< HEAD
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {idRef.current = Math.random().toString(36).slice(2);
  }
  return idRef.current;
}
=======
;
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {;
    idRef.current = Math.random().toString(36).slice(2);
  }
  return idRef.current;
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
