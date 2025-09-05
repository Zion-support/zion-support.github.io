import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import {
  Network,
  Shield,
  Cloud,
  Database,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Settings,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Target,
  TrendingUp,
  BarChart3,
  Code,
  Terminal,
  GitBranch,
  Layers,
  Building,
  Car,
  Heart,
  ShoppingCart,
  Factory,
  Banknote,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Sprout,
  Rocket,
  Brain,
  Eye,
  MessageSquare,
  FileText,
  Search,
  Mic,
  Bot,
  Calendar,
  Headphones,
  Wrench,
  Cog,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero
} from 'lucide-react';

export default function ITServices() {
  const itServices = [
    {
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud Platform expertise.",
      icon: Cloud,
      features: [
        "Multi-cloud architecture design",
        "Serverless computing setup",
        "Container orchestration (Kubernetes)",
        "Auto-scaling configuration",
        "Cost optimization strategies",
        "Disaster recovery planning",
        "Cloud security implementation",
        "24/7 monitoring & support"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability by 300%",
        "Enhance security posture",
        "Increase system reliability to 99.9%"
      ],
      price: "$2,500 - $8,000/month",
      marketPrice: "$4,000 - $12,000/month",
      category: "Cloud Computing",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including zero-trust architecture, threat detection, and compliance management.",
      icon: Shield,
      features: [
        "Security assessment & auditing",
        "Penetration testing",
        "Zero-trust architecture implementation",
        "Threat detection & response",
        "Identity & access management",
        "Compliance management (SOC 2, ISO 27001)",
        "Security training & awareness",
        "Incident response planning"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve compliance certification",
        "Protect against advanced threats",
        "Improve security posture by 200%"
      ],
      price: "$3,000 - $10,000/month",
      marketPrice: "$5,000 - $15,000/month",
      category: "Security",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Network Infrastructure & Management",
      description: "Enterprise-grade network design, implementation, and management with advanced monitoring and optimization.",
      icon: Network,
      features: [
        "Network design & architecture",
        "Wireless network deployment",
        "Network security implementation",
        "Performance monitoring & optimization",
        "Load balancing configuration",
        "VPN setup & management",
        "Network automation",
        "24/7 network monitoring"
      ],
      benefits: [
        "Improve network performance by 150%",
        "Reduce downtime by 95%",
        "Enhance security posture",
        "Optimize network costs by 30%"
      ],
      price: "$1,800 - $6,000/month",
      marketPrice: "$3,000 - $9,000/month",
      category: "Networking",
      popular: true,
      setupTime: "2-3 weeks"
    },
    {
      name: "Database Solutions & Management",
      description: "Advanced database design, optimization, and management with real-time monitoring and backup solutions.",
      icon: Database,
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Data migration services",
        "Backup & disaster recovery",
        "Real-time monitoring",
        "Security implementation",
        "Scalability planning",
        "Database automation"
      ],
      benefits: [
        "Improve database performance by 200%",
        "Reduce data loss risk by 99%",
        "Optimize query performance",
        "Ensure data integrity & security"
      ],
      price: "$2,200 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Database",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "DevOps & Automation",
      description: "Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment strategies.",
      icon: GitBranch,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Automated testing & deployment",
        "Monitoring & logging",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality by 150%",
        "Increase deployment frequency by 500%",
        "Reduce manual errors by 95%"
      ],
      price: "$2,800 - $9,000/month",
      marketPrice: "$4,500 - $13,000/month",
      category: "DevOps",
      popular: true,
      setupTime: "3-5 weeks"
    },
    {
      name: "IT Support & Help Desk",
      description: "Comprehensive IT support services with 24/7 monitoring, remote assistance, and proactive maintenance.",
      icon: Headphones,
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Proactive system monitoring",
        "Hardware & software maintenance",
        "User training & onboarding",
        "Incident management",
        "Change management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce IT downtime by 90%",
        "Improve user satisfaction by 200%",
        "Lower IT support costs by 50%",
        "Proactive issue resolution"
      ],
      price: "$1,500 - $5,000/month",
      marketPrice: "$2,500 - $7,500/month",
      category: "Support",
      popular: true,
      setupTime: "1-2 weeks"
    },
    {
      name: "System Integration & APIs",
      description: "Seamless integration of disparate systems with custom APIs, middleware, and data synchronization solutions.",
      icon: Layers,
      features: [
        "Custom API development",
        "System integration planning",
        "Data synchronization",
        "Middleware implementation",
        "Legacy system modernization",
        "Real-time data processing",
        "Error handling & monitoring",
        "Documentation & testing"
      ],
      benefits: [
        "Improve system efficiency by 180%",
        "Reduce manual data entry by 95%",
        "Enhance data accuracy by 99%",
        "Streamline business processes"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Integration",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics platform with real-time dashboards, predictive analytics, and business intelligence solutions.",
      icon: BarChart3,
      features: [
        "Data warehouse design",
        "ETL/ELT processes",
        "Real-time dashboards",
        "Predictive analytics",
        "Machine learning integration",
        "Data visualization",
        "Report automation",
        "Data governance"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify trends 5x faster",
        "Improve business performance by 40%",
        "Reduce reporting time by 85%"
      ],
      price: "$3,500 - $12,000/month",
      marketPrice: "$6,000 - $18,000/month",
      category: "Analytics",
      popular: true,
      setupTime: "4-8 weeks"
    },
    {
      name: "Mobile & Web Development",
      description: "Full-stack development services for web applications, mobile apps, and progressive web applications with modern technologies.",
      icon: Smartphone,
      features: [
        "Web application development",
        "Mobile app development (iOS/Android)",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "UI/UX design",
        "Performance optimization",
        "Security implementation",
        "Testing & quality assurance"
      ],
      benefits: [
        "Modern, responsive applications",
        "Cross-platform compatibility",
        "Enhanced user experience",
        "Scalable architecture"
      ],
      price: "$4,000 - $15,000/month",
      marketPrice: "$7,000 - $25,000/month",
      category: "Development",
      popular: true,
      setupTime: "6-12 weeks"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology roadmaps, digital transformation, and IT governance.",
      icon: Users,
      features: [
        "Technology roadmap planning",
        "Digital transformation strategy",
        "IT governance & compliance",
        "Technology assessment",
        "Vendor management",
        "Cost optimization",
        "Risk assessment",
        "Change management"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology costs by 30%",
        "Improve IT efficiency by 150%",
        "Strategic technology planning"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Consulting",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity and data protection.",
      icon: HardDrive,
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data replication",
        "Recovery testing",
        "Compliance reporting",
        "Cloud backup solutions",
        "Offsite storage management",
        "Recovery time optimization"
      ],
      benefits: [
        "Protect against data loss",
        "Minimize downtime during disasters",
        "Ensure business continuity",
        "Comply with regulations"
      ],
      price: "$1,200 - $4,500/month",
      marketPrice: "$2,000 - $6,500/month",
      category: "Data Protection",
      popular: true,
      setupTime: "1-3 weeks"
    },
    {
      name: "IT Security Monitoring",
      description: "24/7 security monitoring and threat detection with advanced SIEM solutions and incident response capabilities.",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Threat detection & analysis",
        "SIEM implementation",
        "Incident response",
        "Vulnerability scanning",
        "Security reporting",
        "Compliance monitoring",
        "Threat intelligence"
      ],
      benefits: [
        "Detect threats in real-time",
        "Reduce security incidents by 85%",
        "Improve response time by 90%",
        "Maintain compliance standards"
      ],
      price: "$2,500 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Security Monitoring",
      popular: true,
      setupTime: "2-4 weeks"
    }
  ];

  const stats = [
    { number: "70+", label: "IT Services Available" },
    { number: "500+", label: "Infrastructure Projects" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" }
  ];

  const industries = [
    { name: "Healthcare", icon: Heart, count: 25 },
    { name: "Finance", icon: Banknote, count: 18 },
    { name: "Manufacturing", icon: Factory, count: 22 },
    { name: "Retail", icon: ShoppingCart, count: 15 },
    { name: "Education", icon: BookOpen, count: 12 },
    { name: "Government", icon: Building, count: 8 }
  ];

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions."
      keywords="IT services, cloud computing, cybersecurity, network infrastructure, DevOps, database management, IT consulting"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running smoothly, securely, and efficiently.
              From cloud infrastructure to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Started Today
              </Link>
              <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions
                tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      {service.popular && (
                        <Star className="w-5 h-5 text-yellow-500 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">vs {service.marketPrice}</span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      Save up to ${parseInt(service.marketPrice.split('-')[1].replace(/[^0-9]/g, '')) - parseInt(service.price.split('-')[1].replace(/[^0-9]/g, ''))}/month
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <Link
                      href="/contact"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our IT services are trusted by businesses across various industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <industry.icon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count} projects</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT infrastructure
              that drives your business forward.
              <br className="hidden md:block" />
              <span className="text-blue-200 font-semibold">Get your free consultation today!</span>
            </p>
            <div className="mb-8">
              <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
              <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get Free Consultation
              </Link>
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}