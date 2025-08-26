import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Cpu,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Discord,
  Facebook,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: Linkedin, color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: Twitter, color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: Github, color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: Youtube, color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: Discord, color: "hover:bg-indigo-600/20" },
    { name: "Facebook", url: "https://facebook.com/ziontechgroup", icon: Facebook, color: "hover:bg-blue-500/20" },
    { name: "Instagram", url: "https://instagram.com/ziontechgroup", icon: Instagram, color: "hover:bg-pink-500/20" }
  ];

  const footerSections = [
    {
      title: "Core Services",
      icon: Zap,
      links: [
        { label: "AI Solutions", path: "/services/ai", description: "Advanced AI & Machine Learning" },
        { label: "Cybersecurity", path: "/services/cybersecurity", description: "Enterprise Security Solutions" },
        { label: "Cloud & DevOps", path: "/services/cloud", description: "Cloud Infrastructure & Automation" },
        { label: "Quantum Technology", path: "/services/quantum", description: "Next-Gen Computing" },
        { label: "Space Technology", path: "/services/space", description: "Satellite & Space Solutions" }
      ]
    },
    {
      title: "Innovation Hub",
      icon: Brain,
      links: [
        { label: "Research & Development", path: "/research-development", description: "Cutting-edge Innovation" },
        { label: "Emerging Technologies", path: "/emerging-tech", description: "Future Tech Solutions" },
        { label: "AI Autonomous Systems", path: "/ai-autonomous-systems", description: "Self-learning AI" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Quantum AI" },
        { label: "Space Mining Automation", path: "/space-mining-automation", description: "Space Resources" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Shield,
      links: [
        { label: "Digital Transformation", path: "/services/transformation", description: "Business Modernization" },
        { label: "IT Infrastructure", path: "/services/infrastructure", description: "Enterprise IT Systems" },
        { label: "Consulting Services", path: "/services/consulting", description: "Strategic Advisory" },
        { label: "Compliance & Governance", path: "/compliance", description: "Regulatory Compliance" },
        { label: "Risk Management", path: "/risk-management", description: "Enterprise Risk Solutions" }
      ]
    },
    {
      title: "Resources & Support",
      icon: Cloud,
      links: [
        { label: "Documentation", path: "/docs", description: "Technical Resources" },
        { label: "API Reference", path: "/api", description: "Developer Tools" },
        { label: "Case Studies", path: "/case-studies", description: "Success Stories" },
        { label: "White Papers", path: "/white-papers", description: "Industry Insights" },
        { label: "Training Programs", path: "/training", description: "Skill Development" }
      ]
    }
  ];

  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/team" },
    { label: "Careers", path: "/careers" },
    { label: "News & Updates", path: "/news" },
    { label: "Partners", path: "/partners" },
    { label: "Blog", path: "/blog" },
    { label: "Events", path: "/events" },
    { label: "Webinars", path: "/webinars" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="group flex flex-col hover:text-cyan-400 transition-colors duration-300"
                      >
                        <span className="font-medium text-white group-hover:text-cyan-400">
                          {link.label}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-cyan-300">
                          {link.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Links & Contact */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <info.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-white hover:text-cyan-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div 
            className="bg-gradient-to-r from-cyan-900/50 via-blue-900/50 to-purple-900/50 rounded-2xl p-8 mb-12 border border-cyan-500/20"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Innovation
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, quantum computing, space technology, and emerging innovations delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="neon-button px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Bottom Bar */}
          <motion.div 
            className="border-t border-cyan-500/20 pt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>Made with innovation</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
