'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Cube, Mic, FileText, TrendingUp, Target, Shield, Search, Stethoscope, DollarSign, Truck, Zap as Lightning } from 'lucide-react';
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
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      color: 'text-purple-400',
      category: 'AI Development'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Intelligence',
      description: 'Transform complex data into interactive visualizations and actionable business insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Predictive Modeling', 'Anomaly Detection'],
      color: 'text-orange-400',
      category: 'Data Science'
    },
    {
      title: 'AI 3D & AR Solutions',
      description: 'Create 3D models, environments, and augmented reality experiences with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Spatial Computing', 'Mixed Reality'],
      color: 'text-pink-400',
      category: 'Immersive Tech'
    },
    {
      title: 'AI Voice & Audio',
      description: 'Advanced voice cloning, text-to-speech, and audio processing solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Audio Enhancement', 'Voice Biometrics'],
      color: 'text-indigo-400',
      category: 'Audio AI'
    },
    {
      title: 'AI Content Intelligence',
      description: 'Automated content creation, optimization, and management for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Strategy', 'Brand Voice Training'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting, trend analysis, and predictive modeling with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Market Intelligence', 'Scenario Planning'],
      color: 'text-red-400',
      category: 'Predictive AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Collaborative Filtering', 'Real-time Adaptation'],
      color: 'text-teal-400',
      category: 'Personalization'
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced fraud prevention, security monitoring, and threat intelligence',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring'],
      color: 'text-red-500',
      category: 'Security AI'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document analysis, data extraction, and automated processing',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Knowledge Management'],
      color: 'text-gray-400',
      category: 'Document AI'
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization',
      icon: Stethoscope,
      price: '$2,200/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      color: 'text-emerald-400',
      category: 'Healthcare AI'
    },
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced financial analysis, trading algorithms, and risk management',
      icon: DollarSign,
      price: '$1,800/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Credit Scoring', 'Market Analysis'],
      color: 'text-green-500',
      category: 'FinTech AI'
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management, logistics optimization, and demand forecasting',
      icon: Truck,
      price: '$1,600/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking'],
      color: 'text-blue-500',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Energy Management',
      description: 'Smart energy optimization, renewable energy integration, and sustainability solutions',
      icon: Lightning,
      price: '$1,500/month',
      features: ['Energy Optimization', 'Renewable Integration', 'Grid Management', 'Carbon Tracking', 'Predictive Maintenance', 'Smart Buildings'],
      color: 'text-yellow-500',
      category: 'Energy AI'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Advanced AI solutions including machine learning, computer vision, NLP, and automation. Transform your business with cutting-edge artificial intelligence technology."
        keywords={['AI solutions', 'machine learning', 'computer vision', 'NLP', 'automation', 'artificial intelligence', 'AI consulting']}
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
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced Artificial Intelligence for Enterprise
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive AI solutions. From machine learning to computer vision, 
              we provide cutting-edge artificial intelligence technology to drive innovation and growth.
            </p>
          </section>

          {/* AI Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our AI experts are ready to help you implement the perfect solution for your business needs.
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