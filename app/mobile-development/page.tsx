'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Smartphone, Code, Zap, CheckCircle, ArrowRight, Users, Settings, Database, Shield, Globe } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native & Cross-Platform',
      description: 'Build for iOS, Android, or both with our expert development',
      benefits: ['Native performance', 'Cross-platform efficiency', 'Platform optimization']
    },
    {
      icon: Code,
      title: 'Modern Technologies',
      description: 'Latest frameworks and tools for mobile app development',
      benefits: ['React Native', 'Flutter', 'Swift & Kotlin']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized apps that deliver smooth user experiences',
      benefits: ['Fast loading', 'Smooth animations', 'Battery efficient']
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security and scalability built-in',
      benefits: ['Data encryption', 'Secure APIs', 'Cloud integration']
    }
  ];

  const services = [
    {
      title: 'iOS Development',
      description: 'Native iOS apps for iPhone and iPad',
      icon: '🍎',
      technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data']
    },
    {
      title: 'Android Development',
      description: 'Native Android apps for all devices',
      icon: '🤖',
      technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Room']
    },
    {
      title: 'React Native',
      description: 'Cross-platform apps with native performance',
      icon: '⚛️',
      technologies: ['React Native', 'Expo', 'Redux', 'TypeScript']
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful cross-platform apps with Flutter',
      icon: '🦋',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Bloc']
    },
    {
      title: 'Progressive Web Apps',
      description: 'App-like web experiences',
      icon: '🌐',
      technologies: ['PWA', 'Service Workers', 'Web App Manifest']
    },
    {
      title: 'App Maintenance',
      description: 'Ongoing support and updates',
      icon: '🔧',
      technologies: ['Bug fixes', 'Updates', 'Performance optimization']
    }
  ];

  const appTypes = [
    { name: 'E-commerce', logo: '🛒', description: 'Online shopping apps' },
    { name: 'Social Media', logo: '📱', description: 'Social networking platforms' },
    { name: 'Business', logo: '💼', description: 'Enterprise applications' },
    { name: 'Gaming', logo: '🎮', description: 'Mobile games' },
    { name: 'Health', logo: '🏥', description: 'Healthcare apps' },
    { name: 'Education', logo: '🎓', description: 'Learning platforms' }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group | iOS & Android Apps</title>
        <meta name="description" content="Build powerful mobile apps for iOS and Android. Native and cross-platform development with React Native and Flutter." />
        <meta name="keywords" content="mobile development, iOS apps, Android apps, React Native, Flutter, mobile app development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Mobile <span className="text-cyan-400">Development</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Create powerful mobile applications for iOS and Android. From native apps to cross-platform solutions, 
                we build mobile experiences that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your App
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
<<<<<<< HEAD
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
=======
>>>>>>> main
            </div>
          </div>
        </section>

        {/* App Types Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">App Types We Build</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We develop mobile apps for various industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 text-center hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{type.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our mobile development solutions provide everything you need for a successful app.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive mobile development services for all platforms and technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful mobile app delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">App strategy and market research</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                <p className="text-gray-300 text-sm">UI/UX design and prototyping</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Agile development and testing</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Launch</h3>
                <p className="text-gray-300 text-sm">App store deployment and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-8 text-center border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your mobile app idea and create an app that users love. 
                Get a free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Your App
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MobileDevelopmentPage;