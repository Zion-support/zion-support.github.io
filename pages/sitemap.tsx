import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
=======
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Globe,
  ArrowRight,
  Calendar,
  FileText,
  Users,
  Briefcase,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Sitemap() {
  const currentYear = new Date().getFullYear();

  const mainPages = [
    { name: 'Home', href: '/', description: 'Main homepage' },
    { name: 'About', href: '/about', description: 'About Zion Tech Group' },
    { name: 'Contact', href: '/contact', description: 'Contact information' },
    { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
    { name: 'Careers', href: '/careers', description: 'Job opportunities' },
    {
      name: 'Partners',
      href: '/partners',
      description: 'Partnership information',
    },
  ];

  const services = [
    {
      name: 'AI Services',
      href: '/ai-services',
      description: 'Artificial Intelligence solutions',
    },
    {
      name: 'IT Services',
      href: '/it-services',
      description: 'Information Technology services',
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      description: 'Micro Software as a Service',
    },
    {
      name: 'Web Development',
      href: '/services/web-development',
      description: 'Custom web applications',
    },
    {
      name: 'Cloud Services',
      href: '/services/cloud-services',
      description: 'Cloud infrastructure solutions',
    },
    {
      name: 'AI Development',
      href: '/services/ai-development',
      description: 'AI development services',
    },
  ];

  const solutions = [
    {
      name: 'AI Content Creation',
      href: '/solutions/ai-content-creation',
      description: 'AI-powered content generation',
    },
    {
      name: 'Customer Support',
      href: '/solutions/customer-support',
      description: 'Automated customer support',
    },
    {
      name: 'Email Automation',
      href: '/solutions/email-automation',
      description: 'Email marketing automation',
    },
    {
      name: 'Event Management',
      href: '/solutions/event-management',
      description: 'Event planning and management',
    },
    {
      name: 'Project Management',
      href: '/solutions/project-management',
      description: 'Project management solutions',
    },
    {
      name: 'Workflow Automation',
      href: '/solutions/workflow-automation',
      description: 'Business process automation',
    },
  ];

  const resources = [
    {
      name: 'Documentation',
      href: '/docs',
      description: 'Technical documentation',
    },
    { name: 'API Reference', href: '/api', description: 'API documentation' },
    { name: 'Help & Support', href: '/help', description: 'Support center' },
    { name: 'Training', href: '/training', description: 'Training programs' },
    {
      name: 'Case Studies',
      href: '/case-studies',
      description: 'Success stories',
    },
    {
      name: 'Pricing Guide',
      href: '/pricing-guide',
      description: 'Pricing information',
    },
  ];

  const legal = [
    {
      name: 'Privacy Policy',
      href: '/privacy',
      description: 'Privacy policy and data protection',
    },
    {
      name: 'Terms of Service',
      href: '/terms',
      description: 'Terms and conditions',
    },
    {
      name: 'Cookie Policy',
      href: '/cookies',
      description: 'Cookie usage policy',
    },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#',
    },
=======
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
<<<<<<< HEAD
=======
>>>>>>> main
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
  Server, Network'
} from 'lucide-react';

>>>>>>> main
const SitemapPage: React.FC = () => {
  const siteStructure = [
<<<<<<< HEAD
    {'
      categor,
    y: 'Main Pages',
=======
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'About Zion Tech Group' },
        {
          name: 'Contact',
          href: '/contact',
          description: 'Contact information and form',
        },
        {
          name: 'Blog',
          href: '/blog',
          description: 'Latest news and insights',
        },
        {
          name: 'Help',
          href: '/help',
          description: 'Support and documentation',
        },
      ],
    },
    {
      title: 'Services',
      links: [
        {
          name: 'All Services',
          href: '/services',
          description: 'Overview of all services',
        },
        {
          name: 'AI Services',
          href: '/ai-services',
          description: 'Artificial Intelligence solutions',
        },
        {
          name: 'IT Services',
          href: '/it-services',
          description: 'Information Technology services',
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          description: 'Micro Software as a Service',
        },
        {
          name: 'AI Development',
          href: '/services/ai-development',
          description: 'Custom AI development',
        },
        {
          name: 'Cloud Services',
          href: '/services/cloud-services',
          description: 'Cloud computing solutions',
        },
        {
          name: 'Web Development',
          href: '/services/web-development',
          description: 'Web application development',
        },
      ],
    },
    {
      title: 'Solutions',
      links: [
        {
          name: 'All Solutions',
          href: '/solutions',
          description: 'Overview of all solutions',
        },
        {
          name: 'AI Content Creation',
          href: '/solutions/ai-content-creation',
          description: 'Automated content generation',
        },
        {
          name: 'Email Automation',
          href: '/solutions/email-automation',
          description: 'Email marketing automation',
        },
        {
          name: 'Customer Support',
          href: '/solutions/customer-support',
          description: 'AI-powered support platform',
        },
        {
          name: 'Event Management',
          href: '/solutions/event-management',
          description: 'Event planning and management',
        },
        {
          name: 'Project Management',
          href: '/solutions/project-management',
          description: 'Project collaboration tools',
        },
        {
          name: 'Workflow Automation',
          href: '/solutions/workflow-automation',
          description: 'Business process automation',
        },
      ],
    },
    {
      title: 'Business',
      links: [
        {
          name: 'Pricing',
          href: '/pricing',
          description: 'Service pricing and plans',
        },
        {
          name: 'Partners',
          href: '/partners',
          description: 'Partnership opportunities',
        },
        {
          name: 'Careers',
          href: '/careers',
          description: 'Job opportunities and culture',
        },
      ],
    },
    {
      title: 'Legal & Policies',
      links: [
        {
          name: 'Privacy Policy',
          href: '/privacy',
          description: 'Privacy and data protection',
        },
        {
          name: 'Terms of Service',
          href: '/terms',
          description: 'Terms and conditions',
        },
        {
          name: 'Cookie Policy',
          href: '/cookies',
          description: 'Cookie usage and preferences',
        },
      ],
    },
=======
>>>>>>> main
      category: 'Main Pages',
>>>>>>> main
      icon: Home,
      pages: ['
        { nam,
    e: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About', path: '/about', description: 'About Zion Tech Group' },
        { name: 'Contact', path: '/contact', description: 'Contact information' },
        { name: 'Pricing', path: '/pricing', description: 'Service pricing' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    },
    {'
      category: 'Services',
      icon: Briefcase,
      pages: ['
        { nam,
    e: 'AI Services', path: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', path: '/it-services', description: 'Information Technology services' },
        { name: 'Micro SaaS', path: '/micro-saas', description: 'Micro Software as a Service' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud computing solutions' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security services' },
        { name: 'Infrastructure', path: '/infrastructure', description: 'IT infrastructure services' }
      ]
    },
    {'
      category: 'Resources',
      icon: BookOpen,
      pages: ['
        { nam,
    e: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' },
        { name: 'White Papers', path: '/white-papers', description: 'Technical white papers' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Blog', path: '/blog', description: 'Latest news and insights' },
        { name: 'Documentation', path: '/documentation', description: 'Technical documentation' }
      ]
    },
    {'
      category: 'Company',
      icon: Users,
      pages: ['
        { nam,
    e: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Partners', path: '/partners', description: 'Our partners' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Help', path: '/help', description: 'Help and support' }
      ]
    },
    {'
      category: 'Legal',
      icon: Shield,
      pages: ['
        { nam,
    e: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    }
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
  ];

  return (
    <>
<<<<<<< HEAD
      <SEO'
        title='Sitemap''
        description='Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place.''
        keywords='sitemap, website navigation, pages, services, resources'
      />
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-12'>
=======
<<<<<<< HEAD
=======
      <SEO
<<<<<<< HEAD
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place."
        keywords="sitemap, navigation, website structure, pages, links"
      />
      <Head>
        <title>Sitemap - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources."
        />
        <meta
          name="keywords"
          content="sitemap, navigation, pages, services, solutions, Zion Tech Group"
        />
        <link rel="canonical" href="https: //ziontechgroup.com/sitemap" />
      </Head>

      <Navigation />

      <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
=======
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
>>>>>>> main
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center mb-4">
              <Sitemap className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
            </div>
<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages and resources available on the Zion
              Tech Group website
=======
            <p className="text-gray-600">
              Complete overview of all pages and sections on the Zion Tech Group
              website.
=======
        title='Sitemap'
        description='Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place.'
        keywords='sitemap, website navigation, pages, services, resources'
      />
>>>>>>> main
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
>>>>>>> main
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >'
            <div className='flex items-center justify-center mb-6>
              <Map className='h-12 w-12 text-blue-600 mr-4' />
              <h1 className='text-4xl font-bold text-gray-900'>Website Sitemap</h1>
            </div>'
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
<<<<<<< HEAD
              Navigate through all pages and sections of the Zion Tech Group website.'
              Find exactly what you're looking for with our comprehensive site structure.
=======
              Navigate through all pages and sections of the Zion Tech Group website.
              Find exactly what you are looking for with our comprehensive site structure.
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {siteStructure.map((section, index) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <Card key={index} className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Sitemap className="h-5 w-5 mr-2 text-blue-600" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="group flex items-start justify-between text-blue-600 hover: text-blue-800 transition-colors"
                      >
                        <div className="flex-1">
                          <span className="font-medium group-hover:underline">
                            {link.name}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="mt-8 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              About This Sitemap
            </h2>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-cyan-400" />
                  <a
                    href={contact.href}
                    className="text-gray-300 hover: text-cyan-400 transition-colors"
=======
            <div className="prose text-gray-600">
              <p>
                This sitemap provides a comprehensive overview of all pages and
                sections available on the Zion Tech Group website. Our site is
                organized into several main categories:{' '}
              </p>
              <ul>
                <li>
                  <strong>Main Pages:</strong> Core pages including home, about,
                  contact, and blog
                </li>
                <li>
                  <strong>Services: </strong> Detailed information about our
                  technology services and solutions
                </li>
                <li>
                  <strong>Solutions:</strong> Specific product offerings and
                  platforms we provide
                </li>
                <li>
                  <strong>Business:</strong> Information about pricing,
                  partnerships, and career opportunities
                </li>
                <li>
                  <strong>Legal & Policies: </strong> Important legal documents
                  and privacy information
                </li>
              </ul>
              <p>
                If you can&apos;t find what you&apos;re looking for, please
                don&apos;t hesitate to{' '}
                <Link
                  href="/contact"
                  className="text-blue-600 hover: underline"
                >
                  contact us
                </Link>{' '}
                for assistance.'
              </p>
            </div>
          </Card>
=======
>>>>>>> main
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >'
                <Card className='h-full'>
                  <CardHeader>'
                    <div className='flex items-center mb-4>
                      <section.icon className='h-6 w-6 text-blue-600 mr-3' />
                      <CardTitle className='text-xl'>{section.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>'
                    <div className='space-y-3'>
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (pageIndex * 0.05) }}
                          className='flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors'
                        >'
                          <div className='flex-1'>
                            <a
                              href={page.path}
                              className='text-blue-600 hover:text-blue-800 font-medium flex items-center'
                            >
                              {page.name}
                              <ExternalLink className='h-4 w-4 ml-2' />
                            </a>'
                            <p className='text-sm text-gray-600 mt-1'>{page.description}</p>
                          </div>'
                          <ArrowRight className='h-4 w-4 text-gray-400' />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-12 text-center'
<<<<<<< HEAD
          >'
            <Card className='max-w-2xl mx-auto>
              <CardContent className='p-8>
                <h3 className='text-2xl font-bold text-gray-900 mb-4>
                  Can't find what you're looking for?
                </h3>'
                <p className='text-gray-600 mb-6'>
                  Use our search functionality or contact us directly for assistance.
                </p>'
                <div className='flex flex-col sm: flex-row gap-4 justify-center'>
                  <a'
                    href='/contact''
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg hove,
    r:bg-blue-700 transition-colors flex items-center justify-center'
                  >'
=======
          >
            <Card className='max-w-2xl mx-auto'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Can not find what you are looking for?
                </h3>
                <p className='text-gray-600 mb-6'>
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a
                    href='/contact'
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center'
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
                  >
>>>>>>> main
                    <Phone className='h-4 w-4 mr-2' />
                    Contact Us
                  </a>
                  <a'
                    href='/help''
                    className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hove,
    r:bg-blue-50 transition-colors flex items-center justify-center'
                  >'
                    <Search className='h-4 w-4 mr-2' />
                    Get Help
                  </a>
                </div>
<<<<<<< HEAD
              </CardContent>
            </Card>
          </motion.div>
=======
<<<<<<< HEAD
              ))}
            </div>
          </div>

          {/* Main Pages */}
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Main Pages
              </h2>
              <div className="space-y-4">
                {mainPages.map((page, index) => (
                  <div key={index} className="group">
                    <Link
                      href={page.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {page.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
                Services
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="group">
                    <Link
                      href={service.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-cyan-400" />
                Solutions
              </h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="group">
                    <Link
                      href={solution.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {solution.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Resources
              </h2>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="group">
                    <Link
                      href={resource.href}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {resource.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {resource.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-cyan-400" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-6">
              {legal.map((legalPage, index) => (
                <div key={index} className="group">
                  <Link
                    href={legalPage.href}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover: bg-white/10 transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {legalPage.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {legalPage.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
=======
              </CardContent>
            </Card>
          </motion.div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};
export default SitemapPage;
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
};
export default SitemapPage;
>>>>>>> main
>>>>>>> main
>>>>>>> main
