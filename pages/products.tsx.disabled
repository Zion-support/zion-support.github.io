import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Smartphone, Database, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';

const products = [
  {
    title: "ZionAI Analytics",
    description: "Advanced AI-powered analytics platform that transforms raw data into actionable insights for business growth.",
    icon: Brain,
    category: "AI Solutions",
    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "Real-time Dashboards",
      "Custom AI Training",
      "API Integration",
      "Multi-cloud Support"
    ],
    pricing: "Starting at $299/month",
    rating: 4.9,
    reviews: 127,
    href: "/products/zion-ai-analytics"
  },
  {
    title: "CloudSecure Pro",
    description: "Enterprise-grade cloud security solution with zero-trust architecture and advanced threat protection.",
    icon: Shield,
    category: "Security",
    features: [
      "Zero-Trust Architecture",
      "Threat Detection",
      "Compliance Management",
      "Real-time Monitoring",
      "Automated Response",
      "Multi-cloud Security"
    ],
    pricing: "Starting at $499/month",
    rating: 4.8,
    reviews: 89,
    href: "/products/cloudsecure-pro"
  },
  {
    title: "DataFlow Engine",
    description: "High-performance data processing and ETL platform for modern data pipelines and analytics.",
    icon: Database,
    category: "Data Solutions",
    features: [
      "Real-time Processing",
      "ETL Pipelines",
      "Data Transformation",
      "Scalable Architecture",
      "API Management",
      "Monitoring & Alerts"
    ],
    pricing: "Starting at $199/month",
    rating: 4.7,
    reviews: 156,
    href: "/products/dataflow-engine"
  },
  {
    title: "MobileFirst CMS",
    description: "Headless CMS designed for mobile-first experiences with advanced content management capabilities.",
    icon: Smartphone,
    category: "Content Management",
    features: [
      "Headless Architecture",
      "Mobile Optimization",
      "Content Versioning",
      "Multi-language Support",
      "SEO Optimization",
      "Developer APIs"
    ],
    pricing: "Starting at $149/month",
    rating: 4.6,
    reviews: 98,
    href: "/products/mobilefirst-cms"
  },
  {
    title: "ZionCloud Platform",
    description: "Comprehensive cloud infrastructure platform with automated scaling and management capabilities.",
    icon: Cloud,
    category: "Cloud Infrastructure",
    features: [
      "Auto-scaling",
      "Multi-cloud Support",
      "Cost Optimization",
      "Monitoring & Alerts",
      "DevOps Integration",
      "Security Compliance"
    ],
    pricing: "Starting at $399/month",
    rating: 4.8,
    reviews: 203,
    href: "/products/zioncloud-platform"
  },
  {
    title: "WorkflowMax",
    description: "Business process automation platform that streamlines operations and increases productivity.",
    icon: Zap,
    category: "Automation",
    features: [
      "Process Automation",
      "Workflow Designer",
      "Integration Hub",
      "Task Management",
      "Analytics & Reporting",
      "Custom Triggers"
    ],
    pricing: "Starting at $99/month",
    rating: 4.5,
    reviews: 167,
    href: "/products/workflowmax"
  }
];

const categories = [
  { name: "All Products", count: 6, active: true },
  { name: "AI Solutions", count: 1, active: false },
  { name: "Security", count: 1, active: false },
  { name: "Data Solutions", count: 1, active: false },
  { name: "Content Management", count: 1, active: false },
  { name: "Cloud Infrastructure", count: 1, active: false },
  { name: "Automation", count: 1, active: false }
];

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Our Products - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's innovative products including AI analytics, cloud security, data processing, and business automation solutions." />
        <meta name="keywords" content="AI products, cloud security, data analytics, business automation, technology products, SaaS solutions" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Innovative technology products designed to solve real business challenges 
              and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">{product.pricing}</span>
                  </div>
                  
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are built with enterprise-grade security, scalability, and performance in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600">
                All our products are built with enterprise-grade security features and compliance standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">High Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and scalability to handle your growing business needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Easy Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with your existing systems and workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Choose the product that best fits your needs or contact us for a custom solution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Contact Sales
            </Link>
            <Link href="/demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}