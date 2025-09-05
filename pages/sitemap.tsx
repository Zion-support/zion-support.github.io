import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sitemap, 
  ArrowRight,
  ExternalLink,
  Globe,
  FileText,
  Users,
  Settings,
  Building,
  BookOpen,
  MessageSquare,
  Shield,
  Zap
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    title: "Home",
    href: "/",
    description: "Main landing page with company overview and services",
    icon: Globe
  },
  {
    title: "About Us",
    href: "/about",
    description: "Company information, team, and mission",
    icon: Users
  },
  {
    title: "Services",
    href: "/services",
    description: "Overview of all our technology services",
    icon: Settings,
    children: [
      { title: "AI Services", href: "/ai-services", description: "Artificial intelligence solutions and services" },
      { title: "IT Services", href: "/it-services", description: "Information technology services and support" },
      { title: "Micro SaaS", href: "/micro-saas", description: "Software as a Service solutions" }
    ]
  },
  {
    title: "Solutions",
    href: "/solutions",
    description: "Industry-specific and custom solutions",
    icon: Zap,
    children: [
      { title: "Enterprise Solutions", href: "/solutions/enterprise", description: "Large-scale enterprise solutions" },
      { title: "Startup Solutions", href: "/solutions/startup", description: "Cost-effective solutions for startups" },
      { title: "Industry Solutions", href: "/solutions/industry", description: "Industry-specific solutions" },
      { title: "Custom Development", href: "/solutions/custom", description: "Bespoke development services" },
      { title: "Digital Transformation", href: "/solutions/digital-transformation", description: "Complete digital transformation" },
      { title: "Cloud Migration", href: "/solutions/cloud-migration", description: "Cloud infrastructure migration" }
    ]
  },
  {
    title: "Industries",
    href: "/industries",
    description: "Solutions for specific industries",
    icon: Building,
    children: [
      { title: "Healthcare", href: "/industries/healthcare", description: "Healthcare technology solutions" },
      { title: "Finance", href: "/industries/finance", description: "Financial services technology" },
      { title: "Manufacturing", href: "/industries/manufacturing", description: "Manufacturing and IoT solutions" },
      { title: "Retail", href: "/industries/retail", description: "Retail and e-commerce solutions" },
      { title: "Education", href: "/industries/education", description: "Educational technology platforms" },
      { title: "Government", href: "/industries/government", description: "Government and public sector solutions" }
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Documentation, guides, and learning resources",
    icon: BookOpen,
    children: [
      { title: "Documentation", href: "/docs", description: "Technical documentation and guides" },
      { title: "Case Studies", href: "/case-studies", description: "Client success stories and case studies" },
      { title: "Blog", href: "/blog", description: "Latest insights and industry news" },
      { title: "API Reference", href: "/api-docs", description: "Complete API documentation" },
      { title: "White Papers", href: "/white-papers", description: "Research and analysis papers" },
      { title: "Webinars", href: "/webinars", description: "Educational webinars and events" }
    ]
  },
  {
    title: "Company",
    href: "/about",
    description: "Company information and career opportunities",
    icon: Users,
    children: [
      { title: "About Us", href: "/about", description: "Company overview and mission" },
      { title: "Our Team", href: "/about#team", description: "Meet our team members" },
      { title: "Careers", href: "/careers", description: "Job opportunities and career information" },
      { title: "Partners", href: "/partners", description: "Partnership opportunities and programs" },
      { title: "News", href: "/news", description: "Latest company news and announcements" }
    ]
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with our team",
    icon: MessageSquare
  },
  {
    title: "Legal",
    href: "/privacy",
    description: "Legal information and policies",
    icon: Shield,
    children: [
      { title: "Privacy Policy", href: "/privacy", description: "Data privacy and protection policy" },
      { title: "Terms of Service", href: "/terms", description: "Terms and conditions of service" },
      { title: "Cookie Policy", href: "/cookies", description: "Cookie usage and preferences" },
      { title: "Security", href: "/security", description: "Security practices and measures" },
      { title: "Compliance", href: "/compliance", description: "Regulatory compliance information" }
    ]
  }
];

const additionalPages = [
  { title: "Talent", href: "/talent", description: "Talent acquisition and recruitment services" },
  { title: "Support", href: "/support", description: "Customer support and help center" },
  { title: "FAQ", href: "/faq", description: "Frequently asked questions" },
  { title: "Tutorials", href: "/tutorials", description: "Step-by-step tutorials and guides" },
  { title: "Guides", href: "/guides", description: "Comprehensive how-to guides" }
];

export default function SitemapPage() {
  return (
    <MainLayout 
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of all pages and sections on the Zion Tech Group website. Find any page or resource quickly and easily."
      keywords="sitemap, site map, navigation, pages, website structure, all pages"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sitemap</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Complete overview of all pages and sections on our website. 
                Find any page or resource quickly and easily.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="#main-pages"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Browse Pages <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Pages Section */}
        <section id="main-pages" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Main <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Core pages and sections of our website organized by category.
              </p>
            </motion.div>

            <div className="space-y-8">
              {siteStructure.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          <Link 
                            href={section.href}
                            className="hover:text-blue-400 transition-colors duration-300"
                          >
                            {section.title}
                          </Link>
                        </h3>
                        <Link 
                          href={section.href}
                          className="text-blue-400 hover:text-blue-300 flex items-center group"
                        >
                          Visit <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                      <p className="text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {section.children && (
                    <div className="ml-16">
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Subpages:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.children.map((child, childIndex) => (
                          <div key={childIndex} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="text-white font-semibold">
                                <Link 
                                  href={child.href}
                                  className="hover:text-blue-400 transition-colors duration-300"
                                >
                                  {child.title}
                                </Link>
                              </h5>
                              <Link 
                                href={child.href}
                                className="text-blue-400 hover:text-blue-300"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {child.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Pages Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pages</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional pages and resources available on our website.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalPages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      <Link href={page.href}>
                        {page.title}
                      </Link>
                    </h3>
                    <Link 
                      href={page.href}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  <p className="text-gray-400">
                    {page.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Use our search functionality or contact us directly for assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center"
                >
                  Contact Support <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  href="/resources"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Browse Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}