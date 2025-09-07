<<<<<<< HEAD
import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp;
  MessageCircle, Calendar, Star
} from 'lucide-react';
const contactInfo = {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Calendar,
  Star,} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe,
  Clock, ChevronDown, ChevronUp;
  MessageCircle, Calendar, Star;
const contact_info = {
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
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="relative z-40">
      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
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
                  href={`mailto:${contactInfo && contactInfo.email}`}
                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.email}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">;
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo && contactInfo.email}
                </a>;
              </div>;
              {/* Address */}
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>;
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />;
                <span className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.address}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">;
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <span className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo && contactInfo.address}
                </span>;
              </div>;
              {/* Website */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">

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

=======

<<<<<<< HEAD

=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Phone, Mail, MapPin, Globe;
  Clock, ChevronDown, ChevronUp;}
  MessageCircle, Calendar, Star;}
  } from 'lucide-react';

const contactInfo = null;

<<<<<<< HEAD
export default function TopContactBar() {
=======

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
  Star,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ;
  Calendar,
  Star,;} from 'lucide-react';import { 
  Phone, Mail, MapPin, Globe, 
  Clock, ChevronDown, ChevronUp;
  MessageCircle, Calendar, Star
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
  hours: 'Mon-Fri: 9AM-6PM EST'
  rating: '4.9/5 (200+ Reviews)'
}
const quickActions = [
  {
    name: 'Get Quote'
    href: '/quote'
    icon: <MessageCircle className='w-4 h-4' />
  }
  { name: 'Book Demo', href: '/demo', icon: <Calendar className='w-4 h-4' /> }
  {
    name: 'Live Chat'
    href: '/chat'
    icon: <MessageCircle className='w-4 h-4' />
  },];  rating: '4.9/5 (200+ Reviews)'
}
const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w-4 h-4" /> }
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w-4 h-4" /> }
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> }
export default function TopContactBar() {

export default function TopContactBar() {;


export default function TopContactBar() {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const [isExpanded, setIsExpanded] = useState(false);
  return (
<div className='relative z-40'    />}
}
      {/* Main Contact Bar */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
import { Phone, Mail, MapPin, Globe;

  return (
<div className='relative z-40'>
origin/cursor/automate-test-improve-and-merge-code-2533
<div className='relative z-40' />}
}
      {/* Main Contact Bar */}
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className='flex items-center justify-between h-12'>;
            {/* Left Side - Contact Info */}'
            <div className='hidden md:flex items-center space-x-6 text-sm'>;
              {/* Phone */}'
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>;'
                <Phone className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />;
                <a;
                  href={`tel:${contactInfo && contactInfo.mobile}`}'
                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.mobile}      {/* Main Contact Bar */}"
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">;"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;"
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30' />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' />;
          <div className='flex items-center justify-between h-12' />;
=======
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='flex items-center justify-between h-12'    />;
>>>>>>> origin/chore/fix-lint-and-merge
            {/* Left Side - Contact Info */}
            <div className='hidden md:flex items-center space-x-6 text-sm'    />;
              {/* Phone */}
<<<<<<< HEAD
          <div className="flex items-center justify-between h-12">;
            {/* Left Side - Contact Info */}"
            <div className="hidden md:flex items-center space-x-6 text-sm">;
              {/* Phone */}"
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />"`
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'
                >
                  {contactInfo.mobile}
                </a>
              </div>

                <a;
                <a
                <a;
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.mobile}      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-12">;
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">;
              {/* Phone */}
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200';
                >;
                  {contactInfo.mobile}
=======
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'    />;
                <Phone className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'    />;

                <a;
href={`tel: ${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'    />

                  {contactInfo.mobil}
}
>>>>>>> origin/chore/fix-lint-and-merge
                </a>;
              </div>;
              {/* Email */}
<<<<<<< HEAD
<div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'    />;
                <Mail className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'    />;
                <a;
<<<<<<< HEAD
                  href={`mailto:${contactInfo.email}`}
=======

              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">

<<<<<<< HEAD

export default function TopContactBar() {;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='relative z-40'>
      {/* Main Contact Bar */}
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-12'>
            {/* Left Side - Contact Info */}
            <div className='hidden md:flex items-center space-x-6 text-sm'>
              {/* Phone */}
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Phone className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200'
                >                  {contactInfo.mobile}      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm">
              {/* Phone */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.mobile}
                </a>
              </div>
              {/* Email */}
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Mail className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className='hover:text-cyan-400 transition-colors duration-200'
                >                  {contactInfo.email}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </div>
              {/* Address */}"
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />"
                  className='hover:text-cyan-400 transition-colors duration-200';
                >;
                  {contactInfo.email}
                </a>;
              </div>;
              {/* Address */}<MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <span className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo.address}
                </span>;
              </div>;
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">;
<div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>;
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />;
                <span className='hover:text-cyan-400 transition-colors duration-200'>;
                  {contactInfo.address}
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.address}
                </span>
              </div>
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
<div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
=======
                  href={`mailto: ${contactInfo.email}`}

                  className='hover:text-cyan-400 transition-colors duration-200'
                    />
                  {contactInfo.email}
                </a>
              </div>
              {/* Address */}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <span className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo.address}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'    />
                <MapPin className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'    />
                <span className='hover:text-cyan-400 transition-colors duration-200'    />

                  {contactInfo.addres}
}
<<<<<<< HEAD
            {/* Left Side - Contact Info */}
            <div className='hidden "md":flex items-center space-x-6 text-sm'>;'
              {/* Phone */}

=======
>>>>>>> origin/chore/fix-lint-and-merge
                </span>;
              </div>;
              {/* Website */}
<div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'    />;
                <Globe className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'    />;
                <a;
                  href={contactInfo.website}

<<<<<<< HEAD
              {/* Email */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                <a;
                <a
                <a;
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className=hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.mobile}      {/* Main Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-cyan-500/30>;
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex items-center justify-between h-12>;
            {/* Left Side - Contact Info */}
            <div className=hidden md:flex items-center space-x-6 text-sm">;
              {/* Phone */}
                <Mail className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200 />;
                <a href={`mailto:${contactInfo.email}`} className=hover:text-cyan-400 transition-colors duration-200">;
                  href={`tel:${contactInfo.mobile}`}
                  className='hover:text-cyan-400 transition-colors duration-200;
                >;
                  {contactInfo.mobile}
                </a>;
              </div>;
              {/* Email */}
<div className=flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>;
                <Mail className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200 />;
                <a;

<<<<<<< HEAD
                  {contactInfo.email}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <MapPin className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <span className="hover:text-cyan-400 transition-colors duration-200">
                  {contactInfo.address}
                </span>
              </div>
<<<<<<< HEAD

              {/* Website */}
              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
=======
              {/* Website */}
<<<<<<< HEAD
              <div className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group'>
                <Globe className='w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200' />
                <a
                  href={contactInfo.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-cyan-400 transition-colors duration-200'
                >                  {contactInfo.website.replace('https://', '')}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">
=======

              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                 />
                  {contactInfo.website.replace('https://', '')}
                </a>
              </div>
            </div>
<<<<<<< HEAD
                  target='_blank';
                  rel='noopener noreferrer';
                  className='hover:text-cyan-400 transition-colors duration-200';
                >;
                  {contactInfo.website.replace('https://', '')}
                </a>;
              </div>;
            </div>;
              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">;
              {/* Rating */}'
              <div className='flex items-center space-x-2 text-gray-300'>;'"
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">;
              {/* Business Hours */}"
=======
<<<<<<< HEAD
=======

                  className='hover:text-cyan-400 transition-colors duration-200'>                  {contactInfo && contactInfo.website.replace('https://', '')}              <div className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group">;
                <Globe className="w-4 h-4 text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />;
                <a href={contactInfo && contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">;
                  {contactInfo && contactInfo.website.replace('https://', '')}
                </a>;
              </div>;
            </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            {/* Center - Business Hours & Rating */}
            <div className='hidden lg:flex items-center space-x-6 text-sm'>;
            {/* Center - Business Hours & Rating */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
<<<<<<< HEAD
              {/* Business Hours */}
              <div className='flex items-center space-x-2 text-gray-300'>;
                <Clock className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.hours}</span>;
              </div>;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              {/* Business Hours */}

              <div className='flex items-center space-x-2 text-gray-300'>;
                <Clock className='w-4 h-4 text-cyan-400' />                <span>{contactInfo && contactInfo.hours}</span>;
              </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">;
              {/* Business Hours */}
<<<<<<< HEAD
                <span>{contactInfo.hours}</span>
              </div>
              {/* Rating */}
            {/* Center - Business Hours & Rating */}
            <div className='hidden lg:flex items-center space-x-6 text-sm'>
              {/* Business Hours */}
              <div className='flex items-center space-x-2 text-gray-300'>
                <Clock className='w-4 h-4 text-cyan-400' />                <span>{contactInfo.hours}</span>
              </div>
              {/* Rating */}
              <div className='flex items-center space-x-2 text-gray-300'>
                <Star className='w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo.rating}</span>            <div className="hidden lg:flex items-center space-x-6 text-sm">
              {/* Business Hours */}
              <div className="flex items-center space-x-2 text-gray-300">
=======

                <span>{contactInfo.hours}</span>

              </div>
              {/* Rating */}

              <div className="flex items-center space-x-2 text-gray-300">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {contactInfo.website.replace(https://', ')}
=======
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-cyan-400 transition-colors duration-200'
                    />
                  {contactInfo.website.replace('https://', '')}
>>>>>>> origin/chore/fix-lint-and-merge
                </a>
              </div>
            </div>
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
                <Star className=w-4 h-4 text-yellow-400 fill-current' />                <span>{contactInfo && contactInfo.rating}</span>            <div className=hidden lg:flex items-center space-x-6 text-sm">;
              {/* Business Hours */}"
                <Star className=w-4 h-4 text-yellow-400 fill-current />

              {/* Business Hours */}
                <Star className="w-4 h-4 text-yellow-400 fill-current" />;
            {/* Center - Business Hours & Rating */}

                <span>{contactInfo.rating}</span>
              </div>
            </div>
<div className=flex items-center space-x-2 text-gray-300'>;
                <Star className='w-4 h-4 text-yellow-400 fill-current />;
                <span>{contactInfo.rating}</span>;
              </div>;
            </div>;
                    key={action.name}
                    href={action.href}

                    key={action.name}
                    href={action.href}
            {/* Right Side - Quick Actions & Expand Button */}
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30                  >


                  >

                  >;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="flex items-center space-x-2 text-gray-300">;
                <Clock className="w-4 h-4 text-cyan-400" />;
              </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Right Side - Quick Actions & Expand Button */}
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>
                {quickActions.map(action => (
                  <a
                    key={action.name}
                    href={action.href}
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'                  >              {/* Quick Actions */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="hidden sm:flex items-center space-x-2">
                {quickActions.map((action) => (
                  <a
<<<<<<< HEAD
=======
  hours: 'Mon - Fri: 9AM - 6PM EST',
  rating: '4.9 / 5 (200+ Reviews)',
}
;
const quick_actions = [;
  {
    name: 'Get Quote',
    href: '/quote',
    icon: <MessageCircle className='w - 4 h - 4' />,
  },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className='w - 4 h - 4' /> },
  {
    name: 'Live Chat',
    href: '/chat',
    icon: <MessageCircle className='w - 4 h - 4' />,
  }, ];  rating: '4.9 / 5 (200+ Reviews)';
}
;
const quick_actions = [;
  { name: 'Get Quote', href: '/quote', icon: <MessageCircle className="w - 4 h - 4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Calendar className="w - 4 h - 4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w - 4 h - 4" /> }
export default /**
 * TopContactBar - Function description
 */
function TopContactBar() {
  const [is_expanded, setIsExpanded] = useState (false);
;
  return (
    <div className='relative z - 40'>;
      {/* Main Contact Bar */}
      <div className='bg - gradient - to - r from - gray - 900 via - black to - gray - 900 border - b border - cyan - 500 / 30'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='flex items - center justify - between h - 12'>;
            {/* Left Side - Contact Info */}
            <div className='hidden md:flex items - center space - x-6 text - sm'>;
              {/* Phone */}
              <div className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group'>;
                <Phone className='w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200' />;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className='hover:text - cyan - 400 transition - colors duration - 200';
                >                  {contact_info.mobile}      {/* Main Contact Bar */}
      <div className="bg - gradient - to - r from - gray - 900 via - black to - gray - 900 border - b border - cyan - 500 / 30">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="flex items - center justify - between h - 12">;
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items - center space - x-6 text - sm">;
              {/* Phone */}
              <div className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group">;
                <Phone className="w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200" />;
                <a href={`tel:${contact_info.mobile}`} className="hover:text - cyan - 400 transition - colors duration - 200">;
                  {contact_info.mobile}
                </a>;
              </div>;
              {/* Email */}
              <div className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group'>;
                <Mail className='w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200' />;
                <a;
                  href={`mailto:${contact_info.email}`}
                  className='hover:text - cyan - 400 transition - colors duration - 200';
                >                  {contact_info.email}              <div className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group">;
                <Mail className="w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200" />;
                <a href={`mailto:${contact_info.email}`} className="hover:text - cyan - 400 transition - colors duration - 200">;
                  {contact_info.email}
                </a>;
              </div>;
              {/* Address */}
              <div className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group'>;
                <MapPin className='w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200' />;
                <span className='hover:text - cyan - 400 transition - colors duration - 200'>                  {contact_info.address}              <div className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group">;
                <MapPin className="w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200" />;
                <span className="hover:text - cyan - 400 transition - colors duration - 200">;
                  {contact_info.address}
                </span>;
              </div>;
              {/* Website */}
              <div className='flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group'>;
                <Globe className='w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200' />;
                <a;
                  href={contact_info.website}
                  target='_blank';
                  rel='noopener noreferrer';
                  className='hover:text - cyan - 400 transition - colors duration - 200';
                >                  {contact_info.website.replace ('https://', '')}              <div className="flex items - center space - x-2 text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 group">;
                <Globe className="w - 4 h - 4 text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200" />;
                <a href={contact_info.website} target="_blank" rel="noopener noreferrer" className="hover:text - cyan - 400 transition - colors duration - 200">;
                  {contact_info.website.replace ('https://', '')}
                </a>;
              </div>;
            </div>;
            {/* Center - Business Hours & Rating */}
            <div className='hidden lg:flex items - center space - x-6 text - sm'>;
              {/* Business Hours */}
              <div className='flex items - center space - x-2 text - gray - 300'>;
                <Clock className='w - 4 h - 4 text - cyan - 400' />                <span>{contact_info.hours}</span>;
              </div>;
              {/* Rating */}
              <div className='flex items - center space - x-2 text - gray - 300'>;
                <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />                <span>{contact_info.rating}</span>            <div className="hidden lg:flex items - center space - x-6 text - sm">;
              {/* Business Hours */}
              <div className="flex items - center space - x-2 text - gray - 300">;
                <Clock className="w - 4 h - 4 text - cyan - 400" />;
              </div>;
              {/* Rating */}
              <div className='flex items - center space - x-2 text - gray - 300'>;
                <Star className='w - 4 h - 4 text - yellow - 400 fill - current' />              <div className="flex items - center space - x-2 text - gray - 300">;
                <Star className="w - 4 h - 4 text - yellow - 400 fill - current" />;
                <span>{contact_info.rating}</span>;
              </div>;
            </div>;
            {/* Right Side - Quick Actions & Expand Button */}
            <div className='flex items - center space - x-4'>;
              {/* Quick Actions */}
              <div className='hidden sm:flex items - center space - x-2'>;
                {quick_actions.map (action => (
                  <a;
                    key={action.name}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    href={action.href}
                    className="flex items - center space - x-2 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow-cyan-500 / 30";
                  >;
            {/* Right Side - Quick Actions & Expand Button */}'
=======

            {/* Center - Business Hours & Rating */}
<div className='hidden lg:flex items-center space-x-6 text-sm'    />;
              {/* Business Hours */}
              <div className='flex items-center space-x-2 text-gray-300'    />;
                <Clock className='w-4 h-4 text-cyan-400'    />;
                <span    />{contactInfo.hours}</span>;
              </div>;
              {/* Rating */}

<div className='flex items-center space-x-2 text-gray-300'    />
                <Star className='w-4 h-4 text-yellow-400 fill-current'    />
                <span    />{contactInfo.rating}</span>
              </div>
            </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    key={action.name}
                    href={action.href}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
                    className=\"flex items - center space - x-2 px - 3 py - 1.5 text - xs text - gray - 300 hover: text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow-cyan-500 / 30\">


=======
                    className="flex items - center space - x-2 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30";
                  >;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            {/* Right Side - Quick Actions & Expand Button */}
<<<<<<< HEAD
                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'                  >

<div className=flex items-center space-x-4>
              {/* Quick Actions */}
              <div className='hidden sm:flex items-center space-x-2'>
                {quickActions.map(action => (
                  <a
                    key={action.name}
                    href={action.href}
                    className=flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30
origin/cursor/automate-test-improve-and-merge-code-2533
                  >

<div className='flex items-center space-x-4' />

              {/* Quick Actions *}
}
              <div className=hidden sm:flex items-center space-x-2 />;
                {quickActions.map(action => (<a;}
                    key={action.name}
                    href={action.href}
                    className="flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
                onClick={() => setIsExpanded(!isExpanded)}
=======

<div className='flex items-center space-x-4'    />

              {/* Quick Actions *}
}
              <div className='hidden sm:flex items-center space-x-2'    />;
                {quickActions.map(action => (<a;}
                    key={action.name}
                    href={action.href}

                    className='flex items-center space-x-2 px-3 py-1.5 text-xs text-gray-300 hover: text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
                      />


                    {action.icon}
                    <span    />{action.nam}
}</span>;
                  </a>;
                ))}
              </div>;


              {/* Expand/Collapse Button */}
              <button;
onClick={() =    /> setIsExpanded(!isExpanded)}
>>>>>>> origin/chore/fix-lint-and-merge

                )}

              {/* Expand/Collapse Button */}
<<<<<<< HEAD
              <button,
onClick={() => setIsExpanded(!isExpanded)}

<<<<<<< HEAD
className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 "hover": text-white bg-gray-800/50 "hover":bg-cyan-500/20 border border-gray-700/50 "hover":border-cyan-500/50 rounded-lg transition-all duration-200 "hover":shadow-xl "hover":shadow-cyan-500/30''
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              >
                <span>More Info</span>
                {isExpanded ? (

                ) : (

                  <ChevronDown className='w-4 h-4' />'
                )}

                  <ChevronDown className="w-4 h-4" />
              <button;
                onClick={() => setIsExpanded(!isExpanded)}'
                className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'

<<<<<<< HEAD
className='flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30'
origin/cursor/automate-test-improve-and-merge-code-2533
              <button;
onClick={() = /> setIsExpanded(!isExpanded)}
=======
              <button;
onClick={() =    /> setIsExpanded(!isExpanded)}
>>>>>>> origin/chore/fix-lint-and-merge

className=flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover: text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30
              >
<<<<<<< HEAD
                <span>More Info</span>
                {isExpanded ? ('
                  <ChevronUp className='w-4 h-4' />
                ) : (
                  <ChevronDown className=w-4 h-4 />
                )}
origin/cursor/automate-test-improve-and-merge-code-2533
}
                  <ChevronDown className='w-4 h-4' />}
=======
                <span    />More Info</span>
                {isExpanded ? (
                  <ChevronUp className='w-4 h-4'    />
                ) : (
}
                  <ChevronDown className='w-4 h-4'    />}
>>>>>>> origin/chore/fix-lint-and-merge
                )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </button>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD

                    <span    />{action.nam}
}</span>;
=======
<<<<<<< HEAD
                    {action.icon}
              </div>;
              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <span>More Info</span>
                {isExpanded ? (
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
=======
=======
                    <span>{action.name}</span>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </a>))}
              </div>;
              {/* Expand / Collapse Button */}
              <button;
<<<<<<< HEAD
                on_click={() => setIsExpanded (!is_expanded)}
                className='flex items - center space - x-1 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;
                <span>More Info</span>;
                {isExpanded ? (<ChevronUp className='w-4 h-4' />;
                ) : (<ChevronDown className='w-4 h-4' />                )}              >;
                <span>More Info</span>;
                {isExpanded ? (<ChevronUp className="w-4 h-4" />;
                ) : (<ChevronDown className="w-4 h-4" />;
                on_click={() => setIsExpanded (!is_expanded)}'
                className='flex items - center space - x-1 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;
                <span>More Info</span>;
                {isExpanded ? (;'
                  <ChevronUp className='w-4 h-4' />;
                ) : (;'
                  <ChevronDown className='w-4 h-4' />                )}              >;
                <span>More Info</span>;
                {isExpanded ? (;"
                  <ChevronUp className="w-4 h-4" />;
                ) : (;"
                  <ChevronDown className="w-4 h-4" />;
=======
                on_click={() =    /> setIsExpanded (!is_expanded)}
                className='flex items - center space - x-1 px - 3 py - 1.5 text - xs text - gray - 300 hover:text - white bg - gray - 800 / 50 hover:bg - cyan - 500 / 20 border border - gray - 700 / 50 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30'>

<<<<<<< HEAD
                <span    />More Info</span>;
                {isExpanded ? (<ChevronUp className='w-4 h-4'    />;}
                ) : (<ChevronDown className='w-4 h-4'    />                )}              >;
                <span    />More Info</span>;"
                {isExpanded ? (<ChevronUp className=\"w-4 h-4\"    />;}"
                ) : (<ChevronDown className=\"w-4 h-4\"    />;}
>>>>>>> origin/chore/fix-lint-and-merge
                )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
=======


<<<<<<< HEAD
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            transition={{ duration: 0.3 }}
            className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden"
          >
                  <ChevronDown className='w-4 h-4' />                )}

                )}

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
            className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Expanded Information Panel */}
<<<<<<< HEAD
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0}}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
                        href={`mailto:${contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200'
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className='flex items-start space-x-3 text-gray-300'>
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1' />
                      <span className='text-sm'>{contactInfo.address}</span>                    </div>          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contact Details */}
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{ duration: 0.3 }}

<<<<<<< HEAD
              <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
                {/* Contact Details */}'
                <div className='space-y-4>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Phone className=w-5 h-5 text-cyan-400' />
                    <span>Contact Details</span>
                  </h3>'
                  <div className=space-y-3>'
                    <div className='flex items-center space-x-3 text-gray-300>
                      <Phone className='w-4 h-4 text-cyan-400' />
                      <a;`
                        href={`tel:${contactInfo.mobile}`}
                        className=hover:text-cyan-400 transition-colors duration-200'
                      >
                        {contactInfo.mobile}
                      </a>
                    </div>'
                    <div className=flex items-center space-x-3 text-gray-300>'
                      <Mail className='w-4 h-4 text-cyan-400 />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Contact Details</span>
                  </h3>
                  <div className=space-y-3">"
                    <div className=flex items-center space-x-3 text-gray-300>"
                      <Phone className="w-4 h-4 text-cyan-400 />`
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'
origin/cursor/automate-test-improve-and-merge-code-2533
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          >'
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>'
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {/* Contact Details */}'
                <div className='space-y-4'>'
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>'
                    <Phone className='w-5 h-5 text-cyan-400' />
                    <span>Contact Details</span>
                  </h3>'
                  <div className='space-y-3'>'
                    <div className='flex items-center space-x-3 text-gray-300'>'
                      <Phone className='w-4 h-4 text-cyan-400' />
                      <a;`
                        href={`tel:${contactInfo.mobile}`}'
                        className='hover:text-cyan-400 transition-colors duration-200'
                      >
                        {contactInfo.mobile}
                      </a>
                    </div>'
                    <div className='flex items-center space-x-3 text-gray-300'>'
                      <Mail className='w-4 h-4 text-cyan-400' />
                      <a;
                {/* Contact Details */}"
                <div className="space-y-4">"
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">"
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>Contact Details</span>
                  </h3>"
                  <div className="space-y-3">"
                    <div className="flex items-center space-x-3 text-gray-300">"
                      <Phone className="w-4 h-4 text-cyan-400" />"`
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.mobile}
                      </a>
                    </div>"
                    <div className="flex items-center space-x-3 text-gray-300">"
                      <Mail className="w-4 h-4 text-cyan-400" />"`
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                        {contactInfo.email}
                      </a>
                    </div>"
                    <div className="flex items-start space-x-3 text-gray-300">"
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />"
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
<<<<<<< HEAD
                </div>"
                <div className="space-y-4">;"
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;"
                    <Phone className="w-5 h-5 text-cyan-400" />;
                    <span>Contact Details</span>;
                  </h3>;"
                  <div className="space-y-3">;"
                    <div className="flex items-center space-x-3 text-gray-300">;"
                      <Phone className="w-4 h-4 text-cyan-400" />;"`
                      <a href={`tel:${contactInfo && contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo && contactInfo.mobile}
                      </a>;
                    </div>;"
                    <div className="flex items-center space-x-3 text-gray-300">;"
                      <Mail className="w-4 h-4 text-cyan-400" />;"`
                      <a href={`mailto:${contactInfo && contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo && contactInfo.email}
                      </a>;
                    </div>;"
                    <div className="flex items-start space-x-3 text-gray-300">;"
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />;"
                      <span className="text-sm">{contactInfo && contactInfo.address}</span>;
                    <span>Contact Details</span>;

=======
      <AnimatePresence    />;
        {isExpanded && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }
}
            animate={{ opacity: 1, height: 'auto' }
}

            exit={{ opacity: 0, height: 0 }}

            transition={{ duration: 0.3 }}
className='bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 overflow-hidden'
              />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'    />

                {/* Contact Details *}
}
                <div className='space-y-4'    />;
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'    />;
                    <Phone className='w-5 h-5 text-cyan-400'    />;
                    <span    />Contact Details</span>;
                  </h3>;
                  <div className='space-y-3'    />;
                    <div className='flex items-center space-x-3 text-gray-300'    />;
                      <Phone className='w-4 h-4 text-cyan-400'    />;
                      <a;
                        href={`tel: ${contactInfo.mobile}`}
                        className='hover:text-cyan-400 transition-colors duration-200'    />
>>>>>>> origin/chore/fix-lint-and-merge

                        {contactInfo.mobile}

                      </a>
                    </div>
                    <div className='flex items-center space-x-3 text-gray-300'    />
                      <Mail className='w-4 h-4 text-cyan-400'    />
                      <a;
href={`mailto:${contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200'    />

                        {contactInfo.emai}
}
                      </a>;
                    </div>;
<<<<<<< HEAD
                    <div className='flex items-center space-x-3 text-gray-300'>;
                      <Mail className='w-4 h-4 text-cyan-400' />;
                      <a;
                {/* Contact Details */}
                <div className="space-y-4">;
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">;
                    <Phone className="w-5 h-5 text-cyan-400" />;
                    <span>Contact Details</span>;
                  </h3>;
                  <div className="space-y-3">;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Phone className="w-4 h-4 text-cyan-400" />;
                      <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo.mobile}
                      </a>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Mail className="w-4 h-4 text-cyan-400" />;
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">;
                        {contactInfo.email}
                      </a>;
                    </div>;
                    <div className="flex items-start space-x-3 text-gray-300">;
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1" />;
                      <span className="text-sm">{contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
=======
                </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
                  </h3>;
                  <div className="space-y-3">;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Clock className="w-4 h-4 text-cyan-400" />;
                      <span>{contactInfo.hours}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                      <span>{contactInfo.rating}</span>;
                    </div>;
                    <div className="flex items-center space-x-3 text-gray-300">;
                      <Globe className="w-4 h-4 text-cyan-400" />;
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">;
                        href={`mailto:${contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200';
                      >;
                        {contactInfo.email}
                      </a>;
                    </div>;
                    <div className='flex items-start space-x-3 text-gray-300'>;
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1' />;
                      <span className='text-sm'>{contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
                  </h3>"
                  <div className=space-y-3>"
                    <div className="flex items-center space-x-3 text-gray-300>
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.hours}</span>
                    </div>
                    <div className=flex items-center space-x-3 text-gray-300">"
                      <Star className=w-4 h-4 text-yellow-400 fill-current />
                      <span>{contactInfo.rating}</span>
                    </div>"
                    <div className="flex items-center space-x-3 text-gray-300">"
                      <Globe className="w-4 h-4 text-cyan-400" />"
                      <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-200">
                        href={`mailto:${contactInfo.email}`}
                        className='hover:text-cyan-400 transition-colors duration-200
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className=flex items-start space-x-3 text-gray-300'>
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1 />
                      <span className=text-sm'>{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Business Information */}
<<<<<<< HEAD
=======

<<<<<<< HEAD
                      <a;
                        href={contactInfo.website}
=======
                    <div className='flex items-start space-x-3 text-gray-300'    />;
                      <MapPin className='w-4 h-4 text-cyan-400 mt-1'    />;
                      <span className='text-sm'    />{contactInfo.address}</span>;
                    </div>;
                  </div>;
                </div>;
                {/* Business Information */}
<div className='space-y-4'    />;
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'    />;
                    <Clock className='w-5 h-5 text-cyan-400'    />;
                    <span    />Business Info</span>;
                  </h3>;
                  <div className='space-y-3'    />;
                    <div className='flex items-center space-x-3 text-gray-300'    />;
                      <Clock className='w-4 h-4 text-cyan-400'    />;
                      <span    />{contactInfo.hours}</span>;
                    </div>;
                    <div className='flex items-center space-x-3 text-gray-300'    />;
                      <Star className='w-4 h-4 text-yellow-400 fill-current'    />;
                      <span    />{contactInfo.rating}</span>;
                    </div>;
                    <div className='flex items-center space-x-3 text-gray-300'    />;
                      <Globe className='w-4 h-4 text-cyan-400'    />;
                      <a;
                        href={contactInfo.website}

                        target='_blank'
                        rel='noopener noreferrer'
>>>>>>> origin/chore/fix-lint-and-merge
                        className='hover: text-cyan-400 transition-colors duration-200'
                          />
                        Visit Website;
                      </a>
                    </div>
<<<<<<< HEAD
                    <div className="flex items-center space-x-3 text-gray-300>
                      <Mail className=w-4 h-4 text-cyan-400" />
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200>
                        {contactInfo.email}
                      </a>
                    </div>
                    <div className=flex items-start space-x-3 text-gray-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mt-1 />
                      <span className=text-sm">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
                        Visit Website;
                      </a>;
                    </div>;
                  </div>;
                </div>;
                {/* Business Information */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>Business Info</span>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
                        target='_blank';
                        rel='noopener noreferrer';
                        className='hover:text-cyan-400 transition-colors duration-200';
                      >;
=======
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        Visit Website;
                      </a>;
                    </div>;
                  </div>;
                </div>;
<<<<<<< HEAD
                        Visit Website;
                      </a>;
                    </div>;
                  </div>;
                </div>;{/* Quick Actions */}
<div className='space-y-4'>;
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>;
                    <MessageCircle className='w-5 h-5 text-cyan-400' />;
                    <span>Quick Actions</span>;
                  </h3>;
                  <div className='space-y-3'>;
                    {quickActions.map(action => (<a;
                        key={action.name}
                        href={action.href}
                        className="flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow-cyan-500 / 30 group";
                      >;
                        <div className="text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition-transform duration-200">;
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
                  </div>
                </div>

>>>>>>> origin/chore/fix-lint-and-merge
                {/* Quick Actions */}
<div className='space-y-4'    />
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'    />
                    <MessageCircle className='w-5 h-5 text-cyan-400'    />
                    <span    />Quick Actions</span>
                  </h3>
<<<<<<< HEAD
                  <div className='space-y-3'>'
                    {quickActions.map(action => (
                      <a
origin/cursor/automate-test-improve-and-merge-code-2533
                        key={action.name}
                        href={action.href}
                        className="flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow-cyan-500 / 30 group";
                      >;
                        <div className="text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition-transform duration-200">;
                          {action.icon}
                  <div className='space-y-3' />
=======
                  <div className='space-y-3'    />
>>>>>>> origin/chore/fix-lint-and-merge
                    {quickActions.map(action => (}
                      <a;}
key={action.name}
                        href={action.hre}
}"
                        className=\"flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow-cyan-500 / 30 group\"    />
"
                        <div className=\"text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition-transform duration-200\"    />;

<<<<<<< HEAD
                        <div className="text - cyan - 400 group - "hover":shadow - lg "hover":shadow - cyan - 400 / 40 transition-transform duration-200">;"

                          {action.icon}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-cyan-400" />
                    <span>Quick Actions</span>
<<<<<<< HEAD
=======
                  </h3>
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
                {/* Quick Actions */}
                <div className='space - y-4'>;
                  <h3 className='text - lg font - semibold text - white flex items - center space - x-2'>;
                    <MessageCircle className='w - 5 h - 5 text - cyan - 400' />;
                    <span > Quick Actions</span>;
                  </h3>;
                  <div className='space - y-3'>;
                    {quick_actions.map (action => (
                      <a;
                        key={action.name}
                        href={action.href}
<<<<<<< HEAD
=======
                        className='flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30 group';
                      >;
                        <div className='text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200'>;
                          {action.icon}
                        </div>;
                        <span className='font - medium'>{action.name}</span>                      </a>                    <span > Quick Actions</span>;
                  </h3>;
                  <div className="space - y-3">;
                    {quick_actions.map ((action) => (
                      <a;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                        key={action.name}
                        href={action.href}
                        className="flex items - center space - x-3 p - 3 text - gray - 300 hover:text - white bg - gray - 800 / 30 hover:bg - cyan - 500 / 20 border border - gray - 700 / 30 hover:border - cyan - 500 / 50 rounded - lg transition - all duration - 200 hover:shadow - xl hover:shadow - cyan - 500 / 30 group";
                      >;
                        <div className="text - cyan - 400 group - hover:shadow - lg hover:shadow - cyan - 400 / 40 transition - transform duration - 200">;
                          {action.icon}
<<<<<<< HEAD
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    <span>Why Choose Us</span>
                  </h3>
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

                {/* Company Highlights */}
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Star className='w-5 h-5 text-cyan-400' />
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                        className='flex items-center space-x-3 p-3 text-gray-300 hover:text-white bg-gray-800/30 hover:bg-cyan-500/20 border border-gray-700/30 hover:border-cyan-500/50 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 group'
                      >
                        <div className='text-cyan-400 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200'>
                          {action.icon}
                        </div>
<<<<<<< HEAD
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
=======
                          {action.icon}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                        </div>
                        <span className='font-medium'    />{action.name}</span>
>>>>>>> origin/chore/fix-lint-and-merge
                      </a>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {/* Company Highlights */}
<<<<<<< HEAD
<div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
                    <Star className='w-5 h-5 text-cyan-400' />

<<<<<<< HEAD
                {/* Company Highlights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    <Star className="w-5 h-5 text-cyan-400" />
                    <span>Why Choose Us</span>
                    ))}
<div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'>
<div className='space-y-4' />
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2' />
                    <Star className='w-5 h-5 text-cyan-400' />
                    <Star className=w-5 h-5 text-cyan-400' />

                {/* Company Highlights */}

                    <span>Why Choose Us</span>
                    ))}
                  </h3>"
                  <div className=space-y-3>"
                    <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg>
                      <div className="text-sm font-medium text-white mb-1">15+ Years Experience</div>
                      <div className=text-xs text-gray-400">Industry expertise and proven track record</div>
                    </div>"
                    <div className=p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg>"
                      <div className="text-sm font-medium text-white mb-1>500+ Services Delivered</div>
                      <div className="text-xs text-gray-400">Successful implementations worldwide</div>
                    </div>
                    <div className=p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg">"
                      <div className=text-sm font-medium text-white mb-1>24/7 Support</div>"
                      <div className="text-xs text-gray-400>Round-the-clock technical assistance</div>
                  </h3>
                  <div className='space-y-3'>'
                    <div className='p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg'>'
                      <div className='text-sm font-medium text-white mb-1'>'
                        15+ Years Experience
                    <span />Why Choose Us</span>

=======




<<<<<<< HEAD


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
<div className='space-y-4'    />
                  <h3 className='text-lg font-semibold text-white flex items-center space-x-2'    />
                    <Star className='w-5 h-5 text-cyan-400'    />

                {/* Company Highlights */}

                    <span    />Why Choose Us</span>

                  </h3>
                  <div className='space-y-3'    />
                    <div className='p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg'    />
                      <div className='text-sm font-medium text-white mb-1'    />
                        15+ Years Experience;
                      </div>
                      <div className='text-xs text-gray-400'    />
                        Industry expertise and proven track record;
                      </div>
                    </div>
                    <div className='p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg'    />
                      <div className='text-sm font-medium text-white mb-1'    />
                        500+ Services Delivered;
                      </div>
                      <div className='text-xs text-gray-400'    />
                        Successful implementations worldwide;
                      </div>
                    </div>
                    <div className='p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg'    />
                      <div className='text-sm font-medium text-white mb-1'    />
                        24/7 Support;
                      </div>
                      <div className='text-xs text-gray-400'    />
                        Round-the-clock technical assistance;
                      </div>
>>>>>>> origin/chore/fix-lint-and-merge
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
</div>;
                </div>;
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Call to Action */}
              <div className='mt - 6 pt - 6 border - t border - cyan - 500 / 30'>;
                <div className='text - center'>;
                  <h3 className='text - lg font - semibold text - white mb - 3'>;
                    Ready to Transform Your Business?;
                  </h3>;
                  <p className='text - gray - 400 mb - 4 max - w-2xl mx - auto'>;
                    Get in touch with our team of experts to discuss how our;
                    cutting - edge technology solutions can drive your business;
                    forward.;
                  </p>;
                  <div className='flex flex - col sm:flex - row items - center justify - center space - y-3 sm:space - y-0 sm:space - x-4'>;
                    <a;
                      href='/contact';
                      className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:shadow - xl hover:shadow - cyan - 500 / 30 transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25'                    >;
                      Get Started Today;
                    </a>;
                    <a;
                      href='/comprehensive - services - showcase - 2025';
                      className='px - 6 py - 3 text - cyan - 400 hover:text - white border border - cyan - 500 / 50 hover:border - cyan - 400 rounded - lg transition - all duration - 300 hover:bg - cyan - 500 / 10'                    >                    Ready to Transform Your Business?;
                  </h3>;
                  <p className="text - gray - 400 mb - 4 max - w-2xl mx - auto">;
                    Get in touch with our team of experts to discuss how our cutting - edge technology solutions can drive your business forward.;
                  </p>;
                  <div className="flex flex - col sm:flex - row items - center justify - center space - y-3 sm:space - y-0 sm:space - x-4">;
                    <a;
                      href="/contact";
                      className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:shadow - xl hover:shadow - cyan - 500 / 30 transition - all duration - 300 hover:shadow - lg hover:shadow - cyan - 500 / 25";
                    >;
                      Get Started Today;
                    </a>;
                    <a;
                      href='/comprehensive - services - showcase - 2025';
                      className='px - 6 py - 3 text - cyan - 400 hover:text - white border border - cyan - 500 / 50 hover:border - cyan - 400 rounded - lg transition - all duration - 300 hover:bg - cyan - 500 / 10'                      href="/comprehensive - services - showcase - 2025";
                      className="px - 6 py - 3 text - cyan - 400 hover:text - white border border - cyan - 500 / 50 hover:border - cyan - 400 rounded - lg transition - all duration - 300 hover:bg - cyan - 500 / 10";
                    >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                      View All Services;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
<<<<<<< HEAD
              {/* Call to Action */}

=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <div className="mt-6 pt-6 border-t border-cyan-500/30">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Ready to Transform Your Business?
                  </h3>
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
<<<<<<< HEAD
                      href='/comprehensive-services-showcase-2025'
                      className='px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10'                      href="/comprehensive-services-showcase-2025"
=======
                      href="/comprehensive-services-showcase-2025"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    >
                      View All Services
=======

              {/* Call to Action */}
<div className='mt-6 pt-6 border-t border-cyan-500/30'    />
                <div className='text-center'    />
                  <h3 className='text-lg font-semibold text-white mb-3'    />
                    Ready to Transform Your Business?
                  </h3>
                  <p className='text-gray-400 mb-4 max-w-2xl mx-auto'    />
                    Get in touch with our team of experts to discuss how our;
cutting-edge technology solutions can drive your business;
forward.
                  </p>
                  <div className='flex flex-col sm: flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4'    />
                    <a;
href='/contact'
                      className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25'
                        />
                      Get Started Today;
                    </a>
                    <a;
href='/comprehensive-services-showcase-2025'
                      className='px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10'
                        />
                      View All Services;
>>>>>>> origin/chore/fix-lint-and-merge
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD
        
}
      </AnimatePresence>;
    </div>;
  );
<<<<<<< HEAD
/* Main Contact Bar */ 
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD


        )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  /* Expanded Information Panel */ 
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) 
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>) 

<<<<<<< HEAD
      </AnimatePresence>
    </div>
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
}</AnimatePresence> </div>)
}</AnimatePresence> </div>) }

;
}</AnimatePresence> </div>)
=======

=======
          </motion.div>)}
      </AnimatePresence>;
    </div>);
;
  /* Main Contact Bar */;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}</a> </div> </div> > {
  action.icon
}<span> {
  action.name
}</span> </a>) )
}</div> {}
  /* Expand/Collapse Button */
}<button) : (<ChevronDown className="w-4 h-4" />)
}</button> </div> </div> </div> </div> {}
}
      </AnimatePresence>;
    </div>;
  );
      </AnimatePresence>
    </div>
  )
}</span> </a>) )
}</div> {}
  /* Expand/Collapse Button */}"
}<button) : (<ChevronDown className=\"w-4 h-4\" />)

/* Main Contact Bar */ 
}</a> </div> </div> > {
  }
  action.icon
}<span> {
  }
  action.name
}</span> </a>) )
}</div> {
  /* Expand/Collapse Button */
}</button> </div> </div> </div> </div> {
  /* Expanded Information Panel */
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )
}</div> </div> <span>Why Choose Us</span> </h3> <div className=space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400 >Industry expertise and proven track record</div> </div> <div className=p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >500+ Services Delivered</div> <div className=text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400 >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className=text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 > <a href=/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 > Get Started Today </a> <a href=/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10 > View All Services </a> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div>) }
}</AnimatePresence> </div>) }

}</AnimatePresence> </div>)

;
  /* Expanded Information Panel */ 
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) 
}</div> </div> <span>Why Choose Us</span> </h3> <div className=space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400 >Industry expertise and proven track record</div> </div> <div className=p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >500+ Services Delivered</div> <div className=text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400 >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className=text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 > <a href=/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 > Get Started Today </a> <a href=/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10 > View All Services </a> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </div>)
origin/cursor/automate-test-improve-and-merge-code-2533
}
  /* Expanded Information Panel */ }
}<AnimatePresence /> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) "
}</div> </div> <span />Why Choose Us</span> </h3> <div className=\"space-y-3\"  /> <div className=\"p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg\"  /> <div className=\"text-sm font-medium text-white mb-1\"  />15+ Years Experience</div> <div className=\"text-xs text-gray-400\"  />Industry expertise and proven track record</div> </div> <div className=\"p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg\"  /> <div className=\"text-sm font-medium text-white mb-1\"  />500+ Services Delivered</div> <div className=\"text-xs text-gray-400\"  />Successful implementations worldwide</div> </div> <div className=\"p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg\"  /> <div className=\"text-sm font-medium text-white mb-1\"  />24/7 Support</div> <div className=\"text-xs text-gray-400\"  />Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className=\"text-gray-400 mb-4 max-w-2xl mx-auto\"  /> Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className=\"flex flex-col sm: flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4\"  /> <a href=\"/contact\" className=\"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25\"  /> Get Started Today </a> <a href=\"/comprehensive-services-showcase-2025\" className=\"px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10\"  /> View All Services </a> </div> </div> </div> </div> </motion.div>) 
  /* Expand/Collapse Button */"
}<button) : (<ChevronDown className="w-4 h-4" />)
}<button) : (<ChevronDown className="w-4 h-4 />)
}</button> </div> </div> </div> </div> {
                          {action.icon}</div>;
                        <span className=font-medium'>{action.name}</span>;
                      </a>;
                    ))}
                  </div>;
                </div>;
                {/* Company Highlights */}
<div className='space-y-4>;
                  <h3 className=text-lg font-semibold text-white flex items-center space-x-2'>;
                    <Star className='w-5 h-5 text-cyan-400 />;
                {/* Company Highlights */}<span>Why Choose Us</span>;
                    ))}
                  </h3>;
                  <div className=space-y-3">;
                    <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg>;
                      <div className=text-sm font-medium text-white mb-1">15+ Years Experience</div>;
                      <div className="text-xs text-gray-400>Industry expertise and proven track record</div>;
                    </div>;
                    <div className=p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg">;
                      <div className="text-sm font-medium text-white mb-1>500+ Services Delivered</div>;
                      <div className=text-xs text-gray-400">Successful implementations worldwide</div>;
                    </div>;
                    <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg>;
                      <div className=text-sm font-medium text-white mb-1">24/7 Support</div>;
                      <div className="text-xs text-gray-400>Round-the-clock technical assistance</div>;
                  </h3>;
                  <div className=space-y-3'>;
                    <div className='p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg>;
                      <div className=text-sm font-medium text-white mb-1'>;
                        15+ Years Experience;
                      </div>;
                      <div className='text-xs text-gray-400>;
                        Industry expertise and proven track record;
                      </div>;
                    </div>;
                    <div className=p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg'>;
                      <div className='text-sm font-medium text-white mb-1>;
                        500+ Services Delivered;
                      </div>;
                      <div className=text-xs text-gray-400'>;
                        Successful implementations worldwide;
                      </div>;
                    </div>;
                    <div className='p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg>;
                      <div className=text-sm font-medium text-white mb-1'>;
                        24/7 Support;
                      </div>;
                      <div className='text-xs text-gray-400>;
                        Round-the-clock technical assistance;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
                      View All Services;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;{/* Call to Action */}
<div className=mt-6 pt-6 border-t border-cyan-500/30'>;
                <div className='text-center>;
                  <h3 className=text-lg font-semibold text-white mb-3'>;
                    Ready to Transform Your Business?;
                  </h3>;
                  <p className='text-gray-400 mb-4 max-w-2xl mx-auto>;
                    Get in touch with our team of experts to discuss how our;
                    cutting-edge technology solutions can drive your business;
                    forward.;
                  </p>;
                  <div className=flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4'>;
                    <a;
                      href='/contact;
                      className=px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25';
                    >;
                      Get Started Today;
                    </a>;
                    <a;
href='/comprehensive-services-showcase-2025;
                      className=px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10';
                    >;
                      View All Services;
                    </a>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  )/* Main Contact Bar */;
}</a> </div> </div> > {action.icon;
}<span> {action.name;
}</span> </a>) )}</div> {/* Expand/Collapse Button */;
}<button) : (<ChevronDown className=w-4 h-4" />)}</button> </div> </div> </div> </div> {/* Expanded Information Panel */;
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3 > <div className=p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >15+ Years Experience</div> <div className=text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400 >Successful implementations worldwide</div> </div> <div className=p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >24/7 Support</div> <div className=text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className=flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact className=px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025 className=px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>)}</AnimatePresence> </div>) }
}</AnimatePresence> </div>) }}</AnimatePresence> </div>);
  /* Expanded Information Panel */;

<<<<<<< HEAD
  /* Expanded Information Panel */
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div>) }
}</AnimatePresence> </div>) }

;
}</AnimatePresence> </div>)

;
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3" > <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >15+ Years Experience</div> <div className="text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400" >Successful implementations worldwide</div> </div> <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1" >24/7 Support</div> <div className="text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto" > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025" className="px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>)}</AnimatePresence> </div>)
        )}
      </AnimatePresence>
    </div>
  )
}

}</AnimatePresence> </div>)

  /* Expanded Information Panel */
}<AnimatePresence> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) )
}</div> </div> <span>Why Choose Us</span> </h3> <div className="space-y-3 > <div className=p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >15+ Years Experience</div> <div className=text-xs text-gray-400" >Industry expertise and proven track record</div> </div> <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg > <div className=text-sm font-medium text-white mb-1" >500+ Services Delivered</div> <div className="text-xs text-gray-400 >Successful implementations worldwide</div> </div> <div className=p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg" > <div className="text-sm font-medium text-white mb-1 >24/7 Support</div> <div className=text-xs text-gray-400" >Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className="text-gray-400 mb-4 max-w-2xl mx-auto > Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className=flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4" > <a href="/contact className=px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started Today </a> <a href="/comprehensive-services-showcase-2025 className=px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10" > View All Services </a> </div> </div> </div> </div> </motion.div>)
}</AnimatePresence> </div>) }
"
=======

/* Main Contact Bar */ 
}</a> </div> </div> > {}
  action.icon}
}<span    /> {}
  action.name}
}</span> </a>) )
}</div> {}
  /* Expand/Collapse Button */}"
}<button) : (<ChevronDown className=\"w-4 h-4\"    />)
}</button> </div> </div> </div> </div> {
}
  /* Expanded Information Panel */ }
}<AnimatePresence    /> </div> </div> </div> Visit Website </a> </div> </div> </div> </a>) ) "
}</div> </div> <span    />Why Choose Us</span> </h3> <div className=\"space-y-3\"     /> <div className=\"p-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-lg\"     /> <div className=\"text-sm font-medium text-white mb-1\"     />15+ Years Experience</div> <div className=\"text-xs text-gray-400\"     />Industry expertise and proven track record</div> </div> <div className=\"p-3 bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-lg\"     /> <div className=\"text-sm font-medium text-white mb-1\"     />500+ Services Delivered</div> <div className=\"text-xs text-gray-400\"     />Successful implementations worldwide</div> </div> <div className=\"p-3 bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-lg\"     /> <div className=\"text-sm font-medium text-white mb-1\"     />24/7 Support</div> <div className=\"text-xs text-gray-400\"     />Round-the-clock technical assistance</div> </div> </div> </div> </div> Ready to Transform Your Business? </h3> <p className=\"text-gray-400 mb-4 max-w-2xl mx-auto\"     /> Get in touch with our team of experts to discuss how our cutting-edge technology solutions can drive your business forward. </p> <div className=\"flex flex-col sm: flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4\"     /> <a href=\"/contact\" className=\"px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25\"     /> Get Started Today </a> <a href=\"/comprehensive-services-showcase-2025\" className=\"px-6 py-3 text-cyan-400 hover:text-white border border-cyan-500/50 hover:border-cyan-400 rounded-lg transition-all duration-300 hover:bg-cyan-500/10\"     /> View All Services </a> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </div>)

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
