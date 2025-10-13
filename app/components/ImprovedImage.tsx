import React from 'react';

interface ImprovedImageProps 
}

const ImprovedImage: React.FC<ImprovedImageProps /> = (
}) => 
        }
      },
      
      }
    );

    if (imgRef.current) 
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => 
  };

  const handleError = () => 
  };

  // Generate optimized src with quality parameter
  const getOptimizedSrc = (originalSrc: string) => 
    }
    
    // For local images, you could add optimization parameters
    // This is a placeholder - in a real app, you'd use a service like Cloudinary or Next.js Image
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
     /></div>
      {/* Placeholder */}
      
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            /></img>
          ) : (
            <ImageIcon className="w-8 h-8 text-gray-400" / />
          )}
        </div>
      )}

      {/* Error State */}
      
      )}

      {/* Actual Image */}
      
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          size={size}
          loading={lazy && !priority ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          className=
          }`}
          style=
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto'
          }}
        /></img>
      )}

      {/* Loading Spinner */}
      
      )}
    </div>
  );
};

// Preload component for critical images
export const PreloadImage: React.FC<{ src: string; as?: string }> = (
}) => 
    };
  }, [src, as]);

  return null;
};

// Image with blur placeholder
export const BlurImage: React.FC<ImprovedImageProps & { blurDataURL?: string } /> = (
}) => 
      {...props}
      placeholder={blurDataURL}
    /></ImprovedImage>
  );
};

export default ImprovedImage;
