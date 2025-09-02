import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Github, ArrowRight, Heart, Shield, Zap, Users } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-marketing-tracking' },
        { name: 'Email Automation', href: '/services/email-automation' },
        { name: 'AI Content Tools', href: '/services/ai-content-tools' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform' },
        { name: 'Computer Vision', href: '/services/computer-vision' },
        { name: 'NLP Processing', href: '/services/nlp-processing' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise', href: '/solutions/enterprise' },
        { name: 'Startups', href: '/solutions/startups' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Press', href: '/press' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Tools', href: '/developer' },
        { name: 'Training', href: '/training' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg mr-3">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. 
              Transforming businesses with intelligent automation and scalable platforms.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Stay updated with our latest innovations</span>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="h-4 w-4 mx-2 text-red-400" />
              <span>Made with passion for innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;