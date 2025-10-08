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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI and IT Solutions for Your Business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Cutting-edge artificial intelligence solutions to transform your business
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300">
                Scalable and secure cloud infrastructure for your enterprise
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Consulting</h3>
              <p className="text-gray-300">
                Expert guidance to help you navigate digital transformation
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
