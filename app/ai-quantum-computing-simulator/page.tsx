import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChartBarIcon,
  BeakerIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  CogIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function AIQuantumComputingSimulatorPage() {
  const features = [
    "Quantum circuit simulation",
    "AI-optimized algorithms",
    "Real-time visualization",
    "Multi-qubit operations",
    "Error correction modeling",
    "Performance benchmarking",
    "Cloud-based processing",
    "Educational tools"
  ];

  const benefits = [
    "1000x faster simulation",
    "99.9% accuracy",
    "Real-time results",
    "Educational support"
  ];

  const useCases = [
    "Quantum algorithm development",
    "Research and education",
    "Cryptography research",
    "Optimization problems"
  ];

  const pricing = {
    student: {
      price: "$99",
      period: "per month",
      features: [
        "Basic quantum simulation",
        "Educational resources",
        "Community support",
        "Limited qubits (10)"
      ]
    },
    researcher: {
      price: "$499",
      period: "per month",
      features: [
        "Advanced simulation",
        "Up to 50 qubits",
        "Priority support",
        "Custom algorithms",
        "Export capabilities"
      ]
    },
    enterprise: {
      price: "$1,999",
      period: "per month",
      features: [
        "Unlimited qubits",
        "Custom integration",
        "Dedicated support",
        "API access",
        "White-label options"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Quantum Computing Simulator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered quantum computing simulator with real-time visualization, algorithm optimization, and educational tools for quantum research." />
        <meta name="keywords" content="quantum computing, quantum simulation, quantum algorithms, quantum research, AI optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CpuChipIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Simulator
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered quantum computing simulator with real-time visualization, 
              algorithm optimization, and educational tools for quantum research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
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
              Advanced Quantum Simulation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered quantum simulator provides the most accurate and efficient 
              quantum computing simulation available today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Quantum Simulator?
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
                  Advanced quantum simulation tools for {useCase.toLowerCase()} applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the quantum simulation plan that fits your research needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${plan === 'researcher' ? 'border-indigo-500' : 'border-slate-600'}`}>
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
                    plan === 'researcher' 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                      : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white'
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
              Ready to Explore Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your quantum computing journey with our AI-powered simulator.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
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