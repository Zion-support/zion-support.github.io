import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮" }
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/ai-business-solutions" },
        { label: "Cloud Infrastructure", path: "/cloud-infrastructure" },
        { label: "Cybersecurity", path: "/cybersecurity-suite" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Quantum Technology", path: "/quantum-technology" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "FAQ", path: "/faq" },
        { label: "Support", path: "/contact" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-zion-slate pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📧</div>
              <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📞</div>
              <p className="text-gray-300 text-sm">+1 302 464 0950</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📍</div>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">🌐</div>
              <p className="text-gray-300 text-sm">ziontechgroup.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-slate pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};
