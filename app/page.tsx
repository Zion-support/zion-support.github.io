'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600'></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
              Transform your business with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                📞 Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI Solutions
                </h3>
                <p className="text-gray-300">
                  Advanced machine learning, natural language processing, and computer vision solutions.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quantum Security
                </h3>
                <p className="text-gray-300">
                  Next-generation quantum-resistant encryption to protect your critical business data.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Autonomous Systems
                </h3>
                <p className="text-gray-300">
                  Self-managing and self-optimizing systems for enterprise operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI solutions can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;