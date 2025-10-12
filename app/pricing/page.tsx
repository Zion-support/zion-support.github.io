'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Code, Cloud, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PricingPage() {
  const aiServices = [
    {
      name: 'AI Content Generator',
      starter: '$99',
      professional: '$199',
      enterprise: '$399',
      features: ['Content Creation', 'SEO Optimization', 'Multi-language', 'Brand Voice']
    },
    {
      name: 'AI Chatbot Builder',
      starter: '$149',
      professional: '$299',
      enterprise: '$599',
      features: ['24/7 Support', 'Multi-channel', 'Analytics', 'Custom Training']
    },
    {
      name: 'AI Analytics Dashboard',
      starter: '$199',
      professional: '$399',
      enterprise: '$799',
      features: ['Real-time Data', 'Predictive Analytics', 'Custom Reports', 'API Access']
    },
    {
      name: 'AI Cybersecurity Suite',
      starter: '$299',
      professional: '$599',
      enterprise: '$1,199',
      features: ['Threat Detection', 'Compliance', 'Incident Response', 'Security Training']
    }
  ]

  const itServices = [
    {
      name: 'Cloud Migration',
      starter: '$2,500',
      professional: '$5,000',
      enterprise: 'Custom',
      features: ['Migration Planning', 'Data Transfer', 'Security Setup', 'Ongoing Support']
    },
    {
      name: 'Cybersecurity Solutions',
      starter: '$1,800',
      professional: '$3,600',
      enterprise: 'Custom',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', '24/7 Monitoring']
    },
    {
      name: 'Infrastructure Management',
      starter: '$3,200',
      professional: '$6,400',
      enterprise: 'Custom',
      features: ['Server Management', 'Network Design', 'Backup Solutions', 'Disaster Recovery']
    },
    {
      name: 'Custom Development',
      starter: '$150/hr',
      professional: '$200/hr',
      enterprise: '$250/hr',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    }
  ]

  const microSaasServices = [
    {
      name: 'AI Task Manager Pro',
      price: '$29/month',
      features: ['Smart Prioritization', 'Team Collaboration', 'Productivity Analytics', 'Mobile App']
    },
    {
      name: 'AI Expense Tracker',
      price: '$19/month',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Tracking', 'Financial Reports']
    },
    {
      name: 'AI Password Manager',
      price: '$15/month',
      features: ['Secure Storage', 'Auto-fill', 'Security Alerts', 'Team Sharing']
    },
    {
      name: 'AI Invoice Generator',
      price: '$25/month',
      features: ['Smart Templates', 'Payment Tracking', 'Client Portal', 'Tax Calculations']
    }
  ]

  const enterprisePackages = [
    {
      name: 'AI Enterprise Suite',
      price: 'Starting at $5,000/month',
      description: 'Complete AI transformation package',
      features: [
        'All AI Services Included',
        'Custom AI Model Training',
        'Dedicated AI Engineer',
        'Priority Support',
        'Custom Integrations',
        'Advanced Analytics'
      ],
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'IT Enterprise Package',
      price: 'Starting at $8,000/month',
      description: 'Comprehensive IT infrastructure management',
      features: [
        'Complete IT Infrastructure',
        '24/7 Monitoring & Support',
        'Security & Compliance',
        'Disaster Recovery',
        'Custom Development',
        'Training & Consulting'
      ],
      icon: <Code className="w-8 h-8 text-green-500" />
    },
    {
      name: 'Digital Transformation',
      price: 'Starting at $12,000/month',
      description: 'End-to-end digital transformation',
      features: [
        'Strategic Planning',
        'AI Implementation',
        'Cloud Migration',
        'Process Automation',
        'Change Management',
        'Ongoing Optimization'
      ],
      icon: <Zap className="w-8 h-8 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SaaS tools. Choose the perfect plan for your business needs. Contact us for custom enterprise solutions." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro SaaS pricing, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              All plans include our standard support and can be upgraded anytime.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-center p-6 text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-white font-semibold">Professional</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {aiServices.map((service, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="p-6">
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-gray-300 text-sm mt-1">
                        {service.features.join(' • ')}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.starter}</div>
                      <div className="text-gray-300 text-sm">/month</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.professional}</div>
                      <div className="text-gray-300 text-sm">/month</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.enterprise}</div>
                      <div className="text-gray-300 text-sm">/month</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions for modern businesses
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-center p-6 text-white font-semibold">Starter</th>
                  <th className="text-center p-6 text-white font-semibold">Professional</th>
                  <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {itServices.map((service, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="p-6">
                      <div className="text-white font-medium">{service.name}</div>
                      <div className="text-gray-300 text-sm mt-1">
                        {service.features.join(' • ')}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.starter}</div>
                      <div className="text-gray-300 text-sm">/month</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.professional}</div>
                      <div className="text-gray-300 text-sm">/month</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-2xl font-bold text-purple-400">{service.enterprise}</div>
                      <div className="text-gray-300 text-sm">Contact us</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SaaS Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Affordable tools for everyday business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3">{service.name}</h3>
                <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Packages */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for large-scale business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enterprisePackages.map((pkg, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {pkg.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-gray-300 text-sm">{pkg.description}</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing for large organizations?</h3>
              <p className="text-gray-300">Absolutely! We offer custom enterprise packages tailored to your specific needs. Contact our sales team for a personalized quote.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange custom billing terms for enterprise clients.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial available?</h3>
              <p className="text-gray-300">Yes, we offer a 14-day free trial for most of our services. No credit card required to get started.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your business or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a 
                href="/ai-services" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Browse Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}