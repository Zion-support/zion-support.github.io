import { useEffect, useRef, useState  } from 'react'
interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean}
}
interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  isIntersecting: boolean
  entry: IntersectionObserverEntry | undefined}
}
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions;

export default useIntersectionObserver
