import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  DocumentTextIcon, 
  ScaleIcon,
  SparklesIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon} from '@heroicons/react/24/outline';

const AILegalDocumentAnalyzerPage: React.FC = () => {
  const features = [
    'AI-powered contract analysis',
    'Legal document review',
    'Risk assessment and scoring',
    'Compliance checking',
    'Automated clause extraction',
    'Legal precedent research',
    'Document comparison tools',
    'Custom legal templates',
    'Integration with legal databases',
    'Secure document storage'
  ];

  const benefits = [
    '80% faster document review',
    '95% accuracy in risk detection',
    '60% reduction in legal costs',
    'Automated compliance checking',
    'Real-time legal insights',
    'Enhanced due diligence'
  ];

  const pricing = [
    {
      plan: 'Solo',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual lawyers',
      features: [
        'Up to 100 documents/month',
        'Basic AI analysis',
        'Email support',
        'Standard templates',
        'Basic reporting'
      ]
    },
    {
      plan: 'Firm',
      price: '$799',
      period: '/month',
      description: 'Ideal for law firms',
      features: [
        'Up to 1,000 documents/month',
        'Advanced AI analysis',
        'Priority support',
        'All templates',
        'Team collaboration',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited documents',
        'Full AI capabilities',
        '24/7 support',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Advanced security'
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Legal Document Analyzer - Zion Tech Group"
        description="Advanced AI-powered legal document analysis with contract review, risk assessment, and compliance checking. Reduce review time by 80% and costs by 60%."
        keywords="legal document analysis, contract review, legal AI, compliance checking, risk assessment, legal technology, document automation"
        canonicalUrl="https://ziontechgroup.com/ai-legal-document-analyzer"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-300 font-medium">AI-Powered Legal Analysis</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 holographic leading-tight">
                AI Legal Document Analyzer
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Revolutionize legal document analysis with AI-powered contract review, risk assessment, and compliance checking. 
                <span className="text-indigo-400 font-semibold"> Reduce review time by 80% and legal costs by 60%.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-8 py-4 text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="#demo"
                  className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:shadow-indigo-400/25"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-400 mb-1">80%</div>
                  <div className="text-gray-300 text-sm">Faster Review</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">95%</div>
                  <div className="text-gray-300 text-sm">Risk Detection</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-1">60%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Compliance</div>
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
                Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to analyze legal documents with unprecedented accuracy and speed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <DocumentTextIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-4 group-hover:text-indigo-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">AI Legal Document Analyzer</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in legal document processing, accuracy, and cost efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ScaleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Transparent Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your legal document analysis needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-2 border-indigo-500 shadow-xl shadow-indigo-500/25' 
                    : 'bg-slate-800/50 border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <div className="text-4xl font-bold text-indigo-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Legal Analysis?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of legal professionals already using AI Legal Document Analyzer to streamline their workflow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold text-lg">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Available 24/7 for support</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-purple-400 font-semibold text-lg">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">Quick response guaranteed</p>
              </div>
              
              <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-green-400 font-semibold text-lg">ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-indigo-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial Today
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILegalDocumentAnalyzerPage;