'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Star, Globe, Database, Users, Settings, Code, Lock, PieChart, Activity, Cpu, Smartphone, CreditCard, Calendar, FileText as FileTextIcon, Search as SearchIcon, Globe as GlobeIcon, Smartphone as SmartphoneIcon, CreditCard as CreditCardIcon, Calendar as CalendarIcon, Lock as LockIcon, PieChart as PieChartIcon, Activity as ActivityIcon, Cpu as CpuIcon, Users as UsersIcon, Settings as SettingsIcon, Database as DatabaseIcon, BarChart as BarChartIcon, Target as TargetIcon, TrendingUp as TrendingUpIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

interface AIService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  link: string;
  benefits: string[];
}

const AIServicesPage: React.FC = () => {
  const aiServices: AIService[] = [
    // Core AI Services
    {
      id: '1',
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI algorithms and machine learning models.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization', 'Automated Reporting'],
      price: 'Starting at $1,500/month',
      category: 'Core AI',
      popular: true,
      link: '/ai-business-intelligence',
      benefits: ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', 'Improve decision-making with AI insights']
    },
    {
      id: '2',
      icon: MessageSquare,
      title: 'AI Customer Support Platform',
      description: 'Revolutionary AI-powered customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'Customer Service',
      popular: true,
      link: '/ai-customer-support',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 80%', 'Increase customer satisfaction']
    },
    {
      id: '3',
      icon: BarChart,
      title: 'AI Data Analytics Suite',
      description: 'Advanced data analytics with AI-powered insights, predictive modeling, and automated business intelligence.',
      features: ['Predictive Modeling', 'Data Mining', 'Statistical Analysis', 'Custom Dashboards', 'API Integration'],
      price: 'Starting at $399/month',
      category: 'Analytics',
      popular: false,
      link: '/ai-data-analytics',
      benefits: ['Uncover hidden patterns in data', 'Make data-driven decisions', 'Automate reporting processes']
    },
    {
      id: '4',
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI optimization, personalization, and advanced campaign management.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'Marketing',
      popular: true,
      link: '/ai-marketing-automation',
      benefits: ['Increase conversion rates by 40%', 'Reduce marketing costs by 35%', 'Improve customer engagement']
    },
    {
      id: '5',
      icon: Code,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'Content',
      popular: false,
      link: '/ai-content-generation',
      benefits: ['Save 70% on content creation time', 'Maintain consistent brand voice', 'Scale content production']
    },
    {
      id: '6',
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity with threat detection, vulnerability assessment, and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Compliance Monitoring', 'Risk Analysis'],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: false,
      link: '/ai-cybersecurity',
      benefits: ['Detect threats 90% faster', 'Reduce false positives by 70%', 'Improve security posture']
    },
    {
      id: '7',
      icon: Users,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Analysis'],
      price: 'Starting at $399/month',
      category: 'HR',
      popular: false,
      link: '/ai-hr-assistant',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Enhance employee satisfaction']
    },
    {
      id: '8',
      icon: CreditCard,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'Finance',
      popular: false,
      link: '/ai-financial-services',
      benefits: ['Reduce fraud by 85%', 'Improve risk assessment accuracy', 'Optimize trading strategies']
    },
    {
      id: '9',
      icon: Globe,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'E-commerce',
      popular: false,
      link: '/ai-ecommerce-solutions',
      benefits: ['Increase sales by 25%', 'Improve customer experience', 'Optimize inventory management']
    },
    {
      id: '10',
      icon: Smartphone,
      title: 'AI Mobile App Development',
      description: 'Build intelligent mobile applications with AI integration and advanced features.',
      features: ['AI Integration', 'Voice Recognition', 'Image Processing', 'Predictive Analytics', 'Personalization'],
      price: 'Starting at $1,999/month',
      category: 'Mobile',
      popular: false,
      link: '/ai-mobile-app-development',
      benefits: ['Create smarter mobile apps', 'Improve user engagement', 'Reduce development time']
    },
    // Advanced AI Services
    {
      id: '11',
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Visual Analytics', 'Quality Control'],
      price: 'Starting at $599/month',
      category: 'Computer Vision',
      popular: false,
      link: '/ai-computer-vision',
      benefits: ['Automate visual inspections', 'Improve accuracy by 95%', 'Reduce manual labor costs']
    },
    {
      id: '12',
      icon: Mic,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding and multi-language support.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Wake Words'],
      price: 'Starting at $299/month',
      category: 'Voice AI',
      popular: false,
      link: '/ai-voice-assistant',
      benefits: ['Improve customer interaction', 'Reduce support costs', 'Enable hands-free operations']
    },
    {
      id: '13',
      icon: Database,
      title: 'AI Document Processing',
      description: 'Automated document processing with AI-powered data extraction and intelligent classification.',
      features: ['Document Classification', 'Data Extraction', 'OCR Technology', 'Intelligent Routing', 'Compliance Checking'],
      price: 'Starting at $149/month',
      category: 'Document AI',
      popular: false,
      link: '/ai-document-processing',
      benefits: ['Process documents 10x faster', 'Reduce errors by 90%', 'Improve compliance']
    },
    {
      id: '14',
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: ['Workflow Automation', 'Decision Making', 'Exception Handling', 'Process Optimization', 'Integration APIs'],
      price: 'Starting at $99/month',
      category: 'Automation',
      popular: false,
      link: '/ai-process-automation',
      benefits: ['Automate 90% of repetitive tasks', 'Reduce processing time by 80%', 'Improve accuracy']
    },
    {
      id: '15',
      icon: Search,
      title: 'AI Search & Discovery',
      description: 'Intelligent search solutions with natural language processing and personalized recommendations.',
      features: ['Natural Language Search', 'Personalized Results', 'Semantic Understanding', 'Auto-complete', 'Search Analytics'],
      price: 'Starting at $199/month',
      category: 'Search AI',
      popular: false,
      link: '/ai-search-discovery',
      benefits: ['Improve search accuracy by 60%', 'Increase user engagement', 'Reduce search time']
    },
    {
      id: '16',
      icon: PieChart,
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive analytics with machine learning models for forecasting and trend analysis.',
      features: ['Forecasting Models', 'Trend Analysis', 'Risk Prediction', 'Demand Planning', 'Performance Optimization'],
      price: 'Starting at $499/month',
      category: 'Predictive AI',
      popular: false,
      link: '/ai-predictive-analytics',
      benefits: ['Improve forecasting accuracy', 'Reduce inventory costs', 'Optimize resource allocation']
    },
    {
      id: '17',
      icon: Activity,
      title: 'AI Health Monitoring',
      description: 'AI-powered health monitoring and analysis for medical devices and healthcare applications.',
      features: ['Health Analytics', 'Vital Signs Monitoring', 'Disease Prediction', 'Treatment Optimization', 'Patient Care'],
      price: 'Starting at $1,999/month',
      category: 'Healthcare AI',
      popular: false,
      link: '/ai-health-monitoring',
      benefits: ['Improve patient outcomes', 'Reduce healthcare costs', 'Enable early intervention']
    },
    {
      id: '18',
      icon: Cpu,
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency.',
      features: ['Edge Deployment', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
      price: 'Starting at $399/month',
      category: 'Edge AI',
      popular: false,
      link: '/ai-edge-computing',
      benefits: ['Reduce latency by 90%', 'Enable offline AI', 'Optimize resource usage']
    },
    {
      id: '19',
      icon: Lock,
      title: 'AI Fraud Detection',
      description: 'Advanced fraud detection using machine learning and behavioral analysis.',
      features: ['Behavioral Analysis', 'Pattern Recognition', 'Real-time Detection', 'Risk Scoring', 'Alert Management'],
      price: 'Starting at $299/month',
      category: 'Security AI',
      popular: false,
      link: '/ai-fraud-detection',
      benefits: ['Detect fraud in real-time', 'Reduce false positives', 'Protect against new threats']
    },
    {
      id: '20',
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with conflict resolution and optimization.',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Coordination', 'Calendar Integration'],
      price: 'Starting at $49/month',
      category: 'Productivity AI',
      popular: false,
      link: '/ai-scheduling-assistant',
      benefits: ['Save 2+ hours per day', 'Reduce scheduling conflicts', 'Optimize meeting times']
    }
  ];

  const categories = ['All', 'Core AI', 'Customer Service', 'Analytics', 'Marketing', 'Content', 'Security', 'HR', 'Finance', 'E-commerce', 'Mobile', 'Computer Vision', 'Voice AI', 'Document AI', 'Automation', 'Search AI', 'Predictive AI', 'Healthcare AI', 'Edge AI', 'Security AI', 'Productivity AI'];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology',
    'Enhance customer experience with intelligent interactions',
    'Automate repetitive tasks and focus on strategy',
    'Make data-driven decisions with confidence'
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'AI Models Deployed',
      description: 'Successfully implemented across industries'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Accuracy Rate',
      description: 'Industry-leading AI performance'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Highly rated by our clients'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'AI Support',
      description: 'Round-the-clock AI assistance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including machine learning, computer vision, natural language processing, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, AI consulting, AI development, AI automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI services. From machine learning to computer vision, 
              we deliver cutting-edge artificial intelligence solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services designed to solve specific business challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <Link
                      to={service.link}
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive real business value and measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">How We Deliver AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful AI implementation and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
                <p className="text-gray-300">We analyze your business needs and identify AI opportunities for maximum impact.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Development</h3>
                <p className="text-gray-300">Our experts develop and train custom AI models tailored to your specific requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
                <p className="text-gray-300">We deploy your AI solution and provide ongoing support to ensure optimal performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your AI needs and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Get Free Consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
              
              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">+1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;