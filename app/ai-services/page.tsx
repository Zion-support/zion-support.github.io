'use client';
import React from 'react';
import { Brain, Zap, Target, Shield, Code, BarChart, Users, Globe, Lock, Smartphone, CheckCircle, ArrowRight, Star, Award, Clock, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Change Management'],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: Zap,
      title: 'AI Automation Solutions',
      description: 'Intelligent process automation to streamline your business operations',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Task Scheduling'],
      pricing: 'Starting at $3,000/month'
    },
    {
      icon: Target,
      title: 'AI Marketing Solutions',
      description: 'AI-powered marketing automation and customer engagement platforms',
      features: ['Predictive Analytics', 'Personalized Campaigns', 'Customer Segmentation', 'Lead Scoring'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: Shield,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI applications for diagnosis, treatment, and patient care',
      features: ['Medical Imaging AI', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support'],
      pricing: 'Starting at $10,000/month'
    },
    {
      icon: TrendingUp,
      title: 'AI Fintech Solutions',
      description: 'Financial AI applications for risk assessment and fraud detection',
      features: ['Risk Modeling', 'Fraud Detection', 'Algorithmic Trading', 'Credit Scoring'],
      pricing: 'Starting at $7,500/month'
    },
    {
      icon: Code,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced natural language processing',
      features: ['Text Generation', 'Content Optimization', 'Multilingual Support', 'SEO Integration'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Advanced data analytics and business intelligence powered by AI',
      features: ['Predictive Analytics', 'Real-time Insights', 'Data Visualization', 'Trend Analysis'],
      pricing: 'Starting at $4,000/month'
    },
    {
      icon: Globe,
      title: 'AI E-commerce Solutions',
      description: 'E-commerce AI platforms for enhanced customer experience',
      features: ['Recommendation Engines', 'Price Optimization', 'Inventory Management', 'Customer Service'],
      pricing: 'Starting at $3,500/month'
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions for threat detection and prevention',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      pricing: 'Starting at $6,000/month'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile Applications',
      description: 'Mobile AI applications for iOS and Android platforms',
      features: ['Voice Recognition', 'Image Processing', 'Location Services', 'Push Notifications'],
      pricing: 'Starting at $8,000/month'
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Intelligent customer support systems with chatbots and automation',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: Target,
      title: 'AI Sales Automation',
      description: 'Sales process automation and optimization using AI',
      features: ['Lead Qualification', 'Sales Forecasting', 'Pipeline Management', 'Performance Analytics'],
      pricing: 'Starting at $3,000/month'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities',
      icon: Brain
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your goals',
      icon: Target
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Build and deploy AI solutions using cutting-edge technology',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and continuous optimization for best results',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Launch your AI solution with ongoing support and maintenance',
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 300%'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Data-driven insights and predictions to make smarter business decisions'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'AI-powered security solutions to protect your business from threats'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Personalized experiences and 24/7 customer support with AI chatbots'
    },
    {
      icon: BarChart,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 40% through intelligent automation'
    },
    {
      icon: Globe,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technology'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From strategy to implementation, 
              we deliver cutting-edge artificial intelligence that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Our AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  <a
                    href="/contact"
                    className="cyber-button-small inline-flex items-center w-full justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Our AI Implementation Process
            </h2>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Why Choose Our AI Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your AI needs and create a customized solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Start Your AI Journey
                </a>
                <a
                  href="/pricing"
                  className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
                >
                  <Star className="w-5 h-5 mr-2" />
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPage;