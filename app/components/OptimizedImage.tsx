import React, { useState, useRef, useEffect, memo } from "react";
import Image from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  className?: string;
  lazy?: boolean;
  placeholder?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

<<<<<<< HEAD
const OptimizedImage: React.FC<OptimizedImageProps> = ({ className = '' }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>OptimizedImage | Zion Tech Group</title>
        <meta name="description" content="Professional OptimizedImage services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="OptimizedImage, AI solutions, IT services, Zion Tech Group, optimizedimage" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                OptimizedImage
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced OptimizedImage solution for modern businesses.
            </p>
            <div className="[^"]*"><button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our OptimizedImage?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our optimizedimage solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="[^"]*">{features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our optimizedimage solutions for your business.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="[^"]*">{benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">><div className="[^"]*"><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="[^"]*"><button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
            </div>
          </div>
        </section>
=======
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'webp',
  className = '',
  lazy = true,
  placeholder = true,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const optimizedSrc = src; // Simplified for now

  const placeholderSrc = placeholder && (width && height) 
    ? `data:image/svg+xml;base64,${btoa(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/></svg>`)}`
    : undefined;

  useEffect(() => {
    if (lazy && imgRef.current && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      });
      observer.observe(imgRef.current);
    }
  }, [lazy]);

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
        <div className="text-center text-gray-500">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 2h10l-4 8-3-6-2 4-3-6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Failed to load</span>
        </div>
>>>>>>> origin/main
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {placeholder && !isLoaded && placeholderSrc && (
        <Image
          src={placeholderSrc}
          alt=""
          width={width || 0}
          height={height || 0}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
      )}
      <Image
        ref={imgRef}
        src={lazy ? placeholderSrc || '/placeholder.jpg' : optimizedSrc}
        alt={alt}
        width={width || 0}
        height={height || 0}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
        quality={quality}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
