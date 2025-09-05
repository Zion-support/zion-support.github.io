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
  TrendingUp
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "AI-Powered Document Processing",
    description: "Intelligent document extraction, classification, and data entry automation using advanced OCR and machine learning",
    icon: Zap,
    features: [
      "OCR & Text Extraction",
      "Document Classification",
      "Data Validation & Verification",
      "Multi-format Support (PDF, Images, Scans)",
      "API Integration",
      "Real-time Processing"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-6,000/month",
    benefits: ["90% reduction in manual data entry", "99.5% accuracy", "Process 10,000+ documents/hour"]
  },
  {
    title: "Smart Inventory Management",
    description: "AI-driven inventory optimization with predictive analytics, automated reordering, and demand forecasting",
    icon: BarChart3,
    features: [
      "Predictive Analytics",
      "Automated Reordering",
      "Multi-location Tracking",
      "Barcode/QR Integration",
      "Real-time Alerts",
      "Cost Optimization"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,500-4,500/month",
    benefits: ["25% reduction in stockouts", "30% lower carrying costs", "95% forecast accuracy"]
  },
  {
    title: "Customer Experience Analytics",
    description: "Advanced customer journey mapping, sentiment analysis, and behavioral insights for enhanced engagement",
    icon: Code,
    features: [
      "Customer Journey Mapping",
      "Sentiment Analysis",
      "Behavioral Tracking",
      "Churn Prediction",
      "Personalization Engine",
      "Real-time Dashboards"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-7,000/month",
    benefits: ["40% increase in customer satisfaction", "35% reduction in churn", "50% improvement in conversion"]
  },
  {
    title: "Automated Financial Reporting",
    description: "AI-powered financial data processing, compliance reporting, and real-time financial insights",
    icon: Settings,
    features: [
      "Automated Bookkeeping",
      "Compliance Reporting",
      "Real-time P&L",
      "Cash Flow Forecasting",
      "Tax Preparation",
      "Multi-currency Support"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,200-4,000/month",
    benefits: ["80% time savings on reporting", "100% compliance accuracy", "Real-time financial visibility"]
  },
  {
    title: "Smart Email Marketing Platform",
    description: "AI-driven email campaigns with advanced segmentation, personalization, and performance optimization",
    icon: Cloud,
    features: [
      "AI Content Generation",
      "Advanced Segmentation",
      "A/B Testing Automation",
      "Send Time Optimization",
      "Deliverability Monitoring",
      "ROI Tracking"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-3,500/month",
    benefits: ["45% higher open rates", "60% increase in click-through", "35% boost in conversions"]
  },
  {
    title: "Workflow Automation Suite",
    description: "Comprehensive business process automation with no-code/low-code workflow builder and integrations",
    icon: BarChart3,
    features: [
      "Visual Workflow Builder",
      "500+ Integrations",
      "Conditional Logic",
      "Approval Workflows",
      "Task Automation",
      "Performance Analytics"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,500-2,800/month",
    benefits: ["70% reduction in manual tasks", "50% faster process completion", "90% error reduction"]
  },
  {
    title: "AI-Powered Lead Scoring",
    description: "Intelligent lead qualification and scoring using machine learning to identify high-value prospects",
    icon: Users,
    features: [
      "Behavioral Analysis",
      "Predictive Scoring",
      "Lead Nurturing Automation",
      "CRM Integration",
      "Custom Scoring Models",
      "Real-time Updates"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$2,800-5,000/month",
    benefits: ["65% improvement in lead quality", "40% increase in conversion rates", "50% reduction in sales cycle"]
  },
  {
    title: "Smart Social Media Management",
    description: "AI-driven social media scheduling, content creation, and performance optimization across all platforms",
    icon: Globe,
    features: [
      "AI Content Creation",
      "Optimal Posting Times",
      "Hashtag Optimization",
      "Engagement Analytics",
      "Competitor Analysis",
      "Multi-platform Management"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,200-4,000/month",
    benefits: ["55% increase in engagement", "40% more followers", "60% time savings"]
  },
  {
    title: "Automated Customer Support",
    description: "AI-powered chatbot and ticketing system with natural language processing and escalation management",
    icon: Shield,
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Ticket Routing",
      "Knowledge Base Integration",
      "Sentiment Analysis",
      "Human Handoff"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$2,500-4,500/month",
    benefits: ["80% reduction in response time", "24/7 availability", "90% customer satisfaction"]
  },
  {
    title: "Predictive Maintenance System",
    description: "IoT-enabled equipment monitoring with predictive analytics to prevent failures and optimize maintenance",
    icon: Settings,
    features: [
      "IoT Sensor Integration",
      "Predictive Analytics",
      "Failure Prediction",
      "Maintenance Scheduling",
      "Cost Optimization",
      "Real-time Alerts"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-8,000/month",
    benefits: ["60% reduction in downtime", "40% lower maintenance costs", "95% prediction accuracy"]
  },
  {
    title: "Smart Contract Management",
    description: "AI-powered contract analysis, risk assessment, and automated compliance monitoring",
    icon: FileText,
    features: [
      "Contract Analysis",
      "Risk Assessment",
      "Compliance Monitoring",
      "Renewal Alerts",
      "Clause Extraction",
      "Legal Review Automation"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-6,000/month",
    benefits: ["70% faster contract review", "95% compliance accuracy", "50% reduction in legal costs"]
  },
  {
    title: "Dynamic Pricing Optimization",
    description: "AI-driven pricing strategy with real-time market analysis, competitor monitoring, and revenue optimization",
    icon: TrendingUp,
    features: [
      "Market Analysis",
      "Competitor Monitoring",
      "Demand Forecasting",
      "Price Elasticity Modeling",
      "A/B Testing",
      "Revenue Optimization"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-7,500/month",
    benefits: ["25% increase in revenue", "15% improvement in margins", "Real-time pricing adjustments"]
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
                
                {/* Benefits */}
                {solution.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{solution.price}</span>
                    {solution.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">{solution.marketPrice}</span>
                    )}
                  </div>
                  {solution.marketPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      Save up to 40% vs market rates
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