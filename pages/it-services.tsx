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
  Users
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Cloud Infrastructure & Migration",
    description: "Complete cloud transformation with AWS, Azure, and GCP expertise for scalable, secure, and cost-effective solutions",
    icon: Cloud,
    features: [
      "Multi-cloud strategy & architecture",
      "AWS, Azure, GCP migration & optimization",
      "Container orchestration (Kubernetes, Docker)",
      "Serverless architecture implementation",
      "Auto-scaling & load balancing",
      "Disaster recovery & backup solutions",
      "Cloud cost optimization",
      "Security & compliance implementation"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["50% cost reduction", "99.9% uptime guarantee", "Faster deployment", "Enhanced security"],
    setupTime: "2-4 weeks",
    targetUsers: "Enterprises, Startups, SMBs"
  },
  {
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions including zero-trust architecture, threat detection, and compliance management",
    icon: Shield,
    features: [
      "Security audits & vulnerability assessments",
      "Penetration testing & red team exercises",
      "Zero-trust network architecture",
      "SIEM implementation & monitoring",
      "Endpoint detection & response (EDR)",
      "Identity & access management (IAM)",
      "Compliance management (SOC2, GDPR, HIPAA)",
      "Security awareness training"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["100% compliance assurance", "24/7 threat monitoring", "Reduced security incidents", "Peace of mind"],
    setupTime: "3-6 weeks",
    targetUsers: "Healthcare, Finance, E-commerce, Government"
  },
  {
    title: "DevOps & CI/CD Automation",
    description: "Modern DevOps practices with automated pipelines, infrastructure as code, and continuous deployment",
    icon: Zap,
    features: [
      "CI/CD pipeline design & implementation",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Container orchestration & management",
      "Monitoring & observability setup",
      "Automated testing & quality gates",
      "Blue-green & canary deployments",
      "GitOps workflow implementation",
      "Performance optimization"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["10x faster deployments", "99% reduction in downtime", "Automated processes", "Better code quality"],
    setupTime: "2-3 weeks",
    targetUsers: "Software Companies, Agencies, Enterprises"
  },
  {
    title: "Database & Data Management",
    description: "Expert database administration, optimization, and data management solutions for all major database systems",
    icon: Database,
    features: [
      "Database design & architecture",
      "Performance tuning & optimization",
      "Data migration & transformation",
      "Backup & disaster recovery",
      "Database security & encryption",
      "Cloud database management",
      "Data warehousing solutions",
      "Real-time data processing"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["50% performance improvement", "Zero data loss", "24/7 monitoring", "Cost optimization"],
    setupTime: "1-2 weeks",
    targetUsers: "E-commerce, SaaS, Analytics, Enterprise"
  },
  {
    title: "Network Infrastructure & Security",
    description: "Complete network solutions including design, implementation, security, and management for modern businesses",
    icon: Network,
    features: [
      "Network design & architecture",
      "SD-WAN implementation",
      "VPN & remote access solutions",
      "Load balancing & traffic management",
      "Network security & firewalls",
      "Wireless network optimization",
      "Network monitoring & management",
      "Cloud connectivity solutions"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-7,000/month",
    benefits: ["Enhanced connectivity", "Improved security", "Better performance", "Reduced downtime"],
    setupTime: "1-2 weeks",
    targetUsers: "Offices, Remote Teams, Enterprises"
  },
  {
    title: "System Administration & Support",
    description: "Comprehensive system management including server administration, monitoring, and 24/7 technical support",
    icon: Server,
    features: [
      "Server setup & configuration",
      "System monitoring & alerting",
      "User account management",
      "Backup & recovery solutions",
      "Performance optimization",
      "Patch management & updates",
      "24/7 technical support",
      "Documentation & training"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["99.9% uptime", "Proactive monitoring", "Fast response times", "Expert support"],
    setupTime: "1 week",
    targetUsers: "SMBs, Startups, Non-profits"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT consulting to align technology with business goals and drive digital transformation",
    icon: Settings,
    features: [
      "IT strategy & roadmap development",
      "Technology assessment & recommendations",
      "Digital transformation planning",
      "Vendor evaluation & selection",
      "IT budget planning & optimization",
      "Change management & training",
      "IT governance & best practices",
      "Technology risk assessment"
    ],
    price: "Starting at $150/hour",
    marketPrice: "$200-400/hour",
    benefits: ["Strategic alignment", "Cost optimization", "Risk mitigation", "Future-proof solutions"],
    setupTime: "1-2 days",
    targetUsers: "C-Level Executives, IT Directors, Business Owners"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management including monitoring, maintenance, and support for all your technology needs",
    icon: Users,
    features: [
      "24/7 network monitoring",
      "Proactive maintenance & updates",
      "Help desk & technical support",
      "Security monitoring & management",
      "Backup & disaster recovery",
      "Software license management",
      "Asset management & tracking",
      "Regular reporting & analytics"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-12,000/month",
    benefits: ["Predictable costs", "Proactive support", "Reduced downtime", "Expert team"],
    setupTime: "1-2 weeks",
    targetUsers: "SMBs, Mid-market, Enterprises"
  },
  {
    title: "Cloud Security & Compliance",
    description: "Specialized cloud security services ensuring your cloud infrastructure meets compliance requirements",
    icon: Shield,
    features: [
      "Cloud security assessment",
      "Identity & access management",
      "Data encryption & key management",
      "Compliance auditing (SOC2, GDPR, HIPAA)",
      "Security monitoring & SIEM",
      "Incident response planning",
      "Security training & awareness",
      "Regular security reviews"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-15,000/month",
    benefits: ["Full compliance", "Enhanced security", "Risk mitigation", "Audit readiness"],
    setupTime: "2-3 weeks",
    targetUsers: "Healthcare, Finance, Government, SaaS"
  },
  {
    title: "IT Project Management",
    description: "Professional project management for IT implementations, migrations, and digital transformation projects",
    icon: CheckCircle,
    features: [
      "Project planning & scoping",
      "Timeline & resource management",
      "Risk assessment & mitigation",
      "Stakeholder communication",
      "Quality assurance & testing",
      "Change management",
      "Documentation & training",
      "Post-implementation support"
    ],
    price: "Starting at $200/hour",
    marketPrice: "$300-500/hour",
    benefits: ["On-time delivery", "Budget control", "Quality assurance", "Risk management"],
    setupTime: "1-2 days",
    targetUsers: "Project Managers, IT Directors, Business Leaders"
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
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
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
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-400">+{service.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    {service.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    )}
                  </div>
                  {service.setupTime && (
                    <p className="text-xs text-gray-500">Setup: {service.setupTime}</p>
                  )}
                  {service.targetUsers && (
                    <p className="text-xs text-gray-500 mt-1">Perfect for: {service.targetUsers}</p>
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