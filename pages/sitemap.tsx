import React from 'react';
import Layout from './components/Layout';
import { motion } from 'framer-motion';
import { Map, ArrowRight, ExternalLink, Home, Settings, Target, Building, FileText, Users, Phone } from 'lucide-react';

const siteStructure = [
  {
    category: "Main Pages",
    icon: Home,
    pages: [
      { title: "Home", url: "/", description: "Main landing page with company overview" },
      { title: "About Us", url: "/about", description: "Company information and mission" },
      { title: "Contact", url: "/contact", description: "Get in touch with our team" },
      { title: "Pricing", url: "/pricing", description: "Service pricing and plans" }
    ]
  },
  {
    category: "Services",
    icon: Settings,
    pages: [
      { title: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { title: "IT Services", url: "/it-services", description: "Information technology services" },
      { title: "Micro SaaS", url: "/micro-saas", description: "Micro software as a service solutions" },
      { title: "AI Development", url: "/ai-development", description: "Custom AI development services" },
      { title: "Digital Transformation", url: "/digital-transformation", description: "Business digital transformation" },
      { title: "IoT Solutions", url: "/iot-solutions", description: "Internet of Things solutions" },
      { title: "Blockchain", url: "/blockchain", description: "Blockchain development services" }
    ]
  },
  {
    category: "Solutions",
    icon: Target,
    pages: [
      { title: "Cloud Solutions", url: "/cloud-solutions", description: "Cloud infrastructure and services" },
      { title: "Cybersecurity", url: "/cybersecurity", description: "Security solutions and services" },
      { title: "Data Analytics", url: "/data-analytics", description: "Data analysis and insights" },
      { title: "Automation", url: "/automation", description: "Process automation solutions" }
    ]
  },
  {
    category: "Industries",
    icon: Building,
    pages: [
      { title: "Healthcare", url: "/industries/healthcare", description: "Healthcare technology solutions" },
      { title: "Finance", url: "/industries/finance", description: "Financial services technology" },
      { title: "Manufacturing", url: "/industries/manufacturing", description: "Manufacturing automation" },
      { title: "Retail", url: "/industries/retail", description: "Retail technology solutions" },
      { title: "Education", url: "/industries/education", description: "Educational technology" },
      { title: "Real Estate", url: "/industries/real-estate", description: "Real estate technology" }
    ]
  },
  {
    category: "Resources",
    icon: FileText,
    pages: [
      { title: "Blog", url: "/blog", description: "Latest insights and articles" },
      { title: "Case Studies", url: "/case-studies", description: "Success stories and results" },
      { title: "White Papers", url: "/white-papers", description: "In-depth research reports" },
      { title: "Tutorials", url: "/tutorials", description: "Step-by-step guides" },
      { title: "Documentation", url: "/docs", description: "Technical documentation" },
      { title: "Events", url: "/events", description: "Upcoming events and webinars" }
    ]
  },
  {
    category: "Company",
    icon: Users,
    pages: [
      { title: "Team", url: "/team", description: "Meet our expert team" },
      { title: "Careers", url: "/careers", description: "Join our team" },
      { title: "Partners", url: "/partners", description: "Our partnerships" },
      { title: "News", url: "/news", description: "Company updates" },
      { title: "Press", url: "/press", description: "Press releases and media" }
    ]
  },
  {
    category: "Support",
    icon: Phone,
    pages: [
      { title: "Help Center", url: "/help", description: "Get help and support" },
      { title: "Support", url: "/support", description: "Technical support" },
      { title: "Status", url: "/status", description: "Service status page" },
      { title: "Community", url: "/community", description: "Join our community" }
    ]
  }
];

const legalPages = [
  { title: "Privacy Policy", url: "/privacy", description: "How we protect your privacy" },
  { title: "Terms of Service", url: "/terms", description: "Terms and conditions" },
  { title: "Cookie Policy", url: "/cookies", description: "Cookie usage information" },
  { title: "Accessibility", url: "/accessibility", description: "Accessibility statement" }
];

const quickLinks = [
  { title: "Get Started", url: "/contact", description: "Start your project today" },
  { title: "View Pricing", url: "/pricing", description: "See our service plans" },
  { title: "Free Consultation", url: "/contact", description: "Schedule a free consultation" },
  { title: "Support", url: "/help", description: "Get help and support" }
];

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category for easy navigation."
      keywords="sitemap, website map, navigation, pages, services, resources"
      canonical="https://ziontechgroup.com/sitemap"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Website Sitemap
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Navigate our website easily with this comprehensive sitemap. 
                Find all our pages, services, and resources organized by category.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {link.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Site Structure */}
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
                All pages organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {siteStructure.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={categoryIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-50 p-6 border-b">
                      <div className="flex items-center">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {category.category}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.pages.map((page, pageIndex) => (
                          <a
                            key={pageIndex}
                            href={page.url}
                            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                {page.title}
                              </h4>
                              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <p className="text-sm text-gray-600">
                              {page.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Legal Pages */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Legal & Policy Pages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Important legal information and policies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalPages.map((page, index) => (
                <motion.a
                  key={index}
                  href={page.url}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {page.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    {page.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Use our search functionality to find specific pages or content.
              </p>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Map className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Us for Help
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}