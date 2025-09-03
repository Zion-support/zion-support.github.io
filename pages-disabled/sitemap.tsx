import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Map, 
  ArrowRight,
  ExternalLink, 
  Home,
  Users, 
  Briefcase,
  Phone, 
  DollarSign,
  FileText, 
  BookOpen,
  MessageSquare,
  Shield,
  Zap,
  Globe;
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
    { name: 'About', path: '/about', icon: Users, description: 'About Zion Tech Group' },
    { name: 'Services', path: '/services', icon: Briefcase, description: 'Our comprehensive services' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' },
    { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'Service pricing information' }];

  const servicePages = [
    { name: 'Micro SaaS Solutions', path: '/services/micro-saas', icon: Zap, description: 'Innovative micro SaaS applications' },
    { name: 'IT Services', path: '/services/it-services', icon: Shield, description: 'Comprehensive IT solutions' },
    { name: 'AI Services', path: '/services/ai-services', icon: Globe, description: 'Cutting-edge AI solutions' }];

  const contentPages = [
    { name: 'Blog', path: '/blog', icon: BookOpen, description: 'Latest insights and updates' },
    { name: 'Case Studies', path: '/case-studies', icon: FileText, description: 'Success stories and case studies' },
    { name: 'White Papers', path: '/white-papers', icon: FileText, description: 'Technical white papers' },
    { name: 'Webinars', path: '/webinars', icon: MessageSquare, description: 'Educational webinars' },
    { name: 'Careers', path: '/careers', icon: Users, description: 'Join our team' },
    { name: 'Team', path: '/team', icon: Users, description: 'Meet our team' }];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield, description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', path: '/terms', icon: FileText, description: 'Terms and conditions' }];

  return (
    <>
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages and sections easily."
        keywords="sitemap, navigation, website structure, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all sections of our website. Find exactly what you're looking for with our comprehensive sitemap.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-blue-600" />
                Main Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((page, index) => {
                  const IconComponent = page.icon;
                  return (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {page.description}
                            </p>
                            <a 
                              href={page.path}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                            >
                              Visit Page <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Service Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicePages.map((page, index) => {
                  const IconComponent = page.icon;
                  return (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {page.description}
                            </p>
                            <a 
                              href={page.path}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                            >
                              View Services <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Content Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                Content & Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contentPages.map((page, index) => {
                  const IconComponent = page.icon;
                  return (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {page.description}
                            </p>
                            <a 
                              href={page.path}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                            >
                              Explore <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Legal Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                Legal & Policies
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {legalPages.map((page, index) => {
                  const IconComponent = page.icon;
                  return (
                    <motion.div
                      key={page.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card className="p-4 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="w-5 h-5 text-blue-600 mt-1" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {page.description}
                            </p>
                            <a 
                              href={page.path}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
                            >
                              Read More <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-blue-50 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Our team is here to help you navigate our website and find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Email Support <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>

const Sitemap: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services', url: '/services/ai-services' },
    { name: 'IT Services', url: '/services/it-services' },
    { name: 'Micro SaaS', url: '/services/micro-saas' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Enterprise', url: '/solutions/enterprise' },
    { name: 'Small Business', url: '/solutions/small-business' },
    { name: 'Startups', url: '/solutions/startups' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' },
    { name: 'Careers', url: '/careers' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Terms', url: '/terms' }];

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.url}>
            <a className="text-blue-600 hover:underline" href={l.url}>
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitemapPage;