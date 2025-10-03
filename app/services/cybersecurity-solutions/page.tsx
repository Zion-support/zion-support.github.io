import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, Eye, Lock, AlertTriangle, BarChart3, 
  Clock, CheckCircle, ArrowRight, Phone, 
  Mail, ExternalLink, Zap, Target, Award, 
  Globe, Smartphone, Brain, Monitor, Search, Network
} from 'lucide-react';

export const metadata = {
  title: 'Cybersecurity Solutions — Zion Tech Group',
  description: 'Comprehensive cybersecurity micro SaaS solutions including threat detection, vulnerability scanning, compliance, and security monitoring.',
  keywords: 'cybersecurity, threat detection, vulnerability scanning, security compliance, security monitoring, micro SaaS',
};

export default function CybersecuritySolutions() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const cybersecurityServices = [
    {
      name: 'AI-Powered Threat Detection Platform',
      description: 'Advanced threat detection with machine learning, behavioral analysis, and real-time response.',
      price: '$499 - $3,999/month',
      eta: '3-4 weeks',
      features: [
        'AI-powered threat detection and analysis',
        'Real-time behavioral monitoring',
        'Automated incident response',
        'Threat intelligence integration',
        'Custom security rules and policies'
      ],
      icon: Shield,
      category: 'Threat Detection',
      roi: '95% reduction in security incidents',
      marketPrice: '$1,000 - $7,000/month',
      savings: 'Save up to 43%'
    },
    {
      name: 'Vulnerability Assessment & Management',
      description: 'Comprehensive vulnerability scanning with automated remediation and compliance tracking.',
      price: '$299 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'Automated vulnerability scanning',
        'Risk assessment and prioritization',
        'Remediation tracking and reporting',
        'Compliance monitoring and reporting',
        'Integration with security tools'
      ],
      icon: Search,
      category: 'Vulnerability Management',
      roi: '80% reduction in vulnerability exposure',
      marketPrice: '$600 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Security Compliance & Audit Platform',
      description: 'Automated compliance monitoring for SOC 2, GDPR, HIPAA, and other regulatory requirements.',
      price: '$399 - $2,999/month',
      eta: '3-4 weeks',
      features: [
        'Automated compliance monitoring',
        'Regulatory framework mapping',
        'Audit trail and documentation',
        'Compliance reporting and dashboards',
        'Remediation workflow management'
      ],
      icon: Lock,
      category: 'Compliance',
      roi: '90% reduction in compliance preparation time',
      marketPrice: '$800 - $5,500/month',
      savings: 'Save up to 45%'
    },
    {
      name: 'Security Analytics & SIEM Platform',
      description: 'Advanced security information and event management with threat hunting and forensics.',
      price: '$799 - $5,999/month',
      eta: '4-6 weeks',
      features: [
        'Security event correlation and analysis',
        'Threat hunting and investigation',
        'Forensic analysis and incident response',
        'Custom dashboards and reporting',
        'Integration with security tools'
      ],
      icon: BarChart3,
      category: 'Security Analytics',
      roi: '70% improvement in threat detection time',
      marketPrice: '$1,600 - $10,000/month',
      savings: 'Save up to 40%'
    },
    {
      name: 'Identity & Access Management Suite',
      description: 'Comprehensive IAM solution with multi-factor authentication and privileged access management.',
      price: '$199 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        'Multi-factor authentication (MFA)',
        'Single sign-on (SSO) integration',
        'Privileged access management',
        'User provisioning and deprovisioning',
        'Access review and certification'
      ],
      icon: Eye,
      category: 'Identity Management',
      roi: '85% reduction in unauthorized access incidents',
      marketPrice: '$400 - $2,800/month',
      savings: 'Save up to 46%'
    },
    {
      name: 'Security Awareness Training Platform',
      description: 'Comprehensive security training with phishing simulation and awareness campaigns.',
      price: '$99 - $699/month',
      eta: '1-2 weeks',
      features: [
        'Interactive security training modules',
        'Phishing simulation and testing',
        'Security awareness campaigns',
        'Progress tracking and reporting',
        'Custom training content creation'
      ],
      icon: AlertTriangle,
      category: 'Security Training',
      roi: '60% reduction in human error incidents',
      marketPrice: '$200 - $1,300/month',
      savings: 'Save up to 46%'
    }
  ];

  const itServices = [
    {
      name: 'Cybersecurity Infrastructure',
      description: 'Secure cloud infrastructure with advanced security controls and monitoring.',
      price: '$799 - $4,999/month',
      eta: '2-3 weeks',
      features: [
        'Secure cloud infrastructure design',
        'Advanced security controls implementation',
        'Continuous security monitoring',
        'Automated security updates and patches',
        '24/7 security operations center (SOC)'
      ],
      icon: Monitor,
      category: 'Infrastructure',
      roi: '99.9% security uptime maintained',
      marketPrice: '$1,600 - $8,500/month',
      savings: 'Save up to 41%'
    },
    {
      name: 'Security Operations Center (SOC)',
      description: '24/7 security monitoring and incident response with expert security analysts.',
      price: '$1,999 - $9,999/month',
      eta: '1-2 weeks',
      features: [
        '24/7 security monitoring and analysis',
        'Expert security analyst team',
        'Incident response and management',
        'Threat intelligence and research',
        'Custom security reporting and alerts'
      ],
      icon: Network,
      category: 'SOC Services',
      roi: '99.9% incident response time improvement',
      marketPrice: '$4,000 - $17,000/month',
      savings: 'Save up to 41%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Head>
        <title>Cybersecurity Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity micro SaaS solutions including threat detection, vulnerability scanning, compliance, and security monitoring." />
        <meta name="keywords" content="cybersecurity, threat detection, vulnerability scanning, security compliance, security monitoring, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/cybersecurity-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business with our comprehensive suite of cybersecurity micro SaaS solutions. 
              From threat detection to compliance management, we provide enterprise-grade security technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Visit: ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cybersecurity Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity technology solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cybersecurityServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-red-400 mr-3" />
                  <span className="text-sm text-red-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-red-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-400">Your Savings:</span>
                    <span className="text-red-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-red-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for cybersecurity applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-orange-400 mr-3" />
                  <span className="text-sm text-orange-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-orange-400">Your Savings:</span>
                    <span className="text-orange-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <Brain className="w-5 h-5 text-orange-400 mr-2" />
                    <span className="text-orange-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-orange-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free security consultation and custom quote for your cybersecurity needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our cybersecurity experts</p>
              <a href={phoneHref} className="text-red-400 font-semibold hover:text-red-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-orange-400 font-semibold hover:text-orange-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-yellow-400 font-semibold">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}