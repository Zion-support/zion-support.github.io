'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  DocumentTextIcon, 
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const features = [
    {
      icon: DocumentTextIcon,
      title: 'Legal Document Analysis',
      description: 'AI-powered analysis of contracts, legal documents, and case files with 99.2% accuracy',
      benefits: ['Reduce review time by 70%', 'Identify key clauses instantly', 'Risk assessment automation']
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Case Law Research',
      description: 'Comprehensive legal research across multiple databases and jurisdictions',
      benefits: ['Access to 50M+ legal documents', 'Precedent identification', 'Citation verification']
    },
    {
      icon: ScaleIcon,
      title: 'Contract Review',
      description: 'Automated contract analysis with risk scoring and compliance checking',
      benefits: ['Standard clause detection', 'Risk scoring', 'Compliance verification']
    },
    {
      icon: ChartBarIcon,
      title: 'Legal Analytics',
      description: 'Advanced analytics for case outcomes, settlement predictions, and legal trends',
      benefits: ['Outcome prediction', 'Settlement analysis', 'Trend identification']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$399',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 100 documents/month',
        'Basic legal research',
        'Contract review (up to 50 pages)',
        'Email support',
        'Standard compliance checking',
        'Basic analytics dashboard'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing law firms and legal teams',
      features: [
        'Up to 500 documents/month',
        'Advanced legal research',
        'Unlimited contract review',
        'Priority support',
        'Advanced compliance checking',
        'Custom analytics dashboard',
        'API access',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Comprehensive solution for large law firms and corporations',
      features: [
        'Unlimited documents',
        'Premium legal research',
        'Custom AI model training',
        '24/7 dedicated support',
        'Full compliance suite',
        'Advanced analytics & reporting',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Contract Analysis',
      description: 'Automatically analyze contracts for key terms, risks, and compliance issues',
      icon: DocumentTextIcon,
      savings: 'Save 15+ hours per contract'
    },
    {
      title: 'Legal Research',
      description: 'Find relevant case law and precedents in seconds instead of hours',
      icon: MagnifyingGlassIcon,
      savings: 'Reduce research time by 80%'
    },
    {
      title: 'Due Diligence',
      description: 'Comprehensive due diligence analysis for mergers and acquisitions',
      icon: ShieldCheckIcon,
      savings: 'Process 10x more documents'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Continuous monitoring of regulatory changes and compliance requirements',
      icon: CogIcon,
      savings: 'Stay compliant automatically'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Legal Assistant Pro - Advanced Legal AI Solutions | Zion Tech Group"
        description="Transform your legal practice with our AI-powered legal assistant. Advanced document analysis, case law research, contract review, and compliance checking. Starting at $399/month."
        keywords="AI legal assistant, legal AI, document analysis, case law research, contract review, legal compliance, law firm automation, legal technology"
        canonicalUrl="https://ziontechgroup.com/ai-legal-assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI Legal Assistant Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your legal practice with AI-powered document analysis, case law research, and compliance checking. 
                <br className="hidden sm:block" />
                <span className="text-indigo-400 font-semibold">Reduce legal research time by 80% and increase accuracy by 99.2%</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-indigo-400 text-indigo-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-indigo-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">99.2%</div>
                  <div className="text-gray-300 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">80%</div>
                  <div className="text-gray-300 text-sm">Time Saved</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">50M+</div>
                  <div className="text-gray-300 text-sm">Legal Documents</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
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
                Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Legal AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Advanced AI technology designed specifically for legal professionals to streamline workflows and improve accuracy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-indigo-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Real-World <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how legal professionals are using our AI assistant to transform their practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {useCase.savings}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Transparent <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your legal practice. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-indigo-500 shadow-indigo-500/20' 
                      : 'border-slate-700 hover:border-indigo-500 hover:shadow-indigo-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who are already using AI to work smarter and faster.
              <br className="hidden sm:block" />
              <span className="text-indigo-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-indigo-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;