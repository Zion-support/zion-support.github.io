'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
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
    }
  ]
  const services = [
    {
      icon: '🏦',
      title: 'Banking Solutions',
      description: 'Core banking systems and digital banking platforms'
    },
    {
      icon: '💳',
      title: 'Payment Processing',
      description: 'Secure payment gateways and transaction processing'
    },
    {
      icon: '📊',
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools'
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Cybersecurity and data protection solutions'
    }
  ]
  const benefits = [
    'SOX Compliance Ready',
    'Bank-level Security',
    'Real-time Processing',
    'Regulatory Compliance',
    'Fraud Prevention',
    'Advanced Analytics'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div><>
<//div>
<Helmet><>
</Helmet>
<title>Financial IT Solutions | Zion Tech Group</title><>
<//title>
<meta name="description" content="Professional financial IT solutions by Zion Tech Group. SOX compliance, security, and regulatory solutions for financial services." /><>
</meta name="description" content="Professional financial IT solutions by Zion Tech Group. SOX compliance, security, and regulatory solutions for financial services." />
<meta name="keywords" content="financial IT, SOX compliance, banking solutions, financial security, Zion Tech Group" /><>
</meta name="keywords" content="financial IT, SOX compliance, banking solutions, financial security, Zion Tech Group" />
</Helmet><>
<//Helmet>
<Navigation /></Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"><>
</section className="relative py-20 px-4 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></div><>
<//div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div><>
<//div>
<div className="relative max-w-7xl mx-auto text-center"></div><>
<//div>
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1><//h1>
            Financial Services</h1><>
<//h1>
<span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
  </h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.</p><//p>
            Built for banks, credit unions, investment firms, and fintech companies.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"></button><//button>
              Get Started Today</button><>
<//button>
<ArrowRight className="inline-block ml-2 w-5 h-5" /><>
</ArrowRight className="inline-block ml-2 w-5 h-5" />
</button><>
<//button>
<button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
              Schedule Demo</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Features Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4">Financial IT Solutions</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Comprehensive IT solutions designed specifically for financial services industry</p><>
<//p>
</h1><>
<//h1>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div><//div>
            {features.map((feature, index) => (</div><>
<//div>
<div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div><>
<//div>
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div><>
<//div>
<feature.icon className="w-6 h-6 text-white" /><>
</feature.icon className="w-6 h-6 text-white" />
</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{feature.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400"><>
</li key={benefitIndex} className="flex items-center text-sm text-gray-400">
<CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Services Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              Financial Services</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Comprehensive IT solutions for all aspects of financial services and banking operations.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {services.map((service, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div><>
<//div>
<div className="text-4xl mb-4">{service.icon}</div><>
<//div>
<h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><>
<//h3>
<p className="text-gray-300">{service.description}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* Benefits Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-7xl mx-auto"></div><>
<//div>
<div className="text-center mb-16"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-4"></h1><//h1>
              Why Choose Our Financial IT Solutions?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"></p><//p>
              Experience the benefits of modern financial technology with our proven solutions.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div><>
<//div>
<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<h3 className="text-lg font-semibold text-white">{benefit}</h3><>
<//h3>
</div><//div>
            ))}
          </div><>
<//div>
</div><>
<//div>
</section><//section>
      {/* CTA Section */}
      <section className="py-20 px-4"><>
</section className="py-20 px-4">
<div className="max-w-4xl mx-auto text-center"></div><>
<//div>
<h2 className="text-4xl font-bold text-white mb-6">Ready for Financial IT Excellence?</h2><>
<//h2>
<p className="text-xl text-gray-300 mb-8"></p><//p>
            Join leading financial institutions using our specialized IT solutions for compliance and security</p><>
<//p>
</h1><>
<//h1>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button><//button>
              Start Free Trial</button><>
<//button>
</h1><>
<//h1>
<button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button><//button>
              Contact Sales</button><>
<//button>
</h1><>
<//h1>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<Footer /><>
</Footer />
</div><//div>
  )
}
export default FinancialITPage
