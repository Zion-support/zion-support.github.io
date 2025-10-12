'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      title: 'Cloud Migration & Infrastructure',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security',
      price: '$2,500/month',
      features: ['AWS/Azure/GCP Migration', 'Zero Downtime Migration', 'Cost Optimization', 'Security Compliance', '24/7 Monitoring'],
      benefits: ['50% Cost Reduction', '99.9% Uptime', 'Enhanced Security', 'Scalable Infrastructure'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches',
      price: '$1,999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
      benefits: ['Advanced Threat Protection', 'Real-time Monitoring', 'Compliance Assurance', 'Risk Mitigation'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration',
      price: '$1,799/month',
      features: ['Automated Deployment', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'],
      benefits: ['Faster Deployments', 'Reduced Errors', 'Improved Collaboration', 'Scalable Operations'],
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence',
      price: '$2,299/month',
      features: ['Data Warehousing', 'Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling', 'Data Visualization'],
      benefits: ['Data-Driven Decisions', 'Real-time Insights', 'Competitive Advantage', 'Improved ROI'],
      icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      price: '$3,999/month',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'App Store Optimization'],
      benefits: ['Enhanced User Engagement', 'Increased Revenue', 'Brand Visibility', 'Market Expansion'],
      icon: <Smartphone className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'System Integration',
      description: 'Connect and integrate your existing systems for seamless data flow and improved efficiency',
      price: '$1,599/month',
      features: ['API Development', 'Legacy System Integration', 'Data Synchronization', 'Workflow Automation', 'Custom Connectors'],
      benefits: ['Improved Efficiency', 'Data Consistency', 'Reduced Manual Work', 'Better User Experience'],
      icon: <Network className="w-8 h-8 text-cyan-400" />
    }
  ]

  const industries = [
    {
      industry: 'Healthcare',
      title: 'HIPAA-Compliant Solutions',
      description: 'Secure, compliant IT infrastructure for healthcare organizations with patient data protection',
      results: ['100% HIPAA Compliance', 'Enhanced Data Security', 'Improved Patient Care', 'Reduced Compliance Costs']
    },
    {
      industry: 'Finance',
      title: 'Financial Services Technology',
      description: 'Secure, scalable IT solutions for banks, fintech companies, and financial institutions',
      results: ['PCI DSS Compliance', 'Real-time Processing', 'Fraud Prevention', 'Regulatory Compliance']
    },
    {
      industry: 'E-commerce',
      title: 'E-commerce Platform Solutions',
      description: 'High-performance e-commerce platforms with advanced features and seamless user experience',
      results: ['300% Faster Load Times', '99.9% Uptime', 'Enhanced Security', 'Mobile Optimization']
    },
    {
      industry: 'Manufacturing',
      title: 'Industrial IoT Solutions',
      description: 'Smart manufacturing solutions with IoT integration and real-time monitoring capabilities',
      results: ['25% Production Increase', 'Predictive Maintenance', 'Quality Control', 'Cost Optimization']
    }
  ]

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'HealthTech Solutions',
      role: 'IT Director',
      content: 'Zion Tech Group\'s cloud migration was flawless. We achieved 99.9% uptime and reduced costs by 40% in the first year.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'FinanceFirst Bank',
      role: 'CTO',
      content: 'Their cybersecurity solutions protected us from multiple attacks. The ROI on security investment was immediate.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'RetailMax',
      role: 'VP of Engineering',
      content: 'The DevOps implementation reduced our deployment time from hours to minutes. Our development team is 3x more productive.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and system integration. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, system integration, technology consulting" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Enterprise IT
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
              Transform your technology infrastructure with our comprehensive IT services. From cloud migration to cybersecurity, 
              we deliver solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized IT solutions tailored to your industry requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {industry.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT solutions can optimize your technology stack. Get a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/ai-services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View AI Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
