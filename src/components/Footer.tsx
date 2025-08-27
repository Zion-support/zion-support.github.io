import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Github,
  Award,
  Shield,
  Zap,
  Globe,
  Users,
  FileText,
  Cpu,
  Activity,
  Cloud,
  Building,
  TrendingUp,
  Rocket,
  Brain,
  Atom,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Sitemap', path: '/sitemap', icon: Globe },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/services/ai-services' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Micro SaaS Solutions', href: '/micro-saas' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Cpu },
        { name: 'Digital Twin', path: '/services/quantum-computing', icon: Cpu },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Shield }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'Micro SaaS Solutions', path: '/services/micro-saas-solutions', icon: Zap },
        { name: 'All Services', path: '/services', icon: Zap }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Sparkles,
      links: [
        { name: 'AI Solutions Hub', path: '/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network }
      ]
    }
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/ziontechgroup",
      icon: Facebook,
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ziontechgroup",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: Github,
      color: "hover:text-gray-400"
    }
  ];
    }
  ];

  const awards = [
    { name: 'Best AI Company 2024', icon: Award },
    { name: 'Top Cybersecurity Provider', icon: Shield },
    { name: 'Innovation Excellence Award', icon: Zap },
    { name: 'Global Tech Leader', icon: Globe }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Leading provider of AI-powered solutions, cloud infrastructure, and innovative technology services. 
              Transforming businesses through cutting-edge innovation and digital excellence.
            </p>
            
            {/* Awards */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zion-cyan mb-3">Awards & Recognition</h4>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-lg border border-zion-cyan/20">
                    <award.icon className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">{award.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-zion-cyan mb-3">Contact Information</h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-zion-cyan/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights, updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-zion-cyan/20 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}