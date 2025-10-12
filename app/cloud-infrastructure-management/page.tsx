import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Shield, TrendingUp, Server, CheckCircle, Star, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-5 h-5 ml-2" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <Server className="w-5 h-5 ml-2" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
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

  return (
    <Layout
      title="Cloud Infrastructure Management - Enterprise Cloud Solutions | Zion Tech Group"
      description="Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. Multi-cloud support, 24/7 monitoring, and enterprise-grade security. Get your free assessment today."
      keywords="cloud infrastructure management, cloud optimization, multi-cloud, cloud security, cloud monitoring, cloud cost optimization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Cloud className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Infrastructure Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
              Multi-cloud support, 24/7 monitoring, and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
              </Link>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Comprehensive Cloud Management
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Enterprise-grade features that optimize your cloud infrastructure performance and costs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300">
                  <div className="text-sky-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
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

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border ${plan.popular ? 'border-sky-400/60' : 'border-slate-700/50'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white'
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
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Optimize Your Cloud Infrastructure Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300">
                Get Your Free Assessment
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}