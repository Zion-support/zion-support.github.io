import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'AI Solutions', href: '/solutions/ai' },
      { name: 'Cloud Computing', href: '/solutions/cloud' },
      { name: 'Cybersecurity', href: '/solutions/security' },
      { name: 'Data Analytics', href: '/solutions/analytics' },
      { name: 'IoT Solutions', href: '/solutions/iot' }
    ],
    services: [
      { name: 'Consulting', href: '/services/consulting' },
      { name: 'Development', href: '/services/development' },
      { name: 'Integration', href: '/services/integration' },
      { name: 'Support', href: '/services/support' },
      { name: 'Training', href: '/services/training' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Contact', href: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          {/* Company Info */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <Link to="/" className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                <span className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Z</span>
              </div>
              <span className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Zion Tech Group</span>
            </Link>
            
            <p className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              Leading provider of advanced AI and IT solutions. Transform your business with 
              cutting-edge technology, automation, and intelligent systems.
            </p>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                <Mail className="w-5 h-5" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) ZION-TECH</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Solutions</h3>
            <ul className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Services</h3>
            <ul className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Resources</h3>
            <ul className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <h3 className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Stay Updated</h3>
            <p className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              Get the latest insights on AI and technology trends.
            </p>
            <form className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <Link to="/privacy" className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                Privacy Policy
              </Link>
              <Link to="/terms" className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                Terms of Service
              </Link>
              <Link to="/cookies" className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
                Cookie Policy
              </Link>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">
              <ArrowUp className="w-5 h-5" />
              <span className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white min-h-screen">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;