import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AIEdgeComputingPlatformPage() {
  const features = [
    "Real-time data processing",
    "AI model deployment",
    "Edge device management",
    "Low-latency computing",
    "Automatic scaling",
    "Security monitoring",
    "Bandwidth optimization",
    "Offline capability"
  ];

  const benefits = [
    "90% latency reduction",
    "60% bandwidth savings",
    "99.9% uptime",
    "Real-time processing"
  ];

  const useCases = [
    "IoT device management",
    "Autonomous vehicles",
    "Smart manufacturing",
    "Real-time analytics"
  ];

  const pricing = {
    starter: {
      price: "$299",
      period: "per month",
      features: [
        "Up to 10 edge devices",
        "Basic AI models",
        "Email support",
        "Standard monitoring"
      ]
    },
    professional: {
      price: "$799",
      period: "per month",
      features: [
        "Up to 100 edge devices",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Real-time analytics"
      ]
    },
    enterprise: {
      price: "$1,999",
      period: "per month",
      features: [
        "Unlimited edge devices",
        "Custom AI models",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Edge Computing Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered edge computing platform with real-time processing, device management, and low-latency computing for IoT and smart applications." />
        <meta name="keywords" content="edge computing, IoT platform, real-time processing, AI deployment, low latency computing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CpuChipIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Edge Computing Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered edge computing platform with real-time processing, 
              device management, and low-latency computing for IoT and smart applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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
              Advanced Edge Computing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered edge computing platform brings processing power closer to your data 
              sources for faster, more efficient operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Edge Platform?
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
                  Advanced edge computing solutions for {useCase.toLowerCase()} applications.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the edge computing plan that fits your IoT and smart application needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${plan === 'professional' ? 'border-cyan-500' : 'border-slate-600'}`}>
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
                    plan === 'professional' 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700' 
                      : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
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
              Ready to Deploy Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your edge computing journey with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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