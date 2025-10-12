'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Database, Globe, Zap, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime and data integrity.',
      features: ['Zero-downtime migration', 'Data integrity assurance', 'Cost optimization', 'Security compliance', '24/7 support'],
      pricing: 'Starting at $2,999',
      popular: true,
      category: 'Migration'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup and management for any workload.',
      features: ['Auto-scaling', 'Load balancing', 'High availability', 'Disaster recovery', 'Monitoring'],
      pricing: 'Starting at $499/month',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud environment.',
      features: ['Identity management', 'Access controls', 'Threat detection', 'Compliance audit', 'Security monitoring'],
      pricing: 'Starting at $299/month',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Database',
      description: 'Managed database services with automated backups and scaling.',
      features: ['Automated backups', 'Auto-scaling', 'Performance tuning', 'Security hardening', 'Monitoring'],
      pricing: 'Starting at $199/month',
      popular: false,
      category: 'Database'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with multi-cloud architecture.',
      features: ['Multi-cloud setup', 'Cost optimization', 'Performance monitoring', 'Vendor management', 'Disaster recovery'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Strategy'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Optimization',
      description: 'Continuous optimization of your cloud resources and costs.',
      features: ['Cost analysis', 'Resource optimization', 'Performance tuning', 'Automated scaling', 'Regular reports'],
      pricing: 'Starting at $149/month',
      popular: false,
      category: 'Optimization'
    }
  ]

  const cloudProviders = [
    { name: 'AWS', logo: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', logo: 'Azure', description: 'Microsoft Azure' },
    { name: 'GCP', logo: 'GCP', description: 'Google Cloud Platform' },
    { name: 'DigitalOcean', logo: 'DO', description: 'DigitalOcean' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand with automatic resource allocation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Efficiency',
      description: 'Reduce operational costs with pay-as-you-go pricing and optimized resource utilization.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reliability',
      description: 'High availability and disaster recovery solutions to ensure business continuity.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Security',
      description: 'Enterprise-grade security with compliance certifications and advanced threat protection.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure, security, and optimization. Expert cloud solutions for modern businesses." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Scale Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. 
              From migration to optimization, we help you harness the full power of the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Cloud Partners</h2>
            <p className="text-xl text-gray-600">We work with leading cloud providers to deliver the best solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-600">{provider.logo}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                <p className="text-gray-600 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end cloud solutions designed to meet your business needs and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <div className="mt-4 mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </span>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional cloud solutions with a focus on performance, security, and cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our cloud experts help you design, migrate, and optimize your cloud infrastructure for maximum performance and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Cloud Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CloudServicesPage