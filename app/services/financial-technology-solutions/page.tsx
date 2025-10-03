import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  CreditCard, DollarSign, TrendingUp, Shield, Calculator, 
  FileText, BarChart3, Clock, Users, CheckCircle, 
  ArrowRight, Phone, Mail, MapPin, ExternalLink,
  Zap, Target, Award, Globe, Smartphone
} from 'lucide-react';

export const metadata = {
  title: 'Financial Technology Solutions — Zion Tech Group',
  description: 'Comprehensive fintech micro SaaS solutions including payment processing, invoicing, expense tracking, and financial analytics.',
  keywords: 'fintech solutions, payment processing, invoicing software, expense tracking, financial analytics, micro SaaS',
};

export default function FinancialTechnologySolutions() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const fintechServices = [
    {
      name: 'AI-Powered Payment Processing Platform',
      description: 'Advanced payment gateway with fraud detection, multi-currency support, and automated reconciliation.',
      price: '$199 - $1,999/month',
      eta: '2-3 weeks',
      features: [
        'Real-time fraud detection with 99.9% accuracy',
        'Support for 150+ currencies and payment methods',
        'Automated reconciliation and reporting',
        'PCI DSS compliance and security',
        'API integration with existing systems'
      ],
      icon: CreditCard,
      category: 'Payment Processing',
      roi: '60% reduction in payment processing costs',
      marketPrice: '$400 - $3,500/month',
      savings: 'Save up to 43%'
    },
    {
      name: 'Smart Invoice Management Suite',
      description: 'Automated invoicing with AI-powered payment predictions and customer behavior analysis.',
      price: '$149 - $899/month',
      eta: '1-2 weeks',
      features: [
        'Automated invoice generation and delivery',
        'AI-powered payment prediction and reminders',
        'Customer payment behavior analytics',
        'Multi-language and multi-currency support',
        'Integration with accounting software'
      ],
      icon: FileText,
      category: 'Invoicing',
      roi: '85% faster invoice processing',
      marketPrice: '$300 - $1,800/month',
      savings: 'Save up to 50%'
    },
    {
      name: 'Expense Tracking & Analytics Engine',
      description: 'AI-driven expense management with receipt scanning and budget optimization.',
      price: '$99 - $599/month',
      eta: '1-2 weeks',
      features: [
        'OCR receipt scanning with 99.5% accuracy',
        'Automated expense categorization',
        'Budget tracking and alerts',
        'Tax compliance and reporting',
        'Mobile app for on-the-go tracking'
      ],
      icon: Calculator,
      category: 'Expense Management',
      roi: '70% reduction in expense processing time',
      marketPrice: '$200 - $1,200/month',
      savings: 'Save up to 50%'
    },
    {
      name: 'Financial Analytics Dashboard',
      description: 'Real-time financial insights with predictive analytics and cash flow forecasting.',
      price: '$299 - $1,999/month',
      eta: '2-4 weeks',
      features: [
        'Real-time financial dashboards',
        'Predictive cash flow modeling',
        'Profitability analysis by segment',
        'Automated financial reporting',
        'Custom KPI tracking and alerts'
      ],
      icon: BarChart3,
      category: 'Analytics',
      roi: '40% improvement in financial decision-making',
      marketPrice: '$600 - $3,500/month',
      savings: 'Save up to 43%'
    },
    {
      name: 'Cryptocurrency Trading Platform',
      description: 'Secure crypto trading platform with AI-powered market analysis and portfolio management.',
      price: '$499 - $2,999/month',
      eta: '4-6 weeks',
      features: [
        'Multi-exchange trading integration',
        'AI-powered market analysis and signals',
        'Portfolio optimization algorithms',
        'Risk management and stop-loss automation',
        'Regulatory compliance and reporting'
      ],
      icon: TrendingUp,
      category: 'Cryptocurrency',
      roi: '25% average improvement in trading returns',
      marketPrice: '$1,000 - $5,000/month',
      savings: 'Save up to 40%'
    },
    {
      name: 'Lending & Credit Assessment Platform',
      description: 'AI-powered credit scoring and loan management system with automated underwriting.',
      price: '$799 - $4,999/month',
      eta: '4-6 weeks',
      features: [
        'AI-powered credit scoring models',
        'Automated loan underwriting',
        'Risk assessment and monitoring',
        'Regulatory compliance management',
        'Integration with credit bureaus'
      ],
      icon: Shield,
      category: 'Lending',
      roi: '90% reduction in loan processing time',
      marketPrice: '$1,500 - $8,000/month',
      savings: 'Save up to 38%'
    }
  ];

  const itServices = [
    {
      name: 'Financial Data Security Suite',
      description: 'Enterprise-grade security for financial data with encryption and compliance monitoring.',
      price: '$399 - $2,499/month',
      eta: '2-3 weeks',
      features: [
        'End-to-end encryption for all financial data',
        'SOC 2 Type II compliance monitoring',
        'Real-time threat detection and response',
        'Automated compliance reporting',
        'Multi-factor authentication and access control'
      ],
      icon: Shield,
      category: 'Security',
      roi: '99.9% reduction in security incidents',
      marketPrice: '$800 - $4,500/month',
      savings: 'Save up to 44%'
    },
    {
      name: 'Financial Cloud Infrastructure',
      description: 'Scalable cloud infrastructure optimized for financial applications and compliance.',
      price: '$599 - $3,999/month',
      eta: '1-2 weeks',
      features: [
        'High-availability cloud infrastructure',
        'Automated backup and disaster recovery',
        'Compliance-ready data centers',
        '24/7 monitoring and support',
        'Scalable resource allocation'
      ],
      icon: Globe,
      category: 'Infrastructure',
      roi: '50% reduction in infrastructure costs',
      marketPrice: '$1,200 - $6,500/month',
      savings: 'Save up to 38%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Head>
        <title>Financial Technology Solutions — Zion Tech Group</title>
        <meta name="description" content="Comprehensive fintech micro SaaS solutions including payment processing, invoicing, expense tracking, and financial analytics." />
        <meta name="keywords" content="fintech solutions, payment processing, invoicing software, expense tracking, financial analytics, micro SaaS" />
        <link rel="canonical" href={`${websiteHref}/services/financial-technology-solutions`} />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Financial Technology Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your financial operations with our comprehensive suite of fintech micro SaaS solutions. 
              From payment processing to advanced analytics, we provide enterprise-grade financial technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href={phoneHref} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: +1 302 464 0950
              </a>
              <a href={emailHref} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email: kleber@ziontechgroup.com
              </a>
              <a href={websiteHref} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Fintech Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial technology solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fintechServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-green-400 mr-3" />
                  <span className="text-sm text-green-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-400">Your Savings:</span>
                    <span className="text-green-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-green-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Supporting IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade infrastructure and security solutions for financial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <span className="text-sm text-blue-300 font-semibold">{service.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-bold text-xl">{service.price}</span>
                    <span className="text-sm text-gray-400">ETA: {service.eta}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Market Price:</span>
                    <span className="text-gray-300">{service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-400">Your Savings:</span>
                    <span className="text-blue-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">ROI Impact</span>
                  </div>
                  <p className="text-blue-300 text-sm">{service.roi}</p>
                </div>

                <div className="flex gap-3">
                  <a href={phoneHref} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                    Get Quote
                  </a>
                  <a href={emailHref} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
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
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Financial Operations?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today for a free consultation and custom quote for your financial technology needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our fintech experts</p>
              <a href={phoneHref} className="text-green-400 font-semibold hover:text-green-300">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Get detailed information and pricing</p>
              <a href={emailHref} className="text-blue-400 font-semibold hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-purple-400 font-semibold">
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