import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, Mail, Phone, MapPin, Globe, ArrowUp, 
  Brain, Cpu, Database, Network, Shield, Zap, 
  Rocket, Atom, Cloud, Lock, Eye, Target,
  Users, Building, FileText, Video, HelpCircle,
  MessageSquare, DollarSign, ChevronRight, Calendar, Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];

  const footerSections = [
    {
      title: "Innovative Services",
      links: [
        { label: "Quantum AI Platform", path: "/quantum-neural-network-platform", icon: Atom, description: "Quantum Neural Networks" },
        { label: "Autonomous Operations", path: "/autonomous-business-operations-platform", icon: Brain, description: "AI Business Automation" },
        { label: "IT Asset Management", path: "/ai-powered-it-asset-management", icon: Database, description: "AI-Powered IT Solutions" },
        { label: "SOC2 Compliance", path: "/soc2-compliance-automation", icon: Shield, description: "Automated Compliance" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant", icon: Brain, description: "Autonomous Research" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", icon: Network, description: "5G & IoT Platforms" },
        { label: "Space Technology", path: "/space-technology-platform", icon: Rocket, description: "Satellite Operations" },
        { label: "Climate Intelligence", path: "/ai-climate-intelligence-platform", icon: Globe, description: "AI Climate Solutions" }
      ]
    },
    {
      title: "Core Services",
      links: [
        { label: "AI Solutions", path: "/services/ai", icon: Brain, description: "Machine Learning & AI" },
        { label: "Cloud & DevOps", path: "/services/cloud", icon: Cloud, description: "Cloud Infrastructure" },
        { label: "Cybersecurity", path: "/services/cybersecurity", icon: Lock, description: "Security Solutions" },
        { label: "IT Infrastructure", path: "/services/infrastructure", icon: Database, description: "Infrastructure Management" },
        { label: "Digital Transformation", path: "/services/transformation", icon: Zap, description: "Business Transformation" },
        { label: "Blockchain & DeFi", path: "/services/blockchain", icon: Shield, description: "Blockchain Solutions" },
        { label: "IoT & Edge Computing", path: "/services/iot", icon: Network, description: "IoT Platforms" },
        { label: "Robotics & Automation", path: "/services/robotics", icon: Cpu, description: "Industrial Automation" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about", icon: Users, description: "Our Story & Mission" },
        { label: "Our Team", path: "/team", icon: Users, description: "Expert Team" },
        { label: "Careers", path: "/careers", icon: Building, description: "Join Our Team" },
        { label: "News & Updates", path: "/news", icon: FileText, description: "Latest News" },
        { label: "Case Studies", path: "/case-studies", icon: Target, description: "Success Stories" },
        { label: "Partners", path: "/partners", icon: Users, description: "Strategic Partnerships" },
        { label: "Investors", path: "/investors", icon: DollarSign, description: "Investment Opportunities" },
        { label: "Press Kit", path: "/press", icon: FileText, description: "Media Resources" }
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { label: "Blog", path: "/blog", icon: FileText, description: "Latest Insights" },
        { label: "Documentation", path: "/docs", icon: FileText, description: "Technical Docs" },
        { label: "White Papers", path: "/white-papers", icon: FileText, description: "Research Papers" },
        { label: "Webinars", path: "/webinars", icon: Video, description: "Educational Content" },
        { label: "Research & Development", path: "/research-development", icon: Brain, description: "R&D Initiatives" },
        { label: "Events", path: "/events", icon: Calendar, description: "Upcoming Events" },
        { label: "Training", path: "/training", icon: Users, description: "Skill Development" },
        { label: "Certification", path: "/certification", icon: Award, description: "Professional Certs" }
      ]
    }
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
    <footer className="relative bg-zion-slate-dark border-t border-zion-cyan/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="container-responsive py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div className="lg:col-span-2 xl:col-span-1" variants={itemVariants}>
              <Link to="/" className="inline-block mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-zion-slate-light">Innovation • Technology • Future</p>
                  </div>
                </div>
              </Link>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Pioneering the future with cutting-edge AI solutions, quantum computing, 
                and innovative technology services that transform businesses and drive progress.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                  >
                    <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                      <contact.icon className="w-4 h-4 text-zion-cyan" />
                    </div>
                    <div>
                      <div className="text-xs text-zion-slate-light uppercase tracking-wide">{contact.label}</div>
                      <div className="text-sm font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div key={section.title} variants={itemVariants}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                  <section.icon className="w-5 h-5 text-zion-cyan" />
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-zion-slate/20 transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-zion-cyan/20 rounded-md flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                          <link.icon className="w-3 h-3 text-zion-cyan" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zion-slate-light group-hover:text-white transition-colors">
                            {link.label}
                          </div>
                          <div className="text-xs text-zion-slate-light opacity-75">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-zion-cyan/20 py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Ahead with Innovation
              </h3>
              <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, and emerging technologies. 
                Join our newsletter for exclusive updates and industry analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-black font-semibold rounded-lg hover:from-zion-blue hover:to-zion-cyan transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-zion-cyan/20 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="container-responsive">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-zion-slate-light">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for innovation</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-zion-slate/20 rounded-lg flex items-center justify-center text-lg hover:bg-zion-cyan/20 transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
                <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ y: -5 }}
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </motion.button>
    </footer>
  );
};

export default Footer;
