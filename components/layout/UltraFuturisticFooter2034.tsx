import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Phone, Mail, MapPin, Globe, ArrowRight,
  Linkedin, Twitter, Facebook, Instagram, Youtube, Github,
  CheckCircle, Award, Star, Crown, Gem, Infinity,
  Heart, ShieldCheck, Users, Briefcase, BookOpen,
  Target, Microscope, Cpu, Database, Cloud, Lock,
  Home, Building, DollarSign, FileText, MessageSquare, MessageCircle, Newspaper, Handshake, LifeBuoy, Activity,
  ShoppingCart, UserCheck, BarChart, Palette, Video, LockIcon, GlobeIcon, CpuIcon
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI Services',
    icon: Brain,
    services: [
      { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro', price: '$299/month' },
      { name: 'AI Video Generation Platform', href: '/ai-video-generation-platform', price: '$499/month' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-cybersecurity-platform', price: '$799/month' },
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', price: '$3,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    services: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', price: '$1,999/month' },
      { name: 'Blockchain AI Platform', href: '/blockchain-ai-platform', price: '$899/month' },
      { name: 'Edge AI Computing', href: '/edge-ai-computing-platform', price: '$599/month' },
      { name: 'AI Climate Modeling', href: '/ai-climate-modeling-platform', price: '$1,299/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    services: [
      { name: 'API Security & Monitoring', href: '/api-security-monitoring-suite', price: '$399/month' },
      { name: 'Customer Success Automation', href: '/customer-success-automation', price: '$199/month' },
      { name: 'HR Automation Suite', href: '/hr-automation-suite', price: '$179/month' },
      { name: 'Project Management AI', href: '/project-management-ai-platform', price: '$199/month' }
    ]
  },
  {
    title: '🛒 Business Automation',
    icon: ShoppingCart,
    services: [
      { name: 'E-commerce Automation', href: '/ecommerce-automation-platform', price: '$249/month' },
      { name: 'Marketing Automation Suite', href: '/marketing-automation-suite', price: '$279/month' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform', price: '$349/month' },
      { name: 'Legal Document Automation', href: '/legal-document-automation', price: '$399/month' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing-2034', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: FileText },
  { name: 'Blog', href: '/blog', icon: MessageSquare },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Careers', href: '/careers', icon: Briefcase },
  { name: 'News', href: '/news', icon: Newspaper },
  { name: 'Partners', href: '/partners', icon: Handshake },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Status', href: '/status', icon: Activity }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
];

const certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized',
  'Quantum Security Certified',
  'AI Ethics Compliant'
];

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Services Delivered', value: '200+', icon: Rocket },
  { label: 'Countries Served', value: '45+', icon: Globe },
  { label: 'Success Rate', value: '99.9%', icon: CheckCircle }
];

export default function UltraFuturisticFooter2034() {
  return (
    <footer className=&quot;bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden&quot;>
      {/* Animated Background Elements */}
      <div className=&quot;absolute inset-0 overflow-hidden&quot;>
        <div className=&quot;absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse&quot;></div>
        <div className=&quot;absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500&quot;></div>
      </div>

      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-12&quot;>
            {/* Company Info */}
            <div className=&quot;lg:col-span-1&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=&quot;space-y-6&quot;
              >
                <div className=&quot;flex items-center space-x-3&quot;>
                  <div className=&quot;relative&quot;>
                    <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center&quot;>
                      <Rocket className=&quot;w-7 h-7 text-white&quot; />
                    </div>
                    <div className=&quot;absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-30&quot;></div>
                  </div>
                  <div>
                    <h3 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
                      Zion Tech Group
                    </h3>
                    <p className=&quot;text-sm text-gray-400&quot;>Future Technology Solutions</p>
                  </div>
                </div>
                
                <p className=&quot;text-gray-300 leading-relaxed&quot;>
                  Leading provider of cutting-edge AI, quantum computing, and emerging technology solutions. 
                  Empowering businesses with innovative tools for the future.
                </p>

                {/* Stats */}
                <div className=&quot;grid grid-cols-2 gap-4&quot;>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10&quot;
                    >
                      <stat.icon className=&quot;w-6 h-6 text-cyan-400 mx-auto mb-2&quot; />
                      <div className=&quot;text-lg font-bold text-white&quot;>{stat.value}</div>
                      <div className=&quot;text-xs text-gray-400&quot;>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors&quot;>
                    <MapPin className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className=&quot;lg:col-span-2&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className=&quot;space-y-8&quot;
              >
                <h3 className=&quot;text-xl font-bold text-white mb-6&quot;>Our Services</h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                  {serviceCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;space-y-4&quot;
                    >
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <category.icon className=&quot;w-5 h-5 text-cyan-400&quot; />
                        <h4 className=&quot;font-semibold text-white&quot;>{category.title}</h4>
                      </div>
                      <div className=&quot;space-y-2&quot;>
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className=&quot;flex items-center justify-between group hover:bg-white/5 rounded-lg p-2 transition-all duration-200&quot;
                          >
                            <span className=&quot;text-gray-300 group-hover:text-cyan-400 transition-colors text-sm&quot;>
                              {service.name}
                            </span>
                            <span className=&quot;text-xs text-gray-500 group-hover:text-cyan-400 transition-colors&quot;>
                              {service.price}
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links & Social */}
            <div className=&quot;lg:col-span-1&quot;>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className=&quot;space-y-8&quot;
              >
                {/* Quick Links */}
                <div>
                  <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Quick Links</h4>
                  <div className=&quot;space-y-2&quot;>
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group&quot;
                      >
                        <link.icon className=&quot;w-4 h-4 group-hover:scale-110 transition-transform&quot; />
                        <span className=&quot;text-sm&quot;>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Company</h4>
                  <div className=&quot;space-y-2&quot;>
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors group&quot;
                      >
                        <link.icon className=&quot;w-4 h-4 group-hover:scale-110 transition-transform&quot; />
                        <span className=&quot;text-sm&quot;>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className=&quot;text-lg font-semibold text-white mb-4&quot;>Follow Us</h4>
                  <div className=&quot;flex space-x-4&quot;>
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        target=&quot;_blank&quot;
                        rel=&quot;noopener noreferrer&quot;
                        className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-110&quot;
                      >
                        <social.icon className=&quot;w-5 h-5&quot; />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className=&quot;mt-16 pt-8 border-t border-white/10&quot;
          >
            <h4 className=&quot;text-lg font-semibold text-white mb-6 text-center&quot;>Certifications & Compliance</h4>
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4&quot;>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;flex items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200&quot;
                >
                  <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                  <span className=&quot;text-xs text-gray-300 text-center&quot;>{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className=&quot;border-t border-white/10 bg-black/50 backdrop-blur-sm&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
              <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href=&quot;/privacy&quot; className=&quot;hover:text-cyan-400 transition-colors&quot;>Privacy Policy</a>
                <Link href=&quot;/terms&quot; className=&quot;hover:text-cyan-400 transition-colors&quot;>Terms of Service</a>
              </div>
              
              <div className=&quot;flex items-center space-x-2 text-gray-400&quot;>
                <Heart className=&quot;w-4 h-4 text-red-400&quot; />
                <span className=&quot;text-sm&quot;>Made with ❤️ for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}