import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Zap, 
  BarChart3, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Globe
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "AI-Powered Workflow Automation",
    description: "Intelligent process automation with machine learning capabilities for maximum efficiency",
    icon: Zap,
    features: [
      "Smart Process Discovery",
      "AI-Driven Task Routing",
      "Predictive Workflow Optimization",
      "Natural Language Processing",
      "Intelligent Document Processing",
      "Real-time Decision Making",
      "Cross-Platform Integration",
      "Automated Compliance Checking"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-4,000/month",
    benefits: ["Reduce processing time by 75%", "Eliminate 90% of manual errors", "Increase productivity by 60%"],
    setupTime: "2-3 weeks",
    targetUsers: "Finance, Healthcare, Legal, Manufacturing"
  },
  {
    title: "Real-Time Data Analytics Platform",
    description: "Advanced data processing and visualization with real-time insights and predictive analytics",
    icon: BarChart3,
    features: [
      "Real-time Data Streaming",
      "Advanced Visualization Tools",
      "Predictive Analytics Engine",
      "Custom KPI Dashboards",
      "Automated Report Generation",
      "Data Quality Monitoring",
      "Machine Learning Integration",
      "Multi-source Data Connectors"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-6,000/month",
    benefits: ["50% faster decision making", "30% increase in data accuracy", "40% reduction in reporting time"],
    setupTime: "3-4 weeks",
    targetUsers: "E-commerce, Marketing, Operations, Sales"
  },
  {
    title: "Smart API Management Suite",
    description: "Comprehensive API development, management, and monetization platform with advanced security",
    icon: Code,
    features: [
      "Auto-Generated API Documentation",
      "Advanced Rate Limiting & Throttling",
      "API Gateway Management",
      "Real-time Analytics & Monitoring",
      "Developer Portal & SDK Generation",
      "API Versioning & Lifecycle Management",
      "OAuth 2.0 & JWT Authentication",
      "API Monetization Tools"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["Reduce API development time by 70%", "Improve API performance by 50%", "Increase developer adoption by 80%"],
    setupTime: "2-3 weeks",
    targetUsers: "SaaS Companies, Enterprises, Fintech, E-commerce"
  },
  {
    title: "Intelligent Customer Experience Platform",
    description: "AI-powered customer engagement and support automation with personalized experiences",
    icon: Users,
    features: [
      "AI Chatbot & Virtual Assistants",
      "Personalized Content Delivery",
      "Sentiment Analysis & Monitoring",
      "Automated Ticket Routing",
      "Customer Journey Mapping",
      "Real-time Support Analytics",
      "Multi-channel Communication",
      "Predictive Customer Insights"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,800-7,000/month",
    benefits: ["Increase customer satisfaction by 45%", "Reduce support costs by 60%", "Improve response time by 85%"],
    setupTime: "3-5 weeks",
    targetUsers: "Retail, SaaS, Healthcare, Education"
  },
  {
    title: "Blockchain-Based Document Management",
    description: "Secure, immutable document storage and verification system with smart contracts",
    icon: Shield,
    features: [
      "Immutable Document Storage",
      "Smart Contract Automation",
      "Digital Signature Verification",
      "Document Version Control",
      "Access Control & Permissions",
      "Audit Trail & Compliance",
      "Multi-signature Workflows",
      "Integration APIs"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,200-8,500/month",
    benefits: ["100% document integrity guarantee", "Reduce verification time by 90%", "Eliminate document fraud"],
    setupTime: "4-6 weeks",
    targetUsers: "Legal, Finance, Government, Healthcare"
  },
  {
    title: "IoT Device Management Platform",
    description: "Comprehensive IoT device monitoring, management, and analytics with edge computing",
    icon: Globe,
    features: [
      "Device Registration & Provisioning",
      "Real-time Device Monitoring",
      "Edge Computing Capabilities",
      "Data Collection & Processing",
      "Remote Device Control",
      "Predictive Maintenance",
      "Security & Encryption",
      "Scalable Cloud Infrastructure"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,500/month",
    benefits: ["Reduce maintenance costs by 40%", "Improve device uptime by 25%", "Enable predictive maintenance"],
    setupTime: "3-4 weeks",
    targetUsers: "Manufacturing, Agriculture, Smart Cities, Energy"
  },
  {
    title: "Advanced Project Management Suite",
    description: "AI-enhanced project management with resource optimization and predictive analytics",
    icon: Settings,
    features: [
      "AI-Powered Resource Allocation",
      "Predictive Project Analytics",
      "Automated Risk Assessment",
      "Real-time Collaboration Tools",
      "Time Tracking & Billing",
      "Custom Workflow Builder",
      "Integration Marketplace",
      "Advanced Reporting Suite"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Increase project success rate by 35%", "Reduce project delays by 50%", "Improve resource utilization by 40%"],
    setupTime: "2-3 weeks",
    targetUsers: "Consulting, Construction, Software Development, Marketing"
  },
  {
    title: "Financial Technology Platform",
    description: "Comprehensive fintech solutions including payment processing, risk management, and compliance",
    icon: DollarSign,
    features: [
      "Multi-currency Payment Processing",
      "Real-time Risk Assessment",
      "Regulatory Compliance Automation",
      "Fraud Detection & Prevention",
      "Financial Reporting & Analytics",
      "KYC/AML Verification",
      "Cryptocurrency Integration",
      "Banking API Connections"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Reduce transaction processing time by 80%", "Lower fraud rates by 95%", "Improve compliance efficiency by 70%"],
    setupTime: "4-6 weeks",
    targetUsers: "Banks, Fintech, E-commerce, Lending"
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant healthcare management with AI-powered diagnostics and patient care",
    icon: Heart,
    features: [
      "Electronic Health Records (EHR)",
      "AI-Powered Diagnostic Tools",
      "Patient Portal & Communication",
      "Appointment Scheduling & Management",
      "Prescription Management",
      "Telemedicine Integration",
      "Medical Billing & Insurance",
      "Compliance & Security"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-9,000/month",
    benefits: ["Improve patient outcomes by 30%", "Reduce administrative costs by 45%", "Enhance diagnostic accuracy by 25%"],
    setupTime: "5-8 weeks",
    targetUsers: "Hospitals, Clinics, Private Practices, Telemedicine"
  },
  {
    title: "E-Learning & Training Platform",
    description: "Advanced learning management system with AI-powered personalization and analytics",
    icon: GraduationCap,
    features: [
      "AI-Powered Learning Paths",
      "Interactive Content Creation",
      "Real-time Progress Tracking",
      "Gamification & Badges",
      "Video Conferencing Integration",
      "Assessment & Certification",
      "Mobile Learning Apps",
      "Advanced Analytics & Reporting"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["Increase learning engagement by 60%", "Improve completion rates by 40%", "Reduce training costs by 35%"],
    setupTime: "3-4 weeks",
    targetUsers: "Education, Corporate Training, Online Courses, Professional Development"
  },
  {
    title: "Supply Chain Optimization Platform",
    description: "AI-driven supply chain management with predictive analytics and automation",
    icon: Truck,
    features: [
      "Demand Forecasting & Planning",
      "Inventory Optimization",
      "Supplier Relationship Management",
      "Logistics & Route Optimization",
      "Risk Assessment & Mitigation",
      "Sustainability Tracking",
      "Real-time Visibility",
      "Integration with ERP Systems"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,800-7,500/month",
    benefits: ["Reduce inventory costs by 30%", "Improve delivery times by 25%", "Increase supply chain visibility by 90%"],
    setupTime: "4-6 weeks",
    targetUsers: "Manufacturing, Retail, Logistics, Food & Beverage"
  },
  {
    title: "Real Estate Management Platform",
    description: "Comprehensive property management with AI-powered market analysis and tenant management",
    icon: Home,
    features: [
      "Property Listing & Management",
      "AI Market Analysis & Pricing",
      "Tenant Screening & Management",
      "Maintenance Request Tracking",
      "Financial Reporting & Analytics",
      "Document Management",
      "Mobile Property Inspection",
      "Integration with MLS"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Increase property occupancy by 20%", "Reduce management time by 50%", "Improve tenant satisfaction by 35%"],
    setupTime: "3-4 weeks",
    targetUsers: "Property Management, Real Estate Agencies, Landlords, Commercial Real Estate"
  }
];

const industries = [
  {
    title: "Healthcare",
    description: "Patient management, telemedicine, and medical data processing",
    icon: "🏥"
  },
  {
    title: "Finance",
    description: "Payment processing, risk analysis, and financial reporting",
    icon: "💰"
  },
  {
    title: "E-commerce",
    description: "Inventory management, order processing, and customer analytics",
    icon: "🛒"
  },
  {
    title: "Education",
    description: "Learning management, student tracking, and assessment tools",
    icon: "🎓"
  },
  {
    title: "Manufacturing",
    description: "Production monitoring, quality control, and supply chain management",
    icon: "🏭"
  },
  {
    title: "Real Estate",
    description: "Property management, lead tracking, and market analysis",
    icon: "🏠"
  }
];

const whyChooseUs = [
  {
    title: "Rapid Development",
    description: "Fast delivery with agile methodologies and modern tech stack",
    icon: "⚡"
  },
  {
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise",
    icon: "📈"
  },
  {
    title: "Cost-Effective",
    description: "Affordable pricing with transparent costs and no hidden fees",
    icon: "💰"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and maintenance for your solutions",
    icon: "🛡️"
  }
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Innovative micro SaaS solutions for modern businesses. Custom automation tools, data processing, and API integrations to accelerate your growth."
      keywords="micro SaaS, SaaS development, automation tools, API integration, business intelligence, custom software"
      canonical="https://ziontechgroup.com/micro-saas"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovative 
              <span className="text-purple-400"> Micro SaaS Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your business with our cutting-edge micro SaaS platforms. 
              From workflow automation to data processing, we create powerful tools 
              that drive efficiency and growth.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused solutions designed to solve specific business challenges and drive operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <solution.icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-purple-600">{solution.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our micro SaaS solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
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
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Micro SaaS Solution?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their micro SaaS needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
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