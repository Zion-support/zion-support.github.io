import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  Star,
  FileText,
  Code,
  Monitor,
  Smartphone,
  Tablet,
  Network,
  Database,
  Cpu
} from 'lucide-react';

export default function AdvancedCybersecuritySuite() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security against sophisticated cyber threats'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Comprehensive identity and access management'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring and threat detection'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents'
    }
  ];

  const securityModules = [
    {
      title: 'Network Security',
      description: 'Advanced network protection and monitoring',
      features: ['Firewall management', 'Intrusion detection', 'DDoS protection', 'Network segmentation']
    },
    {
      title: 'Endpoint Security',
      description: 'Comprehensive device protection',
      features: ['Antivirus protection', 'Device control', 'Data encryption', 'Threat prevention']
    },
    {
      title: 'Cloud Security',
      description: 'Secure cloud infrastructure and applications',
      features: ['Cloud access control', 'Data protection', 'Compliance monitoring', 'Security automation']
    },
    {
      title: 'Data Security',
      description: 'Protection of sensitive information',
      features: ['Data encryption', 'Access controls', 'Data loss prevention', 'Backup security']
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      label: 'Threat Detection',
      description: 'High accuracy threat identification'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock security oversight'
    },
    {
      metric: '<1min',
      label: 'Response Time',
      description: 'Rapid incident response'
    },
    {
      metric: '100%',
      label: 'Compliance',
      description: 'Full regulatory compliance'
    }
  ];

  const industries = [
    {
      industry: 'Financial Services',
      focus: ['PCI DSS compliance', 'Fraud detection', 'Transaction security', 'Regulatory compliance']
    },
    {
      industry: 'Healthcare',
      focus: ['HIPAA compliance', 'Patient data protection', 'Medical device security', 'Privacy safeguards']
    },
    {
      industry: 'Government',
      focus: ['FedRAMP compliance', 'Classified data protection', 'National security', 'Infrastructure security']
    },
    {
      industry: 'Manufacturing',
      focus: ['Industrial control security', 'Supply chain protection', 'Intellectual property', 'Operational security']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Cybersecurity Suite
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive cybersecurity protection for modern enterprises. 
              Advanced threat detection, zero trust security, and 24/7 monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Protected
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Security Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced cybersecurity capabilities designed for modern threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Integrated security solutions for complete protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <div key={index} className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{module.title}</h3>
                <p className="text-gray-400 mb-6">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Performance Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantifiable security improvements and protection levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="text-4xl font-bold text-red-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Security
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for different sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-red-400">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.focus.map((focus, focusIndex) => (
                    <li key={focusIndex} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your business with advanced cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}