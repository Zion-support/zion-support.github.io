<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {;
  Mail,;
  Phone,;
  MapPin,;
  Facebook,;
  Twitter,;
  Linkedin,;
  Instagram,;
  Github,;
<<<<<<< HEAD
<<<<<<< HEAD
} from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
import React from 'react';
import Link from 'next/link';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail
  Phone
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Github
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
import React from 'react';
import Link from 'next/link';
ursor/integrate-build-improve-and-re-verify-8f7d
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  BookOpen,
  Building,
  Heart,
  DollarSign,
  Target,
  Zap,
  Award,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  Lock,
  Code,
  Home,
  Camera,
  Music,
  Gamepad2,
  Truck,
  Calculator,
  CreditCard,
  Paintbrush,
  HardDrive,
  Activity,
  Lightbulb,
  Wrench,
  PieChart,
  ClipboardList,
  Layers;
} from 'lucide-react';
ursor/integrate-build-improve-and-re-verify-8f7d

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail
  Phone
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Github
} from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
origin/main
const footerSections = [
  {
    title: 'Services',
    links: [
      { title: 'AI Services', href: '/ai-services', icon: Brain },
      { title: 'IT Services', href: '/it-services', icon: Network },
      { title: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
      { title: 'Quantum Computing', href: '/quantum-computing', icon: Code },
      { title: 'Blockchain', href: '/blockchain', icon: Lock },
      { title: 'IoT Solutions', href: '/iot', icon: Globe },
      { title: 'AR/VR Solutions', href: '/ar-vr', icon: Eye },
      { title: 'Space Technology', href: '/space-tech', icon: Settings }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Enterprise Solutions', href: '/enterprise', icon: Building },
      { title: 'Startup Solutions', href: '/startup', icon: Settings },
      { title: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { title: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
      { title: 'Automation', href: '/automation', icon: Zap },
      { title: 'Digital Transformation', href: '/digital-transformation', icon: TrendingUp },
      { title: 'Custom Development', href: '/custom-development', icon: Code }
    ]
  },
  {
    title: 'Industries',
    links: [
      { title: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { title: 'Finance', href: '/industries/finance', icon: DollarSign },
      { title: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { title: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { title: 'Education', href: '/industries/education', icon: BookOpen },
      { title: 'Real Estate', href: '/industries/real-estate', icon: Home },
      { title: 'Agriculture', href: '/industries/agriculture', icon: Target },
      { title: 'Energy', href: '/industries/energy', icon: Zap }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog', icon: FileText },
      { title: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { title: 'White Papers', href: '/white-papers', icon: FileText },
      { title: 'Webinars', href: '/webinars', icon: Calendar },
      { title: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { title: 'API Documentation', href: '/api-docs', icon: Code },
      { title: 'Training', href: '/training', icon: BookOpen },
      { title: 'FAQ', href: '/faq', icon: MessageSquare }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about', icon: Building },
      { title: 'Team', href: '/team', icon: Users },
      { title: 'Careers', href: '/careers', icon: Users },
      { title: 'Partners', href: '/partners', icon: Globe },
      { title: 'News', href: '/news', icon: FileText },
      { title: 'Contact', href: '/contact', icon: MessageSquare },
      { title: 'Privacy Policy', href: '/privacy', icon: Lock },
      { title: 'Terms of Service', href: '/terms', icon: FileText }
    ]
  },
  {
    title: 'Support',
    links: [
      { title: 'Help Center', href: '/help', icon: MessageSquare },
      { title: 'Documentation', href: '/docs', icon: FileText },
      { title: 'API Reference', href: '/api', icon: Code },
      { title: 'Status Page', href: '/status', icon: BarChart3 },
      { title: 'Community', href: '/community', icon: Users },
      { title: 'Training', href: '/training', icon: BookOpen },
      { title: 'Free Consultation', href: '/consultation', icon: Calendar },
      { title: 'Get Quote', href: '/quote', icon: FileText }
    ]
  }
];

const microSaasCategories = [
  { title: 'Marketing Tools', icon: Target, count: 15 },
  { title: 'Productivity', icon: Settings, count: 12 },
  { title: 'Analytics', icon: BarChart3, count: 18 },
  { title: 'Automation', icon: Zap, count: 22 },
  { title: 'Security', icon: Shield, count: 8 },
  { title: 'Finance', icon: DollarSign, count: 10 },
  { title: 'Design', icon: Paintbrush, count: 6 },
  { title: 'Development', icon: Code, count: 14 }
];
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

<<<<<<< HEAD
=======
>>>>>>> origin/automation-improvements-final

=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Cloud Solutions", href: "/cloud-solutions" }
      { name: "Cybersecurity", href: "/cybersecurity" }
      { name: "Database Solutions", href: "/database-solutions" }
    ]
<<<<<<< HEAD


<<<<<<< HEAD
  };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  };
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise-solutions" }
      { name: "Startup Solutions", href: "/startup-solutions" }
      { name: "Industries", href: "/industries" }
      { name: "Custom Development", href: "/custom-development" }
      { name: "Digital Transformation", href: "/digital-transformation" }
      { name: "Consulting", href: "/consulting" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Partners", href: "/partners" }
    ]
    resources: [
      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Documentation", href: "/docs/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Webinars", href: "/webinars" }
    ]
    legal: [
      { name: "Privacy Policy", href: "/privacy" }
      { name: "Terms of Service", href: "/terms" }
      { name: "Cookie Policy", href: "/cookies" }
      { name: "Security", href: "/security" }
      { name: "Compliance", href: "/compliance" }
      { name: "Accessibility", href: "/accessibility" }
    ]
  }
<<<<<<< HEAD
<<<<<<< HEAD
origin/main
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/main
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook }
    { name: "Twitter", href: "#", icon: Twitter }
    { name: "LinkedIn", href: "#", icon: Linkedin }
    { name: "Instagram", href: "#", icon: Instagram }
    { name: "GitHub", href: "#", icon: Github }
<<<<<<< HEAD

  const footerLinks = {;
    services: [;
      { name: "AI Services", href: "/ai-services" },;
      { name: "IT Services", href: "/it-services" },;
      { name: "Micro SaaS", href: "/micro-saas" },;
      { name: "Cloud Solutions", href: "/cloud-solutions" },;
      { name: "Cybersecurity", href: "/cybersecurity" },;
      { name: "Database Solutions", href: "/database-solutions" },;
    ],;
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise-solutions" },;
      { name: "Startup Solutions", href: "/startup-solutions" },;
      { name: "Industries", href: "/industries" },;
      { name: "Custom Development", href: "/custom-development" },;
      { name: "Digital Transformation", href: "/digital-transformation" },;
      { name: "Consulting", href: "/consulting" },;
    ],;
    company: [;
      { name: "About Us", href: "/about" },;
      { name: "Our Team", href: "/team" },;
      { name: "Careers", href: "/careers" },;
      { name: "Case Studies", href: "/case-studies" },;
      { name: "News", href: "/news" },;
      { name: "Partners", href: "/partners" },;
    ],;
    resources: [;
      { name: "Blog", href: "/blog" },;
      { name: "Documentation", href: "/docs" },;
      { name: "API Documentation", href: "/docs/api" },;
      { name: "Tutorials", href: "/tutorials" },;
      { name: "White Papers", href: "/white-papers" },;
      { name: "Webinars", href: "/webinars" },;
    ],;
    legal: [;
      { name: "Privacy Policy", href: "/privacy" },;
      { name: "Terms of Service", href: "/terms" },;
      { name: "Cookie Policy", href: "/cookies" },;
      { name: "Security", href: "/security" },;
      { name: "Compliance", href: "/compliance" },;
      { name: "Accessibility", href: "/accessibility" },;
    ],;
  };
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ];

const microSaasCategories = [
  { title: 'Marketing Tools', icon: Target, count: 15 },
  { title: 'Productivity', icon: Settings, count: 12 },
  { title: 'Analytics', icon: BarChart3, count: 18 },
  { title: 'Automation', icon: Zap, count: 22 },
  { title: 'Security', icon: Shield, count: 8 },
  { title: 'Finance', icon: DollarSign, count: 10 },
  { title: 'Design', icon: Paintbrush, count: 6 },
  { title: 'Development', icon: Code, count: 14 }
];



  const socialLinks = [;
    { name: "Facebook", href: "#", icon: Facebook },;
    { name: "Twitter", href: "#", icon: Twitter },;
    { name: "LinkedIn", href: "#", icon: Linkedin },;
    { name: "Instagram", href: "#", icon: Instagram },;
    { name: "GitHub", href: "#", icon: Github },;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
const microSaasCategories = [
  { title: 'Marketing Tools', icon: Target, count: 15 },
  { title: 'Productivity', icon: Settings, count: 12 },
  { title: 'Analytics', icon: BarChart3, count: 18 },
  { title: 'Automation', icon: Zap, count: 22 },
  { title: 'Security', icon: Shield, count: 8 },
  { title: 'Finance', icon: DollarSign, count: 10 },
  { title: 'Design', icon: Paintbrush, count: 6 },
  { title: 'Development', icon: Code, count: 14 }
];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

origin/main
  return (
    <footer className="bg-gray-900 text-white">;
      <div className="container mx-auto px-4 py-16">;
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}>;
              <div className="flex items-center space-x-2 mb-6">;
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                  <span className="text-white font-bold text-sm">Z</span>;
                </div>;
                <span className="text-xl font-bold">Zion Tech Group</span>;
              </div>;
              <p className="text-gray-400 mb-6">;
                Leading provider of cutting-edge technology solutions, helping;
                businesses transform and grow through innovation.;
              </p>;
              <div className="space-y-3">;
                <div className="flex items-center space-x-3">;
                  <Phone className="w-4 h-4 text-blue-400" />;
                  <span className="text-sm">+1 (555) 123-4567</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <Mail className="w-4 h-4 text-blue-400" />;
                  <span className="text-sm">hello@ziontechgroup && ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center space-x-3">;
                  <MapPin className="w-4 h-4 text-blue-400" />;
                  <span className="text-sm">San Francisco, CA</span>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Services */}
          <div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}>;
              <h3 className="text-lg font-semibold mb-6">Services</h3>;
              <ul className="space-y-3">;
                {footerLinks && footerLinks.services.map((link, index) => (;
                  <li key={index}>;
                    <Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </ul>;
            </motion && motion.div>;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </ul>;
            </motion && motion.div>;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Solutions */}
          <div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}>;
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>;
              <ul className="space-y-3">;
                {footerLinks && footerLinks.solutions.map((link, index) => (;
                  <li key={index}>;
                    <Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </ul>;
            </motion && motion.div>;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </ul>;
            </motion && motion.div>;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Company */}
          <div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}>;
              <h3 className="text-lg font-semibold mb-6">Company</h3>;
              <ul className="space-y-3">;
                {footerLinks && footerLinks.company.map((link, index) => (;
                  <li key={index}>;
                    <Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </ul>;
            </motion && motion.div>;
          </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </ul>;
            </motion && motion.div>;
          </div>;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Resources & Legal */}
          <div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;
              <h3 className="text-lg font-semibold mb-6">Resources</h3>;
              <ul className="space-y-3 mb-8">;
                {footerLinks && footerLinks.resources.map((link, index) => (;
                  <li key={index}>;
                    <Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}

              </ul>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <h3 className="text-lg font-semibold mb-6">Legal</h3>;
              <ul className="space-y-3">;
                {footerLinks && footerLinks.legal.map((link, index) => (;
                  <li key={index}>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </ul>
            </motion.div>
          </div>
        </div>

ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              </ul>;
            </motion && motion.div>;
          </div>;
        </div>;




=======
<<<<<<< HEAD
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36





            <motion.div
<<<<<<< HEAD


=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <motion.div
=======


=======


=======

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            <motion.div
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{ duration: 0 && 0.8 }}
              className="text-gray-400 text-sm mb-4 md:mb-0">;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </motion && motion.div>;
<<<<<<< HEAD
            <motion&& motion.div
=======

            <motion&& motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="flex space-x-4">;
              {socialLinks && socialLinks.map((social, index) => (;
                <a
                  key={index}
                  href={social && social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social && social.name}>;
                  <social && social.icon className="w-5 h-5" />;
                </a>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD
            </motion.div>

=======

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            </motion.div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Service Categories */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS Solutions</h4>
              <div className="grid grid-cols-2 gap-2">
                {microSaasCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-blue-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* AI Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">AI Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {aiServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-green-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {/* IT Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {itServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-purple-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">235+</div>
              <div className="text-gray-400">Services & Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95+</div>
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            



<<<<<<< HEAD
            
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
            
origin/main
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className="flex items-center space-x-6">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
origin/automation-improvements-final
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </motion && motion.div>;
          </div>;
        </div>;
      </div>;
    </footer>;
<<<<<<< HEAD
  );
}
export default Footer;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
export default Footer;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from './react';
import Link from './next / link';
import { motion  } from './framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from './lucide-react';
;
const Footer = () =>: any {
  const current_year = new Date ().getFullYear ();
;
  const footer_links = {
    services: [;
      { name: "AI Services", href: "/ai - services" },
      { name: "IT Services", href: "/it - services" },
      { name: "Micro SaaS", href: "/micro - saas" },
      { name: "Cloud Solutions", href: "/cloud - solutions" },
      { name: "Cybersecurity", href: "/cybersecurity" },
      { name: "Database Solutions", href: "/database - solutions" },
    ],
    solutions: [;
      { name: "Enterprise Solutions", href: "/enterprise - solutions" },
      { name: "Startup Solutions", href: "/startup - solutions" },
      { name: "Industries", href: "/industries" },
      { name: "Custom Development", href: "/custom - development" },
      { name: "Digital Transformation", href: "/digital - transformation" },
      { name: "Consulting", href: "/consulting" },
    ],
    company: [;
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Case Studies", href: "/case - studies" },
      { name: "News", href: "/news" },
      { name: "Partners", href: "/partners" },
    ],
    resources: [;
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/docs" },
      { name: "API Documentation", href: "/docs / api" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "White Papers", href: "/white - papers" },
      { name: "Webinars", href: "/webinars" },
    ],
    legal: [;
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  }
;
  const social_links = [;
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "GitHub", href: "#", icon: Github },
  ];
;
  return (
    <footer className="bg - gray - 900 text - white">;
      <div className="container mx - auto px - 4 py - 16">;
        <div className="grid lg:grid - cols - 5 md:grid - cols - 2 gap - 8">;
          {/* Company Info */}
          <div className="lg:col - span - 1">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className="flex items - center space - x-2 mb - 6">;
                <div className="w - 8 h - 8 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center">;
                  <span className="text - white font - bold text - sm">Z</span>;
                </div>;
                <span className="text - xl font - bold">Zion Tech Group</span>;
              </div>;
              <p className="text - gray - 400 mb - 6">;
                Leading provider of cutting - edge technology solutions, helping;
                businesses transform and grow through innovation.;
              </p>;
              <div className="space - y-3">;
                <div className="flex items - center space - x-3">;
                  <Phone className="w - 4 h - 4 text - blue - 400" />;
                  <span className="text - sm">+1 (555) 123 - 4567</span>;
                </div>;
                <div className="flex items - center space - x-3">;
                  <Mail className="w - 4 h - 4 text - blue - 400" />;
                  <span className="text - sm">hello@ziontechgroup.com</span>;
                </div>;
                <div className="flex items - center space - x-3">;
                  <MapPin className="w - 4 h - 4 text - blue - 400" />;
                  <span className="text - sm">San Francisco, CA</span>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
          {/* Services */}
          <div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >;
              <h3 className="text - lg font - semibold mb - 6">Services</h3>;
              <ul className="space - y-3">;
                {footer_links.services.map ((link, index) => (
                  <li key={index}>;
                    <Link;
                      href={link.href}
                      className="text - gray - 400 hover:text - white transition - colors";
                    >;
                      {link.name}
                    </Link>;
                  </li>))}
              </ul>;
            </motion.div>;
          </div>;
          {/* Solutions */}
          <div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >;
              <h3 className="text - lg font - semibold mb - 6">Solutions</h3>;
              <ul className="space - y-3">;
                {footer_links.solutions.map ((link, index) => (
                  <li key={index}>;
                    <Link;
                      href={link.href}
                      className="text - gray - 400 hover:text - white transition - colors";
                    >;
                      {link.name}
                    </Link>;
                  </li>))}
              </ul>;
            </motion.div>;
          </div>;
          {/* Company */}
          <div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >;
              <h3 className="text - lg font - semibold mb - 6">Company</h3>;
              <ul className="space - y-3">;
                {footer_links.company.map ((link, index) => (
                  <li key={index}>;
                    <Link;
                      href={link.href}
                      className="text - gray - 400 hover:text - white transition - colors";
                    >;
                      {link.name}
                    </Link>;
                  </li>))}
              </ul>;
            </motion.div>;
          </div>;
          {/* Resources & Legal */}
          <div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >;
              <h3 className="text - lg font - semibold mb - 6">Resources</h3>;
              <ul className="space - y-3 mb - 8">;
                {footer_links.resources.map ((link, index) => (
                  <li key={index}>;
                    <Link;
                      href={link.href}
                      className="text - gray - 400 hover:text - white transition - colors";
                    >;
                      {link.name}
                    </Link>;
                  </li>))}
              </ul>;
              <h3 className="text - lg font - semibold mb - 6">Legal</h3>;
              <ul className="space - y-3">;
                {footer_links.legal.map ((link, index) => (
                  <li key={index}>;
                    <Link;
                      href={link.href}
                      className="text - gray - 400 hover:text - white transition - colors";
                    >;
                      {link.name}
                    </Link>;
                  </li>))}
              </ul>;
            </motion.div>;
          </div>;
        </div>;
        {/* Bottom Section */}
        <div className="border - t border - gray - 800 mt - 12 pt - 8">;
          <div className="flex flex - col md:flex - row justify - between items - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - gray - 400 text - sm mb - 4 md:mb - 0";
            >;
              © {current_year} Zion Tech Group. All rights reserved.;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex space - x-4";
            >;
              {social_links.map ((social, index) => (
                <a;
                  key={index}
                  href={social.href}
                  className="w - 10 h - 10 bg - gray - 800 rounded - lg flex items - center justify - center hover:bg - blue - 600 transition - colors";
                  aria - label={social.name}
                >;
                  <social.icon className="w - 5 h - 5" />;
                </a>))}
            </motion.div>;
          </div>;
        </div>;
      </div>;
    </footer>);
}
;
export default Footer;
<<<<<<< HEAD
;
=======
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
