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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
  }
export default function LazyImage() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
      {!isInView && (
        <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <Loader2 className="w-5h-5ml-2" /></Loader2>
        </div>
      )}
      {isInView && !isLoaded && !hasError && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <Loader2 className="w-5h-5ml-2" /></Loader2>
        </div>
      )}
      {isInView && (;
        <img;
          src = "{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
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
    <>
      <Helmet >
        <title>Lazy Image - Zion Tech Group</title>
        <meta name="description" content="Professional lazy image by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Lazy Image</h1>
          <p className="text-lg text-gray-300 mb-8">Professional lazy image coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
}