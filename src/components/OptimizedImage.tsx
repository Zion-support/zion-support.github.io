
  alt: string;

  src,
  alt,
  width = 800,
  height = 600,


  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>

      <Image

        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}

          setIsLoading(false)}}

        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);

        </div>
      )}
    </div>
  )};

export default OptimizedImage;








