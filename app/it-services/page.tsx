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
  Server,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Cpu,
  Users,
  Settings
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      features: ['Zero-downtime migration', 'Data security', 'Performance optimization', '24/7 support'],
      price: 'Starting at $5,000',
      link: '/cloud-migration'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment and implementation to protect your business.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring'],
      price: 'Starting at $2,500',
      link: '/cybersecurity'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone className="w-8 h-8 text-green-400" />,
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Maintenance support'],
      price: 'Starting at $8,000',
      link: '/mobile-development'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Security hardening'],
      price: 'Starting at $3,500',
      link: '/web-development'
    },
    {
      title: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and automation.',
      icon: <Server className="w-8 h-8 text-orange-400" />,
      features: ['Automated deployment', 'Infrastructure as code', 'Monitoring setup', 'Team training'],
      price: 'Starting at $3,500',
      link: '/devops'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization'],
      price: 'Starting at $2,000',
      link: '/data-analytics'
    }
  ];

  const additionalServices = [
    { name: 'API Development', link: '/api-development' },
    { name: 'Database Management', link: '/database-management' },
    { name: 'IT Consulting', link: '/it-consulting' },
    { name: 'System Integration', link: '/system-integration' },
    { name: 'Cloud Architecture', link: '/cloud-architecture' },
    { name: 'Security Audits', link: '/security-audits' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Users className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, mobile development, web development, DevOps, and data analytics. Transform your business with our expertise." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, web development, DevOps, data analytics, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                IT Services &{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions to accelerate your digital transformation and drive business growth.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-cyan-400">{service.price}</span>
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30 rounded-2xl">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Additional Services
                  </h2>
                  <p className="text-gray-300">
                    Explore our full range of technology solutions
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {additionalServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-4 text-center transition-colors border border-slate-700 hover:border-cyan-500/30"
                    >
                      <span className="text-white text-sm font-medium">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your IT Infrastructure?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Let's discuss how our IT services can accelerate your digital transformation
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
