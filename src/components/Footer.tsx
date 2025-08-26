import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.033 0-1.191.805-1.191 2.951v5.665H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-autonomous-research-assistant" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Research Assistant
                </Link>
              </li>
              <li>
                <Link to="/ai-autonomous-business-operations" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Business Operations
                </Link>
              </li>
              <li>
                <Link to="/ai-powered-it-asset-management" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  IT Asset Management
                </Link>
              </li>
              <li>
                <Link to="/quantum-neural-network-platform" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Quantum Neural Networks
                </Link>
              </li>
              <li>
                <Link to="/autonomous-business-operations-platform" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Autonomous Platform
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialized Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specialized Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/accessibility-auditor" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Accessibility Auditor
                </Link>
              </li>
              <li>
                <Link to="/advanced-cybersecurity-suite" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Cybersecurity Suite
                </Link>
              </li>
              <li>
                <Link to="/affiliate-attribution-hub" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Affiliate Attribution
                </Link>
              </li>
              <li>
                <Link to="/soc2-compliance-automation" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  SOC2 Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company & Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Support & Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/help-center" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/tutorials" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Events & Content</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/events" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/webinars" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link to="/white-papers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Research & Development</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/research-development" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    R&D
                  </Link>
                </li>
                <li>
                  <Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Micro SAAS
                  </Link>
                </li>
                <li>
                  <Link to="/quantum-services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Quantum Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link to="/space-tech" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Space Tech
                  </Link>
                </li>
                <li>
                  <Link to="/green-it" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                    Green IT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;