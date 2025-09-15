

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";







import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  PhoneMailMapPinGlobe
  TwitterLinkedinFacebookInstagram,
  ArrowRightRocketBrainCpuShield,
  StarUsersTrendingUpZap
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'Next-Generation AI',
    services: [
      { name: 'AI Multimodal 'Fusion', 'href: '/ai-multimodal-fusion-platform' },
      { name: 'AI Autonomous Decision 'Engine', 'href: '/ai-autonomous-decision-engine' },
      { name: 'AI Emotional 'Intelligence', 'href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Quantum Hybrid 'Computing', 'href: '/ai-quantum-hybrid-computing' }
    ]
  },
  {
    title: 'Cutting-Edge IT',
    services: [
      { name: 'Zero Trust 'Architecture', 'href: '/zero-trust-network-architecture' },
      { name: 'Edge Computing 'Orchestration', 'href: '/edge-computing-orchestration' },
      { name: '5G Private 'Networks', 'href: '/5g-private-network-solutions' },
      { name: 'Blockchain 'Infrastructure', 'href: '/blockchain-infrastructure-platform' }
    ]
  },
  {
    title: 'Innovative SaaS',
    services: [
      { name: 'AI Brand 'Personality', 'href: '/ai-brand-personality-generator' },
      { name: 'Virtual Event 'Holograms', 'href: '/virtual-event-hologram-platform' },
      { name: 'AI Meeting 'Transcriber', 'href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Mental Health 'Companion', 'href: '/ai-mental-health-companion' }
    ]
  }
];

const companyLinks = [
  { name: 'About 'Us', 'href: '/about' },
  { name: ''Careers', 'href: '/careers' },
  { name: ''News', 'href: '/news' },
  { name: 'Case 'Studies', 'href: '/case-studies' },
  { name: ''Blog', 'href: '/blog' },
  { name: ''Resources', 'href: '/resources' }
];

const supportLinks = [
  { name: 'Contact 'Support', 'href: '/contact' },
  { name: ''Documentation', 'href: '/docs' },
  { name: 'API 'Reference', 'href: '/api' },
  { name: 'Status 'Page', 'href: '/status' },
  { name: ''Security', 'href: '/security' },
  { name: 'Privacy 'Policy', 'href: '/privacy' }
];

const socialLinks = [
  { name: ''LinkedIn', 'href: 'https://www.linkedin.com/company/zion-tech-'group', 'icon: Linkedin },
  { name: ''Instagram', 'href: 'https://www.instagram.com/'ziontechgroup', 'icon: Instagram },
  { name: ''GitHub', 'href: 'https://github.com/Zion-'Holdings', 'icon: Globe }];

export default function EnhancedFooter() {
=======
import { Phone, Mail, MapPin, Globe;
  Twitter, Linkedin, Facebook, Instagram;
  ArrowRight, Rocket, Brain, Cpu, Shield;
  Star, Users, TrendingUp, Zap
 } from 'lucide-react';
const contactInfo = null;
  ];
const EnhancedFooter: React.FC = () => {
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
  const currentYear = new Date().getFullYear();



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





  return (
<<<<<<< HEAD
    <footer className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </div>
                  <div className="text-sm text-gray-400">Revolutionary Technology</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of 600+ revolutionary AIquantum computingand IT services. 
                Delivering 1000% ROI through cutting-edge solutions that transform businesses.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((categoryindex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-700/50">
          {/* Company & Support Links */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats & Social */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-cyan-400">600+</div>
                  <div className="text-xs text-gray-400">Services</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-400">1000%</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="text-2xl font-bold text-pink-400">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
=======
    <footer className;
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
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
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.6delay: 0.6 }}
=======
          transition={{ duration: 0.6, delay: 0.6 }}
>>>>>>> 30b45328d96b64c38b016a4cc6bac6d96d3d090e
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

            </p>
            <div className="flex space-x-4">

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

          <div className="space - y-4">;
            <h3 className="text - lg font - semibold">Services</h3>;
            <ul className="space - y-2">;
              <li>;
                <Link;
                  href="/services / web - development";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Web Development;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/services / mobile - apps";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Mobile Apps;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/services / ai - solutions";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  AI Solutions;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/services / cloud - services";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Cloud Services;
                </Link>;
              </li>;
            </ul>;
          </div>;
          {/* Company */}

          <div className="space - y-4">;
            <h3 className="text - lg font - semibold">Company</h3>;
            <ul className="space - y-2">;
              <li>;
                <Link;
                  href="/about";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  About Us;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/careers";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Careers;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/blog";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Blog;
                </Link>;
              </li>;
              <li>;

                <Link;
                  href="/contact";
                  className="text - gray - 300 hover:text - white transition - colors";
                >;

                  Contact;
                </Link>;
              </li>;
            </ul>;
          </div>;
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
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">
               {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              </div>;
            </div>;
          </div>;
        </div>;

        <div className="border-t border-gray-800 mt-8 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <p className="text-gray-400 text-sm">;
               {currentYear} Zion Tech Group. All rights reserved.;
            </p>;
            <div className="flex space-x-6 mt-4 md:mt-0">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );




