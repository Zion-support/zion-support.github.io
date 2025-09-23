import { useState, useRef, useCallback } from 'react'
;
export function useWebSocketReconnection(options: unknown ={}) {;
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const timeoutRef: unknown = useRef<NodeJS.Timeout | null>(null);
