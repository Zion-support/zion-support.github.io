import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, FileText, Users, Lock, AlertTriangle, Eye } from 'lucide-react'

export default function GDPRPage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'GDPR Compliance Assessment',
      description: 'Comprehensive assessment of your current data protection practices and GDPR compliance status.'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Privacy Policy & Documentation',
      description: 'Create and maintain GDPR-compliant privacy policies, terms of service, and data processing agreements.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Data Subject Rights Management',
      description: 'Implement systems to handle data subject requests including access, rectification, and deletion.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: 'Data Protection by Design',
      description: 'Integrate privacy and data protection measures into your systems and processes from the ground up.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      title: 'Breach Response Planning',
      description: 'Develop and implement data breach response procedures to ensure timely notification and compliance.'
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'Privacy Impact Assessments',
      description: 'Conduct Data Protection Impact Assessments (DPIAs) for high-risk data processing activities.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'GDPR compliance assessment and gap analysis',
      features: [
        'Current state assessment',
        'Gap analysis report',
        'Compliance roadmap',
        'Risk assessment',
        'Recommendations',
        '30-day support'
      ],
      popular: false
    },
    {
      name: 'Implementation',
      price: '$7,500',
      period: 'one-time',
      description: 'Complete GDPR implementation package',
      features: [
        'Full compliance assessment',
        'Policy documentation',
        'Process implementation',
        'Staff training',
        '3-month support',
        'Compliance monitoring',
        'Data mapping',
        'Consent management'
      ],
      popular: true
    },
    {
      name: 'Ongoing Support',
      price: '$1,500',
      period: '/month',
      description: 'Continuous GDPR compliance monitoring',
      features: [
        'Monthly compliance reviews',
        'Policy updates',
        'Staff training',
        'Incident response',
        'Regular audits',
        'Documentation maintenance',
        'Legal updates',
        '24/7 support'
      ],
      popular: false
    }
  ]

  const complianceAreas = [
    'Data Mapping & Inventory',
    'Privacy Policy Creation',
    'Consent Management',
    'Data Subject Rights',
    'Breach Response Procedures',
    'Staff Training Programs',
    'Vendor Management',
    'Regular Audits'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GDPR Compliance Services - Zion Tech Group | Data Protection Solutions</title>
        <meta name="description" content="Expert GDPR compliance services to help your business meet data protection requirements. Assessment, implementation, and ongoing support." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy policy, GDPR implementation, data protection officer, GDPR consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ensure your business meets GDPR requirements with our comprehensive data protection 
              and privacy compliance services. Protect your customers and avoid costly penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Compliance Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive GDPR Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guidance and implementation services to ensure full GDPR compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              GDPR Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the GDPR compliance package that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                GDPR Compliance Areas
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive coverage of all GDPR requirements and obligations
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceAreas.map((area, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ensure GDPR Compliance?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business and customers with our expert GDPR compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}