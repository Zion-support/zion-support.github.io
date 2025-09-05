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
    icon: BarChart3,
    pages: [
      { name: "All Solutions", url: "/solutions", description: "Overview of our solution categories" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Solutions for large organizations" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for startups and small businesses" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Bespoke software development" }
    ]
  },
  {
    category: "Resources",
    icon: BookOpen,
    pages: [
      { name: "All Resources", url: "/resources", description: "Overview of all resources" },
      { name: "Documentation", url: "/docs", description: "Technical documentation and guides" },
      { name: "Case Studies", url: "/case-studies", description: "Client success stories and case studies" },
      { name: "Blog", url: "/blog", description: "Latest insights and industry news" },
      { name: "API Reference", url: "/api-docs", description: "API documentation and integration guides" },
      { name: "Tutorials", url: "/tutorials", description: "Step-by-step learning tutorials" },
      { name: "Guides", url: "/guides", description: "Comprehensive implementation guides" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" }
    ]
  },
  {
    category: "Company",
    icon: Users,
    pages: [
      { name: "About Us", url: "/about", description: "Company information and team" },
      { name: "Careers", url: "/careers", description: "Job opportunities and company culture" },
      { name: "News", url: "/news", description: "Company news and announcements" },
      { name: "Support", url: "/support", description: "Technical support and help center" }
    ]
  },
  {
    category: "Legal",
    icon: Shield,
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "Data privacy and protection policy" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions of service" },
      { name: "Cookie Policy", url: "/cookies", description: "Cookie usage and management" },
      { name: "Security", url: "/security", description: "Security measures and compliance" },
      { name: "Compliance", url: "/compliance", description: "Regulatory compliance information" },
      { name: "Accessibility", url: "/accessibility", description: "Accessibility statement and features" }
    ]
  }
];

const quickLinks = [
  { name: "Get Started", url: "/contact", icon: ArrowRight },
  { name: "View Services", url: "/services", icon: Settings },
  { name: "Read Blog", url: "/blog", icon: MessageSquare },
  { name: "Browse Careers", url: "/careers", icon: Users },
  { name: "API Docs", url: "/api-docs", icon: Code },
  { name: "Support", url: "/support", icon: HelpCircle }
];

const externalLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: ExternalLink },
  { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: ExternalLink },
  { name: "GitHub", url: "https://github.com/ziontechgroup", icon: ExternalLink },
  { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: ExternalLink },
  { name: "Facebook", url: "https://facebook.com/ziontechgroup", icon: ExternalLink }
];

export default function SitemapPage() {
  return (
    <MainLayout 
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and resources available on the Zion Tech Group website."
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
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Navigate our website easily with this comprehensive sitemap. 
                Find all pages, resources, and sections organized by category.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-gray-600">Popular pages and resources</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.url}
                      className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <IconComponent className="w-6 h-6 text-blue-600 mb-2 group-hover:text-blue-700" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Site Structure */}
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
                Complete Site Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse all pages and sections organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {siteStructure.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    className="bg-white rounded-xl shadow-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.category}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.pages.map((page, pageIndex) => (
                        <motion.div
                          key={pageIndex}
                          className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: pageIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={page.url}
                            className="block group-hover:text-blue-600 transition-colors"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                              {page.name}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {page.description}
                            </p>
                            <div className="mt-2 text-xs text-blue-600 group-hover:text-blue-700">
                              {page.url}
                            </div>
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

        {/* External Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                External Links
              </h2>
              <p className="text-lg text-gray-600">
                Connect with us on social media and external platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {externalLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 mb-2 group-hover:text-blue-700" />
                    <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                      {link.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Use our search functionality to find specific content, or contact us for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search the site..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Search
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}