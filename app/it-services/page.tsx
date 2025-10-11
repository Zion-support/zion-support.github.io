'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Cloud, Database, Code, Smartphone, Globe, Zap, Users, Target, BarChart3 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud services.',
      features: [
        'AWS/Azure/GCP Migration - Starting at $2,500',
        'Cloud Infrastructure Setup - $3,000+',
        'Cost Optimization - $500/month',
        '24/7 Cloud Monitoring - $800/month'
      ],
      link: '/it-services/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive cybersecurity services and threat protection.',
      features: [
        'Security Assessment - $1,500',
        'Penetration Testing - $2,500',
        'Managed Security Services - $1,500/month',
        'Incident Response - $200/hour'
      ],
      link: '/it-services/cybersecurity'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Custom Software Development',
      description: 'Build tailored software solutions that meet your specific business requirements.',
      features: [
        'Web Application Development - $5,000+',
        'Mobile App Development - $8,000+',
        'API Development - $2,500+',
        'Legacy System Modernization - $10,000+'
      ],
      link: '/it-services/software-development'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Management & Analytics',
      description: 'Transform your data into actionable insights with our data services.',
      features: [
        'Database Design & Setup - $2,000+',
        'Data Migration - $1,500+',
        'Business Intelligence - $3,000/month',
        'Data Warehousing - $2,500/month'
      ],
      link: '/it-services/data-management'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: [
        'iOS App Development - $8,000+',
        'Android App Development - $7,000+',
        'Cross-Platform Apps - $10,000+',
        'App Store Optimization - $1,500'
      ],
      link: '/it-services/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Web Development & E-commerce',
      description: 'Build modern, responsive websites and e-commerce platforms.',
      features: [
        'Custom Website Development - $3,000+',
        'E-commerce Platform - $5,000+',
        'WordPress Development - $2,000+',
        'SEO Optimization - $1,000/month'
      ],
      link: '/it-services/web-development'
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Rapid Deployment',
      description: 'Get your solutions up and running quickly with our agile development process'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and threat protection'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: 'Expert Team',
      description: 'Work with certified professionals with years of industry experience'
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ]

  const technologies = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Google Cloud', logo: '🌐' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚙️' },
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'Java', logo: '☕' },
    { name: 'C#', logo: '🔷' },
    { name: 'PHP', logo: '🐘' },
    { name: 'MySQL', logo: '🗄️' }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the optimal solution architecture for your needs'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build and thoroughly test your solution using best practices'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive IT services. Cloud migration, cybersecurity, software development, and more. Contact: +1 302 464 0950" />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, software development, mobile development, web development" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with our comprehensive IT services. From cloud migration to custom software development, we provide end-to-end technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <Link key={index} to={service.link} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-20">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">{tech.logo}</div>
                  <div className="text-xs text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver measurable results that drive business growth and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can modernize your technology and drive business success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default ITServicesPage