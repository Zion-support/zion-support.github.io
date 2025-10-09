'use client';
import React, { memo } from 'react';

const Footer: React.FC = memo(() => {
                  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div>
        {/* Main Footer Content */}
        <div>
          <div>
            {/* Company Info */}
            <div>
              <div>
                <div>
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h2>
                  <p className="text-xs text-cyan-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
              
              {/* Contact Info */}
              <div>
                <div>
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464-0950</a>
                </div>
                <div>
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div>
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>
              {/* Social Links */}
              <div>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">AI Services</h3>
              <ul className="space-y-3">
                {aiServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/ai-services" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All AI Services →
                  </Link>
                </li>
              </ul>
            </div>
            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-blue-400 neon-text">IT Services</h3>
              <ul className="space-y-3">
                {itServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/it-services" 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All IT Services →
                  </Link>
                </li>
              </ul>
            </div>
            {/* Micro SAAS Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-green-400 neon-text">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.slice(0, 8).map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
                <li>
                  <Link
                    to="/micro-saas" 
                    className="text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium flex items-center"
                  >
                    View All Micro SAAS →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Additional Services Row */}
          <div>
            {/* Emerging Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-purple-400 neon-text">Emerging Tech</h3>
              <ul className="space-y-3">
                {emergingTech.slice(0, 6).map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.url}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                    <p className="text-xs text-gray-500 ml-5">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-pink-400 neon-text">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-orange-400 neon-text">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Stats Section */}
          <div>
            <div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div>
          <div>
            <div>
              <div>
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div>
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>);
});

Footer.displayName = 'Footer';
export default Footer