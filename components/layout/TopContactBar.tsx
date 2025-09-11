
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


const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
];


const quickActions = [;
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },;
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },;
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }

export default function TopContactBar() {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


export default function TopContactBar() {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [isExpanded, setIsExpanded] = useState(false);

  return (


              {/* Email */}

              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">

                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              {/* Address */}

              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">

                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.address}
                </span>
              </div>
              {/* Website */}

              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">

                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>

                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.website.replace('https://', '')}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">;
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={contactInfo && contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo && contactInfo.website.replace('https://', '')}
                </a>;
              </div>;
            </div>;


            {/* Center - Business Hours & Rating */}
            <div className='hidden lg:flex items-center space-x-6 text-sm'>;
            {/* Center - Business Hours & Rating */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              {/* Business Hours */}

              <div className='flex items-center space-x-2 text-gray-300'>;
                <Clock className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.hours}</span>;
              </div>;


              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">;
              {/* Business Hours */}

                <span>{contactInfo.hours}</span>

              </div>
              {/* Rating */}

              <div className="flex items-center space-x-2 text-gray-300">

                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{contactInfo.rating}</span>
              </div>
            </div>

              <div className="flex items-center space-x-2 text-gray-300">;
                <Clock className="w-4 h-4 text-cyan-400" />;
              </div>;
            {/* Right Side - Quick Actions & Expand Button */}
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>
                {quickActions.map(action => (
                  <a
                    key={action.name}
                    href={action.href}
            {/* Right Side - Quick Actions & Expand Button */}
            <div className='flex items-center space-x-4'>
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>
                {quickActions.map(action => (
                  <a
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

                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {action.icon}

              </div>;


              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}


                )}





              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'



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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </button>
            </div>
          </div>
        </div>
      </div>

=======
                    <span>{action.name}</span>;
                  </a>))}
              </div>;
              {/* Expand / Collapse Button */}
              <button;
                on_click={() => setIsExpanded (!is_expanded)}
                className='flex items - center space - x-1 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;
                <span > More Info</span>;
                {is_expanded ? (
                  <ChevronUp className='w - 4 h - 4' />) : (
                  <ChevronDown className='w - 4 h - 4' />                )}              >;
                <span > More Info</span>;
                {is_expanded ? (
                  <ChevronUp className="w - 4 h - 4" />) : (
                  <ChevronDown className="w - 4 h - 4" />)}

              </button>;
            </div>;
          </div>;
        </div>;
      </div>;





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Expanded Information Panel */}
      <AnimatePresence>;
        {isExpanded && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

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

            transition={{ duration: 0.3 }}
            className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Business Info</span>

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

                        className='hover:text-cyan-400 transition-colors duration-200'>                        Visit Website                    <span>Business Info</span>;
                  </h3>;
                  <div className="space-y-3">;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Clock className="w-4 h-4 text-cyan-400" />;
                      <span>{contactInfo && contactInfo.hours}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                      <span>{contactInfo && contactInfo.rating}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Globe className="w-4 h-4 text-cyan-400" />;
                      <a href={contactInfo && contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">;
      {/* Expanded Information Panel */}
      <AnimatePresence>;
        {is_expanded && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='bg - gray - 900 / 95 backdrop - blur - md border - b border - cyan - 500 / 30 overflow - hidden';
          >;
            <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6'>;
              <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
                {/* Contact Details */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white flex items - center space - x-2'>;
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;
                    <span > Contact Details</span>;
                  </h3>;
                  <div className='space - y-3'>;
                    <div className='flex items - center space - x-3 text - gray - 300'>;
                      <Phone className='w - 4 h - 4 text - cyan - 400' />;
                      <a;
                        href={`tel:${contact_info.mobile}`}
                        className='hover:text - cyan - 400 transition - colors duration - 200';
                      >;
                        {contact_info.mobile}
                      </a>;
                    </div>;
                    <div className='flex items - center space - x-3 text - gray - 300'>;
                      <Mail className='w - 4 h - 4 text - cyan - 400' />;
                      <a;
                        href={`mailto:${contact_info.email}`}
                        className='hover:text - cyan - 400 transition - colors duration - 200';
                      >;
                        {contact_info.email}
                      </a>;
                    </div>;
                    <div className='flex items - start space - x-3 text - gray - 300'>;
                      <MapPin className='w - 4 h - 4 text - cyan - 400 mt - 1' />;
                      <span className='text - sm'>{contact_info.address}</span>                    </div>          >;
            <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 6">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
                {/* Contact Details */}
                <div className="space - y-4">;
                  <h3 className="text - lg font - semibold text - white flex items - center space - x-2">;
                    <Phone className="w - 5 h - 5 text - cyan - 400" />;
                    <span > Contact Details</span>;
                  </h3>;
                  <div className="space - y-3">;
                    <div className="flex items - center space - x-3 text - gray - 300">;
                      <Phone className="w - 4 h - 4 text - cyan - 400" />;
                      <a href={`tel:${contact_info.mobile}`} className="hover:text - cyan - 400 transition - colors duration - 200">;
                        {contact_info.mobile}
                      </a>;
                    </div>;
                    <div className="flex items - center space - x-3 text - gray - 300">;
                      <Mail className="w - 4 h - 4 text - cyan - 400" />;
                      <a href={`mailto:${contact_info.email}`} className="hover:text - cyan - 400 transition - colors duration - 200">;
                        {contact_info.email}
                      </a>;
                    </div>;
                    <div className="flex items - start space - x-3 text - gray - 300">;
                      <MapPin className="w - 4 h - 4 text - cyan - 400 mt - 1" />;
                      <span className="text - sm">{contact_info.address}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Business Information */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white flex items - center space - x-2'>;
                    <Clock className='w - 5 h - 5 text - cyan - 400' />;
                    <span > Business Info</span>;
                  </h3>;
                  <div className='space - y-3'>;
                    <div className='flex items - center space - x-3 text - gray - 300'>;
                      <Clock className='w - 4 h - 4 text - cyan - 400' />;
                      <span>{contact_info.hours}</span>;
                    </div>;
                    <div className='flex items - center space - x-3 text - gray - 300'>;
                      <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />;
                      <span>{contact_info.rating}</span>;
                    </div>;
                    <div className='flex items - center space - x-3 text - gray - 300'>;
                      <Globe className='w - 4 h - 4 text - cyan - 400' />;
                      <a;
                        href={contact_info.website}
                        target='_blank';
                        rel='noopener noreferrer';
                        className='hover:text - cyan - 400 transition - colors duration - 200';
                      >                        Visit Website                    <span > Business Info</span>;
                  </h3>;
                  <div className="space - y-3">;
                    <div className="flex items - center space - x-3 text - gray - 300">;
                      <Clock className="w - 4 h - 4 text - cyan - 400" />;
                      <span>{contact_info.hours}</span>;
                    </div>;
                    <div className="flex items - center space - x-3 text - gray - 300">;
                      <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;
                      <span>{contact_info.rating}</span>;
                    </div>;
                    <div className="flex items - center space - x-3 text - gray - 300">;
                      <Globe className="w - 4 h - 4 text - cyan - 400" />;
                      <a href={contact_info.website} target="_blank" rel="noopener noreferrer" className="hover:text - cyan - 400 transition - colors duration - 200">;

                        Visit Website;
                      </a>;
                    </div>;
                  </div>;
                </div>;

=======

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span>Quick Actions</span>
                  </h3>
=======
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* Company Highlights */}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <span>Why Choose Us</span>
                  </h3>
                  <div className='space-y-3'>
                    <div className='p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg'>
                      <div className='text-sm font-medium text-white mb-1'>
                        15+ Years Experience
                      </div>
                      <div className='text-xs text-gray-400'>
                        Industry expertise and proven track record
                      </div>
                    </div>
                    <div className='p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg'>
                      <div className='text-sm font-medium text-white mb-1'>
                        500+ Services Delivered
                      </div>
                      <div className='text-xs text-gray-400'>
                        Successful implementations worldwide
                      </div>
                    </div>
                    <div className='p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg'>
                      <div className='text-sm font-medium text-white mb-1'>
                        24/7 Support
                      </div>
                      <div className='text-xs text-gray-400'>
                        Round-the-clock technical assistance
                      </div>                    </div>                    <span>Why Choose Us</span>
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
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Ready to Transform Your Business?
                  </h3>
=======
              {/* Call to Action */}
              <div className='mt-6 pt-6 border-t border-cyan-500/30'>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold text-white mb-3'>
                    Ready to Transform Your Business?
                  </h3>
                  <p className='text-gray-400 mb-4 max-w-2xl mx-auto'>
                    Get in touch with our team of experts to discuss how our
                    cutting-edge technology solutions can drive your business
                    forward.
                  </p>
                  <div className='flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4'>
                    <a
                      href='/contact'
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'                    >
                      Get Started Today
                    </a>
                    <a
                      href='/comprehensive-services-showcase-2025'
                      className='px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10'                    >                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
                    Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Get Started Today
                    </a>
                    <a
                      href="/comprehensive-services-showcase-2025"
                      className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        )}
      </AnimatePresence>;
    </div>;
  );
  /* Main Contact Bar */
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
  /* Expanded Information Panel */ 
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) 
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>) 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
