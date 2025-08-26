import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise. 
              We help businesses thrive in the digital age through cutting-edge innovation and proven methodologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Visit our LinkedIn page"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Visit our X (Twitter) page"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Visit our GitHub page"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@ziontechgroup.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Send us an email"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/quantum-technology" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Quantum Technology
                </Link>
              </li>
              <li>
                <Link to="/green-it" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Green IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/research-development" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  R&D
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/white-papers" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  White Papers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest insights on technology trends and business innovation.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;