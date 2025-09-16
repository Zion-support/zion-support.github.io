import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Technology Solutions',
      links: [
        { name: 'AI Revolution', path: '/pages/AIRevolutionaryBreakthrough2026' },
        { name: 'Quantum Computing', path: '/pages/QuantumComputingRevolution2026' },
        { name: 'Neural Interfaces', path: '/pages/NeuralInterfaceRevolution2026' },
        { name: 'Biotech Revolution', path: '/pages/AdvancedBiotechRevolution2026' },
        { name: 'Space Technology', path: '/pages/SpaceTechInnovation2026' },
        { name: 'Advanced Robotics', path: '/pages/AdvancedRobotics2026' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Tech Blog', path: '/pages/RevolutionaryTechBlog2026' },
        { name: 'Tech Insights', path: '/pages/ComprehensiveTechInsights2026' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Research', path: '/research' },
        { name: 'Pricing', path: '/pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Careers', path: '/careers' },
        { name: 'News', path: '/news' },
        { name: 'Partners', path: '/partners' },
        { name: 'Investors', path: '/investors' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Security', path: '/security' },
        { name: 'Compliance', path: '/compliance' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'Discord', href: '#', icon: '💬' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🚀</span>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading the future of technology with revolutionary AI, quantum computing, 
              neural interfaces, and cutting-edge innovations that transform industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated with Tech Revolution</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest insights on AI, quantum computing, and breakthrough technologies.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🌍 English (US)</span>
              <span className="text-gray-400 text-sm">🔒 Secure</span>
              <span className="text-gray-400 text-sm">⚡ Fast</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;