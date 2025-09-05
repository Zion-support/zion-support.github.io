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
  Brain,
  Cpu,
  Wifi,
  Globe,
  Package,
  DollarSign,
  Smartphone,
  Monitor,
  Laptop,
  TreePine
} from 'lucide-react';
import Layout from '../components/Layout';

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
    description: "Seamless migration to cloud platforms with zero downtime",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP Migration",
      "Data Migration Planning",
      "Application Modernization",
      "Security & Compliance",
      "Cost Optimization",
      "Performance Tuning"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Implement zero trust security model for enhanced protection",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Network Segmentation",
      "Device Trust Verification",
      "Continuous Monitoring",
      "Policy Enforcement",
      "Threat Detection"
    ],
    price: "Starting at $3,200/month"
  },
  {
    title: "AI-Powered IT Operations",
    description: "Intelligent IT operations with predictive analytics and automation",
    icon: Brain,
    features: [
      "Predictive Maintenance",
      "Automated Incident Response",
      "Performance Optimization",
      "Capacity Planning",
      "Anomaly Detection",
      "Root Cause Analysis"
    ],
    price: "Starting at $2,800/month"
  },
  {
    title: "Edge Computing Solutions",
    description: "Deploy computing resources closer to data sources for better performance",
    icon: Network,
    features: [
      "Edge Server Deployment",
      "IoT Integration",
      "Real-time Processing",
      "Low Latency Solutions",
      "Distributed Computing",
      "Edge Security"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "Quantum Computing Integration",
    description: "Prepare your infrastructure for quantum computing capabilities",
    icon: Cpu,
    features: [
      "Quantum-Ready Infrastructure",
      "Hybrid Classical-Quantum Systems",
      "Quantum Security Implementation",
      "Algorithm Development",
      "Performance Optimization",
      "Future-Proofing"
    ],
    price: "Starting at $5,500/month"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure blockchain networks and smart contract deployment",
    icon: Link,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "Cryptocurrency Integration",
      "DeFi Solutions",
      "NFT Platforms",
      "Security Auditing"
    ],
    price: "Starting at $3,500/month"
  },
  {
    title: "5G Network Implementation",
    description: "Deploy and optimize 5G networks for ultra-fast connectivity",
    icon: Wifi,
    features: [
      "5G Network Design",
      "Small Cell Deployment",
      "Network Optimization",
      "IoT Connectivity",
      "Performance Monitoring",
      "Security Implementation"
    ],
    price: "Starting at $4,200/month"
  },
  {
    title: "IoT Platform Development",
    description: "Comprehensive IoT solutions for connected devices and sensors",
    icon: Globe,
    features: [
      "Device Management",
      "Sensor Integration",
      "Data Processing",
      "Real-time Analytics",
      "Edge Computing",
      "Security & Privacy"
    ],
    price: "Starting at $2,600/month"
  },
  {
    title: "Microservices Architecture",
    description: "Transform monolithic applications into scalable microservices",
    icon: Settings,
    features: [
      "Application Decomposition",
      "API Gateway Setup",
      "Service Mesh Implementation",
      "Container Orchestration",
      "Monitoring & Logging",
      "Auto-scaling"
    ],
    price: "Starting at $3,000/month"
  },
  {
    title: "Data Center Modernization",
    description: "Upgrade and optimize data center infrastructure for efficiency",
    icon: Server,
    features: [
      "Hardware Modernization",
      "Virtualization",
      "Energy Efficiency",
      "Cooling Optimization",
      "Power Management",
      "Disaster Recovery"
    ],
    price: "Starting at $4,500/month"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamlessly manage on-premises and cloud resources",
    icon: Cloud,
    features: [
      "Multi-cloud Management",
      "Resource Optimization",
      "Cost Management",
      "Security Orchestration",
      "Compliance Monitoring",
      "Automated Scaling"
    ],
    price: "Starting at $2,800/month"
  },
  {
    title: "AI Infrastructure Setup",
    description: "Specialized infrastructure for AI and machine learning workloads",
    icon: Brain,
    features: [
      "GPU Cluster Setup",
      "ML Pipeline Infrastructure",
      "Data Lake Architecture",
      "Model Training Environment",
      "Inference Optimization",
      "Auto-scaling for ML"
    ],
    price: "Starting at $3,800/month"
  },
  {
    title: "Disaster Recovery Solutions",
    description: "Comprehensive disaster recovery and business continuity planning",
    icon: Shield,
    features: [
      "Backup Strategy Design",
      "Recovery Time Optimization",
      "Multi-site Replication",
      "Testing & Validation",
      "Documentation & Training",
      "24/7 Monitoring"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "Network Security Hardening",
    description: "Advanced network security measures and threat protection",
    icon: Shield,
    features: [
      "Firewall Configuration",
      "Intrusion Detection",
      "VPN Implementation",
      "Network Segmentation",
      "Threat Intelligence",
      "Security Monitoring"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "API Gateway Management",
    description: "Centralized API management and security for microservices",
    icon: Code,
    features: [
      "API Gateway Setup",
      "Rate Limiting",
      "Authentication & Authorization",
      "API Documentation",
      "Monitoring & Analytics",
      "Version Management"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Container Security",
    description: "Secure containerized applications and Kubernetes clusters",
    icon: Shield,
    features: [
      "Container Scanning",
      "Runtime Security",
      "Image Security",
      "Network Policies",
      "Secrets Management",
      "Compliance Monitoring"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Database Performance Tuning",
    description: "Optimize database performance and scalability",
    icon: Database,
    features: [
      "Query Optimization",
      "Index Tuning",
      "Memory Management",
      "Connection Pooling",
      "Replication Setup",
      "Monitoring & Alerting"
    ],
    price: "Starting at $1,600/month"
  },
  {
    title: "Mobile Device Management",
    description: "Secure mobile device management and enterprise mobility",
    icon: Smartphone,
    features: [
      "Device Enrollment",
      "Policy Enforcement",
      "App Management",
      "Remote Wiping",
      "Compliance Monitoring",
      "Security Controls"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "IT Asset Management",
    description: "Comprehensive IT asset tracking and lifecycle management",
    icon: Package,
    features: [
      "Asset Discovery",
      "License Management",
      "Lifecycle Tracking",
      "Cost Optimization",
      "Compliance Reporting",
      "Automated Updates"
    ],
    price: "Starting at $1,000/month"
  },
  {
    title: "Network Performance Monitoring",
    description: "Real-time network monitoring and performance optimization",
    icon: Monitor,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Alert Management",
      "Capacity Planning",
      "Troubleshooting Tools",
      "Historical Reporting"
    ],
    price: "Starting at $1,400/month"
  },
  {
    title: "IT Service Management",
    description: "Comprehensive IT service delivery and support management",
    icon: Settings,
    features: [
      "Service Desk Setup",
      "Incident Management",
      "Change Management",
      "Problem Management",
      "Service Level Management",
      "Knowledge Management"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Cloud Cost Optimization",
    description: "Optimize cloud spending and resource utilization",
    icon: DollarSign,
    features: [
      "Cost Analysis",
      "Resource Right-sizing",
      "Reserved Instance Planning",
      "Spot Instance Management",
      "Cost Allocation",
      "Budget Alerts"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "IT Compliance & Governance",
    description: "Ensure IT compliance with industry standards and regulations",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Audit Preparation",
      "Risk Management",
      "Documentation",
      "Training Programs"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Remote Work Infrastructure",
    description: "Secure and efficient remote work solutions",
    icon: Laptop,
    features: [
      "VPN Setup",
      "Remote Desktop Solutions",
      "Collaboration Tools",
      "Security Policies",
      "Device Management",
      "Performance Optimization"
    ],
    price: "Starting at $1,600/month"
  },
  {
    title: "IT Automation & Orchestration",
    description: "Automate IT processes and workflows for efficiency",
    icon: Zap,
    features: [
      "Process Automation",
      "Workflow Orchestration",
      "Script Development",
      "Integration Services",
      "Monitoring & Alerting",
      "Documentation"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "Green IT Solutions",
    description: "Sustainable and energy-efficient IT infrastructure",
    icon: TreePine,
    features: [
      "Energy Monitoring",
      "Efficiency Optimization",
      "Carbon Footprint Tracking",
      "Green Procurement",
      "Waste Reduction",
      "Sustainability Reporting"
    ],
    price: "Starting at $1,500/month"
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
              Transform your technology infrastructure with our expert IT services. 
              From cloud migration to cybersecurity, we provide end-to-end solutions 
              that drive business growth and operational efficiency.
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
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
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