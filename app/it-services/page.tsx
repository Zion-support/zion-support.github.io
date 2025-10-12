'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Server, Shield, Cloud, Database, Smartphone, CheckCircle, Star, Zap, Globe, Cpu, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const [activeTab, setActiveTab] = useState('services')

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: [
        'AWS, Azure, and GCP migration',
        'Zero-downtime migration',
        'Cost optimization',
        'Security hardening',
        'Performance monitoring',
        '24/7 support'
      ],
      pricing: 'Starting at $2,500',
      duration: '2-4 weeks',
      link: '/cloud-services',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure compliance.',
      features: [
        'Security assessment and audit',
        'Firewall configuration',
        'Intrusion detection systems',
        'Security monitoring',
        'Compliance management',
        'Incident response'
      ],
      pricing: 'Starting at $1,500/month',
      duration: 'Ongoing',
      link: '/ai-cybersecurity',
      popular: true
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'API integration',
        'App store deployment',
        'Maintenance and updates'
      ],
      pricing: 'Starting at $5,000',
      duration: '6-12 weeks',
      link: '/mobile-development',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for improved performance and reliability.',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration',
        'Backup and recovery',
        'Security implementation',
        'Monitoring and maintenance'
      ],
      pricing: 'Starting at $800/month',
      duration: 'Ongoing',
      link: '/database-services',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for maximum efficiency.',
      features: [
        'Server setup and configuration',
        'Network design and implementation',
        'Hardware procurement',
        'System monitoring',
        'Disaster recovery planning',
        'IT support and maintenance'
      ],
      pricing: 'Starting at $1,200/month',
      duration: 'Ongoing',
      link: '/infrastructure-management',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: [
        'CI/CD pipeline setup',
        'Automated testing',
        'Container orchestration',
        'Infrastructure as code',
        'Monitoring and logging',
        'Performance optimization'
      ],
      pricing: 'Starting at $1,800/month',
      duration: '2-6 weeks',
      link: '/devops-services',
      popular: false
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: <Shield className="w-6 h-6" />, description: 'HIPAA-compliant solutions' },
    { name: 'Finance', icon: <Database className="w-6 h-6" />, description: 'Secure financial systems' },
    { name: 'E-commerce', icon: <Smartphone className="w-6 h-6" />, description: 'Scalable online platforms' },
    { name: 'Education', icon: <Globe className="w-6 h-6" />, description: 'Learning management systems' },
    { name: 'Manufacturing', icon: <Cpu className="w-6 h-6" />, description: 'IoT and automation' },
    { name: 'Government', icon: <Shield className="w-6 h-6" />, description: 'Secure government systems' }
  ]

  const technologies = [
    { name: 'AWS', logo: 'AWS' },
    { name: 'Azure', logo: 'AZ' },
    { name: 'Google Cloud', logo: 'GC' },
    { name: 'Docker', logo: 'DK' },
    { name: 'Kubernetes', logo: 'K8' },
    { name: 'Terraform', logo: 'TF' },
    { name: 'Jenkins', logo: 'JK' },
    { name: 'GitLab', logo: 'GL' }
  ]

  const pricingPlans = [
    {
      name: 'Basic Support',
      price: '$1,200',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Remote IT support',
        'Basic security monitoring',
        'Email support',
        'Monthly health checks',
        'Software updates',
        'Backup management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        '24/7 IT support',
        'Advanced security monitoring',
        'Priority support',
        'Weekly health checks',
        'Proactive maintenance',
        'Cloud management',
        'Disaster recovery',
        'Compliance support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000',
      period: '/month',
      description: 'Full-service IT management for large organizations',
      features: [
        'Dedicated IT team',
        'Enterprise security suite',
        '24/7 phone support',
        'Daily health checks',
        'Custom solutions',
        'Multi-cloud management',
        'Advanced disaster recovery',
        'Full compliance management',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Healthcare Provider',
      content: 'Zion Tech Group\'s cloud migration service was exceptional. They migrated our entire infrastructure with zero downtime and improved our system performance by 300%.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Sarah Davis',
      company: 'Financial Services',
      content: 'Their cybersecurity solutions have given us peace of mind. The security monitoring and incident response capabilities are top-notch, and we\'ve had zero security breaches.',
      rating: 5,
      avatar: 'SD'
    },
    {
      name: 'Michael Brown',
      company: 'E-commerce Platform',
      content: 'The mobile app development team delivered an outstanding product. Our app has 4.8 stars on the app store and has significantly increased our customer engagement.',
      rating: 5,
      avatar: 'MB'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Server className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> },
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '50+', label: 'Enterprise Clients', icon: <Globe className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Complete IT services including cloud migration, cybersecurity, mobile development, and infrastructure management. Expert solutions for modern businesses. Starting at $1,200/month." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, database management, infrastructure, DevOps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Complete IT infrastructure solutions including cloud migration, cybersecurity, mobile development, 
              and ongoing support to keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-blue-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xl font-bold text-white">{service.pricing}</span>
                    <span className="text-gray-300 text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Specialized IT solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center text-blue-400">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Technologies We Use</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Cutting-edge technologies and platforms for modern IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">IT Support Plans</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the IT support plan that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
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
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              See how our IT services have helped businesses succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our expert team help you build a robust, secure, and scalable IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}