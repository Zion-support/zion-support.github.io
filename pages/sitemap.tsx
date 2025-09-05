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
  Globe,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const siteStructure = [
  {
    title: "Main Pages",
    pages: [
      { name: "Home", url: "/", description: "Main landing page" },
      { name: "About Us", url: "/about", description: "Company information and team" },
      { name: "Contact", url: "/contact", description: "Contact information and form" },
      { name: "News", url: "/news", description: "Latest news and updates" },
      { name: "Careers", url: "/careers", description: "Job opportunities" },
      { name: "Partners", url: "/partners", description: "Partnership information" }
    ]
  },
  {
    title: "Services",
    pages: [
      { name: "All Services", url: "/services", description: "Overview of all services" },
      { name: "AI Services", url: "/ai-services", description: "Artificial intelligence solutions" },
      { name: "IT Services", url: "/it-services", description: "Information technology services" },
      { name: "Micro SaaS", url: "/micro-saas", description: "Software as a service solutions" },
      { name: "Talent", url: "/talent", description: "Talent acquisition services" }
    ]
  },
  {
    title: "Solutions",
    pages: [
      { name: "All Solutions", url: "/solutions", description: "Overview of all solutions" },
      { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Enterprise-grade solutions" },
      { name: "Startup Solutions", url: "/solutions/startup", description: "Solutions for startups" },
      { name: "Industry Solutions", url: "/solutions/industry", description: "Industry-specific solutions" },
      { name: "Custom Development", url: "/solutions/custom", description: "Custom software development" },
      { name: "Digital Transformation", url: "/solutions/digital-transformation", description: "Digital transformation services" },
      { name: "Cloud Migration", url: "/solutions/cloud-migration", description: "Cloud migration services" }
    ]
  },
  {
    title: "Industries",
    pages: [
      { name: "Healthcare", url: "/industries/healthcare", description: "Healthcare industry solutions" },
      { name: "Finance", url: "/industries/finance", description: "Financial services solutions" },
      { name: "Manufacturing", url: "/industries/manufacturing", description: "Manufacturing solutions" },
      { name: "Retail", url: "/industries/retail", description: "Retail industry solutions" },
      { name: "Education", url: "/industries/education", description: "Education sector solutions" },
      { name: "Government", url: "/industries/government", description: "Government solutions" }
    ]
  },
  {
    title: "Resources",
    pages: [
      { name: "Documentation", url: "/docs", description: "Technical documentation" },
      { name: "API Reference", url: "/api-docs", description: "API documentation" },
      { name: "Case Studies", url: "/case-studies", description: "Success stories and case studies" },
      { name: "Blog", url: "/blog", description: "Company blog and insights" },
      { name: "Tutorials", url: "/tutorials", description: "Step-by-step tutorials" },
      { name: "Guides", url: "/guides", description: "User guides and documentation" },
      { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
      { name: "Support", url: "/support", description: "Customer support center" }
    ]
  },
  {
    title: "Legal",
    pages: [
      { name: "Privacy Policy", url: "/privacy", description: "Privacy policy and data protection" },
      { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
      { name: "Cookie Policy", url: "/cookies", description: "Cookie usage policy" },
      { name: "Security", url: "/security", description: "Security information" },
      { name: "Compliance", url: "/compliance", description: "Compliance and certifications" }
    ]
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "info@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709",
  website: "https://ziontechgroup.com"
};

export default function SitemapPage() {
  return (
    <MainLayout 
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources organized by category."
      keywords="sitemap, website map, navigation, pages, services, resources"
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
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Navigate our website easily with our comprehensive sitemap. 
                Find all pages, services, and resources organized by category.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#site-structure"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Browse Sitemap
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Site Structure */}
        <section id="site-structure" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Site Structure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All pages on our website organized by category for easy navigation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 text-blue-600 mr-3" />
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex-1">
                          <Link
                            href={page.url}
                            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                          >
                            {page.name}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most popular pages and resources for quick access.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <Home className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Home
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Main landing page
                  </p>
                </div>
              </Link>

              <Link
                href="/services"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <Settings className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our technology services
                  </p>
                </div>
              </Link>

              <Link
                href="/about"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    About Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Company information
                  </p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-center">
                  <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    Contact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get in touch
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with us through any of these channels.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <div className="text-gray-600">{contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">{contactInfo.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-900">Address</div>
                        <div className="text-gray-600">{contactInfo.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-6 h-6 text-blue-600 mr-4" />
                      <div>
                        <div className="font-semibold text-gray-900">Website</div>
                        <div className="text-gray-600">{contactInfo.website}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Need Help Finding Something?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Contact Support
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Now that you've explored our website, let's discuss how we can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}