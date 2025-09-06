<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
} from "lucide-react";

import React from 'react;';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />
=======

export default function Footer() {
export default function Footer() {
export default function Footer() {;
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
} from "lucide-react";
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

              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
              quantum computing, blockchain, IoT, and digital transformation services.
            </p>
            
              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>
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
    'IT Services': [
      { name: Cloud Migration', href: '/it-services#cloud-migration },
      { name: 'Cybersecurity Solutions', href: /it-services#cybersecurity' },
      { name: 'DevOps Automation, href: '/it-services#devops' },
      { name: Infrastructure Management', href: '/it-services#infrastructure },
      { name: 'Data Analytics', href: /it-services#data-analytics' },
      { name: 'Network Security, href: '/it-services#network-security' }
    ],
    Micro SAAS': [
      { name: 'CRM Solutions, href: '/micro-saas#crm' },
      { name: Project Management', href: '/micro-saas#project-management },
      { name: 'Email Marketing', href: /micro-saas#email-marketing' },
      { name: 'AI Content Tools, href: '/micro-saas#ai-content-tools' },
      { name: Analytics Dashboard', href: '/micro-saas#analytics-dashboard },
      { name: 'Automation Tools', href: /micro-saas#automation-tools' }
    ]
  };

  const company = [
    { name: 'About Us, href: '/about' },
    { name: Our Team', href: '/team },
    { name: 'Careers', href: /careers' },
    { name: 'Case Studies, href: '/case-studies' },
    { name: Blog', href: '/blog },
    { name: 'Press', href: /press' }
  ];

  const resources = [
    { name: 'Documentation, href: '/docs' },
    { name: API Reference', href: '/api-docs },
    { name: 'Tutorials', href: /tutorials' },
    { name: 'Support, href: '/support' },
    { name: FAQ', href: '/faq },
    { name: 'Contact', href: /contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn, href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: Twitter', href: 'https://twitter.com/ziontechgroup, icon: Twitter },
    { name: 'GitHub', href: https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook, href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  return (
    <footer className="bg-gray-900 text-white>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2>
            <div className="flex items-center mb-4">
              <div className=w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl>Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className=text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md>
              Leading provider of AI solutions, cloud services, and technology consulting.
              Transforming businesses through innovation and cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className=flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400 />
                <a href="tel:+13024640950" className=hover:text-blue-400 transition-colors">
                  +1 302 464 0950
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
            {/* Contact Info */}
              </div>
            </div>
          </div>
          {/* Services */}
<<<<<<< HEAD
=======
=======
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
              {footerLinks.services.map((link) => (
                <li key={link.name}>
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
            <h3 className=text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3>
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
=======

                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;


          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
          {/* Resources */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3>
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>



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
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-300 hover:text-white">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</Link></li>
              <li><Link href="/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className=text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm>
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
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
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
