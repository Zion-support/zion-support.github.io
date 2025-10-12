'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Code,
  Database,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero-downtime deployment',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Data security & encryption', 'Performance optimization', '24/7 support', 'Cost optimization', 'Disaster recovery'],
      icon: Cloud,
      path: '/cloud-migration',
      category: 'Cloud Computing',
      rating: 4.9,
      reviews: 156,
      duration: '2-4 weeks'
    },
    {
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and monitoring',
      price: 'Starting at $3,500',
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training', 'Security integration', 'Performance tuning'],
      icon: Code,
      path: '/devops-solutions',
      category: 'DevOps',
      rating: 4.8,
      reviews: 134,
      duration: '3-6 weeks'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, penetration testing, and compliance certification',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Security training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '1-3 weeks'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks',
      price: 'Starting at $8,000',
      features: ['iOS & Android native', 'Cross-platform development', 'App store optimization', 'Maintenance support', 'Push notifications', 'Analytics integration'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Mobile Development',
      rating: 4.7,
      reviews: 98,
      duration: '6-12 weeks'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and rate limiting',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL APIs', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Authentication', 'Versioning support'],
      icon: Database,
      path: '/api-development',
      category: 'Backend Development',
      rating: 4.8,
      reviews: 112,
      duration: '2-5 weeks'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, maintenance, and migration services for all major databases',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Query optimization', 'Monitoring setup'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 87,
      duration: '1-2 weeks'
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies and frameworks',
      price: 'Starting at $6,000',
      features: ['Responsive design', 'Modern frameworks', 'SEO optimization', 'Performance tuning', 'Security implementation', 'Content management'],
      icon: Globe,
      path: '/web-development',
      category: 'Web Development',
      rating: 4.8,
      reviews: 145,
      duration: '4-8 weeks'
    },
    {
      name: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for unified workflows',
      price: 'Starting at $7,500',
      features: ['System integration', 'Data synchronization', 'Workflow automation', 'API connections', 'Error handling', 'Monitoring setup'],
      icon: Cpu,
      path: '/system-integration',
      category: 'Integration',
      rating: 4.7,
      reviews: 76,
      duration: '3-8 weeks'
    },
    {
      name: 'IT Consulting',
      description: 'Strategic IT consulting to optimize technology infrastructure and digital transformation',
      price: 'Starting at $200/hour',
      features: ['Technology assessment', 'Strategic planning', 'Digital transformation', 'Cost optimization', 'Risk analysis', 'Implementation guidance'],
      icon: Users,
      path: '/it-consulting',
      category: 'Consulting',
      rating: 4.9,
      reviews: 203,
      duration: 'Ongoing'
    }
  ];

  const categories = [
    { name: 'All Services', count: itServices.length, active: true },
    { name: 'Cloud Computing', count: itServices.filter(s => s.category === 'Cloud Computing').length, active: false },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length, active: false },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length, active: false },
    { name: 'Mobile Development', count: itServices.filter(s => s.category === 'Mobile Development').length, active: false },
    { name: 'Backend Development', count: itServices.filter(s => s.category === 'Backend Development').length, active: false },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length, active: false },
    { name: 'Web Development', count: itServices.filter(s => s.category === 'Web Development').length, active: false },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length, active: false },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length, active: false }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and comprehensive threat protection'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business and handles increasing demands'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions'
    },
    {
      icon: Lock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, maintenance, and support for your IT infrastructure'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design the optimal solution architecture for your specific needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business operations'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization to ensure peak efficiency'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud migration, DevOps, cybersecurity, mobile development, API development, and database management. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, DevOps, cybersecurity, mobile development, API development, database management, web development, system integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate digital transformation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver exceptional performance, security, and scalability for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful project delivery and maximum value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our IT experts today to discuss your requirements and discover how our solutions can drive your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}