import React from 'react';

interface ImageOptimizerProps {
<<<<<<< HEAD
=======
  src: string;
  alt: string;
  width?: number;
  height?: number;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImageOptimizer({ className = '', children }: ImageOptimizerProps) {
=======
export default function ImageOptimizer({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false, 
  onLoad, 
  onError 
}: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}