import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
ursor/automate-test-fix-improve-and-merge-code-99d1
              </li>
              <li>
                <Link href="/services/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/ai-ops-copilot" className="text-gray-300 hover:text-white transition-colors">
                  AI Ops Copilot
                </Link>
              </li>
              <li>
                <Link href="/services/security-copilot" className="text-gray-300 hover:text-white transition-colors">
                  Security Copilot
                </Link>
              </li>
              <li>
                <Link href="/services/data-platform" className="text-gray-300 hover:text-white transition-colors">
                  Data Platform
                </Link>
              </li>
              <li>
                <Link href="/services/martech-automation" className="text-gray-300 hover:text-white transition-colors">
                  MarTech Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
ursor/automate-test-fix-improve-and-merge-code-99d1
              </li>
              <li>
                <Link href="/solutions/small-business" className="text-gray-300 hover:text-white transition-colors">
                  Small Business
                </Link>
              </li>
              <li>
                <Link href="/solutions/startups" className="text-gray-300 hover:text-white transition-colors">
                  Startups
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
ursor/automate-test-fix-improve-and-merge-code-99d1
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">
                  123 Tech Street, Innovation District<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
ursor/automate-test-fix-improve-and-merge-code-99d1
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
ursor/automate-test-fix-improve-and-merge-code-99d1
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;