'use client';
import React from 'react';
import { Smartphone, Code, Zap, Shield, BarChart, Settings, Globe, Palette } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MobileDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and modern iOS frameworks',
      icon: Smartphone,
      features: ['Swift Development', 'iOS Frameworks', 'App Store Optimization', 'Performance Tuning']
    },
    {
      title: 'Android App Development',
      description: 'Native Android applications using Kotlin and Java',
      icon: Code,
      features: ['Kotlin/Java', 'Android SDK', 'Google Play Optimization', 'Material Design']
    },
    {
      title: 'Cross-Platform Development',
      description: 'React Native and Flutter apps for both iOS and Android',
      icon: Globe,
      features: ['React Native', 'Flutter', 'Single Codebase', 'Native Performance']
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive mobile interfaces that users love',
      icon: Palette,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Professional mobile app development services for iOS, Android, and cross-platform solutions. Create engaging mobile experiences that drive business growth."
        keywords={['mobile app development', 'iOS development', 'Android development', 'React Native', 'Flutter', 'mobile UI/UX']}
        canonicalUrl="https://ziontechgroup.com/mobile-development"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Mobile App Development
            </h1>
            <p className="text-xl text-pink-400 mb-8 font-medium">
              Create Engaging Mobile Experiences
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Professional mobile app development for iOS, Android, and cross-platform solutions. 
              From concept to launch, we create mobile experiences that drive business growth.
            </p>
          </section>

          {/* Mobile Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mobileServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
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
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Mobile Development?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-3">Native Performance</h3>
                <p className="text-gray-300">Optimized apps that deliver smooth, native performance on all devices.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3">Beautiful Design</h3>
                <p className="text-gray-300">Stunning UI/UX design that engages users and drives conversions.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Development</h3>
                <p className="text-gray-300">Agile development process that delivers results quickly and efficiently.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Build Your Mobile App?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our mobile development experts help you create an app that users love. 
              Get a free consultation and discover how we can bring your mobile vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
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