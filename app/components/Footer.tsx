'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing Automation', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Financial Services', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Project Management', url: '/ai-project-management', description: 'AI-powered project management' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Comprehensive security solutions' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'Native and cross-platform apps' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Database Management', url: '/database-management', description: 'Database design and optimization' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' }
  ];

  const microSaas = [
    { name: 'AI Content Writer', url: '/micro-saas/ai-content-writer', description: 'AI-powered content creation' },
    { name: 'Analytics Dashboard', url: '/micro-saas/analytics-dashboard', description: 'Business analytics platform' },
    { name: 'Appointment Scheduler', url: '/micro-saas/appointment-scheduler', description: 'Smart scheduling system' },
    { name: 'Chat Analytics', url: '/micro-saas/chat-analytics', description: 'Conversation insights' },
    { name: 'Content Generator', url: '/micro-saas/content-generator', description: 'Automated content creation' },
    { name: 'Document Processor', url: '/micro-saas/document-processor', description: 'Document automation' },
    { name: 'Email Marketing', url: '/micro-saas/email-marketing', description: 'Email campaign management' },
    { name: 'Form Builder', url: '/micro-saas/form-builder', description: 'Dynamic form creation' },
    { name: 'Invoice Generator', url: '/micro-saas/invoice-generator', description: 'Automated invoicing' },
    { name: 'Lead Tracker', url: '/micro-saas/lead-tracker', description: 'Lead management system' },
    { name: 'Password Manager', url: '/micro-saas/password-manager', description: 'Secure password storage' },
    { name: 'Task Manager', url: '/micro-saas/task-manager', description: 'Productivity management' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'Sitemap', url: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: 'github' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
                and digital transformation services. Transform your business with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                AI Services
              </h4>
              <ul className="space-y-3">
                {aiServices.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                  >
                    View All AI Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Cloud className="w-5 h-5 text-purple-400 mr-2" />
                IT Services
              </h4>
              <ul className="space-y-3">
                {itServices.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                  >
                    View All IT Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Micro SaaS */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Code className="w-5 h-5 text-pink-400 mr-2" />
                Micro SaaS
              </h4>
              <ul className="space-y-3">
                {microSaas.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas"
                    className="text-pink-400 hover:text-pink-300 transition-colors duration-200 font-medium"
                  >
                    View All Micro SaaS →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h5>
                <ul className="space-y-2">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.url}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={link.name}
                    >
                      <Users className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="text-gray-400 text-sm">
                Built with ❤️ for the future of technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;