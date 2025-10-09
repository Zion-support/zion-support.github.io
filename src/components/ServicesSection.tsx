'use client';
import React, { Suspense, memo } from 'react';

// Loading skeleton component;
const ServiceCardSkeleton: React.FC = memo(() => (
  <div>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'
const ServicesSection: React.FC = () => {
  return (
    <section className="mb-16" aria-labelledby="services-heading">
      <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Our Services</h2>
      <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">Comprehensive AI and IT solutions designed to transform your business operations</p>
      
      {/* Primary Services Grid */}
      <div>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="quantum-card p-4 sm:p-6 energy-pulse">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month</div>
              <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
        
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="quantum-card p-4 sm:p-6 energy-pulse">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Revolutionary AI-powered marketing automation, ad optimization, and content generation.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month</div>
              <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
        
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="quantum-card p-4 sm:p-6 energy-pulse">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Intelligent automation of business processes with decision-making capabilities and exception handling.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month</div>
              <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
      </div>
      {/* Secondary Services Grid */}
      <div>
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
              <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
        
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
              <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
        
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Next-generation quantum computing solutions for complex problem-solving and optimization.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Starting at $2,999/month</div>
              <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
        
        <Suspense fallback={<ServiceCardSkeleton />}>
          <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Autonomous Systems</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
              Self-managing systems that adapt and optimize themselves for maximum efficiency and performance.
            </p>
            <div>
              <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">Starting at $1,799/month</div>
              <a href="/autonomous-systems" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                Learn More →
              </a>
            </div>
          </article>
        </Suspense>
      </div>
    </section>);
}
export default ServicesSection