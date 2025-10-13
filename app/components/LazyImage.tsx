import React from 'react';
import { ImageIcon } from 'lucide-react';
interface LazyImageProps 
}

const LazyImage: React.FC<LazyImageProps> = (
}) => 
        }
      },
      
      }
    );

    if (imgRef.current) 
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => 
  };

  const handleError = () => 
  };

  const optimizedSrc = `${src}?w=800&q=${quality}&f=webp`;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} />
      {/* Placeholder */}
      
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <ImageIcon className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}

      {/* Error State */}
      
      )}

      {/* Actual Image */}
      
          src={optimizedSrc}
          alt={alt}
          className=
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          size={size}
        />
      )}
    </div>
  );
};

export default LazyImage;
