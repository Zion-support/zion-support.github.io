import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  EyeIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function AICyberThreatHunterPage() {
  const features = [
    "Real-time threat detection",
    "AI-powered threat hunting",
    "Behavioral analysis",
    "Threat intelligence integration",
    "Automated response",
    "Zero-day detection",
    "Multi-vector analysis",
    "Custom threat rules"
  ];

  const benefits = [
    "99.7% threat detection accuracy",
    "60% faster incident response",
    "24/7 automated monitoring",
    "Reduced false positives"
  ];

  const useCases = [
    "Enterprise security monitoring",
    "Critical infrastructure protection",
    "Financial services security",
    "Healthcare data protection"
  ];

  const pricing = {
    starter: {
      price: "$1,999",
      period: "per month",
      features: [
        "Basic threat detection",
        "Email alerts",
        "Standard reporting",
        "Email support"
      ]
    },
    professional: {
      price: "$3,999",
      period: "per month",
      features: [
        "Advanced AI analysis",
        "Custom threat rules",
        "Priority support",
        "Detailed forensics",
        "Threat intelligence feeds"
      ]
    },
    enterprise: {
      price: "$7,999",
      period: "per month",
      features: [
        "Full threat hunting suite",
        "Custom integration",
        "Dedicated SOC team",
        "Compliance reporting",
        "Incident response automation"
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Cyber Threat Hunter - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cyber threat hunting with real-time detection, behavioral analysis, and automated response for enterprise security." />
        <meta name="keywords" content="cyber threat hunting, AI security, threat detection, behavioral analysis, SOC, cybersecurity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheckIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cyber Threat Hunter
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI-powered cyber threat hunting with real-time detection, 
              behavioral analysis, and automated response for enterprise security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
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
              Advanced Threat Hunting Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI threat hunter uses machine learning and behavioral analysis to identify 
              and neutralize threats before they can cause damage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Threat Hunter?
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
                  Comprehensive threat hunting and security monitoring for {useCase.toLowerCase()} environments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the threat hunting solution that fits your security needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(pricing).map(([plan, details]) => (
              <div key={plan} className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${plan === 'professional' ? 'border-red-500' : 'border-slate-600'}`}>
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
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700' 
                      : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
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
              Ready to Hunt Down Cyber Threats?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Protect your organization with our AI-powered threat hunting solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
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