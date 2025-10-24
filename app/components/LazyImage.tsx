'use client';
import React from "react";

import {useState, useRef, useEffect} from 'react';
import {Loader2} from 'lucide-react';

interface LazyImageProps {src: string,
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;}

const LazyImage: React.FC<LazyImageProps   /> = ({src,
  alt,
  const className = '',
  placeholder,
  onLoad,
  onError;}) => {const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement   />(null)
'use client'
import React, { useState, useRef, useEffect } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
  threshold?: number
  rootMargin?: string
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  onLoad,
  onError,
  threshold = 0.1,
  rootMargin = '50px'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps {}
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}
import React from 'react';

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];


      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                LazyImage
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced lazyimage solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div></div></div>
          </div>

const LazyImage: React.FC<LazyImageProps> = ({}
  src,
const LazyImage: React.FC<LazyImageProps> = ({
  src;
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2 ZyB3 aWR0 aD0 iMjAwIiBoZWlnaHQ9 IjIwMCIgeG1 sbnM9 Imh0 dHA6 Ly93 d3 cudzMub3 JnLzIwMDAvc3 ZnIj48 cmVjdCB3 aWR0 aD0 iMTAwJSIgaGVpZ2 h0 PSIxMDAlIiBmaWxsPSIjZjNmNGY2 Ii8 vPjx0 ZXh0 IHg9 IjUwJSIgeT0 iNTAlIiBkb21 pbmFudC1 iYXNlbGluZT0 ibWlkZGxlIiB0 ZXh0 LWFuY2 hvcj0 ibWlkZGxlIiBmaWxsPSIjOWNhM2 FmIiBmb250 LWZhbWlseT0 ic2 Fucy1 zZXJpZiI+TG9 hZGluZy4 uLjwvdGV4 dD48 L3 N2 Zz4=',
  onLoad,
  onError}) => {}
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);</LazyImageProps>
  const [hasError, setHasError] = useState(false);</LazyImageProps>
  const imgRef = useRef<HTMLImageElement>(null);

  const [setNode, entry] = useIntersectionObserver({)
    threshold: 0.1),
    rootMargin: '50px'),
  React.useEffect(() => {
    if (entry?.isIntersecting) {
  const [setNode, entry] = useIntersectionObserver({)}
    threshold: 0.1,
    rootMargin: '50px',

  React.useEffect(() => {}
    if (entry?.isIntersecting) {}
      setIsInView(true);
    }
  }, [entry]);

  const handleLoad = () => {}
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {}
    setHasError(true);
    onError?.();
  };

  return (<div ref={setNode} className={`relative overflow-hidden ${className}`}>{isInView && (</div><img
  return (
    <div ref={setNode} className={`relative overflow-hidden ${className}`}></img>
      {isInView && (}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${}
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading="lazy"
        >)}</img>
</img>
      {!isLoaded && !hasError && (</img>
        </img><div className="absolute inset-0 flex items-center justify-center bg-gray-200"></div>
          <img
          className={`transition-opacity duration-300 ${})
            isLoaded ? 'opacity-100' : 'opacity-0'})
          } ${className}`})
          loading="lazy")
        />)
      )}

      {!isLoaded && !hasError && (}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200"></div>
          <img;
            src={placeholder}
            alt="Loading..."
            className="w-full h-full object-cover"
          /></im>
        </div>
      )}

      {hasError && (}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"></div>
          <span>Failed to load image</span>
        </div>
      </section>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our lazyimage solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your lazyimage needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LazyImage;

      {!isInView && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <Loader2 className="w-5h-5ml-2"   /></Loader2>
        </div>
  )}

      {isInView && !isLoaded && !hasError && (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <Loader2 className="w-5h-5ml-2"   /></Loader2>
        </div>
  )}

      {isInView && (
        <img;
          src="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'}`}
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

          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) {
      onLoad()
    }
  }

  const handleError = () => {
    setHasError(true)
    if (onError) {
      onError()
    }
  }

  return (
    <div ref="{imgRef}" className="{`relative" overflow-hidden ${className}`} />
      {!isInView && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-centerjustify-center">
          <Loader2 className="w-8 h-8text-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-centerjustify-center">
          <Loader2 className="w-8 h-8text-gray-400animate-spin" />
        </div>
      )}
      
      {isInView && (
        <img
          src="{src}"
          alt="{alt}"
          onLoad="{handleLoad}"
          onError="{handleError}"
          className="{`w-full" h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        / />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-centerjustify-center">
          <div className="text-centertext-gray-400">
            <div className="w-8 h-8mx-automb-2"  >📷</div>
            <p className="text-sm">Image failed to load</p>
          </div>
      )}
    </div>
  )
}

export default LazyImage
import React from 'react';

const LazyImage: React.FC<LazyImageProps> = () => {
  return (
    <div className="lazyimage">
      <h2>LazyImage</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default LazyImage;
