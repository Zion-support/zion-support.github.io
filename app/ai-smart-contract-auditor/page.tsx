import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function AISmartContractAuditorPage() {
  const features = [
    "Automated vulnerability detection",
    "Gas optimization analysis",
    "Code quality assessment",
    "Security pattern recognition",
    "Compliance checking",
    "Real-time monitoring",
    "Multi-blockchain support",
    "Custom audit reports"
  ];

  const benefits = [
    "99.9% vulnerability detection rate",
    "50% reduction in gas costs",
    "Automated compliance reporting",
    "24/7 monitoring"
  ];

  const useCases = [
    "DeFi protocol audits",
    "NFT marketplace security",
    "Token contract verification",
    "Cross-chain bridge audits"
  ];

  const pricing = {
    basic: {
      price: "$2,999",
      period: "per audit",
      features: [
        "Basic vulnerability scan",
        "Gas optimization report",
        "Security recommendations",
        "Email support"
      ]
    },
    pro: {
      price: "$4,999",
      period: "per audit",
      features: [
        "Advanced AI analysis",
        "Custom security rules",
        "Priority support",
        "Detailed remediation guide",
        "Follow-up consultation"
      ]
    },
    enterprise: {
      price: "$9,999",
      period: "per audit",
      features: [
        "Comprehensive audit suite",
        "Custom integration",
        "Dedicated support team",
        "Ongoing monitoring",
        "Compliance certification"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Smart Contract Auditor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered smart contract auditing with automated vulnerability detection, gas optimization, and security analysis for blockchain projects." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT security, gas optimization, vulnerability detection" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Smart Contract Auditor
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered smart contract auditing with automated vulnerability detection, 
              gas optimization, and comprehensive security analysis for blockchain projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Audit Quote
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI-Powered Auditing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI auditor combines machine learning with blockchain expertise to provide 
              comprehensive security analysis and optimization recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Auditor?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{benefit.split(' ')[0]}</div>
                <div className="text-gray-300">{benefit.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-3">{useCase}</h3>
                <p className="text-gray-300">
                  Comprehensive security analysis and optimization for {useCase.toLowerCase()} projects.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the audit package that fits your project needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${plan === 'pro' ? 'border-purple-500' : 'border-slate-600'}`}>
                <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan} Plan</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">{details.price}</div>
                <div className="text-gray-400 mb-6">{details.period}</div>
                
                <ul className="space-y-3 mb-8">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan === 'pro' 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get a comprehensive security audit for your blockchain project with our AI-powered auditor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Audit Quote
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}