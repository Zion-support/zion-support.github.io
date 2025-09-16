import React from 'react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
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
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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
=======
        { name: 'Tech Blog', path: '/pages/RevolutionaryTechBlog2026' },
        { name: 'Tech Insights', path: '/pages/ComprehensiveTechInsights2026' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Research', path: '/research' },
        { name: 'Pricing', path: '/pricing' }
>>>>>>> cursor/create-and-deploy-new-content-d7eb
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
      ]
    },
    {
      title: 'Company',
      links: [
<<<<<<< HEAD
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/pages/ComprehensiveServices2025' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' }
=======
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
<<<<<<< HEAD
        { name: 'Privacy Policy', path: '/privacy' }
=======
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
>>>>>>> cursor/create-and-deploy-new-content-d7eb
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
      ]
    }
  ];

<<<<<<< HEAD
  return (
    <footer className="bg-gray-900 text-white">
=======
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
    { name: 'GitHub', href: '#', icon: 'M9 19c-5 5-5 5-10 0s-5-5 0-10 5-5 10 0 5 5 0 10 0 0-5-5-10 0z' },
    { name: 'YouTube', href: '#', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
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
=======
      {/* Main Footer Content */}
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
<<<<<<< HEAD
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
=======
              <span className="text-3xl">🚀</span>
              <span className="text-2xl font-bold">Zion Tech Group</span>
>>>>>>> cursor/create-and-deploy-new-content-d7eb
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of technology with revolutionary AI, quantum computing, and next-generation solutions 
              that transform industries and shape tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400">
=======
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest insights on revolutionary technology and AI breakthroughs.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
<<<<<<< HEAD
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
=======
            <div className="flex space-x-6 mt-4 md:mt-0">
<<<<<<< HEAD
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
=======
              <span className="text-gray-400 text-sm">🌍 English (US)</span>
              <span className="text-gray-400 text-sm">🔒 Secure</span>
              <span className="text-gray-400 text-sm">⚡ Fast</span>
>>>>>>> cursor/create-and-deploy-new-content-d7eb
>>>>>>> origin/cursor/create-and-deploy-new-content-6eae
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;