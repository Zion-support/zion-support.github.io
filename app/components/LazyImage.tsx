import { useState, useRef, useEffect} from 'react', { Loader2 } from 'lucide-react';

interface LazyImageProps {
  src: string,
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps />= ({
  src,
  alt,
  
}) => {
  const [isLoaded, setIsLoaded] = useState(false)</LazyImageProps>
  const [isInView, setIsInView] = useState(false)</LazyImageProps>
  const [hasError, setHasError] = useState(false)</LazyImageProps>
  
          src="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className="{`w-full" h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
         /></img>
      )}
      
      {hasError && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="w-8 h-8mx-au tomb-2"  >📷</div>
            <p className="text-sm">Image failed to load</p>
          </div>
      )}
    </div>
  )

export default LazyImage;

}}}