'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Zap,
  Shield,
  BarChart3,
  Users,
  Clock,
  Award,
  Target,
  Globe
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions to automate and optimize your business processes with cutting-edge machine learning and deep learning technologies.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting', 'Custom AI Development'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2,500/month',
      freeTrial: '30 days',
      rating: 4.9,
      reviews: 1247,
      users: 'Up to 100 users'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation platform that delivers personalized campaigns, intelligent optimization, and unprecedented ROI.',
      features: ['Campaign Automation', 'AI Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel Integration', 'Customer Segmentation'],
      price: 'Starting at $299/month',
      marketPrice: '$499/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 892,
      users: 'Up to 50,000 contacts'
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Intelligent customer support system with advanced chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Automated Ticket Routing', 'Knowledge Base', '24/7 Support', 'Multi-language Support'],
      price: 'Starting at $199/month',
      marketPrice: '$399/month',
      freeTrial: '14 days',
      rating: 4.7,
      reviews: 567,
      users: 'Up to 1,000 tickets/month'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time business intelligence.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models', 'Data Mining'],
      price: 'Starting at $399/month',
      marketPrice: '$699/month',
      freeTrial: '14 days',
      rating: 4.8,
      reviews: 743,
      users: 'Up to 1TB data processing'
    },
    {
      icon: Globe,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, video production, and multi-language support.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice Training'],
      price: 'Starting at $149/month',
      marketPrice: '$299/month',
      freeTrial: '7 days',
      rating: 4.6,
      reviews: 1234,
      users: 'Up to 1,000 content pieces/month'
    },
    {
      icon: Shield,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, patient care optimization, and clinical decision support.',
      features: ['Medical Imaging AI', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance', 'Clinical Trials'],
      price: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      freeTrial: '30 days',
      rating: 4.9,
      reviews: 234,
      users: 'Up to 1,000 patients'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Faster Implementation',
      description: 'Get your AI solutions up and running in weeks, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your AI applications'
    },
    {
      icon: BarChart3,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months of implementation'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of AI specialists'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services. From machine learning to computer vision, we provide cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, natural language processing, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we provide comprehensive AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Get AI Consultation</span>
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                      {service.marketPrice && (
                        <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                      )}
                    </div>
                    {service.users && (
                      <div className="text-sm text-gray-300 mb-2">{service.users}</div>
                    )}
                    {service.freeTrial && (
                      <div className="text-sm text-green-400 font-medium mb-2">{service.freeTrial} free trial</div>
                    )}
                    {service.rating && (
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300 ml-2">{service.rating} ({service.reviews} reviews)</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI needs and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Brain className="w-5 h-5" />
                  <span>Get Free AI Consultation</span>
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;