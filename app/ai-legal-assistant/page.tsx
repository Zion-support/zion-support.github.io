'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ScaleIcon as LegalIcon,
  PlayIcon,
  PauseIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [legalQuery, setLegalQuery] = useState('');
  const [legalResponse, setLegalResponse] = useState('');
  const [documentType, setDocumentType] = useState('contract');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Legal Analysis',
      description: 'Analyze legal documents and provide insights using advanced AI trained on legal databases',
      price: 'Included'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Generation',
      description: 'Generate contracts, agreements, and legal documents with proper legal language',
      price: 'Included'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Compliance Checking',
      description: 'Check documents for compliance with relevant laws and regulations',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Get legal assistance anytime, anywhere with our AI-powered system',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10 legal documents/month',
        'Basic legal analysis',
        'Standard templates',
        'Email support',
        'Basic compliance check',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for law firms and professionals',
      features: [
        '50 legal documents/month',
        'Advanced legal analysis',
        'Custom templates',
        'Priority support',
        'Full compliance checking',
        'No watermark',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited legal documents',
        'Custom AI training',
        'Advanced analytics',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Legal database access'
      ],
      popular: false
    }
  ];

  const documentTypes = [
    {
      id: 'contract',
      name: 'Contract',
      description: 'Business agreements and contracts',
      icon: DocumentTextIcon
    },
    {
      id: 'nda',
      name: 'NDA',
      description: 'Non-disclosure agreements',
      icon: ShieldCheckIcon
    },
    {
      id: 'terms',
      name: 'Terms of Service',
      description: 'Website and app terms',
      icon: LegalIcon
    },
    {
      id: 'privacy',
      name: 'Privacy Policy',
      description: 'Data protection policies',
      icon: ShieldCheckIcon
    }
  ];

  const handleLegalQuery = async () => {
    if (!legalQuery.trim()) return;
    
    setIsProcessing(true);
    // Simulate AI legal analysis
    setTimeout(() => {
      setLegalResponse(`Legal Analysis for: "${legalQuery}"

Based on the current legal framework and recent case law, here are the key considerations:

1. **Legal Requirements**: The proposed action must comply with federal and state regulations, including but not limited to contract law, employment law, and industry-specific regulations.

2. **Risk Assessment**: There are moderate legal risks associated with this approach. It's recommended to consult with a qualified attorney for specific legal advice.

3. **Compliance Considerations**: Ensure all documentation is properly executed and meets the requirements of relevant regulatory bodies.

4. **Recommended Actions**:
   - Review all applicable laws and regulations
   - Ensure proper documentation and record-keeping
   - Consider obtaining legal counsel for complex matters

**Disclaimer**: This analysis is for informational purposes only and does not constitute legal advice. Please consult with a qualified attorney for specific legal guidance.`);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for document analysis, contract generation, and compliance checking. Get professional legal insights with our cutting-edge AI technology."
        keywords="AI legal assistant, legal AI, contract analysis, legal document generation, compliance checking, legal technology"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
                <ScaleIcon className="w-5 h-5 text-amber-400 mr-2" />
                <span className="text-amber-400 font-medium">AI Legal Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI Legal Assistant</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Get professional legal insights with our advanced AI-powered legal assistant. 
                Analyze documents, generate contracts, and ensure compliance with cutting-edge legal technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleLegalQuery}
                  disabled={isProcessing || !legalQuery.trim()}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isProcessing ? 'Analyzing...' : 'Get Legal Analysis'}
                </button>
                <button className="border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                  View Templates
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Legal Analysis Demo */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Live <span className="animated-gradient-text">Legal Analysis</span> Demo
              </h2>
              <p className="text-xl text-gray-300">
                Experience AI legal analysis in real-time
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Describe your legal question or situation</label>
                    <textarea
                      value={legalQuery}
                      onChange={(e) => setLegalQuery(e.target.value)}
                      placeholder="e.g., 'I need to create a non-disclosure agreement for my startup'"
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Document Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {documentTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setDocumentType(type.id)}
                          className={`p-3 rounded-lg border transition-all duration-300 ${
                            documentType === type.id
                              ? 'border-amber-500 bg-amber-500/10 text-amber-300'
                              : 'border-slate-600 bg-slate-800 text-gray-300 hover:border-amber-400'
                          }`}
                        >
                          <type.icon className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-xs font-medium">{type.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleLegalQuery}
                    disabled={isProcessing || !legalQuery.trim()}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing Legal Query...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Analyze Legal Query
                      </>
                    )}
                  </button>
                </div>
                
                {/* Output Section */}
                <div>
                  <label className="block text-sm font-medium mb-2">Legal Analysis</label>
                  <div className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg p-4 overflow-auto">
                    {legalResponse ? (
                      <div className="text-gray-300 text-sm whitespace-pre-line">
                        {legalResponse}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 h-full flex items-center justify-center">
                        <div>
                          <ScaleIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p>Legal analysis will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for professional legal assistance with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-amber-400 font-semibold">{feature.price}</span>
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
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal needs
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
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white' 
                      : 'border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Streamline</span> Your Legal Work?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who are already using AI to enhance their practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Legal Analysis
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

export default AILegalAssistantPage;