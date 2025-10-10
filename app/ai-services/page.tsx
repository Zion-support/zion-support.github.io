'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, BarChart, Users, Shield, Cloud, Code, Database, MessageCircle, Target, TrendingUp, Settings, Cpu, Globe, Smartphone, Lock, CheckCircle, ArrowRight, Star, Award, Rocket, Layers, PieChart, Activity } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting for enterprise transformation.',
      features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'],
      pricing: 'Starting at $2,500/month',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Zap,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your specific business needs and data.',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Preprocessing', 'Model Optimization'],
      pricing: 'Starting at $1,800/month',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for chatbots, sentiment analysis, and text processing.',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Text Classification', 'Language Translation'],
      pricing: 'Starting at $1,200/month',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      icon: BarChart,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and quality control.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics'],
      pricing: 'Starting at $2,200/month',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Settings,
      title: 'AI Automation',
      description: 'Intelligent process automation to streamline operations and reduce manual work.',
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Task Scheduling'],
      pricing: 'Starting at $999/month',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Trend Analysis'],
      pricing: 'Starting at $1,500/month',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Intelligent customer service solutions with chatbots and automated responses.',
      features: ['24/7 Chatbot Support', 'Ticket Classification', 'Customer Insights', 'Multi-language Support'],
      pricing: 'Starting at $799/month',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Automated lead identification and qualification using AI algorithms.',
      features: ['Lead Scoring', 'Prospect Identification', 'Email Sequences', 'CRM Integration'],
      pricing: 'Starting at $1,299/month',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Average ROI',
      description: 'Our AI solutions deliver measurable returns within 6 months of implementation.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI implementations and data processing.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for all AI services.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Over 500 successful AI implementations across various industries.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, artificial intelligence consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Transform Your Business with Advanced Artificial Intelligence
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Our comprehensive AI services help businesses leverage cutting-edge artificial intelligence 
            to automate processes, gain insights, and drive growth. From machine learning to computer vision, 
            we deliver solutions that deliver real results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              📧 Get Free Consultation
            </a>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300 ${service.bgColor} ${service.borderColor} border`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${service.bgColor}`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-4 ${service.color} neon-text`}>
                    {service.pricing}
                  </div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${service.color} border-2 border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Our AI Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our AI Implementation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'We analyze your business needs and data to identify AI opportunities.' },
              { step: '02', title: 'Strategy & Planning', description: 'Develop a comprehensive AI strategy tailored to your objectives.' },
              { step: '03', title: 'Development & Testing', description: 'Build and rigorously test AI models and solutions.' },
              { step: '04', title: 'Deployment & Support', description: 'Deploy solutions and provide ongoing support and optimization.' }
            ].map((item, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals. 
              Get a free consultation and discover the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full sm:w-auto text-center">
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiServicesPage;