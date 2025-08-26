import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Globe, ArrowUp, ArrowRight, Zap, Shield, Brain, Users } from 'lucide-react';

export const Footer: React.FC = () => {
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
      title: "Services",
      links: [
        { label: "AI Solutions", path: "/services/ai", icon: Brain },
        { label: "Cloud & DevOps", path: "/services/cloud", icon: Globe },
        { label: "Cybersecurity", path: "/services/cybersecurity", icon: Shield },
        { label: "IT Infrastructure", path: "/services/infrastructure", icon: Zap },
        { label: "Digital Transformation", path: "/services/transformation", icon: Users }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Team", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "News & Updates", path: "/news" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Partners", path: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", path: "/blog" },
        { label: "Documentation", path: "/docs" },
        { label: "White Papers", path: "/white-papers" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research", path: "/research-development" },
        { label: "Events", path: "/events" },
        { label: "Training", path: "/training" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", path: "/contact" },
        { label: "Help Center", path: "/help" },
        { label: "Support Portal", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Consulting", path: "/services/consulting" },
        { label: "Request Quote", path: "/contact" }
      ]
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${getComputedStyle(document.documentElement).getPropertyValue('--zion-cyan')} 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent mb-4">
                Zion Tech Group
              </h3>
              <p className="text-zion-slate-light text-lg leading-relaxed max-w-md">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with cutting-edge technology and expert guidance.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-200">
                    <contact.icon className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <span className="text-zion-slate-light text-sm font-medium">{contact.label}: </span>
                    <a 
                      href={contact.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 block"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700/70 rounded-lg flex items-center justify-center text-lg transition-all duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 flex items-center group"
                    >
                      {link.icon && (
                        <link.icon className="h-4 w-4 mr-2 text-zion-cyan/60 group-hover:text-zion-cyan transition-colors" />
                      )}
                      <span>{link.label}</span>
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-700/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-zion-slate-light">
              <span className="text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-sm">by Zion Tech Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50"
      >
        <ArrowUp className="h-6 w-6 mx-auto" />
      </button>
    </footer>
  );
};
