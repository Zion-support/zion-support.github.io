'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Smartphone, CheckCircle, ArrowRight, Zap, Shield, Target, BarChart, Users, Clock, Star, Settings, Globe, Database, Code, Monitor } from 'lucide-react';

const MobileDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description: 'High-performance native applications for iOS and Android platforms.',
      benefits: ['Native performance', 'Platform optimization', 'Access to device features', 'App store ready']
    },
    {
      icon: Code,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native and Flutter.',
      benefits: ['Code reusability', 'Faster development', 'Consistent UI', 'Cost effective']
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Quick development cycles with modern tools and frameworks.',
      benefits: ['Fast prototyping', 'Agile development', 'Quick iterations', 'Time to market']
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Enterprise-grade security and optimized performance for mobile apps.',
      benefits: ['Data encryption', 'Secure authentication', 'Performance optimization', 'Testing']
    }
  ];

  const developmentTypes = [
    {
      icon: Smartphone,
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and Objective-C.',
      features: ['Swift development', 'iOS SDK', 'App Store optimization', 'iOS design guidelines']
    },
    {
      icon: Monitor,
      title: 'Android Development',
      description: 'Native Android applications built with Kotlin and Java.',
      features: ['Kotlin development', 'Android SDK', 'Google Play optimization', 'Material Design']
    },
    {
      icon: Code,
      title: 'React Native',
      description: 'Cross-platform mobile apps using React Native framework.',
      features: ['JavaScript/TypeScript', 'Cross-platform', 'Native modules', 'Hot reload']
    },
    {
      icon: Globe,
      title: 'Flutter Development',
      description: 'Cross-platform mobile apps using Google\'s Flutter framework.',
      features: ['Dart language', 'Cross-platform', 'Custom widgets', 'Fast development']
    }
  ];

  const benefits = [
    'Reach customers on their preferred devices',
    'Improve user engagement and retention',
    'Access to device features and sensors',
    'Offline functionality and data sync',
    'Push notifications and real-time updates',
    'App store presence and discoverability',
    'Enhanced security and data protection',
    'Scalable and maintainable codebase'
  ];

  const pricing = [
    {
      name: 'Basic App',
      price: '$5,000',
      period: 'one-time',
      description: 'Simple mobile app with basic features',
      features: [
        'Basic UI/UX design',
        'Core functionality',
        'App store submission',
        '3 months support'
      ],
      popular: false
    },
    {
      name: 'Professional App',
      price: '$15,000',
      period: 'one-time',
      description: 'Feature-rich mobile app with advanced functionality',
      features: [
        'Custom UI/UX design',
        'Advanced features',
        'Backend integration',
        '6 months support',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise App',
      price: '$50,000',
      period: 'one-time',
      description: 'Complex enterprise mobile solution',
      features: [
        'Custom design system',
        'Complex integrations',
        'Advanced security',
        '12 months support',
        'Maintenance and updates'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Development | Zion Tech Group</title>
        <meta name="description" content="Professional mobile app development services for iOS and Android. Native and cross-platform solutions with modern technologies." />
        <meta name="keywords" content="mobile app development, iOS development, Android development, React Native, Flutter, mobile apps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Mobile Development
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional mobile app development services for iOS and Android. Native and cross-platform solutions with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Mobile Development?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We create mobile apps that deliver exceptional user experiences and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-400">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Types Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Development Types
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                We specialize in all major mobile development approaches and technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <type.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Mobile Apps
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your business with mobile applications that engage and retain customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Choose the development package that fits your mobile app needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app idea and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default MobileDevelopmentPage;