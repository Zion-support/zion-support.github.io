import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  Settings, 
  ArrowRight,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Clock,
  Users,
  Star,
  Globe
} from 'lucide-react';

const resourceCategories = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation for our products and services.",
    icon: FileText,
    href: "/docs",
    count: "50+ Documents",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Case Studies",
    description: "Real-world examples of successful implementations and client success stories.",
    icon: BarChart3,
    href: "/case-studies",
    count: "25+ Case Studies",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Blog",
    description: "Latest insights, trends, and best practices in technology and business.",
    icon: MessageSquare,
    href: "/blog",
    count: "100+ Articles",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples and integration guides.",
    icon: Settings,
    href: "/api-docs",
    count: "15+ APIs",
    color: "from-orange-500 to-orange-600"
  }
];

const featuredResources = [
  {
    title: "Getting Started with AI Services",
    type: "Guide",
    description: "A comprehensive guide to implementing AI solutions in your business.",
    readTime: "15 min read",
    category: "Documentation",
    href: "/docs/getting-started-ai",
    featured: true
  },
  {
    title: "Enterprise Security Best Practices",
    type: "Whitepaper",
    description: "Essential security practices for enterprise applications and infrastructure.",
    readTime: "25 min read",
    category: "Documentation",
    href: "/docs/enterprise-security",
    featured: true
  },
  {
    title: "How We Helped a Startup Scale to 100K Users",
    type: "Case Study",
    description: "Real-world example of scaling a startup from MVP to enterprise scale.",
    readTime: "10 min read",
    category: "Case Studies",
    href: "/case-studies/startup-scaling",
    featured: true
  },
  {
    title: "API Integration Guide",
    type: "Tutorial",
    description: "Step-by-step guide to integrating with our APIs and services.",
    readTime: "20 min read",
    category: "API Reference",
    href: "/api-docs/integration-guide",
    featured: true
  }
];

const tutorials = [
  {
    title: "Building Your First Micro SaaS",
    description: "Learn how to build and deploy a micro SaaS application from scratch.",
    duration: "2 hours",
    level: "Beginner",
    href: "/tutorials/micro-saas-guide"
  },
  {
    title: "AI Model Training and Deployment",
    description: "Complete guide to training and deploying machine learning models.",
    duration: "4 hours",
    level: "Advanced",
    href: "/tutorials/ai-model-training"
  },
  {
    title: "Cloud Infrastructure Setup",
    description: "Setting up scalable cloud infrastructure for your applications.",
    duration: "3 hours",
    level: "Intermediate",
    href: "/tutorials/cloud-infrastructure"
  },
  {
    title: "API Development Best Practices",
    description: "Best practices for designing and developing RESTful APIs.",
    duration: "1.5 hours",
    level: "Intermediate",
    href: "/tutorials/api-development"
  }
];

const guides = [
  {
    title: "Technology Stack Selection",
    description: "How to choose the right technology stack for your project.",
    category: "Development",
    href: "/guides/technology-stack"
  },
  {
    title: "Security Implementation Guide",
    description: "Comprehensive security implementation for web applications.",
    category: "Security",
    href: "/guides/security-implementation"
  },
  {
    title: "Performance Optimization",
    description: "Techniques for optimizing application performance and scalability.",
    category: "Performance",
    href: "/guides/performance-optimization"
  },
  {
    title: "Deployment Strategies",
    description: "Different deployment strategies and when to use them.",
    category: "DevOps",
    href: "/guides/deployment-strategies"
  }
];

const faqCategories = [
  {
    title: "General Questions",
    count: "15 questions",
    href: "/faq#general"
  },
  {
    title: "Technical Support",
    count: "20 questions",
    href: "/faq#technical"
  },
  {
    title: "Billing & Pricing",
    count: "10 questions",
    href: "/faq#billing"
  },
  {
    title: "API & Integration",
    count: "25 questions",
    href: "/faq#api"
  }
];

export default function ResourcesPage() {
  return (
    <MainLayout 
      title="Resources - Zion Tech Group"
      description="Comprehensive resources including documentation, case studies, tutorials, and guides to help you succeed with technology solutions."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Knowledge{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive resources to help you succeed with technology solutions. 
                From documentation to tutorials, we provide everything you need to get started and excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Browse Documentation
                </Link>
                <Link href="/tutorials" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Start Learning
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Resource Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources organized by category.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resourceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="text-sm text-gray-500 mb-6">
                        {category.count}
                      </div>
                      <Link
                        href={category.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-indigo-600 transition-colors"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hand-picked resources to help you get started and succeed with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {resource.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    {resource.featured && (
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.readTime}
                    </div>
                    <Link
                      href={resource.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Interactive Tutorials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Step-by-step tutorials to help you learn and master our technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tutorials.map((tutorial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {tutorial.duration}
                          </div>
                          <span className={`px-2 py-1 rounded text-xs ${
                            tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {tutorial.level}
                          </span>
                        </div>
                        <Link
                          href={tutorial.href}
                          className="text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Start Tutorial
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Guides
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                In-depth guides covering various aspects of technology implementation and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {guide.title}
                        </h3>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">
                          {guide.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services and solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {category.count}
                    </p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>View Questions</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need More Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/support" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Support
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}