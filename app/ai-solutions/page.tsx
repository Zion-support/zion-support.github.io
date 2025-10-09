'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Palette, Music, Heart, ArrowRight, CheckCircle, Star, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      link: '/ai-ml'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      link: '/ai-nlp'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      link: '/ai-vision'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      link: '/ai-automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visual insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Visualizations', 'Data Storytelling'],
      color: 'text-pink-400',
      link: '/ai-data-visualization'
    },
    {
      title: 'AI Fashion Design',
      description: 'AI-powered fashion design and trend analysis',
      icon: Palette,
      price: '$1,300/month',
      features: ['Trend Analysis', 'Design Generation', 'Color Matching', 'Style Recommendations'],
      color: 'text-rose-400',
      link: '/ai-fashion-design'
    },
    {
      title: 'AI Music Composition',
      description: 'AI-generated music and sound design solutions',
      icon: Music,
      price: '$1,000/month',
      features: ['Music Generation', 'Sound Design', 'Genre Adaptation', 'Custom Compositions'],
      color: 'text-violet-400',
      link: '/ai-music-composition'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness and health coaching with AI',
      icon: Heart,
      price: '$800/month',
      features: ['Personalized Workouts', 'Health Monitoring', 'Nutrition Planning', 'Progress Tracking'],
      color: 'text-emerald-400',
      link: '/ai-fitness-coach'
    }
  ];

  const microSAASServices = [
    {
      title: 'AI Project Manager',
      description: 'Intelligent project planning with AI-powered resource optimization',
      icon: '📊',
      price: '$99/month',
      link: '/ai-project-manager'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation',
      icon: '📱',
      price: '$79/month',
      link: '/ai-social-media-manager'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights',
      icon: '📈',
      price: '$149/month',
      link: '/ai-analytics'
    },
    {
      title: 'AI Email Marketing',
      description: 'AI-powered email marketing automation',
      icon: '📧',
      price: '$99/month',
      link: '/ai-email-marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support',
      icon: '🤖',
      price: '$149/month',
      link: '/ai-customer-support-bot'
    },
    {
      title: 'AI Code Review Assistant',
      description: 'Automated code analysis and optimization',
      icon: '🔍',
      price: '$89/month',
      link: '/ai-code-generation'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Advanced AI solutions including machine learning, natural language processing, computer vision, and AI automation services for enterprise applications."
        keywords={['AI solutions', 'machine learning', 'NLP', 'computer vision', 'AI automation', 'artificial intelligence']}
        canonicalUrl="https://ziontechgroup.com/ai-solutions"
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
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="AI Solutions"
              >
                AI Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Advanced Artificial Intelligence Services
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge AI technologies. From machine learning to computer vision, 
                we provide comprehensive AI solutions that drive innovation and growth.
              </p>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16" aria-labelledby="ai-services-heading">
            <h2 id="ai-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Enterprise AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive AI solutions designed for enterprise applications
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
              Micro SAAS AI Tools
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Affordable AI-powered tools for modern businesses
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {microSAASServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Over 5 years of experience in AI development with 100+ successful projects delivered
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Ready</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Scalable solutions designed for enterprise environments with 99.9% uptime guarantee
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ROI Focused</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Average 300% ROI with measurable business impact and cost savings
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Transform Your Business with AI?
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
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
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