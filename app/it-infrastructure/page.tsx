import React from 'react';
import { Server, Database, Cloud, Shield, Cpu, HardDrive, Wifi, Monitor, Smartphone, Laptop, Building, Users, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Zap, TrendingUp, BarChart, Settings, Lock, Activity, AlertTriangle, RefreshCw, Download, Upload, Globe, ShieldCheck, Database as DatabaseIcon, Network, Router, Switch, Firewall, LoadBalancer, Backup, Archive, Sync, Cpu as CpuIcon, MemoryStick, HardDrive as HardDriveIcon, Wifi as WifiIcon, Monitor as MonitorIcon, Smartphone as SmartphoneIcon, Laptop as LaptopIcon, Building as BuildingIcon, Users as UsersIcon, Clock as ClockIcon, CheckCircle as CheckCircleIcon, Star as StarIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Zap as ZapIcon, TrendingUp as TrendingUpIcon, BarChart as BarChartIcon, Settings as SettingsIcon, Lock as LockIcon, Activity as ActivityIcon, AlertTriangle as AlertTriangleIcon, RefreshCw as RefreshCwIcon, Download as DownloadIcon, Upload as UploadIcon, Globe as GlobeIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const infrastructureServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum security.',
      icon: Cloud,
      price: 2500,
      period: 'project',
      features: [
        'Zero-downtime migration',
        'Security assessment',
        'Cost optimization',
        'Performance monitoring',
        'Disaster recovery setup',
        'Compliance validation',
        'Training & documentation',
        '24/7 support'
      ],
      category: 'Cloud Services',
      popular: true,
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities'
      ],
      marketPrice: '$5,000-15,000',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'network-design',
      name: 'Network Design & Implementation',
      description: 'Design and implement secure, scalable network infrastructure for enterprise environments.',
      icon: Network,
      price: 1800,
      period: 'project',
      features: [
        'Network architecture design',
        'Security implementation',
        'Performance optimization',
        'Monitoring setup',
        'Documentation',
        'Staff training',
        'Ongoing support',
        'Compliance validation'
      ],
      category: 'Networking',
      benefits: [
        'Improve network performance by 60%',
        'Enhanced security posture',
        'Reduced downtime and outages',
        'Better scalability for growth'
      ],
      marketPrice: '$3,000-10,000',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Aruba', 'Meraki'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'data-center-optimization',
      name: 'Data Center Optimization',
      description: 'Optimize your data center infrastructure for maximum efficiency, security, and cost-effectiveness.',
      icon: Server,
      price: 3200,
      period: 'project',
      features: [
        'Infrastructure assessment',
        'Capacity planning',
        'Energy optimization',
        'Security hardening',
        'Backup strategy',
        'Disaster recovery',
        'Monitoring implementation',
        'Performance tuning'
      ],
      category: 'Data Center',
      popular: true,
      benefits: [
        'Reduce energy costs by 35%',
        'Improve uptime to 99.9%',
        'Enhanced security posture',
        'Better resource utilization'
      ],
      marketPrice: '$6,000-20,000',
      technologies: ['VMware', 'Hyper-V', 'SAN', 'NAS', 'UPS Systems'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'cybersecurity-infrastructure',
      name: 'Cybersecurity Infrastructure',
      description: 'Comprehensive security infrastructure design and implementation to protect your digital assets.',
      icon: Shield,
      price: 2800,
      period: 'project',
      features: [
        'Security assessment',
        'Firewall configuration',
        'Intrusion detection',
        'Endpoint protection',
        'Security monitoring',
        'Incident response',
        'Compliance validation',
        'Security training'
      ],
      category: 'Security',
      benefits: [
        'Reduce security incidents by 80%',
        'Meet compliance requirements',
        'Protect sensitive data',
        'Improve incident response time'
      ],
      marketPrice: '$5,000-18,000',
      technologies: ['Palo Alto', 'Cisco ASA', 'Splunk', 'CrowdStrike', 'Okta'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions to ensure business continuity.',
      icon: Archive,
      price: 1500,
      period: 'project',
      features: [
        'Backup strategy design',
        'Disaster recovery planning',
        'Testing & validation',
        'Monitoring & alerting',
        'Documentation',
        'Staff training',
        'Regular testing',
        '24/7 support'
      ],
      category: 'Backup & Recovery',
      benefits: [
        'Minimize data loss risk',
        'Reduce recovery time by 70%',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      marketPrice: '$3,000-12,000',
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Site Recovery'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'server-virtualization',
      name: 'Server Virtualization',
      description: 'Virtualize your server infrastructure for improved efficiency, scalability, and cost savings.',
      icon: Cpu,
      price: 2200,
      period: 'project',
      features: [
        'Virtualization design',
        'VM migration',
        'Resource optimization',
        'High availability setup',
        'Monitoring configuration',
        'Performance tuning',
        'Documentation',
        'Training & support'
      ],
      category: 'Virtualization',
      benefits: [
        'Reduce hardware costs by 50%',
        'Improve resource utilization',
        'Enhanced scalability',
        'Better disaster recovery'
      ],
      marketPrice: '$4,000-15,000',
      technologies: ['VMware vSphere', 'Microsoft Hyper-V', 'Citrix XenServer', 'Proxmox'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'network-monitoring',
      name: 'Network Monitoring & Management',
      description: 'Comprehensive network monitoring and management solutions for optimal performance.',
      icon: Activity,
      price: 800,
      period: 'month',
      features: [
        '24/7 network monitoring',
        'Performance analytics',
        'Alert management',
        'Capacity planning',
        'Security monitoring',
        'Reporting & dashboards',
        'Proactive maintenance',
        'Incident response'
      ],
      category: 'Monitoring',
      popular: true,
      benefits: [
        'Reduce downtime by 60%',
        'Proactive issue detection',
        'Improved performance',
        'Better resource planning'
      ],
      marketPrice: '$1,500-3,000/month',
      technologies: ['SolarWinds', 'PRTG', 'Nagios', 'Zabbix', 'Datadog'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'storage-solutions',
      name: 'Storage Solutions',
      description: 'Design and implement scalable storage solutions for your growing data needs.',
      icon: HardDrive,
      price: 2000,
      period: 'project',
      features: [
        'Storage assessment',
        'Capacity planning',
        'Performance optimization',
        'Backup integration',
        'Security implementation',
        'Monitoring setup',
        'Documentation',
        'Support & maintenance'
      ],
      category: 'Storage',
      benefits: [
        'Improve storage efficiency',
        'Reduce storage costs',
        'Enhanced data protection',
        'Better performance'
      ],
      marketPrice: '$4,000-12,000',
      technologies: ['NetApp', 'Dell EMC', 'Pure Storage', 'HPE', 'IBM'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'wireless-networking',
      name: 'Wireless Networking Solutions',
      description: 'Design and implement secure, high-performance wireless networks for modern workplaces.',
      icon: Wifi,
      price: 1200,
      period: 'project',
      features: [
        'Wireless site survey',
        'Access point deployment',
        'Security configuration',
        'Performance optimization',
        'Guest network setup',
        'Monitoring & management',
        'Documentation',
        'Staff training'
      ],
      category: 'Wireless',
      benefits: [
        'Improve wireless performance',
        'Enhanced security',
        'Better user experience',
        'Reduced support tickets'
      ],
      marketPrice: '$2,500-8,000',
      technologies: ['Cisco Meraki', 'Aruba', 'Ubiquiti', 'Ruckus', 'Fortinet'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'load-balancing',
      name: 'Load Balancing & High Availability',
      description: 'Implement load balancing and high availability solutions for critical applications.',
      icon: LoadBalancer,
      price: 1800,
      period: 'project',
      features: [
        'Load balancer configuration',
        'High availability setup',
        'Health monitoring',
        'Failover testing',
        'Performance optimization',
        'Security implementation',
        'Documentation',
        'Ongoing support'
      ],
      category: 'High Availability',
      benefits: [
        'Improve application uptime',
        'Better performance distribution',
        'Enhanced reliability',
        'Reduced single points of failure'
      ],
      marketPrice: '$3,500-12,000',
      technologies: ['F5', 'Citrix ADC', 'HAProxy', 'NGINX', 'AWS ALB'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'email-infrastructure',
      name: 'Email Infrastructure & Security',
      description: 'Design and implement secure, reliable email infrastructure with advanced security features.',
      icon: Mail,
      price: 1500,
      period: 'project',
      features: [
        'Email server setup',
        'Security configuration',
        'Spam & virus protection',
        'Backup & archiving',
        'Mobile device management',
        'Compliance features',
        'Monitoring & reporting',
        'User training'
      ],
      category: 'Email Services',
      benefits: [
        'Improve email security',
        'Reduce spam and threats',
        'Better compliance',
        'Enhanced productivity'
      ],
      marketPrice: '$3,000-10,000',
      technologies: ['Microsoft Exchange', 'Office 365', 'Google Workspace', 'Proofpoint', 'Mimecast'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'remote-access',
      name: 'Remote Access Solutions',
      description: 'Secure remote access solutions for distributed teams and remote work environments.',
      icon: Globe,
      price: 1000,
      period: 'project',
      features: [
        'VPN setup & configuration',
        'Multi-factor authentication',
        'Device management',
        'Security policies',
        'Performance optimization',
        'Monitoring & logging',
        'User training',
        'Ongoing support'
      ],
      category: 'Remote Access',
      popular: true,
      benefits: [
        'Secure remote access',
        'Improved productivity',
        'Better security posture',
        'Reduced support overhead'
      ],
      marketPrice: '$2,000-8,000',
      technologies: ['Cisco AnyConnect', 'Pulse Secure', 'Fortinet', 'OpenVPN', 'Zscaler'],
      contactInfo: 'kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Networking',
    'Data Center',
    'Security',
    'Backup & Recovery',
    'Virtualization',
    'Monitoring',
    'Storage',
    'Wireless',
    'High Availability',
    'Email Services',
    'Remote Access'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = infrastructureServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularServices = infrastructureServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Infrastructure Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT infrastructure solutions designed to optimize performance, enhance security, 
            and ensure scalability for your business. From cloud migration to network design, we provide 
            end-to-end infrastructure services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search IT infrastructure services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Services */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Most Popular Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map(service => (
                <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}/{service.period}
                    </span>
                    <span className="text-sm text-green-400">Popular</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-4">
                    Market Price: {service.marketPrice}
                  </div>
                  <a
                    href={`#${service.id}`}
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-all duration-300 hover:neon-glow"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            All IT Infrastructure Services ({filteredServices.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} id={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-purple-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-purple-400 text-xs">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-cyan-400">
                      ${service.price.toLocaleString()}/{service.period}
                    </span>
                    {service.popular && (
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Market Price: {service.marketPrice}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 text-center bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      Email Us
                    </a>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    {service.contactInfo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get started with our IT infrastructure services today. From cloud migration to network design, 
            we provide comprehensive solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructurePage;