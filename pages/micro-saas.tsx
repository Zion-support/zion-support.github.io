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
  DollarSign,
  Calendar,
  Target,
  FileText,
  ShoppingCart,
  Home,
  Heart,
  GraduationCap,
  Truck,
  Utensils
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "AI-Powered Customer Support Platform",
    description: "Intelligent customer service automation with natural language processing and sentiment analysis",
    icon: Users,
    features: [
      "AI Chatbot Integration",
      "Sentiment Analysis",
      "Multi-language Support",
      "Ticket Auto-routing",
      "Knowledge Base Management",
      "Performance Analytics",
      "CRM Integration",
      "Real-time Monitoring"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-8,000/month",
    benefits: ["Reduce support costs by 60%", "Improve response time by 80%", "Increase customer satisfaction by 45%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Smart Inventory Management System",
    description: "AI-driven inventory optimization with predictive analytics and automated reordering",
    icon: Package,
    features: [
      "Predictive Demand Forecasting",
      "Automated Reorder Points",
      "Multi-location Tracking",
      "Barcode/QR Code Scanning",
      "Supplier Management",
      "Cost Optimization",
      "Real-time Alerts",
      "Mobile App Access"
    ],
    price: "Starting at $1,900/month",
    marketPrice: "$3,200-6,500/month",
    benefits: ["Reduce inventory costs by 25%", "Eliminate stockouts by 90%", "Improve cash flow by 35%"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Advanced Analytics Dashboard",
    description: "Comprehensive business intelligence platform with real-time data visualization and insights",
    icon: BarChart3,
    features: [
      "Real-time Data Visualization",
      "Custom KPI Tracking",
      "Automated Report Generation",
      "Data Source Integration",
      "Predictive Analytics",
      "Mobile Responsive Design",
      "Role-based Access Control",
      "Export & Sharing Tools"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,800-7,200/month",
    benefits: ["Improve decision speed by 50%", "Reduce reporting time by 70%", "Increase data accuracy by 95%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Workflow Automation Engine",
    description: "No-code workflow automation platform for business process optimization",
    icon: Zap,
    features: [
      "Visual Workflow Builder",
      "API Integrations",
      "Conditional Logic",
      "Approval Workflows",
      "Document Processing",
      "Email Automation",
      "Task Scheduling",
      "Performance Monitoring"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Reduce manual work by 75%", "Improve process efficiency by 60%", "Eliminate human errors by 90%"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Financial Management Suite",
    description: "Comprehensive financial tracking, budgeting, and forecasting platform",
    icon: DollarSign,
    features: [
      "Expense Tracking & Categorization",
      "Budget Planning & Monitoring",
      "Cash Flow Forecasting",
      "Invoice Generation & Management",
      "Tax Preparation Tools",
      "Financial Reporting",
      "Bank Account Integration",
      "Multi-currency Support"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Save 10+ hours per week", "Improve financial accuracy by 85%", "Reduce accounting costs by 40%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Project Management Platform",
    description: "Advanced project tracking with AI-powered resource allocation and timeline optimization",
    icon: Calendar,
    features: [
      "Gantt Chart Visualization",
      "Resource Allocation",
      "Time Tracking",
      "Team Collaboration Tools",
      "Milestone Tracking",
      "Budget Management",
      "Risk Assessment",
      "Progress Reporting"
    ],
    price: "Starting at $2,100/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Improve project delivery by 40%", "Reduce project costs by 25%", "Increase team productivity by 50%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "HR Management System",
    description: "Complete human resources platform with recruitment, onboarding, and performance management",
    icon: Users,
    features: [
      "Employee Database Management",
      "Recruitment & Applicant Tracking",
      "Onboarding Workflows",
      "Performance Reviews",
      "Time & Attendance Tracking",
      "Payroll Integration",
      "Benefits Administration",
      "Compliance Management"
    ],
    price: "Starting at $2,400/month",
    marketPrice: "$4,000-8,500/month",
    benefits: ["Reduce HR admin time by 70%", "Improve employee satisfaction by 30%", "Ensure compliance 100%"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Marketing Automation Platform",
    description: "AI-powered marketing tools for lead generation, nurturing, and conversion optimization",
    icon: Target,
    features: [
      "Email Marketing Campaigns",
      "Lead Scoring & Qualification",
      "Social Media Management",
      "Content Scheduling",
      "A/B Testing Tools",
      "ROI Tracking",
      "Customer Segmentation",
      "Marketing Analytics"
    ],
    price: "Starting at $2,600/month",
    marketPrice: "$4,200-9,000/month",
    benefits: ["Increase lead conversion by 45%", "Reduce marketing costs by 35%", "Improve campaign ROI by 60%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Document Management System",
    description: "Secure document storage, collaboration, and workflow management platform",
    icon: FileText,
    features: [
      "Secure Cloud Storage",
      "Version Control",
      "Collaborative Editing",
      "Digital Signatures",
      "Document Search & Indexing",
      "Access Control & Permissions",
      "Audit Trails",
      "Mobile Access"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Reduce document search time by 80%", "Improve collaboration by 65%", "Ensure security compliance 100%"],
    setupTime: "1-2 weeks"
  },
  {
    title: "E-commerce Management Suite",
    description: "Complete online store management with inventory, orders, and customer analytics",
    icon: ShoppingCart,
    features: [
      "Multi-channel Selling",
      "Inventory Synchronization",
      "Order Processing Automation",
      "Customer Management",
      "Payment Processing",
      "Shipping Integration",
      "Analytics & Reporting",
      "Mobile App"
    ],
    price: "Starting at $2,300/month",
    marketPrice: "$3,800-7,500/month",
    benefits: ["Increase sales by 35%", "Reduce order processing time by 60%", "Improve customer experience by 50%"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Real Estate Management Platform",
    description: "Comprehensive property management with tenant tracking, maintenance, and financial reporting",
    icon: Home,
    features: [
      "Property Portfolio Management",
      "Tenant & Lease Tracking",
      "Maintenance Request System",
      "Rent Collection & Invoicing",
      "Financial Reporting",
      "Document Management",
      "Communication Tools",
      "Mobile App for Tenants"
    ],
    price: "Starting at $1,700/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["Reduce administrative time by 60%", "Improve tenant satisfaction by 40%", "Increase revenue by 25%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Healthcare Practice Management",
    description: "Complete practice management system for healthcare providers with patient scheduling and billing",
    icon: Heart,
    features: [
      "Patient Scheduling & Management",
      "Electronic Health Records",
      "Billing & Insurance Processing",
      "Appointment Reminders",
      "Prescription Management",
      "Telemedicine Integration",
      "Compliance Reporting",
      "Mobile Access"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,500-9,000/month",
    benefits: ["Reduce administrative burden by 50%", "Improve patient care by 40%", "Increase practice efficiency by 45%"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Learning Management System",
    description: "Advanced educational platform with course creation, student tracking, and analytics",
    icon: GraduationCap,
    features: [
      "Course Creation & Management",
      "Student Progress Tracking",
      "Assessment & Testing Tools",
      "Video Conferencing Integration",
      "Certification Management",
      "Mobile Learning App",
      "Analytics & Reporting",
      "Multi-language Support"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,200-6,800/month",
    benefits: ["Increase student engagement by 55%", "Reduce course creation time by 40%", "Improve learning outcomes by 35%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Fleet Management System",
    description: "Complete vehicle tracking and management platform with GPS monitoring and maintenance scheduling",
    icon: Truck,
    features: [
      "Real-time GPS Tracking",
      "Route Optimization",
      "Driver Management",
      "Maintenance Scheduling",
      "Fuel Monitoring",
      "Performance Analytics",
      "Mobile Driver App",
      "Compliance Reporting"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-7,200/month",
    benefits: ["Reduce fuel costs by 20%", "Improve delivery efficiency by 35%", "Lower maintenance costs by 30%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Restaurant Management Platform",
    description: "Complete restaurant operations management with POS integration and kitchen automation",
    icon: Utensils,
    features: [
      "POS System Integration",
      "Menu Management",
      "Table & Reservation Management",
      "Kitchen Display System",
      "Inventory Management",
      "Staff Scheduling",
      "Customer Analytics",
      "Mobile Ordering"
    ],
    price: "Starting at $1,900/month",
    marketPrice: "$3,200-6,500/month",
    benefits: ["Increase table turnover by 25%", "Reduce food waste by 30%", "Improve customer satisfaction by 40%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Event Management Platform",
    description: "Comprehensive event planning and management with ticketing and attendee tracking",
    icon: Calendar,
    features: [
      "Event Planning Tools",
      "Online Ticketing System",
      "Attendee Registration",
      "Payment Processing",
      "Event Marketing Tools",
      "Check-in Management",
      "Analytics & Reporting",
      "Mobile App"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$2,800-5,800/month",
    benefits: ["Increase event attendance by 30%", "Reduce planning time by 50%", "Improve attendee experience by 45%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Content Management System",
    description: "Advanced CMS with AI-powered content optimization and multi-channel publishing",
    icon: FileText,
    features: [
      "AI Content Optimization",
      "Multi-channel Publishing",
      "SEO Tools",
      "Content Calendar",
      "Collaboration Tools",
      "Version Control",
      "Analytics Integration",
      "Mobile Editing"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,500-5,200/month",
    benefits: ["Increase content engagement by 40%", "Reduce publishing time by 60%", "Improve SEO rankings by 50%"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility with supplier management and logistics optimization",
    icon: Package,
    features: [
      "Supplier Management",
      "Purchase Order Automation",
      "Inventory Optimization",
      "Logistics Tracking",
      "Quality Control",
      "Cost Management",
      "Risk Assessment",
      "Performance Analytics"
    ],
    price: "Starting at $2,700/month",
    marketPrice: "$4,500-9,500/month",
    benefits: ["Reduce supply chain costs by 25%", "Improve delivery times by 35%", "Increase supplier reliability by 50%"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Customer Relationship Management",
    description: "AI-powered CRM with lead scoring, sales automation, and customer analytics",
    icon: Users,
    features: [
      "Contact & Lead Management",
      "Sales Pipeline Tracking",
      "AI Lead Scoring",
      "Email Integration",
      "Task Automation",
      "Customer Analytics",
      "Mobile App",
      "Third-party Integrations"
    ],
    price: "Starting at $2,100/month",
    marketPrice: "$3,500-7,800/month",
    benefits: ["Increase sales by 30%", "Improve lead conversion by 45%", "Reduce sales cycle by 25%"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Quality Management System",
    description: "Comprehensive quality control and compliance management platform",
    icon: Shield,
    features: [
      "Quality Control Checklists",
      "Compliance Management",
      "Audit Trail Tracking",
      "Corrective Action Management",
      "Document Control",
      "Training Management",
      "Risk Assessment",
      "Reporting & Analytics"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-6,200/month",
    benefits: ["Ensure 100% compliance", "Reduce quality issues by 60%", "Improve audit efficiency by 50%"],
    setupTime: "2-3 weeks"
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-purple-600">{solution.price}</span>
                    {solution.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {solution.marketPrice}
                      </span>
                    )}
                  </div>
                  {solution.marketPrice && (
                    <div className="text-xs text-green-600 font-medium mb-2">
                      Save up to 40% vs market rate
                    </div>
                  )}
                  {solution.setupTime && (
                    <div className="text-sm text-gray-500">
                      Setup: {solution.setupTime}
                    </div>
                  )}
                  {solution.benefits && (
                    <div className="mt-3">
                      <div className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</div>
                      <div className="flex flex-wrap gap-1">
                        {solution.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
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