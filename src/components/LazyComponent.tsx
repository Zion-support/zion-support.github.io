import React, { Suspense, lazy, ComponentType, ReactNode } from 'react'

interface LazyComponentProps {
  fallback?: ReactNode
  children: ReactNode
}

// Loading fallback component
const LoadingFallback: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => (
  <div className="lazy-loading-fallback">
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
    <p>{message}</p>
  </div>
)

// Lazy wrapper component
export const LazyWrapper: React.FC<LazyComponentProps> = ({ 
  fallback = <LoadingFallback />, 
  children 
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
)

// Higher-order component for lazy loading
export function withLazyLoading<P extends object>(
  Component: ComponentType<P>,
  fallback?: ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
}

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false)
  const [hasIntersected, setHasIntersected] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options, hasIntersected])

  return { isIntersecting, hasIntersected }
}

// Lazy image component
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  placeholder?: string
  fallback?: string
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=',
  ...props
}) => {
  const [imageSrc, setImageSrc] = React.useState(placeholder)
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)
  const imgRef = React.useRef<HTMLImageElement>(null)
  const { hasIntersected } = useIntersectionObserver(imgRef)

  React.useEffect(() => {
    if (hasIntersected && !hasError) {
      const img = new Image()
      img.onload = () => {
        setImageSrc(src)
        setIsLoading(false)
      }
      img.onerror = () => {
        setImageSrc(fallback)
        setIsLoading(false)
        setHasError(true)
      }
      img.src = src
    }
  }, [hasIntersected, src, fallback, hasError])

  return (
    <div ref={imgRef} className="lazy-image-container">
      <img
        {...props}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${isLoading ? 'loading' : 'loaded'} ${hasError ? 'error' : ''}`}
        loading="lazy"
      />
      {isLoading && (
        <div className="lazy-image-overlay">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </div>
  )
}

// Lazy section component
interface LazySectionProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <LoadingFallback message="Loading section..." />,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const { hasIntersected } = useIntersectionObserver(sectionRef, { threshold, rootMargin })

  React.useEffect(() => {
    if (hasIntersected) {
      setIsVisible(true)
    }
  }, [hasIntersected])

  return (
    <section ref={sectionRef} className="lazy-section">
      {isVisible ? children : fallback}
    </section>
  )
}

export default LazyWrapper