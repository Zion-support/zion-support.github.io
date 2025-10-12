import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import { Cloud, ArrowRight, CheckCircle, Star, TrendingUp, Server, Shield } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
import Layout from '../layout'
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6h-6text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Shield className="w-6h-6text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <TrendingUp className="w-6h-6text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-6h-6text-green-400" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
    }
  ]

  const managementFeatures = [
    {
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic backup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Advanced backup',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Comprehensive monitoring',
        'Dedicated support',
        'Enterprise security',
        'Real-time reports',
        'Disaster recovery',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Financial Services',
      content: 'Cloud Infrastructure Management reduced our operational costs by 35% while improving performance and security.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Platform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'HIPAA compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="Cloud Infrastructure Management - Enterprise Cloud Solutions | Zion Tech Group"
      description="Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. Multi-cloud support, 24/7 monitoring, and enterprise-grade security. Get your free assessment today."
      keywords="cloud infrastructure management, cloud optimization, multi-cloud, cloud security, cloud monitoring, cloud cost optimization" />
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
              <div className="inline-flex items-center px-4 py-2 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-6">
                <Cloud className="w-4h-4mr-2" />
=======
        </div>
            <div className="text-center" />
              <div className="inline-flex items-center px-4 py-2 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-6">
        </div>
                <Cloud className="w-4h-4mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Enterprise Cloud Management
    <>
              </div>
<<<<<<< HEAD
              <h1 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />Cloud Infrastructure Management
=======
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Cloud Infrastructure Management
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
                Multi-cloud support, 24/7 monitoring, and enterprise-grade security.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
<<<<<<< HEAD
                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Get Free Assessment
                  
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
=======
        </div>
                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
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
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Comprehensive Cloud Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Enterprise-grade features that optimize your cloud infrastructure performance and costs
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Cloud Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Enterprise-grade features that optimize your cloud infrastructure performance and costs
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
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-sky-500/20 hover:border-sky-400/40transition-allduration-300" />
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

        {/* Management Features */}
    <>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Complete Infrastructure Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Everything you need to manage, secure, and optimize your cloud infrastructure
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Infrastructure Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Everything you need to manage, secure, and optimize your cloud infrastructure
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {managementFeatures.map((feature, index) => (
    <>
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6borderborder-slate-700" />
<<<<<<< HEAD
                  <h3 className="text-xl font-semiboldtext-white mb-4"   />{feature.category}</h3>
                  <ul className="space-y-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4text-sky-400mr-2" />
=======
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
                  <ul className="space-y-2" />
                    {feature.items.map((item, itemIndex) => (
    <>
                      <li key="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-4 h-4text-sky-400mr-2" / />
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
              <h2 className="text-3 xl sm:text-4xl font-bold text-white mb-4"  />Transparent Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto">
              Choose the plan that fits your infrastructure needs
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Transparent Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your infrastructure needs
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
                    ? 'border-sky-400/40 scale-105 shadow-2 xl shadow-sky-500/20' 
                    : 'border-sky-500/20 hover: border-sky-400/40'
                }`} />
                  {plan.popular && (
<<<<<<< HEAD
                    <div className="inline-flex items-center px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-4">
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
                        <CheckCircle className="w-5 h-5text-sky-400mr-3" />
=======
    <>
                    <div className="inline-flex items-center px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-4">
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
                        <CheckCircle className="w-5 h-5text-sky-400mr-3" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover: bg-sky-400/10'
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
              See how our Cloud Infrastructure Management transforms businesses
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
                See how our Cloud Infrastructure Management transforms businesses
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
            <div className="bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-sky-500/30">
              <h2 className="text-3 xl font-bold text-white mb-4"  />Optimize Your Cloud Infrastructure Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
        </div>
            <div className="bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-sky-500/30">
        </div>
              <h2 className="text-3 xl font-boldtext-whitemb-4">Optimize Your Cloud Infrastructure Today
              </h2>
              <p className="text-lgtext-gray-300mb-8" />
                Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700transition-allduration-300">Get Your Free Assessment
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