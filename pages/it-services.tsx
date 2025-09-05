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
  Users,
  Package,
  GraduationCap,
  DollarSign,
  Cpu,
  Globe,
  Wifi,
  Lock,
  TreePine,
  Brain,
  Building
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
    marketPrice: "$3,000-8,000/month",
    benefits: ["99.9% uptime guarantee", "50% cost reduction", "24/7 monitoring"],
    setupTime: "2-4 weeks"
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
    marketPrice: "$3,500-10,000/month",
    benefits: ["Reduce security incidents by 90%", "Compliance ready", "24/7 threat monitoring"],
    setupTime: "3-6 weeks"
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
    marketPrice: "$2,500-6,000/month",
    benefits: ["Deploy 10x faster", "Reduce errors by 80%", "Automated scaling"],
    setupTime: "2-4 weeks"
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
    marketPrice: "$2,000-5,000/month",
    benefits: ["50% faster queries", "Zero data loss", "Automated backups"],
    setupTime: "2-3 weeks"
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
    marketPrice: "$1,800-4,500/month",
    benefits: ["99.9% network uptime", "Enhanced security", "Remote access ready"],
    setupTime: "1-3 weeks"
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
    marketPrice: "$1,500-3,500/month",
    benefits: ["Proactive maintenance", "Reduced downtime", "Expert support"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy Development",
      "Technology Roadmap",
      "Digital Transformation",
      "Cost Optimization",
      "Vendor Management",
      "Technology Assessment"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["Strategic alignment", "Cost savings", "Future-proof technology"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management and support services",
    icon: Server,
    features: [
      "24/7 Help Desk Support",
      "Proactive Monitoring",
      "Patch Management",
      "Security Updates",
      "Performance Optimization",
      "Incident Response"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-6,000/month",
    benefits: ["Predictable costs", "Expert support", "Proactive maintenance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration to cloud platforms with zero downtime",
    icon: Cloud,
    features: [
      "Migration Planning",
      "Data Migration",
      "Application Migration",
      "Testing & Validation",
      "Go-live Support",
      "Post-migration Optimization"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-20,000/month",
    benefits: ["Zero downtime migration", "Cost optimization", "Enhanced security"],
    setupTime: "4-12 weeks"
  },
  {
    title: "IT Security Services",
    description: "Comprehensive security services to protect your infrastructure",
    icon: Shield,
    features: [
      "Security Assessment",
      "Vulnerability Management",
      "Security Monitoring",
      "Incident Response",
      "Security Training",
      "Compliance Auditing"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Enhanced security posture", "Compliance ready", "Reduced risk"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Comprehensive backup and disaster recovery solutions",
    icon: Database,
    features: [
      "Automated Backups",
      "Disaster Recovery Planning",
      "Data Replication",
      "Recovery Testing",
      "Cloud Backup Solutions",
      "Business Continuity"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-7,000/month",
    benefits: ["Zero data loss", "Fast recovery", "Business continuity"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Infrastructure Monitoring",
    description: "Advanced monitoring and alerting for your IT infrastructure",
    icon: Settings,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Alert Management",
      "Capacity Planning",
      "Trend Analysis",
      "Custom Dashboards"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["Proactive issue detection", "Better performance", "Reduced downtime"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Support & Helpdesk",
    description: "Professional IT support and helpdesk services",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Issue Tracking",
      "Knowledge Base",
      "User Training",
      "Service Level Agreements"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["Fast resolution times", "Expert support", "User satisfaction"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Asset Management",
    description: "Complete IT asset lifecycle management and optimization",
    icon: Package,
    features: [
      "Asset Discovery",
      "Inventory Management",
      "License Management",
      "Lifecycle Planning",
      "Cost Optimization",
      "Compliance Tracking"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,000/month",
    benefits: ["Cost optimization", "License compliance", "Asset visibility"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Project Management",
    description: "Professional IT project management and implementation",
    icon: CheckCircle,
    features: [
      "Project Planning",
      "Resource Management",
      "Timeline Management",
      "Risk Assessment",
      "Quality Assurance",
      "Stakeholder Communication"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["On-time delivery", "Budget control", "Quality assurance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Training & Certification",
    description: "Comprehensive IT training and certification programs",
    icon: GraduationCap,
    features: [
      "Technical Training",
      "Certification Programs",
      "Skill Assessment",
      "Custom Training",
      "Online Learning",
      "Hands-on Labs"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improved skills", "Certification ready", "Better performance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Compliance & Governance",
    description: "IT compliance management and governance services",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Audit Preparation",
      "Risk Management",
      "Governance Framework",
      "Regulatory Updates"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Compliance ready", "Risk reduction", "Audit preparation"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Vendor Management",
    description: "Strategic IT vendor management and optimization",
    icon: Settings,
    features: [
      "Vendor Assessment",
      "Contract Management",
      "Performance Monitoring",
      "Cost Optimization",
      "Relationship Management",
      "Service Level Management"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Cost savings", "Better service", "Strategic partnerships"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Innovation & R&D",
    description: "IT innovation services and emerging technology adoption",
    icon: Zap,
    features: [
      "Technology Research",
      "Proof of Concept",
      "Innovation Labs",
      "Emerging Tech Adoption",
      "Digital Transformation",
      "Future Technology Planning"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Competitive advantage", "Innovation leadership", "Future readiness"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Cost Optimization",
    description: "Strategic IT cost reduction and optimization services",
    icon: DollarSign,
    features: [
      "Cost Analysis",
      "Budget Optimization",
      "Resource Right-sizing",
      "Cloud Cost Management",
      "License Optimization",
      "ROI Analysis"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["30% cost reduction", "Better ROI", "Optimized spending"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Quantum Computing Infrastructure",
    description: "Quantum computing setup, integration, and optimization services",
    icon: Cpu,
    features: [
      "Quantum Hardware Setup",
      "Quantum Software Integration",
      "Hybrid Classical-Quantum Systems",
      "Quantum Algorithm Development",
      "Performance Optimization",
      "Security Implementation"
    ],
    price: "Starting at $15,000/month",
    marketPrice: "$25,000-100,000/month",
    benefits: ["Exponential computing power", "Future-proof technology", "Breakthrough capabilities"],
    setupTime: "8-16 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed edge computing infrastructure and management",
    icon: Globe,
    features: [
      "Edge Node Deployment",
      "Real-time Data Processing",
      "Latency Optimization",
      "Edge Security",
      "Bandwidth Management",
      "Distributed Analytics"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,500-15,000/month",
    benefits: ["80% latency reduction", "Improved reliability", "Local data processing"],
    setupTime: "4-8 weeks"
  },
  {
    title: "5G Network Infrastructure",
    description: "5G network design, deployment, and optimization services",
    icon: Wifi,
    features: [
      "5G Network Planning",
      "Small Cell Deployment",
      "Network Slicing",
      "IoT Connectivity",
      "Performance Optimization",
      "Security Implementation"
    ],
    price: "Starting at $8,000/month",
    marketPrice: "$12,000-40,000/month",
    benefits: ["10x faster speeds", "Ultra-low latency", "Massive IoT connectivity"],
    setupTime: "6-12 weeks"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Blockchain network setup, management, and integration services",
    icon: Shield,
    features: [
      "Blockchain Network Design",
      "Smart Contract Development",
      "Node Management",
      "Security Auditing",
      "Integration Services",
      "Performance Monitoring"
    ],
    price: "Starting at $5,500/month",
    marketPrice: "$8,500-25,000/month",
    benefits: ["Enhanced security", "Transparent transactions", "Decentralized systems"],
    setupTime: "6-10 weeks"
  },
  {
    title: "IoT Platform Management",
    description: "Comprehensive IoT infrastructure and device management",
    icon: Network,
    features: [
      "IoT Device Management",
      "Data Collection & Processing",
      "Real-time Analytics",
      "Device Security",
      "Firmware Updates",
      "Performance Monitoring"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Centralized device control", "Real-time insights", "Automated management"],
    setupTime: "4-6 weeks"
  },
  {
    title: "AI Infrastructure Services",
    description: "AI/ML infrastructure setup, management, and optimization",
    icon: Brain,
    features: [
      "GPU Cluster Setup",
      "ML Pipeline Development",
      "Model Deployment",
      "Data Pipeline Management",
      "Performance Optimization",
      "Auto-scaling Configuration"
    ],
    price: "Starting at $4,200/month",
    marketPrice: "$6,500-20,000/month",
    benefits: ["Faster AI processing", "Scalable ML operations", "Cost optimization"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Green IT Solutions",
    description: "Sustainable and energy-efficient IT infrastructure services",
    icon: TreePine,
    features: [
      "Energy-efficient Hardware",
      "Carbon Footprint Tracking",
      "Renewable Energy Integration",
      "Waste Reduction",
      "Sustainability Reporting",
      "Green Certification"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["40% energy reduction", "Carbon neutral operations", "Cost savings"],
    setupTime: "3-6 weeks"
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Zero trust security model implementation and management",
    icon: Lock,
    features: [
      "Identity Verification",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Access Control",
      "Threat Detection",
      "Incident Response"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$7,000-20,000/month",
    benefits: ["Enhanced security posture", "Reduced attack surface", "Compliance ready"],
    setupTime: "6-10 weeks"
  },
  {
    title: "Hyperconverged Infrastructure",
    description: "HCI deployment, management, and optimization services",
    icon: Server,
    features: [
      "HCI Design & Planning",
      "Hardware Integration",
      "Software Configuration",
      "Performance Tuning",
      "Backup & Recovery",
      "Monitoring & Management"
    ],
    price: "Starting at $3,800/month",
    marketPrice: "$6,000-18,000/month",
    benefits: ["Simplified management", "Better performance", "Reduced costs"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Container Orchestration",
    description: "Kubernetes and container platform management services",
    icon: Package,
    features: [
      "Kubernetes Deployment",
      "Container Management",
      "Service Mesh Implementation",
      "Auto-scaling Configuration",
      "Security Hardening",
      "Monitoring & Logging"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["Improved scalability", "Faster deployments", "Better resource utilization"],
    setupTime: "3-6 weeks"
  },
  {
    title: "Data Center Modernization",
    description: "Legacy data center transformation and modernization services",
    icon: Building,
    features: [
      "Infrastructure Assessment",
      "Modernization Planning",
      "Hardware Refresh",
      "Software Updates",
      "Migration Services",
      "Performance Optimization"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$8,000-30,000/month",
    benefits: ["Improved performance", "Reduced costs", "Future-ready infrastructure"],
    setupTime: "8-16 weeks"
  },
  {
    title: "Multi-Cloud Management",
    description: "Multi-cloud strategy, deployment, and management services",
    icon: Cloud,
    features: [
      "Cloud Strategy Development",
      "Multi-cloud Architecture",
      "Cost Optimization",
      "Security Management",
      "Disaster Recovery",
      "Performance Monitoring"
    ],
    price: "Starting at $4,800/month",
    marketPrice: "$7,500-25,000/month",
    benefits: ["Vendor independence", "Cost optimization", "Enhanced reliability"],
    setupTime: "6-12 weeks"
  },
  {
    title: "IT Automation Services",
    description: "Comprehensive IT process automation and orchestration",
    icon: Zap,
    features: [
      "Process Automation",
      "Workflow Orchestration",
      "Self-healing Systems",
      "Automated Provisioning",
      "Incident Response",
      "Performance Optimization"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["90% process automation", "Reduced human error", "Faster operations"],
    setupTime: "4-8 weeks"
  },
  {
    title: "IT Compliance Automation",
    description: "Automated compliance monitoring and reporting services",
    icon: CheckCircle,
    features: [
      "Compliance Monitoring",
      "Automated Reporting",
      "Policy Enforcement",
      "Audit Preparation",
      "Risk Assessment",
      "Regulatory Updates"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Automated compliance", "Reduced audit time", "Continuous monitoring"],
    setupTime: "3-6 weeks"
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
          
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                
                {/* Features */}
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    {service.setupTime && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.setupTime}
                      </span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-500">
                      Market rate: {service.marketPrice}
                    </p>
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