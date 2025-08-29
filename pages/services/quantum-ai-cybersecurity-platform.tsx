import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Rocket,
  Star,
  Eye,
  AlertTriangle,
  Key
} from 'lucide-react';

export default function QuantumAICybersecurityPlatform() {
  const features = [
    {
      icon: Shield,
      title: 'Quantum-Resistant Encryption',
      description: 'Advanced encryption algorithms that remain secure even against quantum computing attacks.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms that identify and respond to threats in real-time.'
    },
    {
      icon: Zap,
      title: 'Zero-Day Vulnerability Protection',
      description: 'Proactive protection against unknown threats using behavioral analysis and AI.'
    },
    {
      icon: Target,
      title: 'Advanced Persistent Threat (APT) Defense',
      description: 'Multi-layered defense against sophisticated, long-term cyber attacks.'
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Comprehensive IAM with biometric authentication and quantum-secure tokens.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 security monitoring with real-time alerts and automated response.'
    }
  ];

  const benefits = [
    'Protect against quantum computing threats',
    'Reduce security incidents by up to 95%',
    'Achieve compliance with SOC 2, ISO 27001, and more',
    'Real-time threat detection and response',
    'Automated security operations',
    'Scalable security for growing organizations'
  ];

  const securityLayers = [
    {
      name: 'Network Security',
      description: 'Advanced firewall, intrusion detection, and network segmentation.',
      icon: Globe
    },
    {
      name: 'Endpoint Protection',
      description: 'AI-powered endpoint detection and response (EDR) systems.',
      icon: Cpu
    },
    {
      name: 'Data Security',
      description: 'Encryption at rest and in transit with quantum-resistant algorithms.',
      icon: Database
    },
    {
      name: 'Application Security',
      description: 'SAST, DAST, and runtime application self-protection (RASP).',
      icon: Key
    }
  ];

  const complianceFrameworks = [
    'SOC 2 Type II',
    'ISO 27001',
    'NIST Cybersecurity Framework',
    'GDPR',
    'HIPAA',
    'PCI DSS'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-600">Featured Service</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Quantum AI Cybersecurity Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Next-generation cybersecurity that combines quantum-resistant encryption with AI-powered threat detection 
                to protect your organization against the most sophisticated cyber attacks.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-600"
                >
                  View All Services <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our cybersecurity platform provides comprehensive protection using the latest quantum and AI technologies.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Why Choose Our Cybersecurity Platform?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform delivers enterprise-grade security with measurable results that protect your business 
                and ensure compliance with industry standards.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Shield className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Lock className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Multi-Layer Security Architecture
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our defense-in-depth approach ensures comprehensive protection across all attack vectors.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <layer.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{layer.name}</h3>
                <p className="text-gray-600 text-sm">{layer.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Industry Compliance & Standards
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our platform helps you achieve and maintain compliance with major industry standards and regulations.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium text-gray-900">{framework}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Secure Your Digital Future
            </h2>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Don't wait until it's too late. Protect your organization with the most advanced cybersecurity platform available.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-red-600 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Security Assessment
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-white hover:text-red-100"
              >
                View Security Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}