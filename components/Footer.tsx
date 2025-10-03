import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Development', href: '/services/ai-development' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Development', href: '/services/mobile-development' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-docs' },
      { name: 'Support', href: '/support' },
      { name: 'Status', href: '/status' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer className="text-left">
      <div className="text-left">
        <div className="text-left">
          {/* Company Info */}
          <div className="text-left">
            <Link href="/" className="text-left">
              <div className="text-left">
                <span className="text-left">Z<
              </div>
              <span className="text-left">Zion Tech Solutions<
            </Link>
            
            <p className="text-left">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>

            <div className="text-left">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-left"
                  aria-label={social.name}
                >
                  <span className="text-left">{social.icon}<
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-left">Services</h3>
            <ul className="text-left">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-left">Company</h3>
            <ul className="text-left">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-left">Resources</h3>
            <ul className="text-left">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-left"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-left">
          <div className="text-left">
            <div>
              <h3 className="text-left">Stay Updated</h3>
              <p className="text-left">
                Get the latest technology insights and industry updates delivered to your inbox.
              </p>
            </div>
            <div className="text-left">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-left"
              />
              <button className="text-left">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-left">
          <p className="text-left">
            © {currentYear} Zion Tech Solutions. All rights reserved.
          </p>
          <div className="text-left">
            <Link href="/terms" className="text-left">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-left">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-left">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;