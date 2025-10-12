'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Server,
  Wifi,
  Users,
  Globe,
  Lock,
  Cpu,
  Zap
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support'],
      icon: Cloud,
      path: '/cloud-migration',
      popular: true
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      icon: Code,
      path: '/devops-solutions'
    },
    {
      name: 'Cybersecurity Services',
<<<<<<< HEAD
      description: 'Comprehensive security assessment and implementation',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring'],
      icon: Shield,
      path: '/cybersecurity'
=======
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring for your business',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Staff training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '2-3 weeks'
>>>>>>> cursor/analyze-improve-and-deploy-application-e212
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $8,000',
<<<<<<< HEAD
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Maintenance support'],
=======
      features: ['iOS & Android development', 'Cross-platform solutions', 'App store optimization', 'Maintenance support', 'UI/UX design', 'Backend integration'],
>>>>>>> cursor/analyze-improve-and-deploy-application-e212
      icon: Smartphone,
      path: '/mobile-development'
    },
    {
      name: 'API Development',
<<<<<<< HEAD
      description: 'RESTful and GraphQL APIs with comprehensive documentation',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL', 'API documentation', 'Rate limiting', 'Analytics dashboard'],
      icon: Database,
      path: '/api-development'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and maintenance services',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support'],
      icon: Database,
      path: '/database-management'
    }
  ];

  const additionalServices = [
    { name: 'Web Development', path: '/web-development', icon: Globe },
    { name: 'Data Analytics', path: '/data-analytics', icon: BarChart3 },
    { name: 'IT Consulting', path: '/it-consulting', icon: Users },
    { name: 'System Integration', path: '/system-integration', icon: Server },
    { name: 'Network Security', path: '/network-security', icon: Lock },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: Cloud }
  ];

=======
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
      description: 'Database design, optimization, and maintenance services for optimal performance',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Monitoring setup', 'Query optimization'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 87,
      duration: '1-3 weeks'
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-e212
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
<<<<<<< HEAD
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
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              IT Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive IT solutions. From cloud migration 
            to cybersecurity, we deliver enterprise-grade technology services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core IT Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core IT Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional IT solutions designed to enhance your business operations and security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 hover:bg-slate-700/50 group relative ${
                service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our full range of IT solutions and specialized services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{service.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Technologies We Master</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with the latest technologies and industry-standard tools to deliver robust solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions and emerging technologies.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security measures and compliance with industry standards to protect your business.</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-600 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly at all times.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can enhance your business operations, security, and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
=======
    { number: '24/7', label: 'Support Available', icon: Phone }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Their cloud infrastructure is rock-solid. We\'ve had zero downtime since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management. Transform your business with our expert IT solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, database management, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Professional IT Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {itServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400 mr-3" />
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="flex items-center">
                        <div className="flex items-center mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">({service.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">Duration: {service.duration}</div>
                    <Link
                      to={service.path}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
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
                  Let's discuss how our IT services can accelerate your digital transformation and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/analyze-improve-and-deploy-application-e212
  );
}