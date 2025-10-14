import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const microSaasServices = [
    { name: 'AI Customer Insights', path: '/ai-customer-insights' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
    { name: 'Contract Manager', path: '/micro-saas/contract-manager' },
    { name: 'Email Signature Manager', path: '/micro-saas/email-signature' },
    { name: 'Employee Directory', path: '/micro-saas/employee-directory' },
    { name: 'Document Processor', path: '/micro-saas/document-processor' },
    { name: 'AI Email Marketing', path: '/micro-saas/email-marketing' },
    { name: 'Expense Tracker Pro', path: '/micro-saas/expense-tracker' },
    { name: 'Inventory Manager', path: '/micro-saas/inventory-management' },
    { name: 'Lead Generation Suite', path: '/micro-saas/lead-generation' },
    { name: 'Social Media Scheduler', path: '/micro-saas/social-scheduler' },
    { name: 'AI Password Manager Pro', path: '/micro-saas/ai-password-manager' },
    { name: 'AI Task Manager', path: '/micro-saas/ai-task-manager' },
    { name: 'AI Email Marketing', path: '/micro-saas/ai-email-marketing' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions, helping businesses transform through cutting-edge technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
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

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4> cursor/analyze-improve-and-deploy-application-c573
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </footer>
  );
};

export default Footer;
