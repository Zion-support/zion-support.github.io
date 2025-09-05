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
  Monitor,
  Users,
  GraduationCap,
  DollarSign,
  Rocket
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
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["99.9% uptime", "50% cost reduction", "Instant scalability"]
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
    price: "Starting at $2,000/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["Protect against 99.9% of threats", "Compliance guaranteed", "24/7 monitoring"]
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
    price: "Starting at $1,500/month",
    marketPrice: "$2,200-5,500/month",
    benefits: ["Deploy 10x faster", "Reduce errors by 80%", "Improve team productivity"]
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
    price: "Starting at $1,200/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["Improve performance by 300%", "Zero data loss", "Automated backups"]
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
    price: "Starting at $1,000/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["99.9% network uptime", "Secure remote access", "Optimized performance"]
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
    price: "Starting at $800/month",
    marketPrice: "$1,200-3,000/month",
    benefits: ["Proactive maintenance", "24/7 support", "Prevent downtime"]
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy Development",
      "Digital Transformation Planning",
      "Technology Roadmap Creation",
      "Vendor Selection & Management",
      "IT Budget Planning",
      "Change Management"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Align IT with business goals", "Reduce technology costs", "Future-proof your IT"]
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management and support for your business",
    icon: Server,
    features: [
      "24/7 Help Desk Support",
      "Proactive Monitoring",
      "Patch Management",
      "Security Updates",
      "Performance Optimization",
      "Incident Response"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,200-5,500/month",
    benefits: ["Reduce IT costs by 40%", "Improve system reliability", "Focus on core business"]
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration to cloud platforms with zero downtime",
    icon: Cloud,
    features: [
      "Cloud Readiness Assessment",
      "Migration Planning & Execution",
      "Data Migration",
      "Application Modernization",
      "Post-migration Support",
      "Cost Optimization"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Zero downtime migration", "Reduce costs by 30%", "Improve scalability"]
  },
  {
    title: "Disaster Recovery & Backup",
    description: "Comprehensive backup and disaster recovery solutions",
    icon: Shield,
    features: [
      "Automated Backup Systems",
      "Disaster Recovery Planning",
      "Business Continuity",
      "Data Replication",
      "Recovery Testing",
      "Emergency Response"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["99.9% data recovery", "Minimize downtime", "Compliance guaranteed"]
  },
  {
    title: "IT Security Auditing",
    description: "Comprehensive security assessments and compliance auditing",
    icon: Shield,
    features: [
      "Security Risk Assessment",
      "Compliance Auditing",
      "Vulnerability Scanning",
      "Penetration Testing",
      "Security Policy Development",
      "Staff Training"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,200-7,500/month",
    benefits: ["Identify security gaps", "Ensure compliance", "Protect sensitive data"]
  },
  {
    title: "Network Security",
    description: "Advanced network security solutions and monitoring",
    icon: Shield,
    features: [
      "Firewall Configuration",
      "Intrusion Detection",
      "Network Monitoring",
      "VPN Setup",
      "Access Control",
      "Threat Prevention"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$2,300-5,500/month",
    benefits: ["Block 99.9% of threats", "Real-time monitoring", "Secure remote access"]
  },
  {
    title: "IT Infrastructure Monitoring",
    description: "24/7 monitoring and alerting for all IT infrastructure",
    icon: Monitor,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Automated Alerting",
      "Capacity Planning",
      "Trend Analysis",
      "Custom Dashboards"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,800-4,200/month",
    benefits: ["Prevent issues before they occur", "Improve system performance", "Reduce downtime"]
  },
  {
    title: "IT Support & Help Desk",
    description: "Professional IT support and help desk services",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Issue Resolution",
      "User Training",
      "Software Installation",
      "Hardware Support"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["Fast response times", "Expert technical support", "Reduce IT burden"]
  },
  {
    title: "IT Asset Management",
    description: "Complete IT asset lifecycle management and optimization",
    icon: Settings,
    features: [
      "Asset Inventory",
      "License Management",
      "Lifecycle Planning",
      "Cost Optimization",
      "Compliance Tracking",
      "Disposal Management"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,000-4,800/month",
    benefits: ["Reduce IT costs by 25%", "Ensure compliance", "Optimize asset utilization"]
  },
  {
    title: "IT Training & Certification",
    description: "Comprehensive IT training programs for your team",
    icon: GraduationCap,
    features: [
      "Technical Training Programs",
      "Certification Preparation",
      "Security Awareness Training",
      "Software Training",
      "Best Practices Workshops",
      "Ongoing Support"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improve team skills", "Increase productivity", "Reduce security risks"]
  },
  {
    title: "IT Project Management",
    description: "Professional project management for IT implementations",
    icon: Settings,
    features: [
      "Project Planning & Execution",
      "Resource Management",
      "Timeline Management",
      "Risk Assessment",
      "Quality Assurance",
      "Stakeholder Communication"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["On-time delivery", "Within budget", "High-quality results"]
  },
  {
    title: "IT Compliance & Governance",
    description: "Ensure compliance with industry standards and regulations",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Audit Preparation",
      "Risk Management",
      "Documentation",
      "Training & Awareness"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$3,500-8,500/month",
    benefits: ["Ensure compliance", "Reduce audit risks", "Protect business reputation"]
  },
  {
    title: "IT Cost Optimization",
    description: "Analyze and optimize your IT spending and resource utilization",
    icon: DollarSign,
    features: [
      "Cost Analysis & Auditing",
      "Resource Optimization",
      "Vendor Management",
      "Contract Negotiation",
      "ROI Analysis",
      "Budget Planning"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Reduce IT costs by 30%", "Improve ROI", "Optimize resource usage"]
  },
  {
    title: "IT Innovation & Digital Transformation",
    description: "Drive innovation and digital transformation initiatives",
    icon: Rocket,
    features: [
      "Digital Strategy Development",
      "Technology Innovation",
      "Process Automation",
      "Digital Tools Implementation",
      "Change Management",
      "Innovation Workshops"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Stay competitive", "Improve efficiency", "Drive growth"]
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