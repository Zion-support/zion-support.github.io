import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Smartphone, Database, Cpu, Wifi, Server } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: [
        'AWS, Azure, GCP expertise',
        'Zero-downtime migration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring'
      ],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat protection.',
      features: [
        'Security audits',
        'Penetration testing',
        'Firewall configuration',
        'Incident response',
        'Compliance management'
      ],
      link: '/cybersecurity'
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Performance optimization'
      ],
      link: '/devops'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Machine learning models',
        'Real-time dashboards',
        'Predictive analytics'
      ],
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: [
        'Native app development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Maintenance & support'
      ],
      link: '/mobile-development'
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-500" />,
      title: 'Infrastructure Management',
      description: 'Manage and optimize your IT infrastructure for maximum performance and reliability.',
      features: [
        'Server management',
        'Network optimization',
        'Backup solutions',
        'Disaster recovery',
        'Performance monitoring'
      ],
      link: '/infrastructure'
    }
  ]

  const stats = [
    { number: '200+', label: 'IT Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management. Expert solutions for modern businesses."
        keywords="IT services, cloud migration, cybersecurity, DevOps, infrastructure management, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" role="banner" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Get started with our IT services"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Learn more about our company"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="stats-title">
        <div className="max-w-7xl mx-auto">
          <h2 id="stats-title" className="sr-only">IT Services Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" role="listitem">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" aria-label={`${stat.number} ${stat.label}`}>
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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" role="list">
            {itServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                role="listitem"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300" role="listitem">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="cta-title">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Get started with our IT services today"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                aria-label="Learn more about our company"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}