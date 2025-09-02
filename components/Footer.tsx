import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp,
  Globe,
  Brain,
  Cloud,
  Shield,
  Users,
  Code,
  Database,
  Network,
  BarChart3,
  Target,
  MessageSquare,
  FileText,
  Smartphone,
  Calendar,
  Settings,
  Zap,
  Building
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Network },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Zap },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Shield },
      { name: 'Financial Solutions', href: '/solutions/financial', icon: Database },
      { name: 'E-commerce Solutions', href: '/solutions/ecommerce', icon: Target },
      { name: 'Education Solutions', href: '/solutions/education', icon: Users }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Press', href: '/press' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training', href: '/training' },
      { name: 'Support', href: '/support' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: '+1 302 464 0950', 
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
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of cutting-edge AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <contact.icon className="w-5 h-5 text-blue-400" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-blue-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <link.icon className="w-4 h-4 text-blue-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
}