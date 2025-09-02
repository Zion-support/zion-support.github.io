import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const pages = [
    {
      category: 'Main Pages',
      items: [
        { name: 'Home', url: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Products', url: '/products', description: 'Explore our technology products' },
        { name: 'Pricing', url: '/pricing', description: 'View our service pricing' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' }
      ]
    },
    {
      category: 'Services',
      items: [
        { name: 'Micro SaaS Solutions', url: '/services/micro-saas', description: 'Innovative micro SaaS applications' },
        { name: 'IT Services', url: '/services/it-services', description: 'Comprehensive IT solutions' },
        { name: 'AI Services', url: '/services/ai-services', description: 'Advanced AI and machine learning' },
        { name: 'All Services', url: '/services', description: 'Complete service overview' }
      ]
    },
    {
      category: 'Resources',
      items: [
        { name: 'Blog', url: '/blog', description: 'Latest technology insights and news' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Documentation', url: '/documentation', description: 'Technical documentation and guides' },
        { name: 'Help Center', url: '/help', description: 'Support and troubleshooting' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth research and analysis' }
      ]
    },
    {
      category: 'Legal',
      items: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and preferences' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Navigate through all pages and sections of Zion Tech Group website. Find services, resources, and information easily."
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Map className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Sitemap</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and sections of our website. Find the information you need quickly and easily.
            </p>
          </motion.div>

          {/* Sitemap Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {pages.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="mr-3">
                        {section.items.length} pages
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.category}
                      </h2>
                    </div>
                    
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (sectionIndex * 0.1) + (itemIndex * 0.05) 
                          }}
                          className="group"
                        >
                          <a
                            href={item.url}
                            className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {item.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-2 flex-shrink-0" />
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <a
                    href="/contact"
                    className="flex items-center p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Get Started
                      </h3>
                      <p className="text-sm text-gray-600">Contact us for a consultation</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </a>
                  
                  <a
                    href="/services"
                    className="flex items-center p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Our Services
                      </h3>
                      <p className="text-sm text-gray-600">Explore our technology solutions</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </a>
                  
                  <a
                    href="/products"
                    className="flex items-center p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                        Products
                      </h3>
                      <p className="text-sm text-gray-600">View our technology products</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;