import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { Globe, ExternalLink, ArrowRight } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage with company overview' },
        { name: 'About', url: '/about', description: 'Learn about Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      category: 'Services',
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology services' },
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Custom software solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and compliance services' },
        { name: 'Cloud Platforms', url: '/cloud-platforms', description: 'Cloud infrastructure solutions' },
        { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence services' }
      ]
    },
    {
      category: 'Company',
      pages: [
        { name: 'Team', url: '/team', description: 'Meet our expert team' },
        { name: 'Careers', url: '/careers', description: 'Join our growing team' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and updates' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Pricing Guide', url: '/pricing-guide', description: 'Transparent pricing information' },
        { name: 'White Papers', url: '/white-papers', description: 'In-depth technical resources' },
        { name: 'Webinars', url: '/webinars', description: 'Educational webinars and events' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and guides' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', url: '/gdpr', description: 'Data protection compliance' }
      ]
    }
,"});,"})
import { motion } from 'framer-motion';,"});,"})
import { SEO } from '../components/SEO';,"});,"})
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';,"});,"})
import { Badge } from '../components/ui/Badge';,"});,"})
import {;,"});,"})
  Map, ArrowRight,;,"});,"})
  ExternalLink, Home,;,"});,"})
  Users, Briefcase,;,"});,"})
  Phone, DollarSign,;,"});,"})
  FileText, BookOpen,;,"});,"})
  Award, Shield,;,"});,"})
  Globe, Search,;,"});,"})
  Filter, Calendar,;,"});,"})
  Star, TrendingUp,;,"});,"})
  Brain, Cloud,;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
            animate={{ opacity: 1, y: 0 }}"});,"})
            transition={{ duration: 0.6 }}"});,"})
            className="text-center mb-12";,"});,"})
          >;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
          </motion.div>;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
                initial={{ opacity: 0, y: 20 }}"});,"})
                animate={{ opacity: 1, y: 0 }}"});,"})
                transition={{ duration: 0.6, delay: index * 0.1 }}"});,"})
              >;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
              </motion.div>;,"});,"})
            ))}"});,"})
          </div>;,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
          </motion.div>;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
    </>;,"});,"})
const Sitemap: React.FC = () => {;,"});,"})
  const links = [;,"});,"})
    { name: 'Home', url: '/' },;,"});,"})
    { name: 'About', url: '/about' },;,"});,"})
    { name: 'Services', url: '/services' },;,"});,"})
    { name: 'AI Services', url: '/services/ai-services' },;,"});,"})
    { name: 'IT Services', url: '/services/it-services' },;,"});,"})
    { name: 'Micro SaaS', url: '/services/micro-saas' },;,"});,"})
    { name: 'Solutions', url: '/solutions' },;,"});,"})
    { name: 'Enterprise', url: '/solutions/enterprise' },;,"});,"})
    { name: 'Small Business', url: '/solutions/small-business' },;,"});,"})
    { name: 'Startups', url: '/solutions/startups' },;,"});,"})
    { name: 'Products', url: '/products' },;,"});,"})
    { name: 'Contact', url: '/contact' },;,"});,"})
    { name: 'Careers', url: '/careers' },;,"});,"})
    { name: 'Privacy', url: '/privacy' },;,"});,"})
    { name: 'Terms', url: '/terms' },;,"});,"})
  ];,"});,"})
;,"});,"})
  return (;,"});,"})
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">;,"});,"})
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>;,"});,"})
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>;,"});,"})
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">;,"});,"})
        {links.map((l) => (;,"});,"})
          <li key={l.url}>;,"});,"})
            <a className="text-blue-600 hover:underline" href={l.url}>;,"});,"})
              {l.name}"});,"})
            </a>;,"});,"})
          </li>;,"});,"})
        ))}"});,"})
      </ul>;,"});,"})
    </div>;,"});,"})
;,"});,"})
  );,"});,"})
};,"});,"})
;,"});,"})
export default SitemapPage;,"});,"})
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
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
  MapPin} from 'lucide-react';

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
      description: 'Partnership information'}];

  const services = [
    {
      name: 'AI Services',
      href: '/ai-services',
      description: 'Artificial Intelligence solutions'},
    {
      name: 'IT Services',
      href: '/it-services',
      description: 'Information Technology services'},
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      description: 'Micro Software as a Service'},
    {
      name: 'Web Development',
      href: '/services/web-development',
      description: 'Custom web applications'},
    {
      name: 'Cloud Services',
      href: '/services/cloud-services',
      description: 'Cloud infrastructure solutions'},
    {
      name: 'AI Development',
      href: '/services/ai-development',
      description: 'AI development services'}];

  const solutions = [
    {
      name: 'AI Content Creation',
      href: '/solutions/ai-content-creation',
      description: 'AI-powered content generation'},
    {
      name: 'Customer Support',
      href: '/solutions/customer-support',
      description: 'Automated customer support'},
    {
      name: 'Email Automation',
      href: '/solutions/email-automation',
      description: 'Email marketing automation'},
    {
      name: 'Event Management',
      href: '/solutions/event-management',
      description: 'Event planning and management'},
    {
      name: 'Project Management',
      href: '/solutions/project-management',
      description: 'Project management solutions'},
    {
      name: 'Workflow Automation',
      href: '/solutions/workflow-automation',
      description: 'Business process automation'}];

  const resources = [
    {
      name: 'Documentation',
      href: '/docs',
      description: 'Technical documentation'},
    { name: 'API Reference', href: '/api', description: 'API documentation' },
    { name: 'Help & Support', href: '/help', description: 'Support center' },
    { name: 'Training', href: '/training', description: 'Training programs' },
    {
      name: 'Case Studies',
      href: '/case-studies',
      description: 'Success stories'},
    {
      name: 'Pricing Guide',
      href: '/pricing-guide',
      description: 'Pricing information'}];

  const legal = [
    {
      name: 'Privacy Policy',
      href: '/privacy',
      description: 'Privacy policy and data protection'},
    {
      name: 'Terms of Service',
      href: '/terms',
      description: 'Terms and conditions'},
    {
      name: 'Cookie Policy',
      href: '/cookies',
      description: 'Cookie usage policy'}];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'},
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'},
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
  Database, Network,
  Zap, Target,
  CheckCircle
} from 'lucide-react';''const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];''  const mainPages = [;
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },"    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },"    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },"    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },"    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },"    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },"    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },"    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },"    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },"    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },"    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },"    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },"    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [;
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },"    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },"    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },"    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },"    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },"    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },"    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },"    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },"    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },"    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];""
  const contentPages = [;
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },"    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];""
  const categories = [;
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },"    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."''      />'      '"
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">"        <div className="max-w-7xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
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
            <Badge variant="secondary" className="mb-4">"              <Map className="w-4 h-4 mr-2" />"              Site Navigation"            </Badge>"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">"              Sitemap"            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"              Find all pages and content on our website. Navigate through our services, resources, and information easily."            </p>
            <div className="flex items-center justify-center text-gray-400">"              <Calendar className="w-4 h-4 mr-2" />"              Last updated: {new Date(lastUpdated).toLocaleDateString()}"            </div></motion.div>"
        </div>
      </section>

      {/* Search and Filter */}
<section className="py-10 px-4 sm: px-6 lg:px-8 bg-slate-800/50">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center""          >"            <div className="relative w-full max-w-md">"              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />"              <input"                type="text""                placeholder="Search pages...""                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500""              />"            </div>"
            <div className="flex gap-2">"              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                All Pages"              </Badge>"
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                Services"              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-blue-500 hover:text-white transition-colors">"                Resources"              </Badge></div>
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
      {/* Sitemap Content */}
<section className="py-20 px-4 sm:px-6 lg:px-8">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
  Database, Zap,
  Lock, Code,
  Smartphone, Monitor,
  Server, Network'
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {'
      categor,
    y: 'Main Pages',
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page' },
        { name: 'About', href: '/about', description: 'About Zion Tech Group' },
        {
          name: 'Contact',
          href: '/contact',
          description: 'Contact information and form'},
        {
          name: 'Blog',
          href: '/blog',
          description: 'Latest news and insights'},
        {
          name: 'Help',
          href: '/help',
          description: 'Support and documentation'}]},
    {
      title: 'Services',
      links: [
        {
          name: 'All Services',
          href: '/services',
          description: 'Overview of all services'},
        {
          name: 'AI Services',
          href: '/ai-services',
          description: 'Artificial Intelligence solutions'},
        {
          name: 'IT Services',
          href: '/it-services',
          description: 'Information Technology services'},
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          description: 'Micro Software as a Service'},
        {
          name: 'AI Development',
          href: '/services/ai-development',
          description: 'Custom AI development'},
        {
          name: 'Cloud Services',
          href: '/services/cloud-services',
          description: 'Cloud computing solutions'},
        {
          name: 'Web Development',
          href: '/services/web-development',
          description: 'Web application development'}]},
    {
      title: 'Solutions',
      links: [
        {
          name: 'All Solutions',
          href: '/solutions',
          description: 'Overview of all solutions'},
        {
          name: 'AI Content Creation',
          href: '/solutions/ai-content-creation',
          description: 'Automated content generation'},
        {
          name: 'Email Automation',
          href: '/solutions/email-automation',
          description: 'Email marketing automation'},
        {
          name: 'Customer Support',
          href: '/solutions/customer-support',
          description: 'AI-powered support platform'},
        {
          name: 'Event Management',
          href: '/solutions/event-management',
          description: 'Event planning and management'},
        {
          name: 'Project Management',
          href: '/solutions/project-management',
          description: 'Project collaboration tools'},
        {
          name: 'Workflow Automation',
          href: '/solutions/workflow-automation',
          description: 'Business process automation'}]},
    {
      title: 'Business',
      links: [
        {
          name: 'Pricing',
          href: '/pricing',
          description: 'Service pricing and plans'},
        {
          name: 'Partners',
          href: '/partners',
          description: 'Partnership opportunities'},
        {
          name: 'Careers',
          href: '/careers',
          description: 'Job opportunities and culture'}]},
    {
      title: 'Legal & Policies',
      links: [
        {
          name: 'Privacy Policy',
          href: '/privacy',
          description: 'Privacy and data protection'},
        {
          name: 'Terms of Service',
          href: '/terms',
          description: 'Terms and conditions'},
        {
          name: 'Cookie Policy',
          href: '/cookies',
          description: 'Cookie usage and preferences'}]},
      category: 'Main Pages',
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
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Head>
      
      <ModernHeader />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Site Map
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate our website easily. Find all our pages, services, and resources organized by category.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <ul className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <li key={pageIndex}>
                        <Link
                          href={page.url}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-600">{page.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
      <SEO'
        title='Sitemap''
        description='Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place.''
        keywords='sitemap, website navigation, pages, services, resources'
      />
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100>
        <div className='max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8 py-12'>
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place."
        keywords="sitemap, navigation, website structure, pages, links"
      />
      <Head>
        <title>Sitemap - Zion Tech Group</title>
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
      </Head>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all pages and resources available on the Zion
              Tech Group website
            <p className="text-gray-600">
              Complete overview of all pages and sections on the Zion Tech Group
              website.
        title='Sitemap'
        description='Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place.'
        keywords='sitemap, website navigation, pages, services, resources'
      />
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <motion.div
            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16""          >"            {categories.map((category, categoryIndex) => (<motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            className='text-center mb-12'
          >'
            <div className='flex items-center justify-center mb-6>
              <Map className='h-12 w-12 text-blue-600 mr-4' />
              <h1 className='text-4xl font-bold text-gray-900'>Website Sitemap</h1>
            </div>'
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Navigate through all pages and sections of the Zion Tech Group website.'
              Find exactly what you're looking for with our comprehensive site structure.
              Navigate through all pages and sections of the Zion Tech Group website.
              Find exactly what you are looking for with our comprehensive site structure.
            </p>
          </motion.div>'
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {siteStructure.map((section, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-5 h-5 text-cyan-400" />
                  <a
                    href={contact.href}
                    className="text-gray-300 hover: text-cyan-400 transition-colors"
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
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              >
<div className="text-center mb-8">"                  <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>"                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>"                </div>"
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"                  {category.pages.map((page, pageIndex) => ("                    <motion.divkey={page.url}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.05 * pageIndex }}
                    >
<Card className="p-6 h-full hover:shadow-lg transition-shadow">"                        <div className="flex items-start mb-4">"                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>"                            <page.icon className="w-6 h-6 text-white" />"                          </div>"                          <div className="flex-1">"                            <h3 className="text-xl font-bold text-white mb-2">{page.name}</h3>"                            <p className="text-gray-300 text-sm mb-4">{page.description}</p>"                          </div>"                        </div>`                        "
                        <div className="flex items-center justify-between">"                          <a"                            href={page.url}
                            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center""                          >"                            Visit Page
                            <ArrowRight className="w-4 h-4 ml-1" />"                          </a>"                          <Badge variant="secondary" className="text-xs">"                            {page.url}"                          </Badge></div>
                      </Card>
                    </motion.div>
                  ))}
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
      </section>

      {/* Quick Stats */}
<section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">"        <div className="max-w-7xl mx-auto">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12""          >"            <h2 className="text-3xl font-bold text-white mb-4">Website Statistics</h2>"            <p className="text-gray-300">Overview of our website content and structure</p>"          </motion.div>""
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"            <motion.div"              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">"                <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{mainPages.length + servicePages.length + contentPages.length}</div>"                <div className="text-gray-300">Total Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">"                <Briefcase className="w-12 h-12 text-purple-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{servicePages.length}</div>"                <div className="text-gray-300">Service Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">"                <BookOpen className="w-12 h-12 text-green-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">{contentPages.length + 3}</div>"                <div className="text-gray-300">Resource Pages</div>"              </div>"            </motion.div><motion.div"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
className="text-center""            >"              <div className="p-6 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">"                <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />"                <div className="text-3xl font-bold text-white mb-2">100%</div>"                <div className="text-gray-300">Mobile Responsive</div>"              </div>"            </motion.div></div>"
        </div>
      </section>

      {/* Help Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8">"        <div className="max-w-4xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">"              Need Help Finding Something?"            </h2>
            <p className="text-xl text-gray-300 mb-8">"              Can&apos;t find what you&apos;re looking for? Our team is here to help you navigate our website and find the information you need."            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">"              <a"                href="/contact""                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity""              >"                <Phone className="w-5 h-5 mr-2" />"                Contact Support"              </a>"
              <a
                href="/services""                className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-600 text-gray-300 hover:bg-slate-700 transition-colors""              >"                <Briefcase className="w-5 h-5 mr-2" />"                Browse Services"              </a></div>"
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
                  >
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
              </CardContent>
            </Card>
          </motion.div>
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
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-xl text-gray-600">Popular pages and resources</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                href="/services"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">Services</div>
                <div className="text-gray-600 text-sm">Explore our offerings</div>
                <ArrowRight className="h-4 w-4 text-blue-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">Contact</div>
                <div className="text-gray-600 text-sm">Get in touch</div>
                <ArrowRight className="h-4 w-4 text-green-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/pricing-guide"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-purple-600 mb-2">Pricing</div>
                <div className="text-gray-600 text-sm">View our rates</div>
                <ArrowRight className="h-4 w-4 text-purple-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/case-studies"
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-2xl font-bold text-orange-600 mb-2">Case Studies</div>
                <div className="text-gray-600 text-sm">Success stories</div>
                <ArrowRight className="h-4 w-4 text-orange-600 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <SimpleFooter />
    </>
  );
}

          {/* Last Updated */}
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'})}
            </p>
          </div>
              </CardContent>
            </Card>
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
  )
}
  );
};
export default SitemapPage;
}
}
};
export default SitemapPage;
