import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Rocket,
  Building2,
  Factory,
  Cpu,
  Network,
  Target,
  Code,
  Brain,
  Workflow,
  MessageCircle,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  BookOpen,
  Leaf,
  Satellite,
  HelpCircle,
  Menu,
  X,
  Building,
  DollarSign,
  ShoppingCart,
  Heart,
  Eye,
  Database,
  Cloud,
  Server,
  Lock
} from 'lucide-react';

export default function MicroSAAS() {
  const microSAASServices = [
    {
      name: "AI Invoice Generator Pro",
      description: "Intelligent invoice creation and payment tracking platform with AI-powered templates, automated follow-ups, and multi-currency support.",
      price: "$29/month",
      features: [
        "AI-powered invoice generation",
        "Automated payment reminders",
        "Multi-currency support",
        "Client management system",
        "Payment tracking dashboard",
        "Custom branding options"
      ],
      icon: DollarSign,
      category: "Finance"
    },
    {
      name: "Smart Content Creator",
      description: "AI-powered content generation platform that creates blog posts, social media content, and marketing copy tailored to your brand voice.",
      price: "$49/month",
      features: [
        "AI content generation",
        "Brand voice training",
        "SEO optimization",
        "Multi-platform publishing",
        "Content calendar management",
        "Performance analytics"
      ],
      icon: Code,
      category: "Marketing"
    },
    {
      name: "Customer Support AI",
      description: "Intelligent customer support platform with automated ticket routing, AI-powered responses, and sentiment analysis.",
      price: "$39/month",
      features: [
        "AI chatbot integration",
        "Ticket automation",
        "Sentiment analysis",
        "Knowledge base management",
        "Multi-channel support",
        "Performance metrics"
      ],
      icon: MessageCircle,
      category: "Support"
    },
    {
      name: "HR Management Suite",
      description: "Comprehensive HR platform with employee onboarding, performance tracking, and AI-powered recruitment tools.",
      price: "$59/month",
      features: [
        "Employee database",
        "Performance tracking",
        "AI recruitment screening",
        "Time-off management",
        "Document management",
        "Compliance tracking"
      ],
      icon: Users,
      category: "HR"
    },
    {
      name: "Inventory Optimizer",
      description: "AI-powered inventory management system that predicts demand, optimizes stock levels, and reduces waste.",
      price: "$79/month",
      features: [
        "Demand forecasting",
        "Stock optimization",
        "Supplier management",
        "Barcode scanning",
        "Automated reordering",
        "Analytics dashboard"
      ],
      icon: ShoppingCart,
      category: "Operations"
    },
    {
      name: "Project Management AI",
      description: "Intelligent project management platform with AI-powered task prioritization, resource allocation, and deadline prediction.",
      price: "$69/month",
      features: [
        "AI task prioritization",
        "Resource optimization",
        "Deadline prediction",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment"
      ],
      icon: Workflow,
      category: "Project Management"
    }
  ];

  const categories = [
    { name: "Finance", count: 12, icon: DollarSign },
    { name: "Marketing", count: 8, icon: Code },
    { name: "Support", count: 6, icon: MessageCircle },
    { name: "HR", count: 10, icon: Users },
    { name: "Operations", count: 15, icon: ShoppingCart },
    { name: "Project Management", count: 7, icon: Workflow }
  ];

  const stats = [
    { number: "50+", label: "Micro SaaS Solutions" },
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <MainLayout 
      title="Micro SaaS Solutions - Zion Tech Group"
      description="Discover our collection of powerful micro SaaS solutions designed to streamline your business operations and boost productivity."
      keywords="micro SaaS, business software, productivity tools, automation, AI-powered solutions, business applications"
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Micro SaaS
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {" "}Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Powerful, focused software solutions that solve specific business problems. 
                  No bloat, no complexity - just tools that work.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/micro-saas" className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Solution Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find the perfect micro SaaS solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="p-6 bg-white rounded-xl group-hover:bg-purple-50 transition-all duration-300 mb-4 shadow-sm group-hover:shadow-md">
                    <category.icon className="h-12 w-12 text-gray-600 group-hover:text-purple-600 mx-auto transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count} solutions
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular micro SaaS solutions that businesses love
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAASServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <span className="text-sm text-purple-600 font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-purple-600">
                      {service.price}
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                      Get Started
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Discover how our micro SaaS solutions can transform your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/solutions/micro-saas" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}