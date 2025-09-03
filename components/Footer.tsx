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
  Github,
  Brain,
  ArrowUp,
  Heart,
  Globe,
  Shield,
  Zap,
  Users,
  Building,
  Code,
  Cloud,
  Database,
  Lock,
  Target,
  BarChart3,
  TrendingUp,
  MessageCircle,
  FileText,
  Award,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/services/ai', icon: Brain },
      { name: 'Cloud Services', href: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Infrastructure', href: '/services/infrastructure', icon: Database },
      { name: 'Digital Transformation', href: '/services/transformation', icon: Zap },
      { name: 'Consulting', href: '/services/consulting', icon: Users }
    ],
    solutions: [
      { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
      { name: 'IoT Solutions', href: '/solutions#iot', icon: Globe },
      { name: 'Blockchain', href: '/solutions#blockchain', icon: Lock },
      { name: 'AR/VR', href: '/solutions#ar-vr', icon: Target },
      { name: 'Healthcare IT', href: '/solutions#healthcare', icon: Building },
      { name: 'FinTech', href: '/solutions#finance', icon: BarChart3 }
    ],
    company: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Award },
      { name: 'Careers', href: '/careers', icon: TrendingUp },
      { name: 'Contact', href: '/contact', icon: MessageCircle },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield },
      { name: 'Terms of Service', href: '/terms', icon: FileText }
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'Support', href: '/support', icon: MessageCircle },
      { name: 'FAQ', href: '/help', icon: MessageCircle },
      { name: 'Pricing Guide', href: '/pricing', icon: BarChart3 }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with innovative AI solutions, cloud infrastructure, 
              and digital transformation services. Empowering businesses to thrive in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-cyan-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-cyan-400" />
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Building className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-cyan-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest tech insights and company news delivered to your inbox.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 rounded-l-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in San Francisco</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;