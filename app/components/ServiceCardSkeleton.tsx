<<<<<<< HEAD
'use client';
import { Metadata } from 'next';
import React from 'react'
import  Helmet  from 'react-helmet-async'
import Navigation  } from '/components/Navigation'
import EnhancedFooter from '/components/EnhancedFooter'

const ServiceCardSkeleton: React.FC = () => {
  return (
    <>
    
  </>
      <Helmet></Helmet>
        <title>ServiceCardSkeleton</title>
        <meta name="description" content="Advanced ServiceCardSkeleton solution for modern businesses." /></meta>
        <meta name="keywords" content="AI, artificial intelligence, ServiceCardSkeleton, AI solutions, intelligent automation" /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}</div>
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              ServiceCardSkeleton</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Advanced ServiceCardSkeleton solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"></button>
                Get Started</button>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
                Learn More</button>
              </button>
            </div>
          </div>
        </section>,
,
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Discover the powerful features that make ServiceCardSkeleton the perfect solution for your business.</p>
              </p>
            </div>
            <div className="grid md:grid-cols-2 l,
  g:grid-cols-4 gap-8"></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">Advanced AI algorithms for intelligent automation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                <p className="text-gray-300">Grows with your business needs and requirements.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure</h3>
                <p className="text-gray-300">Enterprise-grade security and data protection.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                <h3 className="text-xl font-semibold text-white mb-3">Efficient</h3>
                <p className="text-gray-300">Optimized performance for maximum productivity.</p>
              </div>
            </div>
          </div>
        </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join thousands of businesses already using ServiceCardSkeleton to transform their operations.</p>
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"></button>
              Start Your Free Trial</button>
            </button>
          </div>
        </section>
      </div>
      <EnhancedFooter /></Footer>
    </>
;
=======
import React from 'react';

interface ServiceCardSkeletonProps {
  showImage?: boolean;
  showButton?: boolean;
  lines?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  showImage = true,
  showButton = true,
  lines = 3,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}>
      {/* Image skeleton */}
      {showImage && (
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      )}
      
      {/* Icon skeleton */}
      <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${
              index === lines - 1 ? 'w-2/3' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
      
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      )}
    </div>
>>>>>>> origin/main
  );
};

export default ServiceCardSkeleton;
