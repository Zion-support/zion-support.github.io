import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Heart,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Linkedin,
  CheckCircle,
  Shield,
  Award
} from 'lucide-react';

export function EnhancedFuturisticFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Research & Development', href: '/research-development' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/financial-solutions' },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions' },
        { name: 'Industry Solutions', href: '/industry-solutions' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/support' },
        { name: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-500' }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Heart },
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Shield }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-cyan-400/20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Stats Section */}
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>
                </div>
              </motion.div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise. 
                We help businesses innovate and thrive in the digital age.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></div>
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-12 border border-cyan-400/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Latest</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest insights on AI, quantum computing, cybersecurity, and technology trends delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-slate-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  SOC 2 Compliant
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  ISO 27001 Certified
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  AWS Partner
                </span>
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
              >
                <ArrowRight className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}