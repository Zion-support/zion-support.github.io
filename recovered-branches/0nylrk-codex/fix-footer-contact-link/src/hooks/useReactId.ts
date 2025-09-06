/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
  if (typeof (React as any).useId === &quot;function&quot;) {
    return (React as any).useId()
  }
