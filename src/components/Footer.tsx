<<<<<<< HEAD
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Globe, ArrowUp } from 'lucide-react';
>>>>>>> main

export default function Footer() {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
=======
  const scrollToTop = () => {;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
>>>>>>> main
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<<<<<<< HEAD
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
=======
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We help businesses innovate, scale, and succeed in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
>>>>>>> main
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/products" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              </Link>
=======
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">All Services</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Solutions</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
>>>>>>> main
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
>>>>>>> main
