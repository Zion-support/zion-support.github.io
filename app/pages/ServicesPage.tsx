import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SignalIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool with 50+ templates, multi-language support, and SEO optimization.',
      price: '$29/month',
      features: ['50+ Content Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Checker'],
      category: 'Content Creation',
      icon: DocumentTextIcon,
      popular: true
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI insights, custom reports, and predictive forecasting.',
      price: '$49/month',
      features: ['Real-time Analytics', 'AI Insights', 'Custom Reports', 'Predictive Forecasting', 'Data Visualization'],
      category: 'Analytics',
      icon: ChartBarIcon,
      popular: false
    },
    {
      name: 'Automated Customer Support Bot',
      description: 'Intelligent chatbot with natural language processing, 24/7 support, and seamless integration.',
      price: '$39/month',
      features: ['Natural Language Processing', '24/7 Support', 'Multi-channel Integration', 'Sentiment Analysis', 'Custom Training'],
      category: 'Customer Support',
      icon: UserGroupIcon,
      popular: true
    },
    {
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management with optimal posting times, hashtag suggestions, and performance tracking.',
      price: '$19/month',
      features: ['Optimal Posting Times', 'Hashtag Suggestions', 'Performance Tracking', 'Multi-platform Support', 'Content Calendar'],
      category: 'Social Media',
      icon: GlobeAltIcon,
      popular: false
    },
    {
      name: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-driven personalization, A/B testing, and detailed analytics.',
      price: '$35/month',
      features: ['AI Personalization', 'A/B Testing', 'Detailed Analytics', 'Email Templates', 'Subscriber Segmentation'],
      category: 'Marketing',
      icon: EnvelopeIcon,
      popular: true
    },
    {
      name: 'Project Management AI',
      description: 'Intelligent project management with task automation, resource optimization, and deadline prediction.',
      price: '$45/month',
      features: ['Task Automation', 'Resource Optimization', 'Deadline Prediction', 'Team Collaboration', 'Progress Tracking'],
      category: 'Project Management',
      icon: CogIcon,
      popular: false
    }
  ];

  const aiServices = [
    {
      name: 'Machine Learning Consulting',
      description: 'Custom ML solutions for business optimization, predictive modeling, and data-driven decision making.',
      price: '$150/hour',
      features: ['Custom ML Models', 'Predictive Analytics', 'Data Pipeline Design', 'Model Deployment', 'Performance Optimization'],
      icon: CpuChipIcon
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and automated content processing.',
      price: '$200/hour',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Content Processing', 'Chatbot Development'],
      icon: DocumentTextIcon
    },
    {
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for quality control, object detection, and automated inspection.',
      price: '$180/hour',
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Automated Inspection', 'Video Analysis'],
      icon: EyeIcon
    },
    {
      name: 'AI Strategy Consulting',
      description: 'Strategic AI implementation planning, ROI analysis, and technology roadmap development.',
      price: '$250/hour',
      features: ['AI Strategy Planning', 'ROI Analysis', 'Technology Roadmap', 'Implementation Planning', 'Risk Assessment'],
      icon: ChartBarIcon
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure Setup',
      description: 'Complete cloud migration, infrastructure design, and optimization for AWS, Azure, and Google Cloud.',
      price: '$100/hour',
      features: ['Cloud Migration', 'Infrastructure Design', 'Security Configuration', 'Performance Optimization', 'Cost Management'],
      icon: CloudIcon
    },
    {
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security audit, vulnerability assessment, and implementation of security best practices.',
      price: '$120/hour',
      features: ['Security Audit', 'Vulnerability Assessment', 'Penetration Testing', 'Security Implementation', 'Compliance Review'],
      icon: ShieldCheckIcon
    },
    {
      name: 'DevOps Implementation',
      description: 'CI/CD pipeline setup, containerization, and automated deployment solutions.',
      price: '$110/hour',
      features: ['CI/CD Pipeline', 'Containerization', 'Automated Deployment', 'Monitoring Setup', 'Infrastructure as Code'],
      icon: CogIcon
    },
    {
      name: 'Database Optimization',
      description: 'Database performance tuning, query optimization, and data architecture design.',
      price: '$90/hour',
      features: ['Performance Tuning', 'Query Optimization', 'Data Architecture', 'Backup Solutions', 'Scalability Planning'],
      icon: ServerIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI solutions, IT services, and micro SaaS applications. Expert consulting, development, and implementation services for modern businesses." />
        <meta name="keywords" content="AI services, IT consulting, micro SaaS, cloud solutions, cybersecurity, machine learning, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text neon-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive AI solutions, IT services, and micro SaaS applications designed to accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Pricing
                <CurrencyDollarIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use micro SaaS applications that solve specific business challenges with powerful features and competitive pricing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2 gradient-text">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 glow-effect"
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                AI Services & Consulting
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert AI consulting and implementation services to transform your business with cutting-edge artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">consulting rate</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 glow-effect"
                  >
                    Schedule Consultation
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                IT Services & Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions including cloud infrastructure, cybersecurity, and DevOps implementation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-green-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">hourly rate</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 glow-effect"
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive services can accelerate your digital transformation and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <PlayIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
