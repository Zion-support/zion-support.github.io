import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, Shield, Code, Smartphone, Database, 
  ArrowRight, Star, CheckCircle, Clock, DollarSign,
  Users, Globe, Settings, Target, BarChart3,
  Wifi, Server, Lock, Zap, TrendingUp, 
  FileText, Mail, Smartphone as Phone
} from 'lucide-react';

const ITServicesPage = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for enterprise environments.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AWS, Azure, GCP migration',
        'Auto-scaling & load balancing',
        'Disaster recovery planning',
        'Cost optimization strategies',
        'Security hardening',
        '24/7 monitoring & support'
      ],
      pricing: { starting: 249, enterprise: 'Custom' },
      rating: 4.9,
      clients: '500+',
      link: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security suite protecting your digital assets with advanced threat detection, incident response, and compliance management.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      features: [
        'Penetration testing',
        'Vulnerability assessments',
        'Security awareness training',
        'Incident response planning',
        'Compliance auditing (GDPR, HIPAA)',
        'Managed security services'
      ],
      pricing: { starting: 399, enterprise: 'Custom' },
      rating: 4.8,
      clients: '300+',
      link: '/cybersecurity-solutions'
    },
    {
      title: 'Web Development & Design',
      description: 'Custom web applications and websites built with modern technologies. Responsive design, SEO optimization, and performance optimization.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Custom web applications',
        'E-commerce solutions',
        'CMS development',
        'API development',
        'Performance optimization',
        'SEO & accessibility'
      ],
      pricing: { starting: 299, enterprise: 'Custom' },
      rating: 4.9,
      clients: '800+',
      link: '/web-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. From concept to deployment with ongoing support and maintenance.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: { starting: 199, enterprise: 'Custom' },
      rating: 4.7,
      clients: '400+',
      link: '/mobile-development'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, and management services. Performance tuning, backup strategies, and data migration solutions.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Backup & recovery strategies',
        'Data migration services',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      pricing: { starting: 179, enterprise: 'Custom' },
      rating: 4.8,
      clients: '350+',
      link: '/database-management'
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions. From small office networks to enterprise-wide infrastructure.',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'Network design & implementation',
        'Firewall configuration',
        'VPN setup & management',
        'Wireless network solutions',
        'Network monitoring',
        'Security assessments'
      ],
      pricing: { starting: 149, enterprise: 'Custom' },
      rating: 4.6,
      clients: '250+',
      link: '/network-infrastructure'
    },
    {
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business needs. From enterprise applications to specialized tools and integrations.',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Custom application development',
        'Legacy system modernization',
        'API development & integration',
        'Workflow automation',
        'Third-party integrations',
        'Maintenance & support'
      ],
      pricing: { starting: 199, enterprise: 'Custom' },
      rating: 4.9,
      clients: '600+',
      link: '/custom-development'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Data visualization dashboards',
        'Predictive analytics',
        'ETL processes',
        'Report automation',
        'Data warehousing',
        'Machine learning integration'
      ],
      pricing: { starting: 229, enterprise: 'Custom' },
      rating: 4.8,
      clients: '450+',
      link: '/data-analytics'
    }
  ];

  const serviceCategories = [
    {
      name: 'Infrastructure Services',
      icon: <Server className="w-6 h-6" />,
      services: ['Cloud Migration', 'Server Management', 'Network Design', 'Backup Solutions'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Services',
      icon: <Lock className="w-6 h-6" />,
      services: ['Penetration Testing', 'Security Audits', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Development Services',
      icon: <Code className="w-6 h-6" />,
      services: ['Web Development', 'Mobile Apps', 'Custom Software', 'API Development'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Support Services',
      icon: <Users className="w-6 h-6" />,
      services: ['24/7 Support', 'Help Desk', 'Training', 'Consulting'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'TechStart Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their cloud migration service was seamless and saved us 40% on operational costs.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Robert Kim',
      company: 'E-commerce Plus',
      role: 'IT Director',
      content: 'The cybersecurity solutions provided by Zion Tech Group are top-notch. We feel confident knowing our systems are protected 24/7.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Lisa Thompson',
      company: 'Healthcare Innovations',
      role: 'Operations Manager',
      content: 'Their custom software development team delivered exactly what we needed. The solution has improved our efficiency by 60%.',
      rating: 5,
      avatar: 'LT'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software solutions. 99.9% uptime SLA." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure, custom software, data analytics" />
        <meta property="og:title" content="IT Services - Zion Tech Group | Technology Solutions" />
        <meta property="og:description" content="Comprehensive IT services to transform your business. From cloud infrastructure to cybersecurity, we have the expertise you need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Server className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">#1 IT Services Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IT Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 animate-pulse">
                {" "}That Scale
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to transform your business operations. 
              From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">1,200+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-300 text-sm">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services organized by category to meet all your technology needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {category.name}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-300 text-sm">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services designed to accelerate your business growth and digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{service.clients} clients</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-green-400 font-semibold mb-2">
                      From ${service.pricing.starting}/month
                    </div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-green-400 text-sm font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-center block group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about working with Zion Tech Group's IT services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses already using our IT services to drive growth and innovation. 
              Start your digital transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;