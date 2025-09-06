<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
import React from 'react;
import Link from 'next/link;
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react;
const EnhancedFooter = () => {;
  return (;
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
>>>>>>> origin/automation-fixes
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform their digital presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services/ai-solutions" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services/cloud-services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
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

export default EnhancedFooter;
=======
            <h3 className="text-lg font-semibold mb-4">Contact</h3>;
            <div className="space-y-3">;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-blue-400" />;
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">info@ziontechgroup.com</a>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-blue-400" />;
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-gray-300">123 Tech Street, Innovation District<br />San Francisco, CA 94105</span>;
              </div>;
              <div className="flex items-center space-x-2>                <MapPin className="w-4 h-4 text-blue-400" />"                <span className="text-gray-300>                  123 Tech Street, Innovation District<br />"                  San Francisco, CA 94105</span></div>;
    <footer className="bg-gray-800 text-white py-8">";
      <div className="container mx-auto px-4">";
        <div className="grid md: grid-cols-4 gap-8">;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>";
            <p className="text-gray-300">;
              Leading technology solutions provider for modern businesses.;
            </p>";
            <div className="flex space-x-4">";
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">";
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"  />;
                </svg>;
              </a>";
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">";
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"  />;
                </svg>;
              </a>;
            </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Services</h3>";
            <ul className="space-y-2">";
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>";
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>";
              <li><Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>";
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>;
            </ul>;
          </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Company</h3>";
            <ul className="space-y-2">";
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>";
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link></li>";
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>";
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>;
            </ul>;
          </div>;
          <div>";
            <h3 className="text-lg font-semibold mb-4">Contact</h3>";
            <div className="space-y-2 text-gray-300">;
              <p>Mobile: +1 302 464 0950</p>;
              <p>Email: kleber@ziontechgroup.com</p>;
              <p>Address: 364 E Main St STE 1008<br  />Middletown DE 19709</p>;
            </div>;
        </div>";
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">,
          <p>&copy, 2024 Zion Tech Group. All rights reserved.</p>;
        </div>;
      </div>;

      {/* Newsletter Section */}
      <div className="border-t border-gray-700 py-8">;
        <div className="container mx-auto px-4">;
          <div className="text-center">;
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>;
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest tech insights and updates.</p>;
            <div className="flex max-w-md mx-auto">;
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />;
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">Subscribe</button>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <p className="text-gray-300 text-sm">&copy; 2024 Zion Tech Group. All rights reserved.</p>;
            <div className="flex space-x-6 mt-4 md:mt-0">;
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</Link>;
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</Link>;
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</Link>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
<div className="border-t border-gray-700 py-6>        <div className="container mx-auto px-4">"          <div className="flex flex-col md:flex-row justify-between items-center>            <p className="text-gray-300 text-sm">"              &copy; 2024 Zion Tech Group. All rights reserved."            </p>;
            <div className="flex space-x-6 mt-4 md: mt-0>              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors>                Privacy Policy"              </Link>;
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors>                Terms of Service"              </Link>;
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors>                Sitemap"              </Link></div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  ),
"'export default EnhancedFooter}
>>>>>>> origin/automation-fixes
