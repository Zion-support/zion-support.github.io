import React from 'react'; import { Link  } from 'react-router-dom'; import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp  } from 'lucide-react'; export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); }; const currentYear = new Date().getFullYear(); const footerLinks = { services: [{ name: 'AI & Machine Learning', href: '/services/ai' }, { name: 'Cloud Solutions', href: '/services/cloud' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Software Development', href: '/services/development' }, { name: 'Digital Transformation', href: '/services/transformation' }, { name: 'Consulting', href: '/services/consulting' } ], solutions: [{ name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Government Solutions', href: '/solutions/government' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/solutions/financial' } ], company: [{ name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' } ], resources: [{ name: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Portal', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' } ] }; const socialLinks = [ { name: 'Facebook', icon: Facebook, href: 'https:

                <span className="text-white font-bold text-sm">Z</span>
              </div>"
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>"
            <p className="text-gray-400 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity
              cloud infrastructure, and digital transformation services.
            </p>"
            <div className="space-y-2">"
              <div className="flex items-center space-x-2 text-gray-400">"
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>"
              <div className="flex items-center space-x-2 text-gray-400">"
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>"
              <div className="flex items-center space-x-2 text-gray-400">"
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>"
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} "
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>"
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover: text-white transition-colors" >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Company</h3>"
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover: text-white transition-colors" >
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
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
        </div>

        {/* Bottom Section */}"
        <div className="border-t border-gray-800 mt-12 pt-8">"
          <div className="flex flex-col md:flex-row justify-between items-center">"
            <div className="text-gray-400 text-sm mb-4 m
    d:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>"
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: text-white transition-colors" aria-label={social.name} >

                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}"
        className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-colors z-50""
        aria-label="Scroll to top"
      >"
        <ArrowUp className="w-5 h-5" />
      </button>
;
&apos;}',
