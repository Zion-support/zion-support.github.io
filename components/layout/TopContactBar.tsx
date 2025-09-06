import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
<<<<<<< HEAD
  Star,;} from 'lucide-react';
=======
  Star,;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp;
  MessageCircle, Calendar, Star
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
} from 'lucide-react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
  hours: 'Mon-Fri: 9AM-6PM EST',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  rating: '4.9/5 (200+ Reviews)',
};

const quickActions = [
  {
    name: 'Get Quote',
    href: '/quote',
    icon: <MessageCircle className='w-4 h-4' />,
  },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className='w-4 h-4' /> },
  {
    name: 'Live Chat',
    href: '/chat',
    icon: <MessageCircle className='w-4 h-4' />,
<<<<<<< HEAD
  },];
=======
  },
=======
  rating: '4.9/5 (200+ Reviews)'
};

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  rating: '4.9/5 (200+ Reviews)'
};

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
];
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

export default function TopContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
<<<<<<< HEAD
    <div className='relative z-40'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='relative z-40'>
=======
    <div className="relative z-40">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Main Contact Bar */}
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-12'>
            {/* Left Side - Contact Info */}
            <div className='hidden md:flex items-center space-x-6 text-sm'>
              {/* Phone */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Phone className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'
<<<<<<< HEAD
                >                  {contactInfo.mobile}
=======
                >
=======
    <div className="relative z-40">
      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {/* Phone */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {contactInfo.mobile}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </a>
              </div>

              {/* Email */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Mail className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='hover:text-cyan-400 transition-colors duration-200'
<<<<<<< HEAD
                >                  {contactInfo.email}
=======
                >
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {contactInfo.email}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </a>
              </div>

              {/* Address */}
<<<<<<< HEAD
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <span className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo.address}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <span className='hover:text-cyan-400 transition-colors duration-200'>
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {contactInfo.address}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </span>
              </div>

              {/* Website */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Globe className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={contactInfo.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-cyan-400 transition-colors duration-200'
<<<<<<< HEAD
                >                  {contactInfo.website.replace('https://', '')}
=======
                >
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  {contactInfo.website.replace('https://', '')}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </a>
              </div>
            </div>

            {/* Center - Business Hours & Rating */}
<<<<<<< HEAD
            <div className='hidden lg:flex items-center space-x-6 text-sm'>
              {/* Business Hours */}
              <div className='flex items-center space-x-2 text-gray-300'>
                <Clock className='w-4 h-4 text-cyan-400' />                <span>{contactInfo.hours}</span>
              </div>

              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo.rating}</span>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='hidden lg:flex items-center space-x-6 text-sm'>
              {/* Business Hours */}
              <div className='flex items-center space-x-2 text-gray-300'>
                <Clock className='w-4 h-4 text-cyan-400' />
=======
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {/* Business Hours */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {/* Business Hours */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <span>{contactInfo.hours}</span>
              </div>

              {/* Rating */}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex items-center space-x-2 text-gray-300'>
                <Star className='w-4 h-4 text-yellow-400 fill-current' />
=======
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                <span>{contactInfo.rating}</span>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            </div>

            {/* Right Side - Quick Actions & Expand Button */}
<<<<<<< HEAD
            <div className='flex items-center space-x-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='flex items-center space-x-4'>
=======
            <div className="flex items-center space-x-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>
                {quickActions.map(action => (
                  <a
                    key={action.name}
                    href={action.href}
<<<<<<< HEAD
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'                  >
=======
<<<<<<< HEAD
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
=======
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className="hidden sm:flex items-center space-x-2">
                {quickActions.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
<<<<<<< HEAD
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
=======
                className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className='w-4 h-4' />
                ) : (
<<<<<<< HEAD
                  <ChevronDown className='w-4 h-4' />                )}
=======
<<<<<<< HEAD
                  <ChevronDown className='w-4 h-4' />
=======
                className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span>More Info</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <ChevronDown className="w-4 h-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                )}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Information Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'
=======
<<<<<<< HEAD
<<<<<<< HEAD
            className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'
=======
            className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
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
                        href={`mailto:${contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200'
                      >
                        {contactInfo.email}
                      </a>
                    </div>
<<<<<<< HEAD
                    <div className='flex items-start space-x-3 text-gray-300'>
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1' />
                      <span className='text-sm'>{contactInfo.address}</span>                    </div>
=======
<<<<<<< HEAD
                    <div className='flex items-start space-x-3 text-gray-300'>
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1' />
                      <span className='text-sm'>{contactInfo.address}</span>
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                      <span className="text-sm">{contactInfo.address}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>

                {/* Business Information */}
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Clock className='w-5 h-5 text-cyan-400' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Clock className='w-5 h-5 text-cyan-400' />
=======
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <span>Business Info</span>
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center space-x-3 text-gray-300'>
                      <Clock className='w-4 h-4 text-cyan-400' />
                      <span>{contactInfo.hours}</span>
                    </div>
                    <div className='flex items-center space-x-3 text-gray-300'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />
                      <span>{contactInfo.rating}</span>
                    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='flex items-center space-x-3 text-gray-300'>
                      <Globe className='w-4 h-4 text-cyan-400' />
                      <a
                        href={contactInfo.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-cyan-400 transition-colors duration-200'
<<<<<<< HEAD
                      >                        Visit Website
=======
                      >
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        Visit Website
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <MessageCircle className='w-5 h-5 text-cyan-400' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <MessageCircle className='w-5 h-5 text-cyan-400' />
=======
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                        <span className='font-medium'>{action.name}</span>                      </a>
=======
<<<<<<< HEAD
                        <span className='font-medium'>{action.name}</span>
=======
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span>Quick Actions</span>
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                        <span className="font-medium">{action.name}</span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      </a>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    ))}
                  </div>
                </div>

                {/* Company Highlights */}
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Star className='w-5 h-5 text-cyan-400' />
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Star className='w-5 h-5 text-cyan-400' />
=======
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    <div className='p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg'>
                      <div className='text-sm font-medium text-white mb-1'>
                        24/7 Support
                      </div>
                      <div className='text-xs text-gray-400'>
                        Round-the-clock technical assistance
<<<<<<< HEAD
                      </div>                    </div>
=======
                      </div>
=======
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    <span>Why Choose Us</span>
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg">
                      <div className="text-sm font-medium text-white mb-1">24/7 Support</div>
                      <div className="text-xs text-gray-400">Round-the-clock technical assistance</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </div>
                </div>
              </div>

              {/* Call to Action */}
<<<<<<< HEAD
              <div className='mt-6 pt-6 border-t border-cyan-500/30'>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold text-white mb-3'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='mt-6 pt-6 border-t border-cyan-500/30'>
                <div className='text-center'>
                  <h3 className='text-lg font-semibold text-white mb-3'>
=======
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    Ready to Transform Your Business?
                  </h3>
                  <p className='text-gray-400 mb-4 max-w-2xl mx-auto'>
                    Get in touch with our team of experts to discuss how our
                    cutting-edge technology solutions can drive your business
                    forward.
                  </p>
                  <div className='flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4'>
                    <a
<<<<<<< HEAD
                      href='/contact'
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'                    >
                      Get Started Today
                    </a>
                    <a
                      href='/comprehensive-services-showcase-2025'
                      className='px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10'                    >
=======
<<<<<<< HEAD
                      href='/contact'
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
=======
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
                    Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
                      Get Started Today
                    </a>
                    <a
<<<<<<< HEAD
<<<<<<< HEAD
                      href='/comprehensive-services-showcase-2025'
                      className='px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10'
=======
                      href="/comprehensive-services-showcase-2025"
                      className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      href="/comprehensive-services-showcase-2025"
                      className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
  );
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

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
<<<<<<< HEAD
}</AnimatePresence> </div>) 
=======
}</AnimatePresence> </div>) 
=======
}

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
