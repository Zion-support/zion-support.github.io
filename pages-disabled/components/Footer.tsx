<<<<<<< HEAD

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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

class ErrorBoundary extends React.Component {
  constructor(props) {
=======

class ErrorBoundary extends React.Component {}
  constructor(props) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
import React from "react";"
import Link from "next/link";"
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "lucide-react";
const Footer = () => {}
  const currentYear = new Date().getFullYear();
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';

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

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const footerLinks = {
    services: [
      { name: "AI Services", href: "/ai-services" }
      { name: "IT Services", href: "/it-services" }
      { name: "Micro SaaS", href: "/micro-saas" }
      { name: "Cloud Solutions", href: "/cloud-solutions" }
      { name: "Cybersecurity", href: "/cybersecurity" }
      { name: "Database Solutions", href: "/database-solutions" }
    ]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise-solutions" }
      { name: "Startup Solutions", href: "/startup-solutions" }
      { name: "Industries", href: "/industries" }
      { name: "Custom Development", href: "/custom-development" }
      { name: "Digital Transformation", href: "/digital-transformation" }
=======

  const footerLinks = {}
    services: ["
      { name: "AI Services", href: "/ai-services" }"
      { name: "IT Services", href: "/it-services" }"
      { name: "Micro SaaS", href: "/micro-saas" }"
      { name: "Cloud Solutions", href: "/cloud-solutions" }"
      { name: "Cybersecurity", href: "/cybersecurity" }"
      { name: "Database Solutions", href: "/database-solutions" }
    ]

    solutions: ["
      { name: "Enterprise Solutions", href: "/enterprise-solutions" }"
      { name: "Startup Solutions", href: "/startup-solutions" }"
      { name: "Industries", href: "/industries" }"
      { name: "Custom Development", href: "/custom-development" }"
      { name: "Digital Transformation", href: "/digital-transformation" }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      { name: "Consulting", href: "/consulting" }
    ]
    company: ["
      { name: "About Us", href: "/about" }"
      { name: "Our Team", href: "/team" }"
      { name: "Careers", href: "/careers" }"
      { name: "Case Studies", href: "/case-studies" }"
      { name: "News", href: "/news" }"
      { name: "Partners", href: "/partners" }
    ]
    resources: ["
      { name: "Blog", href: "/blog" }"
      { name: "Documentation", href: "/docs" }"
      { name: "API Documentation", href: "/docs/api" }"
      { name: "Tutorials", href: "/tutorials" }"
      { name: "White Papers", href: "/white-papers" }"
      { name: "Webinars", href: "/webinars" }
    ]
    legal: ["
      { name: "Privacy Policy", href: "/privacy" }"
      { name: "Terms of Service", href: "/terms" }"
      { name: "Cookie Policy", href: "/cookies" }"
      { name: "Security", href: "/security" }"
      { name: "Compliance", href: "/compliance" }"
      { name: "Accessibility", href: "/accessibility" }
    ]
  }
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook }
    { name: "Twitter", href: "#", icon: Twitter }
    { name: "LinkedIn", href: "#", icon: Linkedin }
    { name: "Instagram", href: "#", icon: Instagram }
    { name: "GitHub", href: "#", icon: Github }
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  const socialLinks = [;
    { name: "Facebook", href: "#", icon: Facebook },;
    { name: "Twitter", href: "#", icon: Twitter },;
    { name: "LinkedIn", href: "#", icon: Linkedin },;
    { name: "Instagram", href: "#", icon: Instagram },;
    { name: "GitHub", href: "#", icon: Github },;
  ];

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  return (
    <footer className="bg-gray-900 text-white">;
      <div className="container mx-auto px-4 py-16">;
=======

  const socialLinks = ["
    { name: "Facebook", href: "#", icon: Facebook }"
    { name: "Twitter", href: "#", icon: Twitter }"
    { name: "LinkedIn", href: "#", icon: Linkedin }"
    { name: "Instagram", href: "#", icon: Instagram }"
    { name: "GitHub", href: "#", icon: Github }

  const socialLinks = [;"
    { name: "Facebook", href: "#", icon: Facebook },;"
    { name: "Twitter", href: "#", icon: Twitter },;"
    { name: "LinkedIn", href: "#", icon: Linkedin },;"
    { name: "Instagram", href: "#", icon: Instagram },;"
    { name: "GitHub", href: "#", icon: Github },;
  ];

  return ("
    <footer className="bg-gray-900 text-white">;"
      <div className="container mx-auto px-4 py-16">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">;
          {/* Company Info */}"
          <div className="lg:col-span-1">;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

          {/* Company */}
          <div>;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}>;"
              <h3 className="text-lg font-semibold mb-6">Company</h3>;"
              <ul className="space-y-3">;
                {footerLinks && footerLinks.company.map((link, index) => (;
                  <li key={index}>;
                    <Link;
                      href={link && link.href}"
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}

          {/* Resources & Legal */}
          <div>;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }}>;"
              <h3 className="text-lg font-semibold mb-6">Resources</h3>;"
              <ul className="space-y-3 mb-8">;
                {footerLinks && footerLinks.resources.map((link, index) => (;
                  <li key={index}>;
                    <Link;
                      href={link && link.href}"
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
</ul>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
ursor/integrate-build-improve-and-re-verify-8f7d;
origin/main;
origin/automation-improvements-final;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </ul>;
"
              <h3 className="text-lg font-semibold mb-6">Legal</h3>;"
              <ul className="space-y-3">;
                {footerLinks && footerLinks.legal.map((link, index) => (;
                  <li key={index}>;
<Link
                      href={link && link.href}
                      className="text-gray-400 hover:text-white transition-colors">;
                      {link && link.name}
                    </Link>;
                  </li>;
                ))}
<<<<<<< HEAD
              </ul>;
            </motion && motion.div>;
          </div>;
        </div>;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">;
=======

        {/* Bottom Section */}"
        <div className="border-t border-gray-800 mt-12 pt-8">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Zion Tech Group. All rights reserved.
            </motion.div>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <motion.div
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <motion.div
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            <motion.div
              transition={{ duration: 0 && 0.8 }}
=======
            <motion.div;
            <motion.div;
              transition={{ duration: 0 && 0.8 }}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className="text-gray-400 text-sm mb-4 md:mb-0">;
              © {currentYear} Zion Tech Group. All rights reserved.;
            </motion && motion.div>;

<motion&& motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}"
              className="flex space-x-4">;
              {socialLinks && socialLinks.map((social, index) => (;
                <a;
                  key={index}
                  href={social && social.href}"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social && social.name}>;"
                  <social && social.icon className="w-5 h-5" />;
                </a>;
              ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Service Categories */}
        <div className="mt-16 pt-8 border-t border-gray-800">
=======

        {/* Service Categories */}"
        <div className="mt-16 pt-8 border-t border-gray-800">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS Solutions</h4>"
              <div className="grid grid-cols-2 gap-2">
                {microSaasCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-blue-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Service Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-green-400">AI Services</h4>"
              <div className="grid grid-cols-2 gap-2">
                {aiServiceCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-green-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Service Categories */}
            <div>"
              <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>"
              <div className="grid grid-cols-2 gap-2">
                {itServiceCategories.map((category) => ("
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">"
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>"
                    <span className="text-purple-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}"
        <div className="mt-16 pt-8 border-t border-gray-800">"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>"
              <div className="text-3xl font-bold text-blue-400 mb-2">235+</div>"
              <div className="text-gray-400">Services & Solutions</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>"
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-purple-400 mb-2">95+</div>"
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>"
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>"
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}"
      <div className="bg-gray-800 border-t border-gray-700">"
        <div className="container mx-auto px-4 py-6">"
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
            <div className="text-gray-400 text-sm">
© 2025 Zion Tech Group. All rights reserved. |
              <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> |
              <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            <motion.div
=======
              © 2025 Zion Tech Group. All rights reserved. | "
              <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | "
              <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
            </div>

            <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <a;
                  key={index}
                  href={social.href}"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.name}
                >"
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
<<<<<<< HEAD
            <div className="flex items-center space-x-6">
=======
"
            <div className="flex items-center space-x-6">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap;
              </Link>"
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility;
              </Link>"
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy;
              </Link>
            </div>
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>
        </div>
      </div>
    </footer>

  );
<<<<<<< HEAD
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {}
  return (
    <MainLayout"
      title="Footer - Zion Tech Group""
      description="Footer component"
    >"
      <div className="min-h-screen bg-gray-50">"
        <div className="container mx-auto px-4 py-16">"
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Footer</h1>"
          <p className="text-xl text-gray-600">Footer component page</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
