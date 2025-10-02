import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-3e47

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/ZionClouds" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link to="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link to="/services/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">All Solutions</Link></li>
              <li><Link to="/solutions/enterprise" className="text-gray-400 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/solutions/smb" className="text-gray-400 hover:text-white transition-colors">SMB</Link></li>
              <li><Link to="/solutions/startup" className="text-gray-400 hover:text-white transition-colors">Startup</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;