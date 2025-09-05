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
  Wifi,
  Brain,
  FileText,
  Users
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Quantum Computing Infrastructure",
    description: "Revolutionary quantum computing solutions for complex problem solving and advanced optimization",
    icon: Cpu,
    features: [
      "Quantum Hardware Integration",
      "Quantum Algorithm Development",
      "Quantum Error Correction",
      "Hybrid Classical-Quantum Systems",
      "Quantum Cloud Services",
      "Quantum Security Implementation",
      "Quantum Simulation Platforms",
      "Quantum Machine Learning Infrastructure"
    ],
    price: "Starting at $25,000/month",
    marketPrice: "$40,000-100,000/month",
    benefits: ["Solve problems 1000x faster", "Revolutionary optimization capabilities", "Breakthrough research potential"],
    setupTime: "12-16 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for real-time processing and low-latency applications",
    icon: Wifi,
    features: [
      "Edge Server Deployment",
      "Real-time Data Processing",
      "IoT Device Management",
      "Edge AI & ML Models",
      "5G Network Integration",
      "Edge Security & Compliance",
      "Distributed Storage Systems",
      "Edge Analytics Platforms"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["Reduce latency by 90%", "Improve performance by 80%", "Enable real-time processing"],
    setupTime: "6-8 weeks"
  },
  {
    title: "Advanced Cloud Infrastructure",
    description: "Next-generation cloud solutions with AI-powered optimization and multi-cloud management",
    icon: Cloud,
    features: [
      "Multi-Cloud Architecture",
      "AI-Powered Auto-scaling",
      "Serverless Computing",
      "Container Orchestration",
      "Cloud Security & Compliance",
      "Disaster Recovery & Backup",
      "Cost Optimization",
      "Performance Monitoring"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce costs by 40%", "Improve scalability by 300%", "Ensure 99.99% uptime"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Comprehensive security framework with continuous verification and micro-segmentation",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Threat Detection & Response",
      "Data Loss Prevention",
      "Security Orchestration",
      "Compliance Automation",
      "Risk Assessment & Management"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$8,000-20,000/month",
    benefits: ["Prevent 99.9% of breaches", "Reduce security costs by 50%", "Ensure compliance 100%"],
    setupTime: "8-12 weeks"
  },
  {
    title: "AI-Powered DevOps Platform",
    description: "Intelligent DevOps solutions with automated testing, deployment, and monitoring",
    icon: Zap,
    features: [
      "AI-Driven CI/CD Pipelines",
      "Automated Testing & QA",
      "Intelligent Deployment",
      "Performance Optimization",
      "Anomaly Detection",
      "Self-Healing Systems",
      "Predictive Scaling",
      "DevSecOps Integration"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,500-12,000/month",
    benefits: ["Reduce deployment time by 70%", "Improve reliability by 85%", "Lower operational costs by 60%"],
    setupTime: "6-8 weeks"
  },
  {
    title: "Advanced Database Solutions",
    description: "Next-generation database systems with AI optimization and real-time analytics",
    icon: Database,
    features: [
      "AI-Powered Query Optimization",
      "Real-time Analytics",
      "Distributed Database Systems",
      "Data Lake & Warehouse",
      "Advanced Backup & Recovery",
      "Database Security & Encryption",
      "Performance Tuning",
      "Data Migration Services"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Improve query performance by 90%", "Reduce storage costs by 50%", "Ensure data integrity 100%"],
    setupTime: "4-6 weeks"
  },
  {
    title: "5G Network Infrastructure",
    description: "Cutting-edge 5G network solutions for ultra-fast connectivity and IoT applications",
    icon: Network,
    features: [
      "5G Network Design & Implementation",
      "Network Slicing",
      "Edge Computing Integration",
      "IoT Device Management",
      "Network Security & Monitoring",
      "Performance Optimization",
      "Multi-Access Edge Computing",
      "Network Function Virtualization"
    ],
    price: "Starting at $5,500/month",
    marketPrice: "$10,000-25,000/month",
    benefits: ["Enable 10x faster speeds", "Support millions of IoT devices", "Reduce latency by 95%"],
    setupTime: "8-12 weeks"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure blockchain solutions for enterprise applications and digital transformation",
    icon: Code,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "Cryptocurrency Integration",
      "DeFi Platform Development",
      "NFT Marketplace Creation",
      "Blockchain Security",
      "Consensus Mechanism Implementation",
      "Interoperability Solutions"
    ],
    price: "Starting at $4,200/month",
    marketPrice: "$7,500-18,000/month",
    benefits: ["Ensure transaction security 100%", "Reduce costs by 60%", "Enable new business models"],
    setupTime: "6-10 weeks"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless integration of on-premises and cloud infrastructure with unified management",
    icon: Server,
    features: [
      "Hybrid Cloud Architecture",
      "Unified Management Platform",
      "Data Synchronization",
      "Workload Migration",
      "Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery",
      "Performance Monitoring"
    ],
    price: "Starting at $3,800/month",
    marketPrice: "$6,500-15,000/month",
    benefits: ["Optimize costs by 45%", "Improve flexibility by 80%", "Ensure seamless operations"],
    setupTime: "6-8 weeks"
  },
  {
    title: "AI Infrastructure Services",
    description: "Specialized infrastructure for AI/ML workloads with GPU clusters and distributed computing",
    icon: Brain,
    features: [
      "GPU Cluster Management",
      "Distributed Training Infrastructure",
      "Model Serving Platforms",
      "Data Pipeline Automation",
      "MLOps Integration",
      "AI Model Monitoring",
      "Scalable Inference Systems",
      "AI Security & Compliance"
    ],
    price: "Starting at $5,200/month",
    marketPrice: "$9,000-22,000/month",
    benefits: ["Accelerate AI development by 300%", "Reduce training time by 80%", "Scale AI workloads infinitely"],
    setupTime: "8-10 weeks"
  },
  {
    title: "Internet of Things (IoT) Platform",
    description: "Comprehensive IoT infrastructure for device management, data processing, and analytics",
    icon: Wifi,
    features: [
      "IoT Device Management",
      "Real-time Data Processing",
      "Edge Computing Integration",
      "IoT Security & Encryption",
      "Device Analytics & Monitoring",
      "Firmware Management",
      "API Gateway Services",
      "IoT Application Development"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Connect millions of devices", "Process data in real-time", "Reduce operational costs by 40%"],
    setupTime: "6-8 weeks"
  },
  {
    title: "High-Performance Computing (HPC)",
    description: "Supercomputing solutions for complex simulations, research, and data-intensive applications",
    icon: Cpu,
    features: [
      "HPC Cluster Management",
      "Parallel Processing Systems",
      "Scientific Computing Platforms",
      "High-Speed Interconnects",
      "Job Scheduling & Management",
      "Storage Optimization",
      "Performance Tuning",
      "Research Collaboration Tools"
    ],
    price: "Starting at $8,500/month",
    marketPrice: "$15,000-40,000/month",
    benefits: ["Process massive datasets", "Accelerate research by 100x", "Enable breakthrough discoveries"],
    setupTime: "10-14 weeks"
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive disaster recovery solutions with automated failover and data protection",
    icon: Shield,
    features: [
      "Automated Backup Systems",
      "Disaster Recovery Planning",
      "Business Continuity Management",
      "Data Replication Services",
      "Failover & Recovery Testing",
      "RTO/RPO Optimization",
      "Compliance & Audit Support",
      "24/7 Monitoring & Support"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Ensure 99.99% uptime", "Minimize data loss to zero", "Reduce recovery time by 90%"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Digital Transformation Services",
    description: "End-to-end digital transformation solutions for modernizing legacy systems and processes",
    icon: Settings,
    features: [
      "Legacy System Modernization",
      "Process Automation",
      "Digital Workflow Design",
      "API Integration Services",
      "Data Migration & Integration",
      "Change Management",
      "Training & Support",
      "Performance Optimization"
    ],
    price: "Starting at $4,800/month",
    marketPrice: "$8,500-20,000/month",
    benefits: ["Modernize legacy systems", "Improve efficiency by 70%", "Enable digital innovation"],
    setupTime: "8-12 weeks"
  },
  {
    title: "Compliance & Governance Solutions",
    description: "Comprehensive compliance management for regulatory requirements and industry standards",
    icon: FileText,
    features: [
      "Regulatory Compliance Management",
      "Audit Trail & Documentation",
      "Risk Assessment & Mitigation",
      "Policy Management",
      "Compliance Monitoring",
      "Reporting & Analytics",
      "Training & Certification",
      "Third-party Audits"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Ensure 100% compliance", "Reduce audit time by 60%", "Minimize regulatory risks"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management services with 24/7 monitoring, support, and optimization",
    icon: Users,
    features: [
      "24/7 IT Monitoring",
      "Proactive Maintenance",
      "Help Desk Support",
      "Security Management",
      "Performance Optimization",
      "Software Updates & Patches",
      "Asset Management",
      "Strategic IT Consulting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Reduce IT costs by 40%", "Improve system reliability by 90%", "Enable focus on core business"],
    setupTime: "2-3 weeks"
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <div className="text-xs text-green-600 font-medium mb-2">
                      Save up to 50% vs market rate
                    </div>
                  )}
                  {service.setupTime && (
                    <div className="text-sm text-gray-500 mb-2">
                      Setup: {service.setupTime}
                    </div>
                  )}
                  {service.benefits && (
                    <div className="mt-3">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
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