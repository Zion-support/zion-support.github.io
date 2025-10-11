import React from 'react';
import { CheckCircle, ArrowRight, Shield, Brain, Zap, AlertTriangle, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AICybersecuritySuitePage: React.FC = () => {
  const features = [
    'AI-powered threat detection',
    'Real-time security monitoring',
    'Automated incident response',
    'Behavioral analytics',
    'Zero-day vulnerability detection',
    'Compliance management',
    'Security orchestration',
    'Threat intelligence integration'
  ];

  const securityModules = [
    {
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks in real-time.',
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      features: ['Malware detection', 'Phishing prevention', 'Anomaly detection', 'Predictive analysis']
    },
    {
      title: 'Security Orchestration',
      description: 'Automate security workflows and incident response with AI-driven orchestration.',
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      features: ['Automated response', 'Workflow automation', 'Integration management', 'Policy enforcement']
    },
    {
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting capabilities.',
      icon: <Shield className="w-6 h-6 text-green-500" />,
      features: ['GDPR compliance', 'SOX compliance', 'HIPAA compliance', 'PCI DSS compliance']
    },
    {
      title: 'Threat Intelligence',
      description: 'Leverage global threat intelligence to stay ahead of emerging security threats.',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      features: ['Global threat feeds', 'IOC analysis', 'Threat hunting', 'Risk assessment']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$2,999/month',
      features: ['Up to 100 endpoints', 'Basic threat detection', 'Email support', 'Standard reports'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999/month',
      features: ['Up to 500 endpoints', 'Advanced AI detection', '24/7 support', 'Custom integrations', 'Compliance tools'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999/month',
      features: ['Unlimited endpoints', 'Full AI suite', 'Dedicated support', 'Custom development', 'On-premise deployment'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity suite with threat detection, automated response, and compliance management. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security orchestration, compliance management, threat intelligence, automated response" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with the most advanced AI-powered cybersecurity suite. Detect, prevent, and respond to threats with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI capabilities that protect your business 24/7
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

      {/* Security Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Modules</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive security coverage across all attack vectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {module.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{module.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise Security Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive security solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative ${plan.popular ? 'ring-2 ring-red-500' : ''}`}>
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
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700' 
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
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Secure Your Business Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait for a breach. Protect your business with the most advanced AI cybersecurity suite available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Security Assessment
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

export default AICybersecuritySuitePage;