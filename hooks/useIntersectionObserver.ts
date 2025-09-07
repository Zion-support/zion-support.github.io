import { useEffect, useRef, useState } from 'react';
interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean
}
export function useIntersectionObserver({
  threshold;
  return [setNode, entry] as const
}
