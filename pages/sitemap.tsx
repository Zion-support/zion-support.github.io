import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Map, ArrowRight,
  ExternalLink, Home,
  Users, Briefcase,
  Phone, DollarSign,
  FileText, BookOpen,
  Award, Shield,
  Globe, Search,
  Filter, Calendar,
  Star, TrendingUp,
  Brain, Cloud,
  Database, Zap,
  Lock, Code,
  Smartphone, Monitor,
  Server, Network
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'About Zion Tech Group' },
        { name: 'Contact', path: '/contact', description: 'Contact information' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    },
    {
      category: 'Services',
      icon: Briefcase,
      pages: [
        { name: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security services' },
        { name: 'Infrastructure', path: '/infrastructure', description: 'IT infrastructure services' }
      ]
    },
    {
      category: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest articles and insights' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and projects' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'Support', path: '/support', description: 'Help and support center' }
      ]
    },
    {
      category: 'Legal',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title='Sitemap - Zion Tech Group'
        description='Complete sitemap of Zion Tech Group website. Find all pages, services, and resources easily.'
        keywords='sitemap, website navigation, Zion Tech Group, pages, services, resources'
      />
      
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='py-20 sm:py-32'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className='flex items-center justify-center mb-4'>
                  <Map className='h-8 w-8 text-blue-600 mr-3' />
                  <h1 className='text-4xl font-bold text-gray-900'>Website Sitemap</h1>
                </div>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Navigate through all pages and sections of our website. Find exactly what you're looking for with our comprehensive site structure.
                </p>
              </motion.div>
            </div>

            {/* Site Structure */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {siteStructure.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <Card className='h-full'>
                    <CardHeader>
                      <CardTitle className='flex items-center text-xl'>
                        <section.icon className='h-6 w-6 text-blue-600 mr-3' />
                        {section.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-3'>
                        {section.pages.map((page, pageIndex) => (
                          <motion.div
                            key={page.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                            className='group'
                          >
                            <a
                              href={page.path}
                              className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                            >
                              <div className='flex-1'>
                                <h3 className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                                  {page.name}
                                </h3>
                                <p className='text-sm text-gray-600 mt-1'>
                                  {page.description}
                                </p>
                              </div>
                              <ArrowRight className='h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors' />
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='mt-16'
            >
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center text-xl'>
                    <Search className='h-6 w-6 text-blue-600 mr-3' />
                    Quick Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    <a
                      href='/contact'
                      className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      <Phone className='h-5 w-5 text-blue-600 mr-2' />
                      <span className='text-sm font-medium group-hover:text-blue-600 transition-colors'>
                        Contact Us
                      </span>
                    </a>
                    <a
                      href='/services'
                      className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      <Briefcase className='h-5 w-5 text-green-600 mr-2' />
                      <span className='text-sm font-medium group-hover:text-green-600 transition-colors'>
                        Our Services
                      </span>
                    </a>
                    <a
                      href='/pricing'
                      className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      <DollarSign className='h-5 w-5 text-purple-600 mr-2' />
                      <span className='text-sm font-medium group-hover:text-purple-600 transition-colors'>
                        Pricing
                      </span>
                    </a>
                    <a
                      href='/blog'
                      className='flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group'
                    >
                      <BookOpen className='h-5 w-5 text-orange-600 mr-2' />
                      <span className='text-sm font-medium group-hover:text-orange-600 transition-colors'>
                        Blog
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;