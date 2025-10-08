'use client';

import React, { useState, useCallback } from 'react';

// Loading fallback component
const LoadingFallback: React.FC<{ height?: string }> = ({
  height = 'h-32',
}) => (
  <div className={`flex items-center justify-center ${height} w-full`}>
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
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
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Leading provider of advanced AI and IT solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600">
                  Advanced machine learning and AI-powered automation
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Services</h3>
                <p className="text-gray-600">
                  Scalable cloud infrastructure and deployment solutions
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h3>
                <p className="text-gray-600">
                  Data-driven insights and business intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;