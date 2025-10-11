import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog, Cpu, Database, Code, Smartphone, Mail, Target, TrendingUp, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection', 'Bulk generation'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator-pro',
      popular: true,
      category: 'Content',
      users: '5,200+',
      rating: '4.8'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement with no coding required.',
      features: ['Natural language processing', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations', 'Voice support', 'A/B testing'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Automation',
      users: '3,800+',
      rating: '4.7'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting', 'Data visualization', 'API integrations'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Analytics',
      users: '2,900+',
      rating: '4.9'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI agents and process optimization.',
      features: ['Workflow automation', 'Smart scheduling', 'Data processing', 'Integration APIs', 'Task management', 'Performance monitoring'],
      pricing: 'Starting at $99/month',
      link: '/ai-automation-suite',
      popular: false,
      category: 'Automation',
      users: '2,100+',
      rating: '4.6'
    },
    {
      icon: <Eye className="w-8 h-8 text-red-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis using computer vision for quality control, security, and automation.',
      features: ['Object detection', 'Image recognition', 'Video analysis', 'Quality inspection', 'Facial recognition', 'Real-time processing'],
      pricing: 'Starting at $149/month',
      link: '/ai-computer-vision',
      popular: false,
      category: 'Vision',
      users: '1,500+',
      rating: '4.7'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Support',
      description: 'Intelligent customer service solutions with natural language understanding and automated responses.',
      features: ['Natural language processing', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Multi-language support', 'Escalation management'],
      pricing: 'Starting at $89/month',
      link: '/ai-customer-support',
      popular: false,
      category: 'Support',
      users: '3,200+',
      rating: '4.8'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: 'AI Business Intelligence',
      description: 'Advanced business intelligence with AI-powered insights, forecasting, and decision support.',
      features: ['Predictive analytics', 'Trend analysis', 'KPI tracking', 'Custom reports', 'Data mining', 'ROI optimization'],
      pricing: 'Starting at $199/month',
      link: '/ai-business-intelligence',
      popular: false,
      category: 'Analytics',
      users: '1,800+',
      rating: '4.9'
    },
    {
      icon: <Cog className="w-8 h-8 text-indigo-500" />,
      title: 'AI Code Assistant',
      description: 'AI-powered coding assistant that helps developers write better code faster with intelligent suggestions.',
      features: ['Code completion', 'Bug detection', 'Code review', 'Documentation generation', 'Refactoring suggestions', 'Multi-language support'],
      pricing: 'Starting at $39/month',
      link: '/ai-code-assistant',
      popular: false,
      category: 'Development',
      users: '4,500+',
      rating: '4.7'
    },
    {
      icon: <Mail className="w-8 h-8 text-teal-500" />,
      title: 'AI Email Marketing',
      description: 'Intelligent email marketing automation with personalization, optimization, and performance tracking.',
      features: ['Email personalization', 'Send time optimization', 'A/B testing', 'List segmentation', 'Performance analytics', 'Template generation'],
      pricing: 'Starting at $59/month',
      link: '/ai-email-marketing',
      popular: false,
      category: 'Marketing',
      users: '2,700+',
      rating: '4.6'
    },
    {
      icon: <Target className="w-8 h-8 text-violet-500" />,
      title: 'AI Lead Generation',
      description: 'Automated lead generation and qualification using AI to identify and score potential customers.',
      features: ['Lead scoring', 'Contact enrichment', 'CRM integration', 'Follow-up automation', 'Email sequences', 'Performance tracking'],
      pricing: 'Starting at $79/month',
      link: '/ai-lead-generation',
      popular: false,
      category: 'Sales',
      users: '2,300+',
      rating: '4.8'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: 'AI Sales Predictor',
      description: 'Predict sales trends and optimize your sales strategy with AI-powered forecasting and insights.',
      features: ['Sales forecasting', 'Trend analysis', 'Performance optimization', 'Lead scoring', 'Pipeline management', 'ROI tracking'],
      pricing: 'Starting at $129/month',
      link: '/ai-sales-predictor',
      popular: false,
      category: 'Sales',
      users: '1,600+',
      rating: '4.7'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: 'AI HR Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee management, and performance analysis.',
      features: ['Resume screening', 'Candidate matching', 'Performance analysis', 'Employee engagement', 'Training recommendations', 'Compliance monitoring'],
      pricing: 'Starting at $109/month',
      link: '/ai-hr-assistant',
      popular: false,
      category: 'HR',
      users: '1,900+',
      rating: '4.5'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 60% with AI automation and optimization.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Fast Implementation',
      description: 'Get up and running in days, not months, with our streamlined setup process.'
    },
    {
      icon: <Star className="w-6 h-6 text-purple-500" />,
      title: 'Proven Results',
      description: 'Trusted by 500+ businesses worldwide with measurable ROI improvements.'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers and optimize operations.'
    }
  ];

  const categories = ['All', 'Content', 'Automation', 'Analytics', 'Vision', 'Support', 'Development', 'Marketing', 'Sales', 'HR'];
  
  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '25,000+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Support' }
  ];

  const features = [
    {
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'],
      applications: ['Fraud Detection', 'Customer Segmentation', 'Demand Forecasting', 'Quality Control']
    },
    {
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      applications: ['Customer Support', 'Content Moderation', 'Document Processing', 'Voice Assistants']
    },
    {
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      applications: ['Quality Inspection', 'Security Monitoring', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction', 'Scenario Planning'],
      applications: ['Financial Forecasting', 'Market Analysis', 'Supply Chain Optimization', 'Customer Lifetime Value']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, business intelligence" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services That
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Transform Your Business
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/micro-saas-services" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Micro SaaS
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in the latest AI technologies to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Applications:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{service.users}</div>
                </div>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
