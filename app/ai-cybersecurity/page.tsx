import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  TrendingUp,
  Zap,
  Globe,
  Database,
  Users,
  FileShield
} from 'lucide-react';

export default function AICybersecurityPage() {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that identify and neutralize threats in real-time.',
      benefits: ['99.9% threat detection accuracy', 'Real-time monitoring', 'Zero false positives', 'Adaptive learning']
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption protocols to protect your sensitive data and communications.',
      benefits: ['AES-256 encryption', 'End-to-end security', 'Key management', 'Compliance ready']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor user behavior patterns to detect anomalies and potential security breaches.',
      benefits: ['Anomaly detection', 'User profiling', 'Risk scoring', 'Automated responses']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Automated incident response and recovery systems to minimize damage and downtime.',
      benefits: ['Instant alerts', 'Automated containment', 'Recovery protocols', 'Forensic analysis']
    }
  ];

  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audit and vulnerability assessment of your infrastructure.',
      icon: FileShield,
      features: ['Penetration testing', 'Vulnerability scanning', 'Risk assessment', 'Compliance audit'],
      price: 'Starting at $5,000'
    },
    {
      title: 'AI Security Monitoring',
      description: '24/7 AI-powered security monitoring and threat detection services.',
      icon: Eye,
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Security reports'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'Security Implementation',
      description: 'Complete security infrastructure setup and configuration for your organization.',
      icon: Lock,
      features: ['Firewall setup', 'Access controls', 'Encryption setup', 'Security policies'],
      price: 'Starting at $15,000'
    },
    {
      title: 'Security Training',
      description: 'Comprehensive security awareness training for your team and employees.',
      icon: Users,
      features: ['Phishing simulation', 'Security workshops', 'Compliance training', 'Best practices'],
      price: 'Starting at $1,500'
    }
  ];

  const threats = [
    {
      name: 'Ransomware Attacks',
      description: 'AI-powered detection and prevention of ransomware threats.',
      protection: '99.8% success rate',
      icon: Shield
    },
    {
      name: 'Phishing Attempts',
      description: 'Advanced email filtering and user education to prevent phishing.',
      protection: '95% reduction in successful attacks',
      icon: Eye
    },
    {
      name: 'Data Breaches',
      description: 'Comprehensive data protection and breach prevention measures.',
      protection: 'Zero data breaches in 2024',
      icon: Database
    },
    {
      name: 'Insider Threats',
      description: 'Behavioral monitoring to detect and prevent insider threats.',
      protection: 'Real-time detection',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, encryption, and 24/7 monitoring." />
        <meta name="keywords" content="AI cybersecurity, threat detection, data protection, security monitoring, encryption, incident response" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI
              <span className="block bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with cutting-edge AI-powered cybersecurity solutions. 
              Advanced threat detection, real-time monitoring, and automated incident response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Get Protected
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300"
              >
                Security Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Cybersecurity Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Security Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-red-400 font-semibold">{service.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Threat Protection Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Advanced Threat Protection
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threats.map((threat, index) => {
                const Icon = threat.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{threat.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{threat.description}</p>
                    <div className="text-red-400 font-semibold text-sm">{threat.protection}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Stats Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Security Track Record</h2>
              <p className="text-xl text-gray-300">Proven results in protecting businesses from cyber threats</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Threat Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">0</div>
                <div className="text-gray-400">Successful Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Protected Businesses</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a cyber attack. Protect your business with our AI-powered security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl font-semibold hover:bg-red-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}