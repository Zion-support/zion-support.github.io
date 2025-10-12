import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Cloud, ArrowRight, CheckCircle, Zap, Brain, Smartphone, Globe, Users, BarChart3, Star, Sparkles, TrendingUp, Target, Server, Shield } from 'lucide-react'
import Layout from '../layout'
<<<<<<< HEAD
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1

export default function CloudInfrastructureManagement() {
  const features = [
    {
<<<<<<< HEAD
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
=======
      icon: <Cloud className="w-6-h-6text-cyan-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
<<<<<<< HEAD
      icon: <Shield className="w-6 h-6 text-purple-400" />,
=======
      icon: <Shield className="w-6-h-6text-purple-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
<<<<<<< HEAD
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
=======
      icon: <TrendingUp className="w-6-h-6text-yellow-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
<<<<<<< HEAD
      icon: <Server className="w-6 h-6 text-green-400" />,
=======
      icon: <Server className="w-6-h-6text-green-400" / />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
      keywords="cloud infrastructure management, cloud optimization, multi-cloud, cloud security, cloud monitoring, cloud cost optimization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-sky-500/20 rounded-full text-sky-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Enterprise Cloud Management
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure Management
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
                Multi-cloud support, 24/7 monitoring, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
=======
      keywords="cloud infrastructure management, cloud optimization, multi-cloud, cloud security, cloud monitoring, cloud cost optimization" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900-via-purple-900to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4-sm:px-6 lg:px-8" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-sky-500/20 rounded-full text-sky-400 text-smfont-medium mb-6">
                <Cloud className="w-4-h-4mr-2" / />
                Enterprise Cloud Management
              </div>
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-white mb-6"  />Cloud Infrastructure Management
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xlmx-auto mb-8" />
                Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
                Multi-cloud support, 24/7 monitoring, and enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600  hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Assessment
                  <ArrowRight className="w-5-h-5 ml-2" />
                </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10-transition-colors">View Demo
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Cloud Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
=======
        <section className="py-16 px-4-sm:px-6 lg:px-8" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-white mb-4"  />Comprehensive Cloud Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Enterprise-grade features that optimize your cloud infrastructure performance and costs
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
=======
            <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-sky-500/20 hover:border-sky-400/40-transition-all duration-300" />
                  <div className="flexitems-centermb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Features */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Infrastructure Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30-to-purple-900/30" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-white mb-4"  />Complete Infrastructure Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Everything you need to manage, secure, and optimize your cloud infrastructure
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 mr-2" />
=======
            <div className="grid grid-cols-1 md:grid-cols-2-lg:grid-cols-4gap-8">
              {managementFeatures.map((feature, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6-borderborder-slate-700" />
                  <h3 className="text-xl font-semiboldtext-white mb-4"   />{feature.category}</h3>
                  <ul className="space-y-2" />
                    {feature.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-4 h-4-text-sky-400mr-2" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparent Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
=======
        <section className="py-16 px-4-sm:px-6 lg:px-8" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-white mb-4"  />Transparent Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2-xlmx-auto" />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                Choose the plan that fits your infrastructure needs
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
=======
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-sky-400/40 scale-105 shadow-2xl shadow-sky-500/20' 
                    : 'border-sky-500/20 hover:border-sky-400/40'
                }`}>
                  {plan.popular && (
<<<<<<< HEAD
                    <div className="inline-flex items-center px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-sky-400 mr-3" />
=======
                    <div className="inline-flex items-center px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-4">
                      <Star className="w-4-h-4mr-1" / />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-boldtext-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 mb-6" />{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCircle className="w-5 h-5-text-sky-400mr-3" / />
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover:bg-sky-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30-to-purple-900/30" />
          <div className="max-w-7-xlmx-auto">
            <div className="text-centermb-12">
              <h2 className="text-3 xl font-boldtext-white mb-4"  />Trusted by Industry Leaders
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </h2>
              <p className="text-gray-300">
                See how our Cloud Infrastructure Management transforms businesses
              </p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
=======
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6-borderborder-slate-700" />
                  <div className="flexitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5-text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <p className="text-gray-300-mb-4" />"{testimonial.content}"</p>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-smtext-gray-400"   />{testimonial.company}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2xl p-8 border border-sky-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Optimize Your Cloud Infrastructure Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Your Free Assessment
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
=======
        <section className="py-16 px-4-sm:px-6 lg:px-8" />
          <div className="max-w-4 xlmx-auto text-center">
            <div className="bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-2 xl p-8-borderborder-sky-500/30">
              <h2 className="text-3 xl font-boldtext-white mb-4"  />Optimize Your Cloud Infrastructure Today
              </h2>
              <p className="text-lgtext-gray-300 mb-8" />
                Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600  hover:to-purple-700-transition-all duration-300">Get Your Free Assessment
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10-transition-colors">Learn More
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>
      </div>
    </Layout>
  )
}