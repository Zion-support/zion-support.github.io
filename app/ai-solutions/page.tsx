'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Cube, Mic, FileText, TrendingUp, Target, Shield, Search, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400',
      category: 'AI Development',
      link: '/ai-ml'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400',
      category: 'AI Development',
      link: '/ai-nlp'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400',
      category: 'AI Development',
      link: '/ai-vision'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400',
      category: 'Automation',
      link: '/ai-automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400',
      category: 'Data Science',
      link: '/ai-data-visualization'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400',
      category: '3D & Graphics',
      link: '/ai-3d-generation'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400',
      category: 'Voice Technology',
      link: '/ai-voice-synthesis'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400',
      category: 'Content AI',
      link: '/ai-content-writer'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400',
      category: 'Analytics',
      link: '/ai-analytics'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400',
      category: 'Personalization',
      link: '/ai-sales-automation'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500',
      category: 'Security',
      link: '/ai-fraud-detection'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and data extraction',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition'],
      color: 'text-gray-400',
      category: 'Document AI',
      link: '/ai-customer-support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Solutions">AI Solutions</h1><p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Advanced artificial intelligence solutions designed to transform your business operations and drive unprecedented growth.</p>
          </p>
        </section>

        {/* AI Services Grid */}
        <section className="mb-16" aria-labelledby="ai-services-heading">
          <h2 id="ai-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">Our AI Services</h2><p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">Comprehensive AI solutions tailored to your business needs</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">{aiServices.map((service, index) => (</section>
              <a
                key={index}
                href={service.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4"></div>
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span><h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3><p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:<ul className="space-y-1">{service.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Choose Our AI Solutions */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our AI Solutions?</h2>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <Brain className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3><p className="text-gray-300">We use the latest AI technologies and frameworks to deliver state-of-the-art solutions.</p>
              </div>

              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <Target className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3><p className="text-gray-300">Every AI solution is tailored to your specific business needs and requirements.</p>
              </div>

              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4"></div>
                  <Shield className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3><p className="text-gray-300">Bank-level security and compliance for all your AI implementations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business with AI?</h2><p className="text-lg text-gray-300 mb-8">Contact us today to discuss how our AI solutions can revolutionize your business operations.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Consultation</a>
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" >Call +1 302 464 0950</ArrowRight>
              </ArrowRight>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISolutionsPage;