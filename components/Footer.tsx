import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'All Services', href: '/services' },
      { name: 'AI Services', href: '/services/ai-services' },
      { name: 'Micro SaaS', href: '/services/micro-saas' },
      { name: 'IT Services', href: '/services/it-services' },
      { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler' },
      { name: 'AI Email Marketing Automation', href: '/services/ai-email-marketing-automation' },
      { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
      { name: 'AIOps Platform', href: '/services/it-services/aiops-platform' },
      { name: 'Cloud-Native DevOps Platform', href: '/services/it-services/cloud-native-devops-platform' },
      { name: 'AI Content Optimization', href: '/services/ai-content-optimization-platform' },
      { name: 'AI Lead Scoring API', href: '/services/ai-lead-scoring-api' },
      { name: 'AI Cybersecurity Automation', href: '/services/ai-cybersecurity-automation-suite' },
    ],
    solutions: [
      { name: 'All Solutions', href: '/solutions' },
      { name: 'Enterprise Solutions', href: '/enterprise' },
      { name: 'Innovative IT Solutions', href: '/innovative-it-solutions' },
      { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions' },
      { name: 'Healthcare Technology', href: '/services/healthcare-technology-solutions' },
      { name: 'FinTech Solutions', href: '/services/financial-technology-solutions' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce-technology-solutions' },
      { name: 'Manufacturing AI', href: '/services/manufacturing-ai-platform' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Support', href: '/support' },
      { name: 'Partners', href: '/partners' },
      { name: 'Portfolio', href: '/portfolio' },
    ],
    resources: [
      { name: 'All Resources', href: '/resources' },
      { name: 'Guides', href: '/guides' },
      { name: 'Content Hub', href: '/content-hub' },
      { name: 'Enhanced Services Catalog', href: '/enhanced-services-catalog' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Sitemap', href: '/sitemap' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionary AI breakthroughs delivering 1000x performance gains, 95% automation, 
              and $150M+ ROI for Fortune 500 companies worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest technology insights and industry updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};