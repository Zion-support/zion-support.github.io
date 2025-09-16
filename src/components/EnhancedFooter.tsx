import React from 'react';
import { Link } from 'react-router-dom';

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
        { name: 'Tech Insights 2026', path: '/pages/ComprehensiveTechInsights2026' },
        { name: 'Revolutionary Blog', path: '/pages/RevolutionaryTechBlog2026' },
        { name: 'AI Transformation', path: '/pages/AdvancedAITransformation2026' },
        { name: 'Next-Gen Showcase', path: '/pages/NextGenTechShowcase2026' },
        { name: 'Ultimate Revolution', path: '/pages/UltimateTechRevolution2026' },
        { name: 'Revolutionary AI', path: '/pages/RevolutionaryAIBreakthrough2026' }
      ]
    },
    {
      title: 'Future Technologies',
      links: [
        { name: 'Advanced AI 2027', path: '/pages/AdvancedAIRevolution2027' },
        { name: 'Quantum Reality 2028', path: '/pages/QuantumRealityManipulation2028' },
        { name: 'Transcendent Consciousness 2029', path: '/pages/TranscendentConsciousness2029' },
        { name: 'Universal Tech 2030', path: '/pages/UniversalTechMastery2030' },
        { name: 'Ultimate Tech 2033', path: '/pages/UltimateTechRevolution2033' },
        { name: 'Transcendent AI 2033', path: '/pages/TranscendentAI2033' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
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
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'GitHub', href: '#', icon: 'M9 19c-5 5-5 5-10 0s-5-5 0-10 5-5 10 0 5 5 0 10 0 0-5-5-10 0z' },
    { name: 'YouTube', href: '#', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <h3 className="text-2xl font-bold">Zion Tech Group</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the future of technology with revolutionary AI, quantum computing, and neural interfaces. 
              We're building the next generation of intelligent systems that will transform how we live, work, and interact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Updated with Revolutionary Tech</h4>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;