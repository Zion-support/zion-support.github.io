"use client";

import React, { Suspense } from 'react';

const ServiceCardSkeleton = () => (
  <div className="cyber-card hologram-card p-4 sm:p-6 animate-pulse">
    <div className="h-12 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded"></div>
  </div>
);

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Advanced App Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cutting-edge mobile and web applications powered by AI and modern technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  AI-Powered Solutions
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 text-center leading-relaxed">
                  Advanced artificial intelligence solutions that automate processes, enhance decision-making, and drive innovation across your organization.
                </p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Machine Learning & Deep Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Computer Vision & Image Recognition
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Predictive Analytics
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="/ai-services"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore AI Services
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  IT Infrastructure
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 text-center leading-relaxed">
                  Robust and scalable IT infrastructure solutions that ensure your systems are secure, efficient, and future-ready.
                </p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Cloud Migration & Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Cybersecurity & Data Protection
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    DevOps & Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Network Architecture & Optimization
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="/it-services"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore IT Services
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🚀</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  Micro SaaS Solutions
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 text-center leading-relaxed">
                  Specialized software-as-a-service solutions that address specific business needs with precision and efficiency.
                </p>
                <ul className="text-gray-300 text-xs sm:text-sm space-y-2 mb-4 sm:mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Custom Business Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Workflow Automation Tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Data Analytics Platforms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                    Integration & API Services
                  </li>
                </ul>
                <div className="text-center">
                  <a
                    href="/micro-saas-solutions"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore Micro SaaS
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/services"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}