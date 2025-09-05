import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  HardDrive,
  Package,
  Smartphone,
  Users,
  Globe,
  GraduationCap,
  Laptop,
  Monitor,
  FileText,
  DollarSign
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Auto-scaling Solutions",
      "Disaster Recovery"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Zero-Trust Architecture",
      "Compliance & Risk Management",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes",
    icon: Zap,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Performance Optimization",
      "Automated Testing",
      "Deployment Automation"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Database Management",
    description: "Optimize and secure your data infrastructure",
    icon: Database,
    features: [
      "Database Design & Optimization",
      "Data Migration Services",
      "Backup & Recovery Solutions",
      "Performance Tuning",
      "Data Security & Encryption",
      "Cloud Database Setup"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Network Solutions",
    description: "Robust networking infrastructure for seamless connectivity",
    icon: Network,
    features: [
      "Network Design & Implementation",
      "VPN & Remote Access",
      "Load Balancing",
      "Network Security",
      "Monitoring & Management",
      "Cloud Networking"
    ],
    price: "Starting at $1,000/month"
  },
  {
    title: "System Administration",
    description: "Comprehensive system management and maintenance",
    icon: Server,
    features: [
      "Server Setup & Configuration",
      "System Monitoring",
      "User Management",
      "Backup Solutions",
      "Performance Optimization",
      "24/7 System Support"
    ],
    price: "Starting at $800/month"
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration to cloud platforms with zero downtime and data integrity",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration",
      "Data Migration & Validation",
      "Application Modernization",
      "Cost Optimization",
      "Security & Compliance",
      "Performance Tuning",
      "Training & Documentation",
      "24/7 Support"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$3,500-8,000/month"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy Development",
      "Technology Assessment",
      "Digital Transformation Planning",
      "Vendor Selection",
      "Budget Planning",
      "Risk Assessment",
      "Implementation Roadmap",
      "Change Management"
    ],
    price: "Starting at $200/hour",
    marketPrice: "$250-500/hour"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT infrastructure management and support services",
    icon: Shield,
    features: [
      "24/7 Monitoring & Support",
      "Proactive Maintenance",
      "Help Desk Services",
      "Security Management",
      "Backup & Recovery",
      "Software Updates",
      "Performance Optimization",
      "Compliance Management"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,500-4,000/month"
  },
  {
    title: "Network Security",
    description: "Advanced network security solutions and threat protection",
    icon: Shield,
    features: [
      "Firewall Configuration",
      "Intrusion Detection",
      "VPN Setup & Management",
      "Network Monitoring",
      "Threat Intelligence",
      "Security Auditing",
      "Incident Response",
      "Compliance Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-5,000/month"
  },
  {
    title: "Data Backup & Recovery",
    description: "Comprehensive data protection and disaster recovery solutions",
    icon: HardDrive,
    features: [
      "Automated Backup Systems",
      "Disaster Recovery Planning",
      "Data Encryption",
      "Offsite Storage",
      "Recovery Testing",
      "Compliance Backup",
      "Cloud Backup Solutions",
      "24/7 Monitoring"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,000-3,000/month"
  },
  {
    title: "Email & Communication Systems",
    description: "Enterprise email and communication platform setup and management",
    icon: Mail,
    features: [
      "Email Server Setup",
      "Microsoft 365 Migration",
      "Google Workspace Setup",
      "Email Security",
      "Spam Filtering",
      "Archive & Compliance",
      "Mobile Device Management",
      "User Training"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,200-3,500/month"
  },
  {
    title: "Virtualization Services",
    description: "Server and desktop virtualization solutions for improved efficiency",
    icon: Server,
    features: [
      "VMware & Hyper-V Setup",
      "Virtual Desktop Infrastructure",
      "Server Consolidation",
      "Resource Optimization",
      "High Availability",
      "Disaster Recovery",
      "Performance Monitoring",
      "Cost Optimization"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "IT Asset Management",
    description: "Complete IT asset lifecycle management and tracking",
    icon: Package,
    features: [
      "Asset Discovery & Inventory",
      "License Management",
      "Lifecycle Tracking",
      "Cost Optimization",
      "Compliance Reporting",
      "Asset Disposal",
      "Software Auditing",
      "Contract Management"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,500-4,000/month"
  },
  {
    title: "Mobile Device Management",
    description: "Enterprise mobile device security and management solutions",
    icon: Smartphone,
    features: [
      "Device Enrollment",
      "Security Policies",
      "App Management",
      "Remote Wipe",
      "Compliance Monitoring",
      "Location Tracking",
      "Data Encryption",
      "User Training"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,200-3,000/month"
  },
  {
    title: "IT Support & Help Desk",
    description: "Professional IT support and help desk services",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Ticket Management",
      "Knowledge Base",
      "User Training",
      "Problem Resolution",
      "SLA Management",
      "Performance Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-5,000/month"
  },
  {
    title: "Software Development Services",
    description: "Custom software development and application modernization",
    icon: Code,
    features: [
      "Custom Application Development",
      "Legacy System Modernization",
      "API Development",
      "Database Design",
      "Quality Assurance",
      "Documentation",
      "Training & Support",
      "Maintenance & Updates"
    ],
    price: "Starting at $150/hour",
    marketPrice: "$200-400/hour"
  },
  {
    title: "Database Administration",
    description: "Database design, optimization, and management services",
    icon: Database,
    features: [
      "Database Design & Setup",
      "Performance Tuning",
      "Backup & Recovery",
      "Security Management",
      "Migration Services",
      "Monitoring & Maintenance",
      "Capacity Planning",
      "Disaster Recovery"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "Web Development & Hosting",
    description: "Website development, hosting, and maintenance services",
    icon: Globe,
    features: [
      "Website Design & Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Web Hosting",
      "SSL Certificates",
      "Performance Optimization",
      "SEO Services",
      "Maintenance & Updates"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,500-4,000/month"
  },
  {
    title: "IT Training & Education",
    description: "Comprehensive IT training programs for teams and individuals",
    icon: GraduationCap,
    features: [
      "Technology Training",
      "Certification Programs",
      "Security Awareness",
      "Software Training",
      "Best Practices",
      "Custom Training Programs",
      "Online Learning Platform",
      "Assessment & Testing"
    ],
    price: "Starting at $200/hour",
    marketPrice: "$250-500/hour"
  },
  {
    title: "IT Compliance & Auditing",
    description: "Compliance management and IT auditing services",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Audit Preparation",
      "Policy Development",
      "Risk Assessment",
      "Documentation",
      "Remediation Planning",
      "Training Programs",
      "Ongoing Monitoring"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "Cloud Security Services",
    description: "Comprehensive cloud security and compliance solutions",
    icon: Shield,
    features: [
      "Cloud Security Assessment",
      "Identity & Access Management",
      "Data Encryption",
      "Compliance Monitoring",
      "Threat Detection",
      "Security Automation",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$3,500-8,000/month"
  },
  {
    title: "IT Infrastructure Design",
    description: "Custom IT infrastructure design and implementation",
    icon: Network,
    features: [
      "Infrastructure Planning",
      "Architecture Design",
      "Technology Selection",
      "Implementation Planning",
      "Cost Analysis",
      "Scalability Planning",
      "Security Integration",
      "Documentation"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$4,000-10,000/month"
  },
  {
    title: "Remote Work Solutions",
    description: "Complete remote work infrastructure and support",
    icon: Laptop,
    features: [
      "VPN Setup",
      "Remote Desktop Solutions",
      "Collaboration Tools",
      "Security Policies",
      "Device Management",
      "Network Optimization",
      "Support Services",
      "Training Programs"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-5,000/month"
  },
  {
    title: "IT Project Management",
    description: "Professional IT project management and implementation",
    icon: Settings,
    features: [
      "Project Planning",
      "Resource Management",
      "Timeline Management",
      "Risk Assessment",
      "Quality Control",
      "Stakeholder Communication",
      "Budget Management",
      "Documentation"
    ],
    price: "Starting at $200/hour",
    marketPrice: "$250-500/hour"
  },
  {
    title: "IT Vendor Management",
    description: "IT vendor selection, management, and optimization",
    icon: Users,
    features: [
      "Vendor Assessment",
      "Contract Negotiation",
      "Performance Monitoring",
      "Cost Optimization",
      "Relationship Management",
      "Service Level Management",
      "Risk Assessment",
      "Compliance Monitoring"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,500-4,000/month"
  },
  {
    title: "IT Disaster Recovery",
    description: "Comprehensive disaster recovery planning and implementation",
    icon: HardDrive,
    features: [
      "Disaster Recovery Planning",
      "Backup Strategy",
      "Recovery Testing",
      "Business Continuity",
      "RTO/RPO Planning",
      "Documentation",
      "Training Programs",
      "Ongoing Maintenance"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "IT Performance Optimization",
    description: "System performance analysis and optimization services",
    icon: Zap,
    features: [
      "Performance Analysis",
      "Bottleneck Identification",
      "Optimization Implementation",
      "Capacity Planning",
      "Monitoring Setup",
      "Performance Testing",
      "Documentation",
      "Ongoing Monitoring"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "IT Integration Services",
    description: "System integration and API development services",
    icon: Network,
    features: [
      "System Integration",
      "API Development",
      "Data Synchronization",
      "Workflow Automation",
      "Testing & Validation",
      "Documentation",
      "Training & Support",
      "Maintenance"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,000-7,000/month"
  },
  {
    title: "IT Security Assessment",
    description: "Comprehensive security assessment and penetration testing",
    icon: Shield,
    features: [
      "Security Assessment",
      "Penetration Testing",
      "Vulnerability Scanning",
      "Risk Analysis",
      "Remediation Planning",
      "Compliance Review",
      "Security Training",
      "Ongoing Monitoring"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$4,000-10,000/month"
  },
  {
    title: "IT Cost Optimization",
    description: "IT cost analysis and optimization strategies",
    icon: DollarSign,
    features: [
      "Cost Analysis",
      "Budget Optimization",
      "Resource Utilization",
      "Vendor Negotiation",
      "Technology Rationalization",
      "ROI Analysis",
      "Implementation Planning",
      "Ongoing Monitoring"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-5,000/month"
  },
  {
    title: "IT Documentation Services",
    description: "Comprehensive IT documentation and knowledge management",
    icon: FileText,
    features: [
      "System Documentation",
      "Process Documentation",
      "Knowledge Base Creation",
      "User Manuals",
      "Technical Specifications",
      "Compliance Documentation",
      "Version Control",
      "Maintenance & Updates"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,500-4,000/month"
  },
  {
    title: "IT Change Management",
    description: "IT change management and implementation services",
    icon: Settings,
    features: [
      "Change Planning",
      "Impact Analysis",
      "Risk Assessment",
      "Implementation Management",
      "Rollback Planning",
      "Communication",
      "Training Programs",
      "Post-Implementation Review"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "IT Monitoring & Alerting",
    description: "Comprehensive IT monitoring and alerting solutions",
    icon: Monitor,
    features: [
      "System Monitoring",
      "Performance Monitoring",
      "Alert Management",
      "Dashboard Creation",
      "Reporting",
      "Incident Response",
      "Capacity Planning",
      "24/7 Support"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month"
  },
  {
    title: "IT Governance",
    description: "IT governance framework and implementation services",
    icon: Shield,
    features: [
      "Governance Framework",
      "Policy Development",
      "Process Definition",
      "Compliance Management",
      "Risk Management",
      "Performance Measurement",
      "Training Programs",
      "Ongoing Support"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$3,500-8,000/month"
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in IT infrastructure",
    icon: "👥"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support for your systems",
    icon: "🛡️"
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 500+ IT projects across industries",
    icon: "✅"
  },
  {
    title: "Cost-Effective",
    description: "Transparent pricing with no hidden costs or surprises",
    icon: "💰"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and system administration. Expert solutions for modern businesses."
      keywords="IT services, cloud computing, cybersecurity, DevOps, system administration, network solutions"
      canonical="https://ziontechgroup.com/it-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive 
              <span className="text-blue-400"> IT Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your technology infrastructure with our 31+ expert IT services. 
              From cloud migration to cybersecurity, managed services, and digital transformation, 
              we provide end-to-end solutions that drive business growth and operational efficiency.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their IT needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}