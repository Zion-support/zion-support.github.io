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
  Globe
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    title: "Next-Gen Cloud Infrastructure",
    description: "AI-powered cloud solutions with advanced automation and intelligent scaling",
    icon: Cloud,
    features: [
      "Multi-cloud Strategy & Migration",
      "AI-Driven Auto-scaling",
      "Serverless & Microservices",
      "Zero-Trust Security Architecture",
      "Edge Computing Solutions",
      "Disaster Recovery & Backup",
      "Cost Optimization AI",
      "Compliance Automation"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce cloud costs by 40%", "Improve performance by 200%", "Eliminate downtime by 99.9%"],
    setupTime: "2-3 weeks",
    targetUsers: "Enterprise, Mid-market, Startups"
  },
  {
    title: "AI-Powered Cybersecurity",
    description: "Advanced threat detection and automated security response with machine learning",
    icon: Shield,
    features: [
      "AI Threat Detection & Response",
      "Behavioral Analytics",
      "Zero-Trust Architecture",
      "Automated Compliance Management",
      "Quantum-Safe Encryption",
      "Real-time Security Monitoring",
      "Incident Response Automation",
      "Security Training & Awareness"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Prevent 99.9% of cyber attacks", "Reduce response time by 90%", "Automate 80% of security tasks"],
    setupTime: "3-4 weeks",
    targetUsers: "Enterprise, Government, Financial, Healthcare"
  },
  {
    title: "Intelligent DevOps Platform",
    description: "AI-driven development operations with predictive analytics and automated optimization",
    icon: Zap,
    features: [
      "AI-Powered CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Predictive Monitoring & Alerting",
      "Automated Performance Optimization",
      "Smart Testing & QA",
      "Deployment Automation",
      "Cost & Resource Optimization",
      "DevSecOps Integration"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Deploy 5x faster", "Reduce bugs by 70%", "Improve team productivity by 150%"],
    setupTime: "2-3 weeks",
    targetUsers: "Development teams, DevOps engineers, CTOs"
  },
  {
    title: "Advanced Database Solutions",
    description: "Next-generation database management with AI optimization and real-time analytics",
    icon: Database,
    features: [
      "AI Database Optimization",
      "Real-time Data Processing",
      "Advanced Backup & Recovery",
      "Performance Tuning AI",
      "Data Security & Encryption",
      "Cloud Database Migration",
      "Data Lake & Warehouse Setup",
      "Automated Scaling"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Improve query performance by 300%", "Reduce storage costs by 50%", "Eliminate data loss"],
    setupTime: "2-3 weeks",
    targetUsers: "Data teams, CTOs, Database administrators"
  },
  {
    title: "Smart Network Infrastructure",
    description: "AI-powered networking with intelligent routing and automated optimization",
    icon: Network,
    features: [
      "AI Network Optimization",
      "Software-Defined Networking (SDN)",
      "Edge Computing Networks",
      "Zero-Trust Network Access",
      "Intelligent Load Balancing",
      "Network Security Automation",
      "5G & IoT Integration",
      "Predictive Maintenance"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Improve network speed by 200%", "Reduce downtime by 95%", "Optimize costs by 35%"],
    setupTime: "2-3 weeks",
    targetUsers: "Network engineers, IT managers, CTOs"
  },
  {
    title: "Intelligent System Management",
    description: "AI-driven system administration with predictive maintenance and automated optimization",
    icon: Server,
    features: [
      "AI System Monitoring",
      "Predictive Maintenance",
      "Automated Performance Tuning",
      "Smart Resource Allocation",
      "Automated Backup & Recovery",
      "User Access Management",
      "Compliance Monitoring",
      "24/7 AI Support"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Reduce maintenance costs by 60%", "Prevent 90% of system failures", "Improve uptime to 99.9%"],
    setupTime: "1-2 weeks",
    targetUsers: "System administrators, IT managers, CTOs"
  },
  {
    title: "Quantum Computing Solutions",
    description: "Next-generation quantum computing infrastructure and optimization services",
    icon: Cpu,
    features: [
      "Quantum Cloud Infrastructure",
      "Quantum Algorithm Development",
      "Quantum Security Implementation",
      "Hybrid Classical-Quantum Systems",
      "Quantum Optimization Services",
      "Quantum Machine Learning",
      "Quantum Cryptography",
      "Quantum Simulation Platforms"
    ],
    price: "Starting at $8,000/month",
    marketPrice: "$15,000-50,000/month",
    benefits: ["Solve complex problems 1000x faster", "Revolutionary security capabilities", "Breakthrough optimization"],
    setupTime: "6-8 weeks",
    targetUsers: "Research institutions, Fortune 500, Government agencies"
  },
  {
    title: "Edge Computing Platform",
    description: "Distributed computing infrastructure for real-time processing and IoT applications",
    icon: Globe,
    features: [
      "Edge Server Deployment",
      "Real-time Data Processing",
      "IoT Device Management",
      "Edge AI & ML",
      "Low-latency Applications",
      "Distributed Storage",
      "Edge Security",
      "5G Integration"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Reduce latency by 90%", "Process data 10x faster", "Enable real-time applications"],
    setupTime: "3-4 weeks",
    targetUsers: "IoT companies, Manufacturing, Smart cities, Autonomous vehicles"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure blockchain networks and decentralized application development",
    icon: Shield,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "DeFi Platform Development",
      "NFT Marketplace Creation",
      "Cryptocurrency Integration",
      "Blockchain Security",
      "Consensus Mechanism Implementation",
      "Cross-chain Solutions"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-20,000/month",
    benefits: ["Enable decentralized applications", "Increase security by 99%", "Reduce transaction costs by 80%"],
    setupTime: "4-6 weeks",
    targetUsers: "Fintech, Supply chain, Healthcare, Gaming, Real estate"
  },
  {
    title: "AI-Powered IT Operations",
    description: "Intelligent IT operations with automated incident response and predictive analytics",
    icon: Settings,
    features: [
      "AIOps Implementation",
      "Automated Incident Response",
      "Predictive Analytics",
      "Intelligent Alerting",
      "Root Cause Analysis AI",
      "Capacity Planning",
      "Change Management",
      "Service Level Optimization"
    ],
    price: "Starting at $2,600/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce incidents by 80%", "Improve resolution time by 70%", "Increase system reliability by 95%"],
    setupTime: "3-4 weeks",
    targetUsers: "IT operations teams, SREs, CTOs, IT managers"
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