import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from '../components/ui/Card';
// import { Badge } from '../components/ui/Badge';
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
  Award,
  Shield,
  Globe,
  Search,
  Filter,
  Calendar,
  Star,
  TrendingUp,
  Brain,
  Cloud,
  Database,
  Zap,
  Lock,
  Code,
  Smartphone,
  Monitor,
  Server,
  Network,
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'About Zion Tech Group' },
        {
          name: 'Contact',
          path: '/contact',
          description: 'Contact information',
        },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      ],
    },
    {
      category: 'Services',
      icon: Briefcase,
      pages: [
        {
          name: 'AI Services',
          path: '/ai-services',
          description: 'Artificial Intelligence solutions',
        },
        {
          name: 'IT Services',
          path: '/it-services',
          description: 'Information Technology services',
        },
        {
          name: 'Micro SaaS',
          path: '/micro-saas',
          description: 'Micro Software as a Service',
        },
        {
          name: 'Cloud Services',
          path: '/cloud-services',
          description: 'Cloud computing solutions',
        },
        {
          name: 'Cybersecurity',
          path: '/cybersecurity',
          description: 'Security services',
        },
        {
          name: 'Infrastructure',
          path: '/infrastructure',
          description: 'IT infrastructure services',
        },
      ],
    },
    {
      category: 'Resources',
      icon: BookOpen,
      pages: [
        {
          name: 'Case Studies',
          path: '/case-studies',
          description: 'Success stories and case studies',
        },
        {
          name: 'White Papers',
          path: '/white-papers',
          description: 'Technical white papers',
        },
        {
          name: 'Webinars',
          path: '/webinars',
          description: 'Educational webinars',
        },
        {
          name: 'Blog',
          path: '/blog',
          description: 'Latest news and insights',
        },
        {
          name: 'Documentation',
          path: '/documentation',
          description: 'Technical documentation',
        },
      ],
    },
    {
      category: 'Company',
      icon: Users,
      pages: [
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Partners', path: '/partners', description: 'Our partners' },
        {
          name: 'FAQ',
          path: '/faq',
          description: 'Frequently asked questions',
        },
        { name: 'Help', path: '/help', description: 'Help and support' },
      ],
    },
    {
      category: 'Legal',
      icon: Shield,
      pages: [
        {
          name: 'Privacy Policy',
          path: '/privacy',
          description: 'Privacy policy and data protection',
        },
        {
          name: 'Terms of Service',
          path: '/terms',
          description: 'Terms and conditions',
        },
        {
          name: 'Cookie Policy',
          path: '/cookies',
          description: 'Cookie usage policy',
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Sitemap"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place."
        keywords="sitemap, website navigation, pages, services, resources"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Map className="h-12 w-12 text-blue-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">
                Website Sitemap
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and sections of the Zion Tech Group
              website. Find exactly what you are looking for with our
              comprehensive site structure.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <section.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <CardTitle className="text-xl">
                        {section.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + pageIndex * 0.05,
                          }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex-1">
                            <a
                              href={page.path}
                              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                            >
                              {page.name}
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                            <p className="text-sm text-gray-600 mt-1">
                              {page.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>{' '}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Can not find what you are looking for?
                </h3>
                <p className="text-gray-600 mb-6">
                  Use our search functionality or contact us directly for
                  assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                  <a
                    href="/help"
                    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Get Help
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default SitemapPage;
