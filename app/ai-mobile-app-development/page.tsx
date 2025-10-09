'use client';
import React from 'react';
import { Smartphone, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const MobileAppDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      title: 'Native iOS Apps',
      description: 'High-performance iOS applications built with Swift and Objective-C',
      features: ['Swift Development', 'UIKit & SwiftUI', 'Core Data', 'App Store Optimization']
    },
    {
      title: 'Native Android Apps',
      description: 'Robust Android applications using Kotlin and Java',
      features: ['Kotlin Development', 'Material Design', 'Room Database', 'Play Store Optimization']
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Single codebase for multiple platforms using React Native or Flutter',
      features: ['React Native', 'Flutter', 'Code Reusability', 'Platform-Specific Features']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications that work like native apps',
      features: ['PWA Features', 'Offline Support', 'Push Notifications', 'App-like Experience']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services including iOS, Android, cross-platform, and PWA solutions. Build engaging mobile experiences."
        keywords={['mobile app development', 'iOS apps', 'Android apps', 'cross-platform', 'PWA', 'mobile development']}
        canonicalUrl="https://ziontechgroup.com/ai-mobile-app-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create engaging mobile experiences with our comprehensive app development services.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your mobile app needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MobileAppDevelopmentPage;