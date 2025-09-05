import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight,
  Home,
  Briefcase,
  Target,
  Building2,
  FileText,
  HelpCircle,
  Search
} from 'lucide-react';
import Layout from '../components/Layout';

const siteMap = {
  'Main Pages': [
    { name: 'Home', href: '/', description: 'Main landing page' },
    { name: 'About Us', href: '/about', description: 'Learn about our company' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'News', href: '/news', description: 'Latest company news' }
  ],
  'Services': [
    { name: 'All Services', href: '/services', description: 'Overview of all services' },
    { name: 'AI Services', href: '/ai-services', description: 'Artificial intelligence solutions' },
    { name: 'IT Services', href: '/it-services', description: 'Information technology services' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Micro software as a service' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud infrastructure solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions' },
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Data insights and analytics' },
    { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Quantum computing solutions' }
  ],
  'Solutions': [
    { name: 'All Solutions', href: '/solutions', description: 'Overview of all solutions' },
    { name: 'Enterprise', href: '/solutions/enterprise', description: 'Enterprise solutions' },
    { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology' },
    { name: 'Finance', href: '/solutions/finance', description: 'Financial services' },
    { name: 'Education', href: '/solutions/education', description: 'Educational technology' },
    { name: 'Government', href: '/solutions/government', description: 'Government solutions' },
    { name: 'Retail', href: '/solutions/retail', description: 'Retail technology' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Manufacturing solutions' },
    { name: 'Startup', href: '/solutions/startup', description: 'Startup solutions' },
    { name: 'SMB', href: '/solutions/smb', description: 'Small and medium business solutions' },
    { name: 'Custom', href: '/solutions/custom', description: 'Custom solutions' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration', description: 'Cloud migration services' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Digital transformation' }
  ],
  'Industries': [
    { name: 'All Industries', href: '/industries', description: 'Overview of all industries' },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Healthcare industry' },
    { name: 'Finance', href: '/industries/finance', description: 'Financial services' },
    { name: 'Education', href: '/industries/education', description: 'Education sector' },
    { name: 'Government', href: '/industries/government', description: 'Government sector' },
    { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Manufacturing industry' },
    { name: 'Retail', href: '/industries/retail', description: 'Retail industry' }
  ],
  'Resources': [
    { name: 'All Resources', href: '/resources', description: 'Overview of all resources' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'White Papers', href: '/whitepapers', description: 'Technical papers' },
    { name: 'Webinars', href: '/webinars', description: 'Educational webinars' },
    { name: 'Tutorials', href: '/tutorials', description: 'Learning tutorials' },
    { name: 'Guides', href: '/guides', description: 'How-to guides' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Documentation', href: '/api-docs', description: 'API reference' },
    { name: 'Help Center', href: '/help', description: 'Support resources' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
  ],
  'Company': [
    { name: 'About Us', href: '/about', description: 'Our company story' },
    { name: 'Our Team', href: '/team', description: 'Meet our team' },
    { name: 'Careers', href: '/careers', description: 'Job opportunities' },
    { name: 'News', href: '/news', description: 'Company news' },
    { name: 'Partners', href: '/partners', description: 'Our partners' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' }
  ],
  'Support': [
    { name: 'Support Center', href: '/support', description: 'Main support page' },
    { name: 'Help Center', href: '/help', description: 'Help resources' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Contact Support', href: '/contact', description: 'Contact our support team' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
    { name: 'API Docs', href: '/api-docs', description: 'API documentation' }
  ],
  'Legal': [
    { name: 'Privacy Policy', href: '/privacy', description: 'Privacy policy' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
    { name: 'Compliance', href: '/compliance', description: 'Compliance information' }
  ],
  'Tools': [
    { name: 'Search', href: '/search', description: 'Site search' },
    { name: 'Pricing', href: '/pricing', description: 'Service pricing' },
    { name: 'Newsletter', href: '/newsletter', description: 'Subscribe to newsletter' },
    { name: 'Events', href: '/events', description: 'Upcoming events' },
    { name: 'Talent', href: '/talent', description: 'Find talent' }
  ]
};

const quickLinks = [
  { name: 'Get Started', href: '/contact', icon: ArrowRight },
  { name: 'Pricing', href: '/pricing', icon: Briefcase },
  { name: 'Support', href: '/support', icon: HelpCircle },
  { name: 'Documentation', href: '/docs', icon: FileText },
  { name: 'Search', href: '/search', icon: Search }
];

export default function SitemapPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredSections = Object.entries(siteMap).map(([sectionName, pages]) => ({
    name: sectionName,
    pages: pages.filter(page => 
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.pages.length > 0);

  return (
    <Layout 
      title="Sitemap - Zion Tech Group"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages, services, resources, and information organized by category."
      keywords="sitemap, navigation, website map, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources organized by category.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredSections.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No pages found</h3>
                  <p className="text-gray-600">Try adjusting your search terms.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredSections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900">{section.name}</h2>
                      </div>
                      
                      <div className="p-6">
                        <ul className="space-y-3">
                          {section.pages.map((page, pageIndex) => (
                            <li key={pageIndex}>
                              <Link
                                href={page.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {page.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {page.description}
                                    </p>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the information you need. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/search"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Search Site
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}