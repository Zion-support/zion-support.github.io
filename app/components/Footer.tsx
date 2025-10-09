'use client';
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone',
      });
    }
  };

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'Advanced AI solutions' },
    { name: 'Micro SAAS', href: '/micro-saas', description: '50+ Ready-to-use apps' },
    { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', href: '/ai-fintech', description: 'Financial AI services' },
    { name: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen computing' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale implementations' },
    { name: 'Cloud Services', href: '/cloud-services', description: 'Cloud infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions' },
    { name: 'Data Analytics', href: '/business-intelligence', description: 'Business intelligence' },
    { name: 'DevOps', href: '/devops', description: 'Development operations' },
    { name: 'Blockchain', href: '/blockchain', description: 'Blockchain solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Team', href: '/team', description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'News', href: '/news', description: 'Latest updates' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', description: 'API and guides' },
    { name: 'Blog', href: '/blog', description: 'Insights and trends' },
    { name: 'Support', href: '/support', description: 'Get help' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
    { name: 'Status', href: '/status', description: 'System status' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'SLA', href: '/sla' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-400/20 cyber-grid">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center cyber-glow group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl cyber-text">Zion Tech Group</div>
                <div className="text-cyan-400 text-sm">AI & IT Solutions</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="text-white font-semibold mb-3">Follow Us</div>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 hover:scale-110 transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 hover:scale-110 transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 neon-text">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 neon-text">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    href={solution.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">
                        {solution.name}
                      </div>
                      <div className="text-sm text-gray-400">{solution.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 neon-text">Company</h3>
            <ul className="space-y-3 mb-8">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-lg mb-6 neon-text">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <div>
                      <div className="font-medium group-hover:text-cyan-400 transition-colors">
                        {resource.name}
                      </div>
                      <div className="text-sm text-gray-400">{resource.description}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-2xl mb-4 neon-text">
              Stay Updated with AI & IT Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights, updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-sm"
              />
              <button className="cyber-button px-6 py-3 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;