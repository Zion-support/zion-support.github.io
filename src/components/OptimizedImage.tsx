import { ImageIcon, AlertCircle, Loader2  } from 'lucide-react';
export default function Page("props": "any) {;
) => {;
  const [imageSrc", setImageSrc] = useState<any>(src);  const [isLoading, setIsLoading] = useState<any>(true);
  const [hasError, setHasError] = useState<any>(false);
;
  // Intersection Observer for lazy loading  // Intersection Observer for lazy loading      }) ;
;
  // Intersection Observer for lazy loading  // Intersection Observer for lazy loading      }
    );    observerRef.current.observe(imgRef.current) ;
;
    return () => {;
      if(observerRef.current) {;
        observerRef.current.disconnect()}
    }}, [priority, lazy]) ;
;
  // Handle image load;
  ;
    setIsLoaded(true) ;
    onLoad?.() };
;
  // Handle image error;
  ;