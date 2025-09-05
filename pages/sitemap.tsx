<<<<<<< HEAD
<<<<<<< HEAD
  Users, 
  Briefcase, 
  Phone, 
  FileText, 
  HelpCircle, 
  DollarSign,
  Shield,
  Cookie,
  Scale,
  MapPin,
  Mail,
  Phone as PhoneIcon,
  Globe,
  ArrowRight;
} from 'lucide-react';

const sitemapData = {}
  main: [;
    { path: "/", label: "Home", description: "Welcome to Zion Tech Group" },"
    { path: "/about", label: "About Us", description: "Learn about our company and mission" },"
    { path: "/contact", label: "Contact", description: "Get in touch with our team" },"
    { path: "/careers", label: "Careers", description: "Join our innovative team" },"
    { path: "/blog", label: "Blog", description: "Latest insights and technology trends" }"
  ],
  services: [;
    { path: "/services", label: "All Services", description: "Complete overview of our services" },"
    { path: "/ai-services", label: "AI Solutions", description: "Artificial Intelligence & Machine Learning" },"
    { path: "/it-services", label: "IT Services", description: "Information Technology Solutions" },"
    { path: "/micro-saas", label: "Micro SaaS", description: "Software as a Service Solutions" },"
    { path: "/services/cloud-devops", label: "Cloud & DevOps", description: "Cloud Infrastructure & DevOps Automation" },"
    { path: "/services/cybersecurity", label: "Cybersecurity", description: "Advanced Security Solutions" },"
    { path: "/services/data-analytics", label: "Data Analytics", description: "Business Intelligence & Analytics" },"
    { path: "/services/quantum-computing", label: "Quantum Computing", description: "Next-generation computing solutions" }"
  ],
  solutions: [;
    { path: "/solutions", label: "Solutions", description: "Industry-specific solutions" },"
    { path: "/solutions/enterprise", label: "Enterprise", description: "Large-scale enterprise solutions" },"
    { path: "/solutions/healthcare", label: "Healthcare", description: "Healthcare technology solutions" },"
    { path: "/solutions/finance", label: "Finance", description: "Financial technology solutions" },"
    { path: "/solutions/retail", label: "Retail", description: "Retail technology solutions" }"
  ],
  resources: [;
    { path: "/blog", label: "Blog", description: "Technology insights and news" },"
    { path: "/case-studies", label: "Case Studies", description: "Success stories and client results" },"
    { path: "/white-papers", label: "White Papers", description: "In-depth technical documentation" },"
    { path: "/webinars", label: "Webinars", description: "Educational webinars and events" },"
    { path: "/faq", label: "FAQ", description: "Frequently asked questions" },"
    { path: "/help", label: "Help Center", description: "Support and documentation" }"
  ],
  company: [;
    { path: "/about", label: "About Us", description: "Our story, mission, and values" },"
    { path: "/team", label: "Our Team", description: "Meet our expert team members" },"
    { path: "/careers", label: "Careers", description: "Job opportunities and benefits" },"
    { path: "/news", label: "News", description: "Company news and announcements" },"
    { path: "/contact", label: "Contact", description: "Get in touch with us" }"
  ],
  legal: [;
    { path: "/privacy", label: "Privacy Policy", description: "How we protect your data" },"
    { path: "/terms", label: "Terms of Service", description: "Terms and conditions" },"
    { path: "/cookies", label: "Cookie Policy", description: "Our cookie usage policy" },"
    { path: "/compliance", label: "Compliance", description: "Regulatory compliance information" }"
  ],
  support: [;
    { path: "/support", label: "Support", description: "Technical support and assistance" },"
    { path: "/help", label: "Help Center", description: "Self-service help and documentation" },"
    { path: "/training", label: "Training", description: "Training programs and resources" },"
    { path: "/helpdesk", label: "Helpdesk", description: "Submit support tickets" }"
  ];
;};

const contactInfo = {}
  email: "kleber@ziontechgroup.com","
  phone: "+1 302 464 0950","
  address: "364 E Main St STE 1008, Middletown DE 19709","
  website: "https://ziontechgroup.com"";
;};

export default function SitemapPage() {
  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Sitemap - Zion Tech Group</title>;
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages and resources easily." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <Globe className="w-16 h-16 mx-auto mb-6" />";
            <h1 className="text-5xl font-bold mb-6">");
              Site Map;
            </h1>;
            <p className="text-xl text-blue-100">";
              Navigate our website easily with our comprehensive site map;
            </p>;
          </div>;
        </div>;
      </section>;

      {/* Sitemap Content */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-7xl mx-auto">";
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">";
              {/* Main Pages */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <Home className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.main.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;

              {/* Services */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <Briefcase className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Services</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.services.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;

              {/* Solutions */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <FileText className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Solutions</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.solutions.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;

              {/* Resources */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <HelpCircle className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Resources</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.resources.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;

              {/* Company */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <Users className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Company</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.company.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;

              {/* Legal */}
              <motion.div;
                className="bg-white rounded-lg shadow-lg p-6"";
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >,
                <div className="flex items-center gap-3 mb-6">";
                  <Scale className="w-6 h-6 text-blue-600" />";
                  <h2 className="text-2xl font-bold text-gray-900">Legal</h2>";
                </div>;
                <div className="space-y-3">";
                  {sitemapData.legal.map((item, index) => (,
                    <Link}),
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group""
                    >;
                      <div className="flex items-center justify-between">";
                        <div>;
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                            {item.label}
                          </h3>,
                          <p className="text-sm text-gray-600">{item.description}</p>"
                        </div>;
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />";
                      </div>;
                    </Link>;
                  ))}
                </div>,
              </motion.div>;
            </div>;

            {/* Contact Information */}
            <motion.div;
              className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"";
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >,
              <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>";
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
                <div className="text-center">";
                  <Mail className="w-8 h-8 mx-auto mb-3" />";
                  <h3 className="font-semibold mb-2">Email</h3>";
                  <p className="text-blue-100">{contactInfo.email}</p>"
                </div>;
                <div className="text-center">";
                  <PhoneIcon className="w-8 h-8 mx-auto mb-3" />";
                  <h3 className="font-semibold mb-2">Phone</h3>";
                  <p className="text-blue-100">{contactInfo.phone}</p>"
                </div>;
                <div className="text-center">";
                  <MapPin className="w-8 h-8 mx-auto mb-3" />";
                  <h3 className="font-semibold mb-2">Address</h3>";
                  <p className="text-blue-100">{contactInfo.address}</p>"
                </div>;
                <div className="text-center">";
                  <Globe className="w-8 h-8 mx-auto mb-3" />";
                  <h3 className="font-semibold mb-2">Website</h3>";
                  <p className="text-blue-100">{contactInfo.website}</p>"
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </div>;
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  Map, 
  FileText, 
  Users, 
  Settings, 
  Shield, 
  Cloud, 
  Brain,
  Home,
  Phone,
  Mail,
  Calendar,
  BookOpen,
  MessageSquare,
  Search,
  HelpCircle,
  Lock,
  Star,
  Award,
  BarChart3,
  Cpu,
  Database,
  Network,
  Zap,
  Target,
  TrendingUp,
  Heart,
  Building,
  Sprout,
  ShoppingCart,
  Rocket,
  Car,
  Mic,
  Video,
  Code,
  Monitor,
  Smartphone,
  Server,
  Wifi,
  HardDrive,
  Eye,
  Package,
  Vote
} from 'lucide-react';

const siteMap = [
  {
    category: 'Main Pages',
    icon: Home,
    pages: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About Us', href: '/about', description: 'Company information and team' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Careers', href: '/careers', description: 'Job opportunities' }
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
>>>>>>> main
    ]
  },
  {
    category: 'Services',
<<<<<<< HEAD
=======
    pages: [
      { name: 'AI Services', url: '/ai-services', icon: Brain },
      { name: 'IT Services', url: '/it-services', icon: Network },
      { name: 'Micro SaaS', url: '/micro-saas', icon: Target },
      { name: 'Cloud Services', url: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', url: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', url: '/services/data-analytics', icon: BarChart3 }
>>>>>>> main
    ]
  },
  {
    category: 'Solutions',
<<<<<<< HEAD
=======
    pages: [
      { name: 'Cloud Migration', url: '/solutions/cloud-migration', icon: Cloud },
      { name: 'Digital Transformation', url: '/solutions/digital-transformation', icon: Settings },
      { name: 'Custom Solutions', url: '/solutions/custom', icon: Target }
>>>>>>> main
    ]
  },
  {
    category: 'Resources',
<<<<<<< HEAD
=======
    pages: [
      { name: 'Documentation', url: '/docs', icon: Globe },
      { name: 'API Documentation', url: '/api-docs', icon: Settings },
      { name: 'Guides', url: '/guides', icon: Globe },
      { name: 'FAQ', url: '/faq', icon: Users }
>>>>>>> main
    ]
  }
];

<<<<<<< HEAD
=======
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
=======
import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, ExternalLink, ArrowRight } from 'lucide-react';

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
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sitemap</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Complete overview of all pages and sections on our website.
>>>>>>> main
=======
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate through all pages and sections of our website. 
                Find the information you need quickly and easily.
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
              </p>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
              </div>
            </div>
          </div>
        </section>
=======
        {/* Sitemap Content */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitemapData.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold mb-4 text-blue-600">{section.category}</h2>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        href={page.url}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <page.icon className="w-4 h-4 mr-2" />
                        <span>{page.name}</span>
                        <ArrowRight className="w-3 h-3 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
=======
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
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <Link
                                href={page.url}
                                className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                              >
                                {page.name}
                              </Link>
                              <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
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
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
              transition={{ duration: 0.8 }}
            >
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us and we'll help you find the information you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
=======
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
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/search"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Search
                </Link>
<<<<<<< HEAD
=======
                <Link
                  href="/help"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold"
                >
                  Get Help
                </Link>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
              </div>
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
>>>>>>> main
=======
    </MainLayout>
>>>>>>> e7e8983740868b7305b21501d9fc4e7727e1186f
  );
}