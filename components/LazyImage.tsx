>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import React, { useState, useRef, useEffect } from './react';
import Image from './next / image';
import LoadingSpinner from "./LoadingSpinner";
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
=======  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}
export default function LazyImage({
=======
export default function LazyImage({
=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    if (priority) return;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true);
          observer && observer.disconnect();
        }

      {isInView && (;

}