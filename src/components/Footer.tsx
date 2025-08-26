import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  Send,
  ArrowRight,
  Star,
  TrendingUp,
  Shield as SecurityIcon,
  BookOpen,
  MessageCircle
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap, description: 'Connected device management' },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code, description: 'Decentralized solutions' },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building, description: 'Virtual replica technology' },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', description: 'Smart analytics platform' },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', description: 'Enhanced customer engagement' },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', description: 'Quantum-powered solutions' },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', description: 'Optimized logistics management' },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', description: 'Advanced security tools' },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', description: 'Edge device solutions' },
      { name: 'Content Creation', href: '/micro-saas/content-creation', description: 'AI-powered content tools' },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', description: 'Human resources automation' }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    items: [
      { name: 'Products', href: '/marketplace/products', description: 'Browse tech products' },
      { name: 'Services', href: '/services', description: 'Professional services' },
      { name: 'Talent', href: '/talent', description: 'Find skilled professionals' },
      { name: 'Equipment', href: '/equipment', description: 'High-tech hardware' },
      { name: 'Categories', href: '/marketplace', description: 'Browse all categories' },
      { name: 'Green IT', href: '/green-it', description: 'Eco-friendly solutions' },
      { name: 'IT Onsite Services', href: '/it-onsite-services', description: 'Local technical support' },
    ],
  },
  company: {
    title: 'Company',
    items: [
      { name: 'About Us', href: '/about', description: 'Learn our story' },
      { name: 'Blog', href: '/blog', description: 'Latest insights' },
      { name: 'Partners', href: '/partners', description: 'Strategic alliances' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'FAQ', href: '/faq', description: 'Common questions' },
      { name: 'Sitemap', href: '/sitemap', description: 'Site navigation' },
    ],
  },
  support: {
    title: 'Support & Resources',
    items: [
      { name: 'Help Center', href: '/help', description: 'Get help and support' },
      { name: 'Contact Support', href: '/contact', description: 'Reach our team' },
      { name: 'Terms of Service', href: '/terms', description: 'Legal terms' },
      { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
      { name: 'Security', href: '/security', description: 'Security practices' },
      { name: 'System Status', href: '/status', description: 'Service status' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin, color: 'hover:text-blue-600' },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook, color: 'hover:text-blue-500' },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
];
>>>>>>> origin/main

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];

  const footerSections = [
    {
      title: "Core Services",
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Tech Talent", path: "/talent" },
        { label: "Equipment", path: "/equipment" },
        { label: "Consulting", path: "/consulting" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "Cloud Services", path: "/services/cloud" }
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
        { label: "Request Quote", path: "/contact" },
        { label: "Emergency Support", path: "/support/emergency" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
>>>>>>> origin/main
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterSubmitted(true);
      setEmail('');
      // In a real app, you would send this to your backend
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-zion-slate-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Brain className="h-6 w-6 text-white" />
              </div>
                          <span className="text-2xl font-bold text-white">Zion Tech Group</span>
          </div>
          <p className="text-zion-slate-light mb-6 max-w-md">
            Leading the future of technology with revolutionary AI, IT infrastructure, 
            and innovative micro SAAS solutions that transform businesses.
          </p>
          
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Get the latest insights on AI, technology trends, and industry updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
>>>>>>> origin/main
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
