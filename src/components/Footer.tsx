import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, Star, TrendingUp, Award, Target, Lightbulb } from 'lucide-react';
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
        { label: "AI Solutions", path: "/ai-business-solutions" },
        { label: "Cloud Infrastructure", path: "/cloud-infrastructure" },
        { label: "Cybersecurity", path: "/cybersecurity-suite" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Quantum Technology", path: "/quantum-technology" }
=======
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
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
<<<<<<< HEAD
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" }
=======
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
=======
        { label: "About Us", path: "/about", description: "Our Mission & Vision" },
        { label: "Our Team", path: "/about", description: "Expert Professionals" },
        { label: "Careers", path: "/careers", description: "Join Our Team" },
        { label: "News & Updates", path: "/news", description: "Latest Developments" },
        { label: "Case Studies", path: "/case-studies", description: "Success Stories" },
        { label: "Partners", path: "/partners", description: "Strategic Alliances" }
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
<<<<<<< HEAD
=======
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube }
  ];
=======
        { label: "Blog", path: "/blog" },
        { label: "FAQ", path: "/faq" },
        { label: "Support", path: "/contact" }
=======
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
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
      ]
    }
  ];

<<<<<<< HEAD
=======
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const achievements = [
    { icon: Award, label: "500+", description: "Projects Delivered" },
    { icon: Users, label: "50+", description: "Expert Team Members" },
    { icon: Star, label: "99.9%", description: "Client Satisfaction" },
    { icon: TrendingUp, label: "200%", description: "Average ROI" }
  ];

>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
<<<<<<< HEAD
    <footer className="bg-zion-slate text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
=======
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
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-cyan">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-200">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+1-800-ZION-TECH" className="hover:text-zion-cyan transition-colors duration-200">
                    +1 (800) ZION-TECH
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Global Presence • Remote First</span>
                </div>
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  {section.title === "Services" && <Zap className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Solutions" && <Globe className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Company" && <Users className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Resources" && <Shield className="w-4 h-4 text-zion-cyan" />}
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated with Zion Tech</h4>
              <p className="text-white/70 mb-6">
                Get the latest insights on AI, technology trends, and digital transformation delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-zion-cyan/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright and legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-white/70 hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-cyan/10 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
=======
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
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
              </div>
            </div>

            {/* Made with love */}
            <div className="mt-6 text-center text-sm text-white/50">
              <p className="flex items-center justify-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by Zion Tech Group</span>
              </p>
            </div>
          </div>
        </div>
=======
    <footer className="bg-zion-slate-dark border-t border-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
<<<<<<< HEAD

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-zion-slate pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📧</div>
              <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📞</div>
              <p className="text-gray-300 text-sm">+1 302 464 0950</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📍</div>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">🌐</div>
              <p className="text-gray-300 text-sm">ziontechgroup.com</p>
=======
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
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-zion-slate pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
=======
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-cyan-400/25 hover:scale-110 transition-all duration-200 z-50 flex items-center justify-center group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
      </button>
=======
  return (
    <footer className="bg-zion-slate-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 text-sm">
              Transforming businesses through cutting-edge technology solutions
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-zion-cyan">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cloud Services</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-zion-cyan">About Us</Link></li>
              <li><Link to="/team" className="hover:text-zion-cyan">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-zion-cyan">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>kleber@ziontechgroup.com</p>
              <p>+1 302 464 0950</p>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zion-purple/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
=======
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp } from 'lucide-react'
import Link from "next/link"; // Changed from react-router-dom
import { FeedbackWidget } from "@/components/feedback/FeedbackWidget";

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar === "#" || envVar === "/") {
    return fallback;
  }
  return envVar;
}

const TWITTER_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_TWITTER_URL,
  "https://twitter.com/ZionTechGroup"
);
const LINKEDIN_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_URL,
  "https://linkedin.com/company/ziontechgroup"
);
const FACEBOOK_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_URL,
  "https://facebook.com/ZionTechGroup"
);
const INSTAGRAM_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_URL,
  "https://instagram.com/ZionTechGroup"
);
const GITHUB_URL = resolveUrl(
  process.env.NEXT_PUBLIC_SOCIAL_GITHUB_URL,
  "https://github.com/ZionTechGroup"
);

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-foreground/80 mb-4" style={{ maxWidth: 'clamp(16rem, 90%, 20rem)' }}>
              The world&apos;s first free marketplace dedicated to high-tech and artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Marketplace</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors text-sm">Products</Link></li>
              {/* Ensure the services link routes to the main services page */}
              <li>
                <Link
                  href="/services"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li><Link href="/talent" className="text-foreground/80 hover:text-primary transition-colors text-sm">Talent</Link></li>
              <li>
                <Link
                  href="/equipment"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                  target="_self"
                >
                  Equipment
                </Link>
              </li>
              <li><Link href="/categories" className="text-foreground/80 hover:text-primary transition-colors text-sm">Categories</Link></li>
              <li><Link href="/green-it" className="text-foreground/80 hover:text-primary transition-colors text-sm">Green IT</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-foreground/80 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="/innovation" className="text-foreground/80 hover:text-primary transition-colors text-sm">Innovation</Link></li>
              <li><Link href="/partners" className="text-foreground/80 hover:text-primary transition-colors text-sm">Partners</Link></li>
              <li><Link href="/careers" className="text-foreground/80 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li>
                <Link
                  href="/sitemap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 text-lg">Newsletter</h3>
            <p className="text-foreground/80 mb-4 text-sm">
              Stay updated with the latest news on tech, AI, and marketplace opportunities.
            </p>
            <div className="max-w-sm">
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
              });
            }}
            className="flex items-center space-x-1 text-foreground/80 hover:text-primary text-sm transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/status"
                className="text-foreground/80 hover:text-primary text-sm transition-colors"
              >
                API Status
              </Link>
            </div>
          </div>
        </div>
        <FeedbackWidget />
      </div>
    </footer>
  );
}
