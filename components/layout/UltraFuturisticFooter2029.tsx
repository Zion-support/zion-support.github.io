>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Link from 'next / link';


import React from 'react';

import Link from 'next/link';
=======
import React from 'react',
import React from 'react';
import Link from 'next/link';>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { motion } from 'framer-motion';


  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Star,
  Rocket,
  Brain,
  Atom,
  Building,
  Briefcase,
  Microscope,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Zap,
  Sparkles,
  Shield,
  Cpu,;
  Database,;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star, ;


  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {category.title}
                  </h5>
                  <ul className='space-y-2'>
                    {category.services.map(service => (
                      <li key={service.name}>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    ))}
                  </ul>;
                </div>;
              ))}
=======
            </div>
          </div>
=======
            </div>;
          </div>;

          {/* Quick Links */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Quick Links
            </h4>
            <div className='grid grid-cols-2 gap-2'>
              {quickLinks.map(link => (
            </div>;
          </div>;


          {/* Quick Links */}



=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <Link
                  key={link.name}
                  href={link.href}
                  className='flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50'
                >
                  <link.icon className='w-4 h-4' />                  <span>{link.name}</span>                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <span>{link.name}</span>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>;
          </div>;


                  <span>{link.name}</span>

                </Link>
              ))}
=======
=======          {/* Footer Sections */}
          <div className='lg:col-span-1'>;
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>;
            <div className='space-y-4'>;
              {footerSections && footerSections.map(section => (;
                <div key={section && section.title}>;
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>;
                    {section && section.title}
                  </h5>;
                  <ul className='space-y-2'>;
                    {section && section.links.map(link => (;
                      <li key={link && link.name}>;
=======
          {/* Footer Sections */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>
            <div className='space-y-4'>
              {footerSections.map(section => (

                <div key={section.title}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {section.title}
                  </h5>
                  <ul className='space-y-2'>
                    {section.links.map(link => (
                      <li key={link.name}>
                        <Link
                          href={link && link.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200'>                <div key={section && section.title}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section && section.title}</h5>;
                  <ul className="space-y-2">;
                    {section && section.links.map((link) => (;
                      <li key={link && link.name}>;
                        <Link
                          href={link && link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200">;
                          {link && link.name}
                        </Link>;
                      </li>;

          {/* Footer Sections */}
          <div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>Company</h4>
            <div className='space-y-4'>
              {footerSections.map(section => (










=======
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
=======

            </div>
=======                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='border-t border-slate-700/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sm text-gray-400'>

              © 2025 Zion Tech Group. All rights reserved.
            </div>
            <div className='flex items-center space-x-6 text-sm text-gray-400'>
              <Link
                href='/privacy'
                className='hover:text-white transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='hover:text-white transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='hover:text-white transition-colors'
              >                Cookie Policy              © 2025 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
                className='hover:text-white transition-colors'>                Cookie Policy              © 2025 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <Link href="/privacy" className="hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Newsletter Signup */}
      <div className='bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50'>;
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>;
          <div className='text-center'>;
            <h3 className='text-2xl font-bold text-white mb-4'>;
              Stay Updated with Innovation;
            </h3>;
            <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>;
=======
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;

};
export default UltraFuturisticFooter2029;  );
};
export default UltraFuturisticFooter2029;


=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
