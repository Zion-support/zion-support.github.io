<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:app/components/InteractivePromotionalSection.tsx
'use client';
=======
"use client";
>>>>>>> origin/cursor/create-and-deploy-new-content-839d:components/InteractivePromotionalSection.tsx

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InteractivePromotionalSection() {
  const [currentPromotion, setCurrentPromotion] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotions = [
    {
      id: 1,
      title: "🚀 AI Revolution 2025: Transform Your Business",
      description: "Get 300% ROI with our proven AI implementation framework. Limited time offer - 20% off AI consulting services.",
      cta: "Get Free AI Assessment",
      link: "/services/ai-consulting",
      bgColor: "from-blue-600 to-indigo-600",
      badge: "Limited Time",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      title: "⚡ Supply Chain AI: 60% Cost Reduction",
      description: "See how Fortune 500 companies save $12M annually with AI-powered supply chain optimization.",
      cta: "View Case Study",
      link: "/case-studies/ai-supply-chain-optimization-2025",
      bgColor: "from-green-600 to-emerald-600",
      badge: "Success Story",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      title: "🤖 Autonomous Agents: 99.9% Uptime",
      description: "Deploy self-managing AI agents that reduce operational costs by 85% while improving efficiency.",
      cta: "Explore AI Agents",
      link: "/services/autonomous-agents",
      bgColor: "from-purple-600 to-pink-600",
      badge: "New Technology",
      badgeColor: "bg-purple-500"
    },
    {
      id: 4,
      title: "📊 Enterprise AI Platform: 90% Faster Insights",
      description: "Transform your data into actionable insights with our comprehensive AI analytics platform.",
      cta: "Start Free Trial",
      link: "/services/ai-analytics-platform",
      bgColor: "from-teal-600 to-cyan-600",
      badge: "Free Trial",
      badgeColor: "bg-teal-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const currentPromo = promotions[currentPromotion];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-teal-500 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Cutting-Edge AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies achieving unprecedented results with our AI solutions
          </p>
        </div>

        {/* Interactive promotional carousel */}
        <div className="relative">
          <div className={`bg-gradient-to-r ${currentPromo.bgColor} rounded-2xl p-8 shadow-2xl transition-all duration-500 transform hover:scale-105`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className={`${currentPromo.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {currentPromo.badge}
                </span>
                <div className="flex space-x-1">
                  {promotions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPromotion(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentPromotion ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Toggle promotion visibility"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  {currentPromo.title}
                </h3>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  {currentPromo.description}
                </p>
                <Link
                  href={currentPromo.link}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  {currentPromo.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Why Choose Zion Tech Group?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>500+ successful AI implementations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>300% average ROI in 12 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>24/7 expert support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/services/ai-consulting"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold group-hover:text-blue-400 transition-colors">AI Strategy</div>
          </Link>
          <Link
            href="/services/ai-implementation"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="text-2xl mb-2">⚙️</div>
            <div className="font-semibold group-hover:text-green-400 transition-colors">Implementation</div>
          </Link>
          <Link
            href="/case-studies"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="text-2xl mb-2">📊</div>
            <div className="font-semibold group-hover:text-purple-400 transition-colors">Case Studies</div>
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="text-2xl mb-2">📞</div>
            <div className="font-semibold group-hover:text-teal-400 transition-colors">Contact Us</div>
          </Link>
=======
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-5658
import React from 'react';
import Link from 'next/link';

export default function InteractivePromotionalSection() {
  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive AI tools and calculators to understand the potential 
            impact on your business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI ROI Calculator
            </h3>
            <p className="text-gray-600 mb-6">
              Calculate the potential return on investment for your AI transformation 
              with our interactive ROI calculator.
            </p>
            <Link
              href="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Try Calculator
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI Readiness Assessment
            </h3>
            <p className="text-gray-600 mb-6">
              Evaluate your organization's readiness for AI implementation with our 
              comprehensive assessment tool.
            </p>
            <Link
              href="/services"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Assessment
            </Link>
          </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-f7bf
=======
    <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Interactive AI Solutions & Tools
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our interactive AI tools and calculators to discover your transformation potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="text-xl font-bold mb-3">AI ROI Calculator</h3>
            <p className="text-sm opacity-90 mb-4">
              Calculate your potential AI transformation ROI in minutes with our interactive calculator.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Calculate ROI →
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">AI Readiness Assessment</h3>
            <p className="text-sm opacity-90 mb-4">
              Evaluate your organization's AI readiness with our comprehensive assessment tool.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Assessment →
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">AI Strategy Planner</h3>
            <p className="text-sm opacity-90 mb-4">
              Get personalized AI strategy recommendations based on your industry and goals.
            </p>
            <button className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Plan Strategy →
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg opacity-90 mb-6">
              Get a free consultation with our AI experts to discover your transformation potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-5658
        </div>
      </div>
    </section>
  );
}