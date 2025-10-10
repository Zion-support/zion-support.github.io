import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Globe,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Advanced data visualization' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'AI document processing' },
    { name: 'AI Mobile Apps', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
    { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
  ];

  const itServices = [
    { name: 'Cloud Services', url: '/cloud-services', description: 'Scalable cloud infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated deployment pipelines' },
    { name: 'Database Services', url: '/database-services', description: 'Data management solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network design and management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' },
    { name: 'Managed IT Services', url: '/managed-it', description: 'Complete IT management' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud transitions' },
    { name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance solutions' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Development productivity tools' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Digital marketing solutions' },
    { name: 'Productivity Solutions', url: '/productivity', description: 'Business productivity tools' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Press', url: '/press' },
    { name: 'Partners', url: '/partners' },
    { name: 'Investors', url: '/investors' }
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/help' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' },
    { name: 'Status', url: '/status' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'System Requirements', url: '/requirements' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'SLA', url: '/sla' },
    { name: 'Licenses', url: '/licenses' },
    { name: 'Accessibility', url: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h4>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/ai-services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4 font-medium"
            >
              View All AI Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h4>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/it-services"
              className="inline-flex items-center text-purple-400 hover:text-white transition-colors mt-4 font-medium"
            >
              View All IT Services
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 mt-8 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-orange-400" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest AI & IT Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
              <button className="futuristic-btn px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;