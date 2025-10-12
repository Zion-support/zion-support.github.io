'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ArrowRight, Star, Users, Award, Zap, Shield, Brain, BarChart, Target, Settings, Globe, Database, Server, Mail, Phone, MapPin, Clock, TrendingUp, FileText, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Wifi, Package, ShoppingCart, Sparkles, Cpu, Workflow, MessageCircle, Eye, Mic, Code } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: 'Native & Cross-Platform',
      description: 'iOS and Android apps with React Native and Flutter for maximum reach',
      benefits: ['iOS & Android', 'Single codebase', 'Native performance', 'Platform-specific features']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Performance Optimized',
      description: 'Lightning-fast apps with optimized loading times and smooth animations',
      benefits: ['Fast loading', 'Smooth animations', 'Memory optimization', 'Battery efficiency']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with data encryption and secure authentication',
      benefits: ['Data encryption', 'Secure authentication', 'Privacy compliance', 'App store approval']
    },
    {
      icon: <Settings className="w-8 h-8 text-red-400" />,
      title: 'App Store Optimization',
      description: 'Complete app store deployment and optimization for maximum visibility',
      benefits: ['App store submission', 'ASO optimization', 'Metadata optimization', 'Review management']
    }
  ];

  const mobileServices = [
    {
      title: 'iOS Apps',
      description: 'Native iOS applications built with Swift and SwiftUI',
      price: '$15,000 - $75,000',
      features: ['Swift/SwiftUI', 'Core Data', 'Push notifications', 'App Store submission']
    },
    {
      title: 'Android Apps',
      description: 'Native Android applications built with Kotlin and Jetpack Compose',
      price: '$12,000 - $60,000',
      features: ['Kotlin/Compose', 'Room database', 'Firebase integration', 'Play Store submission']
    },
    {
      title: 'Cross-Platform Apps',
      description: 'React Native and Flutter apps for both iOS and Android',
      price: '$20,000 - $100,000',
      features: ['React Native/Flutter', 'Shared codebase', 'Native modules', 'Both platforms']
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web-based mobile apps with native-like experience',
      price: '$8,000 - $40,000',
      features: ['PWA technology', 'Offline functionality', 'Push notifications', 'App-like experience']
    }
  ];

  const stats = [
    { number: '100+', label: 'Mobile Apps Built', icon: <Smartphone className="w-6 h-6 text-cyan-400" /> },
    { number: '4.8/5', label: 'Average Rating', icon: <Star className="w-6 h-6 text-green-400" /> },
    { number: '50%', label: 'Faster Development', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Development - Zion Tech Group | iOS, Android & Cross-Platform Apps</title>
        <meta name="description" content="Professional mobile app development services for iOS, Android, and cross-platform solutions. Build high-performance mobile apps with React Native, Flutter, and native technologies." />
        <meta name="keywords" content="mobile app development, iOS apps, Android apps, React Native, Flutter, cross-platform apps, mobile development" />
        <link rel="canonical" href="https://ziontechgroup.com/mobile-development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Smartphone className="w-4 h-4" />
              <span>Mobile Development</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Mobile Apps for{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Every Platform
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning mobile applications for iOS, Android, and cross-platform solutions. 
              From native apps to React Native and Flutter, we build it all.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <span>Build Your App</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Our Apps</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mobile Development <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge mobile development with modern technologies and best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Services Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mobile <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive mobile development solutions for every platform and need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-purple-400 mb-6">
                    {service.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build Your Mobile App?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create a stunning mobile app that engages users and drives business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Your App
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;