'use client';
import React from 'react';
import { Smartphone, Code, Zap, BarChart, Shield, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const MobileDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and modern iOS frameworks',
      icon: Smartphone,
      features: ['Swift Development', 'UIKit/SwiftUI', 'Core Data', 'App Store Optimization'],
      benefits: ['Native performance', 'App Store ready', 'iOS best practices']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications built with Kotlin and modern Android frameworks',
      icon: Code,
      features: ['Kotlin Development', 'Jetpack Compose', 'Room Database', 'Play Store Optimization'],
      benefits: ['Native performance', 'Play Store ready', 'Android best practices']
    },
    {
      title: 'Cross-platform Development',
      description: 'React Native and Flutter apps that work seamlessly across platforms',
      icon: Zap,
      features: ['React Native', 'Flutter', 'Code Reuse', 'Platform-specific Features'],
      benefits: ['Faster development', 'Cost effective', 'Consistent experience']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive mobile interfaces designed for optimal user experience',
      icon: BarChart,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      benefits: ['Better user engagement', 'Higher conversion', 'Reduced support']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Build high-performance mobile applications that users love."
        keywords={['mobile app development', 'iOS development', 'Android development', 'React Native', 'Flutter', 'mobile UI/UX']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Mobile App Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Build Apps That Users Love
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our mobile app development services create high-performance, user-friendly applications 
              for iOS, Android, and cross-platform solutions that drive engagement and business growth.
            </p>
          </section>

          {/* Mobile Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our mobile development experts help you create an app that stands out in the market and delivers exceptional user experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your App Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MobileDevelopmentPage;