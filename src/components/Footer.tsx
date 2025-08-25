import React from "react";
import { Twitter, Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Globe, Shield, Users, Briefcase, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Our Mission", href: "/mission" },
        { name: "Partners", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Blog", href: "/blog" },
        { name: "Events", href: "/events" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "AI & Autonomous Systems", href: "/services/ai-autonomous-systems" },
        { name: "Quantum Technology", href: "/services/quantum-technology" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "Cloud & DevOps", href: "/cloud-devops" },
        { name: "Digital Transformation", href: "/digital-transformation" },
        { name: "Micro SAAS Solutions", href: "/services/micro-saas-solutions" },
        { name: "5G Enterprise Solutions", href: "/5g-enterprise-solutions" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Enterprise Solutions", href: "/solutions/enterprise" },
        { name: "Healthcare Solutions", href: "/solutions/healthcare" },
        { name: "Industry Solutions", href: "/services/industry-solutions" },
        { name: "Financial Solutions", href: "/financial-solutions" },
        { name: "Manufacturing Solutions", href: "/manufacturing-solutions" },
        { name: "Green IT Solutions", href: "/green-it" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "White Papers", href: "/white-papers" },
        { name: "Webinars", href: "/webinars" },
        { name: "Documentation", href: "/docs" },
        { name: "Help Center", href: "/help" },
        { name: "Pricing", href: "/pricing" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Marketplace", href: "/marketplace" },
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/zion-tech-group", 
      label: 'LinkedIn',
      color: "hover:text-blue-600"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/ziontechgroup", 
      label: 'Twitter',
      color: "hover:text-blue-400"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/ziontechgroup", 
      label: 'Facebook',
      color: "hover:text-blue-600"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/ziontechgroup", 
      label: 'Instagram',
      color: "hover:text-pink-500"
    },
    { 
      icon: Github, 
      href: "https://github.com/ziontechgroup", 
      label: 'GitHub',
      color: "hover:text-gray-400"
    },
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: "+1 302 464 0950", 
      href: "tel:+13024640950",
      label: "Call us"
    },
    { 
      icon: Mail, 
      text: "kleber@ziontechgroup.com", 
      href: "mailto:kleber@ziontechgroup.com",
      label: "Email us"
    },
    { 
      icon: MapPin, 
      text: "364 E Main St STE 1008 Middletown DE 19709", 
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      label: "Visit us"
    },
  ];

  return (
    <footer className="bg-zion-slate text-white py-16">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                ZION TECH GROUP
              </span>
            </div>
            <p className="text-zion-slate-light text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge AI solutions and innovative technology services. 
              Transform your digital future with Zion Tech Group's comprehensive suite of enterprise solutions.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors group"
                  aria-label={contact.label}
                >
                  <contact.icon className="h-4 w-4 group-hover:text-zion-cyan transition-colors" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-zion-slate-light transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg flex items-center">
                {section.title === "Company" && <Users className="h-5 w-5 mr-2" />}
                {section.title === "Services" && <Briefcase className="h-5 w-5 mr-2" />}
                {section.title === "Solutions" && <Globe className="h-5 w-5 mr-2" />}
                {section.title === "Resources" && <FileText className="h-5 w-5 mr-2" />}
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-zion-blue-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan text-sm transition-colors flex items-center">
                <HelpCircle className="h-3 w-3 mr-1" />
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;