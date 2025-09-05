import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, Cloud, Shield, Database, Network, Monitor, Smartphone, Globe, 
  Lock, Settings, Zap, Users, BarChart3, CheckCircle, ArrowRight, Clock, 
  Award, Star, Cpu, HardDrive, Wifi, Code, Terminal, FileText, Mail, 
  Phone, MapPin, TrendingUp, Brain, Target, Building, Headphones, 
  CreditCard, PieChart, Activity, Camera, Mail as MailIcon, ExternalLink,
  Database as DB, Smartphone as Mobile, Laptop, Router, Key, Eye, 
  AlertTriangle, RefreshCw, Layers, Activity as ActivityIcon
} from 'lucide-react';
import Layout from './components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform including multi-cloud architecture, serverless computing, and cost optimization.',
    icon: Cloud,
    features: [
      'Multi-cloud architecture design and implementation',
      'Legacy system migration and modernization',
      'Serverless computing and containerization (Docker, Kubernetes)',
      'Auto-scaling and load balancing solutions',
      'Cost optimization and FinOps practices',
      'Disaster recovery and backup solutions',
      'Cloud security and compliance implementation',
      'Performance monitoring and optimization'
    ],
    pricing: '$5,000 - $50,000/month',
    delivery: '4-12 weeks',
    category: 'Cloud Services',
    popular: true,
    marketPrice: '$3,000 - $60,000/month',
    benefits: ['Reduce infrastructure costs by 40%', '99.99% uptime guarantee', 'Scalable architecture']
  },
  {
    title: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security solutions including zero-trust architecture, compliance automation, penetration testing, and 24/7 security monitoring.',
    icon: Shield,
    features: [
      'Zero-trust security architecture implementation',
      'SOC 2, GDPR, HIPAA, PCI-DSS compliance automation',
      'Penetration testing and vulnerability assessments',
      'Security monitoring and incident response (SOC)',
      'Identity and access management (IAM) solutions',
      'Data encryption and privacy protection',
      'Security awareness training and phishing simulation',
      'Compliance reporting and audit support'
    ],
    pricing: '$3,000 - $25,000/month',
    delivery: '3-8 weeks',
    category: 'Security Services',
    popular: true,
    marketPrice: '$2,000 - $30,000/month',
    benefits: ['Protect against 99.9% of threats', 'Compliance ready', '24/7 security monitoring']
  },
  {
    title: 'Network Infrastructure & SD-WAN',
    description: 'Design, implementation, and management of enterprise networks including SD-WAN, wireless solutions, and unified communications.',
    icon: Network,
    features: [
      'SD-WAN and hybrid network solutions',
      'Network security and firewall management',
      'Wireless network design and optimization (Wi-Fi 6/6E)',
      'Network monitoring and performance tuning',
      'VoIP and unified communications setup',
      'Network documentation and training',
      'Load balancing and traffic optimization',
      'Network disaster recovery planning'
    ],
    pricing: '$2,000 - $15,000/month',
    delivery: '2-6 weeks',
    category: 'Network Services',
    popular: false,
    marketPrice: '$1,500 - $20,000/month',
    benefits: ['Improve network performance by 50%', 'Reduce downtime by 80%', 'Future-proof architecture']
  },
  {
    title: 'IT Support & Helpdesk Services',
    description: 'Comprehensive 24/7 technical support with remote assistance, software management, and proactive monitoring for seamless operations.',
    icon: Users,
    features: [
      '24/7/365 technical support coverage',
      'Remote desktop and troubleshooting services',
      'Software installation and updates management',
      'Hardware procurement and lifecycle management',
      'User training and documentation',
      'Proactive system monitoring and maintenance',
      'IT asset management and tracking',
      'Service level agreement (SLA) guarantees'
    ],
    pricing: '$1,500 - $8,000/month',
    delivery: '1-2 weeks',
    category: 'Support Services',
    popular: true,
    marketPrice: '$1,000 - $12,000/month',
    benefits: ['Reduce IT issues by 70%', 'Faster resolution times', 'Proactive maintenance']
  },
  {
    title: 'Database Management & Optimization',
    description: 'Comprehensive database services including design, optimization, migration, backup, and performance tuning for all major database platforms.',
    icon: Database,
    features: [
      'Database design and architecture planning',
      'Performance tuning and optimization',
      'Database migration and consolidation',
      'Backup and disaster recovery solutions',
      'Database security and access control',
      'Monitoring and alerting systems',
      'Data archiving and lifecycle management',
      'Database health assessments and reporting'
    ],
    pricing: '$2,500 - $12,000/month',
    delivery: '2-8 weeks',
    category: 'Database Services',
    popular: false,
    marketPrice: '$1,500 - $15,000/month',
    benefits: ['Improve performance by 60%', 'Reduce downtime by 90%', 'Automated backups']
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with automated CI/CD pipelines, infrastructure as code, and continuous monitoring solutions.',
    icon: Code,
    features: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as Code (IaC) with Terraform/CloudFormation',
      'Container orchestration with Kubernetes',
      'Automated testing and quality assurance',
      'Monitoring and logging solutions (ELK, Prometheus)',
      'Configuration management and deployment automation',
      'DevSecOps security integration',
      'Team training and best practices implementation'
    ],
    pricing: '$4,000 - $20,000/month',
    delivery: '6-16 weeks',
    category: 'DevOps Services',
    popular: true,
    marketPrice: '$3,000 - $25,000/month',
    benefits: ['Deploy 10x faster', 'Reduce deployment failures by 80%', 'Automated quality checks']
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT consulting services including technology roadmaps, digital transformation planning, and IT governance implementation.',
    icon: Brain,
    features: [
      'IT strategy and roadmap development',
      'Digital transformation planning and execution',
      'Technology assessment and recommendations',
      'IT governance and policy development',
      'Vendor evaluation and management',
      'Budget planning and cost optimization',
      'Change management and training',
      'IT risk assessment and mitigation'
    ],
    pricing: '$2,000 - $10,000/month',
    delivery: '4-12 weeks',
    category: 'Consulting Services',
    popular: false,
    marketPrice: '$1,500 - $15,000/month',
    benefits: ['Align IT with business goals', 'Reduce technology costs', 'Strategic planning']
  },
  {
    title: 'Mobile Device Management (MDM)',
    description: 'Comprehensive mobile device management including device enrollment, security policies, app management, and remote support.',
    icon: Smartphone,
    features: [
      'Mobile device enrollment and provisioning',
      'Security policy implementation and enforcement',
      'App management and distribution',
      'Remote device management and support',
      'Data encryption and secure communications',
      'Compliance monitoring and reporting',
      'Lost device tracking and remote wipe',
      'Mobile threat detection and prevention'
    ],
    pricing: '$1,000 - $5,000/month',
    delivery: '2-4 weeks',
    category: 'Mobile Services',
    popular: false,
    marketPrice: '$800 - $8,000/month',
    benefits: ['Secure mobile workforce', 'Centralized device management', 'Compliance ready']
  },
  {
    title: 'Data Center Services',
    description: 'Complete data center solutions including colocation, managed hosting, disaster recovery, and hybrid cloud connectivity.',
    icon: Server,
    features: [
      'Colocation and managed hosting services',
      'Disaster recovery and business continuity',
      'Hybrid cloud connectivity and integration',
      'Power and cooling optimization',
      'Physical security and access control',
      'Network connectivity and redundancy',
      'Compliance and audit support',
      '24/7 monitoring and support'
    ],
    pricing: '$3,000 - $25,000/month',
    delivery: '4-8 weeks',
    category: 'Data Center Services',
    popular: false,
    marketPrice: '$2,000 - $30,000/month',
    benefits: ['99.99% uptime guarantee', 'Redundant infrastructure', 'Scalable solutions']
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management including procurement, tracking, maintenance, and disposal services.',
    icon: Layers,
    features: [
      'IT asset inventory and tracking',
      'Procurement and vendor management',
      'Asset lifecycle management',
      'Software license compliance',
      'Maintenance scheduling and tracking',
      'Asset disposal and data sanitization',
      'Cost optimization and budgeting',
      'Reporting and analytics dashboard'
    ],
    pricing: '$800 - $4,000/month',
    delivery: '2-6 weeks',
    category: 'Asset Management',
    popular: false,
    marketPrice: '$500 - $6,000/month',
    benefits: ['Reduce asset costs by 25%', 'Improve compliance', 'Automated tracking']
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup and disaster recovery solutions with automated backups, testing, and rapid recovery capabilities.',
    icon: HardDrive,
    features: [
      'Automated backup scheduling and management',
      'Disaster recovery planning and testing',
      'Data replication and synchronization',
      'Recovery time objective (RTO) optimization',
      'Backup verification and integrity checks',
      'Cloud and on-premises backup solutions',
      'Business continuity planning',
      'Recovery testing and documentation'
    ],
    pricing: '$1,200 - $6,000/month',
    delivery: '2-4 weeks',
    category: 'Backup Services',
    popular: true,
    marketPrice: '$800 - $10,000/month',
    benefits: ['99.9% data protection', 'Rapid recovery times', 'Automated testing']
  },
  {
    title: 'IT Security Auditing',
    description: 'Comprehensive security audits including vulnerability assessments, penetration testing, and compliance evaluations.',
    icon: Eye,
    features: [
      'Vulnerability assessments and scanning',
      'Penetration testing and ethical hacking',
      'Security policy and procedure review',
      'Compliance gap analysis',
      'Risk assessment and mitigation planning',
      'Security awareness training',
      'Incident response planning',
      'Ongoing security monitoring recommendations'
    ],
    pricing: '$2,000 - $8,000/month',
    delivery: '2-6 weeks',
    category: 'Security Auditing',
    popular: false,
    marketPrice: '$1,500 - $12,000/month',
    benefits: ['Identify security gaps', 'Compliance validation', 'Risk mitigation']
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs including technical skills, certifications, and best practices for your team.',
    icon: Award,
    features: [
      'Technical skills training and development',
      'Industry certification preparation',
      'Security awareness and best practices',
      'New technology adoption training',
      'Leadership and management development',
      'Custom training curriculum development',
      'Online and in-person training options',
      'Progress tracking and certification support'
    ],
    pricing: '$1,000 - $5,000/month',
    delivery: 'Ongoing',
    category: 'Training Services',
    popular: false,
    marketPrice: '$800 - $8,000/month',
    benefits: ['Improve team skills', 'Increase productivity', 'Reduce errors']
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services including planning, execution, monitoring, and delivery of complex technology projects.',
    icon: Target,
    features: [
      'Project planning and scope definition',
      'Resource allocation and team management',
      'Risk assessment and mitigation',
      'Timeline and milestone tracking',
      'Quality assurance and testing',
      'Stakeholder communication and reporting',
      'Change management and control',
      'Project closure and documentation'
    ],
    pricing: '$3,000 - $15,000/month',
    delivery: 'Project-based',
    category: 'Project Management',
    popular: false,
    marketPrice: '$2,000 - $20,000/month',
    benefits: ['On-time delivery', 'Budget control', 'Quality assurance']
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive compliance management including policy development, audit support, and regulatory compliance for various industries.',
    icon: FileText,
    features: [
      'Compliance framework implementation',
      'Policy development and documentation',
      'Audit preparation and support',
      'Regulatory compliance monitoring',
      'Risk assessment and management',
      'Training and awareness programs',
      'Incident response and reporting',
      'Ongoing compliance monitoring'
    ],
    pricing: '$2,500 - $12,000/month',
    delivery: '4-12 weeks',
    category: 'Compliance Services',
    popular: false,
    marketPrice: '$1,500 - $15,000/month',
    benefits: ['Maintain compliance', 'Reduce audit risks', 'Automated monitoring']
  },
  {
    title: 'IT Infrastructure Monitoring',
    description: '24/7 infrastructure monitoring with proactive alerting, performance optimization, and capacity planning services.',
    icon: Activity,
    features: [
      '24/7 infrastructure monitoring and alerting',
      'Performance optimization and tuning',
      'Capacity planning and forecasting',
      'Root cause analysis and troubleshooting',
      'Custom dashboards and reporting',
      'Integration with existing tools',
      'Predictive maintenance recommendations',
      'SLA monitoring and reporting'
    ],
    pricing: '$1,500 - $8,000/month',
    delivery: '1-2 weeks',
    category: 'Monitoring Services',
    popular: true,
    marketPrice: '$1,000 - $12,000/month',
    benefits: ['Prevent downtime', 'Optimize performance', 'Proactive maintenance']
  },
  {
    title: 'IT Vendor Management',
    description: 'Comprehensive vendor management services including evaluation, negotiation, contract management, and performance monitoring.',
    icon: Building,
    features: [
      'Vendor evaluation and selection',
      'Contract negotiation and management',
      'Performance monitoring and reporting',
      'Cost optimization and savings',
      'Relationship management',
      'Risk assessment and mitigation',
      'Service level agreement management',
      'Vendor consolidation and optimization'
    ],
    pricing: '$2,000 - $10,000/month',
    delivery: '2-8 weeks',
    category: 'Vendor Management',
    popular: false,
    marketPrice: '$1,500 - $15,000/month',
    benefits: ['Reduce vendor costs', 'Improve service quality', 'Centralized management']
  },
  {
    title: 'IT Cost Optimization',
    description: 'Strategic cost optimization services including license management, resource optimization, and technology consolidation.',
    icon: PieChart,
    features: [
      'Software license optimization and management',
      'Resource utilization analysis and optimization',
      'Technology consolidation and standardization',
      'Cost analysis and budgeting',
      'Vendor negotiation and contract optimization',
      'Cloud cost optimization and FinOps',
      'ROI analysis and reporting',
      'Ongoing cost monitoring and alerts'
    ],
    pricing: '$1,500 - $8,000/month',
    delivery: '4-8 weeks',
    category: 'Cost Optimization',
    popular: false,
    marketPrice: '$1,000 - $12,000/month',
    benefits: ['Reduce IT costs by 30%', 'Optimize resource usage', 'Improve ROI']
  },
  {
    title: 'IT Innovation & Emerging Technologies',
    description: 'Cutting-edge technology implementation including AI, IoT, blockchain, and quantum computing solutions for forward-thinking organizations.',
    icon: Brain,
    features: [
      'AI and machine learning implementation',
      'IoT device integration and management',
      'Blockchain and distributed ledger solutions',
      'Quantum computing readiness assessment',
      'Edge computing and 5G implementation',
      'Augmented and virtual reality solutions',
      'Robotic process automation (RPA)',
      'Technology trend analysis and recommendations'
    ],
    pricing: '$5,000 - $30,000/month',
    delivery: '8-24 weeks',
    category: 'Innovation Services',
    popular: true,
    marketPrice: '$3,000 - $40,000/month',
    benefits: ['Stay ahead of competition', 'Innovation leadership', 'Future-proof technology']
  }
];

const categories = [
  { name: 'All', count: itServices.length },
  { name: 'Cloud Services', count: itServices.filter(s => s.category === 'Cloud Services').length },
  { name: 'Security Services', count: itServices.filter(s => s.category === 'Security Services').length },
  { name: 'Network Services', count: itServices.filter(s => s.category === 'Network Services').length },
  { name: 'Support Services', count: itServices.filter(s => s.category === 'Support Services').length },
  { name: 'Database Services', count: itServices.filter(s => s.category === 'Database Services').length },
  { name: 'DevOps Services', count: itServices.filter(s => s.category === 'DevOps Services').length },
  { name: 'Consulting Services', count: itServices.filter(s => s.category === 'Consulting Services').length },
  { name: 'Mobile Services', count: itServices.filter(s => s.category === 'Mobile Services').length },
  { name: 'Data Center Services', count: itServices.filter(s => s.category === 'Data Center Services').length },
  { name: 'Asset Management', count: itServices.filter(s => s.category === 'Asset Management').length },
  { name: 'Backup Services', count: itServices.filter(s => s.category === 'Backup Services').length },
  { name: 'Security Auditing', count: itServices.filter(s => s.category === 'Security Auditing').length },
  { name: 'Training Services', count: itServices.filter(s => s.category === 'Training Services').length },
  { name: 'Project Management', count: itServices.filter(s => s.category === 'Project Management').length },
  { name: 'Compliance Services', count: itServices.filter(s => s.category === 'Compliance Services').length },
  { name: 'Monitoring Services', count: itServices.filter(s => s.category === 'Monitoring Services').length },
  { name: 'Vendor Management', count: itServices.filter(s => s.category === 'Vendor Management').length },
  { name: 'Cost Optimization', count: itServices.filter(s => s.category === 'Cost Optimization').length },
  { name: 'Innovation Services', count: itServices.filter(s => s.category === 'Innovation Services').length }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <Layout
      title="IT Services - 70+ Comprehensive Technology Solutions"
      description="Explore our comprehensive range of IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions."
      keywords="IT services, cloud infrastructure, cybersecurity, network management, DevOps, database services, IT consulting"
      ogTitle="IT Services - Zion Tech Group"
      ogDescription="Discover 70+ comprehensive IT services designed to transform your technology infrastructure and drive business growth."
      ogUrl="https://ziontechgroup.com/it-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              IT Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-green-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              70+ Comprehensive Technology Solutions
            </motion.p>
            <motion.p 
              className="text-lg mb-12 text-green-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your technology infrastructure with our comprehensive IT services. 
              From cloud migration to cybersecurity, we provide everything you need to succeed.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Get Started Today
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure and drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div 
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  service.popular ? 'ring-2 ring-green-500' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-green-600 text-sm font-medium">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span><strong>Delivery:</strong> {service.delivery}</span>
                    <span><strong>Benefits:</strong> {service.benefits[0]}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link 
                    href="/contact"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    href="/contact"
                    className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Implementation",
                description: "Fast deployment with minimal disruption"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level security and compliance"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "95+ certified professionals"
              },
              {
                icon: BarChart3,
                title: "Proven Results",
                description: "Average 40% cost reduction"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group for their IT needs. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}