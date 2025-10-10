'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, BarChart, Target, TrendingUp, Heart, Home, Package, Calendar, BookOpen, Lock, Sun, PawPrint, FileText, Leaf, Clock, Utensils, MapPin, Activity, Sprout, Timer, Cpu, Rocket } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Services & Migration',
      description: 'Comprehensive cloud solutions including migration, infrastructure management, and optimization.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Complete cybersecurity solutions with threat detection, vulnerability assessment, and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Compliance Management', '24/7 Monitoring'],
      price: 'Starting at $799/month',
      category: 'Security',
      popular: true
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring solutions.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'DevOps',
      popular: false
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile',
      popular: true
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web',
      popular: false
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: false
    },
    {
      icon: Users,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'Managed Services',
      popular: true
    },
    {
      icon: BarChart,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: false
    },
    {
      icon: Target,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: Lock,
      title: 'Network Security',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'VPN Solutions', 'Network Monitoring'],
      price: 'Starting at $599/month',
      category: 'Security',
      popular: false
    },
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
      price: 'Starting at $199/month',
      category: 'Backup',
      popular: false
    },
    {
      icon: Settings,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Tracking', 'Maintenance Scheduling', 'Cost Optimization', 'License Management', 'Depreciation Tracking'],
      price: 'Starting at $149/month',
      category: 'Asset Management',
      popular: false
    },
    {
      icon: Globe,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      features: ['99.9% Uptime', 'SSL Certificates', 'CDN Integration', 'Regular Updates', 'Performance Monitoring'],
      price: 'Starting at $49/month',
      category: 'Hosting',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection'],
      price: 'Starting at $99/month',
      category: 'Mobile',
      popular: false
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Compliance',
      popular: false
    },
    {
      icon: BarChart,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $299/month',
      category: 'Monitoring',
      popular: false
    },
    {
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification'],
      price: 'Starting at $199/month',
      category: 'Training',
      popular: false
    },
    {
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $399/month',
      category: 'Project Management',
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure and drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 group relative ${
                    service.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-cyan-500/20 hover:border-cyan-400/40'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors" />
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;
