import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure setup, monitoring, and maintenance for your business.',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Cloud migration services',
        '24/7 monitoring and support',
        'Backup and disaster recovery',
        'Security implementation'
      ],
      pricing: 'Starting at $999/month',
      category: 'Infrastructure'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats.',
      features: [
        'Security assessment and audit',
        'Firewall configuration',
        'Antivirus and malware protection',
        'Security training for staff',
        'Incident response planning',
        'Compliance management'
      ],
      pricing: 'Starting at $1,499/month',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Services',
      description: 'Cloud migration, setup, and management services for modern businesses.',
      features: [
        'Cloud strategy consultation',
        'Migration planning and execution',
        'Multi-cloud management',
        'Cost optimization',
        'Security and compliance',
        '24/7 cloud monitoring'
      ],
      pricing: 'Starting at $799/month',
      category: 'Cloud'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-400" />,
      title: 'Database Management',
      description: 'Professional database administration and optimization services.',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        'Monitoring and maintenance'
      ],
      pricing: 'Starting at $599/month',
      category: 'Database'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-400" />,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services for your team and end users.',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Hardware and software support',
        'User training and onboarding',
        'Issue tracking and resolution',
        'Proactive maintenance'
      ],
      pricing: 'Starting at $299/month',
      category: 'Support'
    },
    {
      icon: <Settings className="w-12 h-12 text-red-400" />,
      title: 'System Administration',
      description: 'Professional system administration services for all your IT needs.',
      features: [
        'User account management',
        'System updates and patches',
        'Performance monitoring',
        'Log management and analysis',
        'Automation and scripting',
        'Documentation and reporting'
      ],
      pricing: 'Starting at $699/month',
      category: 'Administration'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Certified Experts',
      description: 'Our team holds industry certifications and stays updated with latest technologies.'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems are always running smoothly.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Proactive Monitoring',
      description: 'We monitor your systems proactively to prevent issues before they occur.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security First',
      description: 'Security is our top priority in all our IT solutions and services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            IT Services & Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT solutions to keep your business running smoothly. From infrastructure management to cybersecurity, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="#services"
              className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400 mb-3">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure that supports your business growth.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
