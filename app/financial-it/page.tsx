<<<<<<< HEAD
import React from 'react';
import { DollarSign, Shield, Database, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Calendar, MessageSquare, CreditCard, BarChart, Lock, Globe, Award, Star, Zap, Brain, TrendingUp } from 'lucide-react';

export default function FinancialITPage() {
  const services = [
    {
      icon: DollarSign,
      title: 'SOX-Compliant Infrastructure',
      description: 'Secure, compliant IT infrastructure designed for financial services organizations.',
      features: ['SOX Compliance', 'Data Encryption', 'Access Controls', 'Audit Logging']
    },
    {
      icon: Database,
      title: 'Financial Data Management',
      description: 'Advanced data management systems for financial data processing and analytics.',
      features: ['Real-time Processing', 'Data Warehousing', 'Analytics', 'Reporting']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Enterprise-grade security measures to protect financial data and ensure compliance.',
      features: ['Threat Detection', 'Data Protection', 'Compliance Monitoring', 'Incident Response']
    },
    {
      icon: Users,
      title: 'Risk Management Systems',
      description: 'Comprehensive risk management and compliance monitoring solutions.',
      features: ['Risk Assessment', 'Compliance Tracking', 'Alert Systems', 'Reporting']
    }
  ];

  const complianceStandards = [
    { name: 'SOX', description: 'Sarbanes-Oxley Act Compliance', icon: '📊' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard', icon: '💳' },
    { name: 'SOC 2', description: 'Service Organization Control 2', icon: '✅' },
    { name: 'ISO 27001', description: 'Information Security Management', icon: '🔒' },
    { name: 'GDPR', description: 'General Data Protection Regulation', icon: '🛡️' },
    { name: 'Basel III', description: 'International Banking Regulations', icon: '🏦' }
  ];

  const benefits = [
    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Ensures continuous access to critical financial systems'
    },
    {
      metric: '60%',
      label: 'Faster Processing',
      description: 'Accelerated financial data processing and transactions'
    },
    {
      metric: '45%',
      label: 'Cost Reduction',
      description: 'Optimized IT operations reduce overall costs'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock monitoring of financial systems'
    }
  ];

  const solutions = [
    {
      title: 'Core Banking Systems',
      description: 'Modern core banking platforms with real-time processing capabilities.',
      icon: '🏦'
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment processing systems for various payment methods.',
      icon: '💳'
    },
    {
      title: 'Trading Platforms',
      description: 'High-performance trading platforms with low-latency execution.',
      icon: '📈'
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk management and compliance monitoring systems.',
      icon: '⚠️'
    },
    {
      title: 'Regulatory Reporting',
      description: 'Automated regulatory reporting and compliance management.',
      icon: '📋'
    },
    {
      title: 'Customer Portal',
      description: 'Secure customer portals for online banking and financial services.',
      icon: '👤'
=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight, Phone, Mail } from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'SOX Compliance',
      description: 'Full SOX compliance solutions with automated controls, monitoring, and reporting capabilities.',
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Financial Data Security',
      description: 'Bank-level security for financial data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring']
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'High-frequency trading and real-time financial data processing capabilities.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics']
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance with financial regulations including PCI DSS, GDPR, and more.',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management']
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI-powered fraud detection and prevention systems for financial transactions.',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive analytics and reporting for financial operations and compliance.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Financial Services IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              SOX-compliant IT solutions designed specifically for financial services organizations, 
              ensuring security, compliance, and optimal performance for critical financial operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">SOX Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Financial Focused</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Lock className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure</span>
              </div>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Financial Services
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements. 
            Built for banks, credit unions, investment firms, and fintech companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Financial IT Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized IT solutions designed to meet the unique needs of financial services organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Compliance & Security Standards
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We ensure full compliance with all financial services industry regulations and standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Financial IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Complete IT solutions tailored for different financial services settings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Financial IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and benefits for financial services organizations
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed specifically for financial services industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> origin/main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Financial IT?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let our financial IT experts help you implement secure, compliant solutions that optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading financial institutions using our specialized IT solutions for compliance and security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;
>>>>>>> origin/main
