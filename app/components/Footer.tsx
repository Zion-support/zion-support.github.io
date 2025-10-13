import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI-powered solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI Automation</li>
              <li>Data Analytics</li>
              <li>Custom Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
            </ul>
                Cookie Policy;
              </a>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>"
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Micro SAAS</h4>"
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link ;
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4">Company</h5>"
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.url}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Emerging Tech</h4>"
                <ul className="space-y-2">
                  {emergingTech.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link ;
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Company</h4>"
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Support</h4>"
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Legal</h4>"
              <ul className="space-y-2">
                {legalLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Stay Updated</h4>"
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and tech updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-r-md hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 text-sm font-medium">
                  Subscribe;
                </button>
              </div>
            </div>
          </div>
        </div>


            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Core Services</h4>"
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      {service.icon}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>"
              <ul className="space-y-2">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h4>"
              <ul className="space-y-2">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
