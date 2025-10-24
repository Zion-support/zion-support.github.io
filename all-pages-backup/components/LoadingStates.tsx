'use client';

import React from 'react';
import Head from "next/head";
import { Loader2, CheckCircle } from 'lucide-react';

export const PageLoader: React.FC = () => {;
  return (
    <>
<<<<<<< HEAD:all-pages-backup/components/LoadingStates.tsx
      <Helmet>;
=======
      <Helmet>
        <Head>
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/LoadingStates.tsx
        <title>LoadingStates</title>;
        <meta name=&quot;description&quot; content=&quot;Advanced LoadingStates solution for modern businesses.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, LoadingStates, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      </Head>
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              LoadingStates
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced LoadingStates solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD:all-pages-backup/components/LoadingStates.tsx
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
          <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDuration: '2s' }} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h3>
        <p className="text-gray-300">Initializing advanced AI systems...</p>
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  )};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {;
  const sizeClasses = {;
    sm: sm,
  md: 'w-6 h-6',
    lg: 'w-8 h-8'};
  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
  )};

export const LoadingDots: React.FC = () => {;
  return (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />;
    </div>
  )};

export const LoadingPulse: React.FC = () => {;
  return (
    <div className="flex space-x-1">
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />;
    </div>
  )};

export const LoadingRings: React.FC = () => {;
  return (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" />
      <div className="absolute inset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse' }} />;
    </div>
  )};

export const LoadingWaves: React.FC = () => {;
  return (
    <div className="flex space-x-1">
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="w-1 h-8 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />;
    </div>
  )};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {;
=======
      </div>
    </div>
  );
}
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4'
    md: 'w-6 h-6'
    lg: 'w-8 h-8';
  }
  return (
    <Loader2 className = {`${sizeClasses[size]} animate-spin text-blue-500`} />;
  );
}
export const LoadingDots: React.FC = () => {
  return (
    <div className="fle xspace-x-1">
      <div className="w-2h-2bg-b l ue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-2h-2bg-b l ue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-2h-2bg-b l ue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>;
  );
}
export const LoadingPulse: React.FC = () => {
  return (
    <div className="fle xspace-x-1">
      <div className="w-3h-3bg-g r adient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-3h-3bg-g r adient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-3h-3bg-g r adient-to-r from-green-500 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>;
  );
}
export const LoadingRings: React.FC = () => {
  return (
    <div className="rel ativew-16 h-16">
      <div className="abs oluteinset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin" />
      <div className="abs oluteinset-2 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" style={{ animationDirection: 'reverse' }} />
    </div>;
  );
}
export const LoadingWaves: React.FC = () => {
  return (
    <div className="fle xspace-x-1">
      <div className="w-1h-8bg-b l ue-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
      <div className="w-1h-8bg-b l ue-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
      <div className="w-1h-8bg-b l ue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
      <div className="w-1h-8bg-b l ue-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
      <div className="w-1h-8bg-b l ue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>;
  );
}
export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/LoadingStates.tsx
  return (
    <div className="spa ce-y-2">
      {Array.from({ length: lines }).map((_, index) => (
<<<<<<< HEAD:all-pages-backup/components/LoadingStates.tsx
        <div key={index} className="h-4 bg-gray-300 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }} />
      ))};
    </div>
  )};

export const LoadingCard: React.FC = () => {;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4 bg-gray-300 rounded mb-4" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded mb-2" />
      <div className="h-3 bg-gray-300 rounded w-3/4" />;
    </div>
  )};
=======
        <div key={index} className="h-4bg-gr ay-300 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }} />
      ))}
    </div>;
  );
}
export const LoadingCard: React.FC = () => {
  return (
    <div className="bg-wh iterounded-lg shadow-md p-6 animate-pulse">
      <div className="h-4bg-gr ay-300 rounded mb-4" />
      <div className="h-3bg-gr ay-300 rounded mb-2" />
      <div className="h-3bg-gr ay-300 rounded mb-2" />
      <div className="h-3bg-gr ay-300 rounded w-3/4" />
    </div>;
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4:app/components/LoadingStates.tsx
