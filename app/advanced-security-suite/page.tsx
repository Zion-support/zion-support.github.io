import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AdvancedSecuritySuite() {
  const features = [
    {
      icon: <Shield className="w-6h-6text-cyan-400" />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      icon: <Brain className="w-6h-6text-purple-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      icon: <Eye className="w-6h-6text-yellow-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      icon: <Lock className="w-6h-6text-green-400" />,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools'
    }
  ]

  const securityModules = [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'USB Protection', 'Application Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'API Security', 'Container Security']
    },
    {
      category: 'Threat Intelligence',
      items: ['Threat Hunting', 'Vulnerability Scanning', 'Penetration Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 endpoints',
        'Basic threat protection',
        'Email security',
        '24/7 monitoring',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 endpoints',
        'Advanced AI protection',
        'Full security suite',
        'Priority support',
        'Compliance tools',
        'Custom policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Full compliance suite',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The AI detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturing Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
                <Shield className="w-4h-4mr-2" />
=======
        </div>
            <div className="text-center" />
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-6">
        </div>
                <Shield className="w-4h-4mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Enterprise Cybersecurity
    <>
              </div>
<<<<<<< HEAD
              <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />Advanced Security Suite
=======
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Advanced Security Suite
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
<<<<<<< HEAD
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Get Free Assessment
                  
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
=======
        </div>
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Assessment
    <>
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Comprehensive Security Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Advanced protection against the latest cyber threats
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Security Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Advanced protection against the latest cyber threats
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40transition-allduration-300" />
<<<<<<< HEAD
                  <div className="flex items-centermb-4">
=======
                  <div className="flexitems-centermb-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {feature.icon}
    <>
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300">
              {feature.description}</p>
=======
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Security Modules */}
    <>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Complete Security Coverage
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Protect every aspect of your digital infrastructure
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Security Coverage
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Protect every aspect of your digital infrastructure
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {securityModules.map((module, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
<<<<<<< HEAD
                  <h3 className="text-xl font-semiboldtext-white mb-4"   />{module.category}</h3>
                  <ul className="space-y-2" />
                    {module.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4text-red-400mr-2" />
=======
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{module.category}</h3>
                  <ul className="space-y-2" />
                    {module.items.map((item, itemIndex) => (
    <>
                      <li key="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-4 h-4text-red-400mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {item}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Pricing Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Flexible Security Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Choose the security level that fits your organization
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Flexible Security Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the security level that fits your organization
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
<<<<<<< HEAD
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
                      <Star className="w-4h-4mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-6">
              {plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5text-red-400mr-3" />
=======
    <>
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-smfont-mediummb-4">
        </div>
                      <Star className="w-4h-4mr-1" / />
                      Most Popular
                    </div>
                  )}
    <>
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                  <div className="mb-6">
        </div>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5text-red-400mr-3" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </section>

        {/* Testimonials */}
    <>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300">
              See how our security suite protects organizations worldwide
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
=======
        </div>
            <div className="text-centermb-12">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300" />
                See how our security suite protects organizations worldwide
    <>
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
<<<<<<< HEAD
                  <div className="flex items-centermb-4">
=======
                  <div className="flexitems-centermb-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                    ))}
    <>
                  </div>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">
              "{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-smtext-gray-400"   />{testimonial.company}</div>
=======
                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
    <>
            </div>
        </section>

        {/* CTA Section */}
    <>
        <section className="py-16 px-4sm:px-6lg:px-8" />
          <div className="max-w-4 xlmx-autotext-center">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Secure Your Business Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
              Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
        </div>
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Secure Your Business Today
              </h2>
              <p className="text-lgtext-gray-300mb-8" />
                Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Free Security Assessment
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>