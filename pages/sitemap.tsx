<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, 
=======
import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Home, 
>>>>>>> main
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
  email: "contact@ziontechgroup.com","
  phone: "+1 (555) 123-4567","
  address: "123 Technology Drive, Innovation City, IC 12345","
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
=======
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
    ]
  },
  {
    category: 'Services',
    icon: Settings,
    pages: [
      { name: 'AI Services', href: '/ai-services', description: 'Artificial intelligence solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Information technology services' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Software as a service solutions' },
      { name: 'All Services', href: '/services', description: 'Complete service overview' }
    ]
  },
  {
    category: 'Solutions',
    icon: Shield,
    pages: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large business solutions' },
      { name: 'Startup Solutions', href: '/solutions/startup', description: 'Startup-focused solutions' },
      { name: 'Industry Solutions', href: '/solutions/industry', description: 'Industry-specific solutions' },
      { name: 'Custom Development', href: '/solutions/custom', description: 'Tailored development services' }
    ]
  },
  {
    category: 'Resources',
    icon: BookOpen,
    pages: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Learning tutorials' },
      { name: 'Guides', href: '/guides', description: 'Implementation guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      { name: 'Support', href: '/support', description: 'Technical support' }
    ]
  },
  {
    category: 'Company',
    icon: Users,
    pages: [
      { name: 'About Us', href: '/about', description: 'Our story and mission' },
      { name: 'Our Team', href: '/about#team', description: 'Meet our experts' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Partners', href: '/partners', description: 'Our partners' },
      { name: 'Events', href: '/events', description: 'Upcoming events' },
      { name: 'News', href: '/news', description: 'Company news' }
    ]
  },
  {
    category: 'Legal',
    icon: Lock,
    pages: [
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection policy' },
      { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage policy' },
      { name: 'Security', href: '/security', description: 'Security information' },
      { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
    ]
  }
];

const contactInfo = {
  email: "kleber@ziontechgroup.com",
  phone: "+1 302 464 0950",
  address: "364 E Main St STE 1008, Middletown DE 19709",
  website: "https://ziontechgroup.com"
};
const quickLinks = [
  { name: 'Get Started', href: '/contact', icon: ArrowRight },
  { name: 'Free Consultation', href: '/contact', icon: Phone },
  { name: 'View Services', href: '/services', icon: Settings },
  { name: 'Read Blog', href: '/blog', icon: BookOpen },
  { name: 'Support Center', href: '/support', icon: HelpCircle },
  { name: 'API Docs', href: '/api-docs', icon: Code }
];

export default function SitemapPage() {
  return (
    <MainLayout
      title="Sitemap - Zion Tech Group"
      description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place."
      keywords="sitemap, website map, navigation, pages, services, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
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
ursor/website-audit-and-update-with-deployment-9cae
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-6">
                <Map className="w-16 h-16 text-purple-400 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  Site Map
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. 
                Find all pages, services, and resources in one place.
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Site Map
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Navigate our website easily with our comprehensive sitemap. Find all pages, services, and resources organized by category.
ursor/website-audit-and-update-with-deployment-9cae
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-gray-600">
                Popular pages and resources
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="bg-gray-50 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:text-blue-700" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                      {link.name}
                    </span>
                  </motion.a>
                );
              })}
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
ursor/website-audit-and-update-with-deployment-9cae
            </div>
          </div>
        </section>

        {/* Site Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Site Map
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Browse all pages and sections of our website organized by category.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteMap.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {category.category}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {category.pages.map((page, pageIndex) => (
                        <li key={pageIndex}>
                          <Link
                            href={page.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex-1">
                              <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                {page.name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {page.description}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
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
ursor/website-audit-and-update-with-deployment-9cae
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
ursor/website-audit-and-update-with-deployment-9cae
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need Help Finding Something?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help you navigate 
                our website and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="/support"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold"
                >
                  Get Support
                </a>
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
ursor/website-audit-and-update-with-deployment-9cae
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> main
  );
}