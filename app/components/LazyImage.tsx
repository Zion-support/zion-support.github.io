<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
import { useState, useRef, useEffect} from 'react';
import { Loader2 } from 'lucide-react';
interface LazyImageProps {
  src: string,
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}
const LazyImage: React.FC<LazyImageProps /> = ({
  src,
  alt,
  const className = '',
  placeholder,
  onLoad,;
  onError;
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement />(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [])
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }
  const handleError = () => {
    setHasError(true)
    onError?.();
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

export default function ComponentsPage() {
  return (
<<<<<<< HEAD

=======
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>;
  );
}
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
