'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Contract Analysis',
      description: 'Analyze contracts, identify risks, and suggest improvements using advanced AI legal analysis.',
      benefits: ['Risk identification', 'Clause analysis', 'Compliance checking']
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Legal Research',
      description: 'Search through millions of legal documents, cases, and precedents with AI-powered research.',
      benefits: ['Case law search', 'Precedent analysis', 'Citation tracking']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Legal Q&A',
      description: 'Get instant answers to legal questions with our AI-powered legal knowledge base.',
      benefits: ['24/7 legal assistance', 'Expert-level answers', 'Citation sources']
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Compliance Monitoring',
      description: 'Monitor regulatory changes and ensure compliance with automated alerts and updates.',
      benefits: ['Regulatory updates', 'Compliance alerts', 'Risk assessment']
    },
    {
      icon: BookOpenIcon,
      title: 'Document Generation',
      description: 'Generate legal documents, contracts, and forms with AI-powered templates and customization.',
      benefits: ['Template library', 'Custom generation', 'Legal formatting']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Security',
      description: 'Bank-level security with end-to-end encryption for all legal documents and communications.',
      benefits: ['End-to-end encryption', 'GDPR compliant', 'Attorney-client privilege']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual lawyers',
      features: [
        'Up to 100 documents/month',
        'Basic legal research',
        'Contract analysis',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$299',
      period: '/month',
      description: 'Ideal for small law firms',
      features: [
        'Up to 500 documents/month',
        'Advanced legal research',
        'All AI features',
        'Priority support',
        'Team collaboration',
        'Custom templates',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited documents',
        'All AI features',
        'Custom integrations',
        '24/7 dedicated support',
        'On-premise deployment',
        'Advanced analytics',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const practiceAreas = [
    'Corporate Law',
    'Contract Law',
    'Intellectual Property',
    'Employment Law',
    'Real Estate Law',
    'Criminal Law',
    'Family Law',
    'Immigration Law',
    'Tax Law',
    'Healthcare Law',
    'Environmental Law',
    'International Law'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Corporate Attorney',
      content: 'Zion AI Legal Assistant has revolutionized our contract review process. We can now analyze complex contracts in minutes instead of hours.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Law Firm Partner',
      content: 'The legal research capabilities are incredible. It finds relevant cases and precedents that would take days to research manually.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Solo Practitioner',
      content: 'As a solo practitioner, this tool gives me access to enterprise-level legal AI capabilities at an affordable price.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for contract analysis, legal research, compliance monitoring, and document generation. Perfect for lawyers and law firms."
        keywords="AI legal assistant, legal AI, contract analysis, legal research, compliance monitoring, document generation, law firm software"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Legal Assistant
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize your legal practice with AI-powered contract analysis, legal research, compliance monitoring, and document generation. Built for modern lawyers and law firms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-400/25 neon-border-animated">
                  Schedule Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">10M+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Legal Documents</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">12</div>
                  <div className="text-gray-300 text-sm sm:text-base">Practice Areas</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm sm:text-base">Legal Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Legal Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Experience the most comprehensive AI-powered legal assistance platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-indigo-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Supporting <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">All Practice Areas</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI legal assistant supports 12 major practice areas with specialized knowledge and expertise.
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {practiceAreas.map((area, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                    <span className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options designed to meet your legal practice needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-indigo-500/20 border-2 border-indigo-500' : 'hover:shadow-purple-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Legal Professionals <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of legal professionals who trust our AI legal assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-indigo-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-indigo-900/40 via-slate-900 to-purple-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Legal Practice Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial and experience the future of AI-powered legal assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;