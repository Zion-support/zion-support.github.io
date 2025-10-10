'use client';
import React, { lazy, Suspense } from 'react';
import { CheckCircle, Server, Shield, Zap, Settings, Phone, ArrowRight, Database, Cloud, Cpu, Users, Clock, DollarSign } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const ITInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration and maintenance services',
      features: [
        '24/7 server monitoring',
        'Performance optimization',
        'Security hardening',
        'Backup and disaster recovery',
        'Patch management'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design and manage scalable cloud solutions',
      features: [
        'Multi-cloud architecture',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security compliance',
        'Migration services'
      ]
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database management and optimization',
      features: [
        'Performance tuning',
        'Backup and recovery',
        'Security management',
        'Query optimization',
        'Capacity planning'
      ]
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network protection and monitoring',
      features: [
        'Firewall configuration',
        'Intrusion detection',
        'VPN setup and management',
        'Security auditing',
        'Threat monitoring'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance system performance and efficiency',
      features: [
        'System analysis',
        'Resource optimization',
        'Load balancing',
        'Caching strategies',
        'Performance monitoring'
      ]
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of IT systems and applications',
      features: [
        'API development',
        'Data synchronization',
        'Legacy system integration',
        'Third-party integrations',
        'Custom solutions'
      ]
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: CheckCircle },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Infrastructure Projects', icon: Server },
    { number: '30%', label: 'Average Cost Savings', icon: DollarSign }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Minimize business disruption with proactive monitoring and maintenance',
      icon: CheckCircle
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your infrastructure with enterprise-grade security measures',
      icon: Shield
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your infrastructure as your business expands',
      icon: Zap
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce IT costs through efficient resource utilization',
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build and manage robust, scalable IT infrastructure that supports your business growth. Our expert team ensures your systems are secure, efficient, and always available.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Infrastructure Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Infrastructure Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Infrastructure Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Assessment</h3>
                <p className="text-gray-300 text-sm">
                  We analyze your current infrastructure, identify gaps, and assess your business requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Design</h3>
                <p className="text-gray-300 text-sm">
                  We create a comprehensive infrastructure design that meets your current and future needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300 text-sm">
                  We deploy your infrastructure with minimal disruption to your business operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Management</h3>
                <p className="text-gray-300 text-sm">
                  We provide ongoing monitoring, maintenance, and optimization of your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help design and manage a robust IT infrastructure that supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Infrastructure Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert Team Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ITInfrastructurePage;