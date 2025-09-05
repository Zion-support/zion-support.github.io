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
  Globe,
  FileText,
  GraduationCap,
  Package,
  Target,
  Calendar,
  ClipboardList
} from 'lucide-react';
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const microSaasSolutions = [
  {
    title: "Workflow Automation",
    description: "Streamline business processes with intelligent automation tools",
    icon: Zap,
    features: [
      "Process Automation",
      "Task Scheduling",
      "Data Integration",
      "Custom Workflows",
      "API Integrations",
      "Real-time Notifications"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-4,000/month",
    benefits: ["80% time savings", "95% accuracy", "50% cost reduction"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Data Processing Tools",
    description: "Powerful data analysis and processing solutions",
    icon: BarChart3,
    features: [
      "Data Visualization",
      "ETL Processes",
      "Real-time Analytics",
      "Custom Dashboards",
      "Report Generation",
      "Data Export/Import"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,000-5,000/month",
    benefits: ["10x faster processing", "Real-time insights", "Automated reporting"],
    setupTime: "3-4 weeks"
  },
  {
    title: "API Integration Services",
    description: "Connect your systems with seamless API solutions",
    icon: Code,
    features: [
      "REST API Development",
      "Third-party Integrations",
      "Webhook Management",
      "API Documentation",
      "Rate Limiting",
      "Authentication & Security"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-4,500/month",
    benefits: ["99.9% uptime", "Unlimited integrations", "24/7 monitoring"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Custom Dashboard Solutions",
    description: "Tailored dashboards for your business needs",
    icon: Settings,
    features: [
      "Real-time Monitoring",
      "Custom Widgets",
      "User Management",
      "Role-based Access",
      "Mobile Responsive",
      "Export Capabilities"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-3,500/month",
    benefits: ["Custom design", "Real-time updates", "Mobile-first"],
    setupTime: "1-2 weeks"
  },
  {
    title: "SaaS Platform Development",
    description: "Complete SaaS solutions from concept to deployment",
    icon: Cloud,
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Payment Integration",
      "User Onboarding",
      "Analytics & Reporting",
      "Scalable Infrastructure"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Scalable architecture", "Revenue optimization", "Enterprise-ready"],
    setupTime: "6-12 weeks"
  },
  {
    title: "Business Intelligence Tools",
    description: "Advanced BI solutions for data-driven decisions",
    icon: BarChart3,
    features: [
      "Interactive Dashboards",
      "Predictive Analytics",
      "Data Mining",
      "Custom Reports",
      "Machine Learning Integration",
      "Real-time Insights"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Data-driven decisions", "Predictive insights", "ROI tracking"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Comprehensive CRM solution to manage customer relationships and sales pipeline",
    icon: Users,
    features: [
      "Lead Management",
      "Contact Organization",
      "Sales Pipeline Tracking",
      "Email Integration",
      "Task Automation",
      "Reporting & Analytics",
      "Mobile App",
      "Third-party Integrations"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["40% increase in sales", "60% better lead conversion", "Centralized customer data"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Project Management Platform",
    description: "Complete project management solution with team collaboration and resource planning",
    icon: Settings,
    features: [
      "Task Management",
      "Team Collaboration",
      "Time Tracking",
      "Resource Planning",
      "Gantt Charts",
      "File Sharing",
      "Progress Reporting",
      "Mobile Access"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["30% faster delivery", "Better team coordination", "Resource optimization"],
    setupTime: "2-3 weeks"
  },
  {
    title: "E-commerce Management System",
    description: "Complete e-commerce solution with inventory, orders, and customer management",
    icon: Globe,
    features: [
      "Product Catalog Management",
      "Inventory Tracking",
      "Order Processing",
      "Payment Gateway Integration",
      "Customer Management",
      "Analytics Dashboard",
      "Multi-channel Selling",
      "Automated Marketing"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-9,000/month",
    benefits: ["25% increase in sales", "Automated operations", "Multi-platform selling"],
    setupTime: "4-6 weeks"
  },
  {
    title: "HR Management System",
    description: "Comprehensive HR solution for employee management, payroll, and performance tracking",
    icon: Users,
    features: [
      "Employee Database",
      "Payroll Management",
      "Time & Attendance",
      "Performance Reviews",
      "Leave Management",
      "Recruitment Tools",
      "Compliance Tracking",
      "Employee Self-Service"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,200-6,500/month",
    benefits: ["50% HR efficiency", "Automated payroll", "Better compliance"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Financial Management Platform",
    description: "Complete financial management solution with accounting, invoicing, and reporting",
    icon: BarChart3,
    features: [
      "Accounting & Bookkeeping",
      "Invoice Generation",
      "Expense Tracking",
      "Financial Reporting",
      "Tax Management",
      "Budget Planning",
      "Bank Integration",
      "Audit Trail"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Automated accounting", "Real-time financials", "Tax compliance"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Content Management System (CMS)",
    description: "Powerful CMS for managing digital content across multiple channels",
    icon: FileText,
    features: [
      "Content Creation & Editing",
      "Multi-channel Publishing",
      "SEO Optimization",
      "Media Management",
      "User Permissions",
      "Version Control",
      "Analytics Integration",
      "API Access"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Faster content creation", "Better SEO", "Multi-platform publishing"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Learning Management System (LMS)",
    description: "Complete e-learning platform for training and education",
    icon: GraduationCap,
    features: [
      "Course Creation Tools",
      "Student Management",
      "Progress Tracking",
      "Assessment Tools",
      "Certification System",
      "Video Streaming",
      "Mobile Learning",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-7,500/month",
    benefits: ["Scalable training", "Better engagement", "Progress tracking"],
    setupTime: "4-5 weeks"
  },
  {
    title: "Inventory Management System",
    description: "Advanced inventory tracking and management solution",
    icon: Package,
    features: [
      "Real-time Inventory Tracking",
      "Automated Reordering",
      "Barcode Scanning",
      "Multi-location Support",
      "Supplier Management",
      "Cost Tracking",
      "Reporting & Analytics",
      "Mobile Access"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["30% inventory reduction", "Automated reordering", "Real-time visibility"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Marketing Automation Platform",
    description: "Comprehensive marketing automation for lead nurturing and campaign management",
    icon: Target,
    features: [
      "Email Marketing",
      "Lead Scoring",
      "Campaign Management",
      "A/B Testing",
      "Social Media Integration",
      "Analytics & Reporting",
      "CRM Integration",
      "Personalization Engine"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,500/month",
    benefits: ["300% lead conversion", "Automated nurturing", "Better ROI tracking"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Customer Support System",
    description: "Complete customer support solution with ticketing and knowledge base",
    icon: Shield,
    features: [
      "Ticket Management",
      "Knowledge Base",
      "Live Chat Integration",
      "Customer Portal",
      "SLA Management",
      "Performance Analytics",
      "Multi-channel Support",
      "Automation Rules"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["50% faster resolution", "Better customer satisfaction", "Automated workflows"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Analytics & Reporting Platform",
    description: "Advanced analytics platform for business intelligence and data visualization",
    icon: BarChart3,
    features: [
      "Custom Dashboards",
      "Real-time Analytics",
      "Data Visualization",
      "Predictive Analytics",
      "Automated Reports",
      "Data Integration",
      "Mobile Dashboards",
      "Alert System"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Data-driven decisions", "Real-time insights", "Automated reporting"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Document Management System",
    description: "Secure document storage, sharing, and collaboration platform",
    icon: FileText,
    features: [
      "Document Storage",
      "Version Control",
      "Collaborative Editing",
      "Access Control",
      "Search & Discovery",
      "Workflow Automation",
      "Compliance Management",
      "Mobile Access"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,000/month",
    benefits: ["Centralized documents", "Better collaboration", "Enhanced security"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Event Management Platform",
    description: "Complete event management solution for planning, registration, and execution",
    icon: Calendar,
    features: [
      "Event Planning Tools",
      "Registration Management",
      "Payment Processing",
      "Attendee Management",
      "Communication Tools",
      "Analytics & Reporting",
      "Mobile App",
      "Integration APIs"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-6,500/month",
    benefits: ["Streamlined planning", "Better attendee experience", "Automated processes"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Survey & Feedback Platform",
    description: "Advanced survey creation and feedback collection system",
    icon: ClipboardList,
    features: [
      "Survey Builder",
      "Multiple Question Types",
      "Response Analytics",
      "Custom Branding",
      "Multi-language Support",
      "Integration APIs",
      "Real-time Results",
      "Export Capabilities"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["Better insights", "Automated collection", "Professional surveys"],
    setupTime: "1-2 weeks"
  },
  {
    title: "API Gateway & Management",
    description: "Comprehensive API management platform for security, monitoring, and analytics",
    icon: Code,
    features: [
      "API Gateway",
      "Rate Limiting",
      "Authentication & Authorization",
      "API Documentation",
      "Monitoring & Analytics",
      "Developer Portal",
      "Version Management",
      "Security Policies"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Enhanced security", "Better performance", "Developer experience"],
    setupTime: "3-4 weeks"
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
              <a href={`tel:${contactInfo.phone}`} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call {contactInfo.phone}
              </a>
            </motion.div>
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-blue-200 mb-2">Ready to transform your business?</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  {contactInfo.email}
                </a>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  {contactInfo.phone}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {contactInfo.address}
                </div>
              </div>
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
                  {solution.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-600">{solution.price}</span>
                    <span className="text-sm text-gray-500">Market: {solution.marketPrice}</span>
                  </div>
                  {solution.benefits && (
                    <div className="text-xs text-green-600 font-medium">
                      Benefits: {solution.benefits.join(", ")}
                    </div>
                  )}
                  {solution.setupTime && (
                    <div className="text-xs text-blue-600">
                      Setup: {solution.setupTime}
                    </div>
                  )}
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