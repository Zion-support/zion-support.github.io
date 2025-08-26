import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Zap, Globe, Users, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zion-slate text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-cyan">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors duration-200">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-zion-cyan" />
                <span>Services</span>
              </h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">AI Solutions</Link></li>
                <li><Link href="/services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Cloud Services</Link></li>
                <li><Link href="/services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Cybersecurity</Link></li>
                <li><Link href="/services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Consulting</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="w-4 h-4 text-zion-cyan" />
                <span>Company</span>
              </h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">About Us</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Contact</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Careers</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
