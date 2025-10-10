'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Settings, Calendar, CheckSquare, FileText, 
  MessageCircle, Heart, DollarSign, Box, Monitor, Package,
  Star, CheckCircle, ExternalLink, Play, Download, Mail,
  Phone, MapPin, Clock, Award, Rocket, Lightbulb, Eye,
  Mic, Image, Search, Bot, Layers, Workflow, BarChart3
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      description: 'Advanced AI-powered analytics that transforms your data into actionable business insights.',
      icon: BarChart3,
      price: 'Starting at $199/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Machine learning models',
        'API integration'
      ],
      benefits: [
        'Increase decision speed by 300%',
        'Reduce data analysis time by 80%',
        'Improve accuracy by 95%',
        'Generate insights automatically'
      ],
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Market Research'],
      stats: { clients: '500+', accuracy: '95%', savings: '$2M+' },
      cta: 'Request Demo'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that streamline workflows and eliminate manual tasks.',
      icon: Workflow,
      price: 'Starting at $149/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data extraction',
        'Task scheduling',
        'Error handling'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Eliminate human errors',
        'Process 10x more data',
        '24/7 automated operations'
      ],
      useCases: ['Document Processing', 'Email Management', 'Data Entry', 'Customer Onboarding'],
      stats: { processes: '1000+', efficiency: '70%', timeSaved: '40hrs/week' },
      cta: 'Start Free Trial'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solutions that provide 24/7 customer support with human-like interactions.',
      icon: Bot,
      price: 'Starting at $99/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Escalation management',
        'Custom training',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Handle 80% of queries automatically',
        'Increase customer satisfaction'
      ],
      useCases: ['Customer Support', 'Sales Assistance', 'Lead Qualification', 'FAQ Automation'],
      stats: { queries: '1M+', satisfaction: '92%', costReduction: '60%' },
      cta: 'Get Started'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Studio',
      description: 'Comprehensive content creation platform powered by advanced AI models.',
      icon: FileText,
      price: 'Starting at $79/month',
      features: [
        'Article generation',
        'Social media content',
        'Email campaigns',
        'SEO optimization',
        'Brand voice training',
        'Content scheduling'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Scale content production'
      ],
      useCases: ['Content Marketing', 'Social Media', 'Email Campaigns', 'Blog Management'],
      stats: { content: '50K+', engagement: '40%', timeSaved: '85%' },
      cta: 'Try Free'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Experience',
      description: 'End-to-end customer experience platform with AI-powered personalization.',
      icon: Users,
      price: 'Starting at $199/month',
      features: [
        'Customer journey mapping',
        'Personalized recommendations',
        'Behavioral analysis',
        'Churn prediction',
        'Lifetime value optimization',
        'A/B testing'
      ],
      benefits: [
        'Increase customer retention by 45%',
        'Boost lifetime value by 60%',
        'Reduce churn by 35%',
        'Personalize every interaction'
      ],
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Financial Services'],
      stats: { retention: '45%', ltv: '60%', churn: '-35%' },
      cta: 'Request Demo'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Security Suite',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention.',
      icon: Shield,
      price: 'Starting at $299/month',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Compliance monitoring',
        'Risk assessment',
        'Incident management'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Prevent 99.9% of attacks',
        'Automated incident response'
      ],
      useCases: ['Enterprise Security', 'Compliance', 'Threat Hunting', 'Incident Response'],
      stats: { threats: '1M+', accuracy: '99.9%', response: '10x' },
      cta: 'Security Audit'
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Intelligence',
      description: 'Comprehensive data analytics platform with AI-powered insights and visualization.',
      icon: Database,
      price: 'Starting at $179/month',
      features: [
        'Data integration',
        'Real-time processing',
        'Predictive modeling',
        'Data visualization',
        'Automated insights',
        'Custom algorithms'
      ],
      benefits: [
        'Process data 100x faster',
        'Generate insights automatically',
        'Improve data quality by 90%',
        'Enable data-driven decisions'
      ],
      useCases: ['Business Intelligence', 'Data Science', 'Research', 'Operations'],
      stats: { datasets: '10K+', insights: '1M+', accuracy: '98%' },
      cta: 'View Demo'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare providers and medical institutions.',
      icon: Heart,
      price: 'Starting at $399/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient monitoring',
        'Drug discovery',
        'Clinical decision support',
        'Compliance management'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce diagnosis time by 50%',
        'Enhance patient outcomes',
        'Ensure regulatory compliance'
      ],
      useCases: ['Medical Imaging', 'Diagnostics', 'Drug Discovery', 'Patient Care'],
      stats: { accuracy: '95%', timeSaved: '50%', patients: '100K+' },
      cta: 'Healthcare Demo'
    }
  ];

  const aiTechnologies = [
    {
      name: 'Machine Learning',
      description: 'Custom ML models trained on your specific data',
      icon: Brain,
      applications: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection']
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP for text analysis and generation',
      icon: MessageCircle,
      applications: ['Chatbots', 'Content Generation', 'Sentiment Analysis']
    },
    {
      name: 'Computer Vision',
      description: 'Image and video analysis capabilities',
      icon: Eye,
      applications: ['Object Detection', 'Image Classification', 'Video Analytics']
    },
    {
      name: 'Deep Learning',
      description: 'Neural networks for complex problem solving',
      icon: Layers,
      applications: ['Speech Recognition', 'Recommendation Systems', 'Predictive Modeling']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, clients: '200+' },
    { name: 'Finance', icon: DollarSign, clients: '150+' },
    { name: 'E-commerce', icon: ShoppingCart, clients: '300+' },
    { name: 'Manufacturing', icon: Settings, clients: '100+' },
    { name: 'Education', icon: BookOpen, clients: '80+' },
    { name: 'Retail', icon: Store, clients: '250+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 1,000+ Enterprises Worldwide
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                AI Services
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                for Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions. From machine learning to natural language processing, 
              we deliver enterprise-grade AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get AI Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1,000+</div>
                <div className="text-sm text-gray-300">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
                <div className="text-sm text-gray-300">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.id}
                className="cyber-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.clients}</div>
                      <div className="text-xs text-gray-400">Clients</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.accuracy}</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-cyan-400">{service.stats.savings}</div>
                      <div className="text-xs text-gray-400">Saved</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <a
                      href={`/contact?service=${service.id}`}
                      className="w-full cyber-button text-center py-3 block"
                    >
                      {service.cta}
                    </a>
                    <a
                      href={`/demo?service=${service.id}`}
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-3 rounded-lg font-semibold text-center block transition-colors"
                    >
                      <Play className="w-4 h-4 inline mr-2" />
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiTechnologies.map((tech, index) => (
              <div
                key={index}
                className="cyber-card group hover:scale-105 transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.applications.map((app, appIndex) => (
                      <div key={appIndex} className="text-sm text-cyan-400">
                        • {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are trusted by leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="cyber-card group hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                  <div className="text-sm text-cyan-400">{industry.clients} Clients</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify the best AI solutions for your specific business needs. 
            Get a free consultation and discover the potential of AI for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Free AI Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;