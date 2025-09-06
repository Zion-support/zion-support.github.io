

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  ArrowRight
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import React from 'react;';
import Link from 'next/link';

                </a>
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </div>
              <div className="flex items-center>
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href=mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors>
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className=w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
                <span>
                  364 E Main St STE 1008
                  <br />
                  Middletown DE 19709
                </span>
            {/* Contact Info */}
              </div>
            </div>
          </div>
          {/* Services */}

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>

            <h3 className="text-lg font-semibold mb-6>Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className=text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1>
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-3" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-3" />;
                <span>kleber@ziontechgroup && ziontechgroup.com</span>;
              </div>;
              <div className="flex items-start text-gray-300">;
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />;
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.services.map((link) => (;
                <li key={link && link.name}>;
                  <Link
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {footerLinks && footerLinks.solutions.map((link) => (;
                <li key={link && link.name}>;

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
          {/* Company */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3>
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                    href={link && link.href}
                    className="text-gray-300 hover:text-white transition-colors">;
                    {link && link.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;

          {/* Company & Resources */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {footerLinks && footerLinks.company.map((link) => (;
                <li key={link && link.name}>;
                  <Link
          {/* Resources */}
          <div>
            <h3 className=text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3>
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
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
            </ul>;
          </div>;
        </div>;
      </div>;
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
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            {/* Social Links */}
            <div className=mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3>Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target=_blank"
                    rel="noopener noreferrer
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className=h-5 w-5" />
                  </a>
                ))}

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        <div className="border-t border-gray-800 mt-8 pt-8>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className=text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm>
              <Link href="/privacy" className=text-gray-400 hover:text-white transition-colors">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
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

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
