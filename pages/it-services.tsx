import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Monitor,
  Smartphone,
  Laptop,
  Settings,
  Lock,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Users,
  BarChart3,
  Code,
  FileText,
  Mail,
  Phone,
  Building,
  Car,
  Heart,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Target,
  TrendingUp,
  Eye,
  Bot,
  MessageSquare,
  Search,
  Video,
  Image,
  Mic,
  Calendar,
  MapPin,
  PhoneCall,
  Mail as MailIcon,
  MessageCircle,
  Headphones,
  HelpCircle,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Database as DatabaseIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  BarChart3 as BarChart3Icon,
  Code as CodeIcon,
  FileText as FileTextIcon,
  Mail as MailIcon2,
  Phone as PhoneIcon,
  Building as BuildingIcon,
  Car as CarIcon,
  Heart as HeartIcon,
  ShoppingCart as ShoppingCartIcon,
  BookOpen as BookOpenIcon,
  Home as HomeIcon,
  Gamepad2 as Gamepad2Icon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Banknote as BanknoteIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Eye as EyeIcon,
  Bot as BotIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Mic as MicIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  PhoneCall as PhoneCallIcon,
  MessageCircle as MessageCircleIcon,
  Headphones as HeadphonesIcon,
  HelpCircle as HelpCircleIcon,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization.',

---
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',

    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
    pricing: '$5,000 - $50,000 project',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats.',
    icon: Shield,
    features: ['Security Assessment', 'Penetration Testing', 'Firewall Configuration', 'Incident Response'],
    pricing: '$3,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    benefits: ['Protection from Cyber Attacks', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Performance Optimization', 'Troubleshooting'],
    pricing: '$2,000 - $30,000 project',
    category: 'Infrastructure',
    popular: true,
    benefits: ['Reliable Connectivity', 'Improved Performance', 'Scalable Architecture', 'Reduced Downtime']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services for your organization.',
    icon: Headphones,
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$500 - $3,000/month',
    category: 'Support',
    popular: true,
    benefits: ['Minimized Downtime', 'Expert Assistance', 'Proactive Monitoring', 'Cost Efficiency']
  },
  {
    title: 'Database Management',
    description: 'Database design, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
    pricing: '$1,500 - $15,000 project',
    category: 'Data Management',
    benefits: ['Optimized Performance', 'Data Security', 'Reliable Backups', 'Scalable Solutions']
  },
  {
    title: 'Server Administration',
    description: 'Complete server management including setup, monitoring, and maintenance.',
    icon: Server,
    features: ['Server Setup', 'Performance Monitoring', 'Security Updates', 'Disaster Recovery'],
    pricing: '$800 - $5,000/month',
    category: 'Infrastructure',
    benefits: ['Reliable Operations', 'Proactive Maintenance', 'Security Updates', 'Cost Savings']
  },
  {
    title: 'DevOps & Automation',
    description: 'DevOps implementation with CI/CD pipelines and infrastructure automation.',
    icon: GitBranch,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Deployment Automation'],
    pricing: '$5,000 - $40,000 project',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Improved Collaboration', 'Scalable Processes']
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Testing & Validation'],
    pricing: '$1,000 - $10,000 setup',
    category: 'Data Protection',
    benefits: ['Data Security', 'Business Continuity', 'Compliance', 'Peace of Mind']
  },
  {
    title: 'Email & Communication Systems',
    description: 'Email server setup, migration, and communication platform management.',
    icon: Mail,
    features: ['Email Migration', 'Spam Protection', 'Mobile Sync', 'Archiving'],
    pricing: '$1,200 - $8,000 project',
    category: 'Communication',
    benefits: ['Reliable Email', 'Enhanced Security', 'Mobile Access', 'Reduced Spam']
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    popular: true,
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Risk Mitigation', 'Technology Roadmap']
  },
  {
    title: 'Software Installation & Licensing',
    description: 'Software deployment, licensing management, and compliance monitoring.',
    icon: Package,
    features: ['Software Deployment', 'License Management', 'Compliance Monitoring', 'Updates & Patches'],
    pricing: '$500 - $5,000 project',
    category: 'Software Management',
    benefits: ['Compliance Assurance', 'Cost Control', 'Centralized Management', 'Automated Updates']
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe'],
    pricing: '$2 - $10/device/month',
    category: 'Mobile Management',
    benefits: ['Enhanced Security', 'Centralized Control', 'Cost Management', 'Compliance']
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset tracking, management, and lifecycle optimization.',
    icon: Layers,
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Reporting'],
    pricing: '$1,000 - $8,000 setup',
    category: 'Asset Management',
    benefits: ['Cost Optimization', 'Compliance', 'Asset Visibility', 'Lifecycle Planning']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security solutions including firewalls and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Security Monitoring'],
    pricing: '$2,000 - $20,000 setup',
    category: 'Security',
    benefits: ['Network Protection', 'Threat Detection', 'Secure Remote Access', 'Compliance']
  },
  {
    title: 'IT Training & Documentation',
    description: 'Staff training and comprehensive IT documentation services.',
    icon: BookOpen,
    features: ['Staff Training', 'Documentation Creation', 'Process Optimization', 'Knowledge Transfer'],
    pricing: '$100 - $200/hour',
    category: 'Training',
    benefits: ['Improved Productivity', 'Reduced Support Tickets', 'Knowledge Retention', 'Process Efficiency']
  },
  {
    title: 'Virtual Desktop Infrastructure (VDI)',
    description: 'VDI implementation for secure, scalable desktop virtualization.',
    icon: Monitor,
    features: ['VDI Setup', 'Performance Optimization', 'Security Configuration', 'User Management'],
    pricing: '$5,000 - $35,000 project',
    category: 'Virtualization',
    benefits: ['Centralized Management', 'Enhanced Security', 'Cost Savings', 'Flexible Access']
  },
  {
    title: 'IT Compliance & Auditing',
    description: 'Compliance assessment and auditing services for various industry standards.',
    icon: CheckCircle,
    features: ['Compliance Assessment', 'Audit Preparation', 'Gap Analysis', 'Remediation Planning'],
    pricing: '$3,000 - $25,000 project',
    category: 'Compliance',
    benefits: ['Regulatory Compliance', 'Risk Mitigation', 'Audit Readiness', 'Process Improvement']
  },
  {
    title: 'IT Project Management',
    description: 'Professional project management for IT implementations and upgrades.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management'],
    pricing: '$1,500 - $5,000/month',
    category: 'Project Management',
    benefits: ['On-time Delivery', 'Budget Control', 'Quality Assurance', 'Stakeholder Communication']
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive analysis and optimization of IT costs and resources.',
    icon: TrendingUp,
    features: ['Cost Analysis', 'Resource Optimization', 'Vendor Negotiation', 'ROI Tracking'],
    pricing: '$2,000 - $15,000 project',
    category: 'Cost Optimization',
    benefits: ['Reduced Costs', 'Improved ROI', 'Resource Efficiency', 'Budget Optimization']
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Support',
  'Data Management',
  'DevOps',
  'Data Protection',
  'Communication',
  'Consulting',
  'Software Management',
  'Mobile Management',
  'Asset Management',
  'Training',
  'Virtualization',
  'Compliance',
  'Project Management',
  'Cost Optimization'

---
const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }

];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified IT professionals with extensive experience"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Comprehensive security measures and compliance"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations"
  }
];

const itServices = [
  {
    title: "Cloud Migration & Management",
    description: "Seamless migration to cloud platforms with ongoing management and optimization",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP Migration",
      "Cloud Architecture Design",
      "Cost Optimization",
      "Security Implementation",
      "Disaster Recovery",
      "24/7 Monitoring"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance"
    ]
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your business from cyber threats",
    icon: Shield,
    features: [
      "Security Assessment",
      "Firewall Configuration",
      "Intrusion Detection",
      "Vulnerability Scanning",
      "Security Training",
      "Incident Response"
    ],
    color: "from-red-500 to-pink-500",
    benefits: [
      "Protection from cyber attacks",
      "Compliance with regulations",
      "Reduced security risks",
      "Peace of mind"
    ]
  },
  {
    title: "Network Infrastructure",
    description: "Design, implementation, and management of robust network infrastructure",
    icon: Network,
    features: [
      "Network Design & Planning",
      "Router & Switch Configuration",
      "Wireless Solutions",
      "VPN Implementation",
      "Network Monitoring",
      "Performance Optimization"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Improved connectivity",
      "Better performance",
      "Enhanced security",
      "Reduced downtime"
    ]
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 technical support and helpdesk services for your organization",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Hardware Maintenance",
      "Software Installation",
      "User Training",
      "Issue Resolution"
    ],
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Reduced downtime",
      "Faster issue resolution",
      "Improved productivity",
      "Cost-effective support"
    ]
  },
  {
    title: "Database Management",
    description: "Expert database design, optimization, and management services",
    icon: Database,
    features: [
      "Database Design",
      "Performance Tuning",
      "Backup & Recovery",
      "Data Migration",
      "Security Implementation",
      "Monitoring & Maintenance"
    ],
    color: "from-orange-500 to-yellow-500",
    benefits: [
      "Improved data performance",
      "Enhanced data security",
      "Better data integrity",
      "Reduced maintenance costs"
    ]
  },
  {
    title: "System Integration",
    description: "Seamless integration of disparate systems and applications",
    icon: Settings,
    features: [
      "API Development",
      "System Integration",
      "Data Synchronization",
      "Workflow Automation",
      "Legacy System Migration",
      "Custom Solutions"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Better data flow",
      "Reduced manual work"
    ]
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: Users,
    description: "HIPAA-compliant IT solutions for healthcare organizations",
    solutions: ["EMR Integration", "Telemedicine Platforms", "Data Security", "Compliance Management"]
  },
  {
    name: "Finance",
    icon: BarChart3,
    description: "Secure IT infrastructure for financial services",
    solutions: ["PCI Compliance", "Fraud Detection", "Risk Management", "Regulatory Reporting"]
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    description: "Industrial IT solutions for manufacturing operations",
    solutions: ["IoT Integration", "Supply Chain Management", "Quality Control", "Production Monitoring"]
  },
  {
    name: "Education",
    icon: Globe,
    description: "Technology solutions for educational institutions",
    solutions: ["Learning Management Systems", "Student Information Systems", "Campus Networks", "Digital Classrooms"]
  }
];

const technologies = [
  {
    category: "Cloud Platforms",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud"]
  },
  {
    category: "Operating Systems",
    items: ["Windows Server", "Linux (Ubuntu, CentOS, RHEL)", "macOS", "VMware vSphere", "Hyper-V"]
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
  },
  {
    category: "Security Tools",
    items: ["Firewalls (Cisco, Fortinet)", "Antivirus Solutions", "SIEM Systems", "VPN Solutions", "Encryption Tools"]
  },
  {
    category: "Monitoring & Management",
    items: ["Nagios", "Zabbix", "SolarWinds", "PRTG", "Splunk"]
  },
  {
    category: "Virtualization",
    items: ["VMware vSphere", "Microsoft Hyper-V", "Citrix XenServer", "Docker", "Kubernetes"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "Comprehensive analysis of your current IT infrastructure and requirements"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Professional implementation with minimal business disruption"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing support and maintenance to ensure optimal performance"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Improved Efficiency",
    description: "Streamlined IT operations and automated processes boost productivity by up to 35%"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Comprehensive security measures protect your business from cyber threats and data breaches"
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "Reduce IT costs through efficient resource utilization and strategic technology investments"
  },
  {
    icon: Users,
    title: "Better Support",
    description: "24/7 technical support ensures minimal downtime and faster issue resolution"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and 24/7 support. Expert team delivering reliable technology solutions."
      keywords="IT services, cloud migration, cybersecurity, network infrastructure, IT support, DevOps, database management"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support to keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and ensure operational excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {itServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{service.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through expertise, reliability, and customer-focused solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and long-term success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive information technology solutions to modernize your infrastructure, 
              enhance security, and drive business growth through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              End-to-end IT services designed to optimize your technology infrastructure, 
              enhance security, and support your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions are tailored to meet the specific requirements and compliance 
              standards of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to deliver 
              robust and scalable IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions deliver measurable results and provide a solid foundation for your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to IT service delivery that ensures successful implementation and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and create a comprehensive solution that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}