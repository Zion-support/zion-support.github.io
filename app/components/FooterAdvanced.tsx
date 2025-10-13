import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap, 
  Cloud, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  Brain,
  Settings,
  BarChart3,
  Users,
  FileText,
  Target,
  Lock,
  Cpu,
  HardDrive,
  Network,
  Monitor,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

const FooterAdvanced = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Analytics Pro', path: '/ai-analytics' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Marketing Automation', path: '/ai-marketing' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
    { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
    { name: 'AI Data Processing', path: '/ai-data-analytics' },
    { name: 'AI Computer Vision', path: '/ai-computer-vision' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
    { name: 'DevOps Solutions', path: '/devops-solutions' },
    { name: 'Data Analytics', path: '/data-analytics' }
  ];

  const microSAASServices = [
    { name: 'Zion AI Analytics Pro', path: '/zion-ai-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' },
    { name: 'Zion Email Automation', path: '/zion-email-automation' },
    { name: 'Zion Project Master', path: '/zion-project-master' },
    { name: 'Zion Social Scheduler', path: '/zion-social-scheduler' },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  const supportLinks = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api-docs' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Support Center', path: '/support' },
    { name: 'Status Page', path: '/status' },
    { name: 'Community', path: '/community' },
    { name: 'Help Center', path: '/help' },
    { name: 'Contact Support', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/ziontechgroup' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg mr-3 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold cyber-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
              Transform your operations with cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                <span className="text-sm">Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/ai-services-comprehensive"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-4"
            >
              View All AI Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/it-services-comprehensive"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-4"
            >
              View All IT Services
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>

          {/* Micro SAAS & Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSAASServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/micro-saas-services"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm mt-4"
            >
              View All Micro SAAS
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI innovations, IT solutions, and technology trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {companyLinks.slice(4).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAdvanced;