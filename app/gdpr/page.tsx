'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Shield, Lock, FileText, Users, Globe, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const GDPRPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Data Protection Impact Assessment',
      description: 'Comprehensive DPIA to identify and mitigate privacy risks in your systems and processes.'
    },
    {
      icon: <Lock className="w-6 h-6 text-green-500" />,
      title: 'Privacy by Design',
      description: 'Implement privacy controls and data protection measures from the ground up.'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      title: 'Compliance Documentation',
      description: 'Complete GDPR documentation including policies, procedures, and consent management.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Data Subject Rights',
      description: 'Implement systems to handle data subject requests and rights under GDPR.'
    }
  ];

  const complianceSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive audit of your current data processing activities and compliance status.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Gap Analysis',
      description: 'Identify compliance gaps and develop a roadmap for GDPR implementation.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implement necessary technical and organizational measures for compliance.',
      icon: '⚙️'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Ongoing compliance monitoring and support to maintain GDPR adherence.',
      icon: '📊'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      title: 'Full GDPR Compliance',
      description: 'Ensure complete compliance with all GDPR requirements and avoid costly fines.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Enhanced Data Security',
      description: 'Strengthen your data protection measures and build customer trust.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Readiness',
      description: 'Prepare for international data protection regulations and global expansion.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'GDPR compliance assessment and gap analysis',
      features: [
        'Data audit and mapping',
        'Gap analysis report',
        'Compliance roadmap',
        'Risk assessment',
        'Recommendations'
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: '$9,999',
      period: 'one-time',
      description: 'Complete GDPR implementation and compliance',
      features: [
        'Everything in Assessment',
        'Policy development',
        'Technical implementation',
        'Staff training',
        'Documentation',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Ongoing Support',
      price: '$999',
      period: '/month',
      description: 'Continuous compliance monitoring and support',
      features: [
        'Compliance monitoring',
        'Regular audits',
        'Policy updates',
        'Incident response',
        'Staff training',
        '24/7 support'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="GDPR Compliance Services - Data Protection Solutions | Zion Tech Group"
        description="Expert GDPR compliance services to ensure your business meets all data protection requirements. Assessment, implementation, and ongoing support."
        keywords="GDPR compliance, data protection, privacy by design, GDPR implementation, data protection impact assessment, privacy compliance"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            GDPR
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Compliance
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ensure your business meets all GDPR requirements with our comprehensive compliance services. 
            Protect your data, avoid fines, and build customer trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive GDPR Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team helps you achieve and maintain full GDPR compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our GDPR Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful GDPR compliance implementation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our GDPR Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance and proven results for your GDPR compliance journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the GDPR service package that fits your compliance needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} hover:bg-white/20 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700' 
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Achieve GDPR Compliance?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free GDPR assessment and discover how we can help you achieve compliance. 
                No obligation required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GDPRPage