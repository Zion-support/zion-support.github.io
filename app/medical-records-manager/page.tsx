'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, FileText, Users, Clock, CheckCircle, ArrowRight, Zap, Lock, Globe, Brain, Target, BarChart } from 'lucide-react';

const MedicalRecordsManagerPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Digital Records Management',
      description: 'Secure, organized storage and management of patient medical records'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare privacy regulations and security standards'
    },
    {
      icon: Users,
      title: 'Patient Portal',
      description: 'Secure patient access to their medical records and health information'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Instant updates and synchronization across all healthcare providers'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Intelligent analysis and insights from patient data patterns'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting and analytics for healthcare providers'
    }
  ];

  const benefits = [
    'Reduce administrative time by 60%',
    'Improve patient care coordination',
    'Ensure HIPAA compliance automatically',
    'Reduce medical errors by 40%',
    'Streamline insurance processing',
    'Enhanced patient engagement',
    'Real-time data synchronization',
    'Advanced security and encryption'
  ];

  const complianceFeatures = [
    {
      title: 'HIPAA Compliant',
      description: 'Full compliance with healthcare privacy regulations',
      icon: Shield
    },
    {
      title: 'SOC 2 Certified',
      description: 'Enterprise-grade security and data protection',
      icon: Lock
    },
    {
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption for all data transmission',
      icon: Zap
    },
    {
      title: 'Audit Trails',
      description: 'Complete audit logs for compliance and security',
      icon: FileText
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Practice',
      price: '$299',
      period: '/month',
      description: 'For practices with up to 10 providers',
      features: [
        'Up to 1,000 patients',
        'Basic EMR features',
        'Email support',
        'Standard integrations'
      ]
    },
    {
      name: 'Medium Practice',
      price: '$599',
      period: '/month',
      description: 'For practices with 11-50 providers',
      features: [
        'Up to 5,000 patients',
        'Advanced EMR features',
        'Priority support',
        'Custom workflows',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Large Practice',
      price: '$1,299',
      period: '/month',
      description: 'For large healthcare organizations',
      features: [
        'Unlimited patients',
        'Full EMR suite',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'Advanced security'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Records Manager | Zion Tech Group</title>
        <meta name="description" content="Secure, HIPAA-compliant medical records management system with AI-powered insights and patient portal integration." />
        <meta name="keywords" content="medical records, EMR, HIPAA compliance, healthcare management, patient portal" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Records Manager</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Secure, HIPAA-compliant medical records management system with AI-powered insights, patient portal, and seamless healthcare provider integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Comprehensive EMR Features</h2>
              <p className="text-gray-300">Everything you need to manage patient records securely and efficiently</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Security & Compliance</h2>
              <p className="text-gray-300">Built with healthcare security and compliance at its core</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Proven Healthcare Benefits</h2>
                <p className="text-gray-300">See how our clients have improved their healthcare delivery</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h2>
              <p className="text-gray-300">Flexible pricing options for healthcare practices of all sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-cyan-500' : 'border border-slate-700'
                }`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Modernize Your Medical Records?
              </h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of healthcare providers using our secure EMR system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MedicalRecordsManagerPage;