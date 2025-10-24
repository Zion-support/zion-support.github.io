src: string
alt: string
width?: number
height?: number
className?: string
  "data-testid"?: string
  [ke,y: string]: any,}
}
const OptimizedImage: React.FC<OptimizedImageProps /> = ({
src,alt
width = 800
height = 600
className=""
  "data-testid": testId
  ...props
}) => {
return (</OptimizedImageProps>Imagesr c={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid={testId}
      {...props} />
  )
}
;
export default OptimizedImage;</Image>