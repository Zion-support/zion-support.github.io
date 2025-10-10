import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight,
  Lock,
  FileText,
  Shield,
  Clock
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle' },
        { name: 'AI 3D Generation Studio', href: '/ai-3d-generation' },
        { name: 'AI Mobile App Builder', href: '/ai-mobile-app-builder' },
        { name: 'AI Logo Designer Pro', href: '/ai-logo-designer' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure', href: '/it-infrastructure' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Project Manager', href: '/micro-saas' },
        { name: 'AI Analytics Dashboard', href: '/micro-saas' },
        { name: 'AI Customer Support Bot', href: '/micro-saas' },
        { name: 'AI Content Generator', href: '/micro-saas' },
        { name: 'AI Expense Tracker', href: '/micro-saas' },
        { name: 'AI Invoice Generator', href: '/micro-saas' }
      ]
    },
    {
      title: 'Company',
      services: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Lock },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Shield }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of AI-powered enterprise solutions and digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest AI and technology insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Legal Links */}
              <div className="flex items-center space-x-4">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    <link.icon className="w-3 h-3" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;