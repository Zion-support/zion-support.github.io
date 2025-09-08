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
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram, 
  Zap, 
  Brain, 
  Server, 
  Shield, 
  Users, 
  Building2, 
  FileText, 
  Rocket, 
  Target, 
  Atom, 
  Network, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Workflow, 
  MessageCircle, 
  DollarSign, 
  Briefcase, 
  ArrowUp, 
  Sparkles, 
  Home, 
  Truck, 
  Factory, 
  Heart, 
  BookOpen, 
  BarChart3, 
  Cpu, 
  Leaf, 
  Satellite, 
  HelpCircle 
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />                </a>
              </div>
              <div className="flex items-center>
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href=mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
            {/* Contact Info */}
              </div>
            </div>
          </div>
          {/* Services */}
=======          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>

            <h3 className="text-lg font-semibold mb-6>Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1>
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
          {/* Company */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3>
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
          {/* Resources */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3>
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
            <h3 className="text-lg font-semibold mb-4">Resources</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.resources.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>;
          </div>;
        </div>;
      </div>;
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            {/* Social Links */}
            <div className=mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3>Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target=_blank"
                    rel="noopener noreferrer
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className=h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className=text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm>
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
                className="text-gray-400 hover:text-white transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link