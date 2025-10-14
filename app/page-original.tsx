'use client'
import React from 'react'
'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import Analytics from './components/Analytics'
import SecurityEnhancer from './components/SecurityEnhancer'
// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'))
const ContentCarousel = lazy(() => import('./components/ContentCarousel'))
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'))
const ContentStatistics = lazy(() => import('./components/ContentStatistics'))
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'))
// Preload critical components
const preloadComponents = ()
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() =>
                {;
      import('./components/ContentPromotionBanner');) =>
                {
  return ()
  )
  }
      import('./components/ContentCarousel');}
    }, 100)
  }
}
// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => ()
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton',
const HomePage: React.FC = memo(() =>
                {
    const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
useEffect(() =>
                {

    setIsLoaded(true)
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    // Preload components
    preloadComponents()
    return () => clearTimeout(timer)
  }
  }, [])
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() =>
                {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag()
      })
    }
  }, [])
  return (
    <>
      <SEOOptimizer></SEOOptimizer>
      </SEOOptimizer><PerformanceOptimizer></PerformanceOptimizer>
      </PerformanceOptimizer><AccessibilityEnhancer></AccessibilityEnhancer>
      </AccessibilityEnhancer><Analytics></Analytics>
      </Analytics><SecurityEnhancer></SecurityEnhancer>
      </SecurityEnhancer><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain"></div>
                {/* Navigation */}
                </div>
                {/* Skip to main content for accessibility */}
                <a></a>
          Skip to main content;
        </a>
                {/* Content Promotion Banner */}
                <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>;
        <ContentPromotionBanner></ContentPromotionBanner>
      </Suspense>
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main"></main>
                {/* Hero Section */}
                <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <Navigation></Navigation>
                {/* Skip to main content for accessibility */}
                </Navigation><a></a>
          Skip to main content
        </a>
                {/* Content Promotion Banner */}
                <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <ContentPromotionBanner></ContentPromotionBanner>
      </Suspense>
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main"></main>
                </main>
                {/* Hero Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <div className="max-w-6xl mx-auto"></div>
            <h1></h1>
              Zion Tech Group</h1>
                </h1>
            <p>Advanced AI and IT Solutions;</p>
                </p>
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12"></div>,
              <div className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300"></div>,
                <div className="text-2xl sm: text-3xl mb-3">🚀</div>,
                <h3 className="font-bold text-white mb-3 text-base sm: text-lg">AI-Powered Solutions</h3>,
            <p></p>
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12"></div>
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
              <div className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300"></div>,
                <div className="text-2xl sm: text-3xl mb-3">⚡</div>,
                <h3 className="font-bold text-white mb-3 text-base sm: text-lg">Proven Results</h3>,
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
              <div className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300"></div>,
                <div className="text-2xl sm: text-3xl mb-3">🔒</div>,
                <h3 className="font-bold text-white mb-3 text-base sm: text-lg">Enterprise Security</h3>,
                <p className="text-xs sm: text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>,
              </div>
              <div className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1"></div>,
                <div className="text-2xl sm: text-3xl mb-3">🌐</div>,
                <h3 className="font-bold text-white mb-3 text-base sm: text-lg">Global Reach</h3>,
                <p className="text-xs sm: text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>,
              </div>
                </div>
                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm: flex-row gap-4 justify-center items-center"></div>,
              <a></a>
              📞 Call: (302) 464-0950;,
            </a>
            <a></a>
              Get Free Consultation,
            </a>
                </div>
        </div>
                </section>
                {/* Services Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <h2></h2>
            Our Services
          </h2>
          <p></p>
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
                {/* Primary Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12" / /></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                <p></p>
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
                </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
                <p></p>
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm: p-6 energy-pulse" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
                <p></p>
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </Suspense>
          </div>
                {/* Secondary Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12" / /></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
                <p></p>
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
                </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
                <p></p>
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
                </Suspense>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
                <p></p>
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </Suspense>
          </div>
                {/* Micro SAAS Services Grid */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Micro SAAS Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM</h3>
                  <p></p>
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-orange-400 mb-2">$149/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard</h3>
                  <p></p>
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-cyan-400 mb-2">$199/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio</h3>
                  <p></p>
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-pink-400 mb-2">$299/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder</h3>
                  <p></p>
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-green-400 mb-2">$99/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing</h3>
                  <p></p>
                    Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-purple-400 mb-2">$179/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder</h3>
                  <p></p>
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-blue-400 mb-2">$399/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer</h3>
                  <p></p>
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-yellow-400 mb-2">$129/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator</h3>
                  <p></p>
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-indigo-400 mb-2">$79/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Lead Scoring</h3>
                  <p></p>
                    Intelligent lead scoring and qualification with AI-powered predictive analytics and automated follow-ups.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$89/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Social Media Manager</h3>
                  <p></p>
                    Automated social media posting, engagement, and analytics with AI content optimization and scheduling.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-teal-400 mb-2">$159/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛒</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI E-commerce Assistant</h3>
                  <p></p>
                    Complete e-commerce automation with AI product recommendations, pricing optimization, and inventory management.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-violet-400 mb-2">$249/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📝</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Document Processor</h3>
                  <p></p>
                    Intelligent document processing, OCR, data extraction, and automated workflow management with AI.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-amber-400 mb-2">$119/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎨</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Design Studio</h3>
                  <p></p>
                    AI-powered graphic design, logo creation, brand identity, and visual content generation for businesses.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-rose-400 mb-2">$189/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔐</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Security Monitor</h3>
                  <p></p>
                    Real-time security monitoring, threat detection, and automated incident response with AI intelligence.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-emerald-400 mb-2">$199/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Financial Planner</h3>
                  <p></p>
                    Intelligent financial planning, budgeting, investment analysis, and automated financial reporting.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-sky-400 mb-2">$169/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Health Tracker</h3>
                  <p></p>
                    Personal health monitoring, fitness tracking, nutrition analysis, and AI-powered health insights.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-lime-400 mb-2">$79/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎓</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Learning Platform</h3>
                  <p></p>
                    Personalized learning paths, AI tutoring, skill assessment, and automated course creation.
                  </p>
                  <div className="text-center" / /></div>
                    <div className="text-lg sm: text-2xl font-bold text-fuchsia-400 mb-2">$139/month</div>
                    <a></a>
                      Learn More →,
                    </a>
                </div>
                </article>
                </Suspense>
            </div>
                </div>
                {/* IT Services & Infrastructure */}
                <div className="mb-12" / /></div>
            <h3></h3>
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration</h3>
                <p></p>
                  Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite</h3>
                <p></p>
                  Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-red-400 mb-2">$799/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                <p></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-green-400 mb-2">$599/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management</h3>
                <p></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-teal-400 mb-2">$399/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions</h3>
                <p></p>
                  Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-indigo-400 mb-2">$699/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development</h3>
                <p></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.,
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting</h3>
                <p></p>
                  Strategic IT planning, technology assessment, and digital transformation consulting.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-yellow-400 mb-2">$299/hour</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance</h3>
                <p></p>
                  Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-cyan-400 mb-2">$499/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🖥️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">System Administration</h3>
                <p></p>
                  Complete system administration, server management, and infrastructure monitoring with 24/7 support.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-orange-400 mb-2">$799/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Infrastructure Design</h3>
                <p></p>
                  Custom IT infrastructure design, architecture planning, and technology stack optimization.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">$1,499/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Performance Optimization</h3>
                <p></p>
                  Application and system performance optimization with AI-powered monitoring and tuning.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$699/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Backup & Recovery</h3>
                <p></p>
                  Automated backup solutions, disaster recovery planning, and data protection services.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-violet-400 mb-2">$399/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Project Management</h3>
                <p></p>
                  End-to-end IT project management with agile methodologies and AI-powered project tracking.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-2">$899/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏢</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Enterprise Solutions</h3>
                <p></p>
                  Large-scale enterprise IT solutions, ERP integration, and digital transformation services.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm:text-2xl font-bold text-sky-400 mb-2">$2,999/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎓</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Training & Certification</h3>
                <p></p>
                  Comprehensive IT training programs, certification courses, and skill development workshops.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-lime-400 mb-2">$299/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </div>
          </div>
                {/* Advanced AI Services Grid */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Advanced AI Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Customer Support</h3>
                <p></p>
                  Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-green-400 mb-2">Starting at $199/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sales Automation</h3>
                <p></p>
                  Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-blue-400 mb-2">Starting at $299/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Workflow Automation</h3>
                <p></p>
                  Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-yellow-400 mb-2">Starting at $99/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Visualization</h3>
                <p></p>
                  Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-cyan-400 mb-2">Starting at $149/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Lead Generation</h3>
                <p></p>
                  Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Document Processing</h3>
                <p></p>
                  Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-indigo-400 mb-2">Starting at $149/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Predictive Analytics</h3>
                <p></p>
                  Advanced predictive modeling, forecasting, and trend analysis with machine learning algorithms.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-purple-400 mb-2">Starting at $399/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Image Recognition</h3>
                <p></p>
                  Computer vision solutions for object detection, facial recognition, and automated image analysis.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-rose-400 mb-2">Starting at $249/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗣️</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Voice Processing</h3>
                <p></p>
                  Speech recognition, voice synthesis, and natural language processing for voice-enabled applications.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-teal-400 mb-2">Starting at $179/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔮</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Recommendation Engine</h3>
                <p></p>
                  Personalized recommendation systems for e-commerce, content, and product suggestions.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-violet-400 mb-2">Starting at $299/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎭</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sentiment Analysis</h3>
                <p></p>
                  Real-time sentiment analysis of social media, reviews, and customer feedback with emotion detection.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-amber-400 mb-2">Starting at $129/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔬</div>
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Research Assistant</h3>
                <p></p>
                  AI-powered research tools for data analysis, literature review, and scientific discovery.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg sm: text-2xl font-bold text-emerald-400 mb-2">Starting at $199/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </div>
          </div>
                {/* Emerging Technologies Grid */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Emerging Technologies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Robotics</h3>
                <p></p>
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge</h3>
                <p></p>
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-green-400 mb-2">Starting at $499/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔗</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3</h3>
                <p></p>
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2">Starting at $699/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence</h3>
                <p></p>
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-pink-400 mb-2">Starting at $399/month</div>
                  <a></a>
                    Learn More →,
                  </a>
                </div>
              </article>
                </div>
          </div>
                {/* IT Services Grid */}
                <div className="mb-12" / /></div>
            <h3></h3>
              IT Services & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD</h3>
                <p></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-blue-400 mb-2">Starting at $299/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Mobile Development</h3>
                <p></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.,
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2">Starting at $1,299/month</div>
                  <a></a>
                    Learn More →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Database Services</h3>
                <p></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-teal-400 mb-2">Starting at $199/month</div>
                  <a></a>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12"></div>
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-2xl sm:text-3xl mb-3">🚀
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-2xl sm:text-3xl mb-3">⚡
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="text-2xl sm:text-3xl mb-3">🔒
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure
              <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1"></div>
                <div className="text-2xl sm:text-3xl mb-3">🌐
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities
            {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <$2 />
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            <$2 />
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Get Free Consultation
        {/* Services Section */}
                <section className="mb-16" aria-labelledby="services-heading"></section>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Our Services
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">Comprehensive AI and IT solutions designed to transform your business operations
          {/* Primary Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12"></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow"></a>
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow"></a>
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow"></a>
                    Learn More →
          {/* Secondary Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12"></div>
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
          {/* Micro SAAS Services Grid */}
                <div className="mb-12"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">Micro SAAS Solutions
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI-Powered CRM
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$149/month
                    <a href="/ai-crm" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Analytics Dashboard
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$199/month
                    <a href="/ai-analytics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Studio
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Complete content creation suite with AI writing, image generation, video editing, and social media automation.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$299/month
                    <a href="/ai-content-studio" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Chatbot Builder
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Create intelligent chatbots for customer support, sales, and lead generation with no coding required.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$99/month
                    <a href="/ai-chatbot-builder" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📧
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Email Marketing
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$179/month
                    <a href="/ai-email-marketing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📱
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Mobile App Builder
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$399/month
                    <a href="/ai-mobile-builder" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔍
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI SEO Optimizer
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$129/month
                    <a href="/ai-seo-optimizer" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Invoice Generator
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$79/month
                    <a href="/ai-invoice-generator" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Lead Scoring
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Intelligent lead scoring and qualification with AI-powered predictive analytics and automated follow-ups.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$89/month
                    <a href="/ai-lead-scoring" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📈
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Social Media Manager
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Automated social media posting, engagement, and analytics with AI content optimization and scheduling.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$159/month
                    <a href="/ai-social-media-manager" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🛒
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI E-commerce Assistant
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Complete e-commerce automation with AI product recommendations, pricing optimization, and inventory management.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-violet-400 mb-2">$249/month
                    <a href="/ai-ecommerce-assistant" className="text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📝
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Document Processor
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Intelligent document processing, OCR, data extraction, and automated workflow management with AI.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-2">$119/month
                    <a href="/ai-document-processor" className="text-amber-400 hover:text-amber-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎨
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Design Studio
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    AI-powered graphic design, logo creation, brand identity, and visual content generation for businesses.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-rose-400 mb-2">$189/month
                    <a href="/ai-design-studio" className="text-rose-400 hover:text-rose-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🔐
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Security Monitor
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Real-time security monitoring, threat detection, and automated incident response with AI intelligence.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">$199/month
                    <a href="/ai-security-monitor" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📊
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Financial Planner
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Intelligent financial planning, budgeting, investment analysis, and automated financial reporting.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-sky-400 mb-2">$169/month
                    <a href="/ai-financial-planner" className="text-sky-400 hover:text-sky-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Health Tracker
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Personal health monitoring, fitness tracking, nutrition analysis, and AI-powered health insights.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-lime-400 mb-2">$79/month
                    <a href="/ai-health-tracker" className="text-lime-400 hover:text-lime-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎓
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Learning Platform
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base"></p>
                    Personalized learning paths, AI tutoring, skill assessment, and automated course creation.
                  <div className="text-center"></div>
                    <div className="text-lg sm:text-2xl font-bold text-fuchsia-400 mb-2">$139/month
                    <a href="/ai-learning-platform" className="text-fuchsia-400 hover:text-fuchsia-300 font-medium text-sm sm:text-base"></a>
                      Learn More →
          {/* IT Services & Infrastructure */}
                <div className="mb-12"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">IT Services & Infrastructure
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Migration
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Seamless cloud migration with AWS, Azure, and GCP. 99.9% uptime guarantee and 24/7 expert support.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">$1,299/month
                  <a href="/cloud-migration" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔒
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cybersecurity Suite
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-red-400 mb-2">$799/month
                  <a href="/cybersecurity-suite" className="text-red-400 hover:text-red-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚙️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">$599/month
                  <a href="/devops-cicd" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Database Management
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">$399/month
                  <a href="/database-management" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Network Solutions
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">$699/month
                  <a href="/network-solutions" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Mobile App Development
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">$1,999/month
                  <a href="/mobile-app-development" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Consulting
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Strategic IT planning, technology assessment, and digital transformation consulting.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">$299/hour
                  <a href="/it-consulting" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Support & Maintenance
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Comprehensive IT support, system maintenance, and troubleshooting with guaranteed response times.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">$499/month
                  <a href="/it-support" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🖥️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">System Administration
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Complete system administration, server management, and infrastructure monitoring with 24/7 support.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">$799/month
                  <a href="/system-administration" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Infrastructure Design
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Custom IT infrastructure design, architecture planning, and technology stack optimization.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">$1,499/month
                  <a href="/it-infrastructure-design" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Performance Optimization
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Application and system performance optimization with AI-powered monitoring and tuning.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">$699/month
                  <a href="/performance-optimization" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Backup & Recovery
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automated backup solutions, disaster recovery planning, and data protection services.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-violet-400 mb-2">$399/month
                  <a href="/backup-recovery" className="text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Project Management
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  End-to-end IT project management with agile methodologies and AI-powered project tracking.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-2">$899/month
                  <a href="/it-project-management" className="text-amber-400 hover:text-amber-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏢
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Enterprise Solutions
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Large-scale enterprise IT solutions, ERP integration, and digital transformation services.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-sky-400 mb-2">$2,999/month
                  <a href="/enterprise-solutions" className="text-sky-400 hover:text-sky-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎓
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">IT Training & Certification
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Comprehensive IT training programs, certification courses, and skill development workshops.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-lime-400 mb-2">$299/month
                  <a href="/it-training" className="text-lime-400 hover:text-lime-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
          {/* Advanced AI Services Grid */}
                <div className="mb-12"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">Advanced AI Services
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Customer Support
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Revolutionary AI-powered customer support with chatbots, omnichannel communication, and intelligent automation.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $199/month
                  <a href="/ai-customer-support" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sales Automation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $299/month
                  <a href="/ai-sales-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Workflow Automation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automate any business process with intelligent workflows, 90% time savings, and 500+ integrations.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-yellow-400 mb-2">Starting at $99/month
                  <a href="/ai-workflow-automation" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Data Visualization
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2">Starting at $149/month
                  <a href="/ai-data-visualization" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Lead Generation
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Generate high-quality leads with AI-powered prospecting, email sequences, and automated follow-ups.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month
                  <a href="/ai-lead-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Document Processing
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automatically extract, process, and analyze documents with AI-powered OCR and intelligent data extraction.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $149/month
                  <a href="/ai-document-processing" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Predictive Analytics
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Advanced predictive modeling, forecasting, and trend analysis with machine learning algorithms.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Starting at $399/month
                  <a href="/ai-predictive-analytics" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Image Recognition
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Computer vision solutions for object detection, facial recognition, and automated image analysis.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-rose-400 mb-2">Starting at $249/month
                  <a href="/ai-image-recognition" className="text-rose-400 hover:text-rose-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗣️
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Voice Processing
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Speech recognition, voice synthesis, and natural language processing for voice-enabled applications.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-teal-400 mb-2">Starting at $179/month
                  <a href="/ai-voice-processing" className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔮
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Recommendation Engine
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Personalized recommendation systems for e-commerce, content, and product suggestions.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-violet-400 mb-2">Starting at $299/month
                  <a href="/ai-recommendation-engine" className="text-violet-400 hover:text-violet-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎭
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Sentiment Analysis
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Real-time sentiment analysis of social media, reviews, and customer feedback with emotion detection.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-amber-400 mb-2">Starting at $129/month
                  <a href="/ai-sentiment-analysis" className="text-amber-400 hover:text-amber-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔬
                <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Research Assistant
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered research tools for data analysis, literature review, and scientific discovery.
                <div className="text-center"></div>
                  <div className="text-lg sm:text-2xl font-bold text-emerald-400 mb-2">Starting at $199/month
                  <a href="/ai-research-assistant" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm sm:text-base"></a>
                    Learn More →
          {/* Emerging Technologies Grid */}
                <div className="mb-12"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">Emerging Technologies
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Robotics
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Intelligent robotic solutions for manufacturing, healthcare, and service industries.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">Custom Pricing
                  <a href="/robotics" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌐
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">IoT & Edge
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Connected devices and edge computing solutions for smart cities and industrial automation.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-green-400 mb-2">Starting at $499/month
                  <a href="/iot-edge-computing" className="text-green-400 hover:text-green-300 font-medium text-sm"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔗
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Blockchain & Web3
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Decentralized solutions, smart contracts, and Web3 applications for the future of business.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2">Starting at $699/month
                  <a href="/blockchain-web3" className="text-yellow-400 hover:text-yellow-300 font-medium text-sm"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Business Intelligence
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Data-driven insights and predictive analytics to optimize business performance and decision-making.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-pink-400 mb-2">Starting at $399/month
                  <a href="/business-intelligence" className="text-pink-400 hover:text-pink-300 font-medium text-sm"></a>
                    Learn More →
          {/* IT Services Grid */}
                <div className="mb-12"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">IT Services & Infrastructure
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">DevOps & CI/CD
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Streamline development workflows with automated testing, deployment, and monitoring solutions.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-blue-400 mb-2">Starting at $299/month
                  <a href="/devops" className="text-blue-400 hover:text-blue-300 font-medium text-sm"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Mobile Development
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Native and cross-platform mobile applications with AI integration and modern UX design.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2">Starting at $1,299/month
                  <a href="/ai-mobile-app-development" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm"></a>
                    Learn More →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🗄️
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Database Services
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Database design, optimization, migration, and management with AI-powered performance tuning.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-teal-400 mb-2">Starting at $199/month
                  <a href="/database" className="text-teal-400 hover:text-teal-300 font-medium text-sm"></a>
                    Learn More →
        {/* Micro SAAS Solutions Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <h2></h2>
            Micro SAAS Solutions
          </h2>
          <p></p>
        <section className="mb-16" aria-labelledby="micro-saas-heading"></section>
          <h2 id="micro-saas-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">Micro SAAS Solutions
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4"></p>
            Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          {/* Productivity Tools */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Productivity & Business Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Writing Assistant</h3>
                <p></p>
                  Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Smart Analytics</h3>
                <p></p>
                  Real-time business analytics with AI insights, automated reports, and predictive forecasting.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📅</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Scheduler</h3>
                <p></p>
                  Intelligent scheduling with calendar optimization, meeting coordination, and time management.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Expense Tracker</h3>
                <p></p>
                  AI-powered expense management with receipt scanning, categorization, and budget insights.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2">$15/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Task Manager Pro</h3>
                <p></p>
                  Advanced task management with AI prioritization, team collaboration, and progress tracking.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2">$39/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">CRM Lite</h3>
                <p></p>
                  Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-pink-400 mb-2">$59/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Email Optimizer</h3>
                <p></p>
                  AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$25/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Social Media Manager</h3>
                <p></p>
                  AI-driven social media management with content creation, scheduling, and performance analytics.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-orange-400 mb-2">$45/month</div>
                  <a></a>
                    Try Free →
          {/* Marketing & Sales Tools */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Marketing & Sales Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎨</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">AI Design Studio</h3>
                <p></p>
                  Create stunning graphics, logos, and marketing materials with AI-powered design tools.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-pink-400 mb-2">$35/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm: p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Landing Page Builder</h3>
                <p></p>
                  Build high-converting landing pages with AI optimization and A/B testing capabilities.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-blue-400 mb-2">$29/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">SEO Optimizer</h3>
                <p></p>
                  AI-powered SEO analysis and optimization with keyword research and content suggestions.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-green-400 mb-2">$49/month</div>
                  <a></a>
                    Try Free →,
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Ad Campaign Manager</h3>
                <p></p>
                  Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-yellow-400 mb-2">$79/month</div>
                  <a></a>
                    Try Free →
          {/* Developer Tools */}
                <div className="mb-12" / /></div>
            <h3></h3>
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" / /></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Assistant</h3>
                <p></p>
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$39/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">API Builder</h3>
                <p></p>
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2">$59/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐛</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bug Tracker Pro</h3>
                <p></p>
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-red-400 mb-2">$25/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300" / /></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Doc Generator</h3>
                <p></p>
                  Automatically generate technical documentation, API docs, and user guides from code.
                </p>
                <div className="text-center" / /></div>
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month</div>
                  <a></a>
                    Try Free →
                  </a>
                </div>
              </article>
                </div>
          </div>
                </section>
                {/* Statistics Section */}
                <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}>
          <ContentStatistics></ContentStatistics>
                </Suspense>
                {/* Content Carousel */}
                <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg" />}>
          <ContentCarousel></ContentCarousel>
                </Suspense>
                {/* Dynamic Content Showcase */}
                <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg" />}>
          <DynamicContentShowcase></DynamicContentShowcase>
                </Suspense>
                {/* Newsletter Signup */}
                <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg" />}>
          <ContentNewsletterSignup></ContentNewsletterSignup>
                </Suspense>
                {/* Contact Section */}
                <section className="py-20 px-4"></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div>
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
                </div>
          </div>
                </section>
          <div className="max-w-6xl mx-auto" / /></div>
            <h2></h2>
              Ready to Transform Your Business?
            </h2>
            <p></p>
              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" / /></div>
                {/* Contact Information */}
                </div>
              <div className="cyber-card hologram-card p-8" / /></div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information</h3>
                <div className="space-y-6" / /></div>
                  <div className="flex items-center space-x-4" / /></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center" / /></div>
                      <Phone / /></Phone>
                    <div / /></div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a></a>
                        +1 (302) 464-0950
                      </a>
                </div>
                  </div>
                  <div className="flex items-center space-x-4" / /></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center" / /></div>
                      <Mail / /></Mail>
                    <div / /></div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a></a>
                        kleber@ziontechgroup.com
                      </a>
                </div>
                  </div>
                  <div className="flex items-center space-x-4" / /></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center" / /></div>
                      <MapPin / /></MapPin>
                    <div / /></div>
                      <p className="text-gray-300 text-sm">Address</p>
                      <p></p>
                        364 E Main St STE 1008</p><br></br>
                        Middletown, DE 19709
                      </p>
                </div>
                  </div>
                  <div className="flex items-center space-x-4" / /></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center" / /></div>
                      <Clock / /></Clock>
                    <div / /></div>
                      <p className="text-gray-300 text-sm">Business Hours</p>
                      <p></p>
                        Monday - Friday: 9:00 AM - 6:00 PM EST</p><br></br>
                        24/7 Emergency Support Available,
                      </p>
                </div>
                  </div>
                </div>
              </div>
                {/* Quick Contact Form */}
                <div className="cyber-card hologram-card p-8" / /></div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation</h3>
                <form></form>
                  </form><div />
                    <label></label>
                      Full Name;
                    </label>
                    <input / /></input>
                  <div / /></div>
                    <label></label>
                      Email Address
                    </label>
                    <input / /></input>
                  <div / /></div>
                    <label></label>
                      Phone Number
                    </label>
                    <input / /></input>
                  <div / /></div>
                    <label></label>
                      Service Interest
                    </label>
                    <select></select>
                      </select><option value="">Select a service</option>
                      <option value="ai-services">AI Services</option>
                      <option value="it-services">IT Services</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                </select>
                  </div>
                  <div / /></div>
                    <label></label>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
          <div className="mb-12"></textarea
>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center neon-text">Developer Tools
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"></div>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💻
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Code Assistant
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  AI-powered code completion, debugging, and optimization for multiple programming languages.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-cyan-400 mb-2">$39/month
                  <a href="/code-assistant" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"></a>
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">API Builder
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Create and manage APIs with AI assistance, documentation generation, and testing tools.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-indigo-400 mb-2">$59/month
                  <a href="/api-builder" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm"></a>
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🐛
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Bug Tracker Pro
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-red-400 mb-2">$25/month
                  <a href="/bug-tracker-pro" className="text-red-400 hover:text-red-300 font-medium text-sm"></a>
                    Try Free →
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300"></article>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Doc Generator
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base"></p>
                  Automatically generate technical documentation, API docs, and user guides from code.
                <div className="text-center"></div>
                  <div className="text-lg font-bold text-purple-400 mb-2">$19/month
                  <a href="/doc-generator" className="text-purple-400 hover:text-purple-300 font-medium text-sm"></a>
                    Try Free →
        {/* Statistics Section */}
                <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
                {/* Content Carousel */}
                <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentCarousel />
                {/* Dynamic Content Showcase */}
                <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <DynamicContentShowcase />
                {/* Newsletter Signup */}
                <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
                {/* Contact Section */}
                <section className="mb-16" aria-labelledby="contact-heading"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center neon-text"></h2>
              Ready to Transform Your Business?
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto"></p>
              Get in touch with our experts to discuss your AI and IT needs. We're here to help you achieve unprecedented growth.
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"></div>
                {/* Contact Information */}
                <div className="cyber-card hologram-card p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Contact Information
                <div className="space-y-6"></div>
                  <div className="flex items-center space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                      <Phone className="w-6 h-6 text-white" />
                    <div></div>
                      <p className="text-gray-300 text-sm">Phone
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"></a>
                        +1 (302) 464-0950
                  <div className="flex items-center space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>
                      <Mail className="w-6 h-6 text-white" />
                    <div></div>
                      <p className="text-gray-300 text-sm">Email
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg"></a>
                        kleber@ziontechgroup.com
                  <div className="flex items-center space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center"></div>
                      <MapPin className="w-6 h-6 text-white" />
                    <div></div>
                      <p className="text-gray-300 text-sm">Address
                      <p className="text-white font-semibold"></p>
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                  <div className="flex items-center space-x-4"></div>
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center"></div>
                      <Clock className="w-6 h-6 text-white" />
                    <div></div>
                      <p className="text-gray-300 text-sm">Business Hours
                      <p className="text-white font-semibold"></p>
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        24/7 Emergency Support Available
              {/* Quick Contact Form */}
                <div className="cyber-card hologram-card p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation
                <form className="space-y-6"></form>
                  <div></div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Email Address
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  <div></div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Phone Number
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Service Interest
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"></select
>
                      <option value="">Select a service
                      <option value="ai-services">AI Services
                      <option value="it-services">IT Services
                      <option value="micro-saas">Micro SAAS Solutions
                      <option value="consulting">IT Consulting
                      <option value="other">Other
                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Message
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project or requirements"
                    ></textarea>
                </div>
                  <button></button>
                    Send Message,
                  </button>
                </form>
              </div>
                </div>
          </div>
                </section>
      </main>
                {/* Footer */}
                <Footer / /></Footer>
    </>
  )
})
HomePage.displayName = 'HomePage';
export default HomePage;
HomePage.displayName = 'HomePage'
export default HomePage
  </button>
                </label>
  </label>
                </label>
  </label>
                </label>
  </p>
                </p>
  </a>
                </a>
  </h3>
                </h3>
  </h3>
                </h2>
  </h3>
                </h3>
  </h3>
                </h3>
  </h3>
                </p>
  </h2>
                </a>
  </a>
                </p>
  </a>
                </SecurityEnhancer>
  </Analytics>
                </AccessibilityEnhancer>
  </PerformanceOptimizer>
                </SEOOptimizer>
</div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </a></a>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3></h3>
                </h3>