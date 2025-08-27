=======
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

        { label: "AI Solutions", path: "/ai-business-solutions" },
        { label: "Cloud Infrastructure", path: "/cloud-infrastructure" },
        { label: "Cybersecurity", path: "/cybersecurity-suite" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Quantum Technology", path: "/quantum-technology" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "News & Blog", href: "/blog" }
=======
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
=======
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: Facebook },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: Youtube }
  ];
=======
        { label: "Blog", path: "/blog" },
        { label: "FAQ", path: "/faq" },
        { label: "Support", path: "/contact" }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-cyan">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-200">
                    info@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+1-800-ZION-TECH" className="hover:text-zion-cyan transition-colors duration-200">
                    +1 (800) ZION-TECH
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Global Presence • Remote First</span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                  {section.title === "Services" && <Zap className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Solutions" && <Globe className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Company" && <Users className="w-4 h-4 text-zion-cyan" />}
                  {section.title === "Resources" && <Shield className="w-4 h-4 text-zion-cyan" />}
                  <span>{section.title}</span>
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated with Zion Tech</h4>
              <p className="text-white/70 mb-6">
                Get the latest insights on AI, technology trends, and digital transformation delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-zion-cyan/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright and legal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/60">
                <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-zion-cyan transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-white/70 hover:text-zion-cyan hover:border-zion-cyan/50 hover:bg-zion-cyan/10 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Made with love */}
            <div className="mt-6 text-center text-sm text-white/50">
              <p className="flex items-center justify-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by Zion Tech Group</span>
              </p>
            </div>
          </div>
        </div>
=======
    <footer className="bg-zion-slate-dark border-t border-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Zion Tech Group
            </h3>
            <p className="text-gray-300 mb-4">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="text-2xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-zion-slate pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📧</div>
              <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📞</div>
              <p className="text-gray-300 text-sm">+1 302 464 0950</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">📍</div>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-cyan-400 mb-2">🌐</div>
              <p className="text-gray-300 text-sm">ziontechgroup.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zion-slate pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
=======
  return (
    <footer className="bg-zion-slate-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 text-sm">
              Transforming businesses through cutting-edge technology solutions
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-zion-cyan">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Cloud Services</Link></li>
              <li><Link to="/services" className="hover:text-zion-cyan">Digital Transformation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-zion-cyan">About Us</Link></li>
              <li><Link to="/team" className="hover:text-zion-cyan">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-zion-cyan">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <p>kleber@ziontechgroup.com</p>
              <p>+1 302 464 0950</p>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zion-purple/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
