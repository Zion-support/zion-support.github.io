'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ScaleIcon as ScaleIconSolid
} from '@heroicons/react/24/outline';

const ZionAILegalAssistantPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Contract Analysis',
      description: 'AI-powered contract review with 99.2% accuracy in identifying risks, clauses, and compliance issues.',
      stats: '50,000+ contracts analyzed'
    },
    {
      icon: ScaleIcon,
      title: 'Legal Research',
      description: 'Comprehensive legal research across 100+ jurisdictions with real-time case law updates.',
      stats: '1M+ legal documents indexed'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking for GDPR, CCPA, SOX, and industry-specific regulations.',
      stats: '200+ regulations monitored'
    },
    {
      icon: UserGroupIcon,
      title: 'Client Management',
      description: 'Intelligent client portal with case tracking, document sharing, and billing automation.',
      stats: '10,000+ clients served'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'AI-powered case outcome predictions and litigation risk assessment.',
      stats: '85% prediction accuracy'
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automated document generation, deadline tracking, and task management.',
      stats: '90% time savings'
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 100 contract analyses/month',
        'Basic legal research',
        'Document generation',
        'Client portal (up to 50 clients)',
        'Email support',
        'Basic compliance monitoring'
      ],
      popular: false
    },
    {
      name: 'Law Firm Pro',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing law firms and mid-size practices',
      features: [
        'Unlimited contract analyses',
        'Advanced legal research',
        'AI-powered case predictions',
        'Client portal (up to 500 clients)',
        'Priority support',
        'Full compliance suite',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise Legal',
      price: '$1,999',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Everything in Pro',
        'Unlimited clients',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics dashboard',
        'API access',
        'White-label options',
        'Custom compliance frameworks'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Senior Partner',
      company: 'Mitchell & Associates',
      content: 'Zion AI Legal Assistant has revolutionized our practice. We\'ve reduced contract review time by 80% and improved accuracy significantly.',
      rating: 5
    },
    {
      name: 'David Chen',
      title: 'General Counsel',
      company: 'TechCorp Inc.',
      content: 'The compliance monitoring feature has been a game-changer. We\'re always ahead of regulatory changes now.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      title: 'Managing Partner',
      company: 'Rodriguez Legal Group',
      content: 'The AI predictions for case outcomes have helped us make better strategic decisions and improve client satisfaction.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Legal Assistant - AI-Powered Legal Technology | Zion Tech Group"
        description="Transform your legal practice with AI-powered contract analysis, legal research, compliance monitoring, and case prediction. 99.2% accuracy, 80% time savings."
        keywords="AI legal assistant, contract analysis, legal research, compliance monitoring, law firm software, legal technology, AI lawyer tools"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <ScaleIconSolid className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">AI Legal Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Zion AI Legal Assistant
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your legal practice with AI-powered contract analysis, legal research, compliance monitoring, and predictive analytics. 
                Achieve 99.2% accuracy and save 80% of your time on routine legal tasks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.2%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Contracts Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
                  <div className="text-gray-300 text-sm">Legal Documents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful AI Legal Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive legal technology solutions designed to enhance your practice efficiency and accuracy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-blue-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal practice. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700 hover:border-blue-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                      : 'border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Legal Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what legal professionals are saying about Zion AI Legal Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who trust Zion AI Legal Assistant for their practice management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAILegalAssistantPage;