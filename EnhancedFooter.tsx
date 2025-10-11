import React from 'react'
import { Linkedin, Twitter, Github, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">Z</span>
              <div className="text-xl font-bold ml-2">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</a></li>
              <li><a href="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/cloud-infrastructure" className="text-gray-300 hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default EnhancedFooter