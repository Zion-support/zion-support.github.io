import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Eye, AlertTriangle, ArrowRight, Zap, Brain, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      title: 'Threat Detection',
      description: 'AI-powered threat detection that identifies and responds to security threats in real-time.',
      icon: Shield,
      benefits: [
        'Real-time monitoring',
        'Threat identification',
        'Automated response',
        'Pattern recognition'
      ]
    },
    {
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting for comprehensive security insights and compliance.',
      icon: Eye,
      benefits: [
        'Security dashboards',
        'Compliance reporting',
        'Risk assessment',
        'Performance metrics'
      ]
    },
    {
      title: 'Incident Response',
      description: 'Automated incident response and remediation for faster threat containment.',
      icon: AlertTriangle,
      benefits: [
        'Automated response',
        'Incident containment',
        'Recovery procedures',
        'Post-incident analysis'
      ]
    },
    {
      title: 'Network Monitoring',
      description: 'Continuous network monitoring with AI-powered anomaly detection and alerting.',
      icon: Globe,
      benefits: [
        'Network visibility',
        'Anomaly detection',
        'Traffic analysis',
        'Performance monitoring'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'Enterprise Security',
      description: 'Comprehensive security monitoring for large organizations and enterprises.',
      icon: Shield
    },
    {
      title: 'Cloud Security',
      description: 'Monitor and protect cloud infrastructure and applications.',
      icon: Globe
    },
    {
      title: 'Network Security',
      description: 'Advanced network monitoring and threat detection capabilities.',
      icon: Eye
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="AI-powered cybersecurity solutions that protect your infrastructure. Advanced threat detection, security analytics, and automated incident response for comprehensive protection." />
        <meta name="keywords" content="AI cybersecurity, security monitoring, threat detection, incident response, network security, security analytics" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your infrastructure with AI-powered cybersecurity solutions. Advanced threat detection, 
              security analytics, and automated incident response for comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered cybersecurity solutions provide comprehensive protection for your infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cybersecurity Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for organizations that need comprehensive security monitoring and protection.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-red-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered cybersecurity that protects your infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of organizations who trust our AI Cybersecurity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Protecting
                </button>
                <button className="border border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AICybersecurityPage;