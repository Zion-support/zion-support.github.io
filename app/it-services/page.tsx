import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, DollarSign, Award, ArrowRight, Server, Database, Network, Cloud, Lock, Settings, Monitor, Smartphone, Laptop, HardDrive } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    // Cloud Services
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      price: '$2,500/month',
      features: [
        'Cloud migration planning & execution',
        'Infrastructure optimization',
        'Cost management & optimization',
        'Security configuration',
        'Backup & disaster recovery',
        '24/7 monitoring & support',
        'Auto-scaling implementation',
        'Performance tuning'
      ],
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 60%', '99.9% uptime guarantee', 'Enhanced security'],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Multi-Cloud Strategy & Implementation',
      description: 'Strategic multi-cloud architecture design and implementation for maximum flexibility and cost optimization.',
      icon: Globe,
      price: '$3,500/month',
      features: [
        'Multi-cloud architecture design',
        'Vendor management',
        'Cost optimization across platforms',
        'Security compliance',
        'Data synchronization',
        'Disaster recovery planning',
        'Performance monitoring',
        'Migration services'
      ],
      benefits: ['Avoid vendor lock-in', 'Optimize costs across providers', 'Improve reliability', 'Enhanced flexibility'],
      marketPrice: '$5,000-10,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'GCP', 'Terraform', 'Ansible', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Cybersecurity Services
    {
      title: 'Comprehensive Cybersecurity Suite',
      description: 'End-to-end cybersecurity solutions including threat detection, incident response, and compliance management.',
      icon: Shield,
      price: '$1,999/month',
      features: [
        '24/7 threat monitoring',
        'Vulnerability assessments',
        'Penetration testing',
        'Security awareness training',
        'Incident response planning',
        'Compliance management (SOC2, ISO27001)',
        'Firewall management',
        'Endpoint protection'
      ],
      benefits: ['Protect against 99.9% of threats', 'Reduce security incidents by 85%', 'Ensure compliance', 'Peace of mind'],
      marketPrice: '$3,000-6,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Security Operations Center',
      description: 'Advanced AI-driven security monitoring with automated threat detection and response capabilities.',
      icon: Brain,
      price: '$2,999/month',
      features: [
        'AI threat detection',
        'Automated incident response',
        'Behavioral analytics',
        'Threat intelligence integration',
        'Real-time monitoring',
        'Predictive security analytics',
        'Custom security rules',
        'Integration with existing tools'
      ],
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 70%', 'Automated response', 'Proactive protection'],
      marketPrice: '$4,500-9,000/month',
      category: 'Cybersecurity',
      technologies: ['Machine Learning', 'SIEM', 'SOAR', 'AI/ML', 'Python', 'Elastic Stack'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // DevOps & Automation
    {
      title: 'DevOps Transformation & Automation',
      description: 'Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployments.',
      icon: Settings,
      price: '$2,200/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Automated testing integration',
        'Deployment automation',
        'Monitoring & alerting',
        'Version control management',
        'Team training & best practices'
      ],
      benefits: ['Deploy 10x faster', 'Reduce deployment errors by 90%', 'Improve team productivity', 'Faster time to market'],
      marketPrice: '$3,500-7,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Site Reliability Engineering (SRE)',
      description: 'Implement SRE practices to improve system reliability, performance, and operational efficiency.',
      icon: Monitor,
      price: '$2,800/month',
      features: [
        'SRE methodology implementation',
        'Service level objective (SLO) definition',
        'Error budget management',
        'Incident response optimization',
        'Performance monitoring',
        'Capacity planning',
        'Chaos engineering',
        'Reliability metrics & reporting'
      ],
      benefits: ['Achieve 99.99% uptime', 'Reduce incident response time by 50%', 'Improve system reliability', 'Better capacity planning'],
      marketPrice: '$4,000-8,000/month',
      category: 'DevOps',
      technologies: ['Prometheus', 'Grafana', 'Kubernetes', 'Python', 'Go', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Database Services
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database administration, optimization, and migration services for all major database platforms.',
      icon: Database,
      price: '$1,500/month',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Backup & recovery strategies',
        'Security hardening',
        'Migration services',
        'Monitoring & maintenance',
        'Query optimization',
        'Index management'
      ],
      benefits: ['Improve query performance by 80%', 'Reduce downtime by 95%', 'Optimize storage costs', 'Enhanced security'],
      marketPrice: '$2,500-5,000/month',
      category: 'Database Services',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Big Data & Analytics Infrastructure',
      description: 'Design and implement scalable big data solutions for analytics, machine learning, and real-time processing.',
      icon: BarChart,
      price: '$3,200/month',
      features: [
        'Data lake architecture',
        'ETL/ELT pipeline design',
        'Real-time data processing',
        'Data warehousing',
        'Analytics platform setup',
        'Machine learning infrastructure',
        'Data governance',
        'Scalability planning'
      ],
      benefits: ['Process data 100x faster', 'Enable advanced analytics', 'Reduce data processing costs', 'Improve insights'],
      marketPrice: '$5,000-10,000/month',
      category: 'Database Services',
      technologies: ['Hadoop', 'Spark', 'Kafka', 'Elasticsearch', 'ClickHouse', 'Airflow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Network Services
    {
      title: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security services for enterprise-grade connectivity.',
      icon: Network,
      price: '$1,800/month',
      features: [
        'Network design & architecture',
        'VPN setup & management',
        'Firewall configuration',
        'Load balancing',
        'Network monitoring',
        'Bandwidth optimization',
        'Wireless network setup',
        'Network security audits'
      ],
      benefits: ['Improve network performance by 60%', 'Enhance security posture', 'Reduce network downtime', 'Optimize costs'],
      marketPrice: '$2,800-5,500/month',
      category: 'Network Services',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'SD-WAN', 'MPLS', 'BGP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'SD-WAN Implementation & Management',
      description: 'Modern SD-WAN solutions for improved connectivity, security, and cost optimization across multiple locations.',
      icon: Globe,
      price: '$2,200/month',
      features: [
        'SD-WAN design & deployment',
        'Multi-site connectivity',
        'Application prioritization',
        'Security integration',
        'Performance monitoring',
        'Cost optimization',
        'Failover management',
        'Centralized management'
      ],
      benefits: ['Reduce WAN costs by 50%', 'Improve application performance', 'Enhanced security', 'Simplified management'],
      marketPrice: '$3,500-7,000/month',
      category: 'Network Services',
      technologies: ['SD-WAN', 'MPLS', 'Internet', 'VPN', 'QoS', 'Security'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // System Administration
    {
      title: 'Windows & Linux System Administration',
      description: 'Comprehensive system administration services for Windows and Linux servers with proactive monitoring.',
      icon: Server,
      price: '$1,200/month',
      features: [
        'Server installation & configuration',
        'User & group management',
        'Security hardening',
        'Patch management',
        'Performance monitoring',
        'Backup & recovery',
        'System optimization',
        '24/7 support & maintenance'
      ],
      benefits: ['Reduce server downtime by 90%', 'Improve system performance', 'Enhanced security', 'Proactive maintenance'],
      marketPrice: '$2,000-4,000/month',
      category: 'System Administration',
      technologies: ['Windows Server', 'Linux', 'Active Directory', 'PowerShell', 'Bash', 'Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Virtualization & Container Management',
      description: 'VMware, Hyper-V, and container platform management for optimized resource utilization and scalability.',
      icon: Cpu,
      price: '$1,600/month',
      features: [
        'VMware/Hyper-V management',
        'Container orchestration',
        'Resource optimization',
        'High availability setup',
        'Disaster recovery',
        'Performance tuning',
        'Capacity planning',
        'Migration services'
      ],
      benefits: ['Reduce hardware costs by 40%', 'Improve resource utilization', 'Enhanced scalability', 'Better disaster recovery'],
      marketPrice: '$2,500-5,000/month',
      category: 'System Administration',
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'OpenShift', 'Proxmox'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // IT Support & Helpdesk
    {
      title: '24/7 IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 availability, remote assistance, and proactive monitoring.',
      icon: Users,
      price: '$800/month',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Hardware & software support',
        'User training & onboarding',
        'Ticket management system',
        'Proactive monitoring',
        'Mobile device management',
        'IT asset management'
      ],
      benefits: ['Reduce IT issues by 70%', 'Improve user productivity', 'Faster problem resolution', 'Proactive support'],
      marketPrice: '$1,200-2,500/month',
      category: 'IT Support',
      technologies: ['Remote Desktop', 'Ticketing Systems', 'MDM', 'Monitoring', 'Asset Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management & Procurement',
      description: 'Complete IT asset lifecycle management including procurement, deployment, maintenance, and disposal.',
      icon: HardDrive,
      price: '$1,000/month',
      features: [
        'Asset inventory management',
        'Procurement optimization',
        'License management',
        'Warranty tracking',
        'Disposal & recycling',
        'Cost optimization',
        'Compliance reporting',
        'Vendor management'
      ],
      benefits: ['Reduce IT costs by 25%', 'Improve asset utilization', 'Ensure compliance', 'Better vendor relationships'],
      marketPrice: '$1,500-3,000/month',
      category: 'IT Support',
      technologies: ['Asset Management Tools', 'Procurement Systems', 'License Management', 'CMDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Mobile & Endpoint Management
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, compliance, and application management.',
      icon: Smartphone,
      price: '$1,400/month',
      features: [
        'Device enrollment & provisioning',
        'Security policy enforcement',
        'Application management',
        'Remote wipe & lock',
        'Compliance monitoring',
        'Location tracking',
        'Content management',
        'Multi-platform support'
      ],
      benefits: ['Enhance mobile security', 'Improve compliance', 'Centralized management', 'Reduce support tickets'],
      marketPrice: '$2,000-4,000/month',
      category: 'Mobile Management',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Endpoint Security & Management',
      description: 'Comprehensive endpoint protection with antivirus, encryption, and centralized management capabilities.',
      icon: Laptop,
      price: '$1,300/month',
      features: [
        'Antivirus & anti-malware',
        'Endpoint encryption',
        'Patch management',
        'Device compliance',
        'Threat detection',
        'Data loss prevention',
        'Remote management',
        'Policy enforcement'
      ],
      benefits: ['Protect against 99.9% of threats', 'Ensure data security', 'Compliance management', 'Centralized control'],
      marketPrice: '$2,000-4,500/month',
      category: 'Mobile Management',
      technologies: ['CrowdStrike', 'SentinelOne', 'BitLocker', 'McAfee', 'Symantec'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud management, cybersecurity, DevOps, database administration, and 24/7 support. Enterprise-grade solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud management, cybersecurity, DevOps, database administration, network services, IT support" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Enterprise-Grade IT Solutions & Support
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive IT services designed to optimize your infrastructure, enhance security, 
            and drive business growth through cutting-edge technology solutions.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300 text-xs sm:text-sm">IT Service Categories</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300 text-xs sm:text-sm">Starting Price</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-xs sm:text-sm">Support Available</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
            All Categories
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {itServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <div className="text-xs text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Category Badge */}
                <div className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {service.category}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-xs text-gray-400 mb-3">{service.contactInfo}</div>
                  <div className="flex space-x-2">
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      Get Started
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Choose Zion Tech Group for IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Certified Experts</h3>
              <p className="text-gray-300 text-sm">AWS, Microsoft, Cisco, and other industry certifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock monitoring and support for your infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security and compliance for all your systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">$50M+ in cost savings delivered to our clients</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive IT services today and experience enterprise-grade solutions 
            that drive business growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Contact Us Today
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;