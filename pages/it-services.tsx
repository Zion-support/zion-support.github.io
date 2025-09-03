import Head from "next/head"
import React from "react"
import Link from "next/link"
import { 
  ArrowRight, 
  Award, 
  BarChart3, 
  Bot, 
  Brain, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  Shield, 
  Zap,
  Cpu,
  Database,
  Network,
  Settings,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Server,
  Cloud,
  HardDrive,
  Wifi,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  Building2,
  FileText,
  HelpCircle,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ExternalLink
} from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"

export default function ITServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure & Migration",
      description: "Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud",
      icon: Cloud,
      features: [
        "Cloud migration strategy and execution",
        "Multi-cloud and hybrid cloud solutions",
        "Cloud cost optimization and monitoring",
        "Auto-scaling and load balancing",
        "Disaster recovery and backup solutions",
        "Cloud security and compliance"
      ],
      pricing: "$5,000 - $50,000/month",
      delivery: "4-12 weeks",
      category: "Cloud Services",
      marketPrice: "$15,000/month average",
      benefits: "Reduce infrastructure costs by 40%, improve scalability by 300%"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security solutions and compliance management for SOC 2, GDPR, HIPAA, and more",
      icon: Shield,
      features: [
        "Zero-trust security architecture implementation",
        "SOC 2, GDPR, HIPAA compliance automation",
        "Penetration testing and vulnerability assessments",
        "Security monitoring and incident response",
        "Identity and access management (IAM)",
        "Data encryption and privacy protection"
      ],
      pricing: "$3,000 - $25,000/month",
      delivery: "3-8 weeks",
      category: "Security Services",
      marketPrice: "$8,500/month average",
      benefits: "Reduce security incidents by 85%, achieve 100% compliance"
    },
    {
      title: "Network Infrastructure & Management",
      description: "Design, implementation, and management of enterprise networks with advanced security and monitoring",
      icon: Network,
      features: [
        "SD-WAN and hybrid network solutions",
        "Network security and firewall management",
        "Wireless network design and optimization",
        "Network monitoring and performance tuning",
        "VoIP and unified communications",
        "Network documentation and training"
      ],
      pricing: "$2,000 - $15,000/month",
      delivery: "2-6 weeks",
      category: "Network Services",
      marketPrice: "$6,200/month average",
      benefits: "Improve network performance by 60%, reduce downtime by 90%"
    },
    {
      title: "IT Support & Helpdesk Services",
      description: "24/7 technical support and helpdesk services with SLA-based response times",
      icon: Users,
      features: [
        "24/7/365 technical support coverage",
        "Remote desktop and troubleshooting",
        "Software installation and updates",
        "Hardware procurement and management",
        "User training and documentation",
        "SLA-based response times"
      ],
      pricing: "$1,500 - $8,000/month",
      delivery: "1-2 weeks",
      category: "Support Services",
      marketPrice: "$3,500/month average",
      benefits: "Reduce support tickets by 50%, improve user satisfaction by 80%"
    },
    {
      title: "DevOps & CI/CD Automation",
      description: "Complete DevOps solutions with continuous integration, deployment, and infrastructure automation",
      icon: Settings,
      features: [
        "CI/CD pipeline design and implementation",
        "Infrastructure as Code (IaC) automation",
        "Container orchestration with Kubernetes",
        "Monitoring and logging solutions",
        "Automated testing and quality assurance",
        "Release management and deployment strategies"
      ],
      pricing: "$4,000 - $20,000/month",
      delivery: "4-8 weeks",
      category: "DevOps Services",
      marketPrice: "$9,000/month average",
      benefits: "Reduce deployment time by 75%, improve reliability by 95%"
    },
    {
      title: "Data Management & Analytics",
      description: "Comprehensive data solutions including warehousing, analytics, and business intelligence",
      icon: Database,
      features: [
        "Data warehouse design and implementation",
        "ETL/ELT pipeline development",
        "Business intelligence and reporting",
        "Data governance and quality management",
        "Real-time analytics and dashboards",
        "Data security and privacy compliance"
      ],
      pricing: "$3,500 - $18,000/month",
      delivery: "6-12 weeks",
      category: "Data Services",
      marketPrice: "$7,800/month average",
      benefits: "Improve data accuracy by 90%, reduce reporting time by 70%"
    },
    {
      title: "Enterprise Application Integration",
      description: "Seamless integration of enterprise applications and systems for improved workflow and data flow",
      icon: Globe,
      features: [
        "API development and management",
        "Legacy system integration and modernization",
        "Enterprise service bus (ESB) implementation",
        "Real-time data synchronization",
        "Workflow automation and orchestration",
        "Integration monitoring and management"
      ],
      pricing: "$5,000 - $25,000/month",
      delivery: "8-16 weeks",
      category: "Integration Services",
      marketPrice: "$12,000/month average",
      benefits: "Reduce integration time by 80%, improve data consistency by 95%"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting to align technology with business objectives and digital transformation",
      icon: Brain,
      features: [
        "IT strategy and roadmap development",
        "Digital transformation planning",
        "Technology assessment and recommendations",
        "IT governance and best practices",
        "Change management and training",
        "Vendor evaluation and selection"
      ],
      pricing: "$2,000 - $10,000/month",
      delivery: "2-4 weeks",
      category: "Consulting Services",
      marketPrice: "$4,500/month average",
      benefits: "Align IT with business goals, reduce technology risks by 60%"
    },
    {
      title: "Managed IT Services",
      description: "Comprehensive managed IT services including monitoring, maintenance, and proactive support",
      icon: Monitor,
      features: [
        "Proactive monitoring and maintenance",
        "Patch management and updates",
        "Performance optimization and tuning",
        "Capacity planning and scaling",
        "Backup and disaster recovery",
        "Compliance monitoring and reporting"
      ],
      pricing: "$2,500 - $12,000/month",
      delivery: "2-4 weeks",
      category: "Managed Services",
      marketPrice: "$5,800/month average",
      benefits: "Reduce IT operational costs by 45%, improve system uptime by 99.9%"
    },
    {
      title: "IoT & Edge Computing Solutions",
      description: "Internet of Things and edge computing solutions for connected devices and real-time processing",
      icon: Wifi,
      features: [
        "IoT device integration and management",
        "Edge computing infrastructure setup",
        "Real-time data processing and analytics",
        "Device security and monitoring",
        "Cloud connectivity and synchronization",
        "Custom IoT application development"
      ],
      pricing: "$4,000 - $20,000/month",
      delivery: "6-12 weeks",
      category: "IoT Services",
      marketPrice: "$9,500/month average",
      benefits: "Enable real-time decision making, reduce latency by 80%"
    }
  ]

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive IT services. From cloud infrastructure to cybersecurity, 
              we provide end-to-end technology solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT services, each designed to address specific business needs with enterprise-grade technology solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="font-semibold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Delivery:</span>
                      <span className="text-sm text-gray-700">{service.delivery}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-blue-600">{service.marketPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{service.benefits}</p>
                    
                    <div className="flex gap-2">
                      <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Get Quote
                      </Link>
                      <Link href="/demo" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our IT Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Experts</h3>
                <p className="text-gray-600">
                  Our team holds industry certifications and has extensive experience with enterprise technologies.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock support and monitoring to ensure your systems are always running optimally.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Industry-leading security practices and compliance standards to protect your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your IT needs. Our team of experts is ready to help you choose the perfect IT solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <p className="mt-6 text-sm">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}