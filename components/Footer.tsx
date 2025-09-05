import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import {
  Phone,
  Mail,
  MapPin,
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Network,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Building2,
  Users,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Code },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Cybersecurity', href: '/security', icon: Shield },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
    { name: 'Database Solutions', href: '/database-solutions', icon: Database }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'Startup Solutions', href: '/startup-solutions' },
    { name: 'Industry Solutions', href: '/industries' },
    { name: 'Custom Development', href: '/custom-development' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Consulting', href: '/consulting' }
=======
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' }
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
<<<<<<< HEAD
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting. 
              We help businesses transform and grow through innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
=======
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Facebook', href: '#', icon: Facebook }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm">
              Leading provider of AI, IT, and Micro SaaS solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
<<<<<<< HEAD
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
=======
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
=======
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
<<<<<<< HEAD
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {solution.name}
=======
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 mb-8">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
=======
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
<<<<<<< HEAD
            </ul>

            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
=======
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h5 className="font-semibold">Secure & Reliable</h5>
                <p className="text-sm text-gray-400">Enterprise-grade security</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h5 className="font-semibold">24/7 Support</h5>
                <p className="text-sm text-gray-400">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="w-8 h-8 text-yellow-400 mr-3" />
              <div>
                <h5 className="font-semibold">Certified Experts</h5>
                <p className="text-sm text-gray-400">Industry-certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Globe className="w-4 h-4 mr-2 text-gray-400" />
              <span className="text-gray-400 text-sm">Serving clients worldwide</span>
            </div>
=======
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>123 Innovation Drive, Tech City, TC 12345</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
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
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
