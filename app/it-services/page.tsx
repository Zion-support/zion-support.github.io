'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Server, 
  BarChart3, 
  Cloud, 
  Shield, 
  Database, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Lock
} from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      name: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices',
      price: 'Starting at $5,000',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation'],
      icon: Code,
      path: '/web-development',
      category: 'Development',
      rating: 4.9,
      reviews: 156,
      duration: '4-8 weeks'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $8,000',
      features: ['iOS & Android development', 'Cross-platform solutions', 'App store optimization', 'Maintenance support', 'UI/UX design', 'Backend integration'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Development',
      rating: 4.8,
      reviews: 134,
      duration: '6-12 weeks'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and infrastructure automation',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      icon: Server,
      path: '/devops',
      category: 'Infrastructure',
      rating: 4.7,
      reviews: 98,
      duration: '2-4 weeks'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring for your business',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Staff training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '2-3 weeks'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL APIs', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Authentication', 'Versioning'],
      icon: Database,
      path: '/api-development',
      category: 'Backend Development',
      rating: 4.8,
      reviews: 112,
      duration: '3-5 weeks'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      price: 'Starting at $1,500',
      features: ['Database design', 'Performance optimization', 'Backup & recovery', 'Data migration', 'Security hardening', 'Monitoring setup'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 87,
      duration: '1-3 weeks'
    }
  ];

  const additionalServices = [
    { name: 'Cloud Migration', path: '/cloud-migration', icon: Cloud },
    { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
    { name: 'IT Consulting', path: '/it-consulting', icon: Users },
    { name: 'System Integration', path: '/system-integration', icon: Server },
    { name: 'Network Security', path: '/network-security', icon: Lock },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, Google Cloud, Kubernetes' },
    { name: 'Programming Languages', icon: Code, description: 'Python, JavaScript, Java, C#, Go, Rust' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis, Elasticsearch' },
    { name: 'DevOps Tools', icon: Server, description: 'Docker, Jenkins, Terraform, Ansible' },
    { name: 'Security', icon: Shield, description: 'OWASP, ISO 27001, SOC 2, GDPR' },
    { name: 'Mobile Development', icon: Smartphone, description: 'React Native, Flutter, Swift, Kotlin' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions & Support</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management. Enterprise-grade solutions from Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, database management, IT consulting, Zion Tech Group" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and mobile development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, and mobile development." />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          IT{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Comprehensive IT solutions to modernize your infrastructure, enhance security, 
          and accelerate your digital transformation journey.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20">
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <div className="text-cyan-400 font-semibold text-lg mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm">Duration: {service.duration}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Additional Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Explore our full range of IT solutions and specialized services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center"
              >
                <service.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
              </Link>
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
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">{tech.description}</p>
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
                Let's discuss how our IT services can help modernize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}