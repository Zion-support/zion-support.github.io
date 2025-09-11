<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useState, useRef, useEffect } from './react';
import Image from './next / image';
import LoadingSpinner from "./LoadingSpinner";
;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface LazyImageProps {
interface LazyImageProps {;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  class_name?: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
<<<<<<< HEAD


export default function LazyImage(): any ({;
  src,;
  alt,;
  width,;
  height,;
  className = "",;
  priority = false,;
  placeholder = "empty",;
  blurDataURL,;
  sizes,;
  quality = 75,;
  fill = false,;
  style,;
  onLoad,;
  onError,;
}: LazyImageProps) {;
<<<<<<< HEAD
export default function LazyImage({

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}
export default function LazyImage({
<<<<<<< HEAD
  src
  alt
  width
  height
  className = ""
  priority = false
  placeholder = "empty"
  blurDataURL
  sizes
  quality = 75
  fill = false
  style
  onLoad
  onError
}: LazyImageProps) {
=======

=======
export default function LazyImage({

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL,
  sizes,
  quality = 75,
  fill = false,
  style,
  onLoad,
  onError,
}: LazyImageProps) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    if (priority) return;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
<<<<<<< HEAD
<<<<<<< HEAD
          setIsInView(true);
          observer && observer.disconnect();
        }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          setIsInView(true);
          observer && observer.disconnect();
        }

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },;
      {;
        threshold: 0 && 0.1,;
        rootMargin: "50px",;
      },;
    );
    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }
    return () => observer && observer.disconnect();
  }, [priority]);
  const handleLoad = () => {;
    setIsLoaded(true);
    onLoad?.();
  };
  const handleError = () => {;
    setHasError(true);
    onError?.();
  };
  if (hasError) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return (
      <div
        ref={imgRef}
        className={`flex items-center justify-center bg-gray-200 text-gray-500 ${className}`}
        style={style}>;
        <div className="text-center">;
          <div className="text-4xl mb-2">📷</div>;
          <div className="text-sm">Image failed to load</div>;
        </div>;
      </div>;
    );
  }
  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>;
      {!isInView && !priority && (;
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">;
          <LoadingSpinner size="sm" color="gray" />;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
      {isInView && (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      {isInView && (;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Image
  style?: React.CSSProperties;
  on_load?: () => void;
  on_error?: () => void;
}
export default /**
 * LazyImage - Function description
 */
function LazyImage() {
  const [is_loaded, setIsLoaded] = useState (false);
  const [isInView, setIsInView] = useState (priority);
  const [has_error, setHasError] = useState (false);
  const img_ref = useRef < HTMLDivElement>(null);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const observer = new IntersectionObserver (
      ([entry]) => {
        // Check condition
if ( {) {
  $2
}
          setIsInView (true);
          observer.disconnect ();
        }
      },
      {
        threshold: 0.1,
        root_margin: "50px",
      },
    );
;
    // Check condition
if ( {) {
  $2
}
      observer.observe (img_ref.current);
    }
    return () => observer.disconnect ();
  }, [priority]);
;
  const handle_load = () =>: any {
    setIsLoaded (true);
    on_load?.();
  }
;
  const handle_error = () =>: any {
    setHasError (true);
    on_error?.();
  }
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div;
        ref={img_ref}
        className={`flex items - center justify - center bg - gray - 200 text - gray - 500 ${class_name}`}
        style={style}
      >;
        <div className="text - center">;
          <div className="text - 4xl mb - 2">📷</div>;
          <div className="text - sm">Image failed to load</div>;
        </div>;
      </div>);
  }
  return (
    <div ref={img_ref} className={`relative ${class_name}`} style={style}>;
      {!isInView && !priority && (
        <div className="absolute inset - 0 flex items - center justify - center bg - gray - 100">;
          <LoadingSpinner size="sm" color="gray" />;
        </div>)}
      {isInView && (
        <Image;
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          sizes={sizes}
          quality={quality}
          on_load={handle_load}
          on_error={handle_error}
          className={`transition - opacity duration - 300 ${
            is_loaded ? "opacity - 100" : "opacity - 0";
          }`}
<<<<<<< HEAD
<<<<<<< HEAD
        />)}
    </div>);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />)}
    </div>);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}