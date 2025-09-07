import React from 'react',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, ArrowRight, Star;
  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
 } from 'lucide-react';
const contactInfo = null;
import {
  Phone
  Mail
  MapPin
  Globe
  ArrowRight
  Star
  Rocket
  Brain
  Atom
  Building
  Briefcase
  Microscope
  Twitter
  Facebook
  Linkedin
  Instagram
  Youtube
  Github
  Zap
  Sparkles
  Shield
  Cpu
  Database;} from 'lucide-react';import {
  Phone, Mail, MapPin, Globe, ArrowRight, Star
  Rocket, Brain, Atom, Building, Briefcase, Microscope;
  Twitter, Facebook, Linkedin, Instagram, Youtube;
  Github, Zap, Sparkles, Shield, Cpu, Database
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
          {/* Service Categories */}

<div className='lg:col-span-1'>
            <h4 className='text-lg font-semibold text-white mb-6'>
              Our Services
            </h4>
            <div className='space-y-4'>
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {category.title}
                  </h5>
                  <ul className='space-y-2'    />
                    {category.services.map(service => (}
                      <li key={service.name}    />

                        <Link
href={service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group'    />

                          <ArrowRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200'    />
                          <span    />{service.name}</span>
                        </Link>
                      </li>
                    ))}

                  </ul>
                </div>

              ))}
          {/* Service Categories */}
          <div className='lg:col-span-1'    />
            <h4 className='text-lg font-semibold text-white mb-6'    />
              Our Services
            </h4>
            <div className='space-y-4'    />
              {serviceCategories && serviceCategories.map((category, index) => (<div key={index}    />
                  <h5 className='text-sm font-medium text-gray-300 mb-3'    />
                    {category && category.title}
                  </h5>
                  <ul className='space-y-2'    />
                    {category && category.services.map(service => (<li key={service && service.name}    />
                        <Link
                          href={service && service.href}
                          className='text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group'    />
                          <ArrowRight className='w-3 h-3 opacity-0 group-hover: opacity-100 transition-opacity duration-200'    />                          <span    />{service && service.nam}
}</span>              {serviceCategories && serviceCategories.map((category, index) => (<div key={index}    />
                  <h5 className=\"text-sm font-medium text-gray-300 mb-3\"    />{category && category.title}</h5>;"
                  <ul className=\"space-y-2\"    />
                    {category && category.services.map((service) => (<li key={service && service.name}    />
                        <Link
                          href={service && service.href}"
                          className=\"text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group\"    />;"
                          <ArrowRight className=\"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200\"    />
                          <span    />{service && service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className='lg:col-span-1'>
          {/* Footer Sections */}

            <div className='space-y-4'>
              {footerSections.map(section => (
                <div key={section.title}>
                  <h5 className='text-sm font-medium text-gray-300 mb-3'>
                    {section.title}
                  </h5>
                  <ul className='space-y-2'    />
                    {section.links.map(link => (<li key={link.name}    />
                        <Link
                          href={link.href}

                          className='text-sm text-gray-400 hover: text-white transition-colors duration-200'
                            />

                          {link.name}

            <div className='text-sm text-gray-400'>

              © 2025 Zion Tech Group. All rights reserved.
            </div>'
            <div className='flex items-center space-x-6 text-sm text-gray-400'>
                        </Link>
                      </li>))}
                  </ul>
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
