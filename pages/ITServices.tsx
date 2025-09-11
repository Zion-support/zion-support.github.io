

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from "react";
import Layout from "../components/Layout";
origin/main
=======

import React from "react";
import Layout from "../components/Layout";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
origin/automation-improvements-final
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to power your digital transformation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              IT Services page is under construction.
            </p>
            <p className="text-gray-600">IT Services page is under construction.</p>
origin/automation-improvements-final
          </div>
        </div>
      </div>
    </Layout>;
  );
            <p className="text-gray-600">IT Services page is under construction.</p>

          </div>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>;
  );
}
}
=======
=======

}


import { Star } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Server, 
  Shield, 
  Cloud, 
  Network, 
  Database, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  Globe,
  Lock,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  HardDrive,
  Wifi,
  Phone,
  Mail,
  MapPin,
  FileText,
  Cpu;
} from 'lucide-react';
const itServices = [
  {
    category: "Managed IT Services",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "24/7 IT Support & Monitoring",
        description: "Round-the-clock monitoring and support for your IT infrastructure",
        features: ["24/7 monitoring", "Remote support", "Proactive maintenance", "Help desk support"],
        pricing: "Starting at $150/user/month",
        delivery: "Immediate"
      },
      {
        name: "Network Infrastructure Management",
        description: "Complete management of your network infrastructure and connectivity",
        features: ["Network design", "Router configuration", "Switch management", "WiFi optimization"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Server Management & Maintenance",
        description: "Comprehensive server administration and maintenance services",
        features: ["Server monitoring", "Performance optimization", "Security updates", "Backup management"],
        pricing: "Starting at $300/server/month",
        delivery: "1-3 weeks"
      },
      {
        name: "AI-Powered IT Operations",
        description: "Intelligent IT operations using AI for predictive maintenance and automation",
        features: ["Predictive maintenance", "Automated troubleshooting", "Performance optimization", "Anomaly detection"],
        pricing: "Starting at $800/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Zero-Trust Security Architecture",
        description: "Implement zero-trust security model for enhanced protection",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Risk assessment"],
        pricing: "Starting at $1,200/month",
        delivery: "6-12 weeks"
      }
    ]
  },
  {
    category: "Cloud Services & Migration",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Cloud Migration Services",
        description: "Seamless migration of your infrastructure to cloud platforms",
        features: ["AWS/Azure/GCP migration", "Data migration", "Application migration", "Security configuration"],
        pricing: "Starting at $5,000/project",
        delivery: "4-8 weeks"
      },
      {
        name: "Cloud Infrastructure Management",
        description: "Ongoing management and optimization of cloud resources",
        features: ["Resource optimization", "Cost management", "Security monitoring", "Auto-scaling"],
        pricing: "Starting at $500/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Hybrid Cloud Solutions",
        description: "Integration of on-premises and cloud infrastructure",
        features: ["Hybrid architecture", "Data synchronization", "Security integration", "Disaster recovery"],
        pricing: "Starting at $800/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Cybersecurity Services",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      {
        name: "Security Assessment & Auditing",
        description: "Comprehensive security evaluation and vulnerability assessment",
        features: ["Penetration testing", "Vulnerability scanning", "Compliance auditing", "Security reporting"],
        pricing: "Starting at $2,500/assessment",
        delivery: "2-4 weeks"
      },
      {
        name: "Managed Security Services",
        description: "Ongoing security monitoring and threat management",
        features: ["SIEM monitoring", "Threat detection", "Incident response", "Security updates"],
        pricing: "Starting at $400/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Compliance & Governance",
        description: "Help with regulatory compliance and security governance",
        features: ["HIPAA compliance", "GDPR compliance", "SOX compliance", "Policy development"],
        pricing: "Starting at $1,500/month",
        delivery: "4-8 weeks"
      }
    ]
  },
  {
    category: "Data Management & Backup",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Data Backup & Recovery",
        description: "Comprehensive data protection and disaster recovery solutions",
        features: ["Automated backups", "Offsite storage", "Disaster recovery", "Data restoration"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Database Administration",
        description: "Professional database management and optimization",
        features: ["Performance tuning", "Backup management", "Security hardening", "Monitoring"],
        pricing: "Starting at $350/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Data Migration Services",
        description: "Safe and secure data migration between systems",
        features: ["Data mapping", "Migration planning", "Data validation", "Zero-downtime migration"],
        pricing: "Starting at $3,000/project",
        delivery: "3-6 weeks"
      }
    ]
  },
  {
    category: "Emerging IT Technologies",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "Edge Computing Solutions",
        description: "Deploy computing power closer to data sources for faster processing",
        features: ["Edge deployment", "Real-time processing", "Reduced latency", "IoT integration"],
        pricing: "Starting at $2,500/month",
        delivery: "8-12 weeks"
      },
      {
        name: "5G Network Implementation",
        description: "Implement 5G networks for ultra-fast connectivity and IoT support",
        features: ["5G infrastructure", "Network optimization", "IoT connectivity", "Performance monitoring"],
        pricing: "Starting at $15,000/project",
        delivery: "12-20 weeks"
      },
      {
        name: "Quantum Computing Integration",
        description: "Integrate quantum computing capabilities for complex problem solving",
        features: ["Quantum algorithms", "Hybrid computing", "Optimization problems", "Cryptography"],
        pricing: "Starting at $25,000/month",
        delivery: "16-24 weeks"
      },
      {
        name: "Blockchain Infrastructure",
        description: "Build and maintain blockchain networks for secure transactions",
        features: ["Blockchain setup", "Smart contracts", "Consensus mechanisms", "Security auditing"],
        pricing: "Starting at $8,500/month",
        delivery: "10-16 weeks"
      }
    ]
  }
];
const microSaaS = [
  {
    name: "IT Asset Management",
    description: "Track and manage all your IT assets from a single dashboard",
    features: ["Asset tracking", "License management", "Maintenance scheduling", "Cost analysis"],
    pricing: "$99/month per 100 assets",
    icon: Monitor
  },
  {
    name: "Network Monitoring Dashboard",
    description: "Real-time network performance monitoring and alerting",
    features: ["Real-time monitoring", "Performance alerts", "Traffic analysis", "Uptime reporting"],
    pricing: "$149/month per location",
    icon: Network
  },
  {
    name: "Password Management System",
    description: "Secure password management and team collaboration",
    features: ["Secure storage", "Team sharing", "Password generation", "Access control"],
    pricing: "$79/month per 50 users",
    icon: Lock
  },
  {
    name: "IT Help Desk Ticketing",
    description: "Streamlined IT support ticket management system",
    features: ["Ticket creation", "Priority management", "SLA tracking", "Knowledge base"],
    pricing: "$199/month per 25 agents",
    icon: Headphones
  },
  {
    name: "Backup Monitoring Service",
    description: "Automated backup verification and monitoring",
    features: ["Backup verification", "Failure alerts", "Recovery testing", "Compliance reporting"],
    pricing: "$129/month per 10TB",
    icon: HardDrive
  },
  {
    name: "IT Documentation Platform",
    description: "Centralized IT documentation and knowledge management",
    features: ["Document storage", "Version control", "Team collaboration", "Search functionality"],
    pricing: "$89/month per team",
    icon: FileText
  },
  {
    name: "AI-Powered IT Analytics",
    description: "Intelligent analytics for IT operations and performance optimization",
    features: ["Performance insights", "Predictive analytics", "Cost optimization", "Trend analysis"],
    pricing: "$299/month per 100 devices",
    icon: BarChart3
  },
  {
    name: "Cloud Cost Optimizer",
    description: "Automated cloud cost optimization and resource management",
    features: ["Cost analysis", "Resource optimization", "Waste detection", "Budget alerts"],
    pricing: "$199/month per $10k spend",
    icon: Cloud
  },
  {
    name: "Security Compliance Tracker",
    description: "Automated security compliance monitoring and reporting",
    features: ["Compliance tracking", "Audit reports", "Risk assessment", "Policy management"],
    pricing: "$399/month per 500 users",
    icon: Shield
  },
  {
    name: "IT Automation Workflows",
    description: "Automate repetitive IT tasks with intelligent workflows",
    features: ["Task automation", "Workflow builder", "Integration APIs", "Custom triggers"],
    pricing: "$149/month per 50 workflows",
    icon: Settings
  },
  {
    name: "Remote Work IT Suite",
    description: "Complete IT solution for remote and hybrid work environments",
    features: ["VPN management", "Device security", "Collaboration tools", "Performance monitoring"],
    pricing: "$79/month per user",
    icon: Wifi
  }
];
const processSteps = [
  {
    step: "01",
    title: "IT Assessment",
    description: "We evaluate your current IT infrastructure and identify areas for improvement."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our experts create a comprehensive IT strategy aligned with your business goals."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We implement solutions with minimal disruption to your business operations."
  },
  {
    step: "04",
    title: "Monitoring & Support",
    description: "Continuous monitoring and proactive support to ensure optimal performance."
  },
  {
    step: "05",
    title: "Optimization",
    description: "Ongoing optimization and updates to keep your IT infrastructure current."
  }
];
const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "15min", label: "Response Time" },
  { number: "500+", label: "IT Projects Completed" },
  { number: "24/7", label: "Support Available" }
];
export default function ITServices() {
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT services that keep your business running smoothly. From managed IT support 
              and cloud migration to cybersecurity and data management - we provide the technology foundation your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* IT Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Complete IT solutions designed to support your business operations and drive growth.
            </p>
          </motion.div>
          {itServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Micro SaaS Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              IT Management Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized IT management tools that can be deployed quickly and scaled with your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaS.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {solution.pricing}
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Service Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful IT implementation and maximum value for your investment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss your IT needs and create a comprehensive solution that supports your business growth. 
              Get a free consultation and discover how our IT services can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="mt-8 text-gray-600">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );




=======}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}
