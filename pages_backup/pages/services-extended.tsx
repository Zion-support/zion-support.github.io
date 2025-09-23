import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  TrendingUp, 
  Clock, 
  DollarSign,
  BarChart3,
  Settings,
  Code,
  Database,
  Server,
  MessageSquare,
  FileText,
  Mic,
  Search,
  Calendar,
  Package,
  ClipboardList,
  ShoppingCart
} from 'lucide-react';
import Layout from '../components/Layout';

const allServices = [
  // AI Services
  {
    category: "AI Services",
    icon: Brain,
    color: "from-purple-500 to-purple-700",
    services: [
      {
        title: "Machine Learning Models",
        description: "Custom ML models for predictive analytics and intelligent decision-making",
        price: "$3,500/month",
        marketPrice: "$5,000-12,000/month",
        features: ["Custom model development", "Real-time prediction APIs", "A/B testing", "Model monitoring"],
        benefits: ["40-60% accuracy improvement", "80% automation", "25-35% ROI increase"]
      },
      {
        title: "AI-Powered Business Automation",
        description: "Intelligent automation for repetitive tasks and business processes",
        price: "$1,800/month",
        marketPrice: "$3,000-6,000/month",
        features: ["Workflow automation", "Customer service automation", "Lead qualification", "Process optimization"],
        benefits: ["70-85% manual work reduction", "90% faster response time", "40% lead conversion increase"]
      },
      {
        title: "AI Content Generation & Marketing",
        description: "Automated content creation and marketing campaign optimization",
        price: "$1,500/month",
        marketPrice: "$2,500-5,000/month",
        features: ["Content generation", "SEO optimization", "Social media automation", "Performance analytics"],
        benefits: ["50+ pieces daily", "60% engagement increase", "80% cost reduction"]
      },
      {
        title: "AI Data Analytics & Insights",
        description: "Advanced data analysis and predictive insights powered by AI",
        price: "$2,000/month",
        marketPrice: "$3,500-8,000/month",
        features: ["Predictive analytics", "Customer behavior analysis", "Real-time processing", "Custom dashboards"],
        benefits: ["3x faster trend identification", "65% decision accuracy", "25-40% revenue increase"]
      }
    ]
  },
  // IT Services
  {
    category: "IT Services",
    icon: Network,
    color: "from-blue-500 to-blue-700",
    services: [
      {
        title: "Cloud Infrastructure & Migration",
        description: "Comprehensive cloud solutions with seamless migration and optimization",
        price: "$1,800/month",
        marketPrice: "$3,500-8,000/month",
        features: ["AWS, Azure, GCP migration", "Container orchestration", "Auto-scaling", "Disaster recovery"],
        benefits: ["40% cost reduction", "300% scalability improvement", "99.9% uptime"]
      },
      {
        title: "Advanced Cybersecurity Solutions",
        description: "Enterprise-grade security services protecting against modern threats",
        price: "$2,500/month",
        marketPrice: "$5,000-15,000/month",
        features: ["Security audits", "Penetration testing", "Zero-trust architecture", "Compliance management"],
        benefits: ["90% incident reduction", "100% compliance", "99.9% threat protection"]
      },
      {
        title: "DevOps & CI/CD Automation",
        description: "Modern DevOps practices with automated deployment and monitoring",
        price: "$2,000/month",
        marketPrice: "$4,000-10,000/month",
        features: ["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Performance optimization"],
        benefits: ["10x faster deployment", "95% error reduction", "60% productivity increase"]
      },
      {
        title: "Managed IT Services",
        description: "Complete IT management and support for small to medium businesses",
        price: "$1,200/month",
        marketPrice: "$2,500-6,000/month",
        features: ["24/7 help desk", "Proactive monitoring", "Security management", "Asset management"],
        benefits: ["60% overhead reduction", "90% reliability improvement", "Free up internal resources"]
      }
    ]
  },
  // Micro SaaS Services
  {
    category: "Micro SaaS Solutions",
    icon: Cloud,
    color: "from-green-500 to-green-700",
    services: [
      {
        title: "AI-Powered Lead Generation",
        description: "Automated lead discovery, qualification, and nurturing using AI",
        price: "$1,200/month",
        marketPrice: "$2,500-5,000/month",
        features: ["AI lead scoring", "Automated research", "Multi-channel capture", "CRM integration"],
        benefits: ["300% lead increase", "60% cost reduction", "25 hours/week saved"]
      },
      {
        title: "Smart Appointment Scheduling",
        description: "Intelligent scheduling with AI optimization and automated reminders",
        price: "$800/month",
        marketPrice: "$1,500-3,000/month",
        features: ["AI time optimization", "Multi-calendar integration", "Automated reminders", "Payment processing"],
        benefits: ["70% no-show reduction", "45% booking increase", "15 hours/week saved"]
      },
      {
        title: "Customer Support Automation",
        description: "AI-powered customer service with intelligent routing and responses",
        price: "$1,000/month",
        marketPrice: "$2,000-4,500/month",
        features: ["AI chatbot", "Intelligent routing", "Multi-channel support", "Sentiment analysis"],
        benefits: ["90% faster response", "80% automatic handling", "60% satisfaction improvement"]
      },
      {
        title: "Financial Analytics & Forecasting",
        description: "AI-powered financial insights and predictive analytics for businesses",
        price: "$1,800/month",
        marketPrice: "$3,500-7,000/month",
        features: ["Automated reporting", "Cash flow forecasting", "Expense tracking", "Risk assessment"],
        benefits: ["95% accuracy improvement", "70% time reduction", "25% profitability increase"]
      }
    ]
  }
];

const stats = [
  { number: '305+', label: 'Services & Solutions' },
  { number: '2,500+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '150+', label: 'Expert Team Members' },
  { number: '18+', label: 'Years Experience' }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$800-1,500/month",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic AI automation",
      "Essential IT support",
      "Standard micro SaaS tools",
      "Email support",
      "Monthly reporting"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$1,500-3,500/month",
    description: "Ideal for growing businesses",
    features: [
      "Advanced AI solutions",
      "Comprehensive IT services",
      "Full micro SaaS suite",
      "Priority support",
      "Weekly reporting",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$3,500+/month",
    description: "For large organizations and enterprises",
    features: [
      "Custom AI development",
      "Enterprise IT infrastructure",
      "Bespoke SaaS solutions",
      "24/7 dedicated support",
      "Real-time monitoring",
      "Custom development",
      "Dedicated account manager"
    ],
    popular: false
  }
];

export default function ServicesExtendedPage() {
  return (
    <Layout
      title="Complete Technology Services - Zion Tech Group"
      description="Comprehensive AI services, IT solutions, and micro SaaS platforms. 305+ innovative solutions with competitive pricing and proven results."
      keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, automation"
      canonical="https://ziontechgroup.com/services-extended"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Complete Technology{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services & Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive suite of 305+ AI services, IT solutions, and innovative micro SaaS platforms. 
                From cutting-edge artificial intelligence to robust infrastructure and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <Link href="/pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Complete Service Portfolio
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions across AI, IT infrastructure, and micro SaaS platforms. 
                Each service is designed to drive growth, efficiency, and innovation.
              </p>
            </motion.div>

            {allServices.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  className="mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
                      <p className="text-gray-600">Comprehensive solutions for modern businesses</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                        
                        <ul className="text-xs text-gray-500 space-y-1 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold text-blue-600">{service.price}</span>
                            <span className="text-xs text-gray-500 line-through">{service.marketPrice}</span>
                          </div>
                          <div className="text-xs text-green-600 font-medium">Save up to 50% vs market</div>
                        </div>

                        <div className="mb-4">
                          <h5 className="text-xs font-semibold text-gray-900 mb-2">Key Benefits:</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, idx) => (
                              <li key={idx} className="flex items-center">
                                <ArrowRight className="w-3 h-3 text-blue-500 mr-1" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/contact"
                          className="w-full bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Get Quote
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs. All plans include our core services with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    tier.popular ? 'ring-2 ring-blue-500 relative' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-600">{tier.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs. 
                Let's discuss how we can help accelerate your digital transformation with our comprehensive solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
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
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}