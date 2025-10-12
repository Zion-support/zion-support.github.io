import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Cloud, Shield, Zap, BarChart3, Users, Clock, Database, Server, Lock } from 'lucide-react'

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Migrate to AWS, Azure, Google Cloud, or hybrid environments with our proven migration framework.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with minimal business disruption using advanced migration techniques.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Automated Migration',
      description: 'Leverage automation tools and scripts to accelerate migration timelines and reduce errors.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs with right-sizing, reserved instances, and intelligent resource management.'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases, files, and applications to the cloud.'
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-500" />,
      title: 'Security & Compliance',
      description: 'Ensure security and compliance throughout the migration process with enterprise-grade security.'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a detailed migration strategy tailored to your business needs and goals.'
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Test migration with a small subset of workloads to validate the approach.'
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Execute the complete migration with minimal downtime and maximum efficiency.'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Fine-tune cloud resources and optimize performance and costs.'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Provide continuous monitoring, support, and optimization services.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$2,500',
      period: 'one-time',
      description: 'Perfect for small businesses with basic infrastructure',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Standard security measures',
        'Email support',
        '30-day post-migration support',
        'Basic cost optimization'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: 'one-time',
      description: 'Ideal for medium to large enterprises',
      features: [
        'Up to 100 servers',
        'Comprehensive migration strategy',
        'Advanced security & compliance',
        'Priority support',
        '90-day post-migration support',
        'Advanced cost optimization',
        'Performance monitoring',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Custom Solution',
      price: 'Contact Us',
      period: '',
      description: 'For complex enterprise environments',
      features: [
        'Unlimited servers',
        'Custom migration strategy',
        'Enterprise security & compliance',
        'Dedicated migration team',
        'Extended support period',
        'Custom cost optimization',
        'Advanced monitoring',
        'White-glove service'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | AWS, Azure, Google Cloud Migration</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Zero-downtime migration with cost optimization and security compliance." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting, infrastructure migration" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
              Zero downtime, maximum security, and optimized costs guaranteed.
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
                to="/case-studies"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
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
              Why Choose Our Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert cloud migration with proven methodologies and enterprise-grade security.
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

      {/* Migration Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 6-step methodology for successful cloud migration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
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
              Migration Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your infrastructure needs
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
                  {plan.name === 'Custom Solution' ? 'Contact Us' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free cloud migration assessment and discover how we can help you move to the cloud successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Assessment
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