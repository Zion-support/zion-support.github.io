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
  Calendar,
  FileText,
  MessageSquare,
  DollarSign,
  Package,
  ClipboardList,
  ShoppingCart
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "AI-Powered Lead Generation",
    description: "Automated lead discovery, qualification, and nurturing using advanced AI algorithms",
    icon: Users,
    features: [
      "AI Lead Scoring & Qualification",
      "Automated Prospect Research",
      "Multi-channel Lead Capture",
      "Personalized Outreach Sequences",
      "CRM Integration & Sync",
      "Real-time Lead Analytics",
      "Email & Social Media Automation",
      "Lead Nurturing Workflows"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,500-5,000/month",
    benefits: ["Increase qualified leads by 300%", "Reduce lead cost by 60%", "Save 25 hours/week"]
  },
  {
    title: "Smart Appointment Scheduling",
    description: "Intelligent scheduling system with AI-powered optimization and automated reminders",
    icon: Calendar,
    features: [
      "AI-Powered Time Optimization",
      "Multi-calendar Integration",
      "Automated Reminders & Follow-ups",
      "Rescheduling & Cancellation Handling",
      "Payment Processing Integration",
      "Video Conference Integration",
      "Customer Self-Service Portal",
      "Analytics & Performance Tracking"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,000/month",
    benefits: ["Reduce no-shows by 70%", "Increase bookings by 45%", "Save 15 hours/week"]
  },
  {
    title: "AI Content Management System",
    description: "Intelligent content creation, optimization, and distribution platform",
    icon: FileText,
    features: [
      "AI Content Generation",
      "SEO Optimization",
      "Multi-platform Publishing",
      "Content Calendar Management",
      "Performance Analytics",
      "Brand Voice Consistency",
      "Automated Social Media Posting",
      "Content Collaboration Tools"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,800-5,500/month",
    benefits: ["Generate 50+ pieces daily", "Increase engagement by 80%", "Reduce content costs by 75%"]
  },
  {
    title: "Customer Support Automation",
    description: "AI-powered customer service with intelligent ticket routing and automated responses",
    icon: MessageSquare,
    features: [
      "AI Chatbot & Virtual Assistant",
      "Intelligent Ticket Routing",
      "Automated Response Generation",
      "Multi-channel Support (Email, Chat, Phone)",
      "Knowledge Base Integration",
      "Sentiment Analysis",
      "Escalation Management",
      "Performance Analytics"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$2,000-4,500/month",
    benefits: ["Reduce response time by 90%", "Handle 80% of queries automatically", "Improve satisfaction by 60%"]
  },
  {
    title: "Financial Analytics & Forecasting",
    description: "AI-powered financial insights, budgeting, and predictive analytics for small businesses",
    icon: DollarSign,
    features: [
      "Automated Financial Reporting",
      "Cash Flow Forecasting",
      "Expense Categorization & Tracking",
      "Profit/Loss Analysis",
      "Tax Preparation Assistance",
      "Investment Recommendations",
      "Risk Assessment",
      "Compliance Monitoring"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,500-7,000/month",
    benefits: ["Improve financial accuracy by 95%", "Reduce accounting time by 70%", "Increase profitability by 25%"]
  },
  {
    title: "Inventory Management AI",
    description: "Smart inventory optimization with demand forecasting and automated reordering",
    icon: Package,
    features: [
      "AI Demand Forecasting",
      "Automated Reorder Points",
      "Multi-location Inventory Tracking",
      "Supplier Management",
      "Cost Optimization",
      "Waste Reduction Analytics",
      "Integration with POS Systems",
      "Real-time Stock Alerts"
    ],
    price: "Starting at $1,400/month",
    marketPrice: "$2,500-5,500/month",
    benefits: ["Reduce stockouts by 85%", "Lower inventory costs by 30%", "Increase turnover by 40%"]
  },
  {
    title: "Social Media Management AI",
    description: "Automated social media posting, engagement, and analytics with AI optimization",
    icon: Globe,
    features: [
      "AI Content Creation & Curation",
      "Optimal Posting Time Detection",
      "Hashtag Research & Optimization",
      "Engagement Automation",
      "Influencer Identification",
      "Crisis Management",
      "Competitor Analysis",
      "ROI Tracking & Analytics"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,200-4,800/month",
    benefits: ["Increase engagement by 120%", "Save 20 hours/week", "Grow followers by 200%"]
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing with AI-powered personalization and optimization",
    icon: Mail,
    features: [
      "AI-Powered Personalization",
      "Behavioral Trigger Automation",
      "A/B Testing & Optimization",
      "List Segmentation & Management",
      "Deliverability Optimization",
      "Template Design & Creation",
      "Performance Analytics",
      "GDPR Compliance Tools"
    ],
    price: "Starting at $900/month",
    marketPrice: "$1,800-3,500/month",
    benefits: ["Increase open rates by 65%", "Boost click-through by 80%", "Improve conversions by 45%"]
  },
  {
    title: "Project Management AI",
    description: "Intelligent project management with AI-powered task optimization and resource allocation",
    icon: ClipboardList,
    features: [
      "AI Task Prioritization",
      "Resource Allocation Optimization",
      "Deadline Prediction & Alerts",
      "Team Performance Analytics",
      "Risk Assessment & Mitigation",
      "Automated Progress Reporting",
      "Integration with Popular Tools",
      "Predictive Project Insights"
    ],
    price: "Starting at $1,300/month",
    marketPrice: "$2,400-4,800/month",
    benefits: ["Improve project delivery by 50%", "Reduce project costs by 35%", "Increase team productivity by 60%"]
  },
  {
    title: "HR & Recruitment AI",
    description: "AI-powered human resources management with automated screening and candidate matching",
    icon: Users,
    features: [
      "AI Resume Screening",
      "Candidate Matching & Ranking",
      "Interview Scheduling Automation",
      "Skills Assessment Tools",
      "Employee Onboarding Automation",
      "Performance Review Management",
      "Compliance Monitoring",
      "Talent Analytics & Insights"
    ],
    price: "Starting at $1,600/month",
    marketPrice: "$3,000-6,500/month",
    benefits: ["Reduce hiring time by 70%", "Improve candidate quality by 85%", "Lower recruitment costs by 50%"]
  },
  {
    title: "E-commerce Optimization AI",
    description: "AI-powered e-commerce tools for pricing, recommendations, and conversion optimization",
    icon: ShoppingCart,
    features: [
      "Dynamic Pricing Optimization",
      "AI Product Recommendations",
      "Cart Abandonment Recovery",
      "Inventory Demand Forecasting",
      "Customer Behavior Analysis",
      "Conversion Rate Optimization",
      "Fraud Detection",
      "Performance Analytics"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,500-7,500/month",
    benefits: ["Increase sales by 40%", "Reduce cart abandonment by 60%", "Improve customer lifetime value by 55%"]
  },
  {
    title: "Document Processing AI",
    description: "Automated document processing, extraction, and management using AI technology",
    icon: FileText,
    features: [
      "OCR & Text Extraction",
      "Document Classification",
      "Automated Data Entry",
      "Contract Analysis",
      "Compliance Checking",
      "Version Control",
      "Search & Retrieval",
      "Workflow Automation"
    ],
    price: "Starting at $1,100/month",
    marketPrice: "$2,200-4,200/month",
    benefits: ["Process documents 10x faster", "Reduce errors by 95%", "Save 30 hours/week"]
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
                  {solution.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-purple-600">{solution.price}</span>
                    {solution.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {solution.marketPrice}
                      </span>
                    )}
                  </div>
                  {solution.marketPrice && (
                    <div className="text-xs text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  )}
                </div>
                {solution.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-purple-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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