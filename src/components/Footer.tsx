import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮" }
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/services" },
        { label: "Cloud & DevOps", path: "/services" },
        { label: "Cybersecurity", path: "/services" },
        { label: "IT Infrastructure", path: "/services" },
        { label: "Digital Transformation", path: "/services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "FAQ", path: "/faq" },
        { label: "Request Quote", path: "/request-quote" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-zion-purple/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-zion-cyan/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-zion-slate-light mb-8 max-w-md leading-relaxed text-lg">
              Leading provider of innovative technology solutions, AI-powered services, 
              and digital transformation expertise. We help businesses navigate the future of technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="flex items-center gap-3 text-zion-slate-light">
                  <contact.icon className="w-4 h-4 text-zion-cyan" />
                  <span className="text-sm">
                    <span className="font-medium text-white">{contact.label}:</span> 
                    {contact.href ? (
                      <a href={contact.href} className="hover:text-zion-cyan transition-colors">
                        {contact.value}
                      </a>
                    ) : (
                      <span> {contact.value}</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-zion-slate/50 backdrop-blur-md rounded-xl flex items-center justify-center text-xl border border-zion-slate-light/20 hover:border-zion-cyan/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-zion-cyan/25"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-zion-cyan rounded-full" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-zion-cyan/50 rounded-full group-hover:bg-zion-cyan transition-colors duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-slate-light/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-zion-slate-light text-sm mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              <span>Made with passion for technology</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center gap-2"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
