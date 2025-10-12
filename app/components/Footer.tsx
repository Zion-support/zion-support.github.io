import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="b g"-slate-900text-white >
      <div className="m a"" x-w-7xl mx-auto px-4 py-12">
        <div className="g r"idmd:grid-cols-4 gap-8 >
          <div>
            <h3 className="t e"" xt-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="t e"xt-gray-300mb-4 >
              Leading the future of AI and IT solutions for businesses worldwide.
            </p>
            <div className="f l"" ex space-x-4">
              <a href="#"className="t e"" xt-gray-400 hover:text-white transition-colors >
                <span className="s r"-only">Twitter</span><svg className="h-6w-6f i"ll= currentColor" viewBox="00 24 24 >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href= #" className="t e"xt-gray-400hover:text-white transition-colors >
                <span className="s r"" -only">LinkedIn</span>
                <svg className="h-6w-6f i"ll=currentColor viewBox="0 0 24 24"><path d= M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="t e"xt-lgfont-semibold mb-4 >Services</h3>
            <ul className="s p"" ace-y-2">
              <li><Link to="/ai-services"className="t e"" xt-gray-300 hover:text-white transition-colors >AI Services</Link></li>
              <li><Link to="/it-services"className="t e"" xt-gray-300 hover:text-white transition-colors >IT Services</Link></li>
              <li><Link to="/cloud-migration"className="t e"" xt-gray-300 hover:text-white transition-colors >Cloud Migration</Link></li>
              <li><Link to="/cybersecurity"className="t e"" xt-gray-300 hover:text-white transition-colors >Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="t e"xt-lg font-semibold mb-4">Company</h3><ul className="s p"" ace-y-2 >
              <li><Link to="/about"className="t e"" xt-gray-300 hover:text-white transition-colors >About Us</Link></li>
              <li><Link to="/careers"className="t e"" xt-gray-300 hover:text-white transition-colors >Careers</Link></li>
              <li><Link to="/contact"className="t e"" xt-gray-300 hover:text-white transition-colors >Contact</Link></li>
              <li><Link to="/blog"className="t e"" xt-gray-300 hover:text-white transition-colors >Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="t e"xt-lg font-semibold mb-4">ContactInfo</h3>
            <div className="s p"" ace-y-2 >
              <div className="f l"ex items-center"><Mail className="h-4w-4m r -2 t e"xt-gray-400 />
                <span className="t e"xt-gray-300">contact@ziontechgroup.com</span></div>
              <div className="f l"" ex items-center >
                <Phone className="h-4w-4m r" -2 t ext-gray-400"/>
                <span className="t e"" xt-gray-300 >+1 (555) 123-4567</span>
              </div>
              <div className="f l"ex items-center"><MapPin className="h-4w-4m r -2 t e"xt-gray-400 />
                <span className="t e"xt-gray-300">NewYork, NY</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="b o"" rder-t border-gray-700 mt-8 pt-8 text-center >
          <p className="t e"xt-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}