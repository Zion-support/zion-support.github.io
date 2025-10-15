'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MicrophoneIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'Contract Analysis',
      description: 'AI-powered contract review and risk assessment',
      benefits: ['Risk identification', 'Clause analysis', 'Compliance checking', 'Red flag detection']
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Generation',
      description: 'Generate legal documents from templates',
      benefits: ['Contract templates', 'Legal letters', 'Agreements', 'Compliance docs']
    },
    {
      icon: ScaleIcon,
      title: 'Legal Research',
      description: 'Comprehensive legal research and case law analysis',
      benefits: ['Case law search', 'Statute analysis', 'Precedent research', 'Citation tracking']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Monitoring',
      description: 'Monitor regulatory compliance and updates',
      benefits: ['Regulation tracking', 'Compliance alerts', 'Policy updates', 'Risk assessment']
    }
  ];

  const legalAreas = [
    {
      name: 'Corporate Law',
      description: 'Business formation, contracts, governance',
      price: '$199/month',
      features: ['Entity formation', 'Contract review', 'Board resolutions', 'Compliance monitoring']
    },
    {
      name: 'Employment Law',
      description: 'HR policies, employment agreements, compliance',
      price: '$149/month',
      features: ['Employment contracts', 'Policy templates', 'Compliance tracking', 'Dispute resolution']
    },
    {
      name: 'Intellectual Property',
      description: 'Patents, trademarks, copyrights, licensing',
      price: '$299/month',
      features: ['IP searches', 'Filing assistance', 'Portfolio management', 'Infringement monitoring']
    },
    {
      name: 'Real Estate Law',
      description: 'Property transactions, leases, zoning',
      price: '$179/month',
      features: ['Lease agreements', 'Purchase contracts', 'Title research', 'Zoning compliance']
    },
    {
      name: 'Data Privacy',
      description: 'GDPR, CCPA, privacy policies, data protection',
      price: '$249/month',
      features: ['Privacy assessments', 'Policy generation', 'Compliance monitoring', 'Breach response']
    },
    {
      name: 'Litigation Support',
      description: 'Case preparation, discovery, document review',
      price: '$399/month',
      features: ['Document analysis', 'Discovery assistance', 'Case strategy', 'Evidence organization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual lawyers',
      features: [
        '5 document analyses/month',
        'Basic templates',
        'Standard research',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Small Firm',
      price: '$299',
      period: '/month',
      description: 'Ideal for small law firms',
      features: [
        '25 document analyses/month',
        'Premium templates',
        'Advanced research',
        'Priority support',
        '5 user accounts',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large law firms',
      features: [
        'Unlimited analyses',
        'All templates',
        'Full research suite',
        '24/7 support',
        'Unlimited users',
        'Custom integrations',
        'Dedicated support',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const handleDocumentAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI legal analysis
    setTimeout(() => {
      setAnalysisResult(`LEGAL ANALYSIS REPORT
      
Document Type: Employment Contract
Analysis Date: ${new Date().toLocaleDateString()}

RISK ASSESSMENT: MEDIUM RISK

Key Findings:
• Missing non-compete clause (Standard in employment contracts)
• Vacation policy unclear (Recommend specific accrual rate)
• Termination clause needs clarification (At-will vs. cause)
• Intellectual property assignment present ✓
• Confidentiality clause adequate ✓

RECOMMENDATIONS:
1. Add non-compete clause with reasonable geographic and time limits
2. Clarify vacation accrual rate and carryover policy
3. Define termination procedures and notice requirements
4. Consider adding dispute resolution clause

COMPLIANCE STATUS:
• State employment law: COMPLIANT
• Federal labor law: COMPLIANT
• Industry standards: PARTIALLY COMPLIANT

CONFIDENCE SCORE: 87%`);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Revolutionary AI-powered legal assistant for contract analysis, document generation, and legal research. Streamline your legal practice with advanced AI technology."
        keywords="AI legal assistant, legal AI, contract analysis, legal research, document generation, law firm automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-8 neon-glow">
                <ScaleIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Legal Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your legal practice with AI-powered contract analysis, document generation, and legal research. Streamline workflows and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDocumentAnalysis}
                  disabled={isAnalyzing}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing Document...' : 'Try Free Analysis'}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Live Analysis Demo */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="holographic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Document Analysis Demo</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Document or Paste Text</label>
                    <textarea
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="Paste your legal document text here for analysis..."
                      defaultValue="EMPLOYMENT AGREEMENT

This Employment Agreement is entered into between Company Inc. and John Doe on January 1, 2025.

1. POSITION: The Employee shall serve as Senior Developer
2. COMPENSATION: $120,000 annually
3. BENEFITS: Health insurance, 401k, vacation time
4. CONFIDENTIALITY: Employee agrees to maintain confidentiality
5. TERMINATION: Either party may terminate with 30 days notice"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Analysis Results</label>
                    <div className="w-full h-64 p-4 bg-slate-800 border border-slate-600 rounded-lg overflow-auto">
                      <pre className="text-sm text-green-400 whitespace-pre-wrap">
                        {analysisResult || 'Click "Try Free Analysis" to analyze document...'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to streamline your legal practice with AI-powered precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Specialized <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Legal Areas</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from specialized AI assistants for different areas of law.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalAreas.map((area, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{area.name}</h3>
                  <p className="text-gray-400 mb-4">{area.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Price:</span>
                      <span className="text-amber-400 font-semibold">{area.price}</span>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {area.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 border border-amber-400 text-amber-300 rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal practice. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-amber-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600' 
                      : 'border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Legal Professionals</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">5K+</div>
                <div className="text-gray-300">Legal Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
                <div className="text-gray-300">Documents Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who are already using AI to streamline their practice and serve clients better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;