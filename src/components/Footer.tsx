import React from 'react';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { FooterNewsletter  } from '@/components/FooterNewsletter';
import { Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  Star,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright,
  LifeBuoy
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}

interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}

const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Contact', path: '/contact', icon: Phone }
    ]
  },
  {
    title: 'Services',
    icon: Brain,
    links: [
      { name: 'AI Services', path: '/ai-services', icon: Brain },
      { name: 'IT Services', path: '/it-services', icon: Cpu },
      { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', path: '/services/ai-cybersecurity-platform', icon: Shield },
      { name: 'Micro SaaS', path: '/micro-saas', icon: ShoppingCart },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap }
    ]
  },
  {
    title: 'Solutions',
    icon: Target,
    links: [
      { name: 'Enterprise', path: '/solutions/enterprise', icon: Building },
      { name: 'Healthcare', path: '/solutions/healthcare', icon: Heart },
      { name: 'Financial Services', path: '/solutions/financial', icon: DollarSign },
      { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Truck },
      { name: 'Retail & E-commerce', path: '/solutions/retail', icon: ShoppingCart },
      { name: 'Government', path: '/solutions/government', icon: Building }
    ]
  },
  {
    title: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: LifeBuoy },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Sitemap', path: '/sitemap', icon: Globe }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', external: true },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', external: true },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', external: true },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', external: true },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', external: true }
];

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const footerSections = [
    {
      title: 'Company',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      links: [
        { name: 'AI Solutions Overview', path: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Cybersecurity Suite', path: '/services/ai-cybersecurity-suite', icon: Shield },
        { name: 'Comprehensive Services', path: '/comprehensive-services', icon: Globe },
        { name: 'Revolutionary Services', path: '/revolutionary-services', icon: Star }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'AI Cybersecurity Suite', path: '/services/ai-cybersecurity-suite', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'Space Technology', path: '/services/space-technology', icon: Rocket },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Heart },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'API Development', path: '/services/api-development', icon: Code },
        { name: 'Database Solutions', path: '/services/database-solutions', icon: Database },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network },
        { name: 'Server Management', path: '/services/server-management', icon: Server },
        { name: 'Training & Education', path: '/training', icon: GraduationCap },
        { name: 'Support & Helpdesk', path: '/support', icon: HelpCircle }
      ]
    }
    setExpandedSections(newExpanded);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud & DevOps', href: '/cloud-solutions' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-suite' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Digital Transformation', href: '/digital-transformation' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Emerging Tech', href: '/emerging-tech' },
        { name: 'Space Tech', href: '/space-tech' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'AI Services', href: '/ai-services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Support Center', href: '/help' },
        { name: 'Training', href: '/training' },
        { name: 'Research', href: '/research-development' }
      ]
    }
  ];

  const solutions = [
    { name: "Healthcare Solutions", href: "/solutions/healthcare" },
    { name: "Financial Solutions", href: "/solutions/financial" },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
    { name: "Government Solutions", href: "/solutions/government" },
    { name: "Retail Solutions", href: "/solutions/retail" },
    { name: "Education Solutions", href: "/solutions/education" },
    { name: "Startup Solutions", href: "/solutions/startup" },
    { name: "Enterprise Solutions", href: "/enterprise" }
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api" },
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" },
    { name: "Training", href: "/training" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Research & Development", href: "/research-development" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Schedule Demo", href: "/schedule-demo" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ];

  const quickLinks = [
    { name: "Get Started", href: "/get-started", icon: Rocket },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Support", href: "/help", icon: HelpCircle },
    { name: "Documentation", href: "/documentation", icon: BookOpen }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, cybersecurity, cloud solutions, and digital transformation services. 
              We're your strategic technology partner for the future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact) => (
                <div key={contact.text} className="flex items-center space-x-3 text-gray-300">
                  <contact.icon className="w-4 h-4 text-blue-400" />
                  <a href={contact.href} className="hover:text-blue-400 transition-colors">
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Services</span>
            </h4>
            <div className="space-y-4">
              {serviceCategories.slice(0, 3).map((category) => (
                <div key={category.title} className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block text-gray-400 hover:text-white transition-colors py-1 flex items-center space-x-2 group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span>Solutions</span>
            </h4>
            <div className="space-y-2">
              {solutions.slice(0, 8).map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="block text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Resources</span>
            </h4>
            <div className="space-y-2">
              {resources.slice(0, 8).map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.href}
                  className="block text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Company</span>
            </h4>
            <div className="space-y-2">
              {company.slice(0, 8).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Quick Access</h3>
            <p className="text-gray-400">Get started with our services quickly</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex flex-col items-center p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-medium text-center group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

            {/* Copyright & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, cybersecurity, and digital transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Copyright className="w-4 h-4" />
              <span>2024 Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}