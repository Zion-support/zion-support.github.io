'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Neural Interface AI Revolution 2025",
      subtitle: "850% ROI with Brain-Computer Integration",
      description: "Direct neural interfaces delivering unprecedented productivity gains",
      metrics: "800% ROI • $5.2B Savings • 300% Productivity",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      title: "Fortune 500 Success Story",
      subtitle: "$1.2B Annual Savings Achieved",
      description: "Real-world implementation delivering exceptional results",
      metrics: "850% ROI • 320% Productivity • 99.7% Quality",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      title: "Implementation Master Guide",
      subtitle: "Complete Strategy to ROI",
      description: "Comprehensive guide for enterprise transformation",
      metrics: "98% Success Rate • 18-Month Implementation • 2.1-Month Payback",
      bgColor: "from-rose-900 via-pink-900 to-purple-900"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 opacity-90"></div>
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium text-white">🧠 NEURAL INTERFACE AI REVOLUTION 2025</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of Human-Computer Interaction
            </h2>
            <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
              Direct brain-computer interfaces delivering 800% ROI, 300% productivity increase, 
              and $5.2B in annual savings across Fortune 500 implementations.
            </p>
          </div>

          {/* Auto-rotating Content Showcase */}
          <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className={`bg-gradient-to-r ${slide.bgColor} rounded-xl p-8 text-white`}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                          <p className="text-xl font-semibold mb-4 text-yellow-300">{slide.subtitle}</p>
                          <p className="text-lg mb-6 opacity-90">{slide.description}</p>
                          <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                            <p className="text-sm font-medium text-yellow-200">{slide.metrics}</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-green-300">850%</div>
                            <div className="text-sm opacity-90">Average ROI</div>
                          </div>
                          <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-blue-300">$5.2B</div>
                            <div className="text-sm opacity-90">Annual Savings</div>
                          </div>
                          <div className="bg-white bg-opacity-20 rounded-lg p-4">
                            <div className="text-2xl font-bold text-purple-300">300%</div>
                            <div className="text-sm opacity-90">Productivity Increase</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4">Ultimate Enterprise Guide</h3>
              <p className="text-sm opacity-90 mb-4">
                Comprehensive guide covering neural interface technology, implementation strategies, 
                and achieving 800% ROI in enterprise environments.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>ROI:</span>
                  <span className="font-bold text-green-300">800%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reading Time:</span>
                  <span className="font-bold">22 min read</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Savings:</span>
                  <span className="font-bold text-blue-300">$5.2B</span>
                </div>
              </div>
              <Link 
                href="/blog/ai-2025-neural-interface-revolution-ultimate-guide"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Read Guide →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-4">Fortune 500 Success Story</h3>
              <p className="text-sm opacity-90 mb-4">
                Real-world case study of a Fortune 100 manufacturing giant achieving 850% ROI 
                and $1.2B in annual savings through neural interface AI transformation.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>ROI:</span>
                  <span className="font-bold text-green-300">850%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reading Time:</span>
                  <span className="font-bold">18 min read</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Savings:</span>
                  <span className="font-bold text-blue-300">$1.2B</span>
                </div>
              </div>
              <Link 
                href="/case-studies/neural-interface-ai-transformation-2025-success-story"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                View Case Study →
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-4">Implementation Master Guide</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete implementation roadmap from strategy to 850% ROI, covering planning, 
                deployment, optimization, and achieving exceptional business results.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Success Rate:</span>
                  <span className="font-bold text-green-300">98%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Reading Time:</span>
                  <span className="font-bold">35 min read</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payback:</span>
                  <span className="font-bold text-blue-300">2.1 months</span>
                </div>
              </div>
              <Link 
                href="/resources/neural-interface-ai-implementation-master-guide-2025"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Get Guide →
              </Link>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Proven Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">850%</div>
                <div className="text-white text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">$5.2B</div>
                <div className="text-white text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">300%</div>
                <div className="text-white text-sm opacity-90">Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">99.7%</div>
                <div className="text-white text-sm opacity-90">Quality Achievement</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="text-lg text-white opacity-90 mb-8 max-w-3xl mx-auto">
                Join Fortune 500 companies achieving 850% ROI with Neural Interface AI. 
                Get your free consultation and implementation strategy today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services/neural-interface-ai"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white bg-opacity-3 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolutionBanner2025;