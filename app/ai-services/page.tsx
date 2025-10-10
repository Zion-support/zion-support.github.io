'use client';
import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      name: 'AI-Powered Analytics',
      description: 'Advanced analytics solutions powered by machine learning and artificial intelligence',
      icon: BarChart,
      features: [
        'Predictive Analytics',
        'Real-time Data Processing',
        'Custom Dashboard Creation',
        'Ad Performance Analysis',
        'ROI Optimization',
        'A/B Testing Automation',
        'Cross-Platform Integration'
      ],
      category: 'Marketing',
      popular: true,
      rating: 4.8,
      users: '2,800+',
      color: 'from-purple-500 to-pink-600',
      capabilities: [
        '300% increase in conversion rates',
        'Automated campaign optimization',
        'Real-time performance tracking',
        'Predictive customer behavior'
      ]
    },
    {
      id: 2,
      name: 'AI Workflow Automation',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work',
      icon: Zap,
      features: [
        'Process Automation',
        'Smart Decision Making',
        'Error Detection & Correction',
        'Cost Reduction',
        'Scalable Architecture',
        'Integration Management',
        'Performance Monitoring'
      ],
      category: 'Automation',
      popular: true,
      rating: 4.9,
      users: '1,500+',
      color: 'from-yellow-500 to-orange-600',
      capabilities: [
        '200-400% ROI improvement',
        '80% reduction in manual tasks',
        'Real-time process optimization',
        'Automated error handling'
      ]
    },
    {
      id: 3,
      name: 'AI Customer Support',
      description: 'Advanced customer support solutions with natural language processing and intelligent routing',
      icon: Users,
      features: [
        'Natural Language Processing',
        'Sentiment Analysis',
        'Automated Responses',
        'Human Handoff',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Performance Analytics'
      ],
      category: 'Support',
      popular: true,
      rating: 4.7,
      users: '3,200+',
      color: 'from-blue-500 to-cyan-600',
      capabilities: [
        '150-300% ROI improvement',
        '24/7 customer support',
        '90% faster response times',
        'Improved customer satisfaction'
      ]
    },
    {
      id: 4,
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing using advanced AI algorithms',
      icon: FileText,
      features: [
        'Document Analysis',
        'Data Extraction',
        'OCR Processing',
        'Classification & Sorting',
        'Version Control',
        'Search & Discovery',
        'Compliance Monitoring'
      ],
      category: 'Documentation',
      popular: false,
      rating: 4.6,
      users: '950+',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        '90% faster document processing',
        '99% accuracy in data extraction',
        'Automated compliance checking',
        'Reduced manual errors'
      ]
    },
    {
      id: 5,
      name: 'AI Security Solutions',
      description: 'Advanced cybersecurity solutions powered by AI for threat detection and prevention',
      icon: Shield,
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
        'Risk Assessment',
        'Compliance Monitoring',
        'Incident Management',
        'Security Analytics'
      ],
      category: 'Security',
      popular: true,
      rating: 4.8,
      users: '1,800+',
      color: 'from-red-500 to-pink-600',
      capabilities: [
        '99.9% threat detection accuracy',
        'Real-time security monitoring',
        'Automated incident response',
        'Reduced security breaches'
      ]
    },
    {
      id: 6,
      name: 'AI Data Visualization',
      description: 'Interactive data visualization and business intelligence solutions powered by AI',
      icon: Globe,
      features: [
        'Interactive Dashboards',
        'Real-time Visualization',
        'Predictive Modeling',
        'Custom Reports',
        'Data Integration',
        'Mobile Responsive',
        'Collaborative Features'
      ],
      category: 'Analytics',
      popular: false,
      rating: 4.5,
      users: '1,200+',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        '80% faster insights generation',
        'Interactive data exploration',
        'Automated report generation',
        'Better decision making'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Up to 5 AI services',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'month',
      description: 'Ideal for growing businesses with advanced AI needs',
      features: [
        'Up to 15 AI services',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Weekly reports',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'month',
      description: 'Tailored solutions for large enterprises',
      features: [
        'Unlimited AI services',
        'Custom analytics',
        '24/7 support',
        'Full customization',
        'Real-time reports',
        'Dedicated team',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI solutions designed to automate, optimize, and revolutionize your operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{service.rating}</span>
                      <span className="ml-2 text-gray-400 text-sm">({service.users} users)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Capabilities:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''} transition-all duration-300`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and discover how our AI solutions can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;