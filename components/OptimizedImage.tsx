
        </div>
      </div>
    )}


    );

    if (imgRef.current) {
      observer.observe(imgRef.current)}

    return () => observer.disconnect()}, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.()};

  const handleError = () => {
    setHasError(true);
    onError?.()};

  const imageProps = {
    src,
    alt,
    quality,
    priority,
    placeholder,
    blurDataURL,
    sizes,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      objectFit,
      objectPosition,
      ...style
    }
  };

  if (fill) {
    return (
      <div
        ref={imgRef}
        className={`relative overflow-hidden ${className}`}
        style={style}
        onClick={onClick}
      >

          <svg""
            className='mx-auto h-8 w-8 mb-2'
            fill="none"""
            viewBox="0 0 24 24"""
            stroke="currentColor"
          >""
            <path""
              strokeLinecap="round"""
              strokeLinejoin="round"""
              strokeWidth={2}""
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />""
          </svg>""
          <p className="text-xs">Image failed to load</p>
        </div>

      </div>

    )}


      className={`relative overflow-hidden ${className}`}
      style={style}
      onClick={onClick}
    >
      {isLoading && (`
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">"
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>




      )}
      
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        placeholder={placeholder}"
        blurDataURL={placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined}
        sizes={sizes}

        className={`transition-opacity duration-300 ${
''
''`
          isLoading ? 'opacity-0' : 'opacity-100'``



        }`}

        style={{



          objectFit: fill ? 'cover' : 'contain'}}

      />

      {/* Loading spinner */}, {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>


        </div>
      )}


    </div>



  )};


// HOC for wrapping components with image optimization
export const withImageOptimization = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return (props: P) => (
    <Component {...props} />
  )};

