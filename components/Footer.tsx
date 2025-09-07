<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Meeting Assistant', href: '/services/ai-meeting-assistant' },
      { name: 'Smart Invoice Generator', href: '/services/smart-invoice-generator' },
      { name: 'Web Development', href: '#' },
      { name: 'Cloud Services', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'Data Analytics', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Status', href: '#status' },
      { name: 'Contact Support', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services. Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
=======

  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram


  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ArrowRight;
  Phone,Mail,MapPin,Facebook,Twitter,Linkedin,Instagram;
  Instagram;

              {socialLinks.map((link) => (<a;
                  }
                  key={link.name}
                  href={link.href}

  Phone;
  Mail;
  MapPin;
  Facebook;
  Twitter;
  Linkedin;
  Instagram;
  ArrowRight;

          {/* Company Info */}Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,quantum computing, blockchain, IoT, and digital transformation services.;
            </p>;
              Leading technology solutions provider specializing in AI;
              cybersecurity, cloud infrastructure, quantum computing;
              blockchain, IoT, and digital transformation services.;
            </p>;
            {/* Contact Info */}

                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>;

              </div>;
            </div>;
            <p className="text-gray-300 mb-6 max-w-md>;"
              Leading provider of AI solutions, cloud services, and technology consulting.;
              Transforming businesses through innovation and cutting-edge technology.;
            </p>;

                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
import { motion } from 'framer-motion';'
import { 
  }
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 


const socialLinks = [;
  { "name": 'Facebook', "href": '#', "icon": Facebook,'
},
  { "name": 'Twitter', "href": '#', "icon": Twitter,'
},
  { "name": 'LinkedIn', "href": '#', "icon": Linkedin,'
},
  { "name": 'Instagram', "href": '#', "icon": Instagram,'
},
  { "name": 'GitHub', "href": '#', "icon": Github,'
}
];


ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';'
  MapPin,Phone,Mail,Facebook,Twitter,Linkedin,Instagram,Github;

              {socialLinks.map((link) => (<a;
                  }
                  key={link.name}
                  href={link.href}

                </a>;
              ))}
            </div>;
          </div>;
ursor/automate-test-improve-and-merge-code-646c;
          <div>;

                  >;
                    {link.name}
                    className="text-gray-300 "hover": text-white transition-colors">"

                    {link.nam
}
                  </Link>;
                </li>;

              {Object.entries(services).map(([category, links]) => (<div key={category}>;
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>;"
                  <ul className="space-y-1>;"
                    {links.slice(0, 3).map((link) => (<li key={link.name}>;
                        <Link;
                          href={link.href}

                        >;
                          {link.name}
                          className="text-sm text-gray-300 "hover": text-white transition-colors">"

                          {link.nam
}
                        </Link>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>
            </div>
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
          </div>
          {/* Services */}


=======
=======
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className=col-span-1 md:col-span-2>
            <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
            <p className=text-slate-400 mb-4>
              Leading provider of innovative micro SaaS products, AI services, and IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href=tel:+13024640950 className="text-slate-400 hover:text-white transition-colors">
                Phone: (302) 464-0950
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className=text-lg font-semibold text-white mb-4>Quick Links</h4>
            <ul className="space-y-2">

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              <li>
                <Link href=/ className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href=/services className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href=/about className="text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href=/contact className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className=text-lg font-semibold text-white mb-4>Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href=/ai-services className="text-slate-400 hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href=/cloud-solutions className="text-slate-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href=/micro-saas className="text-slate-400 hover:text-white transition-colors">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href=/blockchain className="text-slate-400 hover:text-white transition-colors">
                  Blockchain
                </Link>
              </li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ by Zion Tech Group</span>
            </div>
          </div>
=======
        <div className=border-t border-slate-800 mt-8 pt-8>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=text-slate-400 text-sm>
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href=/privacy className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href=/terms className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
          </div>

          <div>
            <h4 className=text-lg font-semibold mb-4>Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href=/services
                  className="text-gray-300 hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href=/services
                  className="text-gray-300 hover:text-white"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href=/services
                  className="text-gray-300 hover:text-white"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href=/services
                  className="text-gray-300 hover:text-white"
                >
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=text-lg font-semibold mb-4>Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href=/about className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href=/contact
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href=/careers
                  className="text-gray-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link href=/blog className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className=mt-8 pt-8 border-t border-gray-700>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className=text-gray-300 text-sm>
              © {new Date().getFullYear()} Zion Tech Group. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link
                href=/privacy
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href=/terms
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">"
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default Footer;
=======


=======
}
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

=======
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
