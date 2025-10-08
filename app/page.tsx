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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-bold"
              >
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="inline-flex items-center px-8 py-4 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-300 font-bold"
              >
                📞 (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Solutions',
                  description: 'Advanced machine learning and AI implementations',
                  icon: '🤖'
                },
                {
                  title: 'Quantum Computing',
                  description: 'Next-generation quantum algorithms',
                  icon: '⚛️'
                },
                {
                  title: 'Autonomous Systems',
                  description: 'Self-managing enterprise operations',
                  icon: '🔄'
                },
                {
                  title: 'Business Intelligence',
                  description: 'Data-driven insights and analytics',
                  icon: '📊'
                },
                {
                  title: 'Cloud Services',
                  description: 'Scalable cloud infrastructure',
                  icon: '☁️'
                },
                {
                  title: 'Digital Transformation',
                  description: 'Complete business modernization',
                  icon: '🚀'
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to learn how we can help transform your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-bold text-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;