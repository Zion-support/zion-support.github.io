import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


export default function Footer() {
  return (
    <footer className="bg-zion-slate-dark border-t border-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className="text-zion-slate-light mb-4">
              Leading provider of AI solutions, cloud infrastructure, and innovative micro SAAS platforms.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-zion-slate-light">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">
                  Micro SAAS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zion-slate mt-8 pt-8 text-center">
          <p className="text-zion-slate-light">
            © 2025 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}