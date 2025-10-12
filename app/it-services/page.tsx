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
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Globe,
  Zap,
  Target,
  Clock,
  DollarSign,
  Sparkles,
  Settings,
  Server,
  Wifi,
  Cpu
} from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime and enhanced security.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      price: 'Starting at $5,000',
      marketPrice: '$8,000 - $15,000',
      features: [
        'Zero-downtime migration',
        'Data security & encryption',
        'Performance optimization',
        '24/7 support & monitoring',
        'Cost optimization',
        'Disaster recovery setup'
      ],
      benefits: ['50% cost reduction', '99.9% uptime', 'Scalable infrastructure'],
      path: '/cloud-migration'
    },
    {
      title: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure automation, and monitoring.',
      icon: <Code className="w-8 h-8 text-green-400" />,
      price: 'Starting at $3,500',
      marketPrice: '$5,000 - $12,000',
      features: [
        'Automated deployment pipelines',
        'Infrastructure as code',
        'Monitoring & alerting setup',
        'Team training & documentation',
        'Security integration',
        'Performance optimization'
      ],
      benefits: ['80% faster deployments', 'Reduced errors', 'Automated scaling'],
      path: '/devops-solutions'
    },
    {
      title: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring to protect your business.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      price: 'Starting at $2,500',
      marketPrice: '$4,000 - $8,000',
      features: [
        'Security audit & assessment',
        'Penetration testing',
        'Compliance certification',
        'Ongoing monitoring',
        'Incident response planning',
        'Security training'
      ],
      benefits: ['100% compliance', '24/7 monitoring', 'Rapid incident response'],
      path: '/cybersecurity'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design and app store optimization.',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      price: 'Starting at $8,000',
      marketPrice: '$12,000 - $25,000',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'App store optimization',
        'Maintenance & support',
        'Push notifications',
        'Analytics integration'
      ],
      benefits: ['Faster time to market', 'Cross-platform compatibility', 'App store optimization'],
      path: '/mobile-development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation, analytics, and security features.',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      price: 'Starting at $4,000',
      marketPrice: '$6,000 - $12,000',
      features: [
        'REST & GraphQL APIs',
        'Comprehensive documentation',
        'Rate limiting & security',
        'Analytics dashboard',
        'Version control',
        'Testing & validation'
      ],
      benefits: ['Scalable architecture', 'Comprehensive documentation', 'Real-time analytics'],
      path: '/api-development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, maintenance, and migration services with backup strategies.',
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      price: 'Starting at $1,500',
      marketPrice: '$2,500 - $5,000',
      features: [
        'Performance tuning',
        'Backup strategies',
        'Security hardening',
        'Migration support',
        'Monitoring & alerts',
        'Disaster recovery'
      ],
      benefits: ['50% performance improvement', 'Zero data loss', 'Automated backups'],
      path: '/database-management'
    }
  ];

  const additionalServices = [
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> },
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'IT Consulting', path: '/it-consulting', icon: <Users className="w-4 h-4" /> },
    { name: 'Blockchain Solutions', path: '/blockchain', icon: <Shield className="w-4 h-4" /> },
    { name: 'IoT Development', path: '/iot', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Quantum Computing', path: '/quantum-computing', icon: <Cpu className="w-4 h-4" /> }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The cloud migration was seamless and we\'ve seen 50% cost savings.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      role: 'VP Engineering',
      content: 'Their DevOps solutions have revolutionized our deployment process. We now deploy 10x faster with zero errors.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      role: 'Security Director',
      content: 'The cybersecurity services gave us complete peace of mind. Our security posture has never been stronger.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, mobile development, database management, IT consulting" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Comprehensive Technology Solutions" />
        <meta property="og:description" content="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-it-services.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Comprehensive Technology Solutions" />
        <meta name="twitter:description" content="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and database management." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-it-services.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive IT infrastructure services to accelerate your digital transformation. 
                From cloud migration to cybersecurity, we provide end-to-end technology solutions.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Professional technology solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-400 flex items-center">
                          <Sparkles className="w-3 h-3 text-yellow-400 mr-1" />
                          {benefit}
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
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our full range of technology solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 border border-white/20 group"
                >
                  <div className="flex justify-center mb-2">
                    {service.icon}
                  </div>
                  <span className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Trusted by businesses worldwide for their IT transformation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
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
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-cyan-500/30">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can accelerate your digital transformation and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn More About Us
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>📞 Call us: <a href="tel:+13024640950" className="underline hover:text-white">+1 302 464 0950</a></p>
                  <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}