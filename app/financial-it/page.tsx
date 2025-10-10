import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CreditCard, 
  Shield, 
  BarChart3, 
  Lock, 
  CheckCircle, 
  ArrowRight,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Settings,
  Monitor,
  Zap,
  Globe,
  FileText,
  Users,
  Database
} from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'SOX Compliance',
      description: 'Full SOX compliance solutions that meet all Sarbanes-Oxley Act requirements for financial reporting and internal controls.',
      benefits: ['Internal controls', 'Financial reporting', 'Audit trails', 'Risk management']
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Secure, PCI-DSS compliant payment processing systems that handle high-volume transactions with zero downtime.',
      benefits: ['PCI-DSS compliance', 'Fraud detection', 'Real-time processing', 'Multi-currency support']
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Advanced financial analytics and reporting systems that provide real-time insights into business performance.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment', 'Performance metrics']
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Bank-grade security measures that protect sensitive financial data and ensure regulatory compliance.',
      benefits: ['End-to-end encryption', 'Access controls', 'Data masking', 'Security monitoring']
    }
  ];

  const solutions = [
    'Core Banking Systems',
    'Payment Gateway Integration',
    'Risk Management Platforms',
    'Trading Systems',
    'Compliance Management',
    'Financial Reporting Tools',
    'Anti-Money Laundering (AML)',
    'Know Your Customer (KYC)',
    'Treasury Management',
    'Investment Management',
    'Insurance Technology',
    'Fintech Applications'
  ];

  const complianceStandards = [
    'SOX (Sarbanes-Oxley Act)',
    'PCI-DSS Level 1',
    'ISO 27001',
    'SOC 2 Type II',
    'GDPR Compliance',
    'Basel III',
    'MiFID II',
    'Dodd-Frank Act'
  ];

  return (
    <>
      <Helmet>
        <title>Financial Services IT - Zion Tech Group</title>
        <meta name="description" content="SOX-compliant financial services IT solutions including core banking, payment processing, and risk management. Secure, scalable, and regulatory compliant." />
        <meta name="keywords" content="financial IT, SOX compliance, banking software, payment processing, fintech, risk management, financial services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <CreditCard className="w-5 h-5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">Financial Services IT</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                SOX-Compliant
                <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Financial IT
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Secure, scalable, and compliant financial services IT solutions that meet the highest 
                regulatory standards while enabling digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                  Start Financial IT Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-green-400 text-green-300 hover:bg-green-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Compliance Guide
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">SOX Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">$50B+</div>
                <div className="text-gray-300">Transactions Processed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Financial Institutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Comprehensive Financial IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From core banking systems to payment processing, we provide end-to-end 
                financial technology solutions that ensure compliance and security.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Financial Services Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete suite of financial technology solutions designed to meet the evolving 
                needs of modern financial institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white font-medium">{solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Regulatory Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our financial IT solutions are built with security and compliance at their core, 
                ensuring you meet all regulatory requirements and industry standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{standard}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions that trust us with their critical IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-green-400 text-green-300 hover:bg-green-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinancialITPage;