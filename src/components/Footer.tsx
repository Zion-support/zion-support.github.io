import React, { useState } from 'react';
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
      title: "Core Services",
      icon: Zap,
      links: [
        { label: "AI & Analytics", path: "/services", description: "Machine Learning & Data Science" },
        { label: "Quantum Computing", path: "/services", description: "Quantum AI & Optimization" },
        { label: "Cybersecurity", path: "/services", description: "AI-Powered Security" },
        { label: "Cloud Services", path: "/services", description: "DevOps & Infrastructure" },
        { label: "IoT & Edge", path: "/services", description: "Smart Devices & Networks" },
        { label: "Blockchain", path: "/services", description: "DeFi & Smart Contracts" }
      ]
    },
    {
      title: "Innovation Labs",
      icon: Brain,
      links: [
        { label: "Research & Development", path: "/research-development", description: "Cutting-edge Research" },
        { label: "Quantum AI", path: "/services", description: "Quantum Machine Learning" },
        { label: "Autonomous Systems", path: "/services", description: "Self-Learning AI" },
        { label: "Neuromorphic Computing", path: "/services", description: "Brain-inspired AI" },
        { label: "Synthetic Biology", path: "/services", description: "AI-Driven Bioengineering" },
        { label: "Space Technology", path: "/services", description: "Space Exploration & Mining" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Target,
      links: [
        { label: "Healthcare Technology", path: "/services", description: "AI Medicine & Diagnostics" },
        { label: "Financial Services", path: "/services", description: "FinTech & AI Trading" },
        { label: "Manufacturing", path: "/services", description: "Smart Factory & Industry 4.0" },
        { label: "Energy & Utilities", path: "/services", description: "Green Tech & Sustainability" },
        { label: "Transportation", path: "/services", description: "Autonomous Vehicles & Logistics" },
        { label: "Retail & E-commerce", path: "/services", description: "AI-Powered Commerce" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { label: "About Us", path: "/about", description: "Our Mission & Vision" },
        { label: "Our Team", path: "/about", description: "Expert Professionals" },
        { label: "Careers", path: "/careers", description: "Join Our Team" },
        { label: "News & Updates", path: "/news", description: "Latest Developments" },
        { label: "Case Studies", path: "/case-studies", description: "Success Stories" },
        { label: "Partners", path: "/partners", description: "Strategic Alliances" }
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { label: "Blog", path: "/blog", description: "Insights & Analysis" },
        { label: "Documentation", path: "/docs", description: "Technical Guides" },
        { label: "White Papers", path: "/white-papers", description: "Research Papers" },
        { label: "Webinars", path: "/webinars", description: "Educational Content" },
        { label: "Training", path: "/training", description: "Skill Development" },
        { label: "Events", path: "/events", description: "Conferences & Meetups" }
      ]
    },
    {
      title: "Support",
      icon: MessageCircle,
      links: [
        { label: "Contact Us", path: "/contact", description: "Get in Touch" },
        { label: "Help Center", path: "/help-center", description: "Self-Service Support" },
        { label: "Support Portal", path: "/support", description: "Technical Support" },
        { label: "FAQ", path: "/faq", description: "Common Questions" },
        { label: "Request Quote", path: "/contact", description: "Custom Solutions" },
        { label: "Emergency Support", path: "/support/emergency", description: "24/7 Critical Support" }
      ]
    }
  ];

  const achievements = [
    { icon: Award, label: "500+", description: "Projects Delivered" },
    { icon: Users, label: "50+", description: "Expert Team Members" },
    { icon: Star, label: "99.9%", description: "Client Satisfaction" },
    { icon: TrendingUp, label: "200%", description: "Average ROI" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top section with achievements */}
        <div className="border-b border-slate-700/50">
          <div className="container-responsive py-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Delivering cutting-edge technology solutions with proven results and exceptional ROI
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-4 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{achievement.label}</div>
                  <div className="text-sm text-slate-400">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main footer sections */}
        <div className="container-responsive py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="group">
                      <Link
                        to={link.path}
                        className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200 group-hover:translate-x-1 transform"
                      >
                        <div className="font-medium text-sm">{link.label}</div>
                        <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                          {link.description}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company info and contact section */}
        <div className="border-t border-slate-700/50">
          <div className="container-responsive py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient-primary">
                      Zion Tech Group
                    </h3>
                    <p className="text-slate-400 text-sm">Pioneering the Future of Technology</p>
                  </div>
                </div>
                
                <p className="text-slate-300 max-w-md leading-relaxed">
                  Leading the charge in AI-powered solutions, quantum technology, and innovative IT services. 
                  Transform your business with cutting-edge technology that delivers measurable results.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-200">
                        <contact.icon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <span className="text-slate-400 text-sm">{contact.label}: </span>
                        <a 
                          href={contact.href} 
                          className="text-white hover:text-cyan-400 transition-colors duration-200"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter and Social */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Get the latest insights on AI, quantum computing, and emerging technologies.
                  </p>
                  
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                    >
                      Subscribe to Newsletter
                    </button>
                  </form>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-lg hover:scale-110 transition-all duration-200 ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation sections */}
            {/* This section was removed as per the new_code, as the footerNavigation object was removed. */}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50">
          <div className="container-responsive py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
              </div>
              
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-sm">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-cyan-400/25 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </footer>
  );
}
