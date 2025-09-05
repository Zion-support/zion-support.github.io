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
  Video,
  GraduationCap,
  Wifi,
  Bot,
  Home,
  Heart,
  Truck,
  Utensils
} from 'lucide-react';
import Layout from './components/Layout';

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
    marketPrice: "$2,000-4,000/month",
    benefits: ["Reduce manual work by 80%", "Improve efficiency by 60%", "Save 20+ hours/week"]
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
    marketPrice: "$2,500-5,000/month",
    benefits: ["Process 10x more data", "Real-time insights", "50% faster reporting"]
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
    marketPrice: "$2,200-4,500/month",
    benefits: ["Connect 100+ services", "99.9% uptime", "Reduce integration time by 70%"]
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
    marketPrice: "$1,500-3,500/month",
    benefits: ["Centralized data view", "Mobile access", "Custom KPIs"]
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
    benefits: ["Full-stack solution", "Scalable architecture", "Revenue-ready platform"]
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
    marketPrice: "$3,500-8,000/month",
    benefits: ["Data-driven decisions", "Predictive insights", "30% better performance"]
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Comprehensive CRM solution for managing customer relationships and sales pipeline",
    icon: Users,
    features: [
      "Lead Management",
      "Contact Database",
      "Sales Pipeline Tracking",
      "Email Marketing Integration",
      "Customer Communication History",
      "Automated Follow-ups",
      "Reporting & Analytics",
      "Mobile App Access"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Increase sales by 25%", "Improve customer retention", "Streamline sales process"]
  },
  {
    title: "Project Management Suite",
    description: "Complete project management solution with team collaboration and resource planning",
    icon: Settings,
    features: [
      "Task & Project Tracking",
      "Team Collaboration Tools",
      "Resource Planning",
      "Time Tracking",
      "Gantt Charts",
      "File Sharing",
      "Progress Reporting",
      "Integration with 50+ tools"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["Improve project delivery by 40%", "Better team coordination", "Real-time visibility"]
  },
  {
    title: "E-commerce Management Platform",
    description: "All-in-one e-commerce solution for online stores and marketplaces",
    icon: Cloud,
    features: [
      "Multi-channel Selling",
      "Inventory Management",
      "Order Processing",
      "Payment Gateway Integration",
      "Shipping Management",
      "Customer Reviews",
      "Analytics Dashboard",
      "Mobile Commerce"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Increase online sales by 35%", "Streamline operations", "Multi-platform presence"]
  },
  {
    title: "HR Management System",
    description: "Comprehensive human resources management with payroll and employee tracking",
    icon: Users,
    features: [
      "Employee Database",
      "Payroll Processing",
      "Time & Attendance",
      "Performance Reviews",
      "Benefits Management",
      "Recruitment Tools",
      "Compliance Tracking",
      "Self-service Portal"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$2,800-6,000/month",
    benefits: ["Reduce HR workload by 50%", "Improve employee satisfaction", "Ensure compliance"]
  },
  {
    title: "Financial Management Suite",
    description: "Complete financial management with accounting, invoicing, and expense tracking",
    icon: BarChart3,
    features: [
      "Accounting & Bookkeeping",
      "Invoice Generation",
      "Expense Tracking",
      "Financial Reporting",
      "Tax Preparation",
      "Bank Reconciliation",
      "Budget Planning",
      "Multi-currency Support"
    ],
    price: "Starting at $1,900/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["Save 15+ hours/week", "Improve cash flow", "Better financial visibility"]
  },
  {
    title: "Marketing Automation Platform",
    description: "Advanced marketing automation with email campaigns, lead nurturing, and analytics",
    icon: Zap,
    features: [
      "Email Marketing Campaigns",
      "Lead Scoring & Nurturing",
      "Social Media Management",
      "Content Management",
      "A/B Testing",
      "Customer Segmentation",
      "Analytics & ROI Tracking",
      "Integration with 100+ tools"
    ],
    price: "Starting at $2,300/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Increase lead conversion by 45%", "Automate marketing tasks", "Better ROI tracking"]
  },
  {
    title: "Inventory Management System",
    description: "Real-time inventory tracking with automated reordering and supplier management",
    icon: Settings,
    features: [
      "Real-time Stock Tracking",
      "Automated Reordering",
      "Supplier Management",
      "Barcode Scanning",
      "Multi-location Support",
      "Demand Forecasting",
      "Cost Analysis",
      "Mobile App Access"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$2,200-4,500/month",
    benefits: ["Reduce stockouts by 60%", "Lower inventory costs", "Improve accuracy"]
  },
  {
    title: "Document Management System",
    description: "Secure document storage, sharing, and collaboration with version control",
    icon: FileText,
    features: [
      "Secure Document Storage",
      "Version Control",
      "Collaborative Editing",
      "Document Search",
      "Access Permissions",
      "Digital Signatures",
      "Backup & Recovery",
      "Mobile Access"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$1,800-3,500/month",
    benefits: ["Improve document security", "Reduce paper usage", "Better collaboration"]
  },
  {
    title: "Customer Support Ticketing System",
    description: "Comprehensive customer support with ticket management and knowledge base",
    icon: Users,
    features: [
      "Ticket Management",
      "Knowledge Base",
      "Live Chat Integration",
      "Customer Portal",
      "SLA Management",
      "Performance Analytics",
      "Multi-channel Support",
      "Automated Responses"
    ],
    price: "Starting at $1,700/month",
    marketPrice: "$2,300-4,800/month",
    benefits: ["Improve response time by 50%", "Increase customer satisfaction", "Better support analytics"]
  },
  {
    title: "Analytics & Reporting Platform",
    description: "Advanced analytics with custom reports and data visualization",
    icon: BarChart3,
    features: [
      "Custom Dashboards",
      "Real-time Analytics",
      "Data Visualization",
      "Scheduled Reports",
      "Data Export",
      "API Integration",
      "Mobile Analytics",
      "Predictive Insights"
    ],
    price: "Starting at $2,100/month",
    marketPrice: "$2,800-6,000/month",
    benefits: ["Data-driven decisions", "Real-time insights", "Custom reporting"]
  },
  {
    title: "Social Media Management",
    description: "Complete social media management with scheduling, monitoring, and analytics",
    icon: Globe,
    features: [
      "Multi-platform Posting",
      "Content Scheduling",
      "Social Listening",
      "Engagement Tracking",
      "Analytics & Reporting",
      "Team Collaboration",
      "Content Calendar",
      "Hashtag Research"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,000-4,000/month",
    benefits: ["Increase engagement by 40%", "Save 10+ hours/week", "Better brand presence"]
  },
  {
    title: "Email Marketing Platform",
    description: "Advanced email marketing with automation, segmentation, and analytics",
    icon: Mail,
    features: [
      "Email Campaign Builder",
      "Automation Workflows",
      "List Segmentation",
      "A/B Testing",
      "Template Library",
      "Analytics & Tracking",
      "Integration with CRM",
      "Compliance Tools"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$1,600-3,200/month",
    benefits: ["Increase open rates by 25%", "Automate email sequences", "Better targeting"]
  },
  {
    title: "Video Conferencing & Webinar Platform",
    description: "Professional video conferencing with webinar capabilities and recording",
    icon: Video,
    features: [
      "HD Video Conferencing",
      "Webinar Hosting",
      "Screen Sharing",
      "Recording & Playback",
      "Chat & Polls",
      "Breakout Rooms",
      "Mobile Access",
      "Integration with Calendars"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Improve remote collaboration", "Professional presentations", "Better engagement"]
  },
  {
    title: "Learning Management System (LMS)",
    description: "Complete e-learning platform with course creation and student management",
    icon: GraduationCap,
    features: [
      "Course Creation Tools",
      "Student Management",
      "Progress Tracking",
      "Certification System",
      "Mobile Learning",
      "Assessment Tools",
      "Discussion Forums",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,400/month",
    marketPrice: "$3,200-6,500/month",
    benefits: ["Improve learning outcomes", "Scalable training", "Better engagement"]
  },
  {
    title: "IoT Device Management",
    description: "Comprehensive IoT platform for device monitoring and management",
    icon: Wifi,
    features: [
      "Device Registration",
      "Real-time Monitoring",
      "Remote Control",
      "Data Collection",
      "Alert Management",
      "Firmware Updates",
      "Security Management",
      "Analytics Dashboard"
    ],
    price: "Starting at $2,600/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Centralized device control", "Predictive maintenance", "Better efficiency"]
  },
  {
    title: "Blockchain Integration Platform",
    description: "Blockchain solutions for secure transactions and smart contracts",
    icon: Shield,
    features: [
      "Smart Contract Development",
      "Cryptocurrency Integration",
      "NFT Marketplace",
      "DeFi Solutions",
      "Security Audits",
      "Wallet Integration",
      "Transaction Tracking",
      "Compliance Tools"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$4,500-10,000/month",
    benefits: ["Enhanced security", "Transparent transactions", "Future-proof technology"]
  },
  {
    title: "AI-Powered Chatbot Platform",
    description: "Intelligent chatbot solution with natural language processing and automation",
    icon: Bot,
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Integration with CRM",
      "Analytics & Insights",
      "Custom Training",
      "Voice Integration",
      "Mobile App",
      "API Access"
    ],
    price: "Starting at $1,900/month",
    marketPrice: "$2,600-5,500/month",
    benefits: ["24/7 customer support", "Reduce support costs by 60%", "Improve response time"]
  },
  {
    title: "Real Estate Management Platform",
    description: "Complete real estate solution with property management and client tracking",
    icon: Home,
    features: [
      "Property Listings",
      "Client Management",
      "Lead Tracking",
      "Document Management",
      "Commission Tracking",
      "Market Analysis",
      "Mobile App",
      "Integration with MLS"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Increase sales by 30%", "Better client management", "Streamline operations"]
  },
  {
    title: "Healthcare Management System",
    description: "Comprehensive healthcare solution with patient management and scheduling",
    icon: Heart,
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Billing & Insurance",
      "Prescription Management",
      "Telemedicine",
      "Compliance Tracking",
      "Mobile Access",
      "Integration with Labs"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,000-8,000/month",
    benefits: ["Improve patient care", "Reduce administrative work", "Better compliance"]
  },
  {
    title: "Fleet Management System",
    description: "Complete fleet management with GPS tracking and maintenance scheduling",
    icon: Truck,
    features: [
      "GPS Tracking",
      "Route Optimization",
      "Maintenance Scheduling",
      "Driver Management",
      "Fuel Monitoring",
      "Performance Analytics",
      "Mobile App",
      "Integration with ERP"
    ],
    price: "Starting at $2,100/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["Reduce fuel costs by 20%", "Improve efficiency", "Better maintenance"]
  },
  {
    title: "Restaurant Management System",
    description: "Complete restaurant solution with POS, inventory, and customer management",
    icon: Utensils,
    features: [
      "POS System",
      "Menu Management",
      "Inventory Tracking",
      "Staff Scheduling",
      "Customer Loyalty",
      "Online Ordering",
      "Analytics Dashboard",
      "Mobile App"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Increase revenue by 25%", "Reduce waste", "Better customer experience"]
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