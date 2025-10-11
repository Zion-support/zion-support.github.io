import React from 'react';
import { CheckCircle, ArrowRight, FileText, Brain, Zap, Shield, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIDocumentIntelligencePage: React.FC = () => {
  const features = [
    'Advanced OCR with 99.5% accuracy',
    'Multi-language document processing',
    'Intelligent data extraction',
    'Automated document classification',
    'Smart contract analysis',
    'Legal document review',
    'Invoice processing automation',
    'Real-time document insights'
  ];

  const useCases = [
    {
      title: 'Legal Document Review',
      description: 'Automatically analyze contracts, agreements, and legal documents for key terms, risks, and compliance issues.',
      icon: <FileText className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Invoice Processing',
      description: 'Extract data from invoices, receipts, and financial documents with high accuracy and speed.',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Contract Analysis',
      description: 'Review and analyze contracts for key clauses, expiration dates, and potential risks.',
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Research Paper Analysis',
      description: 'Extract insights, citations, and key findings from academic and research documents.',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      features: ['Up to 1,000 documents/month', 'Basic OCR', 'Standard templates', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      features: ['Up to 10,000 documents/month', 'Advanced AI extraction', 'Custom templates', 'Priority support', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      features: ['Unlimited documents', 'Custom AI models', 'White-label solution', 'Dedicated support', 'On-premise deployment'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Document Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your document processing with AI-powered intelligence. Extract data, analyze contracts, and automate document workflows with 99.5% accuracy." />
        <meta name="keywords" content="AI document processing, OCR, document intelligence, contract analysis, invoice processing, legal document review" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Document Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your document processing with advanced AI that understands, extracts, and analyzes information from any document type with 99.5% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Document Intelligence Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI capabilities that understand and process any document type
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how AI Document Intelligence transforms various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {useCase.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your document processing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'border-2 border-white text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Document Processing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI Document Intelligence to streamline their workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDocumentIntelligencePage;