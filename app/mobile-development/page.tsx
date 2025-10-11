'use client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, Users, BarChart, Settings, Server, Target, Brain, Database, Globe, Monitor, Cloud } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description: 'High-performance native apps for iOS and Android',
      features: ['iOS Development', 'Android Development', 'Native Performance', 'Platform-Specific Features']
    },
    {
      icon: Code,
      title: 'Cross-Platform Apps',
      description: 'Single codebase apps that work on multiple platforms',
      features: ['React Native', 'Flutter', 'Xamarin', 'Ionic']
    },
    {
      icon: Zap,
      title: 'Progressive Web Apps',
      description: 'Web apps that work like native mobile applications',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Easy Deployment']
    },
    {
      icon: Shield,
      title: 'App Security & Testing',
      description: 'Comprehensive security and quality assurance',
      features: ['Security Audits', 'Performance Testing', 'User Testing', 'App Store Optimization']
    }
  ];

  const platforms = [
    {
      name: 'iOS Development',
      description: 'Native iOS apps using Swift and Objective-C',
      features: ['Swift', 'Objective-C', 'Xcode', 'iOS SDK'],
      icon: Smartphone
    },
    {
      name: 'Android Development',
      description: 'Native Android apps using Kotlin and Java',
      features: ['Kotlin', 'Java', 'Android Studio', 'Android SDK'],
      icon: Smartphone
    },
    {
      name: 'React Native',
      description: 'Cross-platform apps using React Native',
      features: ['JavaScript', 'React', 'Native Modules', 'Hot Reload'],
      icon: Code
    },
    {
      name: 'Flutter',
      description: 'Cross-platform apps using Flutter and Dart',
      features: ['Dart', 'Flutter SDK', 'Material Design', 'Cupertino Design'],
      icon: Code
    }
  ];

  const industries = [
    {
      name: 'E-Commerce',
      description: 'Mobile shopping and payment solutions',
      icon: Globe
    },
    {
      name: 'Healthcare',
      description: 'Medical apps and patient management',
      icon: Shield
    },
    {
      name: 'Finance',
      description: 'Banking and financial services apps',
      icon: BarChart
    },
    {
      name: 'Education',
      description: 'Learning management and educational apps',
      icon: Brain
    }
  ];

  const stats = [
    { number: '50+', label: 'Mobile Apps' },
    { number: '4.8★', label: 'Average Rating' },
    { number: '1M+', label: 'Downloads' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Development Services - Zion Tech Group | iOS & Android Apps</title>
        <meta name="description" content="Professional mobile app development services for iOS, Android, and cross-platform solutions. Native and hybrid mobile applications." />
        <meta name="keywords" content="mobile development, iOS apps, Android apps, React Native, Flutter, mobile app development" />
        <meta property="og:title" content="Mobile Development Services - Zion Tech Group" />
        <meta property="og:description" content="Professional mobile app development for iOS and Android" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mobile Development
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Native & Cross-Platform Mobile Applications
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Create powerful mobile applications that engage users and drive business growth. 
              We develop native iOS, Android, and cross-platform apps using the latest technologies and best practices.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Mobile Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Platforms Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Development Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <ul className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Build Your Mobile App?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our mobile development experts help you create a powerful mobile application that engages users and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your App Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MobileDevelopmentPage;