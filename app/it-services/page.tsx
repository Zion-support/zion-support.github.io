'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Smartphone, Code, BarChart, Wrench, Lock, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud migration with zero downtime and data integrity',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      color: 'text-blue-400',
      category: 'Cloud Computing',
      link: '/cloud-migration'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions with threat detection and prevention',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      color: 'text-red-400',
      category: 'Security',
      link: '/cybersecurity'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      color: 'text-green-400',
      category: 'Development',
      link: '/devops'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      color: 'text-purple-400',
      category: 'Data Management',
      link: '/database'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting for digital transformation and optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization'],
      color: 'text-yellow-400',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Change Management', 'Vendor Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Comprehensive cloud security solutions with compliance management and threat protection.',
      icon: '🔒',
      price: '$2,200/month',
      features: [
        'Cloud Security Assessment',
        'Compliance Management',
        'Threat Protection',
        'Identity & Access Management',
        'Data Encryption',
        'Security Monitoring'
      ],
      benefits: [
        'Ensure cloud security compliance',
        'Protect sensitive data',
        'Reduce security risks by 90%',
        'Meet regulatory requirements'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'Google Cloud Security', 'SIEM', 'IAM', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Disaster Recovery Planning',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      icon: '🚨',
      price: '$1,800/month',
      features: [
        'Disaster Recovery Planning',
        'Business Continuity Planning',
        'Backup Strategy Design',
        'Recovery Testing',
        'Documentation',
        'Training & Support'
      ],
      benefits: [
        'Minimize downtime during disasters',
        'Ensure business continuity',
        'Reduce recovery time by 80%',
        'Protect critical business data'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Disaster Recovery',
      technologies: ['Veeam', 'Commvault', 'AWS DR', 'Azure Site Recovery', 'VMware SRM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Performance Monitoring',
      description: 'Advanced IT performance monitoring with real-time analytics and proactive issue resolution.',
      icon: '📊',
      price: '$1,100/month',
      features: [
        'Real-time Monitoring',
        'Performance Analytics',
        'Alert Management',
        'Capacity Planning',
        'Trend Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Prevent system failures',
        'Optimize performance by 40%',
        'Reduce downtime by 70%',
        'Enable proactive management'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Performance Monitoring',
      technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'New Relic', 'Datadog'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management with ticketing, change management, and service catalog.',
      icon: '🎫',
      price: '$1,300/month',
      features: [
        'Service Desk Management',
        'Incident Management',
        'Change Management',
        'Service Catalog',
        'Knowledge Management',
        'SLA Management'
      ],
      benefits: [
        'Improve service delivery',
        'Reduce resolution time by 50%',
        'Enhance user satisfaction',
        'Streamline IT operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Service Management',
      technologies: ['ServiceNow', 'Jira Service Management', 'Freshservice', 'ManageEngine', 'Cherwell'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Vendor Management',
      description: 'Strategic vendor management with contract optimization, performance monitoring, and cost control.',
      icon: '🤝',
      price: '$1,000/month',
      features: [
        'Vendor Assessment',
        'Contract Management',
        'Performance Monitoring',
        'Cost Optimization',
        'Risk Management',
        'Relationship Management'
      ],
      benefits: [
        'Reduce vendor costs by 25%',
        'Improve vendor performance',
        'Minimize vendor risks',
        'Optimize vendor relationships'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Vendor Management',
      technologies: ['Vendor Management Tools', 'Contract Management', 'Performance Analytics', 'Risk Assessment'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs with certification preparation and skill development.',
      icon: '🎓',
      price: '$800/month',
      features: [
        'Technical Training',
        'Certification Preparation',
        'Skill Assessment',
        'Custom Training Programs',
        'Online Learning Platform',
        'Progress Tracking'
      ],
      benefits: [
        'Improve team skills',
        'Increase certification rates',
        'Reduce training costs by 40%',
        'Enhance productivity'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Training',
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Platforms', 'Assessment Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Cost Optimization',
      description: 'Strategic IT cost optimization with license management, resource optimization, and budget planning.',
      icon: '💰',
      price: '$1,200/month',
      features: [
        'License Management',
        'Resource Optimization',
        'Budget Planning',
        'Cost Analysis',
        'ROI Tracking',
        'Cost Reduction Strategies'
      ],
      benefits: [
        'Reduce IT costs by 35%',
        'Optimize resource utilization',
        'Improve budget planning',
        'Maximize ROI'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Cost Optimization',
      technologies: ['Cost Management Tools', 'License Management', 'Resource Monitoring', 'Budget Planning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Governance & Risk Management',
      description: 'Comprehensive IT governance with risk management, policy development, and compliance monitoring.',
      icon: '⚖️',
      price: '$1,600/month',
      features: [
        'IT Governance Framework',
        'Risk Assessment',
        'Policy Development',
        'Compliance Monitoring',
        'Audit Management',
        'Risk Mitigation'
      ],
      benefits: [
        'Ensure IT compliance',
        'Minimize IT risks',
        'Improve governance',
        'Streamline audit processes'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Governance',
      technologies: ['GRC Platforms', 'Risk Management Tools', 'Compliance Software', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Innovation & Emerging Technologies',
      description: 'Strategic guidance on emerging technologies and innovation initiatives to drive competitive advantage.',
      icon: '🚀',
      price: '$1,400/month',
      features: [
        'Technology Assessment',
        'Innovation Strategy',
        'Pilot Program Management',
        'Technology Evaluation',
        'ROI Analysis',
        'Implementation Planning'
      ],
      benefits: [
        'Stay ahead of technology trends',
        'Drive innovation initiatives',
        'Reduce technology risks',
        'Maximize technology ROI'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Innovation',
      technologies: ['Emerging Technologies', 'Innovation Management', 'Technology Assessment', 'Pilot Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Integration & API Management',
      description: 'Comprehensive system integration with API management, data synchronization, and workflow automation.',
      icon: '🔗',
      price: '$1,500/month',
      features: [
        'System Integration',
        'API Management',
        'Data Synchronization',
        'Workflow Automation',
        'Middleware Solutions',
        'Integration Testing'
      ],
      benefits: [
        'Improve system connectivity',
        'Reduce integration complexity',
        'Enable data flow automation',
        'Enhance system efficiency'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Integration',
      technologies: ['API Gateways', 'Middleware', 'ESB', 'Integration Platforms', 'Data Synchronization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Capacity Planning & Scaling',
      description: 'Strategic capacity planning with performance optimization and scalable infrastructure design.',
      icon: '📈',
      price: '$1,300/month',
      features: [
        'Capacity Planning',
        'Performance Optimization',
        'Scalability Design',
        'Resource Forecasting',
        'Load Testing',
        'Growth Planning'
      ],
      benefits: [
        'Optimize resource utilization',
        'Plan for future growth',
        'Prevent performance bottlenecks',
        'Reduce infrastructure costs'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Capacity Planning',
      technologies: ['Capacity Planning Tools', 'Performance Monitoring', 'Load Testing', 'Scalability Solutions'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: itServices.length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'DevOps', count: itServices.filter(s => s.category === 'DevOps').length },
    { name: 'Database', count: itServices.filter(s => s.category === 'Database').length },
    { name: 'Network Security', count: itServices.filter(s => s.category === 'Network Security').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup & Recovery', count: itServices.filter(s => s.category === 'Backup & Recovery').length },
    { name: 'Mobile Management', count: itServices.filter(s => s.category === 'Mobile Management').length },
    { name: 'Compliance', count: itServices.filter(s => s.category === 'Compliance').length },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Cloud Security', count: itServices.filter(s => s.category === 'Cloud Security').length },
    { name: 'Disaster Recovery', count: itServices.filter(s => s.category === 'Disaster Recovery').length },
    { name: 'Performance Monitoring', count: itServices.filter(s => s.category === 'Performance Monitoring').length },
    { name: 'Service Management', count: itServices.filter(s => s.category === 'Service Management').length },
    { name: 'Vendor Management', count: itServices.filter(s => s.category === 'Vendor Management').length },
    { name: 'Training', count: itServices.filter(s => s.category === 'Training').length },
    { name: 'Cost Optimization', count: itServices.filter(s => s.category === 'Cost Optimization').length },
    { name: 'Governance', count: itServices.filter(s => s.category === 'Governance').length },
    { name: 'Innovation', count: itServices.filter(s => s.category === 'Innovation').length },
    { name: 'Integration', count: itServices.filter(s => s.category === 'Integration').length },
    { name: 'Capacity Planning', count: itServices.filter(s => s.category === 'Capacity Planning').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. 25+ enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Comprehensive IT solutions designed to modernize your infrastructure and optimize your business operations.
          </p>
        </section>

        {/* IT Services Grid */}
        <section className="mb-16" aria-labelledby="it-services-heading">
          <h2 id="it-services-heading" className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            End-to-end IT solutions for modern enterprises
          </p>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
=======
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`w-12 h-12 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{service.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg font-bold text-cyan-400 neon-text">{service.price}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud-First Approach</h3>
                <p className="text-gray-300">We design solutions with cloud scalability and flexibility in mind.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security is built into every solution we deliver.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support for all your IT infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss how our IT services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;