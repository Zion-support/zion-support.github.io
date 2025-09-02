<<<<<<< HEAD
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Heart,
  Shield,
  Award,
  Users,
  Zap
} from 'lucide-react';

export const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'AI Services', href: '/services/ai-services' },
        { label: 'Micro SAAS', href: '/services/micro-saas' },
        { label: 'IT Services', href: '/services/it-services' },
        { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Cloud Solutions', href: '/services/cloud-solutions' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise', href: '/solutions/enterprise' },
        { label: 'Small Business', href: '/solutions/small-business' },
        { label: 'Startups', href: '/solutions/startups' },
        { label: 'Custom Development', href: '/solutions/custom-development' },
        { label: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence' },
        { label: 'Supply Chain Optimization', href: '/solutions/supply-chain' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Partners', href: '/partners' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Documentation', href: '/documentation' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Help Center', href: '/help' }
      ]
    }
  ];

  const quickActions = [
    { label: 'Request Quote', href: '/request-quote', icon: ArrowRight },
    { label: 'Book Demo', href: '/demo', icon: ArrowRight },
    { label: 'Download Brochure', href: '/brochure', icon: ArrowRight },
    { label: 'Sign In', href: '/login', icon: ArrowRight }
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
    { label: 'GitHub', href: '#', icon: Github }
  ];

  const certifications = [
    { label: 'ISO 27001', description: 'Information Security' },
    { label: 'SOC 2', description: 'Security & Availability' },
    { label: 'GDPR', description: 'Data Protection' },
    { label: 'AWS Certified', description: 'Cloud Solutions' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h3>
              <p className="text-gray-300 text-lg">
                Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                  <a
                    key={action.href}
                    href={action.href}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    {action.label}
                    <action.icon className="w-4 h-4 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert.label} className="text-center">
                    <div className="text-sm font-medium text-blue-400">{cert.label}</div>
                    <div className="text-xs text-gray-400">{cert.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h5 className="font-semibold text-white mb-1">Secure & Reliable</h5>
              <p className="text-sm text-gray-400">Enterprise-grade security</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h5 className="font-semibold text-white mb-1">Certified Experts</h5>
              <p className="text-sm text-gray-400">Professional team</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h5 className="font-semibold text-white mb-1">Fast Delivery</h5>
              <p className="text-sm text-gray-400">Quick turnaround</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">in Delaware</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
=======
import React from,
  react'; import { Link } from
  'react-router-dom'; import { motion } from
  'framer-motion'; import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users } from
  'lucide-react'; const EnhancedFooter: React.FC = () => { const currentYear = new Date().getFullYear(); const footerSections = [ { title:
  'Services, links: [ { name:,
  AI Solutions', href: '/services/ai-services }, { name:,
  IT & Security', href: '/services/it-services }, { name:,
  Blockchain & Web3', href: '/services/blockchain-services }, { name:,
  Sustainability', href: '/services/sustainability }, { name:,
  Healthcare Tech', href: '/services/healthcare-tech }, { name:,
  Edge Computing', href: '/services/edge-computing } ] }, { title:,
  Solutions', links: [ { name:
  'Enterprise, href:,
  /solutions/enterprise' }, { name: 'Startups, href:,
  /solutions/startups' }, { name: 'Healthcare, href:,
  /solutions/healthcare' }, { name: 'Financial Services, href:,
  /solutions/financial' }, { name: 'Manufacturing, href:,
  /solutions/manufacturing' }, { name: 'Education, href:,
  /solutions/education' } ] }, { title: 'Company, links: [ { name:,
  About Us', href: '/about }, { name:,
  Our Team', href: '/about/team }, { name:,
  Careers', href: '/careers }, { name:,
  Partners', href: '/partners }, { name:,
  Press', href: '/press }, { name:,
  Case Studies', href: '/case-studies } ] }, { title:,
  Resources', links: [ { name:
  'Blog, href:,
  /blog' }, { name: 'Documentation, href:,
  /docs' }, { name: 'API Reference, href:,
  /api' }, { name: 'Developer Tools, href:,
  /developer' }, { name: 'Training, href:,
  /training' }, { name: 'Support, href:,
  /support' } ] } ]; const socialLinks = [ { name: 'LinkedIn, href:,
  https: ''
>>>>>>> origin/main
