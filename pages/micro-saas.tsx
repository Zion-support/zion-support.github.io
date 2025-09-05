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
  ShoppingCart,
  Target,
  DollarSign,
  GraduationCap,
  Package,
  FileText,
  MessageSquare
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
    marketPrice: "$2,500-4,000/month",
    benefits: ["Reduce manual work by 80%", "Increase efficiency by 60%", "Save 20+ hours/week"]
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
    marketPrice: "$3,500-6,000/month",
    benefits: ["Process 10x more data", "Generate insights 5x faster", "Reduce errors by 90%"]
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
    marketPrice: "$3,000-5,500/month",
    benefits: ["Connect 50+ systems", "Reduce integration time by 70%", "99.9% uptime guarantee"]
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
    benefits: ["Improve decision making", "Save 15+ hours/week", "Real-time insights"]
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
    marketPrice: "$6,000-15,000/month",
    benefits: ["Scale to millions of users", "Generate recurring revenue", "Reduce development costs by 60%"]
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
    marketPrice: "$4,500-8,000/month",
    benefits: ["Increase revenue by 25%", "Reduce costs by 30%", "Make data-driven decisions"]
  },
  {
    title: "Customer Relationship Management",
    description: "Comprehensive CRM solution for managing customer relationships and sales pipelines",
    icon: Users,
    features: [
      "Contact Management",
      "Sales Pipeline Tracking",
      "Email Marketing Automation",
      "Lead Scoring",
      "Customer Analytics",
      "Integration with 100+ tools"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$4,000-7,000/month",
    benefits: ["Increase sales by 35%", "Improve customer retention", "Automate follow-ups"]
  },
  {
    title: "Project Management Suite",
    description: "Complete project management solution with team collaboration and resource planning",
    icon: Globe,
    features: [
      "Task Management",
      "Team Collaboration",
      "Resource Planning",
      "Time Tracking",
      "Budget Management",
      "Progress Reporting"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,200-6,000/month",
    benefits: ["Complete projects 40% faster", "Improve team productivity", "Reduce project costs"]
  },
  {
    title: "E-commerce Management",
    description: "All-in-one e-commerce platform with inventory, orders, and customer management",
    icon: ShoppingCart,
    features: [
      "Inventory Management",
      "Order Processing",
      "Customer Management",
      "Payment Processing",
      "Shipping Integration",
      "Analytics & Reporting"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Increase sales by 50%", "Reduce order processing time", "Improve customer experience"]
  },
  {
    title: "HR Management System",
    description: "Comprehensive HR solution for employee management, payroll, and performance tracking",
    icon: Users,
    features: [
      "Employee Database",
      "Payroll Management",
      "Performance Reviews",
      "Time & Attendance",
      "Benefits Administration",
      "Compliance Tracking"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Reduce HR workload by 60%", "Improve employee satisfaction", "Ensure compliance"]
  },
  {
    title: "Marketing Automation",
    description: "Advanced marketing automation platform for lead nurturing and campaign management",
    icon: Target,
    features: [
      "Email Marketing",
      "Lead Nurturing",
      "Campaign Management",
      "A/B Testing",
      "Social Media Integration",
      "Analytics & ROI Tracking"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$3,000-6,500/month",
    benefits: ["Increase leads by 200%", "Improve conversion rates", "Automate marketing tasks"]
  },
  {
    title: "Financial Management",
    description: "Complete financial management solution for accounting, invoicing, and expense tracking",
    icon: DollarSign,
    features: [
      "Accounting & Bookkeeping",
      "Invoice Generation",
      "Expense Tracking",
      "Financial Reporting",
      "Tax Preparation",
      "Bank Integration"
    ],
    price: "Starting at $1,900/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Save 25+ hours/month", "Improve cash flow", "Ensure tax compliance"]
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS for online courses, training, and educational content delivery",
    icon: GraduationCap,
    features: [
      "Course Creation",
      "Student Management",
      "Progress Tracking",
      "Assessment Tools",
      "Certification System",
      "Mobile Learning"
    ],
    price: "Starting at $2,300/month",
    marketPrice: "$4,000-9,000/month",
    benefits: ["Scale education programs", "Improve learning outcomes", "Reduce training costs"]
  },
  {
    title: "Inventory Management",
    description: "Advanced inventory management system with real-time tracking and automated reordering",
    icon: Package,
    features: [
      "Real-time Inventory Tracking",
      "Automated Reordering",
      "Supplier Management",
      "Barcode Scanning",
      "Multi-location Support",
      "Analytics & Forecasting"
    ],
    price: "Starting at $2,100/month",
    marketPrice: "$3,800-7,500/month",
    benefits: ["Reduce stockouts by 80%", "Lower inventory costs", "Improve accuracy"]
  },
  {
    title: "Document Management",
    description: "Secure document management system with version control and collaboration features",
    icon: FileText,
    features: [
      "Document Storage",
      "Version Control",
      "Collaboration Tools",
      "Search & Retrieval",
      "Access Control",
      "Audit Trail"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Improve document security", "Reduce search time by 90%", "Enable remote collaboration"]
  },
  {
    title: "Communication Platform",
    description: "Unified communication platform with messaging, video calls, and file sharing",
    icon: MessageSquare,
    features: [
      "Team Messaging",
      "Video Conferencing",
      "File Sharing",
      "Screen Sharing",
      "Integration with 200+ apps",
      "Mobile & Desktop Apps"
    ],
    price: "Starting at $1,700/month",
    marketPrice: "$3,000-6,000/month",
    benefits: ["Improve team collaboration", "Reduce meeting costs", "Increase productivity"]
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  {solution.benefits && (
                    <div className="text-xs text-gray-600">
                      <div className="font-semibold mb-1">Key Benefits:</div>
                      <ul className="space-y-1">
                        {solution.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
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