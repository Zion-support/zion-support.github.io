'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Smartphone, Code, Zap, CheckCircle, Phone, Mail, Brain, Shield, Users, Target, BarChart } from 'lucide-react';

const MobileAppDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Native Development',
      description: 'High-performance native mobile apps for iOS and Android with platform-specific optimizations.',
      benefits: ['iOS & Android', 'Native performance', 'Platform features']
    },
    {
      icon: Code,
      title: 'Cross-Platform',
      description: 'Single codebase for multiple platforms using React Native and Flutter for faster development.',
      benefits: ['Single codebase', 'Faster development', 'Consistent UI']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Integrate AI features like machine learning, natural language processing, and computer vision.',
      benefits: ['ML integration', 'NLP capabilities', 'Computer vision']
    },
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Agile development process with rapid prototyping and iterative improvements.',
      benefits: ['Agile methodology', 'Rapid prototyping', 'Iterative development']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with encryption, authentication, and compliance standards.',
      benefits: ['Data encryption', 'Secure authentication', 'Compliance ready']
    },
    {
      icon: BarChart,
      title: 'Analytics & Monitoring',
      description: 'Built-in analytics and crash reporting to monitor app performance and user behavior.',
      benefits: ['User analytics', 'Crash reporting', 'Performance monitoring']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,299',
      period: '/month',
      description: 'Perfect for small apps',
      features: [
        '1 platform (iOS or Android)',
        'Basic features',
        'Email support',
        'Standard design',
        '1 developer',
        'Basic testing'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '2 platforms (iOS & Android)',
        'Advanced features',
        'Priority support',
        'Custom design',
        '2 developers',
        'Comprehensive testing',
        'AI integration',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'All platforms',
        'Custom features',
        'Dedicated support',
        'Enterprise design',
        'Development team',
        'Full testing suite',
        'Custom AI models',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '50+', label: 'Apps Delivered' },
    { number: '4.8/5', label: 'App Store Rating' },
    { number: '90%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Mobile App Development - Zion Tech Group"
        description="Expert mobile app development for iOS and Android with 4.8/5 App Store rating. Native and cross-platform solutions with AI integration."
        keywords={['mobile app development', 'iOS app development', 'Android app development', 'cross-platform apps', 'app design', 'mobile solutions']}
        canonicalUrl="https://ziontechgroup.com/mobile-app-development"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Mobile App Development
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Expert mobile apps with 4.8/5 App Store rating
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert mobile app development team creates high-performance native and cross-platform 
                apps that deliver exceptional user experiences and drive business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Consultation</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Comprehensive App Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Transparent App Development Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 200+ businesses already using our app development services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Consultation</span>
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

export default MobileAppDevelopmentPage;