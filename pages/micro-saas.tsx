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
  GraduationCap,
  ClipboardList,
  Calendar,
  FileText,
  Target,
  Clock,
  CreditCard,
  Video,
  ShoppingCart,
  Lock,
  HardDrive,
  Database,
  Monitor,
  MessageSquare,
  Image,
  Wifi,
  Network
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
    title: "Social Media Management",
    description: "Comprehensive social media scheduling, analytics, and engagement tools",
    icon: Users,
    features: [
      "Multi-platform posting",
      "Content calendar management",
      "Analytics & reporting",
      "Engagement tracking",
      "Hashtag optimization",
      "Competitor analysis",
      "Auto-scheduling",
      "Team collaboration"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing with automation, segmentation, and analytics",
    icon: Mail,
    features: [
      "Drag-and-drop email builder",
      "Automated drip campaigns",
      "Advanced segmentation",
      "A/B testing tools",
      "Analytics & reporting",
      "Template library",
      "Integration APIs",
      "Deliverability optimization"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "Project Management Suite",
    description: "Complete project management with task tracking, team collaboration, and reporting",
    icon: Settings,
    features: [
      "Task & milestone tracking",
      "Team collaboration tools",
      "Time tracking & reporting",
      "Resource management",
      "Gantt charts & timelines",
      "File sharing & storage",
      "Mobile applications",
      "Integration ecosystem"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,200/month"
  },
  {
    title: "Customer Relationship Management",
    description: "Comprehensive CRM with sales pipeline, customer tracking, and automation",
    icon: Users,
    features: [
      "Contact & lead management",
      "Sales pipeline tracking",
      "Email integration",
      "Task & activity management",
      "Reporting & analytics",
      "Mobile CRM access",
      "Custom fields & workflows",
      "Third-party integrations"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-900/month"
  },
  {
    title: "Inventory Management System",
    description: "Real-time inventory tracking, order management, and supply chain optimization",
    icon: Package,
    features: [
      "Real-time inventory tracking",
      "Order management",
      "Supplier management",
      "Barcode scanning",
      "Low stock alerts",
      "Multi-location support",
      "Reporting & analytics",
      "Integration capabilities"
    ],
    price: "Starting at $249/month",
    marketPrice: "$350-1,000/month"
  },
  {
    title: "Accounting & Invoicing",
    description: "Complete accounting solution with invoicing, expense tracking, and financial reporting",
    icon: DollarSign,
    features: [
      "Invoice creation & management",
      "Expense tracking",
      "Financial reporting",
      "Tax preparation tools",
      "Bank reconciliation",
      "Multi-currency support",
      "Mobile app access",
      "Integration with banks"
    ],
    price: "Starting at $179/month",
    marketPrice: "$250-700/month"
  },
  {
    title: "HR Management Platform",
    description: "Human resources management with employee records, payroll, and performance tracking",
    icon: Users,
    features: [
      "Employee database",
      "Time & attendance tracking",
      "Payroll management",
      "Performance reviews",
      "Leave management",
      "Document storage",
      "Compliance tracking",
      "Reporting & analytics"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,500/month"
  },
  {
    title: "Learning Management System",
    description: "Online learning platform with course creation, student tracking, and certification",
    icon: GraduationCap,
    features: [
      "Course creation tools",
      "Student enrollment",
      "Progress tracking",
      "Certification management",
      "Video hosting",
      "Quiz & assessment tools",
      "Mobile learning",
      "Analytics & reporting"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Help Desk & Support",
    description: "Customer support ticketing system with knowledge base and live chat",
    icon: Shield,
    features: [
      "Ticket management",
      "Knowledge base",
      "Live chat integration",
      "SLA management",
      "Customer portal",
      "Automation rules",
      "Reporting & analytics",
      "Multi-channel support"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "Survey & Feedback Platform",
    description: "Advanced survey creation, data collection, and analytics platform",
    icon: ClipboardList,
    features: [
      "Survey builder",
      "Multiple question types",
      "Response analytics",
      "Data export",
      "Custom branding",
      "Conditional logic",
      "Mobile optimization",
      "Integration APIs"
    ],
    price: "Starting at $99/month",
    marketPrice: "$150-500/month"
  },
  {
    title: "Event Management System",
    description: "Complete event planning and management with registration, ticketing, and analytics",
    icon: Calendar,
    features: [
      "Event creation & management",
      "Registration & ticketing",
      "Payment processing",
      "Attendee management",
      "Event analytics",
      "Mobile check-in",
      "Email marketing integration",
      "Custom branding"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Document Management",
    description: "Secure document storage, sharing, and collaboration platform",
    icon: FileText,
    features: [
      "Document storage & organization",
      "Version control",
      "Collaborative editing",
      "Access permissions",
      "Search functionality",
      "Document templates",
      "Mobile access",
      "Integration capabilities"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "Lead Generation Platform",
    description: "Automated lead generation with forms, landing pages, and lead scoring",
    icon: Target,
    features: [
      "Lead capture forms",
      "Landing page builder",
      "Lead scoring",
      "Email automation",
      "CRM integration",
      "Analytics & reporting",
      "A/B testing",
      "Conversion optimization"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-700/month"
  },
  {
    title: "Appointment Scheduling",
    description: "Online booking and scheduling system with calendar integration and notifications",
    icon: Clock,
    features: [
      "Online booking",
      "Calendar integration",
      "Automated reminders",
      "Payment processing",
      "Multi-service support",
      "Staff management",
      "Mobile app",
      "Customization options"
    ],
    price: "Starting at $99/month",
    marketPrice: "$150-400/month"
  },
  {
    title: "Content Management System",
    description: "Website content management with SEO tools, analytics, and multi-user support",
    icon: Globe,
    features: [
      "Content editor",
      "SEO optimization",
      "Multi-user access",
      "Template system",
      "Media library",
      "Analytics integration",
      "Mobile responsive",
      "Plugin ecosystem"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting platform with custom dashboards",
    icon: BarChart3,
    features: [
      "Custom dashboards",
      "Real-time analytics",
      "Data visualization",
      "Report scheduling",
      "Export capabilities",
      "API integration",
      "Mobile access",
      "White-label options"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "API Management Platform",
    description: "API development, testing, and management platform with documentation and monitoring",
    icon: Code,
    features: [
      "API development tools",
      "Testing & debugging",
      "Documentation generation",
      "Rate limiting",
      "Analytics & monitoring",
      "Developer portal",
      "Security features",
      "Integration marketplace"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,200/month"
  },
  {
    title: "Workflow Automation",
    description: "Visual workflow builder for business process automation and integration",
    icon: Zap,
    features: [
      "Visual workflow builder",
      "Trigger automation",
      "Integration connectors",
      "Conditional logic",
      "Error handling",
      "Monitoring & logging",
      "Template library",
      "Scalable architecture"
    ],
    price: "Starting at $249/month",
    marketPrice: "$350-900/month"
  },
  {
    title: "Subscription Management",
    description: "Recurring billing and subscription management platform with payment processing",
    icon: CreditCard,
    features: [
      "Recurring billing",
      "Payment processing",
      "Subscription lifecycle",
      "Proration handling",
      "Dunning management",
      "Analytics & reporting",
      "Webhook support",
      "Multi-currency support"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-700/month"
  },
  {
    title: "Video Conferencing Platform",
    description: "Enterprise-grade video conferencing with recording, screen sharing, and collaboration tools",
    icon: Video,
    features: [
      "HD video conferencing",
      "Screen sharing",
      "Recording capabilities",
      "Chat & messaging",
      "Meeting scheduling",
      "Mobile apps",
      "Integration APIs",
      "Security features"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,000/month"
  },
  {
    title: "E-commerce Platform",
    description: "Complete online store solution with payment processing, inventory, and analytics",
    icon: ShoppingCart,
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Order management",
      "Inventory tracking",
      "Analytics & reporting",
      "Mobile optimization",
      "SEO tools"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Time Tracking Software",
    description: "Employee time tracking with project management and reporting capabilities",
    icon: Clock,
    features: [
      "Time tracking",
      "Project management",
      "Team monitoring",
      "Reporting & analytics",
      "Mobile apps",
      "Integration capabilities",
      "Billing & invoicing",
      "Compliance features"
    ],
    price: "Starting at $99/month",
    marketPrice: "$150-400/month"
  },
  {
    title: "Password Manager",
    description: "Secure password management with team sharing and enterprise features",
    icon: Lock,
    features: [
      "Password storage",
      "Team sharing",
      "Security auditing",
      "Two-factor authentication",
      "Browser integration",
      "Mobile apps",
      "Enterprise features",
      "Compliance tools"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "File Sharing Platform",
    description: "Secure file sharing and collaboration with advanced security and permissions",
    icon: HardDrive,
    features: [
      "File sharing",
      "Collaboration tools",
      "Access permissions",
      "Version control",
      "Security features",
      "Mobile access",
      "Integration APIs",
      "Analytics dashboard"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-700/month"
  },
  {
    title: "Code Repository Management",
    description: "Git-based code repository with collaboration tools, CI/CD, and project management",
    icon: Code,
    features: [
      "Git repository hosting",
      "Code collaboration",
      "CI/CD pipelines",
      "Project management",
      "Code review tools",
      "Issue tracking",
      "Integration ecosystem",
      "Security scanning"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,200/month"
  },
  {
    title: "Database Management",
    description: "Cloud database management with monitoring, backup, and optimization tools",
    icon: Database,
    features: [
      "Database hosting",
      "Performance monitoring",
      "Automated backups",
      "Query optimization",
      "Security management",
      "Scaling capabilities",
      "Analytics dashboard",
      "Integration APIs"
    ],
    price: "Starting at $249/month",
    marketPrice: "$350-1,000/month"
  },
  {
    title: "Monitoring & Alerting",
    description: "Application and infrastructure monitoring with real-time alerts and analytics",
    icon: Monitor,
    features: [
      "Real-time monitoring",
      "Alert management",
      "Performance analytics",
      "Uptime tracking",
      "Log analysis",
      "Custom dashboards",
      "Integration capabilities",
      "Mobile notifications"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Backup & Recovery",
    description: "Automated backup and disaster recovery solution for data protection",
    icon: HardDrive,
    features: [
      "Automated backups",
      "Disaster recovery",
      "Data encryption",
      "Version control",
      "Cross-platform support",
      "Cloud storage",
      "Monitoring & alerts",
      "Compliance features"
    ],
    price: "Starting at $149/month",
    marketPrice: "$200-600/month"
  },
  {
    title: "Security Scanning",
    description: "Automated security vulnerability scanning and compliance monitoring",
    icon: Shield,
    features: [
      "Vulnerability scanning",
      "Compliance monitoring",
      "Security reporting",
      "Threat detection",
      "Remediation guidance",
      "Integration capabilities",
      "Custom policies",
      "Real-time alerts"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,200/month"
  },
  {
    title: "Performance Optimization",
    description: "Website and application performance monitoring and optimization platform",
    icon: Zap,
    features: [
      "Performance monitoring",
      "Optimization recommendations",
      "Speed testing",
      "CDN management",
      "Image optimization",
      "Code analysis",
      "Real-time alerts",
      "Analytics dashboard"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-700/month"
  },
  {
    title: "A/B Testing Platform",
    description: "Website and application A/B testing with statistical analysis and optimization",
    icon: Target,
    features: [
      "A/B test creation",
      "Statistical analysis",
      "Conversion tracking",
      "Segmentation",
      "Multivariate testing",
      "Real-time results",
      "Integration APIs",
      "Advanced analytics"
    ],
    price: "Starting at $249/month",
    marketPrice: "$350-900/month"
  },
  {
    title: "Customer Feedback Platform",
    description: "Customer feedback collection, analysis, and action management system",
    icon: MessageSquare,
    features: [
      "Feedback collection",
      "Sentiment analysis",
      "Action management",
      "Customer journey mapping",
      "Integration capabilities",
      "Analytics dashboard",
      "Automated workflows",
      "Reporting tools"
    ],
    price: "Starting at $179/month",
    marketPrice: "$250-600/month"
  },
  {
    title: "Compliance Management",
    description: "Regulatory compliance tracking and management with automated reporting",
    icon: Shield,
    features: [
      "Compliance tracking",
      "Automated reporting",
      "Risk assessment",
      "Document management",
      "Audit trails",
      "Integration capabilities",
      "Custom frameworks",
      "Alert system"
    ],
    price: "Starting at $399/month",
    marketPrice: "$500-1,500/month"
  },
  {
    title: "Digital Asset Management",
    description: "Centralized digital asset storage, organization, and distribution platform",
    icon: Image,
    features: [
      "Asset storage",
      "Organization tools",
      "Version control",
      "Distribution management",
      "Rights management",
      "Search functionality",
      "Integration APIs",
      "Analytics dashboard"
    ],
    price: "Starting at $199/month",
    marketPrice: "$300-800/month"
  },
  {
    title: "Workforce Management",
    description: "Employee scheduling, attendance, and workforce optimization platform",
    icon: Users,
    features: [
      "Employee scheduling",
      "Attendance tracking",
      "Shift management",
      "Labor optimization",
      "Compliance tracking",
      "Mobile access",
      "Integration capabilities",
      "Analytics reporting"
    ],
    price: "Starting at $249/month",
    marketPrice: "$350-900/month"
  },
  {
    title: "IoT Device Management",
    description: "Internet of Things device monitoring, management, and data analytics platform",
    icon: Wifi,
    features: [
      "Device monitoring",
      "Data collection",
      "Remote management",
      "Analytics dashboard",
      "Alert system",
      "Integration APIs",
      "Scalable architecture",
      "Security features"
    ],
    price: "Starting at $299/month",
    marketPrice: "$400-1,200/month"
  },
  {
    title: "Blockchain Analytics",
    description: "Cryptocurrency and blockchain transaction analysis and monitoring platform",
    icon: Network,
    features: [
      "Transaction analysis",
      "Address monitoring",
      "Risk assessment",
      "Compliance reporting",
      "Real-time alerts",
      "API integration",
      "Custom dashboards",
      "Historical data"
    ],
    price: "Starting at $399/month",
    marketPrice: "$500-1,500/month"
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
              Transform your business with our 42+ cutting-edge micro SaaS platforms. 
              From workflow automation to data processing, social media management, 
              and enterprise solutions, we create powerful tools that drive efficiency and growth.
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
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
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