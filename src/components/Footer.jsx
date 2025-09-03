<<<<<<< HEAD
import: React, { useState } from 'react' import { Link } from 'react - router - dom' import { motion } from 'framer - motion' import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle, Send, Globe } from 'lucide - react' export function FooterNewsletter () { const [email, setEmail] = useState ('')  const [isSubscribed, setIsSubscribed] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const handleSubscribe = async (e) => { e.preventDefault ()  if (!email) return setIsLoading (true) ';';';';
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react - router - dom' import { motion } from 'framer - motion' import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle, Send, Globe } from 'lucide - react' export function FooterNewsletter () { const [email, setEmail] = useState ('')  const [isSubscribed, setIsSubscribed] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const handleSubscribe = async (e) => { e.preventDefault ()  if (!email) return setIsLoading (true) ''
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react - router - dom' import { motion } from 'framer - motion' import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle, Send, Globe } from 'lucide - react' export function FooterNewsletter () { const [email, setEmail] = useState (')  const [isSubscribed, setIsSubscribed] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const handleSubscribe = async (e) => { e.preventDefault ()  if (!email) return setIsLoading (true) ';
=======
<<<<<<< HEAD
import React from 'react';
import {Link } from 'react-router-dom';
import {Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Shield,
<<<<<<< HEAD
  Zap,
  Users,
  Globe'
=======
  Zap,;
  Users,;
  Globe;
=======
<<<<<<< HEAD
import React, { useState } from &apos;react&apos; import { Link } from &apos;react - router - dom&apos; import { motion } from &apos;framer - motion&apos; import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle, Send, Globe } from &apos;lucide - react&apos;&apos;' export function FooterNewsletter () {} const [email, setEmail] = useState (&apos;&apos;)&apos;&apos;  const [isSubscribed, setIsSubscribed] = useState (false)  const;const;const [isLoading, setIsLoading] = useState (false)  ;const handleSubscribe = async (e) => { e.preventDefault ()  if (!email) return setIsLoading (true) ';
&apos;}'
=======
<<<<<<< HEAD
import React from 'react';""
=======
<<<<<<< HEAD
import React, { useState } from 'react' import { Link } from 'react - router - dom' import { motion } from 'framer - motion' import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle, Send, Globe } from 'lucide - react' export function FooterNewsletter () { const [email, setEmail] = useState ('')  const [isSubscribed, setIsSubscribed] = useState (false)  const [isLoading, setIsLoading] = useState (false)  const handleSubscribe = async (e) => { e.preventDefault ()  if (!email) return setIsLoading (true) ';'
=======
import React from 'react
>>>>>>> main
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, 
  MapPin, Twitter, 
  Linkedin, Facebook, 
  Instagram, Youtube,
  ArrowRight, Shield,
  Zap, Users,
  Globe;", "
>>>>>>> main
>>>>>>> main
} from 'lucide-react';

export function Footer() {const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  const footerSections = [
    {'
      title: 'Services',
      links: ['
        { nam,
    e: 'AI Services', href: '/services/ai' },
        { name: 'Cloud Solutions', href: '/services/cloud' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'IT Infrastructure', href: '/services/infrastructure' },
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {'
      title: 'Solutions',
      links: ['
        { nam,
    e: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' }
      ]
    },
    {'
      title: 'Company',
      links: ['
        { nam,
    e: 'About Us', href: '/about' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' }
      ]
    },
    {'
      title: 'Resources',
      links: ['
        { nam,
    e: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' }
      ]
    },
    {'
      title: 'Support',
      links: ['
        { nam,
    e: 'Help Center', href: '/support' },
        { name: 'Training', href: '/training' },
        { name: 'Contact', href: '/contact' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Status', href: '/status' },
        { name: 'API Documentation', href: '/api' }
=======
<<<<<<< HEAD
  const footerSections = [{
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/services/ai' },
        {name: 'Cloud Solutions', href: '/services/cloud' },
        {name: 'Cybersecurity', href: '/services/cybersecurity' },
        {name: 'IT Infrastructure', href: '/services/infrastructure' },
        {name: 'Digital Transformation', href: '/services/transformation' },
        {name: 'Consulting', href: '/services/consulting' }
      ]
    },
    {title: 'Solutions',
      links: [{ name: 'Industry Solutions', href: '/solutions/industry' },
        {name: 'Manufacturing', href: '/solutions/manufacturing' },
        {name: 'Financial Services', href: '/solutions/financial' },
        {name: 'Healthcare', href: '/solutions/healthcare' },
        {name: 'Retail', href: '/solutions/retail' },
        {name: 'Education', href: '/solutions/education' }
      ]
    },
    {title: 'Company',
      links: [{ name: 'About Us', href: '/about' },
        {name: 'Team', href: '/about/team' },
        {name: 'Careers', href: '/careers' },
        {name: 'Partners', href: '/partners' },
        {name: 'News', href: '/news' },
        {name: 'Events', href: '/events' }
      ]
    },
    {title: 'Resources',
      links: [{ name: 'Case Studies', href: '/case-studies' },
        {name: 'Research & Development', href: '/research-development' },
        {name: 'Blog', href: '/blog' },
        {name: 'White Papers', href: '/white-papers' },
        {name: 'Webinars', href: '/webinars' },
        {name: 'Documentation', href: '/docs' }
      ]
    },
    {title: 'Support',
      links: [{ name: 'Help Center', href: '/support' },
        {name: 'Training', href: '/training' },
        {name: 'Contact', href: '/contact' },
        {name: 'Request Quote', href: '/request-quote' },
        {name: 'Status', href: '/status' },
        {name: 'API Documentation', href: '/api' }
>>>>>>> main
      ]
    }
  ];

<<<<<<< HEAD
  const socialLinks = ['
    { name: 'Twitter', href: 'http,
    s://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'http,
    s://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Facebook', href: 'http,
    s://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'http,
    s://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'http,
    s://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return ('
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20">
      {/* Main Footer Content */}"
      <div className="container mx-auto px-4 py-16">"
        <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-6 gap-8">
          {/* Company Info */}"
          <div className="lg:col-span-2">"
            <div className="flex items-center space-x-2 mb-6">"
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">"
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>"
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"
                <p className="text-zion-cyan text-sm">Innovating Tomorrow</p>
              </div>
            </div>
            "
=======
  const socialLinks = [{name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    {name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    {name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    {name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    {name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
=======
  const footerSections = [
<<<<<<< HEAD
    {""
      title: 'Services', links: [""
        { name: 'AI Services', href: '/services/ai' }, ""
        { name: 'Cloud Solutions', href: '/services/cloud' }, ""
        { name: 'Cybersecurity', href: '/services/cybersecurity' }, ""
        { name: 'IT Infrastructure', href: '/services/infrastructure' }, ""
        { name: 'Digital Transformation', href: '/services/transformation' }, ""
=======
  {"
      title: 'Services',
      links: ["
        { name: 'AI Services', href: '/services/ai' },"
        { name: 'Cloud Solutions', href: '/services/cloud' },"
        { name: 'Cybersecurity', href: '/services/cybersecurity' },"
        { name: 'IT Infrastructure', href: '/services/infrastructure' },"
        { name: 'Digital Transformation', href: '/services/transformation' },"
>>>>>>> main
        { name: 'Consulting', href: '/services/consulting' }
      ], },
    {""
      title: 'Solutions', links: [""
        { name: 'Industry Solutions', href: '/solutions/industry' }, ""
        { name: 'Manufacturing', href: '/solutions/manufacturing' }, ""
        { name: 'Financial Services', href: '/solutions/financial' }, ""
        { name: 'Healthcare', href: '/solutions/healthcare' }, ""
        { name: 'Retail', href: '/solutions/retail' }, ""
        { name: 'Education', href: '/solutions/education' }
      ], },
    {""
      title: 'Company', links: [""
        { name: 'About Us', href: '/about' }, ""
        { name: 'Team', href: '/about/team' }, ""
        { name: 'Careers', href: '/careers' }, ""
        { name: 'Partners', href: '/partners' }, ""
        { name: 'News', href: '/news' }, ""
        { name: 'Events', href: '/events' }
      ], },
    {""
      title: 'Resources', links: [""
        { name: 'Case Studies', href: '/case-studies' }, ""
        { name: 'Research & Development', href: '/research-development' }, ""
        { name: 'Blog', href: '/blog' }, ""
        { name: 'White Papers', href: '/white-papers' }, ""
        { name: 'Webinars', href: '/webinars' }, ""
        { name: 'Documentation', href: '/docs' }
      ], },
    {""
      title: 'Support', links: [""
        { name: 'Help Center', href: '/support' }, ""
        { name: 'Training', href: '/training' }, ""
        { name: 'Contact', href: '/contact' }, ""
        { name: 'Request Quote', href: '/request-quote' }, ""
        { name: 'Status', href: '/status' }, ""
        { name: 'API Documentation', href: '/api' }
      ], }
  ];

  const socialLinks = [""
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }, ""
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },""
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }, ""
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },""
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
>>>>>>> main
  ];

  return (""
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20">
<<<<<<< HEAD
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg: col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
=======
      {/* Main Footer Content */}""
      <div className="container mx-auto px-4 py-16">""
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}""
          <div className="lg:col-span-2">""
            <div className="flex items-center space-x-2 mb-6">""
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
>>>>>>> main
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>""
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>""
                <p className="text-zion-cyan text-sm">Innovating Tomorrow</p>
              </div>
            </div>
            ""
>>>>>>> main
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI-driven insights, 
              and transformative digital strategies for the future.
            </p>
            
<<<<<<< HEAD
            {/* Contact Info */}"
            <div className="space-y-3">"
              <div className="flex items-center space-x-3 text-zion-slate-light">"
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center space-x-3 text-zion-slate-light">"
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>"
              <div className="flex items-center space-x-3 text-zion-slate-light">"
                <MapPin className="h-4 w-4 text-zion-cyan" />
=======
            {/* Contact Info */}""
            <div className="space-y-3">""
              <div className="flex items-center space-x-3 text-zion-slate-light">""
                <Mail className="h-4 w-4 text-zion-cyan" /" >"
                <span>contact@ziontechgroup.com</span>
              </div>""
              <div className="flex items-center space-x-3 text-zion-slate-light">""
                <Phone className="h-4 w-4 text-zion-cyan" /" >"
                <span>+1 (555) 123-4567</span>
              </div>""
              <div className="flex items-center space-x-3 text-zion-slate-light">""
                <MapPin className="h-4 w-4 text-zion-cyan" /" >"
>>>>>>> main
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>"
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>"
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >"
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hove,
    r:opacity-100 transition-opacity" />
=======
<<<<<<< HEAD
          {/* Footer Sections */}, {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-zion-slate-light hover: text-zion-cyan transition-colors text-sm flex items-center group" >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}" >"
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>""
              <ul className="space-y-2">
                {section.links.map((link) => (
<<<<<<< HEAD
                  <li key={link.name}" >"
                    <Link to={link.href}""
                      className="text-zion-slate-light hover: text-zion-cyan transition-colors text-sm flex items-center group"" >"
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /" >"
=======
                  <li key={link.name}" >
                    <Link to={link.href}"
                      className='text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group  >'
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Newsletter Signup */}"
        <div className="mt-16 pt-8 border-t border-zion-purple/20">"
          <div className="max-w-2xl mx-auto text-center">"
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>"
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, cloud computing, cybersecurity, and digital transformation.
            </p>"
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input"
                type="email""
                placeholder="Enter your email""
                className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent"
              />"
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-medium rounded-lg transition-all duration-300 hove,
    r:shadow-lg hove,
    r:shadow-zion-purple/25">
=======
        {/* Newsletter Signup */}""
        <div className="mt-16 pt-8 border-t border-zion-purple/20">""
          <div className="max-w-2xl mx-auto text-center">""
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>""
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, cloud computing, cybersecurity, and digital transformation.
<<<<<<< HEAD
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent" />
=======
            </p>""
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input ""
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent"
              /" >"
>>>>>>> main
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25">
>>>>>>> main
                Subscribe
              </button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Trust Indicators */}"
        <div className="mt-16 pt-8 border-t border-zion-purple/20">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">"
            <div className="flex items-center space-x-3 text-zion-slate-light">"
              <Shield className="h-5 w-5 text-zion-cyan" />"
              <span className="text-sm">SOC 2 Compliant</span>
            </div>"
            <div className="flex items-center space-x-3 text-zion-slate-light">"
              <Zap className="h-5 w-5 text-zion-cyan" />"
              <span className="text-sm">99.9% Uptime</span>
            </div>"
            <div className="flex items-center space-x-3 text-zion-slate-light">"
              <Users className="h-5 w-5 text-zion-cyan" />"
              <span className="text-sm">500+ Clients</span>
            </div>"
            <div className="flex items-center space-x-3 text-zion-slate-light">"
              <Globe className="h-5 w-5 text-zion-cyan" />"
=======
<<<<<<< HEAD
        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md: grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 text-zion-slate-light">
              <Shield className="h-5 w-5 text-zion-cyan" />
=======
        {/* Trust Indicators */}""
        <div className="mt-16 pt-8 border-t border-zion-purple/20">""
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Shield className="h-5 w-5 text-zion-cyan" /" >"
>>>>>>> main
              <span className="text-sm">SOC 2 Compliant</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Zap className="h-5 w-5 text-zion-cyan" /" >"
              <span className="text-sm">99.9% Uptime</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Users className="h-5 w-5 text-zion-cyan" /" >"
              <span className="text-sm">500+ Clients</span>
            </div>""
            <div className="flex items-center space-x-3 text-zion-slate-light">""
              <Globe className="h-5 w-5 text-zion-cyan" /" >"
>>>>>>> main
              <span className="text-sm">Global Presence</span>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Bottom Footer */}"
      <div className="border-t border-zion-purple/20">"
        <div className="container mx-auto px-4 py-6">"
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 m,
    d:space-y-0">
            {/* Copyright */}"
=======
<<<<<<< HEAD
      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md: flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
=======
      {/* Bottom Footer */}""
      <div className="border-t border-zion-purple/20">""
        <div className="container mx-auto px-4 py-6">""
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}""
>>>>>>> main
>>>>>>> main
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

<<<<<<< HEAD
            {/* Legal Links */}"
            <div className="flex items-center space-x-6 text-sm">"
              <Link to="/privacy-policy" className="text-zion-slate-light hover: text-zion-cyan transition-colors">
                Privacy Policy
              </Link>"
              <Link to="/terms-of-service" className="text-zion-slate-light hove,
    r:text-zion-cyan transition-colors">
                Terms of Service
              </Link>"
              <Link to="/cookie-policy" className="text-zion-slate-light hove,
    r:text-zion-cyan transition-colors">
=======
<<<<<<< HEAD
            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-zion-slate-light hover: text-zion-cyan transition-colors">
=======
            {/* Legal Links */}""
            <div className="flex items-center space-x-6 text-sm">""
              <Link to="/privacy-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                Privacy Policy
              </Link>""
              <Link to="/terms-of-service" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>""
              <Link to="/cookie-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
>>>>>>> main
                Cookie Policy
              </Link>
            </div>

<<<<<<< HEAD
            {/* Social Links */}"
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}"
                  target="_blank""
                  rel="noopener noreferrer""
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hove,
    r:bg-zion-purple/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >"
                  <social.icon className="h-5 w-5" />
=======
            {/* Social Links */}""
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
<<<<<<< HEAD
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="p-2 text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-300" aria-label={social.name} >
                  <social.icon className="h-5 w-5" />
=======
                <a key={social.name}
                  href={social.href}""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}" >"
                  <social .icon className="h-5 w-5" /" >"
>>>>>>> main
>>>>>>> main
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  );
}"
=======
  );,
}
<<<<<<< HEAD
""
=======
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
