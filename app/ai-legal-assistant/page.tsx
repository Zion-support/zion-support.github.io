'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ScaleIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AILegalAssistantPage: React.FC = () => {
  const [legalQuery, setLegalQuery] = useState('');
  const [legalResponse, setLegalResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [documentType, setDocumentType] = useState('contract');

  const features = [
    'AI-powered legal document analysis',
    'Contract review and risk assessment',
    'Legal research and case law analysis',
    'Document generation and templates',
    'Compliance monitoring and alerts',
    'Legal question answering',
    'Case outcome prediction',
    'Document comparison and redlining',
    'Legal deadline tracking',
    'Multi-jurisdiction support'
  ];

  const documentTypes = [
    { id: 'contract', name: 'Contracts', description: 'Review and analyze contracts' },
    { id: 'patent', name: 'Patents', description: 'Patent applications and analysis' },
    { id: 'trademark', name: 'Trademarks', description: 'Trademark registration and protection' },
    { id: 'compliance', name: 'Compliance', description: 'Regulatory compliance documents' },
    { id: 'litigation', name: 'Litigation', description: 'Court documents and briefs' },
    { id: 'corporate', name: 'Corporate', description: 'Corporate governance documents' }
  ];

  const pricingPlans = [
    {
      name: 'Solo Practitioner',
      price: '$199',
      period: '/month',
      description: 'For individual lawyers',
      features: [
        '50 document reviews/month',
        'Basic legal research',
        'Email support',
        'Standard templates',
        'Basic compliance alerts'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$599',
      period: '/month',
      description: 'For small to medium law firms',
      features: [
        '200 document reviews/month',
        'Advanced legal research',
        'Priority support',
        'Custom templates',
        'Team collaboration',
        'API access',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large law firms and corporations',
      features: [
        'Unlimited document reviews',
        'All research capabilities',
        '24/7 dedicated support',
        'Custom AI training',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleLegalAnalysis = async () => {
    setIsProcessing(true);
    // Simulate AI legal analysis
    setTimeout(() => {
      setLegalResponse(`Legal Analysis Results:

1. Contract Review:
   - Identified 3 potential risk areas
   - Recommended 2 clause modifications
   - Compliance score: 85/100

2. Key Findings:
   - Force majeure clause needs updating
   - Payment terms are standard
   - Termination clause is comprehensive

3. Recommendations:
   - Add specific performance metrics
   - Include data protection provisions
   - Consider jurisdiction-specific requirements

4. Risk Assessment:
   - Low risk: Payment terms
   - Medium risk: Intellectual property
   - High risk: Liability limitations

This analysis is for informational purposes only and should not replace professional legal advice.`);
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <>
      <SEOHead 
        title="AI Legal Assistant - Zion Tech Group"
        description="Advanced AI-powered legal assistant for document analysis, contract review, legal research, and compliance monitoring. Streamline your legal practice with cutting-edge technology."
        keywords="AI legal assistant, legal document analysis, contract review, legal research, compliance monitoring, law firm automation, legal AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-8 neon-glow">
                <ScaleIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Legal Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your legal practice with our AI-powered legal assistant. 
                Analyze documents, review contracts, conduct research, and ensure compliance with unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleLegalAnalysis}
                  disabled={!legalQuery.trim() || isProcessing}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isProcessing ? 'Analyzing...' : 'Analyze Legal Document'}
                </button>
                <a href="#pricing" className="border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Analyze Legal Documents
                </h2>
                <p className="text-gray-300 mb-8">
                  Upload or describe your legal document for AI-powered analysis and insights.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Document Type:
                    </label>
                    <select
                      value={documentType}
                      onChange={(e) => setDocumentType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    >
                      {documentTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name} - {type.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Legal Query or Document Description:
                    </label>
                    <textarea
                      value={legalQuery}
                      onChange={(e) => setLegalQuery(e.target.value)}
                      placeholder="e.g., Review this employment contract for potential risks and compliance issues..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                  
                  <button
                    onClick={handleLegalAnalysis}
                    disabled={!legalQuery.trim() || isProcessing}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Analyzing Document...
                      </div>
                    ) : (
                      'Analyze with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Analysis Results:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 overflow-auto">
                  <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                    {legalResponse || 'Your legal analysis will appear here...'}
                  </pre>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <DocumentTextIcon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Document Review</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <ShieldCheckIcon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Compliance Check</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <ClockIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Deadline Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Legal Assistant comes equipped with powerful features for modern legal practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-amber-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your legal practice needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-amber-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-amber-500 hover:text-amber-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who are already using our AI Legal Assistant for better outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalAssistantPage;