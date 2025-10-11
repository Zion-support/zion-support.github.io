import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SAAS', href: '/micro-saas-services' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: '5G Implementation', href: '/5g-implementation' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ];

  const aiServices = [
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
    { name: 'AI Automation Suite', href: '/ai-automation' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' }
  ];

  const microSaas = [
    { name: 'AI Task Manager', href: '/ai-task-manager' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
    { name: 'AI Password Manager', href: '/ai-password-manager' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
    { name: 'AI Health Tracker', href: '/ai-health-tracker' },
    { name: 'AI Smart Calendar', href: '/ai-smart-calendar' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
              We help companies leverage cutting-edge technology to drive growth and efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaas.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Company Links */}
            <div className="flex space-x-6">
              {company.map((link) => (
                <Link 
                  key={link.name}
                  to={link.href} 
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold text-white mb-2">Why Choose Us?</h4>
              <p>Expert team, 24/7 support, scalable solutions, and proven results with 500+ successful projects.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Our Mission</h4>
              <p>To empower businesses with cutting-edge AI and IT solutions that drive growth and digital transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Get Started</h4>
              <p>Ready to transform your business? Contact us today for a free consultation and custom solution.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
