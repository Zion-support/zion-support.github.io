import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

import React from "react";
import Link from "next/link";
import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram


  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ArrowRight;
  Phone,Mail,MapPin,Facebook,Twitter,Linkedin,Instagram;
  Instagram;

              {socialLinks.map((link) => (<a;
                  }
                  key={link.name}
                  href={link.href}

  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ArrowRight;

          {/* Company Info */}Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,quantum computing, blockchain, IoT, and digital transformation services.;
            </p>;
              Leading technology solutions provider specializing in AI;
              cybersecurity, cloud infrastructure, quantum computing;
              blockchain, IoT, and digital transformation services.;
            </p>;
            {/* Contact Info */}

                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;

              </div>;
            </div>;
            <p className="text-gray-300 mb-6 max-w-md>;"
              Leading provider of AI solutions, cloud services, and technology consulting.;
              Transforming businesses through innovation and cutting-edge technology.;
            </p>;

                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
import { motion } from 'framer-motion';'
import { 
  }
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 


const socialLinks = [;
  { "name": 'Facebook', "href": '#', "icon": Facebook,'
},
  { "name": 'Twitter', "href": '#', "icon": Twitter,'
},
  { "name": 'LinkedIn', "href": '#', "icon": Linkedin,'
},
  { "name": 'Instagram', "href": '#', "icon": Instagram,'
},
  { "name": 'GitHub', "href": '#', "icon": Github,'
}
];

  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import React from 'react;';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Meeting Assistant', href: '/services/ai-meeting-assistant' },
      { name: 'Smart Invoice Generator', href: '/services/smart-invoice-generator' },
      { name: 'Web Development', href: '#' },
      { name: 'Cloud Services', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Data Analytics', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
      { name: 'Contact Support', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/solutions" className="text-gray-300 hover:text-white">Solutions</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-white">Research</a></li>
            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"    />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest technology insights and company updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                 />
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4"    />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
