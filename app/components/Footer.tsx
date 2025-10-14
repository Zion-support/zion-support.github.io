import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },
    { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon }
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
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'SLA', href: '/sla' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '🐙' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-purple-400 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-5 h-5 text-purple-400" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div>24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors group"
                    aria-label={social.name}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <service.icon className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <span>{service.name}</span>
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
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
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

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((item) => (
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

            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-slate-700/50 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest news and updates about our services.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-2 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-r-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
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
