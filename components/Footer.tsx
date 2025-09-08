

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import {;
  Phone,;
  Mail,;
  MapPin,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  ArrowRight,;

} from "lucide-react";

import React from 'react;';
import Link from 'next/link';

export default function Footer() {
export default function Footer() {
export default function Footer() {;
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,;
} from "lucide-react";
import React from 'react;';
import Link from 'next/link';

import React from './react';
import Link from './next / link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from './lucide-react';
;
export default /**
 * Footer - Function description
 */
function Footer() {
  const current_year = new Date ().getFullYear ();
;
  const footer_links = {
    services: [;
      { name: "AI Services", href: "/ai - services" },
      { name: "IT Services", href: "/it - services" },
      { name: "Micro SaaS", href: "/micro - saas" },

origin/main
import React from 'react;';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
origin/automation-improvements-final

export default function Footer() {
export default function Footer() {;
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" },
      { name: "IT Services", href: "/it-services" },
      { name: "Micro SaaS", href: "/micro-saas" },
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [
      { name: "Blockchain", href: "/blockchain" },
      { name: "IoT Solutions", href: "/iot" },
      { name: "Cybersecurity", href: "/cybersecurity" },
    ],


      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Blockchain", href: "/blockchain" }
      { name: "IoT Solutions", href: "/iot" }
      { name: "Cybersecurity", href: "/cybersecurity" }
    ]

    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise" }
      { name: "Startup Solutions", href: "/startup" }
      { name: "E-commerce", href: "/ecommerce" }
      { name: "Healthcare", href: "/industries/healthcare" }
      { name: "Finance", href: "/industries/finance" }
      { name: "Education", href: "/industries/education" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Contact", href: "/contact" }
    ]
    resources: [

    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },
      { name: "Startup Solutions", href: "/startup" },
      { name: "E - commerce", href: "/ecommerce" },
      { name: "Healthcare", href: "/industries / healthcare" },
      { name: "Finance", href: "/industries / finance" },
      { name: "Education", href: "/industries / education" },
    ],
    company: [;
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Case Studies", href: "/case - studies" },
      { name: "News", href: "/news" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [;

      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "White Papers", href: "/white - papers" },
      { name: "Support", href: "/support" },
    ],


      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Solutions', href: '/it-services' },
      { name: 'Cloud Computing', href: '/cloud-services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Support', href: '/support' }
    ]

export default function Footer() {;
  const currentYear = new Date().getFullYear();

  const footerLinks = {;
    services: [;
      { name: "AI Services", href: "/ai-services" },;
      { name: "IT Services", href: "/it-services" },;
      { name: "Micro SaaS", href: "/micro-saas" },;
      { name: "Blockchain", href: "/blockchain" },;
      { name: "IoT Solutions", href: "/iot" },;
      { name: "Cybersecurity", href: "/cybersecurity" },;
    ],;
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise" },;
      { name: "Startup Solutions", href: "/startup" },;
      { name: "E-commerce", href: "/ecommerce" },;
      { name: "Healthcare", href: "/industries/healthcare" },;
      { name: "Finance", href: "/industries/finance" },;
      { name: "Education", href: "/industries/education" },;
    ],;
    company: [;
      { name: "About Us", href: "/about" },;
      { name: "Our Team", href: "/team" },;
      { name: "Careers", href: "/careers" },;
      { name: "Case Studies", href: "/case-studies" },;
      { name: "News", href: "/news" },;
      { name: "Contact", href: "/contact" },;
    ],;
    resources: [;
      { name: "Blog", href: "/blog" },;
      { name: "Documentation", href: "/docs" },;
      { name: "API Reference", href: "/api" },;
      { name: "Tutorials", href: "/tutorials" },;
      { name: "White Papers", href: "/white-papers" },;
      { name: "Support", href: "/support" },;
    ],;

  };

  };

  };
origin/automation-improvements-final
  };

  };
      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Reference", href: "/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Support", href: "/support" }
    ]
  }
  return (
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}

          <div className="lg:col-span-2">;
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text-gray-300 mb-6 max-w-md">;
              Leading technology solutions provider specializing in AI,;
              cybersecurity, cloud infrastructure, quantum computing,;
              blockchain, IoT, and digital transformation services.;
            </p>;


              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            

              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>
            {/* Contact Info */}
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
            {/* Contact Info */}



                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(),
  const services = {
    'AI Solutions: [
      { name: 'AI-Powered Email Responder', href: /ai-services#ai-email-responder' },
      { name: 'AI Content Generation, href: '/ai-services#ai-content-generation' },
      { name: Computer Vision Solutions', href: '/ai-services#computer-vision },
      { name: 'Natural Language Processing', href: /ai-services#nlp' },
      { name: 'Machine Learning Models, href: '/ai-services#machine-learning' },
      { name: AI Analytics Platform', href: '/ai-services#ai-analytics }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Leading provider of micro SaaS products, AI services, and IT solutions. 
              We help businesses scale efficiently and securely in the digital age.
            </p>
            <div className="space-y-2">
              <div className=flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400 />
                <a href="tel:+13024640950" className=hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center>
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href=mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>



                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>

origin/main
origin/automation-improvements-final
            {/* Contact Info */}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>


ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>

                  <Link 
                    href={link.href} 

                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>



            <h3 className="text-lg font-semibold mb-6>Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1>
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              ))}
            </ul>
          </div>



            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;

          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;



          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"




origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

ursor/integrate-build-improve-and-re-verify-8f7d


          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"




origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>



ursor/integrate-build-improve-and-re-verify-8f7d
            
origin/main
origin/automation-improvements-final

            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;

            <h3 className="text-lg font-semibold mb-4">Resources</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.resources.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

  }
;
  return (
    <footer className="bg - gray - 900 text - white">;
      {/* Main Footer Content */}
      <div className="container mx - auto px - 4 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap - 8">;
          {/* Company Info */}
          <div className="lg:col - span - 2">;
            <Link href="/" className="text - 2xl font - bold text - white mb - 4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text - gray - 300 mb - 6 max - w-md">;
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, quantum computing,
              blockchain, IoT, and digital transformation services.;
            </p>;
            {/* Contact Info */}
            <div className="space - y-3">;
              <div className="flex items - center text - gray - 300">;
                <Phone className="w - 4 h - 4 mr - 3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items - center text - gray - 300">;
                <Mail className="w - 4 h - 4 mr - 3" />;
                <span > kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items - start text - gray - 300">;
                <MapPin className="w - 4 h - 4 mr - 3 mt - 1 flex - shrink - 0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Services</h3>;
            <ul className="space - y-2">;
              {footer_links.services.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Solutions */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Solutions</h3>;
            <ul className="space - y-2">;
              {footer_links.solutions.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Company & Resources */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Company</h3>;
            <ul className="space - y-2 mb - 6">;
              {footer_links.company.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
            <h3 className="text - lg font - semibold mb - 4">Resources</h3>;
            <ul className="space - y-2">;
              {footer_links.resources.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}

            </ul>;
          </div>;
        </div>;
      </div>;

              />;
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">;
                Subscribe;
                <ArrowRight className="w-4 h-4 ml-2" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">;
        <div className="container mx-auto px-4 py-6">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </div>;


            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a
                href="https://twitter && twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a
                href="https://facebook && facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a
                href="https://instagram && instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"



                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            {/* Social Links */}
            <div className=mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3>Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target=_blank"
                    rel="noopener noreferrer
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className=h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              <p>© {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
            <div className="flex space-x-6 text-sm>
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">



              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >

origin/main
origin/automation-improvements-final
                Privacy Policy
              </Link>
                className="text-gray-400 hover:text-white transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;


    </footer>);
}


}
    </footer>);
}


                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
}
