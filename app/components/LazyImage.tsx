<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  sizes?: string;
  quality?: number;
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false,
  sizes = '100vw',
  quality = 75
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
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
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
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

  const optimizedSrc = `${src}?w=800&q=${quality}&f=webp`;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          ) : (
            <ImageIcon className="w-8 h-8 text-gray-400" />
          )}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs text-gray-500">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
        />
      )}
    </div>
  );
};

export default LazyImage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
}
  ]
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'};
  ];
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const benefits = [
];
'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
{/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1>
              <span>
=======
  ];
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                LazyImage
              </span>
              <br>
              <span className="text-white">Solutions</span>
            </h1>
            <p>
              Transform your business with our advanced lazyimage solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>
                Get Started
                <ArrowRight>
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More,
              </button>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>
              Key Benefits
            </h2>
            <p>
              Experience the power of our lazyimage solutions for your business.,
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p>
              Contact our experts to discuss your lazyimage needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>
                <Phone>
                Call Now
              </button>
              <button>
                <Mail>
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default LazyImagePage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
