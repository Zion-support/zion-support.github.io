import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
<<<<<<< HEAD
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
=======
      title: 'AI Solutions',
      links: [
        { name: 'Advanced AI Systems', href: '/pages/AdvancedAISystems2026' },
        { name: 'AI Revolution 2025', href: '/pages/AIRevolution2025' },
        { name: 'AI Services', href: '/pages/AIServicesPage' },
        { name: 'AI Content Generator', href: '/pages/AIContentGenerator' },
        { name: 'AI Matcher', href: '/pages/AIMatcher' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'Space Technology', href: '/pages/SpaceTechAI2025' },
        { name: 'Biotech Revolution', href: '/pages/BiotechAIRevolution2025' },
        { name: 'Quantum Computing', href: '/pages/QuantumComputingRevolution2026' },
        { name: 'Neural Interfaces', href: '/pages/NeuralInterfaceRevolution2026' },
        { name: 'Synthetic Intelligence', href: '/pages/SyntheticIntelligence2026' }
      ]
    },
    {
      title: 'Innovation',
      links: [
        { name: 'Innovation Hub', href: '/pages/InnovationLanding2025' },
        { name: 'Tech Insights', href: '/pages/ComprehensiveTechInsights2026' },
        { name: 'Revolutionary Blog', href: '/pages/RevolutionaryTechBlog2026' },
        { name: 'Next-Gen Showcase', href: '/pages/NextGenTechShowcase2026' },
        { name: 'AI Innovation Hub', href: '/pages/AIInnovationHub2026' }
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b
      ]
    },
    {
      title: 'Company',
      links: [
<<<<<<< HEAD
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
=======
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/pages/ComprehensiveServices2025' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b
      ]
    }
  ];

<<<<<<< HEAD
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
=======
  return (
    <footer className="bg-gray-900 text-white">
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
<<<<<<< HEAD
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
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
=======
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the future of technology with AI, blockchain, and innovative solutions that transform industries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
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
=======
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
>>>>>>> fc5ca5605aafb4e3a74b00ffea0b9cd62b49662b
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;