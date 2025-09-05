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
  Package,
  Clock,
  MessageSquare,
  DollarSign,
  FileText,
  Target,
  Calendar,
  Video,
  Lock,
  Monitor,
  HardDrive,
  Search,
  ClipboardList,
  Truck,
  GraduationCap,
  Home,
  ShoppingCart,
  Heart
} from 'lucide-react';
import Layout from '../components/Layout';

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
    price: "Starting at $1,500/month"
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
    price: "Starting at $2,000/month"
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
    price: "Starting at $1,800/month"
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
    price: "Starting at $1,200/month"
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
    price: "Starting at $3,500/month"
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
    price: "Starting at $2,500/month"
  },
  {
    title: "AI-Powered CRM System",
    description: "Intelligent customer relationship management with predictive analytics and automation",
    icon: Users,
    features: [
      "AI Lead Scoring",
      "Predictive Analytics",
      "Automated Follow-ups",
      "Customer Segmentation",
      "Sales Forecasting",
      "Integration APIs"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Smart Inventory Management",
    description: "Automated inventory tracking with AI-powered demand forecasting",
    icon: Package,
    features: [
      "Real-time Stock Tracking",
      "Demand Forecasting",
      "Automated Reordering",
      "Multi-location Support",
      "Barcode Scanning",
      "Analytics Dashboard"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Employee Time Tracking",
    description: "Advanced time tracking with productivity analytics and project management",
    icon: Clock,
    features: [
      "Time Tracking",
      "Project Management",
      "Productivity Analytics",
      "Team Collaboration",
      "Reporting & Invoicing",
      "Mobile App"
    ],
    price: "Starting at $800/month"
  },
  {
    title: "Email Marketing Automation",
    description: "Intelligent email campaigns with personalization and analytics",
    icon: Mail,
    features: [
      "Drag & Drop Editor",
      "A/B Testing",
      "Personalization Engine",
      "Behavioral Triggers",
      "Analytics & Reporting",
      "List Management"
    ],
    price: "Starting at $900/month"
  },
  {
    title: "Social Media Management",
    description: "Comprehensive social media scheduling and analytics platform",
    icon: Globe,
    features: [
      "Multi-platform Posting",
      "Content Calendar",
      "Analytics Dashboard",
      "Team Collaboration",
      "Hashtag Research",
      "Competitor Analysis"
    ],
    price: "Starting at $1,100/month"
  },
  {
    title: "Project Management Suite",
    description: "Complete project management with team collaboration and resource planning",
    icon: ClipboardList,
    features: [
      "Task Management",
      "Gantt Charts",
      "Resource Planning",
      "Team Collaboration",
      "Time Tracking",
      "Budget Management"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Customer Support Ticketing",
    description: "AI-powered customer support with automated responses and analytics",
    icon: MessageSquare,
    features: [
      "Ticket Management",
      "AI Chatbot",
      "Knowledge Base",
      "SLA Management",
      "Performance Analytics",
      "Multi-channel Support"
    ],
    price: "Starting at $1,000/month"
  },
  {
    title: "Financial Management Tool",
    description: "Comprehensive financial tracking and reporting for small businesses",
    icon: DollarSign,
    features: [
      "Expense Tracking",
      "Invoice Generation",
      "Financial Reporting",
      "Tax Preparation",
      "Budget Planning",
      "Bank Integration"
    ],
    price: "Starting at $1,300/month"
  },
  {
    title: "HR Management System",
    description: "Complete human resources management with employee self-service",
    icon: Users,
    features: [
      "Employee Database",
      "Payroll Management",
      "Leave Management",
      "Performance Reviews",
      "Recruitment Tools",
      "Compliance Tracking"
    ],
    price: "Starting at $1,400/month"
  },
  {
    title: "Document Management",
    description: "Secure document storage and collaboration with version control",
    icon: FileText,
    features: [
      "Document Storage",
      "Version Control",
      "Collaboration Tools",
      "Search & Indexing",
      "Access Control",
      "Audit Trail"
    ],
    price: "Starting at $700/month"
  },
  {
    title: "Lead Generation Platform",
    description: "Automated lead generation and nurturing with CRM integration",
    icon: Target,
    features: [
      "Lead Capture Forms",
      "Lead Scoring",
      "Email Sequences",
      "CRM Integration",
      "Analytics Dashboard",
      "A/B Testing"
    ],
    price: "Starting at $1,600/month"
  },
  {
    title: "E-commerce Analytics",
    description: "Advanced analytics and insights for online stores",
    icon: BarChart3,
    features: [
      "Sales Analytics",
      "Customer Behavior",
      "Conversion Tracking",
      "Revenue Forecasting",
      "Product Performance",
      "Custom Reports"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Content Management System",
    description: "Flexible CMS with multi-site support and SEO optimization",
    icon: FileText,
    features: [
      "Multi-site Management",
      "SEO Optimization",
      "Content Scheduling",
      "User Management",
      "Template Engine",
      "API Integration"
    ],
    price: "Starting at $1,000/month"
  },
  {
    title: "Survey & Feedback Tool",
    description: "Create and analyze surveys with advanced reporting and automation",
    icon: ClipboardList,
    features: [
      "Survey Builder",
      "Response Analytics",
      "Automated Reports",
      "Email Distribution",
      "Custom Branding",
      "Integration APIs"
    ],
    price: "Starting at $600/month"
  },
  {
    title: "Appointment Scheduling",
    description: "Smart scheduling system with calendar integration and notifications",
    icon: Calendar,
    features: [
      "Online Booking",
      "Calendar Sync",
      "Automated Reminders",
      "Payment Processing",
      "Team Scheduling",
      "Mobile App"
    ],
    price: "Starting at $800/month"
  },
  {
    title: "Video Conferencing Platform",
    description: "Professional video meetings with recording and collaboration tools",
    icon: Video,
    features: [
      "HD Video Calls",
      "Screen Sharing",
      "Recording & Playback",
      "Chat & Whiteboard",
      "Meeting Rooms",
      "Mobile Support"
    ],
    price: "Starting at $1,100/month"
  },
  {
    title: "Password Manager",
    description: "Secure password management with team sharing and compliance",
    icon: Lock,
    features: [
      "Password Generation",
      "Secure Storage",
      "Team Sharing",
      "Two-Factor Auth",
      "Breach Monitoring",
      "Compliance Reporting"
    ],
    price: "Starting at $500/month"
  },
  {
    title: "Website Monitoring",
    description: "Uptime monitoring and performance analytics for websites",
    icon: Monitor,
    features: [
      "Uptime Monitoring",
      "Performance Metrics",
      "Alert Notifications",
      "Historical Reports",
      "Multi-location Testing",
      "API Monitoring"
    ],
    price: "Starting at $400/month"
  },
  {
    title: "API Management Platform",
    description: "Comprehensive API development, testing, and monitoring solution",
    icon: Code,
    features: [
      "API Gateway",
      "Rate Limiting",
      "Authentication",
      "Analytics & Monitoring",
      "Documentation",
      "Testing Tools"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Data Backup Solution",
    description: "Automated cloud backup with encryption and disaster recovery",
    icon: HardDrive,
    features: [
      "Automated Backups",
      "Encryption",
      "Version Control",
      "Disaster Recovery",
      "Cross-platform Sync",
      "Compliance Support"
    ],
    price: "Starting at $300/month"
  },
  {
    title: "SEO Optimization Tool",
    description: "Comprehensive SEO analysis and optimization recommendations",
    icon: Search,
    features: [
      "Keyword Research",
      "Site Analysis",
      "Competitor Tracking",
      "Rank Monitoring",
      "Technical SEO",
      "Content Optimization"
    ],
    price: "Starting at $900/month"
  },
  {
    title: "Marketing Automation",
    description: "End-to-end marketing automation with lead nurturing and analytics",
    icon: Zap,
    features: [
      "Lead Nurturing",
      "Email Campaigns",
      "Behavioral Triggers",
      "Lead Scoring",
      "Analytics Dashboard",
      "CRM Integration"
    ],
    price: "Starting at $1,700/month"
  },
  {
    title: "Customer Analytics Platform",
    description: "Deep customer insights with behavioral analysis and segmentation",
    icon: BarChart3,
    features: [
      "Behavioral Analytics",
      "Customer Segmentation",
      "Cohort Analysis",
      "Churn Prediction",
      "Lifetime Value",
      "Custom Dashboards"
    ],
    price: "Starting at $1,400/month"
  },
  {
    title: "Team Communication Hub",
    description: "All-in-one team communication with chat, video, and file sharing",
    icon: MessageSquare,
    features: [
      "Team Chat",
      "Video Calls",
      "File Sharing",
      "Project Channels",
      "Mobile Apps",
      "Integration Hub"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Compliance Management",
    description: "Automated compliance tracking and reporting for various regulations",
    icon: Shield,
    features: [
      "Regulation Tracking",
      "Audit Management",
      "Document Control",
      "Risk Assessment",
      "Reporting Tools",
      "Training Management"
    ],
    price: "Starting at $1,800/month"
  },
  {
    title: "Fleet Management System",
    description: "Complete fleet tracking and management with GPS and analytics",
    icon: Truck,
    features: [
      "GPS Tracking",
      "Route Optimization",
      "Driver Management",
      "Fuel Monitoring",
      "Maintenance Scheduling",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,000/month"
  },
  {
    title: "Learning Management System",
    description: "Online learning platform with course creation and student management",
    icon: GraduationCap,
    features: [
      "Course Creation",
      "Student Management",
      "Progress Tracking",
      "Certification",
      "Mobile Learning",
      "Analytics & Reports"
    ],
    price: "Starting at $1,300/month"
  },
  {
    title: "Event Management Platform",
    description: "Complete event planning and management with ticketing and analytics",
    icon: Calendar,
    features: [
      "Event Creation",
      "Ticketing System",
      "Attendee Management",
      "Payment Processing",
      "Analytics Dashboard",
      "Mobile App"
    ],
    price: "Starting at $1,100/month"
  },
  {
    title: "Property Management System",
    description: "Comprehensive property management with tenant portal and maintenance tracking",
    icon: Home,
    features: [
      "Property Database",
      "Tenant Portal",
      "Maintenance Tracking",
      "Rent Collection",
      "Financial Reporting",
      "Document Management"
    ],
    price: "Starting at $1,500/month"
  },
  {
    title: "Restaurant Management",
    description: "Complete restaurant operations management with POS and inventory",
    icon: ShoppingCart,
    features: [
      "POS System",
      "Inventory Management",
      "Staff Scheduling",
      "Customer Management",
      "Analytics Dashboard",
      "Online Ordering"
    ],
    price: "Starting at $1,200/month"
  },
  {
    title: "Healthcare Management",
    description: "Patient management system with scheduling and electronic records",
    icon: Heart,
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Billing Management",
      "Prescription Tracking",
      "Insurance Processing",
      "Telemedicine Support"
    ],
    price: "Starting at $2,200/month"
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