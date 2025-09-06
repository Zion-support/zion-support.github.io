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
export function useReactId(): string {
  if (typeof (React as any).useId === "function") {
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
