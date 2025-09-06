import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  CpuChipIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group - Advanced AI Solutions & Automation',
  description: 'Comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and intelligent automation solutions.',
  keywords: 'AI services, machine learning, NLP, computer vision, predictive analytics, AI automation, intelligent systems, AI consulting',
};

const aiServices = [
  {
    name: 'AI-Powered Chatbots & Virtual Assistants',
    description: 'Intelligent conversational AI that understands context, handles complex queries, and provides 24/7 customer support.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Integration with existing systems',
      'Sentiment analysis',
      'Custom training on your data',
      'Voice and text interfaces'
    ],
    pricing: '$15,000 - $50,000',
    timeline: '4-8 weeks',
    useCases: ['Customer Support', 'Lead Qualification', 'Internal Helpdesk', 'E-commerce Assistant'],
    href: '/services/ai-chatbot'
  },
  {
    name: 'Predictive Analytics & Forecasting',
    description: 'Advanced machine learning models that predict future trends, customer behavior, and business outcomes.',
    icon: ChartBarIcon,
    features: [
      'Time series forecasting',
      'Customer churn prediction',
      'Sales forecasting',
      'Risk assessment models',
      'Real-time predictions',
      'Custom algorithm development'
    ],
    pricing: '$20,000 - $75,000',
    timeline: '6-12 weeks',
    useCases: ['Sales Forecasting', 'Inventory Management', 'Risk Assessment', 'Market Analysis'],
    href: '/services/ai-predictive-analytics'
  },
  {
    name: 'Computer Vision Solutions',
    description: 'AI-powered image and video analysis for quality control, object detection, and visual recognition.',
    icon: EyeIcon,
    features: [
      'Object detection and classification',
      'Facial recognition systems',
      'Quality control automation',
      'Medical image analysis',
      'Real-time video processing',
      'Custom model training'
    ],
    pricing: '$25,000 - $100,000',
    timeline: '8-16 weeks',
    useCases: ['Manufacturing QC', 'Security Systems', 'Medical Imaging', 'Retail Analytics'],
    href: '/services/ai-computer-vision'
  },
  {
    name: 'Natural Language Processing (NLP)',
    description: 'Extract insights from text data, automate document processing, and build intelligent text analysis systems.',
    icon: DocumentTextIcon,
    features: [
      'Text classification and sentiment analysis',
      'Named entity recognition',
      'Document summarization',
      'Language translation',
      'Content generation',
      'Automated document processing'
    ],
    pricing: '$18,000 - $60,000',
    timeline: '6-10 weeks',
    useCases: ['Content Moderation', 'Document Analysis', 'Social Media Monitoring', 'Legal Document Review'],
    href: '/services/ai-nlp'
  },
  {
    name: 'AI Process Automation',
    description: 'Intelligent automation that handles complex business processes, decision-making, and workflow optimization.',
    icon: CogIcon,
    features: [
      'Intelligent document processing',
      'Automated decision making',
      'Workflow optimization',
      'Exception handling',
      'Integration with existing systems',
      'Continuous learning and improvement'
    ],
    pricing: '$30,000 - $120,000',
    timeline: '10-20 weeks',
    useCases: ['Invoice Processing', 'Claims Processing', 'HR Automation', 'Financial Analysis'],
    href: '/services/ai-automation'
  },
  {
    name: 'AI Data Analytics Platform',
    description: 'Comprehensive AI-powered analytics platform that transforms raw data into actionable business insights.',
    icon: ChartBarIcon,
    features: [
      'Automated data analysis',
      'Pattern recognition',
      'Anomaly detection',
      'Interactive dashboards',
      'Real-time insights',
      'Custom reporting'
    ],
    pricing: '$40,000 - $150,000',
    timeline: '12-24 weeks',
    useCases: ['Business Intelligence', 'Performance Monitoring', 'Customer Analytics', 'Operational Insights'],
    href: '/services/ai-analytics-platform'
  }
];

const industries = [
  {
    name: 'Healthcare',
    description: 'AI solutions for medical diagnosis, drug discovery, and patient care optimization.',
    icon: '🏥',
    solutions: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance']
  },
  {
    name: 'Finance',
    description: 'AI-powered fraud detection, risk assessment, and algorithmic trading solutions.',
    icon: '🏦',
    solutions: ['Fraud Detection', 'Credit Scoring', 'Algorithmic Trading', 'Risk Management']
  },
  {
    name: 'Manufacturing',
    description: 'Intelligent quality control, predictive maintenance, and supply chain optimization.',
    icon: '🏭',
    solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation']
  },
  {
    name: 'Retail',
    description: 'Personalized recommendations, inventory management, and customer behavior analysis.',
    icon: '🛍️',
    solutions: ['Recommendation Engines', 'Inventory Optimization', 'Customer Analytics', 'Price Optimization']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'AI Strategy & Planning',
    description: 'We analyze your business needs and develop a comprehensive AI strategy tailored to your goals.',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Data Assessment & Preparation',
    description: 'We evaluate your data quality and prepare it for AI model training and deployment.',
    icon: DocumentTextIcon
  },
  {
    step: '03',
    title: 'Model Development & Training',
    description: 'Our AI experts develop and train custom models using state-of-the-art algorithms.',
    icon: CpuChipIcon
  },
  {
    step: '04',
    title: 'Integration & Deployment',
    description: 'We seamlessly integrate AI solutions into your existing systems and workflows.',
    icon: CogIcon
  },
  {
    step: '05',
    title: 'Monitoring & Optimization',
    description: 'Continuous monitoring and optimization to ensure peak performance and accuracy.',
    icon: ShieldCheckIcon
  }
];

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get AI Consultation
                <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve real business challenges and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div key={service.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="h-12 w-12" />
                    <div className="text-right">
                      <div className="text-2xl font-bold">{service.pricing}</div>
                      <div className="text-sm opacity-90">{service.timeline}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-blue-100 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center w-full justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI solutions tailored for specific industries and business verticals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {industry.solutions.map((solution, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <div className="inline-flex p-3 rounded-full bg-gray-100 mb-4">
                  <step.icon className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our AI Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep AI expertise with business acumen to deliver solutions that actually work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CpuChipIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert AI Team</h3>
              <p className="text-gray-600">
                PhD-level AI researchers and engineers with 10+ years of experience in machine learning and AI.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production-Ready</h3>
              <p className="text-gray-600">
                We don't just build prototypes - we deliver production-ready AI systems that scale with your business.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable ROI</h3>
              <p className="text-gray-600">
                Every AI solution we build comes with clear metrics and measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your AI needs and create a custom solution that drives real business value. 
            Our team has delivered 500+ successful AI projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your AI Project
              <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
            </Link>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}