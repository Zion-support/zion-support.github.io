'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cloud, Shield, Zap, BarChart, Users, Target, 
  CheckCircle, Star, Phone, Mail, ArrowRight, Code, 
  Database, Smartphone, Globe, Settings, Package, Mic
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'Machine Learning Platform',
      description: 'End-to-end ML platform with automated model training, deployment, and monitoring.',
      icon: Brain,
      price: 'Starting at $2,999/month',
      features: ['Automated Model Training', 'Real-time Deployment', 'Model Monitoring', 'Enterprise Support']
    },
    {
      name: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis with object detection and facial recognition.',
      icon: Target,
      price: 'Starting at $1,499/month',
      features: ['Object Detection', 'Facial Recognition', 'Content Moderation', 'Real-time Processing']
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP capabilities including sentiment analysis and language translation.',
      icon: MessageCircle,
      price: 'Starting at $1,799/month',
      features: ['Sentiment Analysis', 'Language Translation', 'Conversational AI', 'Text Generation']
    },
    {
      name: 'Predictive Analytics Engine',
      description: 'AI-powered business forecasting with advanced statistical models.',
      icon: BarChart,
      price: 'Starting at $2,299/month',
      features: ['Business Forecasting', 'Statistical Models', 'Real-time Processing', 'Custom Dashboards']
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud solutions with AWS, Azure, and GCP including migration and optimization.',
      icon: Cloud,
      price: 'Starting at $1,999/month',
      features: ['Multi-cloud Support', 'Migration Services', 'Cost Optimization', '24/7 Monitoring']
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security suite with threat detection and automated incident response.',
      icon: Shield,
      price: 'Starting at $1,299/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance Management']
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with testing, monitoring, and continuous integration.',
      icon: Settings,
      price: 'Starting at $1,599/month',
      features: ['Automated Deployment', 'Testing Integration', 'Performance Monitoring', 'Scalable Infrastructure']
    },
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions with modern technologies and scalable architecture.',
      icon: Code,
      price: 'Starting at $2,499/month',
      features: ['Custom Development', 'Modern Technologies', 'Scalable Architecture', 'Ongoing Support']
    }
  ];

  const microSaasServices = [
    {
      name: 'AI Content Studio Pro',
      description: 'Complete AI-powered content creation suite with 50+ templates and SEO optimization.',
      icon: FileText,
      price: '$49/month',
      features: ['50+ Content Templates', 'SEO Optimization', 'Multi-platform Publishing', 'Brand Voice Training']
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence with AI insights and custom dashboards.',
      icon: BarChart,
      price: '$79/month',
      features: ['100+ Data Sources', 'Real-time Insights', 'Custom Dashboards', 'Automated Reports']
    },
    {
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing and 24/7 availability.',
      icon: MessageCircle,
      price: '$29/month',
      features: ['24/7 Availability', 'CRM Integration', 'Multi-language Support', 'Sentiment Analysis']
    },
    {
      name: 'Automated Email Marketing',
      description: 'AI-powered email campaigns with personalization and A/B testing.',
      icon: Mail,
      price: '$39/month',
      features: ['AI Personalization', 'A/B Testing', 'Advanced Analytics', 'Automated Sequences']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, business solutions, technology services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
              Our <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business operations 
              and drive unprecedented growth.
            </p>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text-enhanced">
              AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced p-8 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text-enhanced">
                      {service.price}
                    </div>
                    <a 
                      href="/contact" 
                      className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text-enhanced">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced p-8 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-4 neon-text-enhanced">
                      {service.price}
                    </div>
                    <a 
                      href="/contact" 
                      className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text-enhanced">
              Micro SAAS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced p-8 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text-enhanced">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-4 neon-text-enhanced">
                      {service.price}
                    </div>
                    <a 
                      href="/contact" 
                      className="w-full cyber-button text-center py-3 inline-flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text-enhanced">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get started with our AI and IT solutions today. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;