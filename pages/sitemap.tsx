import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe, 
  ArrowRight, 
  ExternalLink,
  Home,
  Settings,
  Users,
  Phone,
  FileText,
  BarChart3,
  MessageSquare,
  Code,
  BookOpen,
  HelpCircle,
  Shield,
  Lock,
  Search
} from 'lucide-react';

const siteStructure = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { name: "Home", url: "/", description: "Main landing page with company overview" },
      { name: "About Us", url: "/about", description: "Company information, team, and mission" },
      { name: "Contact", url: "/contact", description: "Contact information and inquiry form" }
    ]
  },
  {
    category: "Services",
    icon: Settings,
    pages: [
      { name: "All Services", url: "/services", description: "Overview of all our services" },
      { name: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { name: "IT Services", url: "/it-services", description: "Information technology services" },
      { name: "Micro SaaS", url: "/micro-saas", description: "Software as a Service solutions" },
      { name: "Talent Solutions", url: "/talent", description: "Hiring and talent acquisition" }
    ]
  },
  {
    category: "Solutions",
    icon: Code,
    pages: [
      { name: "Custom Solutions", url: "/solutions/custom", description: "Tailored software solutions" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Large-scale enterprise systems" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for startups and small businesses" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" }
    ]
  },
  {
    category: "Resources",
    icon: BookOpen,
    pages: [
      { name: "Blog", url: "/blog", description: "Latest insights and articles" },
      { name: "Case Studies", url: "/case-studies", description: "Success stories and project examples" },
      { name: "Documentation", url: "/docs", description: "Technical documentation and guides" },
      { name: "API Documentation", url: "/api-docs", description: "API reference and integration guides" },
      { name: "Tutorials", url: "/tutorials", description: "Step-by-step tutorials and how-tos" },
      { name: "Guides", url: "/guides", description: "Comprehensive guides and best practices" }
    ]
  },
  {
    category: "Company",
    icon: Users,
    pages: [
      { name: "Careers", url: "/careers", description: "Join our team and career opportunities" },
      { name: "Partners", url: "/partners", description: "Our technology and business partners" }
    ]
  },
  {
    category: "Support",
    icon: HelpCircle,
    pages: [
      { name: "Help Center", url: "/help", description: "Get help and find answers" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Technical support and assistance" }
    ]
  },
  {
    category: "Legal",
    icon: Shield,
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "How we handle your privacy" },
      { name: "Cookie Policy", url: "/cookies", description: "Information about our cookie usage" },
      { name: "Security", url: "/security", description: "Our security practices and policies" },
      { name: "Accessibility", url: "/accessibility", description: "Accessibility features and compliance" }
    ]
  },
  {
    category: "User Account",
    icon: Lock,
    pages: [
      { name: "Login", url: "/login", description: "Sign in to your account" },
      { name: "Register", url: "/register", description: "Create a new account" }
    ]
  },
  {
    category: "Tools",
    icon: Search,
    pages: [
      { name: "Search", url: "/search", description: "Search our website and resources" },
      { name: "Pricing", url: "/pricing", description: "View our pricing plans and options" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and resources available on the Zion Tech Group website."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Sitemap
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Navigate through all pages and resources on our website
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Website Structure
                </h2>
                <p className="text-lg text-gray-600">
                  Find all pages, resources, and sections organized by category
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {siteStructure.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {section.category}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <div key={page.url} className="border-l-2 border-gray-100 pl-4">
                          <Link
                            href={page.url}
                            className="group block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {page.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {page.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-2" />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quick Access
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Jump to the most popular sections of our website
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Services", url: "/services", icon: Settings },
                    { name: "Contact", url: "/contact", icon: Phone },
                    { name: "Case Studies", url: "/case-studies", icon: BarChart3 },
                    { name: "Blog", url: "/blog", icon: MessageSquare }
                  ].map((link, index) => (
                    <Link
                      key={link.url}
                      href={link.url}
                      className="group bg-gray-50 hover:bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md"
                    >
                      <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        {link.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Can't find what you're looking for? We're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/search"
                    className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Website
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Support
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}