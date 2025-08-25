import React from "react";
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Globe,
  Briefcase,
  Users,
  BookOpen,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Quantum Technology", href: "/services/quantum-technology" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Digital Transformation", href: "/digital-transformation" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Financial Services", href: "/services/quantum-technology" },
        { name: "Manufacturing", href: "/autonomous-business-operations-platform" },
        { name: "Retail & E-commerce", href: "/services/industry-solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "Mission & Vision", href: "/mission" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Events", href: "/events" },
        { name: "Help Center", href: "/help" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/zion-tech-group', 
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      color: 'hover:text-blue-300'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/ziontechgroup', 
      icon: Github,
      color: 'hover:text-gray-300'
    }
  ];

  const quickLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Accessibility", href: "/accessibility" }
  ];

  return (
    <footer className="bg-zion-slate text-white">
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Top Section - Logo and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="max-w-md">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple-light to-zion-purple rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Z</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                      ZION TECH GROUP
                    </span>
                  </div>
                </div>
                <p className="text-zion-slate-light text-lg leading-relaxed">
                  Empowering businesses with cutting-edge AI solutions and innovative technology services. 
                  Transform your digital future with Zion Tech Group.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg mb-3">Get in Touch</h4>
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                    >
                      <div className="w-8 h-8 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md">
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-zion-slate-light mb-6">
                Subscribe to our newsletter for the latest insights on AI, quantum computing, and emerging technologies.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate/30 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
                  {section.title === "Services" && <Briefcase className="w-5 h-5 mr-2 text-zion-cyan" />}
                  {section.title === "Solutions" && <Globe className="w-5 h-5 mr-2 text-zion-cyan" />}
                  {section.title === "Company" && <Users className="w-5 h-5 mr-2 text-zion-cyan" />}
                  {section.title === "Resources" && <BookOpen className="w-5 h-5 mr-2 text-zion-cyan" />}
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links and Quick Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-zion-slate-light text-sm mr-4">Follow Us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-zion-slate/30 hover:bg-zion-cyan/20 text-zion-slate-light ${social.color} transition-all duration-300 rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Transforming Business with AI & Tech</span>
            </div>
            
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <Shield className="w-4 h-4" />
              <span className="text-sm">SOC2 Compliant</span>
              <span>•</span>
              <Zap className="w-4 h-4" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;