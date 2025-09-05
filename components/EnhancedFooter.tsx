import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Edge Computing', href: '/edge-computing-orchestration' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'View All Services', href: '/comprehensive-2025-services-showcase' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
  ];

  return (
    <footer className=&quot;bg-slate-950 border-t border-white/10&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 py-16&quot;>
        {/* Main Footer Content */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-2&quot;>
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center&quot;>
                <Brain className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <span className=&quot;text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </span>
            </div>
            <p className=&quot;text-white/70 mb-6 max-w-md&quot;>
              Leading-edge technology solutions and autonomous innovation platform. 
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className=&quot;space-y-3&quot;>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;hover:text-white transition-colors&quot;>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <a href=&quot;tel:+13024640950&quot; className=&quot;hover:text-white transition-colors&quot;>
                  +1 (302) 464-0950
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-white/70&quot;>
                <MapPin className=&quot;w-4 h-4&quot; />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className=&quot;text-white font-semibold mb-4&quot;>{section.title}</h3>
              <ul className=&quot;space-y-2&quot;>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-white/70 hover:text-white transition-colors duration-200&quot;
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className=&quot;pt-8 border-t border-white/10&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&quot;>
            {/* Copyright */}
            <div className=&quot;text-white/60 text-sm&quot;>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className=&quot;flex items-center space-x-4&quot;>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className=&quot;w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200&quot;
                  aria-label={social.name}
                >
                  <social.icon className=&quot;w-5 h-5&quot; />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
