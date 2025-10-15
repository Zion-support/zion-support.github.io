import React from 'react';
import { Zap, Phone, Mail, MapPin, ArrowRight, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Solutions',
      services: [
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard-pro' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite-pro' },
        { name: 'AI Customer Insights', href: '/ai-customer-insights' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence-pro' },
        { name: 'AI Automation Platform', href: '/ai-automation-platform' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'System Integration', href: '/it-solutions' },
        { name: 'Technical Support', href: '/support' },
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'Business Automation', href: '/micro-saas-solutions' },
        { name: 'Analytics Tools', href: '/ai-analytics' },
        { name: 'Content Management', href: '/ai-content-management' },
        { name: 'Customer Support', href: '/ai-customer-support' },
        { name: 'Workflow Optimization', href: '/ai-automation' },
        { name: 'Data Visualization', href: '/ai-data-analytics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold futuristic-text">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of cutting-edge AI solutions, comprehensive IT services, 
              and innovative micro SAAS applications that transform businesses and drive growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 text-white">{category.title}</h4>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company & Support Links */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-700">
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 futuristic-text">Stay Updated</h3>
          <p className="text-gray-300 mb-8">
            Get the latest updates on our AI solutions, IT services, and micro SAAS offerings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
