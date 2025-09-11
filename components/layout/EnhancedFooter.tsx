<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

<<<<<<< HEAD
<<<<<<< HEAD
const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe;
  Twitter, Linkedin, Facebook, Instagram;
  ArrowRight, Rocket, Brain, Cpu, Shield;
  Star, Users, TrendingUp, Zap
 } from 'lucide-react';
const contactInfo = null;
  ];
const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
=======

const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();


>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const company = null;
  ];
  const resources = null;
  ];
  const socialLinks = null;
const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Globe
  Twitter, Linkedin, Facebook, Instagram
  ArrowRight, Rocket, Brain, Cpu, Shield
  Star, Users, TrendingUp, Zap
} from 'lucide-react'
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: 'Next-Generation AI'
    services: [
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform' }
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' }
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing' }
    ]
  }
  {
    title: 'Cutting-Edge IT'
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration' }
      { name: '5G Private Networks', href: '/5g-private-network-solutions' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' }
    ]
  }
  {
    title: 'Innovative SaaS'
    services: [
      { name: 'AI Brand Personality', href: '/ai-brand-personality-generator' }
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform' }
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' }
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion' }
    ]
  }
]
const companyLinks = [
  { name: 'About Us', href: '/about' }
  { name: 'Careers', href: '/careers' }
  { name: 'News', href: '/news' }
  { name: 'Case Studies', href: '/case-studies' }
  { name: 'Blog', href: '/blog' }
  { name: 'Resources', href: '/resources' }
]
const supportLinks = [
  { name: 'Contact Support', href: '/contact' }
  { name: 'Documentation', href: '/docs' }
  { name: 'API Reference', href: '/api' }
  { name: 'Status Page', href: '/status' }
  { name: 'Security', href: '/security' }
  { name: 'Privacy Policy', href: '/privacy' }
]
const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin }
  { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram }
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Globe }]
export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'AI Services', href: '/ai-services' }
    { name: 'IT Services', href: '/it-services' }
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' }
    { name: 'Micro SaaS', href: '/micro-saas' }
    { name: 'Security', href: '/security' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },;
    { name: 'Security', href: '/security' },;
    { name: 'Case Studies', href: '/case-studies' },;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'News', href: '/news' }
    { name: 'Partners', href: '/partners' }
  ];
  const resources = [
    { name: 'Blog', href: '/blog' }
    { name: 'Documentation', href: '/docs' }
    { name: 'Support', href: '/support' }
    { name: 'FAQ', href: '/faq' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github }
  ];
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (


    <footer className="bg-gray-900 text-white">
      {/* comment */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* comment */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <footer className;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover: text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-gray-700/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {" "}
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Zion Tech Group
            </div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform
              their digital presence.
<<<<<<< HEAD


            </p>
            <div className="flex space-x-4">
<<<<<<< HEAD

=======
=======
            </p>
            <div className="flex space-x-4">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
    <footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {" "}
          {/* Company Info */}
          <div className="space-y-4">;
            <div className="text-2xl font-bold text-blue-400 mb-4">;
              Zion Tech Group;
            </div>;
            <p className="text-gray-300 mb-6">;
              Leading technology solutions provider helping businesses transform;
              their digital presence.;
            </p>;
            <div className="flex space-x-4">;
              <a
                href="#"
<<<<<<< HEAD
                className="text-gray-400 hover:text-white transition-colors">;
                <Linkedin className="h-5 w-5" />;
              </a>;
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">;
                <Twitter className="h-5 w-5" />;
              </a>;
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">;
                <Github className="h-5 w-5" />;
import React from './react';
import Link from './next / link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github  } from './lucide-react';
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
=======
    <footer className="bg - gray - 900 text - white">;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
          {" "}
          {/* Company Info */}
          <div className="space - y-4">;
            <div className="text - 2xl font - bold text - blue - 400 mb - 4">;
              Zion Tech Group;
            </div>;
            <p className="text - gray - 300 mb - 6">;
              Leading technology solutions provider helping businesses transform;
              their digital presence.;
            </p>;
            <div className="flex space - x-4">;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Linkedin className="h - 5 w - 5" />;
              </a>;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Twitter className="h - 5 w - 5" />;
              </a>;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Github className="h - 5 w - 5" />;
              </a>;
            </div>;
          </div>;
          {/* Services */}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space - y-4">;
            <h3 className="text - lg font - semibold">Services</h3>;
            <ul className="space - y-2">;
              <li>;
                <Link;
                  href="/services / web - development";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Web Development;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/services / mobile - apps";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Mobile Apps;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/services / ai - solutions";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  AI Solutions;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/services / cloud - services";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Cloud Services;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Company */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space - y-4">;
            <h3 className="text - lg font - semibold">Company</h3>;
            <ul className="space - y-2">;
              <li>;
                <Link;
                  href="/about";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  About Us;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/careers";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Careers;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/blog";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Blog;
                </Link>;
              </li>;
              <li>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link;
                  href="/contact";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Contact;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Contact Info */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space-y-4">;
            <h3 className="text-lg font-semibold">Contact</h3>;
            <div className="space-y-2">;
              <div className="flex items-center space-x-2">;
                <Mail className="h-4 w-4 text-gray-400" />;
                <span className="text-gray-300">info@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Phone className="h-4 w-4 text-gray-400" />;
                <span className="text-gray-300">+1 (555) 123-4567</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="h-4 w-4 text-gray-400" />;
                <span className="text-gray-300">New York, NY</span>;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="space - y-4">;
            <h3 className="text - lg font - semibold">Contact</h3>;
            <div className="space - y-2">;
              <div className="flex items - center space - x-2">;
                <Mail className="h - 4 w - 4 text - gray - 400" />;
                <span className="text - gray - 300">info@ziontechgroup.com</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <Phone className="h - 4 w - 4 text - gray - 400" />;
                <span className="text - gray - 300">+1 (555) 123 - 4567</span>;
              </div>;
              <div className="flex items - center space - x-2">;
                <MapPin className="h - 4 w - 4 text - gray - 400" />;
                <span className="text - gray - 300">New York, NY</span>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="border - t border - gray - 800 mt - 8 pt - 8">;
          <div className="flex flex - col md:flex - row justify - between items - center">;
<p className="text - gray - 400 text - sm">;
              © {current_year} Zion Tech Group. All rights reserved.;
            </p>;
            <div className="flex space - x-6 mt - 4 md:mt - 0">;
              <Link;
                href="/privacy";
                className="text - gray - 400 hover:text - white text - sm transition - colors";
              >;
                Privacy Policy;
              </Link>;
              <Link;
                href="/terms";
                className="text - gray - 400 hover:text - white text - sm transition - colors";
              >;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                Terms of Service;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;

<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </footer>);
}
;
export default EnhancedFooter;
;
<<<<<<< HEAD

};

export default EnhancedFooter;

    </footer>);
}
;
export default EnhancedFooter;
;
                    >
                      <Icon className=&quot;w-5 h-5&quot; />
    <footer className;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover: text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
          {/* comment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/ai-development" className="text-gray-300 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link href="/services/cloud-services" className="text-gray-300 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link href="/services/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="text-gray-300 hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/blockchain-solutions" className="text-gray-300 hover:text-white transition-colors">Blockchain Solutions</Link></li>
              <li><Link href="/services/iot-platforms" className="text-gray-300 hover:text-white transition-colors">IoT Platforms</Link></li>
              <li><Link href="/services/cybersecurity" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>
          {/* comment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/solutions/small-business" className="text-gray-300 hover:text-white transition-colors">Small Business</Link></li>
              <li><Link href="/solutions/startups" className="text-gray-300 hover:text-white transition-colors">Startups</Link></li>
              <li><Link href="/solutions/healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/solutions/finance" className="text-gray-300 hover:text-white transition-colors">Finance</Link></li>
            </ul>
          </div>
          {/* comment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
            </ul>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400"   />
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">info@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400"   />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400"   />
                <span className="text-gray-300">123 Tech Street, Innovation District<br  />San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center space-x-2>                <MapPin className="w-4 h-4 text-blue-400"   />"                <span className="text-gray-300>                  123 Tech Street, Innovation District<br  />"                  San Francisco, CA 94105</span></div>
    <footer className="bg-gray-800 text-white py-8">"
      <div className="container mx-auto px-4">"
        <div className="grid md: grid-cols-4 gap-8">
          <div>"
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>"
            <p className="text-gray-300">
              Leading technology solutions provider for modern businesses.
            </p>"
            <div className="flex space-x-4">"
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">"
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"   />
                </svg>
              </a>"
              <a href="https:// comment;
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">"
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"   />
                </svg>
=======
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">;
                <Github className="h-5 w-5" />;
import React from './react';
import Link from './next / link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github  } from './lucide-react';
;
const EnhancedFooter: React.FC = () => {
  const current_year = new Date ().getFullYear ();
import React from 'react',
import { motion } from 'framer-motion',
import {
  Phone, Mail, MapPin, Globe,
  Twitter, Linkedin, Facebook, Instagram,
  ArrowRight, Rocket, Brain, Cpu, Shield,
  Star, Users, TrendingUp, Zap;
} from 'lucide-react',
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com';
},
const service_categories = [;
  {
    title: 'Next - Generation AI',
    services: [;
      { name: 'AI Multimodal Fusion', href: '/ai - multimodal - fusion - platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai - autonomous - decision - engine' },
      { name: 'AI Emotional Intelligence', href: '/ai - emotional - intelligence - platform' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai - quantum - hybrid - computing' }
    ];
  },
  {
    title: 'Cutting - Edge IT',
    services: [;
      { name: 'Zero Trust Architecture', href: '/zero - trust - network - architecture' },
      { name: 'Edge Computing Orchestration', href: '/edge - computing - orchestration' },
      { name: '5G Private Networks', href: '/5g - private - network - solutions' },
      { name: 'Blockchain Infrastructure', href: '/blockchain - infrastructure - platform' }
    ];
  },
  {
    title: 'Innovative SaaS',
    services: [;
      { name: 'AI Brand Personality', href: '/ai - brand - personality - generator' },
      { name: 'Virtual Event Holograms', href: '/virtual - event - hologram - platform' },
      { name: 'AI Meeting Transcriber', href: '/ai - meeting - transcriber - pro' },
      { name: 'AI Mental Health Companion', href: '/ai - mental - health - companion' }
    ];
  }
],
const company_links = [;
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case - studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
],
const support_links = [;

const _serviceCategories = [
  {_title: 'Next-Generation AI', _services: [
      { name: 'AI Multimodal Fusion', _href: '/ai-multimodal-fusion-platform'},
      {_name: 'AI Autonomous Decision Engine', _href: '/ai-autonomous-decision-engine'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-platform'},
      {_name: 'AI Quantum Hybrid Computing', _href: '/ai-quantum-hybrid-computing'}
    ]
  },
  {_title: 'Cutting-Edge IT', _services: [
      { name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration'},
      {_name: '5G Private Networks', _href: '/5g-private-network-solutions'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform'}
    ]
  },
  {_title: 'Innovative SaaS', _services: [
      { name: 'AI Brand Personality', _href: '/ai-brand-personality-generator'},
      {_name: 'Virtual Event Holograms', _href: '/virtual-event-hologram-platform'},
      {_name: 'AI Meeting Transcriber', _href: '/ai-meeting-transcriber-pro'},
      {_name: 'AI Mental Health Companion', _href: '/ai-mental-health-companion'}
    ]
  }
],

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
],

const supportLinks = [

  { name: 'Contact Support', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api' },
  { name: 'Status Page', href: '/status' },
  { name: 'Security', href: '/security' },
  { name: 'Privacy Policy', href: '/privacy' }
],
const social_links = [;
  { name: 'LinkedIn', href: 'https://www.linkedin.com / company / zion - tech - group', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com / ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com / Zion - Holdings', icon: Globe }],
export default /**
 * EnhancedFooter - Function description
 */
function EnhancedFooter() {
  const current_year = new Date ().getFullYear (),
  const services = [;
    { name: 'AI Services', href: '/ai - services' },
    { name: 'IT Services', href: '/it - services' },
    { name: 'Blockchain Solutions', href: '/blockchain - solutions' },
    { name: 'Micro SaaS', href: '/micro - saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case - studies' },
  ];
;
  const company = [;
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
  ];
;
  const resources = [;
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];
;
  const social_links = [;
    { name: 'LinkedIn', href: 'https://linkedin.com / company / zion - tech - group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com / ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com / zion - tech - group', icon: Github },
  ];
;
  return (
    <footer className="bg - gray - 900 text - white">;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
          {" "}
          {/* Company Info */}
          <div className="space - y-4">;
            <div className="text - 2xl font - bold text - blue - 400 mb - 4">;
              Zion Tech Group;
            </div>;
            <p className="text - gray - 300 mb - 6">;
              Leading technology solutions provider helping businesses transform;
              their digital presence.;
            </p>;
            <div className="flex space - x-4">;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Linkedin className="h - 5 w - 5" />;
              </a>;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Twitter className="h - 5 w - 5" />;
              </a>;
              <a;
                href="#";
                className="text - gray - 400 hover:text - white transition - colors";
              >;
                <Github className="h - 5 w - 5" />;
              </a>;
            </div>;
          </div>;
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
          <div>"
            <h3 className="text-lg font-semibold mb-4">Contact</h3>"
            <div className="space-y-2 text-gray-300">
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008<br  />Middletown DE 19709</p>
            </div>
        </div>"
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy, 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
      {/* comment */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get exclusive insights into the latest AI, quantum computing, and IT innovations. 
              Be the first to know about new services and breakthrough technologies.
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {" "}
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Zion Tech Group
            </div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform
              their digital presence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-apps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cloud Services
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default EnhancedFooter;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};

export default EnhancedFooter;

<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
