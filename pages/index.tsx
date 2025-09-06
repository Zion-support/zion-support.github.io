import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { ErrorBoundary } from '../src/components/ErrorBoundary';

interface AnimationState {
  isLoaded: boolean;
  hasError: boolean;
}

export default function Home() {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isLoaded: false,
    hasError: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState(prev => ({ ...prev, isLoaded: true }));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (animationState.hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner" aria-labelledby="hero-title">
            <div className="max-w-4xl mx-auto">
              <h1
                id="hero-title"
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                  animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Welcome to Zion Tech Group
              </h1>
              <p
                className={`text-xl md:text-2xl text-gray-600 mb-8 transition-all duration-1000 delay-200 ${
                  animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Empowering businesses with cutting-edge technology solutions and innovative AI services.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
                  animationState.isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <Link
                  href="/services"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'AI & Machine Learning',
                    description: 'Advanced AI solutions that transform your business operations and decision-making processes.',
                    icon: '🤖'
                  },
                  {
                    title: 'Micro SaaS Products',
                    description: 'Innovative, focused software solutions designed for modern business needs.',
                    icon: '⚡'
                  },
                  {
                    title: 'IT Services',
                    description: 'Comprehensive IT solutions for enterprise-grade operations and scalability.',
                    icon: '🔧'
                  },
                  {
                    title: 'Cloud Solutions',
                    description: 'Scalable cloud infrastructure and migration services for optimal performance.',
                    icon: '☁️'
                  },
                  {
                    title: 'Cybersecurity',
                    description: 'Bank-level security measures to protect your data and systems.',
                    icon: '🛡️'
                  },
                  {
                    title: 'Data Analytics',
                    description: 'Transform your data into actionable insights with advanced analytics tools.',
                    icon: '📊'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8">
                Let's discuss how our innovative solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </section>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}