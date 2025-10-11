import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, AlertTriangle, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection and prevention systems.',
      benefits: ['Real-time monitoring', 'Behavioral analysis', 'Anomaly detection', 'Automated response']
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: 'Comprehensive 24/7 security monitoring and incident response.',
      benefits: ['Continuous monitoring', 'Threat intelligence', 'Incident response', 'Forensic analysis']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Protect sensitive data with advanced encryption and access controls.',
      benefits: ['Data encryption', 'Access management', 'Compliance monitoring', 'Data loss prevention']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'AI-driven risk assessment and vulnerability management.',
      benefits: ['Risk analysis', 'Vulnerability scanning', 'Compliance reporting', 'Security audits']
    }
  ];

  const benefits = [
    'Protect against advanced persistent threats',
    'Reduce security incidents by up to 95%',
    'Ensure compliance with industry regulations',
    'Minimize security response time',
    'Lower security operation costs',
    'Improve overall security posture'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, monitoring, and protection for your digital assets." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, data protection, risk assessment, cyber defense" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions. 
              Detect threats, prevent attacks, and secure your digital assets with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Protected
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Security Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Cybersecurity?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cybersecurity solutions provide comprehensive protection for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Target className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your digital assets with our advanced AI cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Security Assessment
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Contact Security Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiCybersecurityPage;