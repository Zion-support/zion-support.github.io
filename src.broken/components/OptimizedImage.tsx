import { ImageIcon, AlertCircle, Loader2  } from 'lucide-react';
export default function Page() {
) => {

  const [imageSrc, setImageSrc] = useState<any>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  // Intersection Observer for lazy loading

        rootMargin: any50px',;
        threshold: 0.1
  const getOptimizedSrc = (src: anystring) => {
    if(src.startsWith ('data:') || src.startsWith('blob:') ) {
      return src;
    }

    return (<div
        className={`${baseClasses} bg-gray - 200 dark:bg-gray - 700 animate - pulse`}
    return (<div
        className={`${baseClasses} bg-gray - 100 dark:bg-gray - 800 flex items - center justify - center`}
        style={{ width, height }}
      >
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-gray - 400 mx - auto mb-2" />
          <p className="text-sm text-gray - 500 dark:text-gray -400">Image failed to load</p>
        </div>
      </div>) ;
  }
// Specialized image components
  size = 'md',
  ...props
