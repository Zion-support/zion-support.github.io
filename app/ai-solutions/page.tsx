'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Cube, Mic, FileText, TrendingUp, Target, Shield, Search, Stethoscope, DollarSign, Truck, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
      benefits: ['40% better predictions', '60% faster insights', 'Custom solutions', 'Scalable architecture'],
      color: 'text-purple-400',
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Entity Recognition', 'Text Summarization'],
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing', 'Custom models'],
      color: 'text-blue-400',
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging'],
      benefits: ['95% accuracy', 'Real-time processing', 'Industry-specific models', 'Edge deployment'],
      color: 'text-green-400',
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Platform',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
      benefits: ['80% automation', '60% cost reduction', 'Error elimination', 'Scalable processes'],
      color: 'text-cyan-400',
      category: 'Automation'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations with AI-powered insights',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Automated Insights', 'Mobile Responsive'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      color: 'text-orange-400',
      category: 'Analytics'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology for gaming, AR/VR, and visualization',
      icon: Cube,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Physics Simulation', 'Rendering Optimization'],
      benefits: ['Professional quality', 'Time savings', 'Creative freedom', 'Industry-ready output'],
      color: 'text-pink-400',
      category: '3D & VR'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning, text-to-speech, and voice analysis solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Voice Analysis', 'Real-time Synthesis'],
      benefits: ['99% voice accuracy', 'Natural speech', 'Multiple languages', 'Real-time processing'],
      color: 'text-indigo-400',
      category: 'Voice AI'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing, communication, and documentation',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Technical Documentation', 'Creative Writing'],
      benefits: ['10x content output', 'SEO optimized', 'Brand consistency', 'Quality assurance'],
      color: 'text-yellow-400',
      category: 'Content AI'
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning and statistical modeling',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning', 'Market Intelligence'],
      benefits: ['85% accuracy', 'Better planning', 'Risk mitigation', 'Competitive advantage'],
      color: 'text-red-400',
      category: 'Predictive AI'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Real-time Updates', 'Cross-platform Sync'],
      benefits: ['35% conversion increase', 'Better user experience', 'Higher engagement', 'Revenue growth'],
      color: 'text-teal-400',
      category: 'Recommendation AI'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring with real-time threat detection',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Behavioral Analysis', 'Compliance Monitoring'],
      benefits: ['99% detection rate', 'False positive reduction', 'Real-time alerts', 'Compliance assurance'],
      color: 'text-red-500',
      category: 'Security AI'
    },
    {
      title: 'AI Document Processing',
      description: 'Intelligent document analysis, data extraction, and automated document management',
      icon: Search,
      price: '$1,200/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Compliance Checking'],
      benefits: ['95% accuracy', 'Faster processing', 'Cost reduction', 'Error elimination'],
      color: 'text-gray-400',
      category: 'Document AI'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Solutions - Zion Tech Group"
        description="Advanced AI solutions including machine learning, computer vision, natural language processing, and automation. Transform your business with cutting-edge AI technology."
        keywords="AI solutions, machine learning, computer vision, NLP, automation, artificial intelligence"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we provide comprehensive AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our AI experts are ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Your AI Journey
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AISolutionsPage;