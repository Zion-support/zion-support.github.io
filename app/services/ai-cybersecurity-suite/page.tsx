import React from 'react';
import { Metadata } from 'next';
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Eye,
  Lock,
  AlertTriangle,
  Zap,
  Users,
  Globe,
  Clock,
  Target,
  Brain,
  Activity,
  FileCheck,
  Network
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Cybersecurity Suite - Zion Tech Group',
  description: 'Advanced AI-powered cybersecurity solutions that protect your business from evolving threats. Real-time threat detection, automated response, and comprehensive security monitoring.',
  keywords: 'AI cybersecurity, threat detection, security automation, cybersecurity suite, AI security, cyber defense',
  openGraph: {
    title: 'AI Cybersecurity Suite - Zion Tech Group',
    description: 'Advanced AI-powered cybersecurity solutions for modern enterprises',
    url: 'https://ziontechgroup.com/services/ai-cybersecurity-suite',
  },
};

const securityFeatures = [
  {
    icon: Brain,
    title: 'AI Threat Detection',
    description: 'Advanced machine learning algorithms detect and analyze threats in real-time.',
    capabilities: ['Behavioral analysis', 'Anomaly detection', 'Threat intelligence', 'Predictive modeling']
  },
  {
    icon: Zap,
    title: 'Automated Response',
    description: 'Instant threat containment and remediation with zero human intervention.',
    capabilities: ['Incident response', 'Threat isolation', 'Auto-remediation', 'Recovery automation']
  },
  {
    icon: Eye,
    title: 'Continuous Monitoring',
    description: '24/7 security monitoring across all your digital assets and infrastructure.',
    capabilities: ['Real-time monitoring', 'Log analysis', 'Performance tracking', 'Compliance reporting']
  },
  {
    icon: Lock,
    title: 'Zero-Trust Architecture',
    description: 'Implement zero-trust security models with AI-enhanced access controls.',
    capabilities: ['Identity verification', 'Access management', 'Policy enforcement', 'Risk assessment']
  }
];

const threatTypes = [
  {
    type: 'Advanced Persistent Threats (APT)',
    description: 'Sophisticated, long-term attacks targeting specific organizations.',
    protection: '95% detection rate',
    icon: Target
  },
  {
    type: 'Ransomware & Malware',
    description: 'Automated detection and prevention of malicious software.',
    protection: '99.8% prevention rate',
    icon: AlertTriangle
  },
  {
    type: 'Phishing & Social Engineering',
    description: 'AI-powered email and communication analysis.',
    protection: '98% accuracy',
    icon: Users
  },
  {
    type: 'Insider Threats',
    description: 'Behavioral analysis to detect suspicious internal activities.',
    protection: '92% early detection',
    icon: Activity
  }
];

const complianceFrameworks = [
  { name: 'SOC 2 Type II', status: 'Certified', icon: FileCheck },
  { name: 'ISO 27001', status: 'Compliant', icon: Shield },
  { name: 'GDPR', status: 'Compliant', icon: Globe },
  { name: 'HIPAA', status: 'Compliant', icon: Lock }
];

const stats = [
  { value: '99.9%', label: 'Threat Detection Accuracy', icon: Target },
  { value: '< 1min', label: 'Average Response Time', icon: Clock },
  { value: '24/7', label: 'Security Monitoring', icon: Eye },
  { value: 'Zero', label: 'Successful Breaches', icon: Shield }
];

export default function AICybersecuritySuite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm font-medium mb-8 border border-red-500/30">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Cybersecurity Suite
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our advanced AI cybersecurity suite. 
              Real-time threat detection, automated response, and comprehensive security monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Start Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI cybersecurity suite provides comprehensive protection through 
              intelligent threat detection, automated response, and continuous monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered security suite protects against the full spectrum 
              of cyber threats with industry-leading detection and prevention rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <threat.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {threat.type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {threat.description}
                </p>
                <div className="text-sm font-semibold text-green-600">
                  {threat.protection}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security suite meets the highest industry standards and regulatory requirements, 
              ensuring your organization stays compliant with evolving regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <framework.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {framework.name}
                </h3>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  {framework.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Protect your organization with 
            our AI-powered cybersecurity suite and stay ahead of evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Start Security Assessment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact Security Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}