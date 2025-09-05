import React from 'react';
import Layout from '../../components/Layout';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    title: "Security Assessment",
    description: "Comprehensive security audits to identify vulnerabilities and risks",
    icon: Shield,
    features: ["Penetration Testing", "Vulnerability Scanning", "Risk Assessment", "Compliance Review"]
  },
  {
    title: "Threat Protection",
    description: "Advanced threat detection and prevention systems",
    icon: Lock,
    features: ["Firewall Management", "Intrusion Detection", "Malware Protection", "Email Security"]
  },
  {
    title: "Security Monitoring",
    description: "24/7 monitoring and incident response services",
    icon: Eye,
    features: ["SIEM Implementation", "Log Analysis", "Incident Response", "Forensic Analysis"]
  },
  {
    title: "Compliance & Governance",
    description: "Ensure adherence to security standards and regulations",
    icon: AlertTriangle,
    features: ["GDPR Compliance", "SOC 2 Certification", "ISO 27001", "HIPAA Compliance"]
  }
];

const securityFeatures = [
  "Advanced Threat Detection",
  "Real-time Monitoring",
  "Automated Incident Response",
  "Compliance Management",
  "Security Training",
  "Regular Security Updates"
];

export default function CybersecurityPage() {
  return (
    <Layout
      title="Cybersecurity Services - Zion Tech Group"
      description="Comprehensive cybersecurity solutions including threat protection, security assessments, and compliance management. Protect your business from cyber threats."
      keywords="cybersecurity, security assessment, threat protection, compliance, penetration testing, SOC 2, GDPR"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-gray-900 to-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity
                <span className="block text-red-400">Protection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Protect your business from cyber threats with our comprehensive security solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Get Security Audit
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Security Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your business from evolving cyber threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Security Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our security solutions include cutting-edge features to keep your business protected
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Security Assessment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
                Contact Security Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}