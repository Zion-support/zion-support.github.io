import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Cybersecurity", href: "/cybersecurity" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "Quantum Technology", href: "/quantum-technology" },
        { name: "Enterprise Solutions", href: "/enterprise-solutions" },
        { name: "IT Infrastructure", href: "/it-infrastructure" },
        { name: "Micro SaaS Solutions", href: "/micro-saas-solutions" },
        { name: "Innovative Services", href: "/innovative-services-showcase" },
        { name: "Comprehensive Services", href: "/comprehensive-services-overview" }
      ]
    },
    {
      title: "AI Autonomous",
      links: [
        { name: "AI Business Manager", href: "/ai-autonomous-business-manager" },
        { name: "AI Research Assistant", href: "/ai-autonomous-research-assistant" },
        { name: "AI Code Review", href: "/ai-autonomous-code-review" },
        { name: "AI Creative Director", href: "/ai-autonomous-creative-director" },
        { name: "AI Decision Engine", href: "/ai-autonomous-decision-engine" },
        { name: "AI Autonomous Systems", href: "/ai-autonomous-systems-platform" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Finance", href: "/solutions/finance" },
        { name: "Manufacturing", href: "/solutions/manufacturing" },
        { name: "Retail", href: "/solutions/retail" },
        { name: "Education", href: "/solutions/education" },
        { name: "Government", href: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Mission & Vision", href: "/mission" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Case Studies", href: "/case-studies" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Blog & News", href: "/news" },
        { name: "FAQ", href: "/faq" },
        { name: "Support", href: "/support" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: "💻" },
    { name: "YouTube", href: "https://www.youtube.com/@ziontechgroup", icon: "📺" },
    { name: "Facebook", href: "https://www.facebook.com/ziontechgroup", icon: "📘" },
    { name: "Instagram", href: "https://www.instagram.com/ziontechgroup", icon: "📷" }
  ];

  const quickLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-2xl">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of AI-powered technology solutions, quantum computing, 
                and enterprise digital transformation services. Transform your business with cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPinIcon className="h-5 w-5 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneIcon className="h-5 w-5 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 (302) 464-0950</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <GlobeAltIcon className="h-5 w-5 text-purple-400" />
                  <a href="https://ziontechgroup.com" className="hover:text-white transition-colors">ziontechgroup.com</a>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-6 w-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;