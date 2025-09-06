
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD

<<<<<<< HEAD
import {
  Phone
  Mail
  MapPin
  Globe
  Clock
  ChevronDown
  ChevronUp
  MessageCircle
  Calendar
  Star;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
  Star,;} from 'lucide-react';import { 
  Phone, Mail, MapPin, Globe, 
  Calendar,;
  Star,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Globe, ;
  Calendar,
  Star,;} from 'lucide-react';import { 
  Phone, Mail, MapPin, Globe, 
=======

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
import {;
  Phone,;
  Mail,;
  MapPin,;
  Globe,;
  Clock,;
  ChevronDown,;
  ChevronUp,;
  MessageCircle,;
  Calendar,;
  Star,;} from 'lucide-react';import { ;
  Phone, Mail, MapPin, Globe, ;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  Clock, ChevronDown, ChevronUp;
  MessageCircle, Calendar, Star;

const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
  hours: 'Mon-Fri: 9AM-6PM EST',;
  rating: '4 && 4.9/5 (200+ Reviews)',;
};


const quickActions = [;
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },;
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },;
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
<<<<<<< HEAD
export default function TopContactBar() {

export default function TopContactBar() {;
=======

export default function TopContactBar() {;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


export default function TopContactBar() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='relative z-40'>;
      {/* Main Contact Bar */}
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex items-center justify-between h-12'>;
            {/* Left Side - Contact Info */}
            <div className='hidden md:flex items-center space-x-6 text-sm'>;
              {/* Phone */}
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>;
                <Phone className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />;
                <a
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.mobile}      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-12">;
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">;
              {/* Phone */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">;
                <Phone className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo && contactInfo.mobile}
                </a>;
              </div>;

              {/* Email */}
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              {/* Address */}
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.address}
                </span>
              </div>
              {/* Website */}
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
              {/* Business Hours */}
              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">;
              {/* Business Hours */}
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{contactInfo.rating}</span>
              </div>
            </div>
                    key={action.name}
                    href={action.href}
                    className="flex items - center space - x-2 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30";
                  >;
            {/* Right Side - Quick Actions & Expand Button */}
            <div className='flex items-center space-x-4'>;
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>;
                {quickActions && quickActions.map(action => (;
                  <a
<<<<<<< HEAD
                    key={action.name}
                    href={action.href}
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'                  >              {/* Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2">
                {quickActions.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
                  >
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'                  >

                  >

<<<<<<< HEAD
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {action.icon}

              </div>;


              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}


                )}





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className='w-4 h-4' />
                ) : (
                  <ChevronDown className='w-4 h-4' />                )}              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                  <ChevronDown className='w-4 h-4' />                )}

                )}

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              </button>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
=======
                    <span>{action.name}</span>;
                  </a>))}
              </div>;
              {/* Expand / Collapse Button */}
              <button;
                on_click={() => setIsExpanded (!is_expanded)}
                className='flex items - center space - x-1 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30';
=======
                    key={action && action.name}
                    href={action && action.href}
                    className='flex items-center space-x-2 px-3 py-1 && 1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'>              {/* Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2">;
                {quickActions && quickActions.map((action) => (;
                  <a
                    key={action && action.name}
                    href={action && action.href}
                    className="flex items-center space-x-2 px-3 py-1 && 1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30">;
                    {action && action.icon}
                    <span>{action && action.name}</span>;
                  </a>;
                ))}
              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='flex items-center space-x-1 px-3 py-1 && 1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              >;
                <span>More Info</span>;
                {isExpanded ? (;
                  <ChevronUp className='w-4 h-4' />;
                ) : (;
                  <ChevronDown className='w-4 h-4' />                )}              >;
                <span>More Info</span>;
                {isExpanded ? (;
                  <ChevronUp className="w-4 h-4" />;
                ) : (;
                  <ChevronDown className="w-4 h-4" />;
                )}
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      {/* Expanded Information Panel */}
      <AnimatePresence>;
        {isExpanded && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.3 }}
            className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Contact Details */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Phone className='w-5 h-5 text-cyan-400' />
                    <span>Contact Details</span>
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3 text-gray-300'>
                      <Phone className='w-4 h-4 text-cyan-400' />
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className='hover:text-cyan-400 transition-colors duration-200'
                      >
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className='flex items-center space-x-3 text-gray-300'>
                      <Mail className='w-4 h-4 text-cyan-400' />
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      <a
                        href={`mailto:${contactInfo && contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200'>;
                        {contactInfo && contactInfo.email}
                      </a>;
                    </div>;
                    <div className='flex items-start space-x-3 text-gray-300'>;
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1' />;
                      <span className='text-sm'>{contactInfo && contactInfo.address}</span>                    </div>          >;
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Contact Details</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.mobile}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">;
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
                    <Phone className="w-5 h-5 text-cyan-400" />;
                    <span>Contact Details</span>;
                  </h3>;
                  <div className="space-y-3">;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Phone className="w-4 h-4 text-cyan-400" />;
                      <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo && contactInfo.mobile}
                      </a>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Mail className="w-4 h-4 text-cyan-400" />;
                      <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo && contactInfo.email}
                      </a>;
                    </div>;
                    <div className="flex items-start space-x-3 text-gray-300">;
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />;
                      <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Business Information */}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.hours}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{contactInfo.rating}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
                        Visit Website;
                      </a>;
                    </div>;
                  </div>;
                </div>;
                        key={action.name}
                        href={action.href}
                        className="flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30 group";
                      >;
                        <div className="text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200">;
                          {action.icon}
<<<<<<< HEAD

                {/* Quick Actions */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <MessageCircle className='w-5 h-5 text-cyan-400' />
                    <span>Quick Actions</span>
                  </h3>
                  <div className='space-y-3'>
                    {quickActions.map(action => (
                      <a
                        key={action.name}
                        href={action.href}
                        className='flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 group'
                      >
                        <div className='text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'>
                          {action.icon}
                        </div>
                        <span className='font-medium'>{action.name}</span>                      </a>                    <span>Quick Actions</span>
                  </h3>
                  <div className="space-y-3">
                    {quickActions.map((action) => (
                      <a
                        key={action.name}
                        href={action.href}
                        className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 group"
                      >
                        <div className="text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200">
                          {action.icon}
                        </div>
                        <span className="font-medium">{action.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                        <span className='font-medium'>{action.name}</span>                      </a>

                      </a>

                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Company Highlights */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Star className='w-5 h-5 text-cyan-400' />

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Company Highlights */}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                    <span>Why Choose Us</span>
=======
                    ))}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">15+ Years Experience</div>
                      <div className="text-xs text-gray-400">Industry expertise and proven track record</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">500+ Services Delivered</div>
                      <div className="text-xs text-gray-400">Successful implementations worldwide</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">24/7 Support</div>
                      <div className="text-xs text-gray-400">Round-the-clock technical assistance</div>
                    </div>
                  </div>
                </div>
              </div>
                {/* Company Highlights */}
                <div className='space-y-4'>;
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>;
                    <Star className='w-5 h-5 text-cyan-400' />;
                    <span>Why Choose Us</span>;
                  </h3>;
                  <div className='space-y-3'>;
                    <div className='p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg'>;
                      <div className='text-sm font-medium text-white mb-1'>;
                        15+ Years Experience;
                      </div>;
                      <div className='text-xs text-gray-400'>;
                        Industry expertise and proven track record;
                      </div>;
                    </div>;
                    <div className='p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg'>;
                      <div className='text-sm font-medium text-white mb-1'>;
                        500+ Services Delivered;
                      </div>;
                      <div className='text-xs text-gray-400'>;
                        Successful implementations worldwide;
                      </div>;
                    </div>;
                    <div className='p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg'>;
                      <div className='text-sm font-medium text-white mb-1'>;
                        24/7 Support;
                      </div>;
                      <div className='text-xs text-gray-400'>;
                        Round-the-clock technical assistance;
                      </div>                    </div>                    <span>Why Choose Us</span>;
                  </h3>;
                  <div className="space-y-3">;
                    <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg">;
                      <div className="text-sm font-medium text-white mb-1">15+ Years Experience</div>;
                      <div className="text-xs text-gray-400">Industry expertise and proven track record</div>;
                    </div>;
                    <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg">;
                      <div className="text-sm font-medium text-white mb-1">500+ Services Delivered</div>;
                      <div className="text-xs text-gray-400">Successful implementations worldwide</div>;
                    </div>;
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg">;
                      <div className="text-sm font-medium text-white mb-1">24/7 Support</div>;
                      <div className="text-xs text-gray-400">Round-the-clock technical assistance</div>;
                        </div>;
                        <span className="font - medium">{action.name}</span>;
                      </a>))}
                  </div>;
                </div>;
                {/* Company Highlights */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white flex items - center space - x-2'>;
                    <Star className='w - 5 h - 5 text - cyan - 400' />;
                    <span > Why Choose Us</span>;
                  </h3>;
                  <div className='space - y-3'>;
                    <div className='p - 3 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 600 / 10 border border - cyan - 500 / 30 rounded - lg'>;
                      <div className='text - sm font - medium text - white mb - 1'>;
                        15+ Years Experience;
                      </div>;
                      <div className='text - xs text - gray - 400'>;
                        Industry expertise and proven track record;
                      </div>;
                    </div>;
                    <div className='p - 3 bg - gradient - to - r from - purple - 500 / 10 to - pink - 600 / 10 border border - purple - 500 / 30 rounded - lg'>;
                      <div className='text - sm font - medium text - white mb - 1'>;
                        500+ Services Delivered;
                      </div>;
                      <div className='text - xs text - gray - 400'>;
                        Successful implementations worldwide;
                      </div>;
                    </div>;
                    <div className='p - 3 bg - gradient - to - r from - green - 500 / 10 to - emerald - 600 / 10 border border - green - 500 / 30 rounded - lg'>;
                      <div className='text - sm font - medium text - white mb - 1'>;
                        24 / 7 Support;
                      </div>;
                      <div className='text - xs text - gray - 400'>;
                        Round - the - clock technical assistance;
                      </div>                    </div>                    <span > Why Choose Us</span>;
                  </h3>;
                  <div className="space - y-3">;
                    <div className="p - 3 bg - gradient - to - r from - cyan - 500 / 10 to - blue - 600 / 10 border border - cyan - 500 / 30 rounded - lg">;
                      <div className="text - sm font - medium text - white mb - 1">15+ Years Experience</div>;
                      <div className="text - xs text - gray - 400">Industry expertise and proven track record</div>;
                    </div>;
                    <div className="p - 3 bg - gradient - to - r from - purple - 500 / 10 to - pink - 600 / 10 border border - purple - 500 / 30 rounded - lg">;
                      <div className="text - sm font - medium text - white mb - 1">500+ Services Delivered</div>;
                      <div className="text - xs text - gray - 400">Successful implementations worldwide</div>;
                    </div>;
                    <div className="p - 3 bg - gradient - to - r from - green - 500 / 10 to - emerald - 600 / 10 border border - green - 500 / 30 rounded - lg">;
                      <div className="text - sm font - medium text - white mb - 1">24 / 7 Support</div>;
                      <div className="text - xs text - gray - 400">Round - the - clock technical assistance</div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
                      View All Services;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
        )}
      </AnimatePresence>;
    </div>;
  );
<<<<<<< HEAD
  /* Main Contact Bar */
=======

          </motion.div>)}
      </AnimatePresence>;
    </div>);
;
  /* Main Contact Bar */;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}</a> </div> </div> > {
  action.icon
}<span> {
  action.name
}</span> </a>) )
}</div> {
  /* Expand/Collapse Button */
}<button) : (<ChevronDown className="w-4 h-4" />)
}</button> </div> </div> </div> </div> {
  /* Expanded Information Panel */
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div>) }
<<<<<<< HEAD
  /* Expanded Information Panel */ 
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) 
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>) 
<<<<<<< HEAD
}</AnimatePresence> </div>)
}</AnimatePresence> </div>) }

;
}</AnimatePresence> </div>)
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
