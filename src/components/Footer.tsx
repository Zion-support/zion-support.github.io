import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, Star, TrendingUp, Award, Target, Lightbulb, FileText, BarChart3, Network, Server, Eye, TestTube, Handshake, HelpCircle, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';

// Contact information
const contactInfo = [
  { label: 'Email', value: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com', icon: Mail },
  { label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
  { label: 'Address', value: '123 Tech Street, Innovation City, IC 12345', href: '#', icon: MapPin },
  { label: 'Website', value: 'ziontechgroup.com', href: 'https://ziontechgroup.com', icon: Globe },
];

// Social media links
const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];

// Current year
const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & ML Services",
      links: [
        { label: "AI Services", path: "/enhanced-services" },
        { label: "Micro SAAS", path: "/micro-saas-showcase" },
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/infrastructure" },
        { label: "Digital Transformation", path: "/services/transformation" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research", path: "/research-development" },
        { label: "Events", path: "/events" },
        { label: "Training", path: "/training" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Consulting", path: "/services" },
        { label: "Request Quote", path: "/contact" }
      ]
    }
  ];

  const achievements = [
    { icon: Award, label: "500+", description: "Projects Delivered" },
    { icon: Users, label: "50+", description: "Expert Team Members" },
    { icon: Star, label: "99.9%", description: "Client Satisfaction" },
    { icon: TrendingUp, label: "200%", description: "Average ROI" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Solutions', href: '/services/iot' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', icon: Zap },
        { name: 'AI Virtual Assistant', path: '/services/ai-virtual-assistant', icon: Users },
        { name: 'AI Data Analytics', path: '/services/ai-data-analytics', icon: BarChart3 },
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Cpu },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Cpu },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Heart },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Shield }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'IT Services', path: '/it-services', icon: Building },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Zap },
        { name: 'Innovative Services 2025', path: '/innovative-services-showcase-2025', icon: Sparkles },
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Building },
        { name: 'All Services', path: '/services', icon: Zap }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Sparkles,
      links: [
        { name: 'Innovative Services 2028', path: '/innovative-services-showcase-2028', icon: Sparkles },
        { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: DollarSign },
        { name: 'Ultimate Services 2026', path: '/ultimate-services-showcase-2026', icon: Rocket },
        { name: 'Services 2026', path: '/services-2026', icon: Target },
        { name: 'New Services 2025', path: '/new-services-showcase-2025', icon: TrendingUp },
        { name: 'Ultimate Services 2025', path: '/ultimate-services-showcase-2025', icon: Award },
        { name: 'Comprehensive Services 2025', path: '/comprehensive-services-landing-2025', icon: Globe }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">AI & Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the future of technology innovation with cutting-edge AI solutions, 
              expert talent, and comprehensive digital transformation services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

            {/* Navigation sections */}
            {/* This section was removed as per the new_code, as the footerNavigation object was removed. */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-purple/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-4 w-4 text-red-500 hidden sm:inline" />
              <span className="hidden sm:inline">for innovation</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
