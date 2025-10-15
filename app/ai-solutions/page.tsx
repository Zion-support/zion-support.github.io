import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon,
  GlobeAltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like responses 24/7.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Integration with CRM Systems',
        'Real-time Analytics',
        'Custom Training Models'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: 'Custom'
      },
      icon: ChatBubbleLeftRightIcon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and more.',
      features: [
        'SEO-Optimized Content',
        'Multiple Content Formats',
        'Brand Voice Consistency',
        'Plagiarism Detection',
        'Content Scheduling'
      ],
      pricing: {
        starter: '$199/month',
        professional: '$499/month',
        enterprise: 'Custom'
      },
      icon: DocumentTextIcon,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard Pro',
      description: 'Predictive analytics and business intelligence powered by machine learning algorithms.',
      features: [
        'Predictive Modeling',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Automated Insights'
      ],
      pricing: {
        starter: '$399/month',
        professional: '$999/month',
        enterprise: 'Custom'
      },
      icon: ChartBarIcon,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Solutions',
      description: 'Advanced image recognition and computer vision for automation and quality control.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Quality Control',
        'Real-time Processing'
      ],
      pricing: {
        starter: '$599/month',
        professional: '$1,299/month',
        enterprise: 'Custom'
      },
      icon: EyeIcon,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'End-to-end automation solutions that streamline business processes and reduce manual work.',
      features: [
        'Workflow Automation',
        'Process Optimization',
        'Error Reduction',
        'Scalable Solutions',
        'Custom Integrations'
      ],
      pricing: {
        starter: '$499/month',
        professional: '$1,199/month',
        enterprise: 'Custom'
      },
      icon: CogIcon,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns that adapt to user behavior and maximize engagement rates.',
      features: [
        'Behavioral Targeting',
        'A/B Testing',
        'Personalization',
        'Send Time Optimization',
        'Performance Analytics'
      ],
      pricing: {
        starter: '$149/month',
        professional: '$399/month',
        enterprise: 'Custom'
      },
      icon: GlobeAltIcon,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: RocketLaunchIcon,
      stat: '85%'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: CurrencyDollarIcon,
      stat: '60%'
    },
    {
      title: 'Better Accuracy',
      description: 'Minimize human errors with AI-powered precision',
      icon: ShieldCheckIcon,
      stat: '99.5%'
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock service without breaks or downtime',
      icon: BoltIcon,
      stat: '24/7'
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Solutions - Zion Tech Group"
        description="Advanced AI solutions including chatbots, content generation, analytics, computer vision, and automation. Transform your business with cutting-edge artificial intelligence technology."
      />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              AI Solutions
            </h1>
            
            <div className="text-2xl md:text-4xl font-semibold mb-8 text-white">
              <span className="inline-block animate-bounce">🤖</span>
              <span className="mx-4">Transform Your Business with AI</span>
              <span className="inline-block animate-bounce">⚡</span>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leverage the power of artificial intelligence to automate processes, 
              enhance customer experiences, and drive unprecedented growth. 
              Our AI solutions are designed to deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                to="/contact" 
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="flex items-center">
                  <CpuChipIcon className="w-6 h-6 mr-2" />
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/pricing" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>Starter:</span>
                        <span className="text-green-400">{service.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Professional:</span>
                        <span className="text-blue-400">{service.pricing.professional}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Enterprise:</span>
                        <span className="text-purple-400">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results that drive business growth and operational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900 via-slate-900 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our AI solutions. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                <SparklesIcon className="w-6 h-6 mr-2" />
                Start Your AI Journey
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              to="/pricing" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;
