'use client';
import React from 'react';
import { Smartphone, Code, Palette, Zap, Globe, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS and Android. Native and cross-platform development with UI/UX design and app store optimization."
        keywords={['mobile app development', 'iOS development', 'Android development', 'cross-platform', 'mobile UI/UX', 'app store optimization']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Mobile App Development
            </h1>
            <p className="text-xl text-pink-400 mb-8 font-medium">
              Native & Cross-Platform Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Create powerful mobile applications with our expert development team. 
              From iOS to Android, we build native and cross-platform apps that deliver exceptional user experiences.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Development Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Smartphone className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">iOS Development</h3>
                <p className="text-gray-300">Native iOS app development with Swift</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Android Development</h3>
                <p className="text-gray-300">Native Android app development with Kotlin</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cross-Platform</h3>
                <p className="text-gray-300">React Native and Flutter development</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our mobile development experts today to discuss your app project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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