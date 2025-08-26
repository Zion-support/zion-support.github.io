import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Home,
  Briefcase,
  Users,
import React from 'react';
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.js';
import { Badge } from '../components/ui/badge.js';
import {
  Home,
  HelpCircle,
  MessageCircle,
  Zap,
  Globe,
  Database,
  Lock,
  BookOpen,
  Phone,
  FileText,
  Shield,
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
import { SEO } from '../components/SEO';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card.js';
import { Badge } from '../components/ui/badge.js';
import { Phone, Mail } from 'lucide-react';
interface SitemapSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}
interface SitemapLink {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
}
const sitemapSections: SitemapSection[] = [
  {
    id: 'main',
    title: 'Main Pages',
    description: 'Core website pages and navigation',
    icon: <Home className="w-6 h-6" />,
    links: [
      {
        title: 'Home',
        href: '/',
        description: 'Welcome to Zion Tech Group'
      },
      {
        title: 'About Us',
        href: '/about',
        description: 'Learn about our company and mission'
      },
      {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our team'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services & Solutions',
    description: 'Our comprehensive range of technology services',
    icon: <Zap className="w-6 h-6" />,
    links: [
      {
        title: 'Comprehensive Services',
        href: '/comprehensive-services',
        description: 'Full-service technology solutions',
        badge: 'Popular'
      },
      {
        title: 'AI Services',
        href: '/ai-services',
        description: 'Artificial Intelligence solutions',
        badge: 'New'
      },
      {
        title: 'Micro SAAS',
        href: '/micro-saas',
        description: 'Custom software solutions'
      },
      {
        title: 'Enterprise Solutions',
        href: '/enterprise-solutions',
        description: 'Large-scale business solutions'
      },
      {
        title: 'Services Pricing',
        href: '/services-pricing',
        description: 'Transparent pricing plans'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & Support',
    description: 'Help, documentation, and support resources',
    icon: <BookOpen className="w-6 h-6" />,
    links: [
      {
        title: 'Help Center',
        href: '/help',
        description: 'Find answers and support'
      },
      {
        title: 'Cookie Policy',
        href: '/cookies',
        description: 'Learn about our cookie usage'
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
        description: 'Data protection and privacy'
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        description: 'Service terms and conditions'
      }
    ]
  },
  {
    id: 'company',
    title: 'Company Information',
    description: 'Corporate information and resources',
    icon: <Globe className="w-6 h-6" />,
    links: [
      {
        title: 'Careers',
        href: '/careers',
        description: 'Join our team',
        isExternal: true
      },
      {
        title: 'News & Updates',
        href: '/news',
        description: 'Latest company news'
      },
      {
        title: 'Partnerships',
        href: '/partners',
        description: 'Strategic partnerships'
      },
      {
        title: 'Sitemap',
        href: '/sitemap',
        description: 'Site structure overview'
      }
    ]
  }
];
export default function Sitemap() {
  const sitemapStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Our Mission', path: '/mission', description: 'Our vision and mission' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Partners', path: '/partners', description: 'Our partnerships' },
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'News', path: '/news', description: 'Company news and updates' },
        { name: 'Pricing', path: '/pricing', description: 'Transparent pricing plans' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Testimonials', path: '/testimonials', description: 'Client success stories' },
        { name: 'Case Studies', path: '/case-studies', description: 'Detailed case studies' },
        { name: 'Events', path: '/events', description: 'Upcoming events and webinars' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'Industry insights' },
        { name: 'Help Center', path: '/help-center', description: 'Support and documentation' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' }
      ]
    },
    {
      title: 'AI & Technology Services',
      links: [
        { name: 'AI Services Overview', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Autonomous AI systems' },
        { name: 'AI Business Solutions', path: '/ai-business-solutions', description: 'AI for business transformation' },
        { name: 'AI Research Assistant', path: '/ai-research-assistant', description: 'AI-powered research tools' },
        { name: 'AI Marketing Automation', path: '/ai-marketing-automation', description: 'Marketing automation with AI' },
        { name: 'AI HR & Recruitment', path: '/ai-hr-recruitment', description: 'AI-powered HR solutions' },
        { name: 'AI Legal Tech', path: '/ai-legal-tech', description: 'Legal technology solutions' },
        { name: 'AI Business Intelligence', path: '/ai-business-intelligence', description: 'Business intelligence with AI' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'IT asset management with AI' },
        { name: 'Advanced AI Automation', path: '/advanced-ai-automation-services', description: 'Advanced automation services' },
        { name: 'Research Automation', path: '/advanced-research-automation', description: 'Automated research processes' },
        { name: 'Agentic RAG', path: '/agentic-rag', description: 'Retrieval-augmented generation' },
        { name: 'Agentic RAG Helpdesk', path: '/agentic-rag-helpdesk', description: 'AI-powered helpdesk' },
        { name: 'Affiliate Attribution Hub', path: '/affiliate-attribution-hub', description: 'Affiliate marketing tools' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      links: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Advanced Cybersecurity Suite', path: '/advanced-cybersecurity-suite', description: 'Enterprise security suite' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Compliance automation' },
        { name: 'Security Assessment', path: '/security-assessment', description: 'Security evaluation services' },
        { name: 'Compliance & Audit', path: '/compliance-audit', description: 'Compliance services' },
        { name: 'Data Protection', path: '/data-protection', description: 'Data security solutions' },
        { name: 'Network Security', path: '/network-security', description: 'Network protection' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      links: [
        { name: 'Cloud & DevOps', path: '/cloud-devops', description: 'Cloud and DevOps services' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'IT infrastructure solutions' },
        { name: 'Specialized IT Infrastructure', path: '/services/specialized-it-infrastructure', description: 'Specialized infrastructure' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration services' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network solutions' },
        { name: 'Managed IT Services', path: '/managed-it-services', description: 'Managed IT support' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G enterprise solutions' },
        { name: '5G Network Optimization', path: '/5g-network-optimization', description: '5G network optimization' },
        { name: '5G Private Network Solutions', path: '/5g-private-network-solutions', description: 'Private 5G networks' }
      ]
    },
    {
      title: 'Quantum Technology',
      links: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Quantum Neural Network Platform', path: '/quantum-neural-network-platform', description: 'Quantum neural networks' },
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing services' },
        { name: 'Quantum-Safe Security', path: '/quantum-safe-security', description: 'Post-quantum cryptography' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Industry Solutions', path: '/services/industry-solutions', description: 'Industry-specific solutions' },
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Financial technology' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Digital transformation services' },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', description: 'Business automation' }
      ]
    },
    {
      title: 'Micro SAAS & Innovation',
      links: [
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', description: 'Micro software solutions' },
        { name: 'Innovative New Services', path: '/services/innovative-new-services', description: 'Cutting-edge services' },
        { name: 'Innovative Services Showcase', path: '/innovative-services-showcase', description: 'Service showcase' },
        { name: 'Emerging Technology', path: '/emerging-tech', description: 'Emerging tech solutions' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions', description: 'Blockchain technology' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'IoT solutions' },
        { name: 'Space Technology', path: '/space-technology', description: 'Space tech solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology' }
      ]
    },
    {
      title: 'Talent & Resources',
      links: [
        { name: 'Talent Directory', path: '/talent', description: 'Find top talent' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered matching' },
        { name: 'Marketplace', path: '/marketplace', description: 'Technology marketplace' },
        { name: 'Developer Portal', path: '/developer-portal', description: 'Developer resources' },
        { name: 'Community', path: '/community', description: 'Community platform' },
        { name: 'Leadership', path: '/leadership', description: 'Leadership insights' },
        { name: 'Analytics', path: '/analytics', description: 'Analytics dashboard' }
      ]
    },
    {
      title: 'Support & Documentation',
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Support center' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'Support', path: '/support', description: 'Technical support' },
        { name: 'Status Page', path: '/status', description: 'Service status' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility information' },
        { name: 'Accessibility Auditor', path: '/accessibility-auditor', description: 'Accessibility tools' },
        { name: 'Accessibility Scanner', path: '/accessibility-scanner', description: 'Accessibility scanning' }
  ShoppingCart,
  Building,
  FileText,
  HelpCircle,
  BarChart3,
  Settings,
  Zap,
  Shield,
  Globe,
  Wrench,
  Code,
  MessageSquare,
  Star,
  Play
} from 'lucide-react';
export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and mission' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' },
        { name: 'Partners', path: '/partners', description: 'Partnership programs' },
        { name: 'Sitemap', path: '/sitemap', description: 'Site navigation guide' },
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'IT Solutions', path: '/services/it-solutions', description: 'Infrastructure and IT services' },
        { name: 'AI Services', path: '/services/ai-services', description: 'Artificial intelligence solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and protection services' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'On-Site Support', path: '/it-onsite-services', description: 'Local technical support' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      ]
    },
    {
      title: 'Talent & Recruitment',
      icon: Users,
      links: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent-directory', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/ai-matcher', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/hire-now', description: 'Quick hiring process' },
        { name: 'Post a Job', path: '/post-job', description: 'Create job listings' },
        { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI recruitment platform' },
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Equipment', path: '/equipment', description: 'Tech equipment and hardware' },
        { name: 'Equipment Details', path: '/equipment-detail', description: 'Detailed product information' },
        { name: 'Categories', path: '/categories', description: 'Browse by category' },
        { name: 'Featured', path: '/featured', description: 'Highlighted products' },
        { name: 'Deals', path: '/deals', description: 'Special offers and discounts' },
      ]
    },
    {
      title: 'Company & Business',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', description: 'Company overview' },
        { name: 'Careers', path: '/careers', description: 'Employment opportunities' },
        { name: 'Partners', path: '/partners', description: 'Business partnerships' },
        { name: 'Press & Media', path: '/press', description: 'News and press releases' },
        { name: 'Enterprise Solutions', path: '/enterprise', description: 'Large-scale business solutions' },
      ]
    },
    {
      title: 'Resources & Content',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog', description: 'Industry insights and articles' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', path: '/api', description: 'API documentation' },
        { name: 'Tutorials', path: '/tutorials', description: 'Learning resources' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help-center', description: 'Comprehensive help resources' },
        { name: 'FAQ', path: '/faq', description: 'Common questions and answers' },
        { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
        { name: 'Live Chat', path: '/chat', description: 'Real-time support chat' },
        { name: 'Status Page', path: '/status', description: 'Service status updates' },
        { name: 'Support Ticket', path: '/support-ticket', description: 'Submit support requests' },
      ]
    },
    {
      title: 'Tools & Applications',
      icon: Settings,
      links: [
        { name: 'Analytics Dashboard', path: '/analytics', description: 'Business analytics and insights' },
        { name: 'Mobile App', path: '/mobile-launch', description: 'Mobile application' },
        { name: 'Community Platform', path: '/community', description: 'User community and forums' },
        { name: 'Developer Portal', path: '/developers', description: 'Developer resources and tools' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility standards' },
import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  ShoppingCart,
  Settings,
  FileText,
  MessageSquare,
  BarChart3,
  Building,
  Globe,
  Code,
  HelpCircle,
  Shield,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
export default function Sitemap() {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: "Home", path: "/", description: "Main landing page" },
        { name: "About Us", path: "/about", description: "Company information and mission" },
        { name: "Contact", path: "/contact", description: "Get in touch with us" },
        { name: "Careers", path: "/careers", description: "Job opportunities" },
        { name: "Blog", path: "/blog", description: "Latest news and insights" },
        { name: "Partners", path: "/partners", description: "Strategic partnerships" }
      ]
    },
    {
      title: "Marketplace",
      icon: <ShoppingCart className="w-5 h-5" />,
      links: [
        { name: "Marketplace", path: "/marketplace", description: "Browse all products and services" },
        { name: "Categories", path: "/categories", description: "Browse by category" },
        { name: "Services", path: "/services", description: "Professional services" },
        { name: "Equipment", path: "/equipment", description: "Tech equipment and hardware" },
        { name: "Green IT", path: "/green-it", description: "Sustainable technology solutions" }
      ]
    },
    {
      title: "Talent & Community",
      icon: <Users className="w-5 h-5" />,
      links: [
        { name: "Talent Directory", path: "/talent", description: "Find skilled professionals" },
        { name: "Community", path: "/community", description: "Join our community" },
        { name: "AI Matcher", path: "/match", description: "AI-powered talent matching" },
        { name: "Zion Hire AI", path: "/zion-hire-ai", description: "AI recruitment platform" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: <Building className="w-5 h-5" />,
      links: [
        { name: "Enterprise Plans", path: "/enterprise", description: "Enterprise solutions" },
        { name: "IT Onsite Services", path: "/it-onsite-services", description: "On-site IT support" },
        { name: "Request Quote", path: "/request-quote", description: "Get a custom quote" }
      ]
    },
    {
      title: "Developer Resources",
      icon: <Code className="w-5 h-5" />,
      links: [
        { name: "Developer Portal", path: "/developers", description: "Developer tools and APIs" },
        { name: "API Documentation", path: "/api-docs", description: "API reference and guides" },
        { name: "Sample Code", path: "/api-samples", description: "Code examples and tutorials" }
      ]
    },
    {
      title: "User Dashboard",
      icon: <Settings className="w-5 h-5" />,
      links: [
        { name: "Dashboard", path: "/dashboard", description: "Main user dashboard" },
        { name: "Messages", path: "/messages", description: "Communication center" },
        { name: "Notifications", path: "/notifications", description: "System alerts" },
        { name: "Profile", path: "/profile", description: "User profile management" },
        { name: "Account Settings", path: "/account-settings", description: "Account configuration" }
      ]
    },
    {
      title: "Authentication",
      icon: <Shield className="w-5 h-5" />,
      links: [
        { name: "Login", path: "/login", description: "Sign in to your account" },
        { name: "Sign Up", path: "/signup", description: "Create new account" },
        { name: "Forgot Password", path: "/forgot-password", description: "Reset password" }
      ]
    },
    {
      title: "Legal & Support",
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: "Privacy Policy", path: "/privacy", description: "Privacy and data protection" },
        { name: "Terms of Service", path: "/terms", description: "Terms and conditions" },
        { name: "Help Center", path: "/help", description: "Support and documentation" }
      ]
    }
  ];
import { motion } from 'framer-motion';
import {
  Map,
  Home,
  Info,
  Settings,
  MessageSquare,
  HelpCircle,
  FileText,
  Shield,
  Cookie,
  Brain,
  Cpu,
  Cloud,
  Globe,
  Rocket,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Award,
  Mail,
  ArrowRight
} from 'lucide-react';
export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Welcome to Zion Tech Group', icon: Home },
    { path: '/about', title: 'About Us', description: 'Learn about our company and mission', icon: Users },
    { path: '/team', title: 'Our Team', description: 'Meet our talented team members', icon: Users },
    { path: '/mission', title: 'Our Mission', description: 'Discover our mission and vision', icon: Award },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team', icon: Phone },
    { path: '/careers', title: 'Careers', description: 'Join our growing team', icon: Users }
  ];
  const servicePages = [
    { path: '/services', title: 'All Services', description: 'Comprehensive service overview', icon: Briefcase },
    { path: '/services/ai-autonomous-systems', title: 'AI Autonomous Systems', description: 'Advanced AI solutions', icon: Brain },
    { path: '/services/ai-business-intelligence', title: 'AI Business Intelligence', description: 'Data-driven insights', icon: Brain },
    { path: '/services/cybersecurity', title: 'Cybersecurity Services', description: 'Security and compliance', icon: Shield },
    { path: '/services/quantum-technology', title: 'Quantum Technology', description: 'Next-gen computing', icon: Cpu },
    { path: '/services/it-infrastructure', title: 'IT Infrastructure', description: 'Complete IT solutions', icon: Cloud },
    { path: '/micro-saas-services', title: 'Micro SAAS Solutions', description: 'Custom software development', icon: Cpu }
  ];
  const solutionPages = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions', description: 'Large-scale business transformation', icon: Building },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions', description: 'Medical technology innovation', icon: Heart },
    { path: '/solutions/financial', title: 'Financial Solutions', description: 'Fintech and banking solutions', icon: DollarSign },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions', description: 'Smart manufacturing', icon: Factory },
    { path: '/solutions/retail', title: 'Retail Solutions', description: 'Digital retail transformation', icon: ShoppingCart }
  ];
  const technologyPages = [
    { path: '/quantum-neural-network-platform', title: 'Quantum Neural Networks', description: 'Quantum-powered AI', icon: Brain },
    { path: '/ai-autonomous-business-manager', title: 'AI Business Manager', description: 'Autonomous business operations', icon: Brain },
    { path: '/ai-autonomous-research-assistant', title: 'AI Research Assistant', description: 'Research automation', icon: Brain },
    { path: '/autonomous-business-operations-platform', title: 'Autonomous Business Platform', description: 'Self-operating systems', icon: Rocket },
    { path: '/ai-powered-it-asset-management', title: 'AI Asset Management', description: 'Intelligent IT management', icon: Cloud }
  ];
  const resourcePages = [
    { path: '/pricing', title: 'Pricing', description: 'Transparent pricing plans', icon: DollarSign },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and results', icon: FileText },
    { path: '/blog', title: 'Blog', description: 'Latest insights and updates', icon: FileText },
    { path: '/help', title: 'Help Center', description: 'Support and documentation', icon: FileText },
    { path: '/docs', title: 'Documentation', description: 'Technical documentation', icon: FileText },
    { path: '/support', title: 'Support', description: 'Technical support services', icon: Phone }
  ];
  const legalPages = [
    { path: '/privacy', title: 'Privacy Policy', description: 'Data protection and privacy', icon: Shield },
    { path: '/terms', title: 'Terms of Service', description: 'Service terms and conditions', icon: FileText },
    { path: '/cookies', title: 'Cookie Policy', description: 'Cookie usage information', icon: Shield },
    { path: '/accessibility', title: 'Accessibility', description: 'Accessibility commitment', icon: Users }
  ];
  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <IconComponent className="w-6 h-6 text-zion-cyan mr-3" />
        {title}
      </h2>
      <ul className="space-y-3">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              to={page.href}
              className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
            >
              <span className="w-2 h-2 bg-zion-cyan rounded-full mr-3 group-hover:bg-zion-cyan transition-colors"></span>
              <span className="font-medium">{page.name}</span>
              <span className="ml-2 text-sm text-zion-slate-light opacity-75">- {page.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  const quickLinks = [
    { name: 'Get Started', path: '/get-started', icon: Star, color: 'bg-green-100 text-green-700' },
    { name: 'Request Demo', path: '/demo', icon: Play, color: 'bg-blue-100 text-blue-700' },
    { name: 'Contact Sales', path: '/contact-sales', icon: MessageSquare, color: 'bg-purple-100 text-purple-700' },
    { name: 'Support', path: '/support', icon: HelpCircle, color: 'bg-orange-100 text-orange-700' },
  ];
  return (
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Human readable sitemap for all public routes"
        keywords="sitemap, navigation"
        canonical="https://ziontechgroup.com/sitemap"
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Navigation Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive website structure. Find all pages, services, and resources organized by category for easy navigation.
            </p>
          </div>
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`${link.color} p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200`}
              >
                <link.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">{link.name}</div>
              </Link>
            ))}
          </div>
          {/* Sitemap Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-zion-blue/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-zion-blue" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-2 border-gray-200 pl-4">
                        <Link
                          to={link.path}
                          className="block text-zion-blue hover:text-zion-blue-dark font-medium mb-1 transition-colors"
                        >
                          {link.name}
                        </Link>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-zion-blue" />
                  <span>Site Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Pages:</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Site Version:</span>
                    <span className="font-medium">2.0.0</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-zion-blue" />
                  <span>Need Help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/contact"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Contact Support →
                  </Link>
                  <Link
                    to="/help-center"
                    className="block text-zion-blue hover:text-zion-blue-dark text-sm font-medium"
                  >
                    Visit Help Center →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
  return (
    </>
  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <div key={title} className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <IconComponent className="w-5 h-5 mr-2 text-cyan-400" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="block p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
          >
            <h4 className="font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {page.title}
            </h4>
            <p className="text-sm text-gray-400">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Navigate through all the pages and sections of our website to find exactly
            what you're looking for.
          </p>
        </div>
      </section>
      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {renderPageSection('Main Pages', mainPages, Home)}
              {renderPageSection('Services', servicePages, Briefcase)}
              {renderPageSection('Solutions', solutionPages, Building)}
            </div>
            {/* Right Column */}
            <div>
              {renderPageSection('Technology Platforms', technologyPages, Rocket)}
              {renderPageSection('Resources', resourcePages, FileText)}
              {renderPageSection('Legal & Support', legalPages, Shield)}
            </div>
          </div>
        </div>
      </section>
      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-gray-400">
              Popular destinations and frequently accessed pages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-sm text-gray-400">Explore our comprehensive service offerings</p>
            </Link>
            <Link
              to="/pricing"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pricing Plans</h3>
              <p className="text-sm text-gray-400">Transparent pricing for all our services</p>
            </Link>
            <Link
              to="/contact"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-400">Contact our team for inquiries</p>
            </Link>
            <Link
              to="/careers"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-400">Career opportunities at Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our team is here to help you navigate
            our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Visit Help Center</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zion Tech Group Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through our comprehensive range of services, solutions, and resources.
            Find everything you need to transform your business with cutting-edge technology.
import {
  Brain,
  Cpu,
  Shield,
  Cloud,
  Building,
  Users,
  Heart,
  Rocket,
  Code,
  BarChart3,
  Target,
  Network,
  Eye,
  Clock,
  Star,
  Globe,
  FileText,
  Calendar,
  Video,
  Zap,
  TrendingUp,
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow,
  Home,
  Info,
  Phone,
  DollarSign,
  BookOpen,
  HelpCircle,
  Users as TeamIcon,
  Briefcase,
  Shield as SecurityIcon,
  Server,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Get Started', path: '/get-started', description: 'Start your journey with us' }
      ]
    },
    {
      title: 'Services',
      icon: Code,
      pages: [
        { name: 'AI Solutions', path: '/services/ai', description: 'AI-powered business solutions' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure & automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Robust IT foundations' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business modernization' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology guidance' }
      ]
    },
    {
      title: 'Solutions',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech & banking solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 solutions' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'E-commerce & retail tech' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events and conferences' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Research & Development', path: '/research-development', description: 'Our R&D initiatives' }
      ]
    },
    {
      title: 'Specialized Technologies',
      icon: Rocket,
      pages: [
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Space Tech', path: '/space-tech', description: 'Space technology solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
      ]
    },
    {
      title: 'Support & Legal',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help-center', description: 'Get help and support' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Our privacy practices' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
      ]
    },
    {
      title: 'Business Tools',
      icon: BarChart3,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
        { name: 'Service Comparison', path: '/service-comparison', description: 'Compare our services' },
        { name: 'Service Portfolio', path: '/service-portfolio', description: 'View our service portfolio' },
        { name: 'Service Recommendations', path: '/service-recommendations', description: 'Get personalized recommendations' },
        { name: 'Service Innovation Hub', path: '/service-innovation-hub', description: 'Innovation showcase' },
        { name: 'Services Showcase', path: '/services-showcase', description: 'Featured services' }
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the pages and resources available on the Zion Tech Group website.
            Find exactly what you're looking for with our comprehensive site navigation.
          </p>
        </div>
      </div>
