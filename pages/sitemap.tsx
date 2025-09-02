import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
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
  Database, Code,
  Building, Zap
} from 'lucide-react';

const SitemapPage = () => {
  const pages = [
    {
      title: 'Home',
      description: 'Main landing page with company overview and featured services',
      url: '/',
      icon: Home,
      category: 'Main'
    },
    {
      title: 'All Services',
      description: 'Comprehensive showcase of all our technology services and solutions',
      url: '/comprehensive-services-showcase-2026',
      icon: Zap,
      category: 'Services'
    },
    {
      title: 'Micro SaaS',
      description: 'Affordable, specialized software solutions for small businesses',
      url: '/services/micro-saas',
      icon: Zap,
      category: 'Services'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions and intelligent automation services',
      url: '/services/ai-services',
      icon: Brain,
      category: 'Services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT support and infrastructure management',
      url: '/services/it-services',
      icon: Building,
      category: 'Services'
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management',
      url: '/services/cloud-infrastructure',
      icon: Cloud,
      category: 'Services'
    },
    {
      title: 'Data & Analytics',
      description: 'Real-time data processing and business intelligence',
      url: '/services/data-analytics',
      icon: Database,
      category: 'Services'
    },
    {
      title: 'Developer Tools',
      description: 'Development automation and operational excellence',
      url: '/services/developer-tools',
      icon: Code,
      category: 'Services'
    },
    {
      title: 'Industry Solutions',
      description: 'Specialized solutions for specific industries',
      url: '/services/industry-solutions',
      icon: Building,
      category: 'Services'
    },
    {
      title: 'Emerging Technology',
      description: 'Cutting-edge technology solutions and platforms',
      url: '/services/emerging-tech',
      icon: Zap,
      category: 'Services'
    },
    {
      title: 'Solutions',
      description: 'Industry-specific solutions and enterprise packages',
      url: '/solutions',
      icon: Briefcase,
      category: 'Solutions'
    },
    {
      title: 'Enterprise',
      description: 'Enterprise-grade solutions and consulting services',
      url: '/enterprise',
      icon: Building,
      category: 'Solutions'
    },
    {
      title: 'About',
      description: 'Learn about our company, mission, and team',
      url: '/about',
      icon: Users,
      category: 'Company'
    },
    {
      title: 'Case Studies',
      description: 'Success stories and client testimonials',
      url: '/case-studies',
      icon: FileText,
      category: 'Company'
    },
    {
      title: 'Careers',
      description: 'Join our team and explore career opportunities',
      url: '/careers',
      icon: Briefcase,
      category: 'Company'
    },
    {
      title: 'Contact',
      description: 'Get in touch with our team for consultations',
      url: '/contact',
      icon: Phone,
      category: 'Contact'
    }
  ];

  const categories = ['Main', 'Services', 'Solutions', 'Company', 'Contact'];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Navigate through all pages and services offered by Zion Tech Group. Find the information you need quickly and easily."
        keywords="sitemap, navigation, pages, services, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Site Navigation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore all our pages and services. Find exactly what you're looking for with our comprehensive site map.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {categories.map((category, categoryIndex) => {
              const categoryPages = pages.filter(page => page.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Map className="w-6 h-6 mr-2 text-blue-600" />
                    {category}
                  </h2>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryPages.map((page, pageIndex) => (
                      <motion.div
                        key={page.url}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (pageIndex * 0.05) }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center">
                                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                  <page.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {page.title}
                                </h3>
                              </div>
                              <Badge variant="secondary">
                                {page.category}
                              </Badge>
                            </div>
                            
                            <p className="text-gray-600 mb-4 text-sm">
                              {page.description}
                            </p>
                            
                            <a
                              href={page.url}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                            >
                              Visit Page
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Need Help Finding Something?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-blue-100 rounded-full mb-3">
                  <Map className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;