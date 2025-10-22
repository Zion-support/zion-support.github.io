import React from 'react'
import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  isIntersecting: boolean
  entry: IntersectionObserverEntry | undefined
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>()
  const ref = useRef<HTMLElement>(null)

  const frozen = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
        setIsIntersecting(entry.isIntersecting)

        if (entry.isIntersecting && freezeOnceVisible) {
          frozen.current = true
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return {
    ref,
    isIntersecting: frozen.current ? true : isIntersecting,
    entry
  }
}