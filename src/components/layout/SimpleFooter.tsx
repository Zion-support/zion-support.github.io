import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008, Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white text-sm">Micro SaaS</Link></li>
              <li><Link href="/cybersecurity" className="text-gray-300 hover:text-white text-sm">Cybersecurity</Link></li>
              <li><Link href="/cloud-platforms" className="text-gray-300 hover:text-white text-sm">Cloud Platforms</Link></li>
              <li><Link href="/data-analytics" className="text-gray-300 hover:text-white text-sm">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white text-sm">About</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white text-sm">Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white text-sm">Careers</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white text-sm">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )}