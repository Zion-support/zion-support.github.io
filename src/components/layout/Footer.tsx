import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Target, Brain, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-semibold text-white">Zion Tech Group</span>
            </div>
            <p className="text-sm text-gray-400">Leading with AI, micro SaaS, and enterprise IT solutions.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold flex items-center space-x-2 mb-3">
              <Target className="h-5 w-5 text-cyan-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-gray-300 hover:text-cyan-400 text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400">+1 302 464 0950</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400">kleber@ziontechgroup.com</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-cyan-400 mt-0.5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">© {currentYear} Zion Tech Group. All rights reserved.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-cyan-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400">Terms of Service</Link>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
}

