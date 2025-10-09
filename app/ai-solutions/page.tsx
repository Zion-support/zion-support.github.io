'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Palette, Music, Heart, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
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
      benefits: ['40% accuracy improvement', 'Real-time predictions', 'Scalable infrastructure'],
      link: '/ai-ml',
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      benefits: ['95% accuracy in sentiment', 'Multi-language support', 'Real-time processing'],
      link: '/ai-nlp',
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      benefits: ['99% detection accuracy', 'Real-time processing', 'Custom model training'],
      link: '/ai-vision',
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      benefits: ['80% process reduction', '24/7 operation', 'Error-free execution'],
      link: '/ai-automation',
      color: 'text-cyan-400'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visual insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Visualizations', 'Data Storytelling'],
      benefits: ['50% faster insights', 'Interactive reports', 'Mobile-responsive'],
      link: '/ai-data-visualization',
      color: 'text-orange-400'
    },
    {
      title: 'AI Fashion Design',
      description: 'AI-powered fashion design and trend prediction',
      icon: Palette,
      price: '$1,300/month',
      features: ['Trend Prediction', 'Design Generation', 'Color Analysis', 'Style Recommendations'],
      benefits: ['90% trend accuracy', 'Faster design cycles', 'Market insights'],
      link: '/ai-fashion-design',
      color: 'text-pink-400'
    },
    {
      title: 'AI Music Composition',
      description: 'Create original music with AI-powered composition tools',
      icon: Music,
      price: '$1,000/month',
      features: ['Original Compositions', 'Style Adaptation', 'Lyric Generation', 'Audio Production'],
      benefits: ['Unlimited compositions', 'Multiple genres', 'Professional quality'],
      link: '/ai-music-composition',
      color: 'text-indigo-400'
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized fitness training with AI-powered recommendations',
      icon: Heart,
      price: '$800/month',
      features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Injury Prevention'],
      benefits: ['30% better results', 'Personalized plans', '24/7 guidance'],
      link: '/ai-fitness-coach',
      color: 'text-red-400'
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Cost Reduction', value: '60%', icon: TrendingUp },
    { label: 'Processing Speed', value: '10x', icon: Zap }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Advanced AI solutions including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge artificial intelligence."
        keywords={['AI solutions', 'machine learning', 'natural language processing', 'computer vision', 'AI automation', 'artificial intelligence']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Advanced Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our comprehensive AI solutions help businesses automate processes, gain insights from data, 
              and create intelligent systems that drive growth and efficiency.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our AI Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 hover:scale-105 transition-all duration-300">
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

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our AI experts help you implement the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
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

export default AISolutionsPage;