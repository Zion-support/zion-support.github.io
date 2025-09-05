import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {_const _currentYear = new Date().getFullYear();

  const _footerSections = [
    {
      title: 'Services', _links: [
        { name: 'AI Business Intelligence', _href: '/ai-business-intelligence'},
        {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity'},
        {_name: 'Edge Computing', _href: '/edge-computing-orchestration'},
        {_name: 'Space Technology', _href: '/space-technology'},
        {_name: 'View All Services', _href: '/comprehensive-2025-services-showcase'}
      ]
    },
    {_title: 'Company', _links: [
        { name: 'About Us', _href: '/about'},
        {_name: 'Our Work', _href: '/portfolio'},
        {_name: 'Blog & Insights', _href: '/blog'},
        {_name: 'Careers', _href: '/careers'},
        {_name: 'Contact', _href: '/contact'}
      ]
    },
    {_title: 'Resources', _links: [
        { name: 'Documentation', _href: '/docs'},
        {_name: 'API Reference', _href: '/api'},
        {_name: 'Support Center', _href: '/support'},
        {_name: 'Privacy Policy', _href: '/privacy'},
        {_name: 'Terms of Service', _href: '/terms'}
      ]
    }
  ];

  const _socialLinks = [
    {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Github},
    {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin},
    {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter}
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {_/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {_/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Leading-edge technology solutions and autonomous innovation platform. 
              Empowering businesses with cutting-edge AI, quantum computing, and digital transformation.
            </p>
            
            {_/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {_/* Footer Sections */}
          {_footerSections.map(_(section) => (_<div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{_section.title}</h3>
              <ul className="space-y-2">
                {_section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {_link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {_/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {_/* Copyright */}
            <div className="text-white/60 text-sm">
              © {_currentYear} Zion Tech Group. All rights reserved.
            </div>

            {_/* Social Links */}
            <div className="flex items-center space-x-4">
              {_socialLinks.map(_(social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                  aria-label={_social.name}
                >
                  <social.icon className="w-5 h-5" />
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
