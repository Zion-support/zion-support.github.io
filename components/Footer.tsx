import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Brain, 
  Network, 
  Cloud, 
  Shield, 
  Building, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Zap, 
  Video, 
  Users, 
  Rocket, 
  MessageSquare, 
  FileText,
  BarChart3,
  Cpu,
  Code,
  HelpCircle,
  Clock,
  Atom,
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Cookie
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Network },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Computing', href: '/cloud-computing', icon: Cloud },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart3 }
  ];

  const solutions = [
    { name: 'Startup Solutions', href: '/solutions/startup', icon: Zap },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Cpu },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
    { name: 'Custom Development', href: '/solutions/custom', icon: Code }
  ];

  const industries = [
    { name: 'Finance', href: '/industries/finance', icon: DollarSign },
    { name: 'Education', href: '/industries/education', icon: BookOpen },
    { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
    { name: 'Manufacturing', href: '/industries/manufacturing', icon: Cpu },
    { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
    { name: 'Government', href: '/industries/government', icon: Shield }
  ];

  const resources = [
    { name: 'API Documentation', href: '/api-docs', icon: Code },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Blog', href: '/blog', icon: MessageSquare },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Careers', href: '/careers', icon: Users }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Building },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Cookie }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI, IT, and Micro SaaS solutions. We help businesses 
              transform through innovative technology and intelligent automation.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <service.icon className="w-3 h-3" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link 
                    href={solution.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <solution.icon className="w-3 h-3" />
                    <span>{solution.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link 
                    href={industry.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <industry.icon className="w-3 h-3" />
                    <span>{industry.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <resource.icon className="w-3 h-3" />
                    <span>{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {company.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;