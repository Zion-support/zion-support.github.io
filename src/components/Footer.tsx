import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, Brain, Cpu, Database, Network, Shield, Rocket, Users, BarChart3, Code, Server, Chip, Globe2, Zap, Lock, ShieldCheck } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Footer: React.FC = () => {
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
      title: "AI & Innovation Services",
      icon: <Brain className="w-5 h-5 text-zion-cyan" />,
      links: [
        { label: "AI Autonomous Operations", path: "/services/ai-autonomous-business-operations" },
        { label: "AI Healthcare Analytics", path: "/services/ai-predictive-healthcare-analytics" },
        { label: "AI Content Generation", path: "/services/ai-content-generation-suite" },
        { label: "AI Talent Acquisition", path: "/services/ai-talent-acquisition-platform" },
        { label: "Edge AI Computing", path: "/services/edge-ai-computing-platform" }
      ]
    },
    {
      title: "Quantum & Advanced Computing",
      icon: <Cpu className="w-5 h-5 text-zion-purple" />,
      links: [
        { label: "Quantum Neural Networks", path: "/services/quantum-neural-network-platform" },
        { label: "Quantum Financial Trading", path: "/services/quantum-financial-trading" },
        { label: "Quantum Computing Services", path: "/services/quantum-computing" },
        { label: "Quantum Cloud Infrastructure", path: "/services/quantum-cloud-infrastructure" },
        { label: "Quantum Edge Computing", path: "/services/quantum-edge-computing-platform" }
      ]
    },
    {
      title: "Blockchain & Security",
      icon: <Shield className="w-5 h-5 text-zion-green" />,
      links: [
        { label: "Blockchain Supply Chain", path: "/services/blockchain-supply-chain-transparency" },
        { label: "Cybersecurity Intelligence", path: "/services/cybersecurity-threat-intelligence" },
        { label: "Zero Trust Architecture", path: "/services/zero-trust-network-architecture" },
        { label: "AI Autonomous Security", path: "/services/ai-autonomous-zero-trust-security" },
        { label: "Incident Response Platform", path: "/services/incident-response-platform" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Rocket className="w-5 h-5 text-zion-orange" />,
      links: [
        { label: "Metaverse Development", path: "/services/metaverse-development-platform" },
        { label: "Space Technology", path: "/services/space-tech" },
        { label: "IoT Edge Computing", path: "/services/iot-edge-computing" },
        { label: "5G Enterprise Solutions", path: "/services/five-g-enterprise-solutions" },
        { label: "Green IT Solutions", path: "/services/green-it" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: <Server className="w-5 h-5 text-zion-blue" />,
      links: [
        { label: "Cloud & DevOps", path: "/services/cloud-devops" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Digital Transformation", path: "/services/digital-transformation" },
        { label: "Consulting Services", path: "/services/consulting" },
        { label: "Enterprise IT", path: "/services/enterprise-it" }
      ]
    },
    {
      title: "Company & Resources",
      icon: <Users className="w-5 h-5 text-zion-cyan" />,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Blog & Insights", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Documentation", path: "/docs" },
        { label: "Help Center", path: "/help" },
        { label: "FAQ", path: "/faq" },
        { label: "Support Portal", path: "/support" }
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

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
          >
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-4">
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-zion-cyan transition-colors duration-300 text-sm"
                      >
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-white/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-zion-cyan" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{contact.label}</div>
                        <a
                          href={contact.href}
                          className="text-white hover:text-zion-cyan transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links & Newsletter */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                
                {/* Social Links */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl hover:scale-110 transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
                  <p className="text-gray-300 text-sm">
                    Get the latest insights on AI, quantum computing, and emerging technologies.
                  </p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 glass border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan"
                    />
                    <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div variants={itemVariants} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-6 text-sm text-gray-300">
                <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="hover:text-white transition-colors duration-300">
                  Sitemap
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Zion Tech Group. Made with</span>
                <Heart className="w-4 h-4 text-zion-red fill-current" />
                <span>for innovation</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
