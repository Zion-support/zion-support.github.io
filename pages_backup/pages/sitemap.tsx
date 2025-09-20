import React from 'react';
<<<<<<< HEAD
        </div>,
      </div>,
    </div>,
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '../src/components/layout/MainLayout';
import { 
  Home, 
  Brain, 
  Network, 
  Target, 
  Users, 
  Shield, 
  Cloud, 
  BarChart3, 
  Settings, 
  Globe, 
  ArrowRight 
} from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', url: '/', icon: Home },
      { name: 'About', url: '/about', icon: Users },
      { name: 'Contact', url: '/contact', icon: Globe },
      { name: 'Services', url: '/services', icon: Settings }
    ]
  },
  {
    category: 'Services',
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'IT Services', url: '/it-services', icon: Network },
      { name: 'Micro SaaS', url: '/micro-saas', icon: Target },
      { name: 'Cloud Services', url: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', url: '/services/data-analytics', icon: BarChart3 }
    ]
  },
  {
    category: 'Solutions',
    pages: [
      { name: 'Cloud Migration', url: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Digital Transformation', url: '/solutions/digital-transformation', icon: Settings },
      { name: 'Custom Solutions', url: '/solutions/custom', icon: Target }
    ]
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Documentation', url: '/docs', icon: Globe },
      { name: 'API Documentation', url: '/api-docs', icon: Settings },
      { name: 'Guides', url: '/guides', icon: Globe },
      { name: 'FAQ', url: '/faq', icon: Users }
    ]




const sitemapData = [;
  {;
    category: 'Main Pages',;
    pages: [;
      { name: 'Home', url: '/', icon: Home },;
      { name: 'About', url: '/about', icon: Users },;
      { name: 'Contact', url: '/contact', icon: Globe },;
      { name: 'Services', url: '/services', icon: Settings }
    ];
  },;
  {;
    category: 'Services',;
    pages: [;
      { name: 'AI Services', url: '/ai-services', icon: Brain },;
      { name: 'IT Services', url: '/it-services', icon: Network },;
      { name: 'Micro SaaS', url: '/micro-saas', icon: Target },;
      { name: 'Cloud Services', url: '/services/cloud', icon: Cloud },;
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: Shield },;
      { name: 'Data Analytics', url: '/services/data-analytics', icon: BarChart3 }
    ];
  },;
  {;
    category: 'Solutions',;
    pages: [;
      { name: 'Cloud Migration', url: '/solutions/cloud-migration', icon: Cloud },;
      { name: 'Digital Transformation', url: '/solutions/digital-transformation', icon: Settings },;
      { name: 'Custom Solutions', url: '/solutions/custom', icon: Target }
    ];
  },;
  {;
    category: 'Resources',;
    pages: [;
      { name: 'Documentation', url: '/docs', icon: Globe },;
      { name: 'API Documentation', url: '/api-docs', icon: Settings },;
      { name: 'Guides', url: '/guides', icon: Globe },;


  }
];

export default function SitemapPage() {
  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  Phone as PhoneIcon, 
  MapPin, 
  Globe,
  ArrowRight
} from 'lucide-react';

const sitemapData = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Products', href: '/products', icon: Globe },
    { name: 'Contact', href: '/contact', icon: Phone }
  ],
  services: [
    { name: 'AI Services', href: '/services/ai' },
    { name: 'Cloud Computing', href: '/services/cloud' },
    { name: 'Micro SaaS', href: '/services/saas' },
    { name: 'Security', href: '/security' }
  ],
  products: [
    { name: 'AI Email Responder', href: '/products/ai-email-responder' },
    { name: 'Cloud Infrastructure', href: '/products/cloud-infrastructure' },
    { name: 'Security Suite', href: '/products/security-suite' },
    { name: 'Micro SaaS Platform', href: '/products/micro-saas-platform' }
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Guides', href: '/guides' },
    { name: 'Help', href: '/help' },
    { name: 'API Documentation', href: '/api-docs' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Newsletter', href: '/newsletter' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ]
};

export default function SitemapPage() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main landing page' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Services', url: '/services', description: 'Our comprehensive services' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'AI and machine learning solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'Cloud infrastructure and services' },
        { name: 'Database Solutions', url: '/database-solutions', description: 'Database design and optimization' },
        { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
        { name: 'Custom Development', url: '/custom-development', description: 'Bespoke software development' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital transformation consulting' },
        { name: 'Consulting', url: '/consulting', description: 'Technology consulting services' }
      ]
    },
    {
      category: 'Solutions',
      pages: [
        { name: 'Enterprise Solutions', url: '/enterprise-solutions', description: 'Solutions for large organizations' },
        { name: 'Startup Solutions', url: '/startup-solutions', description: 'Solutions for growing businesses' },
        { name: 'Industry Solutions', url: '/industries', description: 'Industry-specific solutions' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our team members' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
        { name: 'News', url: '/news', description: 'Latest news and updates' },
        { name: 'Partners', url: '/partners', description: 'Our business partners' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Blog', url: '/blog', description: 'Technology insights and articles' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Documentation', url: '/docs/api', description: 'API reference and guides' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and tutorials' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical papers' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Help Center', url: '/help', description: 'Support and help resources' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage policy' },
        { name: 'Accessibility', url: '/accessibility', description: 'Accessibility statement' }
      ]
    }
  ];

  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Navigate through all pages and sections of our website. Find the information you need quickly and easily."
      keywords="sitemap, navigation, website structure, pages"
      description="Navigate our website easily with our comprehensive sitemap. Find all pages and resources in one place."
      keywords="sitemap, navigation, website map, pages, resources"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site <span className="text-yellow-400">Map</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Navigate through all our pages, services, and resources
                Site{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate through all pages and sections of our website. 
                Find the information you need quickly and easily.
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sitemapData.map((section, sectionIndex) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">
                    {section.category}
                  </h3>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={page.name}
                        href={page.url}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                        <div>
                          <div className="font-medium text-gray-800 group-hover:text-blue-600">
                            {page.name}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>
      </div>
    </>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {siteStructure.map((section, sectionIndex) => (
                  <motion.div
                    key={section.category}
                    className="bg-gray-50 rounded-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                      {section.category}
                    </h2>
                    
                    <div className="space-y-4">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.name}
                          className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (pageIndex * 0.05) }}
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          <div>
                            <div className="font-medium">{page.name}</div>
                            <div className="text-sm text-gray-500">{page.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Links
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Get Started', url: '/contact', description: 'Start your project with us' },
                  { name: 'Our Services', url: '/services', description: 'Explore our service offerings' },
                  { name: 'AI Solutions', url: '/ai-services', description: 'Discover AI capabilities' },
                  { name: 'Cloud Services', url: '/cloud-solutions', description: 'Cloud infrastructure solutions' },
                  { name: 'Security', url: '/security', description: 'Cybersecurity solutions' },
                  { name: 'Support', url: '/help', description: 'Get help and support' }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.url}
                      className="block group"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{link.description}</p>
                      <div className="flex items-center text-indigo-600 font-medium">
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Main Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Navigation</h2>
                  <ul className="space-y-3">
                    {sitemapData.main.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
                  <ul className="space-y-3">
                    {sitemapData.services.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Products */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Products</h2>
                  <ul className="space-y-3">
                    {sitemapData.products.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
                  <ul className="space-y-3">
                    {sitemapData.resources.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company</h2>
                  <ul className="space-y-3">
                    {sitemapData.company.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal</h2>
                  <ul className="space-y-3">
                    {sitemapData.legal.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                          <ArrowRight className="w-3 h-3 ml-auto" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Our team is here to help you find the information you need. 
                Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/help"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Get Help
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">info@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default sitemap;