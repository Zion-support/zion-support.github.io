import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Shield, Zap, Users, Briefcase, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "News & Events", href: "/news" },
        { name: "Case Studies", href: "/case-studies" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI & Autonomous Systems", href: "/services/ai-autonomous-systems" },
        { name: "Quantum Technology", href: "/services/quantum-technology" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Micro SAAS Solutions", href: "/services/micro-saas-solutions" },
        { name: "Emerging Technology", href: "/emerging-tech" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Financial Solutions", href: "/financial-solutions" },
        { name: "Manufacturing Solutions", href: "/manufacturing-solutions" },
        { name: "Green IT Solutions", href: "/green-it" },
        { name: "Space Technology", href: "/space-tech" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Webinars", href: "/webinars" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Pricing", href: "/pricing" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
  ];

  return (
    <footer className="bg-zion-slate text-white py-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">ZION</span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group's comprehensive suite of advanced technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zion-slate-light/10 hover:bg-zion-cyan/20 rounded-lg transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
                {section.title === "Company" && <Users className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Services" && <Briefcase className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Solutions" && <Zap className="h-5 w-5 text-zion-cyan" />}
                {section.title === "Resources" && <FileText className="h-5 w-5 text-zion-cyan" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-6 bg-zion-slate-light/10 rounded-lg border border-zion-blue-light/20">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-zion-cyan" />
              Contact & Support
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors group"
                  >
                    <Icon className="h-4 w-4 text-zion-cyan group-hover:text-zion-cyan" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg flex items-center gap-2">
              <Shield className="h-5 w-5 text-zion-cyan" />
              Legal & Compliance
            </h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors hover:underline">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors hover:underline">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors hover:underline">
                Accessibility Statement
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
              <Link to="/sitemap" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Accessibility
              </Link>
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Support
              </Link>
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;