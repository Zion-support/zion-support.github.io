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
    title: "Social Media Management",
    description: "Comprehensive social media scheduling, analytics, and automation platform",
    icon: Globe,
    features: [
      "Multi-platform posting",
      "Content calendar",
      "Analytics & insights",
      "Team collaboration",
      "Auto-scheduling",
      "Engagement tracking"
    ],
    price: "Starting at $29/month"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing platform with automation and personalization",
    icon: Mail,
    features: [
      "Drag-and-drop editor",
      "Email automation",
      "A/B testing",
      "List segmentation",
      "Analytics & reporting",
      "Template library"
    ],
    price: "Starting at $19/month"
  },
  {
    title: "Project Management Tool",
    description: "Collaborative project management with task tracking and team communication",
    icon: ClipboardList,
    features: [
      "Task management",
      "Team collaboration",
      "Time tracking",
      "File sharing",
      "Progress reporting",
      "Mobile app"
    ],
    price: "Starting at $9/month"
  },
  {
    title: "Customer Support Ticketing",
    description: "Help desk and customer support management system",
    icon: Users,
    features: [
      "Ticket management",
      "Knowledge base",
      "Live chat integration",
      "SLA tracking",
      "Customer portal",
      "Reporting & analytics"
    ],
    price: "Starting at $15/month"
  },
  {
    title: "Invoice & Billing System",
    description: "Complete invoicing and payment processing solution for small businesses",
    icon: DollarSign,
    features: [
      "Invoice creation",
      "Payment processing",
      "Recurring billing",
      "Expense tracking",
      "Tax calculations",
      "Financial reporting"
    ],
    price: "Starting at $12/month"
  },
  {
    title: "Inventory Management",
    description: "Real-time inventory tracking and management system",
    icon: Package,
    features: [
      "Stock tracking",
      "Low stock alerts",
      "Barcode scanning",
      "Multi-location support",
      "Purchase orders",
      "Analytics dashboard"
    ],
    price: "Starting at $25/month"
  },
  {
    title: "CRM & Lead Management",
    description: "Customer relationship management and lead tracking system",
    icon: Target,
    features: [
      "Contact management",
      "Lead scoring",
      "Sales pipeline",
      "Email integration",
      "Task automation",
      "Performance metrics"
    ],
    price: "Starting at $20/month"
  },
  {
    title: "Time Tracking & Timesheets",
    description: "Employee time tracking and timesheet management solution",
    icon: Clock,
    features: [
      "Time tracking",
      "Timesheet approval",
      "Project billing",
      "Overtime calculation",
      "Mobile time tracking",
      "Payroll integration"
    ],
    price: "Starting at $8/month"
  },
  {
    title: "Document Management System",
    description: "Secure document storage, sharing, and collaboration platform",
    icon: FileText,
    features: [
      "Document storage",
      "Version control",
      "Collaborative editing",
      "Access permissions",
      "Search functionality",
      "Audit trails"
    ],
    price: "Starting at $10/month"
  },
  {
    title: "Survey & Form Builder",
    description: "Create and manage surveys, forms, and feedback collection",
    icon: PieChart,
    features: [
      "Form builder",
      "Survey templates",
      "Response analytics",
      "Conditional logic",
      "Multi-language support",
      "Data export"
    ],
    price: "Starting at $15/month"
  },
  {
    title: "Appointment Scheduling",
    description: "Online booking and appointment management system",
    icon: Calendar,
    features: [
      "Online booking",
      "Calendar sync",
      "Email reminders",
      "Payment processing",
      "Staff management",
      "Client portal"
    ],
    price: "Starting at $14/month"
  },
  {
    title: "Password Manager",
    description: "Secure password storage and management for teams",
    icon: Lock,
    features: [
      "Password storage",
      "Team sharing",
      "Password generator",
      "Security audit",
      "Two-factor authentication",
      "Breach monitoring"
    ],
    price: "Starting at $3/month"
  },
  {
    title: "Website Analytics",
    description: "Advanced website traffic analysis and visitor insights",
    icon: BarChart3,
    features: [
      "Traffic analysis",
      "Visitor behavior",
      "Conversion tracking",
      "Real-time data",
      "Custom reports",
      "Goal tracking"
    ],
    price: "Starting at $19/month"
  },
  {
    title: "Team Communication",
    description: "Internal team messaging and collaboration platform",
    icon: MessageSquare,
    features: [
      "Instant messaging",
      "File sharing",
      "Video calls",
      "Screen sharing",
      "Message history",
      "Mobile app"
    ],
    price: "Starting at $6/month"
  },
  {
    title: "Expense Management",
    description: "Employee expense tracking and reimbursement system",
    icon: Receipt,
    features: [
      "Receipt scanning",
      "Expense categorization",
      "Approval workflows",
      "Policy compliance",
      "Reimbursement tracking",
      "Tax reporting"
    ],
    price: "Starting at $8/month"
  },
  {
    title: "HR Management System",
    description: "Human resources management and employee onboarding platform",
    icon: Users,
    features: [
      "Employee database",
      "Onboarding workflows",
      "Performance reviews",
      "Leave management",
      "Document storage",
      "Compliance tracking"
    ],
    price: "Starting at $5/month"
  },
  {
    title: "Content Management System",
    description: "Website content management and publishing platform",
    icon: FileText,
    features: [
      "Content editor",
      "Media library",
      "SEO optimization",
      "Multi-user access",
      "Version control",
      "Publishing workflows"
    ],
    price: "Starting at $29/month"
  },
  {
    title: "E-commerce Platform",
    description: "Complete online store creation and management solution",
    icon: ShoppingCart,
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment processing",
      "Order management",
      "Inventory tracking",
      "Analytics dashboard"
    ],
    price: "Starting at $29/month"
  },
  {
    title: "Learning Management System",
    description: "Online course creation and learning management platform",
    icon: GraduationCap,
    features: [
      "Course creation",
      "Student enrollment",
      "Progress tracking",
      "Certificates",
      "Video hosting",
      "Assessment tools"
    ],
    price: "Starting at $39/month"
  },
  {
    title: "Event Management",
    description: "Event planning, ticketing, and management platform",
    icon: Calendar,
    features: [
      "Event creation",
      "Ticket sales",
      "Attendee management",
      "Check-in system",
      "Event analytics",
      "Mobile app"
    ],
    price: "Starting at $19/month"
  },
  {
    title: "Property Management",
    description: "Real estate and property management software",
    icon: Home,
    features: [
      "Property listings",
      "Tenant management",
      "Rent collection",
      "Maintenance tracking",
      "Financial reporting",
      "Document storage"
    ],
    price: "Starting at $25/month"
  },
  {
    title: "Restaurant POS System",
    description: "Point of sale and restaurant management system",
    icon: ShoppingCart,
    features: [
      "Order management",
      "Menu management",
      "Payment processing",
      "Kitchen display",
      "Inventory tracking",
      "Sales reporting"
    ],
    price: "Starting at $69/month"
  },
  {
    title: "Fitness Management",
    description: "Gym and fitness center management platform",
    icon: Heart,
    features: [
      "Member management",
      "Class scheduling",
      "Payment processing",
      "Check-in system",
      "Personal training",
      "Mobile app"
    ],
    price: "Starting at $39/month"
  },
  {
    title: "Legal Practice Management",
    description: "Law firm management and case tracking system",
    icon: Scale,
    features: [
      "Case management",
      "Client database",
      "Time tracking",
      "Billing & invoicing",
      "Document management",
      "Court calendar"
    ],
    price: "Starting at $49/month"
  },
  {
    title: "Medical Practice Management",
    description: "Healthcare practice management and patient scheduling",
    icon: Heart,
    features: [
      "Patient scheduling",
      "Electronic health records",
      "Billing & insurance",
      "Appointment reminders",
      "Prescription management",
      "HIPAA compliance"
    ],
    price: "Starting at $99/month"
  },
  {
    title: "Accounting Software",
    description: "Small business accounting and bookkeeping solution",
    icon: Calculator,
    features: [
      "Bookkeeping",
      "Invoicing",
      "Expense tracking",
      "Tax preparation",
      "Financial reporting",
      "Bank reconciliation"
    ],
    price: "Starting at $15/month"
  },
  {
    title: "Marketing Automation",
    description: "Comprehensive marketing automation and lead nurturing platform",
    icon: Target,
    features: [
      "Lead scoring",
      "Email campaigns",
      "Social media automation",
      "Landing pages",
      "A/B testing",
      "Analytics & reporting"
    ],
    price: "Starting at $29/month"
  },
  {
    title: "Customer Feedback System",
    description: "Collect and analyze customer feedback and reviews",
    icon: Star,
    features: [
      "Feedback collection",
      "Review management",
      "Sentiment analysis",
      "Response automation",
      "Analytics dashboard",
      "Integration APIs"
    ],
    price: "Starting at $19/month"
  },
  {
    title: "API Management Platform",
    description: "API gateway and management solution for developers",
    icon: Code,
    features: [
      "API gateway",
      "Rate limiting",
      "Authentication",
      "Documentation",
      "Analytics",
      "Developer portal"
    ],
    price: "Starting at $99/month"
  },
  {
    title: "Database as a Service",
    description: "Managed database hosting and administration service",
    icon: Database,
    features: [
      "Database hosting",
      "Automated backups",
      "Performance monitoring",
      "Scaling",
      "Security management",
      "24/7 support"
    ],
    price: "Starting at $25/month"
  },
  {
    title: "File Storage & Sharing",
    description: "Secure cloud file storage and sharing platform",
    icon: Cloud,
    features: [
      "File storage",
      "Sharing & collaboration",
      "Version control",
      "Access permissions",
      "Sync across devices",
      "Mobile app"
    ],
    price: "Starting at $5/month"
  },
  {
    title: "Video Conferencing",
    description: "Professional video conferencing and webinar platform",
    icon: Video,
    features: [
      "HD video calls",
      "Screen sharing",
      "Recording",
      "Webinar hosting",
      "Breakout rooms",
      "Mobile app"
    ],
    price: "Starting at $14/month"
  },
  {
    title: "Task Automation",
    description: "Workflow automation and task management platform",
    icon: Zap,
    features: [
      "Workflow builder",
      "Task automation",
      "Integration APIs",
      "Conditional logic",
      "Scheduling",
      "Analytics"
    ],
    price: "Starting at $20/month"
  },
  {
    title: "Code Repository",
    description: "Git-based code repository and collaboration platform",
    icon: Code,
    features: [
      "Git hosting",
      "Code review",
      "Issue tracking",
      "CI/CD integration",
      "Team collaboration",
      "Security scanning"
    ],
    price: "Starting at $4/month"
  },
  {
    title: "Monitoring & Alerts",
    description: "Website and application monitoring with alerting system",
    icon: Monitor,
    features: [
      "Uptime monitoring",
      "Performance tracking",
      "Alert notifications",
      "Status pages",
      "API monitoring",
      "Mobile alerts"
    ],
    price: "Starting at $9/month"
  },
  {
    title: "Backup & Recovery",
    description: "Automated backup and disaster recovery solution",
    icon: HardDrive,
    features: [
      "Automated backups",
      "Disaster recovery",
      "Version control",
      "Cross-platform sync",
      "Encryption",
      "Restore testing"
    ],
    price: "Starting at $6/month"
  },
  {
    title: "Security Scanning",
    description: "Website and application security vulnerability scanning",
    icon: Shield,
    features: [
      "Vulnerability scanning",
      "Security reports",
      "Compliance checking",
      "Penetration testing",
      "Threat monitoring",
      "Remediation guidance"
    ],
    price: "Starting at $49/month"
  },
  {
    title: "Load Testing",
    description: "Performance and load testing for web applications",
    icon: Zap,
    features: [
      "Load testing",
      "Performance analysis",
      "Stress testing",
      "Real-time monitoring",
      "Detailed reports",
      "API testing"
    ],
    price: "Starting at $29/month"
  },
  {
    title: "A/B Testing Platform",
    description: "Website and application A/B testing and optimization",
    icon: Target,
    features: [
      "A/B test creation",
      "Statistical analysis",
      "Conversion tracking",
      "Multivariate testing",
      "Real-time results",
      "Integration APIs"
    ],
    price: "Starting at $39/month"
  },
  {
    title: "Error Tracking",
    description: "Application error monitoring and debugging platform",
    icon: AlertTriangle,
    features: [
      "Error tracking",
      "Stack traces",
      "User context",
      "Release tracking",
      "Performance monitoring",
      "Team notifications"
    ],
    price: "Starting at $7/month"
  },
  {
    title: "Log Management",
    description: "Centralized log collection, analysis, and monitoring",
    icon: FileText,
    features: [
      "Log collection",
      "Search & analysis",
      "Real-time monitoring",
      "Alerting",
      "Dashboards",
      "Retention policies"
    ],
    price: "Starting at $15/month"
  },
  {
    title: "Performance Analytics",
    description: "Application performance monitoring and optimization",
    icon: BarChart3,
    features: [
      "Performance monitoring",
      "User experience tracking",
      "Database monitoring",
      "Error tracking",
      "Custom dashboards",
      "Alerting"
    ],
    price: "Starting at $19/month"
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