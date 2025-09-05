import * as React from &quot;react&quot;

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
<<<<<<< HEAD
export function useReactId(): string {
  if (typeof (React as any).useId === &quot;function&quot;) {
    return (React as any).useId()
  }
=======
export function useReactId(): string {_if (typeof (React as any).useId === "function") {
    return (React as any).useId()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _idRef = React.useRef<string | null>(null)
  if (idRef.current === null) {_idRef.current = Math.random().toString(36).slice(2)}
  return idRef.current
}
