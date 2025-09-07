
import React from 'react';'''
import { Link } from 'react-router-dom';''
import React from 'react';'
import { Link } from 'react-router-dom';'
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,'
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-background border-t">"
      <div className="container mx-auto px-4 py-8">"
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
          <div className="space-y-4">"
            <h3 className="text-lg font-semibold">Company</h3>"
            <ul className="space-y-2">"
              <li><Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link></li>"
              <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>"
              <li><a href="#careers" className="text-foreground/80 hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
"
          <div className="space-y-4">"
            <h3 className="text-lg font-semibold">Services</h3>"
            <ul className="space-y-2">"
              <li><Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link></li>"
              <li><Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
"
          <div className="space-y-4">"
            <h3 className="text-lg font-semibold">Support</h3>"
            <ul className="space-y-2">"
              <li><a href="#help" className="text-foreground/80 hover:text-primary transition-colors">Help Center</a></li>"
              <li><a href="#docs" className="text-foreground/80 hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
"
          <div className="space-y-4">"
            <h3 className="text-lg font-semibold">Connect</h3>"
            <div className="flex space-x-4">"
              <a href="https://twitter.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Twitter">"
                <Twitter className="h-5 w-5" />
              </a>"
              <a href="https://linkedin.com/company/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="LinkedIn">"
                <Linkedin className="h-5 w-5" />
              </a>"
              <a href="https://facebook.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Facebook">"
                <Facebook className="h-5 w-5" />
              </a>"
              <a href="https://instagram.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="Instagram">"
                <Instagram className="h-5 w-5" />
              </a>"
              <a href="https://github.com/ziontechgroup" className="text-foreground/80 hover:text-primary transition-colors" aria-label="GitHub">"
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
"
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">"
          <div className="text-foreground/60 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}"
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer mt-4 md:mt-0""
            aria-label="Back to top"
          >"
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>Back to Top</span>
          </button>
const Footer: React.FC = () => {'
  return ('"
    <footer className="bg-slate-900 text-gray-300">""
</footer>""
      <div className="container mx-auto px-4 py-12">""
</div>""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">""
</div>""
          <div className="col-span-1 md:col-span-2">""
</div>""
            <div className="flex items-center space-x-2 mb-4">""
</div>""
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">""
</div>""
                <span className="text-white font-bold text-lg">Z</span>""
              </div>""
              <span className="text-xl font-bold text-white">Zion Tech Group</span>""
            </div>""
            <p className="text-gray-400 mb-4 max-w-md">"
</p>"
            </p>""
            <div className="flex space-x-4">""
</div>""
              <a href="#" className="text-gray-400 hover:text-white transition-colors">""
</a>""
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">""
</svg>""
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>"
</path>
                </svg>"
              </a>""
              <a href="#" className="text-gray-400 hover:text-white transition-colors">""
</a>""
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">""
</svg>""
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>"
</path>
                </svg>"
              </a>""
              <a href="#" className="text-gray-400 hover:text-white transition-colors">""
</a>""
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">""
</svg>""
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>"
</path>
                </svg>
              </a>
            </div>
          </div>
          <div>"
</div>""
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>"""
            <ul className="space-y-2">""
</ul>""
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>"""
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>"""
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>"""
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>"
            </ul>
          </div>
          <div>"
</div>""
            <h3 className="text-white font-semibold mb-4">Services</h3>"""
            <ul className="space-y-2">""
</ul>""
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>"""
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>"""
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>"""
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>"
            </ul>
          </div>
        </div>"
""
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">""
</div>""
          <p className="text-gray-400">"
</p>
          </p>
        </div>
      </div>"
    </footer>)"
    </footer>
  );
}
};
export default Footer;
'"

