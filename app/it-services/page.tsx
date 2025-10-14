'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Star
} from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: [
        'AWS/Azure/GCP Setup',
        'Auto-scaling',
        'Disaster Recovery',
        '24/7 Monitoring',
        'Cost Optimization',
        'Security Compliance'
      ],
      price: 'Starting at $599/month',
      popular: true
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React/Next.js',
        'Mobile Responsive',
        'SEO Optimized',
        'Performance Tuned',
        'Progressive Web Apps',
        'E-commerce Solutions'
      ],
      price: 'Starting at $2,999/project',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native Performance',
        'Cross-platform',
        'App Store Optimization',
        'Push Notifications',
        'Offline Capabilities',
        'Security Features'
      ],
      price: 'Starting at $4,999/project',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        '24/7 Monitoring'
      ],
      price: 'Starting at $1,299/month',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your data with professional database services.',
      features: [
        'Database Design',
        'Performance Tuning',
        'Backup & Recovery',
        'Data Migration',
        'Security Hardening',
        'Monitoring & Maintenance'
      ],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      icon: Users,
      title: 'IT Support',
      description: 'Comprehensive IT support and maintenance services.',
      features: [
        '24/7 Support',
        'Remote Assistance',
        'System Maintenance',
        'Security Updates',
        'Hardware Management',
        'Software Licensing'
      ],
      price: 'Starting at $199/month',
      popular: false
    }
  ]

  const benefits = [
    'Reduce IT costs by up to 40%',
    'Improve system reliability by 99.9%',
    'Enhance security posture',
    'Scale infrastructure on demand',
    '24/7 expert support',
    'Future-proof technology solutions'
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support Available' },
    { value: '40%', label: 'Cost Reduction' }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services | Zion Tech Group - Technology Solutions</title>
        <meta 
          name="description" 
          content="Comprehensive IT services including cloud infrastructure, web development, mobile apps, cybersecurity, and database management." 
        />
        <meta 
          name="keywords" 
          content="IT services, cloud computing, web development, mobile development, cybersecurity, database management" 
        />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete technology infrastructure solutions for your business.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology services to power your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                    service.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-purple-400 font-semibold text-sm mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven benefits that drive real business value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you build a robust, scalable, and secure technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="tel:+1-555-0123" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ItServicesPage