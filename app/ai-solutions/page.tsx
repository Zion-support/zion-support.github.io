'use client';
import React, { useState, useEffect } from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Palette, Music, Heart, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Camera, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Target, Shield, Cpu, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AISolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      benefits: ['40% accuracy improvement', '60% faster insights', '85% automation rate'],
      link: '/ai-ml',
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      benefits: ['90% accuracy in text understanding', '50% faster processing', 'Multi-language support'],
      link: '/ai-nlp',
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      benefits: ['95% detection accuracy', 'Real-time processing', 'Advanced analytics'],
      link: '/ai-vision',
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      benefits: ['70% process reduction', '90% error elimination', '24/7 operation'],
      link: '/ai-automation',
      color: 'text-cyan-400'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visual insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Visualizations', 'Data Storytelling'],
      benefits: ['80% faster insights', '60% better decisions', 'Real-time monitoring'],
      link: '/ai-data-visualization',
      color: 'text-orange-400'
    },
    {
      title: 'AI Fashion Design',
      description: 'Revolutionary AI-powered fashion design and trend analysis',
      icon: Palette,
      price: '$1,600/month',
      features: ['Trend Prediction', 'Design Generation', 'Color Analysis', 'Style Recommendations'],
      benefits: ['50% faster design process', '90% trend accuracy', 'Cost reduction'],
      link: '/ai-fashion-design',
      color: 'text-pink-400'
    },
    {
      title: 'AI Music Composition',
      description: 'Create original music compositions using artificial intelligence',
      icon: Music,
      price: '$1,300/month',
      features: ['Original Compositions', 'Genre Adaptation', 'Mood-based Creation', 'Collaborative Tools'],
      benefits: ['Unlimited creativity', 'Professional quality', 'Time savings'],
      link: '/ai-music-composition',
      color: 'text-indigo-400'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching powered by AI and machine learning',
      icon: Heart,
      price: '$999/month',
      features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Health Monitoring'],
      benefits: ['40% better results', 'Personalized approach', '24/7 guidance'],
      link: '/ai-fitness-coach',
      color: 'text-red-400'
    }
  ];

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization',
      icon: '📊',
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      link: '/ai-project-manager',
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation',
      icon: '📱',
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      link: '/ai-social-media-manager',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI',
      icon: '📈',
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      link: '/ai-analytics',
      popular: true
    },
    {
      title: 'AI Email Marketing',
      description: 'Transform your email marketing with AI-powered automation',
      icon: '📧',
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      link: '/ai-email-marketing',
      popular: true
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, NLP, computer vision, and automation. Transform your business with cutting-edge artificial intelligence technology."
        keywords={['AI solutions', 'machine learning', 'natural language processing', 'computer vision', 'AI automation', 'artificial intelligence', 'ML models', 'NLP', 'computer vision']}
        canonicalUrl="https://ziontechgroup.com/ai-solutions"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Solutions',
          provider: {
            '@type': 'Organization',
            name: 'Zion Tech Group'
          },
          description: 'Comprehensive AI solutions including machine learning, NLP, computer vision, and automation.',
          serviceType: 'Artificial Intelligence Services',
          areaServed: 'US',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: 'https://ziontechgroup.com/ai-solutions',
            servicePhone: '+1-302-464-0950'
          }
        }}
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="AI Solutions"
              >
                AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Transform Your Business with Artificial Intelligence
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leverage cutting-edge AI technology to automate processes, gain insights, and drive innovation. 
                Our comprehensive AI solutions are designed to solve complex business challenges and unlock new opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Enterprise AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Advanced artificial intelligence solutions tailored for enterprise applications
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href={service.link} 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="mb-16" aria-labelledby="micro-saas-heading">
            <h2 id="micro-saas-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Powerful, affordable AI-powered tools designed for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                    <a 
                      href={service.link} 
                      className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Why Choose Our AI Solutions */}
          <section className="mb-16" aria-labelledby="why-choose-heading">
            <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our AI Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert AI Team</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Our team of AI experts and data scientists bring years of experience in machine learning, deep learning, and AI implementation.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Results</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We've helped businesses achieve 300% ROI, 70% cost reduction, and 90% efficiency gains through our AI solutions.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bank-level security and compliance for your critical data and AI models with SOC 2 Type II certification.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Business?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Location className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
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

export default AISolutionsPage;