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
  MapPin
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Cloud Infrastructure & Migration",
    description: "Comprehensive cloud solutions with seamless migration and optimization services",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration & Setup",
      "Kubernetes & Container Orchestration",
      "Serverless Architecture Implementation",
      "Cloud Security & Compliance (SOC2, HIPAA)",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery & Backup Solutions",
      "Cost Optimization & Monitoring",
      "Multi-cloud Strategy & Management"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Reduce infrastructure costs by 40%", "Improve scalability by 300%", "Ensure 99.9% uptime"]
  },
  {
    title: "Advanced Cybersecurity Solutions",
    description: "Enterprise-grade security services protecting against modern cyber threats",
    icon: Shield,
    features: [
      "Security Audits & Risk Assessments",
      "Penetration Testing & Vulnerability Scanning",
      "Zero-Trust Architecture Implementation",
      "SIEM & SOC Services",
      "Incident Response & Forensics",
      "Compliance Management (GDPR, CCPA, HIPAA)",
      "Security Awareness Training",
      "Threat Intelligence & Monitoring"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Reduce security incidents by 90%", "Ensure compliance 100%", "Protect against 99.9% of threats"]
  },
  {
    title: "DevOps & CI/CD Automation",
    description: "Modern DevOps practices with automated deployment and monitoring",
    icon: Zap,
    features: [
      "CI/CD Pipeline Design & Implementation",
      "Infrastructure as Code (Terraform, Ansible)",
      "Container Orchestration (Docker, Kubernetes)",
      "Monitoring & Logging (ELK, Prometheus)",
      "Performance Optimization & Tuning",
      "Automated Testing & Quality Gates",
      "GitOps & Version Control",
      "Disaster Recovery Automation"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Deploy 10x faster", "Reduce deployment errors by 95%", "Improve team productivity by 60%"]
  },
  {
    title: "Database & Data Management",
    description: "Comprehensive database solutions with optimization and data analytics",
    icon: Database,
    features: [
      "Database Design & Architecture",
      "Performance Tuning & Optimization",
      "Data Migration & ETL Processes",
      "Backup & Disaster Recovery",
      "Data Security & Encryption",
      "Cloud Database Setup (RDS, Aurora, BigQuery)",
      "Data Analytics & Business Intelligence",
      "Data Governance & Compliance"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$3,000-7,500/month",
    benefits: ["Improve query performance by 80%", "Reduce data storage costs by 50%", "Ensure 99.99% data availability"]
  },
  {
    title: "Network Infrastructure & Security",
    description: "Robust networking solutions with advanced security and monitoring",
    icon: Network,
    features: [
      "Network Design & Architecture",
      "SD-WAN & VPN Solutions",
      "Load Balancing & Traffic Management",
      "Network Security & Firewall Management",
      "Wireless Network Setup & Optimization",
      "Network Monitoring & Analytics",
      "Cloud Networking (VPC, Transit Gateway)",
      "Network Performance Optimization"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improve network speed by 200%", "Reduce downtime by 85%", "Enhance security by 95%"]
  },
  {
    title: "System Administration & Support",
    description: "Comprehensive system management with 24/7 monitoring and support",
    icon: Server,
    features: [
      "Server Setup & Configuration (Linux, Windows)",
      "System Monitoring & Alerting",
      "User Management & Access Control",
      "Backup & Recovery Solutions",
      "Performance Monitoring & Tuning",
      "Patch Management & Updates",
      "24/7 Technical Support",
      "System Documentation & Training"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["Ensure 99.9% system uptime", "Reduce IT costs by 40%", "Improve system performance by 70%"]
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy & Roadmap Development",
      "Technology Assessment & Recommendations",
      "Digital Transformation Planning",
      "Vendor Management & Procurement",
      "IT Budget Planning & Optimization",
      "Technology Training & Change Management",
      "Compliance & Governance Consulting",
      "IT Project Management"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["Align IT with business goals", "Reduce technology costs by 30%", "Accelerate digital transformation"]
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management and support for small to medium businesses",
    icon: CheckCircle,
    features: [
      "24/7 Help Desk Support",
      "Proactive System Monitoring",
      "Software License Management",
      "Security Patch Management",
      "Backup & Disaster Recovery",
      "Hardware & Software Procurement",
      "IT Asset Management",
      "Monthly Reporting & Analytics"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Reduce IT overhead by 60%", "Improve system reliability by 90%", "Free up internal resources"]
  },
  {
    title: "Cloud Security & Compliance",
    description: "Specialized cloud security services ensuring compliance and data protection",
    icon: Shield,
    features: [
      "Cloud Security Architecture Review",
      "Identity & Access Management (IAM)",
      "Data Encryption & Key Management",
      "Compliance Auditing (SOC2, ISO27001)",
      "Security Monitoring & Incident Response",
      "Vulnerability Assessment & Remediation",
      "Security Training & Awareness",
      "Regulatory Compliance Support"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Ensure 100% compliance", "Reduce security risks by 95%", "Protect sensitive data"]
  },
  {
    title: "IT Infrastructure Modernization",
    description: "Modernize legacy systems and infrastructure for improved performance and security",
    icon: Server,
    features: [
      "Legacy System Assessment & Migration",
      "Infrastructure Modernization Planning",
      "Cloud Migration Strategy & Execution",
      "Application Modernization",
      "Data Center Optimization",
      "Network Infrastructure Upgrades",
      "Security Infrastructure Updates",
      "Performance Optimization"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$5,500-15,000/month",
    benefits: ["Improve system performance by 200%", "Reduce maintenance costs by 50%", "Enhance security posture"]
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
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  )}
                </div>
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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