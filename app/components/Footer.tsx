import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="l g: col-span-2">
            <Link to="/" className="flexitems-centerspace-x-3mb-6group">
              <div className="w -1 2 h-12 bg-gradient-to-r from-purple-500 to-cyan-500rounded-lgflexitems-centerjustify-centergroup-hover:scale-110transition-transformcyber-glow">
                <span className="text-whitefont-boldtext-xl">Z</span>
                </div>
        </div>
              <span className="text-xlfont-bold text-whitegroup-hover:text-purple-400transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400mb-6max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3mb-6">
              <div className="flexitems-centerspace-x-3text-gray-300">
                <PhoneIcon className="w -5h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <EnvelopeIcon className="w -5h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <MapPinIcon className="w -5h-5 text-purple-400" />
                <span>3 6 4 E Main St STE 1 0 0 8, Middletown, DE 19 7 0 9</span>
                </div>
        </div>
              </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@ziontech.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
        </div>
          <div className="flexspace-x-6">
            <Link to="/privacy" className="text-gray-400hover:text-whitetransition-colorstext-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400hover:text-whitetransition-colorstext-sm">Terms of Service</Link>
            </div>
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  )
export default Footer;;
