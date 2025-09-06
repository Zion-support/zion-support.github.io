import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ContactInfo, AnimationState, Service } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import PerformanceMonitor from '../components/PerformanceMonitor';

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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-400">Please refresh the page to try again.</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <Head>
        <title>Zion Tech Group - AI-Powered Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered technology solutions, micro SaaS platforms, and comprehensive IT services. Transform your business with cutting-edge technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-Powered Technology Solutions for the Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/20 hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI solutions including machine learning, natural language processing, and automation.
                </p>
                <Link href="/ai-services" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Micro SaaS</h3>
                <p className="text-gray-300 mb-4">
                  Scalable software-as-a-service solutions tailored to your specific business needs.
                </p>
                <Link href="/micro-saas" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-green-400">IT Services</h3>
                <p className="text-gray-300 mb-4">
                  Complete IT infrastructure management, cloud solutions, and technical support.
                </p>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can accelerate your growth.
            </p>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
    </ErrorBoundary>
  );
}