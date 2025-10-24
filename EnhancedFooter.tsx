import {Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AI Solutions', href: '/services/ai' },
    {name: 'Cloud Architecture', href: '/services/cloud'},
    {name: 'Web Development', href: '/services/web'},
    {name: 'Mobile Apps', href: '/services/mobile'},
    {name: 'Data Analytics', href: '/services/analytics'},
    {name: 'DevOps', href: '/services/devops'},
  ]

  const products = [
    {name: 'AI Platform', href: '/products/ai-platform'},
    {name: 'Cloud Suite', href: '/products/cloud-suite'},
    {name: 'Analytics Dashboard', href: '/products/analytics'},
    {name: 'Mobile SDK', href: '/products/mobile-sdk'},
  ]

  const quickLinks = [
    {name: 'About Us', href: '/about'},
    {name: 'Contact', href: '/contact'},
    {name: 'Blog', href: '/blog'},
    {name: 'Careers', href: '/careers'},
    {name: 'Privacy Policy', href: '/legal/privacy'},
    {name: 'Terms of Service', href: '/legal/terms'},
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"></div>
          <div className="lg:col-span-2"></div>
            <div className="flex items-center space-x-2 mb-4"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"></div>
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md"></p>
              Leading technology solutions provider helping businesses transform their digital
              presence with cutting-edge AI, cloud architecture and innovative development services.
            </p>
            <div className="flex space-x-4"></div>
              <a
                href="https://linkedin.com/company/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"></a>
                <Linkedin className="w-5 h-5" /></Linkedin>
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"></a>
                <Twitter className="w-5 h-5" /></Twitter>
              </a>
              <a
                href="https://github.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"></a>
                <Github className="w-5 h-5" /></Github>
              </a>
              <a
                href="https://facebook.com/ziontechgroup"
                className="text-gray-400 hover:text-white transition-colors"></a>
                <Facebook className="w-5 h-5" /></Facebook>
              </a>
            </div>
          </div>

          <div></div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2"></ul>
              {services.slice(0, 6).map(service => ()
                <li key={service.name}></li>
                  <Link to={service.href}></Link>
                    <span className="text-gray-300 hover:text-white transition-colors"></span>
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2"></ul>
              {products.slice(0, 6).map(product => ()
                <li key={product.name}></li>
                  <Link to={product.href}></Link>
                    <span className="text-gray-300 hover:text-white transition-colors"></span>
                      {product.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div></div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2"></ul>
              {quickLinks.map(item => ()
                <li key={item.name}></li>
                  <Link to={item.href}></Link>
                    <span className="text-gray-300 hover:text-white transition-colors"></span>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
            <div className="flex items-center space-x-3"></div>
              <Mail className="w-5 h-5 text-blue-400" /></Mail>
              <div></div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3"></div>
              <Phone className="w-5 h-5 text-blue-400" /></Phone>
              <div></div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3"></div>
              <MapPin className="w-5 h-5 text-blue-400" /></MapPin>
              <div></div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center"></div>
            <p className="text-gray-300 text-sm"></p>
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
              <Link to="/legal/privacy"></Link>
                <span className="text-gray-400 hover:text-white text-sm transition-colors"></span>
                  Privacy Policy
                </span>
              </Link>
              <Link to="/legal/terms"></Link>
                <span className="text-gray-400 hover:text-white text-sm transition-colors"></span>
                  Terms of Service
                </span>
              </Link>
              <Link to="/legal/cookies"></Link>
                <span className="text-gray-400 hover:text-white text-sm transition-colors"></span>
                  Cookie Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnhancedFooterPage;
