import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Lock,
  BarChart3,
  Settings
} from 'lucide-react';

export default function CloudSolutionsPage() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
      benefits: ['Automated migration tools', 'Data integrity assurance', 'Cost optimization']
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Manage your cloud infrastructure with Terraform, CloudFormation, and Kubernetes',
      benefits: ['Version control', 'Automated deployments', 'Scalable architecture']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability and automatic scaling',
      benefits: ['Auto-scaling', 'Backup & recovery', 'Performance monitoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud environment',
      benefits: ['Identity management', 'Data encryption', 'Compliance monitoring']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic cloud setup',
        '24/7 monitoring',
        'Monthly reports',
        'Email support'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced cloud architecture',
        'Auto-scaling',
        'Security compliance',
        'Priority support',
        'Custom integrations'
      ],
      cta: 'Choose Plan',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Custom cloud solutions',
        'Dedicated team',
        'SLA guarantees',
        '24/7 phone support',
        'On-site consulting'
      ],
      cta: 'Contact Sales'
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'E-commerce',
      challenge: 'Scaling infrastructure for Black Friday traffic',
      solution: 'Multi-cloud architecture with auto-scaling',
      result: '99.9% uptime, 300% performance improvement'
    },
    {
      company: 'FinanceFlow',
      industry: 'Fintech',
      challenge: 'Compliance and security requirements',
      solution: 'Secure cloud migration with compliance monitoring',
      result: 'SOC 2 compliance, 50% cost reduction'
    },
    {
      company: 'DataDriven Co.',
      industry: 'Analytics',
      challenge: 'Processing massive datasets efficiently',
      solution: 'Cloud-native data pipeline with auto-scaling',
      result: '10x faster processing, 60% cost savings'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Comprehensive cloud platform with 200+ services',
      features: ['EC2, S3, Lambda', 'RDS, DynamoDB', 'CloudFront, Route 53']
    },
    {
      name: 'Microsoft Azure',
      logo: 'Azure',
      description: 'Hybrid cloud platform with enterprise focus',
      features: ['Virtual Machines', 'Azure SQL Database', 'Azure Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      logo: 'GCP',
      description: 'AI and machine learning focused cloud platform',
      features: ['Compute Engine', 'BigQuery', 'Cloud AI Platform']
    }
  ];

  return (
    <MainLayout
      title="Cloud Solutions - Zion Tech Group"
      description="Transform your business with our comprehensive cloud solutions. AWS, Azure, and GCP migration, infrastructure management, and cloud security services."
      keywords="cloud solutions, AWS, Azure, GCP, cloud migration, infrastructure as code, cloud security, cloud consulting"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive cloud solutions. 
                From migration to management, we help you leverage the power of the cloud.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Cloud Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end cloud solutions to help your business scale, 
                secure, and optimize its infrastructure.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cloud Providers We Work With
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We have expertise across all major cloud platforms to give you 
                the best solution for your needs.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cloudProviders.map((provider, index) => (
                  <motion.div
                    key={provider.name}
                    className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-gray-700">{provider.logo}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {provider.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{provider.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {provider.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cloud Solutions Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 
                our expert support and monitoring.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={tier.name}
                    className={`bg-white rounded-lg shadow-lg p-8 ${
                      tier.popular ? 'border-2 border-indigo-500 relative' : 'border border-gray-200'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                        <span className="text-gray-500 ml-1">{tier.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                        tier.popular
                          ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses transform their infrastructure 
                with our cloud solutions.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.company}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.company}
                    </h3>
                    <p className="text-indigo-600 font-medium mb-4">{study.industry}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Solution</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Result</h4>
                        <p className="text-gray-600 text-sm">{study.result}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Let our cloud experts help you design and implement the perfect 
                cloud solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}