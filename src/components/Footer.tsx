import React from 'react';''
import React from 'react';'
import Link from 'next/link';''
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
'
  const scrollToTop = () => {;''
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white"></footer>""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>""
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
          {/* Company Info */}""
          <div className="space-y-4"></div>""
            <div className="flex items-center space-x-2"></div>""
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center"></div>""
                <Globe className="w-5 h-5 text-white" /></Globe>"
              </div>""
              <span className="text-xl font-bold"></spa>Zion Tech Group</span>"
            </div>""
            <p className="text-gray-400 text-sm"></p>
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age."
            </p>""
            <div className="flex space-x-4"></div>""
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>""
                <Linkedin className="w-5 h-5" /></Linkedin>"
              </a>""
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>""
                <Twitter className="w-5 h-5" /></Twitter>"
              </a>""
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>""
                <Facebook className="w-5 h-5" /></Facebook>"
              </a>""
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>""
                <Instagram className="w-5 h-5" /></Instagram>
              </a>
            </div>
          </div>
"
          {/* Services */}""
          <div className="space-y-4"></div>""
            <h3 className="text-lg font-semibold"></h>Services</h3>""
            <ul className="space-y-2"></ul>""
              <li></l><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>AI Services</Link></li>""
              <li></l><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>IT Services</Link></li>""
              <li></l><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>Micro SaaS</Link></li>""
              <li></l><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>Solutions</Link></li>
            </ul>
          </div>
"
          {/* Company */}""
          <div className="space-y-4"></div>""
            <h3 className="text-lg font-semibold"></h>Company</h3>""
            <ul className="space-y-2"></ul>""
              <li></l><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>About Us</Link></li>""
              <li></l><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>Careers</Link></li>""
              <li></l><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>Blog</Link></li>""
              <li></l><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Lin>Partners</Link></li>
            </ul>
          </div>
"
          {/* Contact */}""
          <div className="space-y-4"></div>""
            <h3 className="text-lg font-semibold"></h>Contact</h3>""
            <div className="space-y-3"></div>""
              <div className="flex items-center space-x-3"></div>""
                <Phone className="w-4 h-4 text-cyan-400" /></Phone>""
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></a>
                  +1 302 464 0950
                </a>"
              </div>""
              <div className="flex items-center space-x-3"></div>""
                <Mail className="w-4 h-4 text-cyan-400" /></Mail>""
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></a>
                  kleber@ziontechgroup.com
                </a>"
              </div>""
              <div className="flex items-start space-x-3"></div>""
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" /></MapPin>""
                <span className="text-gray-400 text-sm"></span>
                  364 E Main St STE 1008<br /></br>
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
"
        {/* Bottom Section */}""
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"></div>""
          <div className="text-gray-400 text-sm"></div>
            © {currentYear} Zion Tech Group. All rights reserved."
          </div>""
          <div className="flex space-x-6 mt-4 md:mt-0"></div>""
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Link>
              Privacy Policy"
            </Link>""
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Link>
              Terms of Service"
            </Link>""
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"></Link>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button"
        onClick={scrollToTop}""
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"""
        aria-label="Scroll to top""
      ></button>""
        <ArrowUp className="w-5 h-5" /></ArrowUp>
      </button>
    </footer>
  );
}'"
'"'"