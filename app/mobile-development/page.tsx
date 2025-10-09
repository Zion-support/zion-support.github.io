'use client';
import React from 'react';
import { Smartphone, Code, Zap, Shield, Globe, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MobileDevelopmentPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Native and cross-platform mobile app development with modern frameworks. Create engaging mobile experiences with our mobile development expertise."
        keywords={['mobile app development', 'iOS development', 'Android development', 'cross-platform apps', 'mobile UI/UX', 'app development']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Mobile App Development
            </h1>
            <p className="text-xl text-pink-400 mb-8 font-medium neon-pulse">
              Create Engaging Mobile Experiences
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our mobile development team creates native and cross-platform applications 
              that deliver exceptional user experiences across iOS, Android, and web platforms.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Smartphone className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Native Apps</h3>
                <p className="text-gray-300">High-performance native iOS and Android applications built with Swift and Kotlin</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Cross-Platform</h3>
                <p className="text-gray-300">React Native and Flutter apps that work seamlessly across multiple platforms</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Progressive Web Apps</h3>
                <p className="text-gray-300">Web applications that provide native app-like experiences in browsers</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our mobile development experts help you create the perfect app for your business.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Mobile Development Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MobileDevelopmentPage;