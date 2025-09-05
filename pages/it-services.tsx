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
    title: "Advanced Cloud Infrastructure",
    description: "Enterprise-grade cloud solutions with AI-powered optimization and multi-cloud management",
    icon: Cloud,
    features: [
      "Multi-Cloud Strategy & Migration",
      "Kubernetes & Container Orchestration",
      "Serverless & Microservices Architecture",
      "Cloud Security & Compliance (SOC2, ISO27001)",
      "Auto-scaling & Load Balancing",
      "Disaster Recovery & Business Continuity",
      "Cost Optimization & Monitoring",
      "Hybrid Cloud Solutions"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Reduce infrastructure costs by 40%", "Improve scalability by 300%", "Achieve 99.9% uptime"],
    setupTime: "2-4 weeks",
    targetUsers: "Enterprises, SaaS Companies, E-commerce, Healthcare"
  },
  {
    title: "Zero-Trust Cybersecurity",
    description: "Next-generation security architecture with AI-powered threat detection and response",
    icon: Shield,
    features: [
      "Zero-Trust Network Architecture",
      "AI-Powered Threat Detection",
      "Advanced Endpoint Protection",
      "Identity & Access Management (IAM)",
      "Security Information & Event Management (SIEM)",
      "Penetration Testing & Vulnerability Assessment",
      "Compliance Management (GDPR, HIPAA, PCI-DSS)",
      "Incident Response & Forensics"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Reduce security incidents by 95%", "Improve compliance by 100%", "Lower security costs by 30%"],
    setupTime: "3-6 weeks",
    targetUsers: "Financial Services, Healthcare, Government, Enterprise"
  },
  {
    title: "AI-Enhanced DevOps",
    description: "Intelligent DevOps with automated testing, deployment, and monitoring using AI/ML",
    icon: Zap,
    features: [
      "AI-Powered CI/CD Pipelines",
      "Infrastructure as Code (IaC)",
      "Automated Testing & Quality Assurance",
      "Performance Monitoring & Optimization",
      "GitOps & Version Control",
      "Container Security & Scanning",
      "Deployment Automation",
      "DevSecOps Integration"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,800-6,500/month",
    benefits: ["Reduce deployment time by 80%", "Improve code quality by 50%", "Increase deployment frequency by 300%"],
    setupTime: "2-3 weeks",
    targetUsers: "Software Development, Fintech, E-commerce, SaaS"
  },
  {
    title: "Advanced Database Solutions",
    description: "High-performance database architecture with AI-powered optimization and real-time analytics",
    icon: Database,
    features: [
      "Database Design & Architecture",
      "Performance Tuning & Optimization",
      "Data Migration & ETL Services",
      "Backup & Disaster Recovery",
      "Database Security & Encryption",
      "Real-time Data Processing",
      "Cloud Database Management",
      "Database Monitoring & Analytics"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improve query performance by 70%", "Reduce downtime by 90%", "Increase data security by 100%"],
    setupTime: "2-4 weeks",
    targetUsers: "E-commerce, Healthcare, Finance, Analytics Companies"
  },
  {
    title: "Software-Defined Networking",
    description: "Modern network architecture with SDN, SD-WAN, and network automation capabilities",
    icon: Network,
    features: [
      "Software-Defined Networking (SDN)",
      "SD-WAN Implementation",
      "Network Virtualization",
      "Network Security & Firewall",
      "Quality of Service (QoS) Management",
      "Network Monitoring & Analytics",
      "Cloud Network Integration",
      "Network Automation & Orchestration"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$2,000-5,500/month",
    benefits: ["Improve network performance by 60%", "Reduce network costs by 35%", "Increase network flexibility by 200%"],
    setupTime: "2-3 weeks",
    targetUsers: "Enterprises, MSPs, Cloud Providers, Educational Institutions"
  },
  {
    title: "Enterprise System Management",
    description: "Comprehensive system administration with AI-powered monitoring and predictive maintenance",
    icon: Server,
    features: [
      "Server Setup & Configuration",
      "System Monitoring & Alerting",
      "User & Access Management",
      "Backup & Recovery Solutions",
      "Performance Optimization",
      "Patch Management & Updates",
      "24/7 System Support",
      "Predictive Maintenance"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-4,000/month",
    benefits: ["Reduce system downtime by 85%", "Improve system performance by 50%", "Lower maintenance costs by 40%"],
    setupTime: "1-2 weeks",
    targetUsers: "SMBs, Enterprises, Educational Institutions, Government"
  },
  {
    title: "Quantum Computing Solutions",
    description: "Cutting-edge quantum computing services for optimization, cryptography, and advanced simulations",
    icon: Cpu,
    features: [
      "Quantum Algorithm Development",
      "Quantum Cryptography & Security",
      "Quantum Optimization Problems",
      "Quantum Machine Learning",
      "Quantum Simulation Services",
      "Hybrid Classical-Quantum Systems",
      "Quantum Cloud Access",
      "Quantum Education & Training"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$8,000-25,000/month",
    benefits: ["Solve complex problems 1000x faster", "Enable breakthrough innovations", "Future-proof your technology"],
    setupTime: "6-12 weeks",
    targetUsers: "Research Institutions, Pharmaceutical, Finance, Defense"
  },
  {
    title: "Edge Computing Infrastructure",
    description: "Distributed computing solutions for real-time processing and IoT applications",
    icon: Globe,
    features: [
      "Edge Server Deployment",
      "IoT Device Management",
      "Real-time Data Processing",
      "Edge AI & Machine Learning",
      "Content Delivery Networks (CDN)",
      "Edge Security & Compliance",
      "5G Network Integration",
      "Edge Analytics & Monitoring"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$4,000-9,000/month",
    benefits: ["Reduce latency by 90%", "Improve data processing speed by 80%", "Enable real-time applications"],
    setupTime: "3-5 weeks",
    targetUsers: "Manufacturing, Smart Cities, Autonomous Vehicles, IoT Companies"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Enterprise blockchain solutions with smart contracts and decentralized applications",
    icon: Lock,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "Decentralized Application (DApp) Development",
      "Cryptocurrency Integration",
      "NFT Platform Development",
      "DeFi Solutions",
      "Blockchain Security & Auditing",
      "Consensus Mechanism Implementation"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["Increase transparency by 100%", "Reduce transaction costs by 60%", "Enable new business models"],
    setupTime: "4-8 weeks",
    targetUsers: "Finance, Supply Chain, Healthcare, Real Estate"
  },
  {
    title: "AI Infrastructure & MLOps",
    description: "Complete AI infrastructure setup with model training, deployment, and monitoring",
    icon: Brain,
    features: [
      "AI/ML Infrastructure Setup",
      "Model Training & Deployment",
      "MLOps Pipeline Implementation",
      "AI Model Monitoring & Management",
      "Data Pipeline & ETL",
      "AI Security & Governance",
      "AutoML Solutions",
      "AI Model Versioning"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Accelerate AI development by 70%", "Improve model accuracy by 40%", "Reduce AI operational costs by 50%"],
    setupTime: "4-6 weeks",
    targetUsers: "AI Companies, Data Science Teams, Enterprises, Research"
  },
  {
    title: "Green IT & Sustainability",
    description: "Eco-friendly IT solutions with energy optimization and carbon footprint reduction",
    icon: Sprout,
    features: [
      "Energy-Efficient Infrastructure",
      "Carbon Footprint Monitoring",
      "Green Cloud Migration",
      "Sustainable Hardware Solutions",
      "Waste Reduction & Recycling",
      "Renewable Energy Integration",
      "Environmental Compliance",
      "Sustainability Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Reduce energy costs by 40%", "Lower carbon footprint by 60%", "Improve corporate sustainability"],
    setupTime: "3-4 weeks",
    targetUsers: "Enterprise, Government, Educational Institutions, Green Tech"
  },
  {
    title: "Digital Transformation Consulting",
    description: "Comprehensive digital transformation strategy and implementation services",
    icon: Settings,
    features: [
      "Digital Strategy Development",
      "Technology Roadmap Planning",
      "Legacy System Modernization",
      "Change Management",
      "Digital Process Optimization",
      "Technology Integration",
      "Digital Skills Training",
      "ROI Measurement & Analytics"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Increase operational efficiency by 50%", "Improve customer experience by 60%", "Enable digital innovation"],
    setupTime: "4-8 weeks",
    targetUsers: "Traditional Enterprises, Manufacturing, Healthcare, Government"
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