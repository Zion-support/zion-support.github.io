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
  Lock
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Cloud Infrastructure & Migration",
    description: "Complete cloud transformation with AWS, Azure, and GCP expertise for scalable, secure, and cost-optimized solutions",
    icon: Cloud,
    features: [
      "Multi-cloud strategy & architecture",
      "AWS, Azure, GCP migration & optimization",
      "Container orchestration (Kubernetes, Docker)",
      "Serverless architecture design",
      "Cloud cost optimization & FinOps",
      "Disaster recovery & business continuity",
      "Cloud security & compliance (SOC2, HIPAA)",
      "Auto-scaling & performance tuning"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["40% cost reduction", "99.9% uptime guarantee", "50% faster deployment", "24/7 monitoring"]
  },
  {
    title: "Advanced Cybersecurity Solutions",
    description: "Comprehensive security services including zero-trust architecture, threat detection, and compliance management",
    icon: Shield,
    features: [
      "Zero-trust security architecture",
      "Advanced threat detection & response",
      "Penetration testing & vulnerability assessments",
      "Security operations center (SOC) services",
      "Compliance management (SOC2, GDPR, HIPAA)",
      "Identity & access management (IAM)",
      "Security awareness training",
      "Incident response & forensics"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-9,000/month",
    benefits: ["99.9% threat detection accuracy", "60% faster incident response", "100% compliance", "24/7 security monitoring"]
  },
  {
    title: "DevOps & CI/CD Automation",
    description: "Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring",
    icon: Zap,
    features: [
      "CI/CD pipeline design & implementation",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container orchestration & microservices",
      "Automated testing & quality gates",
      "Monitoring & observability (Prometheus, Grafana)",
      "GitOps & deployment strategies",
      "Performance optimization & scaling",
      "Disaster recovery automation"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["80% faster deployments", "90% reduction in errors", "50% improvement in reliability", "Automated scaling"]
  },
  {
    title: "Database & Data Management",
    description: "Expert database administration, optimization, and data management across all major database platforms",
    icon: Database,
    features: [
      "Database design & architecture",
      "Performance tuning & optimization",
      "Data migration & consolidation",
      "Backup & disaster recovery",
      "Database security & encryption",
      "Cloud database services (RDS, Aurora, CosmosDB)",
      "Data warehousing & analytics",
      "Database monitoring & maintenance"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["99.9% data availability", "50% performance improvement", "Automated backups", "Real-time monitoring"]
  },
  {
    title: "Network Infrastructure & Security",
    description: "Comprehensive network design, implementation, and security for enterprise-grade connectivity",
    icon: Network,
    features: [
      "Network architecture & design",
      "SD-WAN & hybrid cloud networking",
      "VPN & remote access solutions",
      "Load balancing & traffic management",
      "Network security & firewalls",
      "Wireless network optimization",
      "Network monitoring & management",
      "Cloud networking (VPC, Transit Gateway)"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,000/month",
    benefits: ["99.9% network uptime", "40% performance improvement", "Enhanced security", "24/7 monitoring"]
  },
  {
    title: "IT Infrastructure Management",
    description: "Complete IT infrastructure management including servers, storage, and system administration",
    icon: Server,
    features: [
      "Server administration & maintenance",
      "Storage management & optimization",
      "System monitoring & alerting",
      "User account management",
      "Backup & disaster recovery",
      "Performance optimization",
      "Patch management & updates",
      "24/7 system support"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-3,500/month",
    benefits: ["99.9% system uptime", "Proactive maintenance", "Cost optimization", "Expert support"]
  },
  {
    title: "Microsoft 365 & Office Solutions",
    description: "Complete Microsoft 365 implementation, migration, and optimization for modern workplace productivity",
    icon: Settings,
    features: [
      "Microsoft 365 migration & setup",
      "SharePoint & Teams optimization",
      "Exchange Online & email security",
      "Power Platform development",
      "Azure AD & identity management",
      "Security & compliance configuration",
      "User training & adoption",
      "Ongoing support & maintenance"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,200-4,500/month",
    benefits: ["50% productivity increase", "Enhanced collaboration", "Improved security", "Cost savings"]
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT consulting to align technology with business goals and drive digital transformation",
    icon: Code,
    features: [
      "IT strategy & roadmap development",
      "Technology assessment & planning",
      "Digital transformation consulting",
      "Vendor evaluation & selection",
      "IT governance & best practices",
      "Cost optimization analysis",
      "Technology risk assessment",
      "Change management support"
    ],
    price: "Starting at $150/hour",
    marketPrice: "$200-400/hour",
    benefits: ["Strategic alignment", "Cost optimization", "Risk mitigation", "Technology roadmap"]
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity",
    icon: Shield,
    features: [
      "Automated backup solutions",
      "Disaster recovery planning",
      "Business continuity testing",
      "Cloud backup services",
      "Data replication & synchronization",
      "Recovery time optimization",
      "Compliance & audit support",
      "24/7 monitoring & alerts"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,000/month",
    benefits: ["99.9% data protection", "Fast recovery times", "Compliance ready", "Automated testing"]
  },
  {
    title: "IT Support & Help Desk",
    description: "Professional IT support services with 24/7 coverage and rapid response times",
    icon: Users,
    features: [
      "24/7 help desk support",
      "Remote desktop assistance",
      "Hardware & software support",
      "User training & onboarding",
      "Issue tracking & resolution",
      "Proactive system monitoring",
      "Knowledge base management",
      "SLA-guaranteed response times"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,000/month",
    benefits: ["24/7 availability", "Fast response times", "Proactive support", "User satisfaction"]
  },
  {
    title: "Cloud Security & Compliance",
    description: "Specialized cloud security services ensuring compliance with industry standards and regulations",
    icon: Lock,
    features: [
      "Cloud security assessment",
      "Compliance auditing (SOC2, HIPAA, GDPR)",
      "Security policy development",
      "Access control & identity management",
      "Data encryption & protection",
      "Security monitoring & alerting",
      "Compliance reporting",
      "Security training & awareness"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["100% compliance", "Enhanced security", "Risk mitigation", "Audit readiness"]
  },
  {
    title: "IT Project Management",
    description: "Professional project management for IT implementations, migrations, and digital transformation projects",
    icon: Settings,
    features: [
      "Project planning & execution",
      "Resource management & allocation",
      "Timeline & milestone tracking",
      "Risk assessment & mitigation",
      "Stakeholder communication",
      "Quality assurance & testing",
      "Change management",
      "Post-implementation support"
    ],
    price: "Starting at $180/hour",
    marketPrice: "$250-450/hour",
    benefits: ["On-time delivery", "Budget control", "Risk mitigation", "Quality assurance"]
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
                
                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      Save up to 40% vs market rates
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