'use client';
import React from 'react';
import { Smartphone, Code, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMobileAppDevelopmentPage: React.FC = () => {
  const features = [
    'iOS/Android App Development',
    'Cross-platform Development',
    'AI Integration',
    'UI/UX Design',
    'App Store Optimization',
    'Mobile Security'
  ];

  const benefits = [
    '50% faster development',
    'Native performance',
    'AI-powered features',
    'Cross-platform compatibility'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Mobile App Development - Zion Tech Group"
        description="Native and cross-platform mobile application development with AI integration, modern frameworks, and cutting-edge mobile technologies."
        keywords={['mobile app development', 'ios android apps', 'cross-platform development', 'ai mobile apps', 'app store optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-mobile-app-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Mobile App Development
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Create powerful mobile applications with AI integration, native performance, 
              and cross-platform compatibility using the latest mobile development technologies.
            </p>
          </section>

          {/* Service Details */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Intelligent Mobile Solutions
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our mobile development experts create sophisticated applications that combine 
                  native performance with AI capabilities. From iOS to Android, we build apps 
                  that deliver exceptional user experiences.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-400 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <div className="text-center mb-6">
                  <Smartphone className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Starting at</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-4">$1,500/month</div>
                  <p className="text-gray-300">Complete mobile app development</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Native iOS and Android development</li>
                    <li>• Cross-platform solutions</li>
                    <li>• AI feature integration</li>
                    <li>• App store deployment</li>
                    <li>• Performance optimization</li>
                    <li>• Ongoing maintenance and updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Mobile Development Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {benefit.split(' ')[0]}
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our mobile development experts help you create intelligent, 
                high-performance mobile applications that engage your users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Start Your Mobile Project
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

export default AIMobileAppDevelopmentPage;