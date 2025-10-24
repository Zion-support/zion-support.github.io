'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>LoadingStates</title>
        <meta name="description" content="Advanced LoadingStates solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, LoadingStates, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              LoadingStates
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced LoadingStates solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md: grid-cols-2 l,
  g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
        </section>
      </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <div>
  );
};

export const LoadingDots: React.FC = () => {
  return (
    <div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDela,
  y: '0s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>
  );
};

export const LoadingPulse: React.FC = () => {
  return (
    <div>
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDela,
  y: '0s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const LoadingRings: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" />
      <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDirectio,
  n: 'reverse' }} />
    </div>
  );
};

export const LoadingWaves: React.FC = () => {
  return (
    <div>
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDela,
  y: '0s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }} />
      ))}
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div>
      <div className="h-4 bg-gray-300 rounded mb-4" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded w-3/4" />
    </div>
  );
};