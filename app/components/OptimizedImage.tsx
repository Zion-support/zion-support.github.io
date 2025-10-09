interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src, alt,
  width,
  height,
  className = '',
  priority = false;
}) => {
  return (
    <img aria-label="Image"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto'
      }}
    />
  )
}
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default OptimizedImage;