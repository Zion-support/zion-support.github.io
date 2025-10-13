'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  BeakerIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  CogIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AIQuantumComputingSimulatorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Quantum Computing Simulator Pro",
    "description": "Revolutionary quantum computing simulation platform for complex problem solving and optimization using advanced AI algorithms.",
    "url": "https://ziontechgroup.com/ai-quantum-computing-simulator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "1999",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      title: "Quantum Circuit Simulation",
      description: "Advanced quantum circuit design and simulation with up to 50 qubits",
      icon: CpuChipIcon
    },
    {
      title: "AI-Powered Optimization",
      description: "Machine learning algorithms optimize quantum operations for maximum efficiency",
      icon: LightBulbIcon
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics dashboard with quantum state visualization",
      icon: ChartBarIcon
    },
    {
      title: "Secure Environment",
      description: "Enterprise-grade security with encrypted quantum state storage",
      icon: ShieldCheckIcon
    }
  ];

  const useCases = [
    "Financial portfolio optimization",
    "Drug discovery and molecular simulation",
    "Cryptographic algorithm testing",
    "Supply chain optimization",
    "Climate modeling and prediction",
    "Machine learning acceleration"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$1,999",
      period: "per month",
      description: "Perfect for research teams and small projects",
      features: [
        "Up to 20 qubits simulation",
        "Basic quantum algorithms library",
        "Standard support",
        "5 concurrent users",
        "100 simulation hours/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "per month",
      description: "Ideal for enterprise research and development",
      features: [
        "Up to 50 qubits simulation",
        "Advanced quantum algorithms",
        "Priority support",
        "25 concurrent users",
        "500 simulation hours/month",
        "Custom algorithm development"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "For large-scale quantum computing research",
      features: [
        "Unlimited qubits simulation",
        "Full quantum algorithms suite",
        "24/7 dedicated support",
        "Unlimited users",
        "Unlimited simulation hours",
        "Custom quantum hardware integration",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Quantum Computing Simulator Pro - Zion Tech Group"
        description="Revolutionary quantum computing simulation platform for complex problem solving and optimization using advanced AI algorithms."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <BeakerIcon className="h-16 w-16 text-purple-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Simulator Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your research with our cutting-edge quantum computing simulation platform. 
              Harness the power of quantum mechanics combined with advanced AI algorithms to solve 
              complex optimization problems that are impossible with classical computers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of computing with our advanced quantum simulation platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-purple-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our quantum simulator is being used by leading organizations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{useCase}</h3>
                </div>
                <p className="text-gray-600">
                  Leverage quantum algorithms to solve complex optimization problems in this domain.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Quantum Computing Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your research needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <StarIcon className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  tier.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Quantum Computing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and start solving problems that were previously impossible. 
            Contact our quantum computing experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}