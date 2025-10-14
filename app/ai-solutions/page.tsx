import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  ClockIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with AI-powered insights, predictive analytics, and real-time data visualization.',
      href: '/ai-analytics-dashboard-pro',
      icon: ChartBarIcon,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reports'],
      pricing: '$2,500/month',
      category: 'Analytics',
      popular: true
    },
    {
      title: 'AI Content Generation Suite',
      description: 'Comprehensive content creation platform using advanced AI for blogs, social media, marketing materials, and documentation.',
      href: '/ai-content-generation-pro',
      icon: DocumentTextIcon,
      features: ['Multi-format Content', 'SEO Optimization', 'Brand Voice Matching', 'Bulk Generation'],
      pricing: '$1,800/month',
      category: 'Content'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution with natural language processing for 24/7 customer support automation and ticket management.',
      href: '/ai-customer-support-chatbot',
      icon: UserGroupIcon,
      features: ['24/7 Availability', 'Multi-language Support', 'Ticket Management', 'Human Handoff'],
      pricing: '$1,200/month',
      category: 'Customer Service'
    },
    {
      title: 'AI Cybersecurity Monitor Pro',
      description: 'Advanced threat detection and security monitoring system powered by machine learning algorithms and behavioral analysis.',
      href: '/ai-cybersecurity-monitor-pro',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Real-time Alerts', 'Compliance Reporting', 'Incident Response'],
      pricing: '$3,200/month',
      category: 'Security'
    },
    {
      title: 'AI Code Assistant Pro',
      description: 'Intelligent coding assistant with code generation, debugging, optimization, and documentation capabilities.',
      href: '/ai-code-assistant-pro',
      icon: CodeBracketIcon,
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Documentation'],
      pricing: '$2,000/month',
      category: 'Development'
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Comprehensive BI solution with AI-powered insights, forecasting, automated reporting, and KPI tracking.',
      href: '/ai-business-intelligence-pro',
      icon: ChartBarIcon,
      features: ['Advanced Analytics', 'Predictive Modeling', 'Automated Reports', 'KPI Tracking'],
      pricing: '$2,800/month',
      category: 'Analytics'
    },
    {
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis platform for object detection, facial recognition, and visual content analysis.',
      href: '/ai-computer-vision',
      icon: EyeIcon,
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis'],
      pricing: '$2,200/month',
      category: 'Computer Vision'
    },
    {
      title: 'AI Conversational AI',
      description: 'Advanced conversational AI platform for natural language understanding and generation in multiple languages.',
      href: '/ai-conversational-ai',
      icon: ChatBubbleLeftRightIcon,
      features: ['Natural Language Processing', 'Multi-language Support', 'Context Understanding', 'Voice Integration'],
      pricing: '$1,600/month',
      category: 'NLP'
    },
    {
      title: 'AI CRM Assistant',
      description: 'Smart CRM enhancement with AI-driven lead scoring, automated follow-ups, and sales predictions.',
      href: '/ai-crm-assistant',
      icon: BriefcaseIcon,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Sales Forecasting', 'Customer Insights'],
      pricing: '$1,500/month',
      category: 'Sales'
    },
    {
      title: 'AI Data Mining Pro',
      description: 'Advanced data extraction and analysis tool for uncovering hidden patterns and business insights.',
      href: '/ai-data-mining-pro',
      icon: CpuChipIcon,
      features: ['Pattern Recognition', 'Data Extraction', 'Trend Analysis', 'Custom Algorithms'],
      pricing: '$2,200/month',
      category: 'Data Science'
    },
    {
      title: 'AI Content Moderation Pro',
      description: 'Automated content moderation system using AI to maintain platform safety and compliance.',
      href: '/ai-content-moderation-pro',
      icon: ShieldCheckIcon,
      features: ['Real-time Moderation', 'Multi-language Support', 'Custom Rules', 'Audit Trails'],
      pricing: '$1,600/month',
      category: 'Moderation'
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and sustainability analytics platform for climate-conscious businesses.',
      href: '/ai-climate-solutions-pro',
      icon: GlobeAltIcon,
      features: ['Carbon Tracking', 'Sustainability Metrics', 'Environmental Reports', 'Green Recommendations'],
      pricing: '$2,100/month',
      category: 'Sustainability'
    }
  ];

  const categories = ['All', 'Analytics', 'Content', 'Customer Service', 'Security', 'Development', 'Computer Vision', 'NLP', 'Sales', 'Data Science', 'Moderation', 'Sustainability'];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics, pattern recognition, and automated decision making',
      icon: CpuChipIcon
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, language translation, and conversational AI capabilities',
      icon: ChatBubbleLeftRightIcon
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis, object detection, facial recognition, and visual content understanding',
      icon: EyeIcon
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecasting, trend analysis, and predictive modeling for data-driven business decisions',
      icon: ChartBarIcon
    },
    {
      title: 'Automated Content Generation',
      description: 'AI-powered content creation for blogs, social media, marketing materials, and documentation',
      icon: DocumentTextIcon
    },
    {
      title: 'Intelligent Automation',
      description: 'Process automation, workflow optimization, and intelligent task management systems',
      icon: CogIcon
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to focus on strategic initiatives',
      icon: ClockIcon
    },
    {
      title: 'Better Decision Making',
      description: 'Data-driven insights and predictions to make informed business decisions',
      icon: ChartBarIcon
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimization',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Personalized interactions and 24/7 support through AI-powered solutions',
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, predictive analytics, and automated content generation. Starting from $1,200/month." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, AI automation, artificial intelligence" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, predictive analytics, and automated content generation." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business with cutting-edge AI solutions, 
            machine learning algorithms, and intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free AI Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View AI Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI expertise across multiple domains to solve complex business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{capability.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered solutions that deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Service Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI solutions designed to address specific business needs with precision and intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift hover-glow glass-dark relative ${
                service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes AI model training & optimization</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to={service.href} 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Discovery & Analysis</h3>
              <p className="text-gray-300">
                Understand your business needs and identify AI opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Design & Development</h3>
              <p className="text-gray-300">
                Create custom AI solutions tailored to your requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Testing & Optimization</h3>
              <p className="text-gray-300">
                Rigorous testing and performance optimization
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">4. Deployment & Support</h3>
              <p className="text-gray-300">
                Seamless deployment with ongoing support and maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness AI Power?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how AI can transform your business. Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free AI Consultation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule AI Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;