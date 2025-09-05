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
  Cpu,
  Brain,
  Globe,
  Wifi,
  BarChart3
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

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
    price: "Starting at $800/month",
    marketPrice: "$1,200-2,500/month",
    benefits: ["99.9% uptime", "Proactive monitoring", "24/7 support"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Cloud Migration & Modernization",
    description: "Seamless migration to cloud platforms with modernization strategies",
    icon: Cloud,
    features: [
      "Legacy System Migration",
      "Cloud Architecture Design",
      "Data Migration & Validation",
      "Application Modernization",
      "Cost Optimization",
      "Security Implementation",
      "Performance Tuning",
      "Training & Support"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["50% cost reduction", "Improved scalability", "Enhanced security"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Implement comprehensive zero-trust security model for maximum protection",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Network Segmentation",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Threat Detection & Response",
      "Compliance Management",
      "Security Policy Implementation",
      "User Behavior Analytics"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["99.9% security", "Reduced attack surface", "Compliance ready"],
    setupTime: "6-12 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Deploy edge computing infrastructure for low-latency applications",
    icon: Network,
    features: [
      "Edge Server Deployment",
      "IoT Device Management",
      "Real-time Data Processing",
      "Edge Security Implementation",
      "Content Delivery Networks",
      "5G Integration",
      "Edge Analytics",
      "Remote Management"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["90% latency reduction", "Improved performance", "Cost efficiency"],
    setupTime: "3-6 weeks"
  },
  {
    title: "Quantum Computing Integration",
    description: "Prepare for quantum computing with hybrid quantum-classical solutions",
    icon: Cpu,
    features: [
      "Quantum Algorithm Development",
      "Hybrid Computing Solutions",
      "Quantum Security Implementation",
      "Performance Optimization",
      "Quantum Machine Learning",
      "Cryptographic Solutions",
      "Research & Development",
      "Future-Proofing Strategies"
    ],
    price: "Starting at $8,000/month",
    marketPrice: "$15,000-50,000/month",
    benefits: ["Future-ready technology", "Competitive advantage", "Breakthrough performance"],
    setupTime: "8-16 weeks"
  },
  {
    title: "AI Infrastructure & MLOps",
    description: "Complete AI infrastructure setup with machine learning operations",
    icon: Brain,
    features: [
      "AI/ML Platform Setup",
      "Model Training Infrastructure",
      "MLOps Pipeline Implementation",
      "Data Pipeline Automation",
      "Model Deployment & Monitoring",
      "A/B Testing Frameworks",
      "GPU/TPU Management",
      "Performance Optimization"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-18,000/month",
    benefits: ["Faster AI deployment", "Scalable ML operations", "Cost optimization"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Blockchain & Web3 Infrastructure",
    description: "Build and deploy blockchain solutions and Web3 infrastructure",
    icon: Globe,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "DeFi Platform Development",
      "NFT Marketplace Creation",
      "Web3 Integration",
      "Cryptocurrency Solutions",
      "Security Audits",
      "Compliance Management"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$7,000-25,000/month",
    benefits: ["Decentralized solutions", "Enhanced security", "Future-proof technology"],
    setupTime: "6-12 weeks"
  },
  {
    title: "IoT & Smart Device Management",
    description: "Comprehensive IoT solutions for connected devices and smart systems",
    icon: Wifi,
    features: [
      "IoT Device Integration",
      "Sensor Network Management",
      "Real-time Data Collection",
      "Edge Computing Implementation",
      "Device Security & Authentication",
      "Remote Monitoring & Control",
      "Data Analytics & Insights",
      "Scalable Architecture"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-12,000/month",
    benefits: ["Operational efficiency", "Real-time insights", "Automated processes"],
    setupTime: "3-6 weeks"
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery and business continuity solutions",
    icon: Shield,
    features: [
      "Backup Strategy Implementation",
      "Disaster Recovery Planning",
      "Business Continuity Testing",
      "Data Replication Solutions",
      "Failover Systems",
      "Recovery Time Optimization",
      "Compliance & Documentation",
      "24/7 Monitoring"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-10,000/month",
    benefits: ["99.9% uptime", "Quick recovery", "Data protection"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Performance Optimization & Monitoring",
    description: "Advanced performance monitoring and optimization services",
    icon: BarChart3,
    features: [
      "Application Performance Monitoring",
      "Infrastructure Optimization",
      "Database Performance Tuning",
      "Network Optimization",
      "Load Testing & Analysis",
      "Capacity Planning",
      "Real-time Alerting",
      "Performance Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-8,000/month",
    benefits: ["50% performance improvement", "Proactive monitoring", "Cost optimization"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Compliance & Governance Solutions",
    description: "Ensure regulatory compliance and implement governance frameworks",
    icon: CheckCircle,
    features: [
      "GDPR Compliance Implementation",
      "HIPAA Compliance Solutions",
      "SOX Compliance Management",
      "ISO 27001 Certification",
      "Audit Trail Implementation",
      "Data Privacy Management",
      "Risk Assessment",
      "Policy Development"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-15,000/month",
    benefits: ["Regulatory compliance", "Risk mitigation", "Audit readiness"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Hybrid Cloud Solutions",
    description: "Seamless integration of on-premises and cloud infrastructure",
    icon: Cloud,
    features: [
      "Hybrid Cloud Architecture",
      "Multi-cloud Management",
      "Data Synchronization",
      "Security Integration",
      "Cost Optimization",
      "Workload Migration",
      "Unified Management",
      "Compliance Management"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["Flexible deployment", "Cost optimization", "Enhanced security"],
    setupTime: "4-6 weeks"
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
              <a href={`tel:${contactInfo.phone}`} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call {contactInfo.phone}
              </a>
            </motion.div>
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-blue-200 mb-2">Ready to transform your IT infrastructure?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {contactInfo.address}
                </div>
              </div>
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
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    )}
                  </div>
                  {service.benefits && (
                    <div className="text-xs text-green-600 font-medium">
                      Benefits: {service.benefits.join(", ")}
                    </div>
                  )}
                  {service.setupTime && (
                    <div className="text-xs text-blue-600">
                      Setup: {service.setupTime}
                    </div>
                  )}
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