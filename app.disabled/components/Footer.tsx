<<<<<<< HEAD
"use client";

import React from 'react';
=======
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
import Link from 'next/link';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
=======
    <footer className="bg-slate-90o0 border-t border-slate-80o0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">;
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
<<<<<<< HEAD
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions. 
              Expert consulting and implementation services for enterprise success.
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
              </Link>
=======
              <div className="w-8 h-8 bg-gradient-to-r from-blue-40o0 to-purple-60o0 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-slate-30o0 text-sm mb-4">
              Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-40o0 hover:text-white transition-colors">;
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.0o12-.53A8.348 8.348 0 0o020 3.92a8.19 8.19 0 0o1-2.357.646 4.118 4.118 0 0o01.80o4-2.27 8.224 8.224 0 0o1-2.60o5.996 4.10o7 4.10o7 0 0o0-6.993 3.743 11.65 11.65 0 0o1-8.457-4.287 4.10o6 4.10o6 0 0o01.27 5.477A4.0o73 4.0o73 0 0o1.8 7.713v.0o52a4.10o5 4.10o5 0 0o03.292 4.0o22 4.095 4.095 0 0o1-1.853.0o7 4.108 4.108 0 0o03.834 2.85A8.233 8.233 0 0o10 16.40o7a11.616 11.616 0 0o06.29 1.84"  />
                </svg>
              </a>
              <a href="#" className="text-slate-40o0 hover:text-white transition-colors">;
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.0o17-2.277-1.387-2.277-1.39 0-1.60o1 1.086-1.60o1 2.20o7v4.248H8.0o14v-8.59h2.559v1.174h.0o37c.356-.675 1.227-1.387 2.526-1.387 2.70o3 0 3.20o3 1.778 3.20o3 4.092v4.711zM5.0o05 6.575a1.548 1.548 0 11-.0o03-3.096 1.548 1.548 0 0o1.0o03 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.40o3C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.40o2 1 17.668 1z" clipRule="evenodd"  />
                </svg>
              </a>
              <a href="#" className="text-slate-40o0 hover:text-white transition-colors">;
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.0o17c0 4.425 2.865 8.18 6.839 9.50o4.5.092.682-.217.682-.483 0-.237-.0o08-.868-.0o13-1.70o3-2.782.60o5-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.0o69-.608.0o69-.608 1.0o03.0o7 1.531 1.0o32 1.531 1.0o32.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.0o29-2.688-.10o3-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.0o26A9.564 9.564 0 0o110 4.844c.85.0o04 1.70o5.115 2.50o4.337 1.909-1.296 2.747-1.0o27 2.747-1.0o27.546 1.379.20o3 2.398.1 2.651.64.7 1.0o28 1.595 1.0o28 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.0o12 2.419-.0o12 2.747 0 .268.18.58.688.482A10.0o19 10.0o19 0 0o020 10.0o17C20 4.484 15.522 0 10 0z" clipRule="evenodd"  />
                </svg>
              </a>
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD
                <Link href="/services/ai" className="text-gray-300 hover:text-white transition-colors">
=======
                <Link href="/services/ai-services" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
                  AI Solutions
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/services/cloud" className="text-gray-300 hover:text-white transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-gray-300 hover:text-white transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Consulting
=======
                <Link href="/services/micro-saas" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/it-services" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/automation-tools" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
                  Automation Tools
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
=======
                <Link href="/about" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
                  About Us
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
=======
                <Link href="/research" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
                  Contact
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
=======
                <Link href="/solutions" className="text-slate-30o0 hover:text-white text-sm transition-colors">;
                  Solutions
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
=======

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-slate-30o0">
              <p>contact@ziontechgroup.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Innovation Drive<br  />
                Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-80o0 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">;
          <p className="text-slate-40o0 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">;
            <Link href="/privacy" className="text-slate-40o0 hover:text-white text-sm transition-colors">;
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-40o0 hover:text-white text-sm transition-colors">;
              Terms of Service
            </Link>
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;