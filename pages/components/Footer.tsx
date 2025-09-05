import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ClipboardList,
  Clock,
  Cloud,
  Code,
  Cpu,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  HardDrive,
  Heart,
  HelpCircle,
  Home,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Music,
  Network,
  Paintbrush,
  Phone,
  PieChart,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Sprout,
  Star,
  Target,
  TreePine,
  TrendingUp,
  Truck,
  Users,
  Video,
  Wifi,
  Wrench,
  Zap
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { title: 'AI Services (100+)', href: '/ai-services', icon: Brain },
      { title: 'IT Services (85+)', href: '/it-services', icon: Network },
      { title: 'Micro SaaS (120+)', href: '/micro-saas', icon: Cloud },
      { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { title: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { title: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
      { title: 'Automation', href: '/automation', icon: Zap },
      { title: 'Quantum Computing', href: '/quantum-computing', icon: Code }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Digital Transformation', href: '/digital-transformation', icon: Settings },
      { title: 'AI Development', href: '/ai-development', icon: Brain },
      { title: 'Blockchain Solutions', href: '/blockchain', icon: Lock },
      { title: 'IoT Solutions', href: '/iot-solutions', icon: Globe },
      { title: 'Edge Computing', href: '/edge-computing', icon: Server },
      { title: 'MLOps & AIOps', href: '/mlops', icon: Code },
      { title: 'Green IT', href: '/green-it', icon: Sprout },
      { title: 'API Management', href: '/api-management', icon: Settings }
    ]
  },
  {
    title: 'Industries',
    links: [
      { title: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { title: 'Finance', href: '/industries/finance', icon: DollarSign },
      { title: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { title: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { title: 'Education', href: '/industries/education', icon: BookOpen },
      { title: 'Real Estate', href: '/industries/real-estate', icon: Home },
      { title: 'Government', href: '/industries/government', icon: Building },
      { title: 'Energy', href: '/industries/energy', icon: Zap }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog', icon: FileText },
      { title: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { title: 'White Papers', href: '/white-papers', icon: FileText },
      { title: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { title: 'Webinars', href: '/webinars', icon: Video },
      { title: 'Events', href: '/events', icon: Calendar },
      { title: 'API Documentation', href: '/api-docs', icon: Code },
      { title: 'Documentation', href: '/docs', icon: FileText }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about', icon: Building },
      { title: 'Team', href: '/team', icon: Users },
      { title: 'Careers', href: '/careers', icon: Users },
      { title: 'Partners', href: '/partners', icon: Globe },
      { title: 'News', href: '/news', icon: FileText },
      { title: 'Contact', href: '/contact', icon: Phone },
      { title: 'Pricing', href: '/pricing', icon: DollarSign },
      { title: 'Support', href: '/support', icon: MessageSquare }
    ]
  },
  {
    title: 'Support',
    links: [
      { title: 'Help Center', href: '/help', icon: MessageSquare },
      { title: 'Documentation', href: '/docs', icon: FileText },
      { title: 'API Reference', href: '/api', icon: Code },
      { title: 'Status Page', href: '/status', icon: BarChart3 },
      { title: 'Community', href: '/community', icon: Users },
      { title: 'Training', href: '/training', icon: BookOpen },
      { title: 'FAQ', href: '/faq', icon: HelpCircle },
      { title: 'Contact Support', href: '/contact', icon: Phone }
    ]
  }
];

const microSaasCategories = [
  { title: 'Marketing Tools', icon: Target, count: 15 },
  { title: 'Productivity', icon: Settings, count: 12 },
  { title: 'Analytics', icon: BarChart3, count: 18 },
  { title: 'Automation', icon: Zap, count: 22 },
  { title: 'Security', icon: Shield, count: 8 },
  { title: 'Finance', icon: DollarSign, count: 10 },
  { title: 'Design', icon: Paintbrush, count: 6 },
  { title: 'Development', icon: Code, count: 14 }
];

const aiServiceCategories = [
  { title: 'Machine Learning', icon: Brain, count: 25 },
  { title: 'Computer Vision', icon: Eye, count: 18 },
  { title: 'Natural Language', icon: MessageSquare, count: 20 },
  { title: 'Predictive Analytics', icon: TrendingUp, count: 15 },
  { title: 'Robotics', icon: Settings, count: 8 },
  { title: 'Quantum AI', icon: Code, count: 5 }
];

const itServiceCategories = [
  { title: 'Cloud Computing', icon: Cloud, count: 30 },
  { title: 'Cybersecurity', icon: Shield, count: 25 },
  { title: 'DevOps', icon: Settings, count: 20 },
  { title: 'Data Management', icon: HardDrive, count: 15 },
  { title: 'Network Security', icon: Lock, count: 18 },
  { title: 'Infrastructure', icon: Building, count: 22 }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">AI & Technology Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI services, IT solutions, and innovative micro SaaS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
=======
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Database Solutions', href: '/database-solutions' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { name: 'Startup Solutions', href: '/startup-solutions' },
      { name: 'Industries', href: '/industries' },
      { name: 'Custom Development', href: '/custom-development' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Consulting', href: '/consulting' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'News', href: '/news' },
      { name: 'Partners', href: '/partners' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Documentation', href: '/docs/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 mb-6">
                Leading provider of cutting-edge technology solutions, helping businesses transform and grow through innovation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">hello@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              {footerSections[0].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
          </div>

          {/* Solutions */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <div className="space-y-4">
              {footerSections[1].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <div className="space-y-4">
              {footerSections[3].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS Solutions</h4>
              <div className="grid grid-cols-2 gap-2">
                {microSaasCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-blue-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">AI Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {aiServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-green-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {itServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-purple-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">235+</div>
              <div className="text-gray-400">Services & Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">3,200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">180+</div>
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">18+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources & Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
};

export default Footer;
>>>>>>> c1f19efa26544fbb335493082b33a55c1d58d4f8
