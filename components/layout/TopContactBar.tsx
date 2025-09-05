import React, { useState } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe,
  Clock, ChevronDown, ChevronUp,
  MessageCircle, Calendar, Star
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
  rating: '4.9/5 (200+ Reviews)'
},

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
],];

export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false),
  return (
    <div className=&quot;relative z-40&quot;>
      {/* Main Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-12&quot;>
            {/* Left Side - Contact Info */}
            <div className=&quot;hidden md:flex items-center space-x-6 text-sm&quot;>
              {/* Phone */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <Phone className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.mobile}
                </a>;
              </div>;
;
              {/* Email */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <Mail className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.email}
                </a>;
              </div>;
;
              {/* Address */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <MapPin className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <span className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.address}
                </span>;
              </div>;
;
              {/* Website */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <Globe className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <a href={contactInfo.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.website.replace('https://', '')}                </a>
              </div>
            </div>

            {/* Center - Business Hours & Rating */}
            <div className=&quot;hidden lg:flex items-center space-x-6 text-sm&quot;>
              {/* Business Hours */}
              <div className=&quot;flex items-center space-x-2 text-gray-300&quot;>
                <Clock className=&quot;w-4 h-4 text-cyan-400&quot; />
                <span>{contactInfo.hours}</span>
              </div>

              {/* Rating */}
              <div className=&quot;flex items-center space-x-2 text-gray-300&quot;>
                <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                <span>{contactInfo.rating}</span>
              </div>
            </div>

            {/* Right Side - Quick Actions & Expand Button */}
            <div className=&quot;flex items-center space-x-4&quot;>
              {/* Quick Actions */}
              <div className=&quot;hidden sm:flex items-center space-x-2&quot;>
                {quickActions.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className=&quot;flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30&quot;                  >
                    {_action.icon}
                    <span>{_action.name}</span>
                  </a>
                ))}
              </div>

              {_/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className=&quot;flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className=&quot;w-4 h-4&quot; />                ) : (
                  <ChevronDown className=&quot;w-4 h-4&quot; />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {_/* Expanded Information Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden&quot;
          >
            <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
                {/* Contact Details */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                    <Phone className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span>Contact Details</span>
                  </h3>
                  <div className=&quot;space-y-3&quot;>
                    <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className=&quot;flex items-start space-x-3 text-gray-300&quot;>
                      <MapPin className=&quot;w-4 h-4 text-cyan-400 mt-1&quot; />
                      <span className=&quot;text-sm&quot;>{contactInfo.address}</span>                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                    <Clock className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span>Business Info</span>
                  </h3>
                  <div className=&quot;space-y-3&quot;>
                    <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <Clock className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <span>{contactInfo.hours}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <Star className=&quot;w-4 h-4 text-yellow-400 fill-current&quot; />
                      <span>{contactInfo.rating}</span>
                    </div>
                    <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <Globe className=&quot;w-4 h-4 text-cyan-400&quot; />
                      <a href={contactInfo.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                    <MessageCircle className=&quot;w-5 h-5 text-cyan-400&quot; />
                    <span>Quick Actions</span>
                  </h3>
                  <div className=&quot;space-y-3&quot;>
                    {quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={action.href}
                        className=&quot;flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 group&quot;
                      >
                        <div className=&quot;text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot;>
                          {action.icon}
                        </div>
                        <span className=&quot;font-medium&quot;>{action.name}</span>                      </a>
                    ))}
                  </div>;
                </div>;
;
                {/* Company Highlights */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                    <Star className=&quot;w-5 h-5 text-cyan-400&quot; />                    <span>Why Choose Us</span>
                  </h3>
                  <div className=&quot;space-y-3&quot;>
                    <div className=&quot;p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg&quot;>
                      <div className=&quot;text-sm font-medium text-white mb-1&quot;>15+ Years Experience</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Industry expertise and proven track record</div>
                    </div>
                    <div className=&quot;p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg&quot;>
                      <div className=&quot;text-sm font-medium text-white mb-1&quot;>500+ Services Delivered</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Successful implementations worldwide</div>
                    </div>
                    <div className=&quot;p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg&quot;>
                      <div className=&quot;text-sm font-medium text-white mb-1&quot;>24/7 Support</div>
                      <div className=&quot;text-xs text-gray-400&quot;>Round-the-clock technical assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className=&quot;mt-6 pt-6 border-t border-cyan-500/30&quot;>
                <div className=&quot;text-center&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>                    Ready to Transform Your Business?
                  </h3>
                  <p className=&quot;text-gray-400 mb-4 max-w-2xl mx-auto&quot;>
                    Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward.
                  </p>
                  <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4&quot;>
                    <a
                      href=&quot;/contact&quot;
                      className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25&quot;
                    >
                      Get Started Today
                    </a>
                    <a
                      href=&quot;/comprehensive-services-showcase-2025&quot;
                      className=&quot;px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10&quot;
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
;
