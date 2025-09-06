<<<<<<< HEAD
import * as React from 'react';

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
export function useReactId(): string {
  if (typeof (React as any).useId === 'function') {
    return (React as any).useId();
  }

  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {
    idRef.current = Math.random().toString(36).slice(2);
  }
  return idRef.current;
}
=======
import * as React from "react" /** * React 18 introduced `useId` for generating unique IDs. If an older * React version is used where `useId` is unavailable, this hook provides * a small fallback that mimics the API using `useRef`. */ const idRef = React.useRef<string | null> (null) if (idRef.current === null) {
  idRef.current = Math.random () .toString (36) .slice (2) 
}return idRef.current 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
