'use client';

import React, { useState, useEffect, Suspense, memo } from 'react';
import { Navigation } from './components/Navigation';

import { Footer } from './components/Footer';
import { ContentPromotionBanner } from './components/ContentPromotionBanner';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (

  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card>
    <div className="h-4 bg-gray-300 rounded mb-4></div>
    <div className="h-3 bg-gray-300 rounded mb-2></div>
    <div className="h-3 bg-gray-300 rounded></div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton;

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const timer = setTimeout(() => setIsVisible(true), 100);;

    return () => clearTimeout(timer);

  }, []);

  const handlePhoneClick = () => {;;

    // Analytics tracking
    if (typeof window !== 'undefined && window.gtag) {
      window.gtag('event', 'phone_click, {
        event_category: 'engagement,
        event_label: header_phone
      });

    }

  };

  return (

    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Navigation */}

        <Navigation />
        
        {/* Skip to main content for accessibility */}

        <a
          href="#main-content
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}

        <Suspense fallback={<div>Loading...</div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main>
          {/* Hero Section */}

          <section
            className={text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0 
                : opacity-0 translate-y-8
            }}

            aria-labelledby="hero-heading
          >
            <div className="max-w-6xl mx-auto>
              <h1 
                id="hero-heading 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle>
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed>
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
            </div>
          </div>
        </section>
        {/* Services Section */}

        <section className="mb-16" aria-labelledby="services-heading></section>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text></h2>
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4></p>
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          {/* Primary Services Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line></di>🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text></h>AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text></di>Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line></di>📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text></h>AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text></di>Starting at $199/month</div>
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line></di>⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text></h>AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text></di>Starting at $399/month</div>
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          {/* Secondary Services Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Healthcare</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2></di>Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Fintech</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2></di>Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>⚛️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>Quantum Computing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2></di>Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
          {/* Micro SAAS Services Grid */}

          <div className="mb-12></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text></h3>
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>💻</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI-Powered CRM</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2></di>$149/month</div>
                    <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>📊</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Analytics Dashboard</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2></di>$199/month</div>
                    <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>✍️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Content Studio</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2></di>$299/month</div>
                    <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Chatbot Builder</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2></di>$99/month</div>
                    <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>📧</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Email Marketing</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2></di>$179/month</div>
                    <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>📱</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Mobile App Builder</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2></di>$399/month</div>
                    <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>🔍</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI SEO Optimizer</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2></di>$129/month</div>
                    <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center></di>💰</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center></h>AI Invoice Generator</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base></p>
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  </p>
                  <div className="text-center></div>
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2></di>$79/month</div>
                    <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base></a>
                      Learn More →
                    </a>
                  </div>
                </article>
              </Suspense>
            </div>
          </div>
          {/* IT Services & Infrastructure */}

          <div className="mb-12></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text></h3>
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>☁️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>Cloud Migration</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2></di>$1,299/month</div>
                  <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🔒</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>Cybersecurity Suite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2></di>$799/month</div>
                  <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>⚙️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>DevOps & CI/CD</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2></di>$599/month</div>
                  <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🗄️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>Database Management</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2></di>$399/month</div>
                  <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🌐</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>Network Solutions</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2></di>$699/month</div>
                  <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📱</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>Mobile App Development</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2></di>$1,999/month</div>
                  <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🛠️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>IT Consulting</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Strategic IT planning, technology assessment, and digital transformation consulting.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2></di>$299/hour</div>
                  <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>IT Support & Maintenance</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2></di>$499/month</div>
                  <a href="/it-support" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* New AI Services Grid */}

          <div className="mb-12></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text></h3>
              Advanced AI Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>💬</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Customer Support</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2></di>Starting at $199/month</div>
                  <a href="/ai-customer-support" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📈</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Sales Automation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2></di>Starting at $299/month</div>
                  <a href="/ai-sales-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>⚡</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Workflow Automation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2></di>Starting at $99/month</div>
                  <a href="/ai-workflow-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Data Visualization</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2></di>Starting at $149/month</div>
                  <a href="/ai-data-visualization" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🎯</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Lead Generation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2></di>Starting at $199/month</div>
                  <a href="/ai-lead-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🔍</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4></h>AI Document Processing</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                </p>
                <div className="text-center></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2></di>Starting at $149/month</div>
                  <a href="/ai-document-processing" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Emerging Technologies Grid */}

          <div className="mb-12></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text></h3>
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🤖</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Robotics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2></di>Custom Pricing</div>
                  <a href="/robotics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🌐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>IoT & Edge</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-green-400 mb-2></di>Starting at $499/month</div>
                  <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🔗</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Blockchain & Web3</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2></di>Starting at $699/month</div>
                  <a href="/blockchain-web3" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🧠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Business Intelligence</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-pink-400 mb-2></di>Starting at $399/month</div>
                  <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* IT Services Grid */}

          <div className="mb-12></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text></h3>
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🛠️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>DevOps & CI/CD</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-blue-400 mb-2></di>Starting at $299/month</div>
                  <a href="/devops" className="text-blue-400 hover:text-blue-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Mobile Development</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2></di>Starting at $1,299/month</div>
                  <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🗄️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Database Services</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-teal-400 mb-2></di>Starting at $199/month</div>
                  <a href="/database" className="text-teal-400 hover:text-teal-300 font-medium text-sm></a>
                    Learn More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
          {/* Micro SAAS Solutions Section */}

        <section className="mb-16" aria-labelledby="micro-saas-heading>
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text>
            Micro SAAS Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4>
            Affordable, powerful AI-driven tools for modern businesses. 100+ ready-to-use applications with real market value.
          </p>          {/* Productivity Tools */}

          <div className="mb-12></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text></h3>
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>AI Writing Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-blue-400 mb-2></di>$29/month</div>
                  <a href="/ai-writing-assistant" className="text-blue-400 hover:text-blue-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Smart Analytics</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-green-400 mb-2></di>$49/month</div>
                  <a href="/smart-analytics" className="text-green-400 hover:text-green-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>AI Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-purple-400 mb-2></di>$19/month</div>
                  <a href="/ai-scheduler" className="text-purple-400 hover:text-purple-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Expense Tracker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2></di>$15/month</div>
                  <a href="/expense-tracker" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Task Manager Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2></di>$39/month</div>
                  <a href="/task-manager-pro" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>CRM Lite</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-pink-400 mb-2></di>$59/month</div>
                  <a href="/crm-lite" className="text-pink-400 hover:text-pink-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Email Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2></di>$25/month</div>
                  <a href="/email-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Social Media Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-orange-400 mb-2></di>$45/month</div>
                  <a href="/social-media-manager" className="text-orange-400 hover:text-orange-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Project Management AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Intelligent project management with AI task prioritization, resource allocation, and timeline optimization.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-indigo-400 mb-2>$89/month</div>
                  <a href="/project-management-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>💬</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>AI Meeting Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Automated meeting transcription, action item extraction, and intelligent follow-up scheduling.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-purple-400 mb-2>$67/month</div>
                  <a href="/ai-meeting-assistant" className="text-purple-400 hover:text-purple-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>AI Financial Planner</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Personal and business financial planning with AI insights, budget optimization, and investment recommendations.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-green-400 mb-2>$129/month</div>
                  <a href="/ai-financial-planner" className="text-green-400 hover:text-green-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Marketing & Sales Tools */}

          <div className="mb-12></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text></h3>
              Marketing & Sales Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🎨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>AI Design Studio</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-pink-400 mb-2></di>$35/month</div>
                  <a href="/ai-design-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Landing Page Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-blue-400 mb-2></di>$29/month</div>
                  <a href="/landing-page-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>SEO Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-green-400 mb-2></di>$49/month</div>
                  <a href="/seo-optimizer" className="text-green-400 hover:text-green-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Ad Campaign Manager</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2></di>$79/month</div>
                  <a href="/ad-campaign-manager" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Lead Scoring AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Intelligent lead scoring and qualification with AI-powered prospect analysis and conversion prediction.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-pink-400 mb-2>$95/month</div>
                  <a href="/lead-scoring-ai" className="text-pink-400 hover:text-pink-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Email Sequence Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered email sequence creation with personalization, A/B testing, and automated follow-ups.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-blue-400 mb-2>$59/month</div>
                  <a href="/email-sequence-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Conversion Rate Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-driven conversion optimization with heatmap analysis, user behavior tracking, and A/B testing.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-cyan-400 mb-2>$149/month</div>
                  <a href="/conversion-rate-optimizer" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Developer Tools */}

          <div className="mb-12></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text></h3>
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>💻</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Code Assistant</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2></di>$39/month</div>
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>API Builder</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2></di>$59/month</div>
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>🐛</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Bug Tracker Pro</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-red-400 mb-2></di>$25/month</div>
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4></di>📚</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4></h>Doc Generator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base></p>
                  Automatically generate technical documentation, API docs, and user guides from code.
                </p>
                <div className="text-center></div>
                  <div className="text-lg font-bold text-purple-400 mb-2></di>$19/month</div>
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Code Review AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Automated code review with security analysis, performance optimization, and best practice suggestions.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-red-400 mb-2>$79/month</div>
                  <a href="/code-review-ai" className="text-red-400 hover:text-red-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>⚡</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Performance Monitor</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Real-time application performance monitoring with AI-powered insights and automated alerting.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-yellow-400 mb-2>$99/month</div>
                  <a href="/performance-monitor" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🔒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Security Scanner</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Automated security vulnerability scanning with AI-powered threat detection and remediation suggestions.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-orange-400 mb-2>$129/month</div>
                  <a href="/security-scanner" className="text-orange-400 hover:text-orange-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Healthcare & Medical Tools */}

          <div className="mb-12>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text>
              Healthcare & Medical Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🏥</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Medical Records AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered medical record management with automated data extraction and patient insights.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-green-400 mb-2>$199/month</div>
                  <a href="/medical-records-ai" className="text-green-400 hover:text-green-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>💊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Drug Interaction Checker</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered drug interaction analysis with real-time safety alerts and dosage recommendations.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-blue-400 mb-2>$149/month</div>
                  <a href="/drug-interaction-checker" className="text-blue-400 hover:text-blue-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🩺</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Symptom Analyzer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered symptom analysis with preliminary diagnosis suggestions and healthcare provider recommendations.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-purple-400 mb-2>$179/month</div>
                  <a href="/symptom-analyzer" className="text-purple-400 hover:text-purple-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Appointment Scheduler</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Intelligent appointment scheduling with patient preferences, provider availability, and automated reminders.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-cyan-400 mb-2>$89/month</div>
                  <a href="/appointment-scheduler" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* E-commerce & Retail Tools */}

          <div className="mb-12>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text>
              E-commerce & Retail Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🛒</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Inventory Optimizer</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered inventory management with demand forecasting, stock optimization, and automated reordering.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-orange-400 mb-2>$159/month</div>
                  <a href="/inventory-optimizer" className="text-orange-400 hover:text-orange-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Dynamic Pricing AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Intelligent pricing optimization based on market conditions, competitor analysis, and demand patterns.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-green-400 mb-2>$199/month</div>
                  <a href="/dynamic-pricing-ai" className="text-green-400 hover:text-green-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Customer Segmentation</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered customer segmentation with behavioral analysis and personalized marketing recommendations.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-pink-400 mb-2>$129/month</div>
                  <a href="/customer-segmentation" className="text-pink-400 hover:text-pink-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Sales Forecasting</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Advanced sales forecasting with AI predictions, trend analysis, and revenue optimization insights.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-blue-400 mb-2>$179/month</div>
                  <a href="/sales-forecasting" className="text-blue-400 hover:text-blue-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
          {/* Real Estate & Property Tools */}

          <div className="mb-12>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text>
              Real Estate & Property Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🏠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Property Valuation AI</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered property valuation with market analysis, comparable sales, and investment potential assessment.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-indigo-400 mb-2>$149/month</div>
                  <a href="/property-valuation-ai" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📋</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Lease Management</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Automated lease management with document processing, renewal tracking, and tenant communication.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-cyan-400 mb-2>$99/month</div>
                  <a href="/lease-management" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Market Analysis</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  Comprehensive market analysis with neighborhood trends, price predictions, and investment opportunities.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-yellow-400 mb-2>$179/month</div>
                  <a href="/market-analysis" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4>📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4>Virtual Tour Creator</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base>
                  AI-powered virtual tour creation with 360° imaging, interactive floor plans, and immersive experiences.
                </p>
                <div className="text-center>
                  <div className="text-lg font-bold text-purple-400 mb-2>$199/month</div>
                  <a href="/virtual-tour-creator" className="text-purple-400 hover:text-purple-300 font-medium text-sm>
                    Try Free →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Statistics Section */}

        <Suspense fallback={<div></Suspense>}>
          <ContentStatistics />
        </Suspense>
        {/* Content Carousel */}

        <Suspense fallback={<div></Suspense>}>
          <ContentCarousel />
        </Suspense>
        {/* Dynamic Content Showcase */}

        <Suspense fallback={<div></Suspense>}>
          <DynamicContentShowcase />
        </Suspense>
        {/* Newsletter Signup */}

        <Suspense fallback={<div></Suspense>}>
          <ContentNewsletterSignup />
        </Suspense>

        {/* Contact Section */}

        <section className="mb-16" aria-labelledby="contact-heading></section>
          <div className="max-w-6xl mx-auto></div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center neon-text></h2>
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto></p>
              Get in touch with our experts to discuss your AI and IT needs. Were here to help you achieve unprecedented growth.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8></div>
              {/* Contact Information */}

              <div className="cyber-card hologram-card p-8></div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text></h>Contact Information</h3>
                <div className="space-y-6></div>
                  <div className="flex items-center space-x-4></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center></div>
                      <Phone className="w-6 h-6 text-white />
                    </div>
                    <div></div>
                      <p className="text-gray-300 text-sm>Phone</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg></a>
                        +1 (302) 464-0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center></div>
                      <Mail className="w-6 h-6 text-white />
                    </div>
                    <div></div>
                      <p className="text-gray-300 text-sm>Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg></a>
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center></div>
                      <MapPin className="w-6 h-6 text-white />
                    </div>
                    <div></div>
                      <p className="text-gray-300 text-sm>Address</p>
                      <p className="text-white font-semibold></p>
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center></div>
                      <Clock className="w-6 h-6 text-white />
                    </div>
                    <div></div>
                      <p className="text-gray-300 text-sm>Business Hours</p>
                      <p className="text-white font-semibold></p>
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Buttons */}

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center>
                <a
                  href="tel:+13024640950
                  onClick={handlePhoneClick}

                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300
                  aria-label="Call us at (302) 464-0950
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="#contact
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
          
          {/* Services Section */}

          <section className="mb-16" aria-labelledby="services-heading>
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center>
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4>
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
            
            {/* Services Grid */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center>🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center>AI Services</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base>
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center>⚡</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center>IT Solutions</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base>
                    Complete IT infrastructure, cloud migration, cybersecurity, and digital transformation services.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center>🔒</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center>Cybersecurity</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base>
                    Enterprise-grade security solutions to protect your data and infrastructure from threats.
                  </p>
                </article>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center>🌐</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center>Cloud Services</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base>
                    Scalable cloud infrastructure and migration services for modern business needs.
                  </p>
                </article>
              </Suspense>
            </div>
          </section>
        </main>
        
        {/* Footer */}

        <Footer />
      </div>
    </>
  );

      </main>      {/* Footer */}

      <Footer />
    </div>
  );

};

export default HomePage;
