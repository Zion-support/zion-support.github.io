import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Zap, BarChart3, Database, Server, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration to the cloud with zero business disruption using advanced migration strategies.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security-First Approach',
      description: 'Comprehensive security assessment and implementation during migration to ensure data protection.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with our intelligent resource management and optimization.'
    }
  ]

  const migrationSteps = [
    'Assessment and planning phase',
    'Security and compliance review',
    'Infrastructure design and setup',
    'Data migration and synchronization',
    'Application migration and testing',
    'Performance optimization',
    'Go-live and monitoring',
    'Post-migration support and training'
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,500',
      period: '/month',
      description: 'For businesses with 1-50 employees',
      features: [
        'Up to 10 servers',
        'Basic cloud setup',
        'Email migration',
        '2 weeks migration',
        'Email support',
        'Basic monitoring'
      ],
      popular: false
    },
    {
      name: 'Mid-Size Company',
      price: '$7,500',
      period: '/month',
      description: 'Most popular for growing companies',
      features: [
        'Up to 100 servers',
        'Advanced cloud architecture',
        'Full application migration',
        '4 weeks migration',
        'Phone & email support',
        'Advanced monitoring',
        'Cost optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Custom cloud solutions',
        'Multi-cloud strategy',
        '8+ weeks migration',
        'Dedicated project manager',
        '24/7 monitoring',
        'Custom integrations',
        'Ongoing optimization'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '500+', label: 'Successful Migrations' },
    { number: '99.9%', label: 'Uptime During Migration' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '24/7', label: 'Migration Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. AWS, Azure, GCP expertise. Starting at $2,500/month. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud services, infrastructure migration" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services. 
              AWS, Azure, and GCP expertise with zero downtime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team ensures a smooth, secure, and cost-effective migration to the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 8-step process that ensures successful cloud migration with minimal risk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {migrationSteps.map((step, index) => (
              <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-300">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Migration Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that best fits your organization's size and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-500/50 scale-105' 
                    : 'border-white/20 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
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
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free cloud migration assessment and discover how much you can save while improving performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call +1 302 464 0950
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}