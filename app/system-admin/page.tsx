import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Settings, Database, Network, Cloud, Server } from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration including setup, monitoring, and maintenance.',
      features: ['Windows/Linux servers', 'Performance optimization', 'Security hardening', 'Backup management'],
      price: '$199/month'
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database management and optimization for all major database systems.',
      features: ['SQL Server, MySQL, PostgreSQL', 'Performance tuning', 'Backup & recovery', 'Security management'],
      price: '$249/month'
    },
    {
      icon: Network,
      title: 'Network Administration',
      description: 'Complete network infrastructure management and optimization.',
      features: ['Network monitoring', 'Security configuration', 'VPN management', 'Bandwidth optimization'],
      price: '$179/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Administration',
      description: 'Multi-cloud platform management and optimization.',
      features: ['AWS, Azure, GCP', 'Cost optimization', 'Security compliance', 'Auto-scaling'],
      price: '$299/month'
    },
    {
      icon: Shield,
      title: 'Security Administration',
      description: 'Comprehensive security management and compliance monitoring.',
      features: ['Firewall management', 'Access control', 'Security monitoring', 'Compliance reporting'],
      price: '$229/month'
    },
    {
      icon: Settings,
      title: 'System Monitoring',
      description: '24/7 system monitoring and proactive issue resolution.',
      features: ['Real-time monitoring', 'Alert management', 'Performance tracking', 'Incident response'],
      price: '$149/month'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Round-the-clock system monitoring and immediate response to issues'
    },
    {
      icon: Shield,
      title: 'Proactive Security',
      description: 'Continuous security monitoring and threat prevention'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Ongoing optimization to ensure peak system performance'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified administrators with years of experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Administration - Zion Tech Group</title>
        <meta name="description" content="Professional system administration services including server management, database administration, network management, and 24/7 monitoring. Starting at $149/month." />
        <meta name="keywords" content="system administration, server management, database administration, network administration, cloud administration, system monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            System Administration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional system administration services to keep your infrastructure running smoothly and securely.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$149</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=System Administration Inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Administration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${service.title} Service`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Administration?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Systems?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get professional system administration services and keep your infrastructure running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemAdminPage;