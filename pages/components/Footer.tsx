import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  BookOpen,
  Building,
  Heart,
  DollarSign,
  Target,
  Zap,
  Award,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  Lock,
  Code,
  Home,
  Camera,
  Music,
  Gamepad2,
  Truck,
  Calculator,
  CreditCard,
  Paintbrush,
  HardDrive,
  Activity,
  Lightbulb,
  Wrench,
  PieChart,
  ClipboardList,
  Layers
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { title: 'AI Services', href: '/ai-services', icon: Brain },
      { title: 'IT Services', href: '/it-services', icon: Network },
      { title: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
      { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { title: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { title: 'Data Analytics', href: '/data-analytics', icon: BarChart3 }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Automation', href: '/automation', icon: Zap },
      { title: 'AI Development', href: '/ai-development', icon: Brain },
      { title: 'Digital Transformation', href: '/digital-transformation', icon: Settings },
      { title: 'IoT Solutions', href: '/iot-solutions', icon: Globe },
      { title: 'Blockchain', href: '/blockchain', icon: Lock },
      { title: 'Quantum Computing', href: '/quantum-computing', icon: Code }
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
      { title: 'Real Estate', href: '/industries/real-estate', icon: Home }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog', icon: FileText },
      { title: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { title: 'White Papers', href: '/white-papers', icon: FileText },
      { title: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { title: 'Documentation', href: '/docs', icon: FileText },
      { title: 'Events', href: '/events', icon: Calendar }
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
      { title: 'Press', href: '/press', icon: FileText },
      { title: 'Contact', href: '/contact', icon: MessageSquare }
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
      { title: 'Training', href: '/training', icon: BookOpen }
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
      { name: 'Web Development', href: '/web-development' },
      { name: 'Mobile Development', href: '/mobile-development' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' }
    ],
    solutions: [
      { name: 'AI Solutions', href: '/ai-solutions' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Security Solutions', href: '/security-solutions' },
      { name: 'Data Analytics', href: '/data-analytics' },
      { name: 'IoT Solutions', href: '/iot-solutions' },
      { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Documentation', href: '/docs' },
      { name: 'FAQ', href: '/faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
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
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered technology solutions, cloud services, 
                and digital transformation for businesses worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Technology Drive, San Francisco, CA 94105</span>
                </div>
              </div>
            </motion.div>
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
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
=======
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
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
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
          </div>

          {/* Resources */}
          <div>
<<<<<<< HEAD
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
              <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95+</div>
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
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
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest technology insights and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4 mb-4 md:mb-0"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
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
>>>>>>> 116b25af07b61a9d40e22653e4aa531d26ffec3e
