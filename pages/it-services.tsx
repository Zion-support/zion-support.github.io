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
    title: "Quantum Computing Services",
    description: "Next-generation quantum computing solutions for complex problem solving and optimization",
    icon: Cpu,
    features: [
      "Quantum algorithm development",
      "Quantum optimization problems",
      "Quantum cryptography implementation",
      "Quantum simulation services",
      "Hybrid classical-quantum systems",
      "Quantum error correction"
    ],
    price: "Starting at $25,000/month"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for real-time processing and low-latency applications",
    icon: Globe,
    features: [
      "Edge server deployment",
      "IoT data processing",
      "Real-time analytics",
      "Content delivery networks",
      "Edge security & monitoring",
      "5G network integration"
    ],
    price: "Starting at $3,500/month"
  },
  {
    title: "Zero-Trust Architecture",
    description: "Advanced security model that assumes no implicit trust and verifies every access request",
    icon: Lock,
    features: [
      "Identity verification systems",
      "Micro-segmentation",
      "Continuous monitoring",
      "Least privilege access",
      "Multi-factor authentication",
      "Behavioral analytics"
    ],
    price: "Starting at $4,200/month"
  },
  {
    title: "Blockchain & DLT Services",
    description: "Distributed ledger technology solutions for secure, transparent, and immutable data management",
    icon: Network,
    features: [
      "Blockchain development",
      "Smart contract creation",
      "DeFi platform development",
      "NFT marketplace solutions",
      "Cryptocurrency integration",
      "Consensus mechanism implementation"
    ],
    price: "Starting at $5,000/month"
  },
  {
    title: "IoT Infrastructure Management",
    description: "Comprehensive Internet of Things solutions for connected devices and data collection",
    icon: Wifi,
    features: [
      "IoT device management",
      "Sensor data collection",
      "Real-time monitoring",
      "Device security & encryption",
      "Data analytics & insights",
      "Remote device control"
    ],
    price: "Starting at $2,800/month"
  },
  {
    title: "AI Infrastructure & MLOps",
    description: "Machine learning infrastructure and operations for AI model deployment and management",
    icon: Brain,
    features: [
      "ML pipeline automation",
      "Model versioning & deployment",
      "A/B testing frameworks",
      "Model monitoring & drift detection",
      "GPU cluster management",
      "MLOps best practices"
    ],
    price: "Starting at $4,500/month"
  },
  {
    title: "Data Center Services",
    description: "Physical and virtual data center management with high availability and redundancy",
    icon: Server,
    features: [
      "Data center design & setup",
      "Power & cooling management",
      "Redundancy & failover",
      "Physical security measures",
      "Environmental monitoring",
      "Disaster recovery planning"
    ],
    price: "Starting at $6,000/month"
  },
  {
    title: "Hybrid Cloud Solutions",
    description: "Seamless integration between on-premises and cloud environments for optimal flexibility",
    icon: Cloud,
    features: [
      "Hybrid cloud architecture",
      "Data synchronization",
      "Workload portability",
      "Unified management console",
      "Cost optimization",
      "Security compliance"
    ],
    price: "Starting at $3,200/month"
  },
  {
    title: "IT Compliance & Governance",
    description: "Comprehensive compliance management for regulatory requirements and industry standards",
    icon: Shield,
    features: [
      "HIPAA compliance",
      "GDPR implementation",
      "SOX compliance",
      "PCI DSS certification",
      "Audit preparation",
      "Policy development"
    ],
    price: "Starting at $2,500/month"
  },
  {
    title: "Disaster Recovery & Business Continuity",
    description: "Comprehensive backup and recovery solutions to ensure business continuity during disruptions",
    icon: HardDrive,
    features: [
      "Automated backup systems",
      "Recovery time optimization",
      "Business continuity planning",
      "Ransomware protection",
      "Data replication",
      "Testing & validation"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "IT Asset Management",
    description: "Complete lifecycle management of IT assets from procurement to disposal",
    icon: Package,
    features: [
      "Asset inventory tracking",
      "License management",
      "Depreciation calculations",
      "Procurement optimization",
      "Asset disposal planning",
      "Cost analysis & reporting"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Remote Work Solutions",
    description: "Secure and efficient remote work infrastructure and collaboration tools",
    icon: Laptop,
    features: [
      "VPN & remote access",
      "Virtual desktop infrastructure",
      "Collaboration platforms",
      "Mobile device management",
      "Remote monitoring",
      "Security policies"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and consulting to align technology with business objectives",
    icon: Settings,
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "IT budget planning",
      "Vendor evaluation",
      "Technology assessment",
      "Change management"
    ],
    price: "Starting at $200/hour"
  },
  {
    title: "Performance Monitoring & Optimization",
    description: "Continuous monitoring and optimization of IT systems for peak performance",
    icon: Monitor,
    features: [
      "Real-time monitoring",
      "Performance analytics",
      "Capacity planning",
      "Bottleneck identification",
      "Automated optimization",
      "Alert management"
    ],
    price: "Starting at $1,400/month"
  },
  {
    title: "IT Training & Support",
    description: "Comprehensive training programs and ongoing support for IT teams and end users",
    icon: Users,
    features: [
      "Technical training programs",
      "Certification preparation",
      "End-user support",
      "Documentation creation",
      "Knowledge base management",
      "Help desk services"
    ],
    price: "Starting at $100/hour"
  },
  {
    title: "Green IT & Sustainability",
    description: "Environmentally conscious IT solutions to reduce carbon footprint and energy consumption",
    icon: TreePine,
    features: [
      "Energy-efficient hardware",
      "Carbon footprint tracking",
      "Green data centers",
      "E-waste management",
      "Renewable energy integration",
      "Sustainability reporting"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "IT Security Operations Center (SOC)",
    description: "24/7 security monitoring and incident response to protect against cyber threats",
    icon: Shield,
    features: [
      "24/7 threat monitoring",
      "Incident response",
      "Threat intelligence",
      "Security analytics",
      "Vulnerability management",
      "Compliance reporting"
    ],
    price: "Starting at $8,000/month"
  },
  {
    title: "API Management & Integration",
    description: "Comprehensive API lifecycle management and system integration services",
    icon: Code,
    features: [
      "API gateway setup",
      "API security & authentication",
      "Rate limiting & throttling",
      "API documentation",
      "Third-party integrations",
      "API analytics & monitoring"
    ],
    price: "Starting at $2,200/month"
  },
  {
    title: "IT Procurement & Vendor Management",
    description: "Strategic procurement of IT hardware, software, and services with vendor relationship management",
    icon: ShoppingCart,
    features: [
      "Vendor evaluation & selection",
      "Contract negotiation",
      "License optimization",
      "Cost analysis",
      "Vendor performance monitoring",
      "Procurement automation"
    ],
    price: "Starting at $1,000/month"
  },
  {
    title: "IT Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies for IT infrastructure and operations",
    icon: Shield,
    features: [
      "Risk assessment & analysis",
      "Threat modeling",
      "Vulnerability scanning",
      "Risk mitigation planning",
      "Insurance coordination",
      "Risk reporting & monitoring"
    ],
    price: "Starting at $2,800/month"
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