'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Server, 
  Shield, 
  Cloud, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign, 
  Globe, 
  Database, 
  Network, 
  Smartphone, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Lock, 
  Settings, 
  Zap, 
  Headphones,
  Award,
  TrendingUp,
  Cpu,
  HardDriveIcon,
  Router,
  Smartphone as Mobile,
  Laptop,
  ServerIcon,
  Database as DbIcon,
  NetworkIcon,
  ShieldCheck,
  CloudIcon,
  CodeIcon,
  Terminal,
  GitBranch,
  Container,
  Layers,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Key,
  User,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock as TimeIcon,
  BarChart3,
  PieChart,
  LineChart,
  TrendingDown,
  Target,
  Rocket,
  Wrench,
  Tool,
  Cog,
  Sliders,
  Palette,
  Paintbrush,
  Scissors,
  Hammer,
  Screwdriver,
  WrenchIcon,
  ToolIcon,
  CogIcon,
  SlidersIcon,
  PaletteIcon,
  PaintbrushIcon,
  ScissorsIcon,
  HammerIcon,
  ScrewdriverIcon
} from 'lucide-react'

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  benefits: string[];
  capabilities: string[];
  deliveryTime: string;
  support: string;
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud infrastructure design, migration, and management services for AWS, Azure, and Google Cloud platforms.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Cloud migration strategy and execution',
        'Cost optimization and resource management',
        'Auto-scaling and load balancing configuration',
        'Disaster recovery and backup solutions',
        'Security hardening and compliance',
        '24/7 monitoring and maintenance',
        'Performance optimization and tuning'
      ],
      price: '$2,999/month',
      marketPrice: '$8,000-15,000/month',
      users: 'Up to 1000 users',
      popular: true,
      category: 'Cloud Services',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      capabilities: [
        'AWS, Azure, Google Cloud expertise',
        'Kubernetes and Docker orchestration',
        'Infrastructure as Code (IaC)',
        'DevOps and CI/CD implementation'
      ],
      deliveryTime: '2-4 weeks',
      support: '24/7 Premium Support'
    },
    {
      id: 'cybersecurity-solutions',
      icon: Shield,
      title: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, compliance management, and security training.',
      features: [
        'Advanced threat detection and response (EDR/XDR)',
        'Security assessment and penetration testing',
        'Compliance management (SOC 2, GDPR, HIPAA)',
        'Security awareness training and phishing simulation',
        'Vulnerability management and patch management',
        'Identity and access management (IAM)',
        'Security monitoring and SIEM implementation',
        'Incident response planning and execution'
      ],
      price: '$1,999/month',
      marketPrice: '$5,000-12,000/month',
      users: 'Up to 500 users',
      popular: true,
      category: 'Cybersecurity',
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      benefits: [
        'Reduce security incidents by 85%',
        'Ensure regulatory compliance',
        'Protect sensitive data and assets',
        'Improve security posture'
      ],
      capabilities: [
        'Zero-trust security architecture',
        'AI-powered threat detection',
        'Automated incident response',
        'Security orchestration and automation'
      ],
      deliveryTime: '1-3 weeks',
      support: '24/7 Security Operations Center'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Custom web application development using modern technologies including React, Node.js, Python, and cloud-native architectures.',
      features: [
        'Responsive web application development',
        'Progressive Web App (PWA) development',
        'API development and integration',
        'Database design and optimization',
        'Performance optimization and SEO',
        'Cross-browser compatibility testing',
        'Mobile-first responsive design',
        'Third-party integrations and APIs'
      ],
      price: '$4,999/project',
      marketPrice: '$15,000-50,000/project',
      users: 'Custom',
      popular: true,
      category: 'Development',
      link: 'https://ziontechgroup.com/web-development',
      benefits: [
        'Modern, scalable web applications',
        'Improved user experience and engagement',
        'Mobile-responsive design',
        'SEO-optimized for better visibility'
      ],
      capabilities: [
        'React, Vue.js, Angular frameworks',
        'Node.js, Python, PHP backends',
        'PostgreSQL, MongoDB databases',
        'Docker and Kubernetes deployment'
      ],
      deliveryTime: '4-12 weeks',
      support: '6 months post-launch support'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android with modern UI/UX design.',
      features: [
        'Native iOS and Android app development',
        'Cross-platform development (React Native, Flutter)',
        'App store optimization and publishing',
        'Push notifications and real-time features',
        'Offline functionality and data sync',
        'Biometric authentication and security',
        'App analytics and crash reporting',
        'Maintenance and updates'
      ],
      price: '$7,999/project',
      marketPrice: '$25,000-80,000/project',
      users: 'Custom',
      popular: false,
      category: 'Development',
      link: 'https://ziontechgroup.com/mobile-development',
      benefits: [
        'Native performance and user experience',
        'Cross-platform code reusability',
        'App store presence and visibility',
        'Enhanced customer engagement'
      ],
      capabilities: [
        'Swift, Kotlin native development',
        'React Native, Flutter cross-platform',
        'Firebase, AWS mobile services',
        'App Store and Google Play optimization'
      ],
      deliveryTime: '8-16 weeks',
      support: '12 months post-launch support'
    },
    {
      id: 'network-infrastructure',
      icon: Network,
      title: 'Network Infrastructure Design',
      description: 'Complete network infrastructure design, implementation, and management including LAN, WAN, and wireless solutions.',
      features: [
        'Network architecture design and planning',
        'LAN/WAN implementation and configuration',
        'Wireless network design and optimization',
        'Network security and firewall configuration',
        'VPN setup and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Network documentation and training'
      ],
      price: '$1,499/month',
      marketPrice: '$3,000-8,000/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Infrastructure',
      link: 'https://ziontechgroup.com/network-infrastructure',
      benefits: [
        'Improved network performance and reliability',
        'Enhanced security and access control',
        'Scalable and future-proof infrastructure',
        'Reduced network downtime'
      ],
      capabilities: [
        'Cisco, Juniper, Aruba expertise',
        'SD-WAN and SDN implementation',
        'Network automation and orchestration',
        'Advanced network monitoring'
      ],
      deliveryTime: '2-6 weeks',
      support: '24/7 Network Operations Center'
    },
    {
      id: 'database-management',
      icon: Database,
      title: 'Database Management Services',
      description: 'Comprehensive database design, optimization, migration, and management services for SQL and NoSQL databases.',
      features: [
        'Database design and architecture planning',
        'Database migration and consolidation',
        'Performance tuning and optimization',
        'Backup and disaster recovery solutions',
        'Database security and access control',
        'Monitoring and maintenance services',
        'Data warehousing and analytics setup',
        'Database automation and scripting'
      ],
      price: '$999/month',
      marketPrice: '$2,500-6,000/month',
      users: 'Up to 1000 users',
      popular: false,
      category: 'Database',
      link: 'https://ziontechgroup.com/database-management',
      benefits: [
        'Optimized database performance',
        'Improved data security and compliance',
        'Reduced downtime and data loss',
        'Automated backup and recovery'
      ],
      capabilities: [
        'MySQL, PostgreSQL, Oracle expertise',
        'MongoDB, Cassandra NoSQL databases',
        'Database clustering and replication',
        'Advanced query optimization'
      ],
      deliveryTime: '1-4 weeks',
      support: '24/7 Database Support'
    },
    {
      id: 'devops-automation',
      icon: Settings,
      title: 'DevOps & Automation Services',
      description: 'Complete DevOps implementation including CI/CD pipelines, infrastructure automation, and deployment strategies.',
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (IaC) setup',
        'Container orchestration with Kubernetes',
        'Automated testing and deployment',
        'Monitoring and logging solutions',
        'Configuration management',
        'Release management and rollback strategies',
        'DevOps training and best practices'
      ],
      price: '$2,499/month',
      marketPrice: '$6,000-15,000/month',
      users: 'Up to 50 developers',
      popular: true,
      category: 'DevOps',
      link: 'https://ziontechgroup.com/devops-automation',
      benefits: [
        'Faster deployment and release cycles',
        'Improved code quality and reliability',
        'Reduced manual errors and downtime',
        'Enhanced team productivity'
      ],
      capabilities: [
        'Jenkins, GitLab CI, GitHub Actions',
        'Terraform, Ansible, Chef automation',
        'Docker, Kubernetes containerization',
        'Prometheus, Grafana monitoring'
      ],
      deliveryTime: '3-6 weeks',
      support: '24/7 DevOps Support'
    },
    {
      id: 'it-support',
      icon: Headphones,
      title: '24/7 IT Support Services',
      description: 'Comprehensive IT support services including help desk, remote support, and on-site assistance for all your IT needs.',
      features: [
        '24/7 help desk and technical support',
        'Remote desktop support and troubleshooting',
        'Hardware and software installation',
        'User account management and permissions',
        'Email and communication system support',
        'Printer and peripheral device support',
        'Software licensing and updates',
        'IT asset management and inventory'
      ],
      price: '$299/month',
      marketPrice: '$800-2,000/month',
      users: 'Up to 100 users',
      popular: true,
      category: 'Support',
      link: 'https://ziontechgroup.com/it-support',
      benefits: [
        'Reduced IT downtime and issues',
        'Improved user productivity',
        'Proactive problem resolution',
        'Cost-effective IT management'
      ],
      capabilities: [
        'Multi-channel support (phone, email, chat)',
        'Remote support tools and technologies',
        'ITIL-based service management',
        'Advanced ticketing and tracking systems'
      ],
      deliveryTime: 'Immediate',
      support: '24/7 Support Available'
    },
    {
      id: 'data-backup-recovery',
      icon: HardDrive,
      title: 'Data Backup & Recovery Solutions',
      description: 'Comprehensive data backup, disaster recovery, and business continuity solutions to protect your critical data.',
      features: [
        'Automated backup scheduling and management',
        'Cloud and on-premises backup solutions',
        'Disaster recovery planning and testing',
        'Data encryption and security',
        'Point-in-time recovery capabilities',
        'Backup monitoring and reporting',
        'Compliance and regulatory requirements',
        'Business continuity planning'
      ],
      price: '$499/month',
      marketPrice: '$1,200-3,000/month',
      users: 'Up to 500 users',
      popular: false,
      category: 'Data Management',
      link: 'https://ziontechgroup.com/data-backup-recovery',
      benefits: [
        'Protect critical business data',
        'Minimize data loss and downtime',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      capabilities: [
        'Veeam, Commvault, Acronis expertise',
        'AWS, Azure, Google Cloud backup',
        'Ransomware protection and recovery',
        'Automated disaster recovery testing'
      ],
      deliveryTime: '1-2 weeks',
      support: '24/7 Data Protection Support'
    },
    {
      id: 'email-systems',
      icon: Mail,
      title: 'Email & Communication Systems',
      description: 'Complete email system setup, migration, and management including Microsoft 365, Google Workspace, and custom solutions.',
      features: [
        'Email system design and implementation',
        'Microsoft 365 and Google Workspace setup',
        'Email migration and data transfer',
        'Spam filtering and security',
        'Email archiving and compliance',
        'Mobile device management (MDM)',
        'Collaboration tools integration',
        'Email monitoring and reporting'
      ],
      price: '$199/month',
      marketPrice: '$500-1,500/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Communication',
      link: 'https://ziontechgroup.com/email-systems',
      benefits: [
        'Reliable and secure email communication',
        'Improved collaboration and productivity',
        'Enhanced security and compliance',
        'Reduced email-related issues'
      ],
      capabilities: [
        'Microsoft 365, Google Workspace expertise',
        'Exchange Server, Office 365 migration',
        'Advanced threat protection',
        'Email encryption and DLP'
      ],
      deliveryTime: '1-3 weeks',
      support: '24/7 Email Support'
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services to help align technology with business goals and optimize IT investments.',
      features: [
        'IT strategy development and planning',
        'Technology assessment and recommendations',
        'Digital transformation consulting',
        'IT budget planning and optimization',
        'Vendor evaluation and selection',
        'Technology roadmap development',
        'IT governance and compliance',
        'Change management and training'
      ],
      price: '$299/hour',
      marketPrice: '$500-1,200/hour',
      users: 'Custom',
      popular: false,
      category: 'Consulting',
      link: 'https://ziontechgroup.com/it-consulting',
      benefits: [
        'Strategic technology alignment',
        'Optimized IT investments',
        'Improved technology decision-making',
        'Enhanced business-IT collaboration'
      ],
      capabilities: [
        'Enterprise architecture expertise',
        'Digital transformation strategies',
        'Technology trend analysis',
        'IT governance frameworks'
      ],
      deliveryTime: 'Flexible',
      support: 'Project-based Support'
    },
    {
      id: 'security-audit',
      icon: ShieldCheck,
      title: 'Security Audit & Assessment',
      description: 'Comprehensive security audits, vulnerability assessments, and penetration testing to identify and address security risks.',
      features: [
        'Security vulnerability assessments',
        'Penetration testing and ethical hacking',
        'Compliance audits (SOC 2, ISO 27001)',
        'Security policy development',
        'Risk assessment and mitigation',
        'Security awareness training',
        'Incident response planning',
        'Security monitoring setup'
      ],
      price: '$1,999/assessment',
      marketPrice: '$5,000-15,000/assessment',
      users: 'Custom',
      popular: true,
      category: 'Security',
      link: 'https://ziontechgroup.com/security-audit',
      benefits: [
        'Identify and address security vulnerabilities',
        'Ensure regulatory compliance',
        'Improve security posture',
        'Reduce security risks'
      ],
      capabilities: [
        'OWASP, NIST framework expertise',
        'Automated and manual testing',
        'Social engineering assessments',
        'Compliance gap analysis'
      ],
      deliveryTime: '2-4 weeks',
      support: 'Post-assessment Support'
    }
  ];

  const categories = ['All', ...Array.from(new Set(itServices.map(service => service.category)))];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of IT solutions with minimal business disruption.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance standards and advanced threat protection.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud-Native',
      description: 'Modern cloud-first solutions with scalability and global reach.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Expert Support' },
    { number: '15+', label: 'Years Experience' }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to keep your business running smoothly, securely, and efficiently. 
              From cloud infrastructure to cybersecurity, we have the expertise you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Headphones className="w-5 h-5 mr-2 inline" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by businesses worldwide for reliable, secure, and innovative IT solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT solutions tailored to your business needs
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-medium text-yellow-400">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-3">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{service.users}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400 line-through">
                      {service.marketPrice}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="w-full border border-white/30 text-white hover:bg-white/10 py-3 px-4 rounded-lg font-medium transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you choose the right solutions for your business needs. 
            Get a free consultation and see how we can optimize your technology stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Get Free Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Headphones className="w-5 h-5 mr-2 inline" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage