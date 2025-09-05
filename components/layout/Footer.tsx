<<<<<<< HEAD
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
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
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
