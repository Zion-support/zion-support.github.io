'use client';
import React from 'react';
import { Smartphone, Code, Zap, Shield, BarChart, Settings, Globe, Cpu } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const MobileDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications using Swift and Objective-C',
      icon: Smartphone,
      features: ['Swift/Objective-C', 'UIKit/SwiftUI', 'Core Data', 'App Store optimization']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications using Kotlin and Java',
      icon: Code,
      features: ['Kotlin/Java', 'Jetpack Compose', 'Room Database', 'Google Play optimization']
    },
    {
      title: 'Cross-Platform Development',
      description: 'React Native and Flutter applications',
      icon: Globe,
      features: ['React Native', 'Flutter', 'Xamarin', 'Single codebase']
    },
    {
      title: 'App Store Optimization',
      description: 'Maximize app visibility and downloads',
      icon: BarChart,
      features: ['ASO strategy', 'Keyword optimization', 'A/B testing', 'Performance analytics']
    }
  ];

  const industries = [
    {
      title: 'E-commerce',
      description: 'Mobile shopping and payment solutions',
      icon: Smartphone,
      impact: '40% increase in mobile sales'
    },
    {
      title: 'Healthcare',
      description: 'Telemedicine and health monitoring apps',
      icon: Shield,
      impact: 'HIPAA compliant solutions'
    },
    {
      title: 'Finance',
      description: 'Banking and fintech applications',
      icon: Code,
      impact: 'Secure financial transactions'
    },
    {
      title: 'Education',
      description: 'Learning management and e-learning apps',
      icon: Globe,
      impact: 'Enhanced learning experience'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Native and hybrid app development with modern technologies."
        keywords={['mobile app development', 'iOS development', 'Android development', 'React Native', 'Flutter', 'app development']}
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
            <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium">
              Native and Cross-Platform Mobile Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Create powerful mobile applications that engage users and drive business growth. 
              From native iOS and Android apps to cross-platform solutions, we deliver 
              high-performance mobile experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get App Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Mobile Development Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{industry.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{industry.description}</p>
                  <div className="text-pink-400 font-semibold text-sm">{industry.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Mobile Development Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic App</h3>
                <div className="text-3xl font-bold text-pink-400 mb-4">$1,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Simple mobile app</li>
                  <li>Basic UI/UX design</li>
                  <li>Core functionality</li>
                  <li>App store submission</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-pink-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional App</h3>
                <div className="text-3xl font-bold text-pink-400 mb-4">$3,500<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced mobile app</li>
                  <li>Custom UI/UX design</li>
                  <li>Backend integration</li>
                  <li>Push notifications</li>
                  <li>Analytics integration</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise App</h3>
                <div className="text-3xl font-bold text-pink-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Complex mobile platform</li>
                  <li>Multi-platform development</li>
                  <li>Advanced features</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                  <li>Dedicated team</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our mobile development experts help you create an engaging mobile experience.
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
                  className="flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
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