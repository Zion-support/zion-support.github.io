import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Twitter, Linkedin, Github, Settings } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
    { name: 'AI Fintech Platform', href: '/ai-fintech' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Machine Learning', href: '/ai-ml-platform' }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Management', href: '/database-services' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'System Integration', href: '/system-integration' },
    { name: 'Data Backup & Recovery', href: '/backup-recovery' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/whitepapers' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-green-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-400">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;