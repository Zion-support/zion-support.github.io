import React from 'react'
import { Link } from 'react-router-dom'
import {



              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
            <p>
          
              Leading provider of advanced A I and I T solutions, cybersecurity, cloud infrastructure
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
  )
            <div className="space-y-3 mb-6">
        
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Phone Icon className="w-5 h-5 text-purple-400" />
                <span>+1-30 2-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Envelope Icon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
        
                <Map Pin Icon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St ST E 1008, Middletown, D E 19709</span>
              </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
  )
                  href={social.href}
  )
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}>
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'github' && '🐙'}
                </a>
              ))}
  )
            </div>

          {/* Services */}
  )
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
  )
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

          {/* Company */}
  )
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
  )
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

        {/* Bottom Section */}
  )
        <div className="border-t border-slate-700 mt-12 pt-8">
        
          <div className="flex flex-col md:flex-row justify-between items-center">
        
            <div className="flex items-center space-x-4 text-gray-400 mb-4 md:mb-0">
        
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
        
                <span>Made with</span>
                <Heart Icon className="w-4 h-4 text-red-500" />
                <span>for innovation</span>
              </div>
            
            <div className="flex flex-wrap gap-4">
        
              {legal.map((item) => (
                <Link
                  key={item.name}
  )
                  to={item.href}
  )
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
  )
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stay Updated</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-400" />
            <span>by Zion Tech Group</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
  )
export default Footer;;
