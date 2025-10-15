import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  SignalIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EyeIcon,
  CheckCircleIcon,
  UserPlusIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Solutions Overview', href: '/ai-solutions' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
        { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Generation', href: '/ai-content-generation-pro' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Automation Platform', href: '/ai-automation-platform' }
      ]
    },
    {
      title: 'Micro SaaS',
      links: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions' },
        { name: 'Task Manager Pro', href: '/task-manager-pro' },
        { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
        { name: 'Customer Support Hub', href: '/customer-support-hub' },
        { name: 'Inventory Manager', href: '/inventory-manager' },
        { name: 'Social Media Scheduler', href: '/social-media-scheduler' },
        { name: 'Expense Tracker Pro', href: '/expense-tracker-pro' }
      ]
    },
    {
      title: 'IT Solutions',
      links: [
        { name: 'IT Solutions Overview', href: '/it-solutions' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile App Development', href: '/mobile-development' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Tutorials', href: '/tutorials' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'API Documentation', href: '/api-docs' },
        { name: 'Help Center', href: '/help' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partnerships', href: '/partnerships' },
        { name: 'Contact', href: '/contact' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: 'youtube' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
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
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                    <GlobeAltIcon className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="flex flex-wrap justify-center space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
