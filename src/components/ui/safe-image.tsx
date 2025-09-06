
import { ImageIcon } from 'lucide-react'
interface SafeImageProps {;
  src: string;
  alt: string;  width?: number;interface SafeImageProps {


    }
  }

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img"
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }

  );        aria-label={alt}

      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }

=======




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    />
  ); return (
        aria-label = {alt,}>;
        <ImageIcon className='w-6 h-6' />      </div>;
    );
  }


    />;
  );        aria-label={alt}
      >;
        <ImageIcon className="w-6 h-6" />;
      </div>;
    );
  }


    />;
  );  return (


    <Image
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}
<<<<<<< HEAD
    />
  )

}

