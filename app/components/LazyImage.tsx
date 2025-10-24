import React from 'react';
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const LazyImage: React.FC = ($2) => {

$3};
        <section className="relative py-20 px-4 overflow-hidden"> </section><div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center"> </div><h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,
              LazyImage
            </h1>
            <p>Advanced LazyImage solution for modern businesses.</p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">,
                Get Started
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">,
                Learn More
              </button>
            
          
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"> </section><div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>Discover the powerful features that make LazyImage the perfect solution for your business.</p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">,
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"> </div><h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
                </div>
              </div>
        </div>
      </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"> </section><div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p>Join thousands of businesses already using LazyImage to transform their operations.</p>
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Your Free Trial
            
            </button>
          </div>
        </section>
        </div>
      </Footer>
      </div>

      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current)}

    return () => observer.disconnect();


  const handleLoad = () => {

    setIsLoaded(true);
    onLoad?.()};

  const handleError = () => {

    setHasError(true);
    onError?.()};

  return (
    
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}></div>
      {!isLoaded && !hasError && (
        <img;
          src={placeholder}
          alt="";
          className="absolute inset-0 w-full h-full object-cover blur-sm"
        />
      )}
      {isInView && (
        <img;
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      {hasError && (
        <div className="..."></div>
          Failed to load
        </div>
      )}
    </div>
  )};

export default LazyImage;