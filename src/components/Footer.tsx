import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Star, Shield, Zap, Brain, Rocket, Cpu, Database, Network } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const Footer: React.FC = () => {
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
      title: "Innovation 2027",
      icon: Rocket,
      links: [
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Operations", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "SOC2 Compliance", path: "/soc2-compliance-automation" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Space Technology", path: "/space-technology-platform" },
        { label: "Climate Intelligence", path: "/ai-climate-intelligence-platform" }
      ]
    },
    {
      title: "Core Services",
      icon: Zap,
      links: [
        { label: "AI Solutions", path: "/services/ai" },
        { label: "Cloud & DevOps", path: "/services/cloud" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "IT Infrastructure", path: "/services/infrastructure" },
        { label: "Digital Transformation", path: "/services/transformation" },
        { label: "Consulting Services", path: "/services/consulting" },
        { label: "Quantum AI", path: "/services/quantum-ai" },
        { label: "Blockchain & Web3", path: "/services/blockchain" }
      ]
    },
    {
      title: "Emerging Tech",
      icon: Brain,
      links: [
        { label: "IoT & Edge Computing", path: "/services/iot" },
        { label: "Robotics & RPA", path: "/services/robotics" },
        { label: "Extended Reality", path: "/services/xr" },
        { label: "Neuromorphic Computing", path: "/services/neuromorphic" },
        { label: "Synthetic Biology", path: "/services/synthetic-biology" },
        { label: "Quantum Internet", path: "/services/quantum-internet" },
        { label: "Advanced Analytics", path: "/services/analytics" },
        { label: "Machine Learning", path: "/services/ml" }
      ]
    },
    {
      title: "Company",
      icon: Globe,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/team" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" },
        { label: "Investor Relations", path: "/investors" },
        { label: "Sustainability", path: "/sustainability" }
      ]
    },
    {
      title: "Resources",
      icon: Database,
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research & Development", path: "/research-development" },
        { label: "Events", path: "/events" },
        { label: "Training Programs", path: "/training" },
        { label: "API Documentation", path: "/api-docs" }
      ]
    },
    {
      title: "Support",
      icon: Shield,
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Technical Support", path: "/tech-support" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Request Quote", path: "/request-quote" },
        { label: "Emergency Support", path: "/emergency-support" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
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
    <footer className="relative bg-zion-slate-dark border-t border-zion-cyan/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12"
        >
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-lg font-bold text-white">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm hover:underline flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact & Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-zion-cyan/20 pt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-zion-slate-light mb-6">
                  Ready to transform your business with cutting-edge technology? 
                  Our innovation experts are here to help you succeed.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                    <div className="w-10 h-10 bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-zion-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-zion-slate-light">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-white hover:text-zion-cyan transition-colors duration-200 font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
                <p className="text-zion-slate-light mb-6">
                  Stay updated with the latest innovations, industry insights, and company news.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 bg-zion-slate-light/10 border border-zion-slate/30 rounded-lg text-zion-slate-light hover:text-white hover:border-zion-cyan/50 transition-all duration-300 ${social.color}`}
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Newsletter</h4>
                <p className="text-zion-slate-light text-sm">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-4 py-3 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                  <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-zion-cyan/20 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Pioneering the future with AI & innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan rounded-full flex items-center justify-center hover:bg-zion-cyan/30 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
