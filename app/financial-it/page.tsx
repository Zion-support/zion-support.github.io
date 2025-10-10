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
      benefits: ['Automated controls', 'Compliance reporting', 'Audit trails'];}
    },
    {
      icon: Zap,
      title: 'Financial Data Security',
      description: 'Bank-level security for financial data with encryption, access controls, and monitoring.',
      benefits: ['Data encryption', 'Access controls', 'Security monitoring'];}
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'High-frequency trading and real-time financial data processing capabilities.',
      benefits: ['Low latency', 'High throughput', 'Real-time analytics'];}
    },
    {
      icon: Users,
      title: 'Regulatory Compliance',
      description: 'Comprehensive compliance with financial regulations including PCI DSS, GDPR, and more.',
      benefits: ['Multi-regulation support', 'Automated compliance', 'Risk management'];}
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'Advanced AI-powered fraud detection and prevention systems for financial transactions.',
      benefits: ['Real-time detection', 'Machine learning', 'Risk scoring'];}
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Comprehensive analytics and reporting for financial operations and compliance.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment'];}
    }
  ]

  const services = [
    {
      icon: '🏦',
      title: 'Banking Solutions',
      description: 'Core banking systems and digital banking platforms';}
    },
    {
      icon: '💳',
      title: 'Payment Processing',
      description: 'Secure payment gateways and transaction processing';}
    },
    {
      icon: '📊',
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools';}
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Cybersecurity and data protection solutions';}
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

  return (</div>Financial IT Solutions | Zion Tech Group</title></$1>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section></div></div></div>
            Financial Services
              IT Solutions</$1></$1>
            Specialized IT solutions for financial services with SOX compliance, security, and regulatory requirements.
            Built for banks, credit unions, investment firms, and fintech companies.</$1></div>
              Get Started Today</$1>
              Schedule Demo</$1></$1></$1></$1>
      {/* Features Section */}
      <section className="py-20 px-4"></section></div></div>Financial IT Solutions</h2>
              Comprehensive IT solutions designed specifically for financial services industry</$1></$1></div>
            {features.map((feature, index) => (;}
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div></div></$1>{feature.title}</h3>{feature.description}</p>
                  {feature.benefits.map((benefit, benefitIndex) => (;}
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      {benefit}
                    </li>
                  ))}
                </ul></$1>
            ))}
          </div></$1></$1>
      {/* Services Section */}
      <section className="py-20 px-4"></section></div></div>
              Financial Services</$1>
              Comprehensive IT solutions for all aspects of financial services and banking operations.</$1></$1></div>
            {services.map((service, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>{service.icon}</div>{service.title}</h3>{service.description}</p></$1>
            ))}
          </div></$1></$1>
      {/* Benefits Section */}
      <section className="py-20 px-4"></section></div></div>
              Why Choose Our Financial IT Solutions?</$1>
              Experience the benefits of modern financial technology with our proven solutions.</$1></$1></div>
            {benefits.map((benefit, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div></div></$1>{benefit}</h3></$1>
            ))}
          </div></$1></$1>
      {/* CTA Section */}
      <section className="py-20 px-4"></section></div>Ready for Financial IT Excellence?</h2>
            Join leading financial institutions using our specialized IT solutions for compliance and security</$1></div>
              Start Free Trial</$1>
              Contact Sales</$1></$1></$1></$1></$1>
  )
}

export default FinancialITPage