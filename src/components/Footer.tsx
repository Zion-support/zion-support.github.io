import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp, 
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Github,
  Brain,
  Shield,
  Code,
  Atom
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/zion-tech-group", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/ziontechgroup", color: "hover:text-blue-400" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/ziontechgroup", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/ziontechgroup", color: "hover:text-pink-400" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/ziontechgroup", color: "hover:text-red-500" },
    { name: "GitHub", icon: Github, href: "https://github.com/zion-tech-group", color: "hover:text-gray-400" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the future of technology with AI, quantum computing, and innovative solutions 
              that transform businesses and drive digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  <info.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                  <span className="text-sm">{info.value}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-zion-slate/50 rounded-lg text-zion-slate-light ${social.color} transition-all duration-200 hover:bg-zion-cyan/20`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services & Solutions */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Quantum Solutions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">AI & Quantum Solutions</h3>
                </div>
                <p className="text-sm text-zion-cyan font-medium">Core Services</p>
                <div className="space-y-2">
                  <Link to="/services/ai-analytics" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Analytics Platform
                  </Link>
                  <Link to="/services/quantum-computing" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/services/ai-automation" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Automation
                  </Link>
                  <Link to="/services/machine-learning" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Machine Learning
                  </Link>
                </div>
              </div>

              {/* Cybersecurity & Infrastructure */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Cybersecurity & Infrastructure</h3>
                </div>
                <p className="text-sm text-zion-cyan font-medium">Security & Infrastructure</p>
                <div className="space-y-2">
                  <Link to="/services/cybersecurity" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cybersecurity Suite
                  </Link>
                  <Link to="/services/cloud-migration" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cloud Migration
                  </Link>
                  <Link to="/services/devops" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    DevOps Automation
                  </Link>
                  <Link to="/services/infrastructure" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    IT Infrastructure
                  </Link>
                </div>
              </div>

              {/* Micro SaaS Solutions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-zion-cyan" />
                  <h3 className="text-lg font-semibold text-white">Micro SaaS Solutions</h3>
                </div>
                <p className="text-sm text-zion-cyan font-medium">Micro SaaS</p>
                <div className="space-y-2">
                  <Link to="/micro-saas/crm" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Micro CRM
                  </Link>
                  <Link to="/micro-saas/analytics" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Website Analytics
                  </Link>
                  <Link to="/micro-saas/automation" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Email Automation
                  </Link>
                  <Link to="/micro-saas/social-media" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Social Media Tools
                  </Link>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Company</h3>
                <div className="space-y-2">
                  <Link to="/about" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                  <Link to="/careers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                  <Link to="/partners" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                  <Link to="/case-studies" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Case Studies
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <div className="space-y-2">
                  <Link to="/docs" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Documentation
                  </Link>
                  <Link to="/blog" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Blog
                  </Link>
                  <Link to="/help" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Support Center
                  </Link>
                  <Link to="/training" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Training
                  </Link>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Solutions</h3>
                <div className="space-y-2">
                  <Link to="/solutions/enterprise" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise Solutions
                  </Link>
                  <Link to="/solutions/healthcare" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Healthcare Tech
                  </Link>
                  <Link to="/solutions/financial" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Financial Solutions
                  </Link>
                  <Link to="/solutions/manufacturing" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Manufacturing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-zion-cyan/20 bg-zion-slate/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-zion-slate-light">Get the latest news and updates from Zion Tech Group</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-l-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-r-lg hover:shadow-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-sm text-zion-slate-light">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}