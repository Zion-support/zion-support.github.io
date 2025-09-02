<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
=======
React from
  'react';
import { Link } from 'lucide-react';
  'react-router-dom';'import { ;'  Brain, Mail,
  Phone, MapPin,
  Linkedin, Twitter,
  Github, Youtube,
  Instagram, ArrowRight,
  Heart, Globe,
  Shield, Users,
  Award, Star,
  Zap, Cloud,
  Database, Network,
  Target, CheckCircle,
  ExternalLink
} from
  'lucide-react';'{ Button } from
  '../ui/Button';
import { Badge } from 'lucide-react';
  '../ui/Badge;

const Footer: React.FC = () => {const currentYear = new Date().getFullYear();
>>>>>>> main

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of cutting-edge technology solutions, AI services, and digital transformation services for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>
              <li><Link href="/cloud-services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:contact@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;