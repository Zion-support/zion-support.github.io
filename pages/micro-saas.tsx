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
  Target
} from 'lucide-react';
import Layout from './components/Layout';

const microSaasSolutions = [
  {
    title: "AI-Powered Expense Tracking",
    description: "Revolutionary expense management with AI that scans, categorizes, and processes receipts via email or text",
    icon: Zap,
    features: [
      "Email/Text Receipt Processing",
      "AI Auto-Categorization",
      "IRS Tax Category Mapping",
      "Multi-User & Multi-Company Support",
      "QuickBooks & Xero Integration",
      "Forever Cloud Storage",
      "Real-time Analytics Dashboard",
      "Custom Category Management"
    ],
    price: "Starting at $9.99/month",
    marketPrice: "$15-30/month",
    benefits: ["90% time savings", "100% accuracy", "Audit-ready reports", "Zero manual entry"],
    setupTime: "24 hours",
    targetUsers: "Freelancers, Small Businesses, Contractors"
  },
  {
    title: "Project & Finance Tracker",
    description: "All-in-one solution for freelancers and indie hackers to manage projects, track finances, and organize subscriptions",
    icon: BarChart3,
    features: [
      "Project-Specific Dashboards",
      "Subscription Management",
      "Domain Tracking & Renewal Alerts",
      "Income & Expense Tracking",
      "Resource Organization",
      "Financial Summaries",
      "Multi-Project Support",
      "Lifetime Updates"
    ],
    price: "Starting at $14.99/month",
    marketPrice: "$25-50/month",
    benefits: ["80% reduction in forgotten services", "Centralized project management", "One-time payment option", "Unlimited projects"],
    setupTime: "1 hour",
    targetUsers: "Freelancers, Indie Hackers, Solopreneurs"
  },
  {
    title: "Privacy-First Analytics",
    description: "Simple, privacy-focused web analytics without cookies, tracking, or invasive data collection",
    icon: Code,
    features: [
      "Cookie-Free Analytics",
      "GDPR Compliant",
      "Real-time Traffic Monitoring",
      "Individual Page Analytics",
      "Traffic Source Analysis",
      "Device & Browser Breakdown",
      "Bounce Rate Tracking",
      "Raw Data Access"
    ],
    price: "Starting at $1/month",
    marketPrice: "$5-15/month",
    benefits: ["100% privacy compliant", "No cookie banners needed", "Lightning fast setup", "Beautiful visualizations"],
    setupTime: "5 minutes",
    targetUsers: "Website Owners, Bloggers, Small Businesses"
  },
  {
    title: "Workflow Automation Platform",
    description: "Intelligent automation tools that streamline business processes and eliminate repetitive tasks",
    icon: Settings,
    features: [
      "Visual Workflow Builder",
      "API Integrations",
      "Task Scheduling & Triggers",
      "Data Transformation",
      "Email & SMS Automation",
      "Custom Logic Rules",
      "Real-time Monitoring",
      "Error Handling & Alerts"
    ],
    price: "Starting at $29/month",
    marketPrice: "$50-150/month",
    benefits: ["75% process automation", "Zero coding required", "500+ integrations", "24/7 reliability"],
    setupTime: "1-2 weeks",
    targetUsers: "Small to Medium Businesses, Agencies"
  },
  {
    title: "AI Content Generation Suite",
    description: "Comprehensive AI-powered content creation platform for blogs, social media, and marketing materials",
    icon: Cloud,
    features: [
      "AI Blog Post Generation",
      "Social Media Content Creation",
      "SEO-Optimized Writing",
      "Multi-Language Support",
      "Brand Voice Customization",
      "Content Calendar Management",
      "Plagiarism Detection",
      "Performance Analytics"
    ],
    price: "Starting at $39/month",
    marketPrice: "$80-200/month",
    benefits: ["10x content production", "SEO-optimized output", "Consistent brand voice", "Multi-platform publishing"],
    setupTime: "2-3 days",
    targetUsers: "Content Creators, Marketers, Agencies"
  },
  {
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking with predictive analytics and automated reordering",
    icon: BarChart3,
    features: [
      "Real-time Inventory Tracking",
      "Predictive Demand Forecasting",
      "Automated Reorder Points",
      "Multi-Location Support",
      "Barcode Scanning",
      "Supplier Management",
      "Cost Analysis & Reporting",
      "Mobile App Access"
    ],
    price: "Starting at $49/month",
    marketPrice: "$100-300/month",
    benefits: ["30% reduction in stockouts", "25% inventory cost savings", "Automated reordering", "Real-time visibility"],
    setupTime: "1-2 weeks",
    targetUsers: "E-commerce, Retail, Manufacturing"
  },
  {
    title: "Customer Support Automation",
    description: "Intelligent chatbot and ticketing system that provides 24/7 customer support with human-like responses",
    icon: Users,
    features: [
      "AI-Powered Chatbots",
      "Multi-Channel Support",
      "Ticket Management System",
      "Knowledge Base Integration",
      "Sentiment Analysis",
      "Escalation Management",
      "Performance Analytics",
      "Custom Workflows"
    ],
    price: "Starting at $79/month",
    marketPrice: "$150-400/month",
    benefits: ["80% query resolution", "24/7 availability", "Reduced support costs", "Improved customer satisfaction"],
    setupTime: "1-2 weeks",
    targetUsers: "E-commerce, SaaS, Service Businesses"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email marketing platform with AI-driven personalization and behavioral targeting",
    icon: Mail,
    features: [
      "AI-Powered Personalization",
      "Behavioral Trigger Campaigns",
      "A/B Testing Automation",
      "Advanced Segmentation",
      "Email Template Builder",
      "Deliverability Optimization",
      "Performance Analytics",
      "CRM Integration"
    ],
    price: "Starting at $59/month",
    marketPrice: "$120-350/month",
    benefits: ["40% higher open rates", "60% better click-through rates", "Automated campaigns", "Advanced personalization"],
    setupTime: "3-5 days",
    targetUsers: "E-commerce, SaaS, Digital Agencies"
  },
  {
    title: "Social Media Management",
    description: "AI-powered social media scheduling, analytics, and content optimization across all platforms",
    icon: Globe,
    features: [
      "Multi-Platform Scheduling",
      "AI Content Suggestions",
      "Optimal Posting Times",
      "Hashtag Optimization",
      "Engagement Analytics",
      "Competitor Analysis",
      "Content Calendar",
      "Team Collaboration"
    ],
    price: "Starting at $39/month",
    marketPrice: "$80-250/month",
    benefits: ["3x engagement increase", "Optimal posting times", "Content optimization", "Multi-platform management"],
    setupTime: "2-3 days",
    targetUsers: "Brands, Influencers, Agencies"
  },
  {
    title: "Lead Generation & CRM",
    description: "Comprehensive lead management system with AI-powered lead scoring and automated follow-up sequences",
    icon: Target,
    features: [
      "AI Lead Scoring",
      "Automated Follow-ups",
      "Lead Source Tracking",
      "Pipeline Management",
      "Email Sequences",
      "Meeting Scheduler",
      "Performance Analytics",
      "Integration Hub"
    ],
    price: "Starting at $69/month",
    marketPrice: "$150-500/month",
    benefits: ["50% more qualified leads", "Automated nurturing", "Better conversion rates", "Complete pipeline visibility"],
    setupTime: "1 week",
    targetUsers: "Sales Teams, Agencies, B2B Companies"
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
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <solution.icon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {solution.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {solution.features.length > 4 && (
                      <li className="text-xs text-gray-400">+{solution.features.length - 4} more features</li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                {solution.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-purple-600">{solution.price}</span>
                    {solution.marketPrice && (
                      <span className="text-sm text-gray-500 line-through">{solution.marketPrice}</span>
                    )}
                  </div>
                  {solution.setupTime && (
                    <p className="text-xs text-gray-500">Setup: {solution.setupTime}</p>
                  )}
                  {solution.targetUsers && (
                    <p className="text-xs text-gray-500 mt-1">Perfect for: {solution.targetUsers}</p>
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