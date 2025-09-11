=======
import React from 'react',
import Link from 'next/link';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,;
  ArrowRight,;
} from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Zap,
  Bot,
  Cloud,
  Shield,;
  ArrowRight,;
} from 'lucide-react';

import {
  Mail
  Phone
  MapPin
  Globe
  Zap
  Bot
  Cloud
  Shield
  ArrowRight;
} from 'lucide-react';
export default function FuturisticFooter() {;
=======>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export default function FuturisticFooter() {
  const currentYear = new Date().getFullYear();import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';
export default function FuturisticFooter() {

export default function FuturisticFooter() {;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const currentYear = new Date().getFullYear();import { Mail, Phone, MapPin, Globe, Zap, Bot, Cloud, Shield, ArrowRight } from 'lucide-react';


export default function FuturisticFooter() {;



  ];
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'>;
      {/* Animated background elements */}

      <div className='absolute inset-0'>;
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5' />;
        <div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />;
        <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent' />;
      </div>;

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;

        {/* Main footer content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>;
          {/* Company Info */}
          <div className='lg:col-span-1'>;
            <div className='flex items-center space-x-2 mb-6'>;
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>;
                Zion Tech Group;
              </span>;
            </div>;
            <p className='text-gray-400 mb-6 leading-relaxed'>;
              Leading provider of AI-powered micro SaaS solutions, helping;
              businesses automate, optimize, and scale their operations with;
              cutting-edge technology.;
            </p>;
            <div className='flex space-x-4'>;
              {socialLinks && socialLinks.map(social => (;
                <a
                  key={social && social.name}
                  href={social && social.href}
                  target='_blank'
                  rel='noopener noreferrer'


  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">;
      {/* Animated background elements */}

      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />;
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />;
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />;
      </div>;

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-2 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">;
                <Zap className="w-6 h-6 text-white" />;
              </div>;
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Zion Tech Group;
              </span>;
            </div>;
            <p className="text-gray-400 mb-6 leading-relaxed">;
              Leading provider of AI-powered micro SaaS solutions, helping businesses automate, optimize, and scale their operations with cutting-edge technology.;
            </p>;
            <div className="flex space-x-4">;
              {socialLinks && socialLinks.map((social) => (;
          {/* Quick Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Services */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Contact Info */}
          <div>;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4'>;
              <div className='flex items-start space-x-3'>;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Phone</p>;
                  <a

              ))}            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <ArrowRight className='w-5 h-5 text-blue-400 mr-2' />
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Cloud className='w-5 h-5 text-green-400 mr-2' />
              Services
            </h3>
            <ul className='space-y-3'>
              {serviceCategories.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className='text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block'                  >              Services
            </h3>
            <ul className="space-y-3">
              {serviceCategories.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
==============



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Quick Links */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Services */}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {/* Contact Info */}
          <div>;
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>;
              <Shield className='w-5 h-5 text-purple-400 mr-2' />;
              Contact Us;
            </h3>;
            <div className='space-y-4'>;
              <div className='flex items-start space-x-3'>;
                <Phone className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />;
                <div>;
                  <p className='text-white font-medium'>Phone</p>;
                  <a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center'>
              <Shield className='w-5 h-5 text-purple-400 mr-2' />
              Contact Us
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
