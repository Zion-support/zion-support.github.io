'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck, DollarSign, Clock, TrendingDown as TrendingDownIcon } from 'lucide-react';

const AIMobileAppDevelopmentPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Development',
      description: 'Automated code generation and intelligent development assistance',
      icon: Code,
      benefits: ['50% faster development', 'Reduced bugs', 'Better code quality', 'Automated testing']
    },
    {
      title: 'Smart UI/UX Design',
      description: 'AI-generated user interfaces optimized for user experience',
      icon: Palette,
      benefits: ['Personalized interfaces', 'A/B testing', 'User behavior analysis', 'Optimized layouts']
    },
    {
      title: 'Intelligent Testing',
      description: 'AI-powered automated testing and quality assurance',
      icon: Shield,
      benefits: ['Automated test generation', 'Bug detection', 'Performance optimization', 'Quality assurance']
    },
    {
      title: 'Cross-Platform Development',
      description: 'Build for iOS and Android with a single codebase',
      icon: Smartphone,
      benefits: ['Single codebase', 'Faster deployment', 'Consistent experience', 'Cost reduction']
    },
    {
      title: 'Real-time Analytics',
      description: 'AI-powered analytics and user behavior tracking',
      icon: BarChart,
      benefits: ['User insights', 'Performance monitoring', 'Crash analysis', 'Usage patterns']
    },
    {
      title: 'App Store Optimization',
      description: 'AI-powered ASO for better app store visibility',
      icon: Search,
      benefits: ['Keyword optimization', 'Better rankings', 'Increased downloads', 'Revenue growth']
    }
  ];

  const platforms = [
    {
      title: 'iOS Development',
      description: 'Native iOS apps with AI integration',
      icon: '🍎',
      technologies: ['Swift', 'SwiftUI', 'Core ML', 'ARKit', 'SiriKit']
    },
    {
      title: 'Android Development',
      description: 'Native Android apps with AI capabilities',
      icon: '🤖',
      technologies: ['Kotlin', 'Jetpack Compose', 'TensorFlow Lite', 'ML Kit', 'Google Assistant']
    },
    {
      title: 'React Native',
      description: 'Cross-platform development with AI features',
      icon: '⚛️',
      technologies: ['React Native', 'JavaScript', 'TypeScript', 'AI SDKs', 'Native modules']
    },
    {
      title: 'Flutter',
      description: 'Beautiful cross-platform apps with AI integration',
      icon: '🎯',
      technologies: ['Dart', 'Flutter', 'TensorFlow Lite', 'Firebase ML', 'Custom AI models']
    }
  ];

  const services = [
    {
      title: 'App Strategy & Planning',
      description: 'AI-powered app strategy and development planning',
      icon: Target,
      deliverables: ['Market analysis', 'Feature planning', 'Technical architecture', 'Timeline estimation']
    },
    {
      title: 'UI/UX Design',
      description: 'AI-enhanced user interface and experience design',
      icon: Palette,
      deliverables: ['Wireframes', 'Prototypes', 'Design systems', 'User testing']
    },
    {
      title: 'Development',
      description: 'AI-assisted mobile app development',
      icon: Code,
      deliverables: ['Native development', 'Cross-platform apps', 'AI integration', 'API development']
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing and quality assurance',
      icon: Shield,
      deliverables: ['Automated testing', 'Manual testing', 'Performance testing', 'Security testing']
    },
    {
      title: 'Deployment',
      description: 'App store deployment and launch support',
      icon: Cloud,
      deliverables: ['App store submission', 'Launch strategy', 'Marketing support', 'Post-launch monitoring']
    },
    {
      title: 'Maintenance',
      description: 'Ongoing maintenance and updates',
      icon: Settings,
      deliverables: ['Bug fixes', 'Feature updates', 'Performance optimization', 'Security updates']
    }
  ];

  const pricing = [
    {
      name: 'Basic App',
      price: 5000,
      description: 'Simple mobile app with basic features',
      features: [
        'Single platform (iOS or Android)',
        'Basic UI/UX design',
        'Standard features',
        '3 months support',
        'App store submission',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional App',
      price: 15000,
      description: 'Feature-rich app with AI integration',
      features: [
        'Cross-platform development',
        'Custom UI/UX design',
        'AI features integration',
        '6 months support',
        'Advanced analytics',
        'Push notifications',
        'Backend integration',
        'App store optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise App',
      price: 50000,
      description: 'Complex enterprise app with advanced AI',
      features: [
        'Multi-platform support',
        'Custom AI development',
        'Advanced security',
        '12 months support',
        'Custom analytics',
        'White-label options',
        'Dedicated team',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            AI Mobile App Development
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Create intelligent mobile applications with AI-powered development tools. 
            Build faster, smarter, and more engaging mobile experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Your Project
            </a>
            <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              <PhoneIcon className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            AI-Powered Development Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platforms Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Development Platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{platform.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{platform.description}</p>
                
                <div className="space-y-2">
                  {platform.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center text-sm text-gray-300">
                      <Code className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-2">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Development Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Transparent pricing for mobile app development projects of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400">/project</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white' 
                      : 'bg-cyan-400 text-slate-900'
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Build Your AI Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your mobile app idea and create an intelligent, 
              engaging application that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Your Project
              </a>
              <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIMobileAppDevelopmentPage;