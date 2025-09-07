interface OptimizedImageProps {
  sr: c: string,
  al: string,
  widt: number,
  heigh: number,
  className?: string,
  priority?: boolean,
  quality?: number,
  sizes?: string
}
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes = "100vw",
}) => {
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}