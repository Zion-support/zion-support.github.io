import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Server, Database, Network, Monitor, Code, Settings, Activity, Award, DollarSign, Rocket } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'IT Infrastructure Management',
      description: 'Comprehensive IT infrastructure design, implementation, and management for enterprise organizations.',
      icon: '🏗️',
      price: '$2,000/month',
      features: [
        'Server Management & Monitoring',
        'Network Design & Implementation',
        'Storage Solutions',
        'Backup & Disaster Recovery',
        'Performance Optimization',
        '24/7 Technical Support'
      ],
      benefits: [
        'Achieve 99.9% uptime',
        'Reduce IT costs by 30%',
        'Improve system performance by 50%',
        'Ensure business continuity'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Docker', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud migration services with ongoing management and optimization for maximum efficiency.',
      icon: '☁️',
      price: '$1,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Migration Execution',
        'Cost Optimization',
        'Security Implementation',
        'Performance Monitoring',
        'Ongoing Management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security posture',
        'Enable remote work capabilities'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Ansible', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, and compliance management.',
      icon: '🔒',
      price: '$2,500/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance Management',
        'Security Training',
        '24/7 Security Monitoring'
      ],
      benefits: [
        'Protect against cyber threats',
        'Ensure regulatory compliance',
        'Reduce security risks by 80%',
        'Maintain customer trust'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewalls', 'VPN', 'Identity Management', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Complete DevOps implementation with continuous integration, deployment, and infrastructure automation.',
      icon: '⚙️',
      price: '$1,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging',
        'Performance Optimization'
      ],
      benefits: [
        'Accelerate deployment by 70%',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Enable faster time to market'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and management services for all major database platforms.',
      icon: '🗄️',
      price: '$1,200/month',
      features: [
        'Database Design & Optimization',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Maintenance',
        'Migration Services'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Ensure data integrity and security',
        'Reduce downtime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Database',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management including LAN, WAN, and wireless solutions.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'Network Design & Planning',
        'Router & Switch Configuration',
        'Wireless Network Setup',
        'VPN Implementation',
        'Network Security',
        'Performance Monitoring'
      ],
      benefits: [
        'Improve network performance by 50%',
        'Enhance security and reliability',
        'Support remote work capabilities',
        'Reduce network downtime'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki', 'SD-WAN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and on-site support.',
      icon: '🎧',
      price: '$600/month',
      features: [
        '24/7 Helpdesk Support',
        'Remote Desktop Assistance',
        'Hardware & Software Support',
        'User Training & Onboarding',
        'Incident Management',
        'Knowledge Base Management'
      ],
      benefits: [
        'Reduce IT support tickets by 40%',
        'Improve user satisfaction',
        'Faster issue resolution',
        'Proactive problem prevention'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Support',
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'Ticketing Systems', 'Knowledge Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection services with automated backups, disaster recovery, and business continuity planning.',
      icon: '💾',
      price: '$800/month',
      features: [
        'Automated Backup Solutions',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Management',
        'Cloud Backup Integration'
      ],
      benefits: [
        'Protect critical business data',
        'Minimize data loss risks',
        'Ensure quick recovery times',
        'Maintain business continuity'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services including technology assessment, roadmap development, and digital transformation planning.',
      icon: '📊',
      price: '$1,000/month',
      features: [
        'Technology Assessment',
        'IT Strategy Development',
        'Digital Transformation Planning',
        'Vendor Evaluation',
        'Cost Optimization',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Plan for future growth',
        'Reduce technology risks'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Consulting',
      technologies: ['ITIL', 'COBIT', 'Agile', 'Lean', 'Digital Transformation', 'Cloud Strategy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Software Development',
      description: 'Custom software development services including web applications, mobile apps, and enterprise software solutions.',
      icon: '💻',
      price: '$3,000/month',
      features: [
        'Custom Application Development',
        'Web & Mobile Development',
        'API Development & Integration',
        'Database Design',
        'Quality Assurance Testing',
        'Maintenance & Support'
      ],
      benefits: [
        'Build custom solutions',
        'Improve business processes',
        'Enhance customer experience',
        'Gain competitive advantage'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Development',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'Mobile Development'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset management including inventory tracking, lifecycle management, and cost optimization.',
      icon: '📋',
      price: '$500/month',
      features: [
        'Asset Inventory & Tracking',
        'Lifecycle Management',
        'License Management',
        'Cost Optimization',
        'Compliance Reporting',
        'Asset Disposal'
      ],
      benefits: [
        'Optimize IT investments',
        'Ensure compliance',
        'Reduce costs by 25%',
        'Improve asset utilization'
      ],
      marketPrice: '$1,000-2,000/month',
      category: 'Asset Management',
      technologies: ['ServiceNow', 'Lansweeper', 'PDQ Inventory', 'Asset Management Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Security Auditing',
      description: 'Comprehensive security auditing services including vulnerability assessment, penetration testing, and compliance auditing.',
      icon: '🔍',
      price: '$2,000/month',
      features: [
        'Security Vulnerability Assessment',
        'Penetration Testing',
        'Compliance Auditing',
        'Risk Assessment',
        'Security Recommendations',
        'Remediation Planning'
      ],
      benefits: [
        'Identify security vulnerabilities',
        'Ensure regulatory compliance',
        'Improve security posture',
        'Reduce security risks'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Security Auditing',
      technologies: ['Nessus', 'OpenVAS', 'Burp Suite', 'OWASP ZAP', 'Compliance Tools'],
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
    { name: 'Networking', count: itServices.filter(s => s.category === 'Networking').length },
    { name: 'Support', count: itServices.filter(s => s.category === 'Support').length },
    { name: 'Backup', count: itServices.filter(s => s.category === 'Backup').length },
    { name: 'Consulting', count: itServices.filter(s => s.category === 'Consulting').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
    { name: 'Security Auditing', count: itServices.filter(s => s.category === 'Security Auditing').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and DevOps. Enterprise-grade IT solutions starting at $600/month." />
        <meta name="keywords" content="it services, infrastructure management, cloud migration, cybersecurity, devops, it support, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
            Comprehensive IT Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From infrastructure management to cybersecurity, we provide enterprise-grade IT services that keep your business running smoothly and securely.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">24/7 Support</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Round-the-clock technical support and monitoring for uninterrupted operations</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Cost Effective</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Reduce IT costs by up to 40% while improving performance and reliability</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
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

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your IT Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 text-center mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 text-center">Market Price: {service.marketPrice}</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white mb-8">
            Get a free consultation and discover how our IT services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
