
import React from 'react';
import Link from 'next/link';
ursor/integrate-build-improve-and-re-verify-8f7d
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';


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

import {

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
} from "lucide-react";

import React from 'react;';
import Link from 'next/link';


export default function Footer() {


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

import React from './react';
import Link from './next / link';
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


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

} from "lucide-react";
origin/main
import React from 'react;';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
origin/automation-improvements-final


export default function Footer() {
export default function Footer() {;


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export default function Footer() {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

      { name: "AI Services", href: "/ai-services" },
      { name: "IT Services", href: "/it-services" },
      { name: "Micro SaaS", href: "/micro-saas" },

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
      { name: 'Blockchain', href: '/blockchain' },
      { name: 'IoT Solutions', href: '/iot' },
      { name: 'Cybersecurity', href: '/cybersecurity' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise' },
      { name: 'Startup Solutions', href: '/startup' },
      { name: 'E-commerce', href: '/ecommerce' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Education', href: '/industries/education' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            
origin/automation-improvements-final

              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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

                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>




>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> origin/feature/merge-conflicts-and-improvements

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
                  <Link 
                    href={link.href} 
origin/automation-improvements-final

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
origin/cursor/integrate-build-improve-and-re-verify-c7b5
              ))}
            </ul>
          </div>
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
origin/automation-improvements-final





>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127






          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"

          {/* Company */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3>
              {company.map((link) => (
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









>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4





          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"

          {/* Resources */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3>
              {resources.map((link) => (
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




>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
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
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">

              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">



>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> origin/feature/merge-conflicts-and-improvements

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

}

}


