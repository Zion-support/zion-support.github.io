
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

} from "lucide-react";

export default function Footer() {

export default function Footer() {;

  const currentYear = new Date().getFullYear();
  const footerLinks = {
    services: [

    solutions: [
      { name: "Enterprise Solutions", href: "/enterprise" }
      { name: "Startup Solutions", href: "/startup" }
      { name: "E-commerce", href: "/ecommerce" }
      { name: "Healthcare", href: "/industries/healthcare" }
      { name: "Finance", href: "/industries/finance" }
      { name: "Education", href: "/industries/education" }
    ]
    company: [
      { name: "About Us", href: "/about" }
      { name: "Our Team", href: "/team" }
      { name: "Careers", href: "/careers" }
      { name: "Case Studies", href: "/case-studies" }
      { name: "News", href: "/news" }
      { name: "Contact", href: "/contact" }
    ]
    resources: [

  };

      { name: "Blog", href: "/blog" }
      { name: "Documentation", href: "/docs" }
      { name: "API Reference", href: "/api" }
      { name: "Tutorials", href: "/tutorials" }
      { name: "White Papers", href: "/white-papers" }
      { name: "Support", href: "/support" }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">;
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">

              Leading technology solutions provider specializing in AI
              cybersecurity, cloud infrastructure, quantum computing
              blockchain, IoT, and digital transformation services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />

                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>

              </div>
            </div>
          </div>
          {/* Services */}
          <div>

            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>

                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>

              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"

                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"

                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;

            <h3 className="text-lg font-semibold mb-4">Resources</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.resources.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

  }
;
  return (
    <footer className="bg - gray - 900 text - white">;
      {/* Main Footer Content */}
      <div className="container mx - auto px - 4 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap - 8">;
          {/* Company Info */}
          <div className="lg:col - span - 2">;
            <Link href="/" className="text - 2xl font - bold text - white mb - 4 block">;
              Zion Tech Group;
            </Link>;
            <p className="text - gray - 300 mb - 6 max - w-md">;
              Leading technology solutions provider specializing in AI,
              cybersecurity, cloud infrastructure, quantum computing,
              blockchain, IoT, and digital transformation services.;
            </p>;
            {/* Contact Info */}
            <div className="space - y-3">;
              <div className="flex items - center text - gray - 300">;
                <Phone className="w - 4 h - 4 mr - 3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items - center text - gray - 300">;
                <Mail className="w - 4 h - 4 mr - 3" />;
                <span > kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items - start text - gray - 300">;
                <MapPin className="w - 4 h - 4 mr - 3 mt - 1 flex - shrink - 0" />;
                <span>;
                  364 E Main St STE 1008;
                  <br />;
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Services</h3>;
            <ul className="space - y-2">;
              {footer_links.services.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Solutions */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Solutions</h3>;
            <ul className="space - y-2">;
              {footer_links.solutions.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
          </div>;
          {/* Company & Resources */}
          <div>;
            <h3 className="text - lg font - semibold mb - 4">Company</h3>;
            <ul className="space - y-2 mb - 6">;
              {footer_links.company.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}
            </ul>;
            <h3 className="text - lg font - semibold mb - 4">Resources</h3>;
            <ul className="space - y-2">;
              {footer_links.resources.map ((link) => (
                <li key={link.name}>;
                  <Link;
                    href={link.href}
                    className="text - gray - 300 hover:text - white transition - colors";
                  >;
                    {link.name}
                  </Link>;
                </li>))}

            </ul>;
          </div>;
        </div>;
      </div>;

              />;
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">;
                Subscribe;
                <ArrowRight className="w-4 h-4 ml-2" />;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">

              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">

                Privacy Policy
              </Link>
                className="text-gray-400 hover:text-white transition-colors">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">;
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

}

}

