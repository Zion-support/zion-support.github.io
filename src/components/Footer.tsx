import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Globe } from 'lucide-react';

const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { label: 'Enterprise Solutions', path: '/solutions/enterprise' },
        { label: 'SMB Solutions', path: '/solutions/smb' },
        { label: 'Startup Solutions', path: '/solutions/startup' },
        { label: 'Government Solutions', path: '/solutions/government' },
        { label: 'Healthcare Solutions', path: '/solutions/healthcare' },
        { label: 'Financial Solutions', path: '/solutions/financial' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
        { label: 'AI Virtual Assistant', path: '/services/ai-virtual-assistant' },
        { label: 'AI Data Analytics', path: '/services/ai-data-analytics' },
        { label: 'Intelligent Document Processing', path: '/services/ai-intelligent-document-processing' },
        { label: 'Real-Time Cognitive Automation', path: '/services/real-time-cognitive-automation' },
        { label: 'Advanced Cybersecurity AI', path: '/services/advanced-cybersecurity-ai' },
        { label: 'Cloud & DevOps', path: '/cloud-devops' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Resources Hub', path: '/resources' },
        { label: 'Blog', path: '/blog' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Team', path: '/team' },
        { label: 'Partners', path: '/partners' },
      ]
    }
  ];

  const quickActions = [
    { label: 'View Pricing', path: '/pricing' },
    { label: 'Schedule Demo', path: '/demo' },
    { label: 'Get Support', path: '/support' },
    { label: 'Request Quote', path: '/request-quote' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Cookie Policy', path: '/cookies' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/ZionClouds', label: 'GitHub' },
    { icon: Globe, href: 'https://ziontechgroup.com', label: 'Website' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Leading provider of cutting-edge AI and IT solutions that transform businesses. 
              We deliver innovative technology solutions to help organizations thrive in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-4 w-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-4 w-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-4 w-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="text-slate-400 text-sm font-medium">Quick Actions:</span>
              {quickActions.map((action) => (
                <Link
                  key={action.path}
                  to={action.path}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  {action.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2 md:mt-0">
              Built with cutting-edge AI and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;

