<<<<<<< HEAD
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
<<<<<<< HEAD
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
],
=======
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className=&quot;w-4 h-4&quot; /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className=&quot;w-4 h-4&quot; /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className=&quot;w-4 h-4&quot; /> }
=======
import React, {_useState} from 'react';
import {_Phone, _Mail, _MapPin, _Globe, _Clock, _ChevronDown, _ChevronUp, _MessageCircle, _Calendar, _Star} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com', _hours: 'Mon-Fri: 9AM-6PM EST', _rating: '4.9/5 (200+ Reviews)'};

const _quickActions = [
  {_name: 'Get Quote', _href: '/quote', _icon: <MessageCircle className="w-4 h-4" />},
  {_name: 'Book Demo', _href: '/demo', _icon: <Calendar className="w-4 h-4" />},
  {_name: 'Live Chat', _href: '/chat', _icon: <MessageCircle className="w-4 h-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false),
=======
export default function TopContactBar() {_const [isExpanded, _setIsExpanded] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div className=&quot;relative z-40&quot;>
      {/* Main Contact Bar */}
<<<<<<< HEAD
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
                </a>
              </div>

              {/* Email */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <Mail className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.email}
                </a>
              </div>

              {/* Address */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <MapPin className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <span className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.address}
                </span>
              </div>

              {/* Website */}
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group&quot;>
                <Globe className=&quot;w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200&quot; />
                <a href={contactInfo.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                  {contactInfo.website.replace('https://', '')}
=======
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {_/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {_/* Phone */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {_contactInfo.mobile}
                </a>
              </div>

              {_/* Email */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={_`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {_contactInfo.email}
                </a>
              </div>

              {_/* Address */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {_contactInfo.address}
                </span>
              </div>

              {_/* Website */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={_contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  {_contactInfo.website.replace('https://', _'')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </div>
            </div>

<<<<<<< HEAD
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
                    className=&quot;flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30&quot;
=======
            {_/* Center - Business Hours & Rating */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {_/* Business Hours */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{_contactInfo.hours}</span>
              </div>

              {_/* Rating */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{_contactInfo.rating}</span>
              </div>
            </div>

            {_/* Right Side - Quick Actions & Expand Button */}
            <div className="flex items-center space-x-4">
              {_/* Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2">
                {_quickActions.map(_(action) => (
                  <a
                    key={action.name}
                    href={_action.href}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_action.icon}
                    <span>{_action.name}</span>
                  </a>
                ))}
              </div>

              {_/* Expand/Collapse Button */}
              <button
<<<<<<< HEAD
                onClick={() => setIsExpanded(!isExpanded)}
                className=&quot;flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className=&quot;w-4 h-4&quot; />
=======
                onClick={_() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span>More Info</span>
                {_isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <ChevronDown className=&quot;w-4 h-4&quot; />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {_/* Expanded Information Panel */}
      <AnimatePresence>
<<<<<<< HEAD
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
                      <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
        {_isExpanded && (_<motion.div
            initial={{ opacity: 0, _height: 0}}
            animate={_{ opacity: 1, _height: 'auto'}}
            exit={_{ opacity: 0, _height: 0}}
            transition={_{ duration: 0.3}}
            className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {_/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Contact Details</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {_contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={_`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {_contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                      <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
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
                      <a href={contactInfo.website} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
=======
                {_/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Business Info</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{_contactInfo.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{_contactInfo.rating}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <a href={_contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>

<<<<<<< HEAD
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
                        <span className=&quot;font-medium&quot;>{action.name}</span>
=======
                {_/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span>Quick Actions</span>
                  </h3>
                  <div className="space-y-3">
                    {_quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={_action.href}
                        className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 group"
                      >
                        <div className="text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200">
                          {_action.icon}
                        </div>
                        <span className="font-medium">{_action.name}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </a>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Company Highlights */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                    <Star className=&quot;w-5 h-5 text-cyan-400&quot; />
=======
                {_/* Company Highlights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <span>Why Choose Us</span>
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

<<<<<<< HEAD
              {/* Call to Action */}
              <div className=&quot;mt-6 pt-6 border-t border-cyan-500/30&quot;>
                <div className=&quot;text-center&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-3&quot;>
=======
              {_/* Call to Action */}
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    Ready to Transform Your Business?
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

