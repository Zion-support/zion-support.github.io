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
  }
];

export default function SitemapPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Navigate through all our pages and discover the comprehensive range of services, 
                resources, and information we offer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((section, sectionIndex) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.category}</h2>
                    </div>
                    
                    <div className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: pageIndex * 0.1 }}
                          className="group"
                        >
                          <Link
                            href={page.url}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {page.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {page.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-lg text-gray-600">
                Popular pages and frequently accessed resources
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Get Started", url: "/contact", icon: ArrowRight },
                { name: "Our Services", url: "/services", icon: Settings },
                { name: "About Us", url: "/about", icon: Users },
                { name: "Support", url: "/support", icon: HelpCircle }
              ].map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.url}
                      className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg transition-all group"
                    >
                      <IconComponent className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/support"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Get Support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}