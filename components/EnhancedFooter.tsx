

import React from 'react';

import Link from 'next/link';

import {



} from 'lucide-react';import { Brain, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';


  
  
  componentDidCatch(error, errorInfo) {
  
    
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Mail, Phone, MapPin, Twitter, Linkedin, Github, 
  Youtube, Facebook, Instagram, ArrowRight
} from 'lucide-react';

export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: Brain },
    { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', icon: Shield },
    { name: 'Space Technology', href: '/space-technology', icon: Rocket },
    { name: 'Autonomous DevOps', href: '/autonomous-devops', icon: Cpu },
    { name: 'Edge Computing', href: '/edge-computing', icon: Database },
    { name: 'Neural Interfaces', href: '/neural-interfaces', icon: Atom }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Press Kit', href: '/press' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Tools', href: '/dev-tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Whitepapers', href: '/whitepapers' }
  ];


  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

            <Link href="/" className="flex items-center space-x-2 mb-6">
                <Brain className="w-7 h-7 text-white" />
            </Link>


                <Brain className='w-6 h-6 text-white' />;


                <Mail className='w-4 h-4' />;
                <Phone className='w-4 h-4' />;


                <MapPin className='w-4 h-4' />                <span>Global Operations</span>              <div className="flex items-center space-x-3 text-white/70">;
                <MapPin className="w-4 h-4" />;




                    <Link
import Link from 'next / link';
import {
import React from 'react';
import Link from 'next/link';

import {










};export default EnhancedFooter;  );

              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/60 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <service.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-white/70 text-lg mb-8">
              Get the latest insights on AI, quantum computing, and technology innovation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Contact & Legal */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors duration-200">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Delaware, United States</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-white/70 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/security" className="text-white/70 hover:text-white transition-colors duration-200">
                  Security
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/50">
              <span>Made with ❤️ for the future</span>
              <span>•</span>
              <span>Powered by AI & Quantum Computing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

                    </Link>;
}export default EnhancedFooter);
export default EnhancedFooter;
import React from './react';
export default /**












                <Phone className="w-4 h-4"  />";


                <Mail className="w-4 h-4"  />";

                <MapPin className="w-4 h-4"  />,;

              <Globe className="w-5 h-5 mr-2 text-blue-400"  />;

                <Phone className="w - 4 h - 4"  />";
                <Mail className="w - 4 h - 4"  />";
                <MapPin className="w - 4 h - 4"  />,
              <Globe className="w - 5 h - 5 mr - 2 text - blue - 400"  />;

                  <Link href="{link.href}

                  <Link href="{link && link.href}


                  </Link>;
                  </Link>;

              <Shield className="w - 5 h - 5 mr - 2 text - green - 400"  />;

                  <Link href="{link.href}

                  <Link href="{link && link.href}


                  </Link>;
                  </Link>;

              <FileText className="w - 5 h - 5 mr - 2 text - purple - 400"  />;

                  <Link href="{link.href}

                  <Link href="{link && link.href}


                  </Link>;
                  </Link>;

              <HelpCircle className="w - 5 h - 5 mr - 2 text - yellow - 400"  />;

                  <Link href="{link.href}

                  <Link href="{link && link.href}


                  </Link>;

                  <Link href="{link && link.href}


                  </Link>;




                  </Link>;
                  <Link href="{link.href}
                  </Link>;


        <ArrowUp className="w-5 h-5"  />;


        <ArrowUp className="w - 5 h - 5"  />;
};export default EnhancedFooter;  )



