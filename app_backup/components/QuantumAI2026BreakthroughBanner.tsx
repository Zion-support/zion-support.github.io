import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const QuantumAI2026BreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentContent, setCurrentContent] = useState(0);

  const contentItems = [
    {
      title: "AI 2026: The Quantum AI Business Revolution",
      subtitle: "$100B Market Transformation",
      metrics: "400-600% ROI improvements in 90 days",
      link: "/blog/ai-2026-quantum-ai-business-revolution",
      icon: "🚀"
    },
    {
      title: "Fortune 500 Quantum AI Transformation",
      subtitle: "$2.8B Annual Savings in 6 Months",
      metrics: "567% ROI improvement achieved",
      link: "/case-studies/quantum-ai-fortune-500-transformation-2026",
      icon: "📊"
    },
    {
      title: "Quantum AI Implementation Guide 2026",
      subtitle: "From Strategy to 567% ROI",
      metrics: "Proven framework for enterprise transformation",
      link: "/resources/quantum-ai-implementation-guide-2026",
      icon: "📋"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-sm font-medium">🚀 QUANTUM AI BREAKTHROUGH 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            The Quantum AI Revolution is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum-enhanced AI is transforming businesses with 10,000x faster processing, 
            99.9% accuracy, and unprecedented competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl font-bold text-yellow-400 mb-2 animate-bounce">10,000x</div>
            <div className="text-lg mb-4">Faster Problem Solving</div>
            <div className="text-sm opacity-80">
              Complex optimization problems solved in minutes instead of years
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl font-bold text-green-400 mb-2 animate-bounce">99.9%</div>
            <div className="text-lg mb-4">Predictive Accuracy</div>
            <div className="text-sm opacity-80">
              Unprecedented accuracy in market forecasting and risk assessment
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-bounce">567%</div>
            <div className="text-lg mb-4">ROI Achievement</div>
            <div className="text-sm opacity-80">
              Proven ROI results from quantum AI implementations
            </div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">🌟 Featured Quantum AI Content</h3>
          <div className="relative">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {contentItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`block p-6 bg-white bg-opacity-5 rounded-xl hover:bg-opacity-15 transition-all duration-300 ${
                      index === currentContent ? 'ring-2 ring-yellow-400 bg-opacity-15' : ''
                    }`}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-80 mb-3">{item.subtitle}</p>
                    <div className="text-yellow-400 font-semibold text-sm">{item.metrics}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg transform hover:scale-105"
          >
            Start Your Quantum AI Transformation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026BreakthroughBanner;