<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                  key={social.name};
                  href={social.href};

                  target=&quot;_blank&quot;,
                  rel=&quot;noopener noreferrer&quot;,
                  className=&quot;text-gray-400 hover: text-blue-400 transition-colors&quot;,
                  aria-label={social.name};
                >,
                  <social.icon className=&quot;h-5 w-5&quot; />,
                </a>))};
            </div>,
          </div>,
          {/* Services */};
          <div>,
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Services</h3>,
            <ul className=&quot;space-y-2&quot;>,
              {services.map((service) => (,
                <li key={service.name}>,
                  <Link,
                    href={service.href};
                    {service.name};
                  </a>,
                </li>))};
            </ul>,
          </div>,
          {/* Company */};
          <div>,
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Company</h3>,
            <ul className=&quot;space-y-2&quot;>,
              {company.map((item) => (,
                <li key={item.name}>,
                  <Link,
                    href={item.href};
                    {item.name};
                  </a>,
                </li>))};
            </ul>,
          </div>,
          {/* Resources & Contact */};
          <div>,
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Resources</h3>,
            <ul className=&quot;space-y-2 mb-6&quot;>,
              {resources.map((resource) => (,
                <li key={resource.name}>,
                  <Link,
                    href={resource.href};
                    {resource.name};
                  </a>,
                </li>))};
            </ul>,
            <h3 className=&quot;text-lg font-semibold mb-4&quot;>Contact</h3>,
            <div className=&quot;space-y-2&quot;>,
              <div className=&quot;flex items-center text-gray-300&quot;>,
                <Mail className=&quot;h-4 w-4 mr-2&quot; />,
                <a href=&quot;mailto: info@ziontechgroup.com&quot; className=&quot;hover:text-blue-400&quot;>,
                  info@ziontechgroup.com,
                </a>,
              </div>,
              <div className=&quot;flex items-center text-gray-300&quot;>,
                <Phone className=&quot;h-4 w-4 mr-2&quot; />,
                <a href=&quot;tel: +1-555-123-4567&quot; className=&quot;hover:text-blue-400&quot;>,
                  +1 (555) 123-4567,
                </a>,
              </div>,
              <div className=&quot;flex items-start text-gray-300&quot;>,
                <MapPin className=&quot;h-4 w-4 mr-2 mt-0.5&quot; />,
                <span>,
                  123 Tech Street<br />,
                  San Francisco, CA 94105,
                </span>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Bottom Section */};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from 'lucide-react';

<<<<<<< HEAD
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions and digital
              transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
=======
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' }]},
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Resources', href: '/resources' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' }]},
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }]}];

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com',
      icon: (
        <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
          <path d=&quot;M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z&quot; />
        </svg>
      )},
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com',
      icon: (
        <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
          <path d=&quot;M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z&quot; />
        </svg>
      )},
    {
      name: 'GitHub',
      href: 'https://github.com/Zion-Holdings/zion.app',
      icon: (
        <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
          <path d=&quot;M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z&quot; />
        </svg>
      )}];

  return (
    <footer className=&quot;bg-gray-900/95 backdrop-blur-xl border-t border-gray-600/20 relative overflow-hidden&quot;>
      <div className=&quot;absolute inset-0 bg-grid opacity-5&quot; />
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10&quot;>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12&quot;>
          {/* Brand Section */}
          <div className=&quot;lg:col-span-2&quot;>
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 mb-6 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg&quot;>
                  <span className=&quot;text-white font-bold text-2xl&quot;>Z</span>
                </div>
                <div className=&quot;absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10&quot; />
              </div>
              <span className=&quot;text-2xl font-bold gradient-text-blue group-hover:from-blue-500 group-hover:to-emerald-500 transition-all duration-300&quot;>
                Zion Tech
              </span>
            </a>
            <p className=&quot;text-gray-400 mb-8 max-w-md leading-relaxed&quot;>
              The world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, 
              intelligent automation systems, and the future of cloud-native AI infrastructure.
            </p>
            <div className=&quot;flex space-x-4&quot;>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className=&quot;w-11 h-11 bg-gray-700 hover:bg-blue-500 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25&quot;
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className=&quot;text-white font-semibold mb-6 text-lg&quot;>{section.title}</h3>
              <ul className=&quot;space-y-3&quot;>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className=&quot;text-gray-400 hover:text-blue-500 transition-all duration-200 hover:translate-x-1 inline-block group&quot;
                    >
                      <span className=&quot;relative&quot;>
                        {link.name}
                        <span className=&quot;absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full&quot; />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
=======
        {/* Bottom Section */}
        <div className=&quot;border-t border-gray-600/20 mt-16 pt-8&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center&quot;>
            <p className=&quot;text-gray-400 text-sm&quot;>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className=&quot;flex items-center space-x-8 mt-4 md:mt-0&quot;>
              <Link href=&quot;/privacy&quot; className=&quot;text-gray-400 hover:text-blue-500 text-sm transition-colors duration-200&quot;>
                Privacy Policy
              </a>
              <Link href=&quot;/terms&quot; className=&quot;text-gray-400 hover:text-blue-500 text-sm transition-colors duration-200&quot;>
                Terms of Service
              </a>
            </div>
          </div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
                  key={social.name};
                  href={social.href};
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400hove: r:text-blue-400transition-colors";
                  aria-label={social.name};
                >;
                  <social.icon className="h-5w-5" />;
                </a>))};
            </div>;
          </div>;
          {/* Services */};
          <div>;
            <h3 className="text-lgfont-semiboldmb-4">Services</h3>;
            <ul className="space-y-2">;
              {services.map((service) => (;
                <li key={service.name}>;
                  <Link;
                    href={service.href};
                    {service.name};
                  </Link>;
                </li>))};
            </ul>;
          </div>;
          {/* Company */};
          <div>;
            <h3 className="text-lgfont-semiboldmb-4">Company</h3>;
            <ul className="space-y-2">;
              {company.map((item) => (;
                <li key={item.name}>;
                  <Link;
                    href={item.href};
                    {item.name};
                  </Link>;
                </li>))};
            </ul>;
          </div>;
          {/* Resources & Contact */};
          <div>;
            <h3 className="text-lgfont-semiboldmb-4">Resources</h3>;
            <ul className="space-y-2mb-6">;
              {resources.map((resource) => (;
                <li key={resource.name}>;
                  <Link;
                    href={resource.href};
                    {resource.name};
                  </Link>;
                </li>))};
            </ul>;
            <h3 className="text-lgfont-semiboldmb-4">Contact</h3>;
            <div className="space-y-2">;
              <div className="flexitems-centertext-gray-300">;
                <Mail className="h-4w-4mr-2" />;
                <a href="mailt: o: info@ziontechgroup.com" className="hove: r:text-blue-400">;
                  info@ziontechgroup.com;
                </a>;
              </div>;
              <div className="flexitems-centertext-gray-300">;
                <Phone className="h-4w-4mr-2" />;
                <a href="te: l:+1-555-123-4567" className="hove: r:text-blue-400">;
                  +1 (555) 123-4567;
                </a>;
              </div>;
              <div className="flexitems-starttext-gray-300">;
                <MapPin className="h-4 w-4mr-2mt-0.5" />;
                <span>;
                  123 Tech Street<br />;
                  San Francisco, CA 94105;
                </span>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Section */};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
                  key={social.name},;
                  href={social.href},;
                  target="_blank",;
                  rel="noopener noreferrer",;
                  className="text-gray-400hove: r:text-blue-400transition-colors",;
                  aria-label={social.name},;
                >,;
                  <social.icon className="h-5w-5" />,;
                </a>))},;
            </div>,;
          </div>,;
          {/* Services */},;
          <div>,;
            <h3 className="text-lgfont-semiboldmb-4">Services</h3>,;
            <ul className="space-y-2">,;
              {services.map((service) => (,;
                <li key={service.name}>,;
                  <Link,;
                    href={service.href},;
                    {service.name},;
                  </Link>,;
                </li>))},;
            </ul>,;
          </div>,;
          {/* Company */},;
          <div>,;
            <h3 className="text-lgfont-semiboldmb-4">Company</h3>,;
            <ul className="space-y-2">,;
              {company.map((item) => (,;
                <li key={item.name}>,;
                  <Link,;
                    href={item.href},;
                    {item.name},;
                  </Link>,;
                </li>))},;
            </ul>,;
          </div>,;
          {/* Resources & Contact */},;
          <div>,;
            <h3 className="text-lgfont-semiboldmb-4">Resources</h3>,;
            <ul className="space-y-2mb-6">,;
              {resources.map((resource) => (,;
                <li key={resource.name}>,;
                  <Link,;
                    href={resource.href},;
                    {resource.name},;
                  </Link>,;
                </li>))},;
            </ul>,;
            <h3 className="text-lgfont-semiboldmb-4">Contact</h3>,;
            <div className="space-y-2">,;
              <div className="flexitems-centertext-gray-300">,;
                <Mail className="h-4w-4mr-2" />,;
                <a href="mailt: o: info@ziontechgroup.com" className="hove: r:text-blue-400">,;
                  info@ziontechgroup.com,;
                </a>,;
              </div>,;
              <div className="flexitems-centertext-gray-300">,;
                <Phone className="h-4w-4mr-2" />,;
                <a href="te: l:+1-555-123-4567" className="hove: r:text-blue-400">,;
                  +1 (555) 123-4567,;
                </a>,;
              </div>,;
              <div className="flexitems-starttext-gray-300">,;
                <MapPin className="h-4 w-4mr-2mt-0.5" />,;
                <span>,;
                  123 Tech Street<br />,;
                  San Francisco, CA 94105,;
                </span>,;
              </div>,;
            </div>,;
          </div>,;
        </div>,;
        {/* Bottom Section */},;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
