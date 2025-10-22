import { useCallback, useEffect, useState, useRef } from 'react'
interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
}
export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false)
import React from 'react'
import {useEffect, useRef, useState} from 'react'
interface UseIntersectionObserverOptions {threshold?: number | number[]}
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean;}}
interface UseIntersectionObserverReturn {ref: React.RefObject<HTMLElement>,}
  isIntersecting: boolean,
  entry: IntersectionObserverEntry | undefined,}}
export function useIntersectionObserver(;)
  options: UseIntersectionObserverOptions = {,}): UseIntersectionObserverReturn {const {}
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,}} = options
const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>()
  const ref = useRef<HTMLElement>(null)
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }, [])
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(observerCallback, options)
    observer.observe(element)
    return () => {
      observer.unobserve(element)
    }
  }, [observerCallback, options])
  return {
    isVisible,
    setIsVisible,
    ref
  }
}
export default useIntersectionObserver
const observer = new IntersectionObserver(;)
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
if (entry.isIntersecting && freezeOnceVisible) {
          observer.disconnect()}},
      {threshold,
        root,
        rootMargin,}} )
observer.observe(element)
return () => {observer.disconnect()}}
  }, [threshold, root, rootMargin, freezeOnceVisible])
return {ref, isIntersecting, entry}}}
export default useIntersectionObserver