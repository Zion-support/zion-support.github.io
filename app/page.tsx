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
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Advanced AI and IT Solutions for Enterprise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  onClick={handlePhoneClick}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Core Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🤖',
                  title: 'AI Solutions',
                  description: 'Advanced machine learning and AI-powered solutions for enterprise.',
                },
                {
                  icon: '🔒',
                  title: 'Quantum Security',
                  description: 'Next-generation quantum encryption and security solutions.',
                },
                {
                  icon: '📊',
                  title: 'Business Intelligence',
                  description: 'Data-driven insights and analytics for strategic decision making.',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our team to discuss your AI and IT needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;