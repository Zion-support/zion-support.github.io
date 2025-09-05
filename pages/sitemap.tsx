import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Map, 
  ArrowRight,
  ExternalLink,
  Home,
  Settings,
  Users,
  FileText,
  Phone,
  Shield,
  HelpCircle,
  Briefcase,
  Newspaper
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { name: "Home", url: "/", description: "Main landing page" },
      { name: "About Us", url: "/about", description: "Company information and team" },
      { name: "Contact", url: "/contact", description: "Get in touch with us" }
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
      { name: "Talent Solutions", url: "/talent", description: "Hiring and talent management" }
    ]
  },
  {
    category: "Solutions",
    icon: Shield,
    pages: [
      { name: "Solutions Overview", url: "/solutions", description: "All solution categories" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Large organization solutions" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Startup-focused solutions" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Bespoke development services" }
    ]
  },
  {
    category: "Resources",
    icon: FileText,
    pages: [
      { name: "Documentation", url: "/docs", description: "Technical documentation and guides" },
      { name: "API Documentation", url: "/api-docs", description: "API reference and examples" },
      { name: "Case Studies", url: "/case-studies", description: "Client success stories" },
      { name: "Blog", url: "/blog", description: "Latest news and insights" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Customer support and help" }
    ]
  },
  {
    category: "Company",
    icon: Users,
    pages: [
      { name: "About Us", url: "/about", description: "Our story and mission" },
      { name: "Careers", url: "/careers", description: "Job opportunities and culture" },
      { name: "News", url: "/news", description: "Company news and updates" }
    ]
  },
  {
    category: "Legal & Compliance",
    icon: Shield,
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "Data privacy and protection" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
      { name: "Cookie Policy", url: "/cookies", description: "Cookie usage and preferences" },
      { name: "Security", url: "/security", description: "Security measures and practices" },
      { name: "Compliance", url: "/compliance", description: "Regulatory compliance information" }
    ]
  }
];

const quickLinks = [
  { name: "Get Started", url: "/contact", icon: ArrowRight },
  { name: "View Services", url: "/services", icon: Settings },
  { name: "Read Documentation", url: "/docs", icon: FileText },
  { name: "Contact Support", url: "/support", icon: HelpCircle },
  { name: "View Careers", url: "/careers", icon: Briefcase },
  { name: "Latest News", url: "/news", icon: Newspaper }
];

const externalLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", description: "Follow us on LinkedIn" },
  { name: "Twitter", url: "https://twitter.com/ziontechgroup", description: "Follow us on Twitter" },
  { name: "GitHub", url: "https://github.com/ziontechgroup", description: "View our code on GitHub" },
  { name: "YouTube", url: "https://youtube.com/@ziontechgroup", description: "Watch our videos on YouTube" },
  { name: "Facebook", url: "https://facebook.com/ziontechgroup", description: "Like us on Facebook" }
];

export default function SitemapPage() {
  return (
    <MainLayout 
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group's website. Find all pages, services, resources, and external links in one place."
      keywords="sitemap, website map, navigation, pages, links, site structure"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Map className="w-16 h-16 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Sitemap
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Complete overview of all pages and resources available on our website. 
                Find what you're looking for quickly and easily.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Contact Us
                </Link>
                <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
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
                Quick Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Most popular pages and resources for quick access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Link href={link.url} className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Site Structure */}
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
                Complete Site Structure
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                All pages organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {category.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="flex items-start justify-between p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors group">
                          <div className="flex-1">
                            <Link 
                              href={page.url}
                              className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                            >
                              {page.name}
                            </Link>
                            <p className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* External Links */}
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
                External Links
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Connect with us on social media and other platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {externalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Functionality */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our search functionality to find specific pages, articles, or information.
              </p>
              
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search the website..."
                  className="w-full px-6 py-4 pr-12 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold">
                  Contact Support
                </Link>
                <Link href="/faq" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold">
                  Check FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}