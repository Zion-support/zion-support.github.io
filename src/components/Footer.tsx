import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Lock, 
  Rocket, 
  Heart,
  Zap,
  Globe,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      name: "AI & Analytics",
      icon: Brain,
      services: [
        { name: "Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "Content Creation", href: "/services/ai-content-creator" },
        { name: "Customer Experience", href: "/services/ai-customer-experience" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics" }
      ]
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      services: [
        { name: "Enterprise Security", href: "/services/enterprise-security" },
        { name: "SMB Security", href: "/services/smb-security" },
        { name: "Threat Detection", href: "/services/threat-detection" },
        { name: "Compliance Management", href: "/services/compliance" }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      services: [
        { name: "Infrastructure Manager", href: "/services/cloud-infrastructure" },
        { name: "DevOps Automation", href: "/services/devops-automation" },
        { name: "Multi-cloud Solutions", href: "/services/multi-cloud" },
        { name: "Cost Optimization", href: "/services/cost-optimization" }
      ]
    },
    {
      name: "Emerging Tech",
      icon: Rocket,
      services: [
        { name: "IoT Edge Platform", href: "/services/iot-edge-platform" },
        { name: "Enterprise Blockchain", href: "/services/enterprise-blockchain" },
        { name: "Quantum Optimization", href: "/services/quantum-optimization" },
        { name: "Green IT Manager", href: "/services/green-it-manager" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "News & Updates", href: "/news" },
    { name: "Blog", href: "/blog" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Status Page", href: "/status" },
    { name: "Contact Support", href: "/contact" },
    { name: "Training", href: "/training" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Data Processing", href: "/data-processing" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    support: "support@ziontechgroup.com",
    sales: "sales@ziontechgroup.com"
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-slate via-zion-slate-dark to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-zion-purple/5 to-zion-neon/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,221,210,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section with Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-zion-cyan" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-zion-cyan">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center">
                    <category.icon size={24} className="text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center space-x-2 text-white/70 hover:text-zion-cyan transition-colors duration-200 group"
                      >
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Info and Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Zion Tech Group</h3>
                  <p className="text-white/60">Innovating Tomorrow</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Pioneering the future with innovative micro SAAS solutions, cutting-edge IT services, 
                and revolutionary AI technology that transforms businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone size={16} className="text-zion-cyan" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail size={16} className="text-zion-cyan" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin size={16} className="text-zion-cyan" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-zion-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-zion-cyan transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-xl rounded-2xl p-8 border border-zion-cyan/20 mb-16"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of the Curve
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on AI, cybersecurity, cloud computing, 
                and emerging technologies that are shaping the future of business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-zion-cyan/25">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social Links and Legal */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center text-white/70 hover:text-zion-cyan hover:scale-110 transition-all duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/60 hover:text-zion-cyan transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-cyan/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-red-400 fill-current" />
                <span>for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
