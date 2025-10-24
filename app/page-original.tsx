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
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner')
      import('./components/ContentCarousel')
    }, 100)
  }
}
// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton'
const HomePage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    // Preload components
    preloadComponents()
    return () => clearTimeout(timer)
  }, [])
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement'
        event_label: 'header_phone'
      })
    }
  }, [])
  // Analytics tracking for email clicks - optimized
  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement'
        event_label: 'header_email'
      })
    }
  }, [])
  const features = [
    {
      icon: '🤖'
      title: 'AI-Powered Solutions'
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
        }
    {
      icon: '🛡️'
      title: 'Enterprise Security'
      description: 'Bank-level security measures to protect your data and ensure compliance with industry standards.'
        }
    {
      icon: '👥'
      title: 'Expert Team'
      description: 'Experienced developers and consultants dedicated to delivering exceptional results for your projects.'
    }
    ];
  const stats = [
    { number: '500+', label: 'Projects Completed'     }
    { number: '50+', label: 'Happy Clients'     }
    { number: '99%', label: 'Client Satisfaction'     }
    { number: '24/7', label: 'Support Available' }
    ];
  return (
    <SEOOptimizer
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI, cloud architecture, and innovative development services from Zion Tech Group."
      keywords="AI solutions, cloud architecture, web development, mobile apps, data analytics, cybersecurity"
    >
      <AccessibilityEnhancer>
        <PerformanceOptimizer>
          <Analytics>
            <SecurityEnhancer>
              <Navigation />
              
              <main className="...">
                {/* Hero Section */}
                <section className="...">
                  <div className="...">
                    <div className="...">
                      <h1 className="...">
                        Transform Your Business with 
                        <span className="block text-yellow-300">Cutting-Edge Technology</span>
                      </h1>
                      <p className="...">
                        Leading technology solutions provider helping businesses transform their digital
                        presence with AI, cloud architecture, and innovative development services.
                      </p>
                      <div className="...">
                        <button className="...">
                          Get Started Today
                        </button>
                        <button className="...">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Stats Section */}
                <section className="...">
                  <div className="...">
                    <div className="...">
                      {stats.map((stat, index) => (
                        <div key={index} className="...">
                          <div className="...">
                            {stat.number}
                          </div>
                          <div className="...">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Features Section */}
                <section className="...">
                  <div className="...">
                    <div className="...">
                      <div className="...">
                        <h2 className="...">
                          Why Choose Zion Tech Group?
                        </h2>
                        <p className="...">
                          We deliver exceptional results through innovative technology solutions and expert guidance.
                        </p>
                      </div>

                      <div className="...">
                        {features.map((feature, index) => (
                          <div key={index} className="...">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="...">
                              {feature.title}
                            </h3>
                            <p className="...">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* CTA Section */}
                <section className="...">
                  <div className="...">
                    <div className="...">
                      <h2 className="...">
                        Ready to Transform Your Business?
                      </h2>
                      <p className="...">
                        Let's discuss how we can help you achieve your technology goals.
                      </p>
                      <div className="...">
                        <button className="...">
                          Start Your Project
                        </button>
                        <button className="...">
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

              <Footer />
            </SecurityEnhancer>
          </Analytics>
        </PerformanceOptimizer>
      </AccessibilityEnhancer>
    </SEOOptimizer>
  )
})
HomePage.displayName = 'HomePage'
export default HomePage