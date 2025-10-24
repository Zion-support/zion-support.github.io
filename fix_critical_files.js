#!/usr/bin/env node

const fs = require('fs');

function fixFooter() {
  const content = `import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Advanced AI and IT solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-solutions" className="text-gray-400 hover:text-white">IT Solutions</Link></li>
              <li><Link href="/cloud-solutions" className="text-gray-400 hover:text-white">Cloud Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">info@ziontechgroup.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`;

  fs.writeFileSync('./app/components/Footer.tsx', content);
  console.log('✅ Fixed Footer.tsx');
}

function fixNavigation() {
  const content = `import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;`;

  fs.writeFileSync('./app/components/Navigation.tsx', content);
  console.log('✅ Fixed Navigation.tsx');
}

function fixAboutPage() {
  const content = `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Leading the future of AI and IT solutions with innovative technology and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                efficiency, and innovation in the digital age.
              </p>
              <p className="text-gray-300 text-lg">
                We believe technology should be accessible, powerful, and transformative for 
                organizations of all sizes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Innovation and Excellence</li>
                <li>• Client-Centric Approach</li>
                <li>• Continuous Learning</li>
                <li>• Ethical Technology</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team consists of industry experts with years of experience in AI and IT solutions.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">
                  We leverage the latest technologies to deliver innovative solutions for our clients.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock support to ensure your systems run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;`;

  fs.writeFileSync('./app/about/page.tsx', content);
  console.log('✅ Fixed about/page.tsx');
}

function fixAccessibilityPage() {
  const content = `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Accessibility Solutions
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Making technology accessible to everyone with innovative AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-gray-300 text-lg mb-6">
                We believe technology should be accessible to everyone. Our accessibility solutions 
                ensure that digital experiences are inclusive and usable by people of all abilities.
              </p>
              <p className="text-gray-300 text-lg">
                From AI-powered screen readers to voice navigation systems, we create solutions 
                that break down barriers and empower users.
              </p>
            </div>
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI-Powered Accessibility Tools</li>
                <li>• Voice Navigation Systems</li>
                <li>• Screen Reader Optimization</li>
                <li>• Universal Design Principles</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Accessibility Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Web Accessibility</h3>
                <p className="text-gray-300">
                  Ensure your websites meet WCAG guidelines and are accessible to all users.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Mobile Accessibility</h3>
                <p className="text-gray-300">
                  Create mobile apps that are accessible and user-friendly for everyone.
                </p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">AI Assistants</h3>
                <p className="text-gray-300">
                  Intelligent assistants that help users navigate and interact with technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccessibilityPage;`;

  fs.writeFileSync('./app/accessibility/page.tsx', content);
  fs.writeFileSync('./app/accessibility-page/page.tsx', content);
  console.log('✅ Fixed accessibility pages');
}

function main() {
  console.log('🔧 Fixing critical files...');
  
  fixFooter();
  fixNavigation();
  fixAboutPage();
  fixAccessibilityPage();
  
  console.log('\n🎉 Critical files fixed!');
}

main();