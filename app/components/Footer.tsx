import React from 'react'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
;
const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear();
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
    { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' };
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' }
  ];

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Schedule Demo', href: '/demo' },
    { name: 'System Status', href: '/status' },
    { name: 'Report Issue', href: '/report' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }
  ];

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-700"></></footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"></div>
          {/* Company Info */}
          <div className="lg:col-span-2"></div>
            <Link to="/" className="flex items-center mb-4"></Link>
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"></div>
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4"></p>
              Leading provider of AI solutions, cybersecurity, _cloud infrastructure, and digital transformation services. 
              Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4"></div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                <Facebook className="h-5 w-5" /></Facebook>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                <Twitter className="h-5 w-5" /></Twitter>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                <Linkedin className="h-5 w-5" /></Linkedin>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
                <Github className="h-5 w-5" /></Github>
              </a>
            </div>
          </div>

          {/* Services */}
          <div></div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2"></ul>
              {services.map((service
    </>
  ) => (
                <li key={service.name}></li>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  ></Link>
                    <ArrowRightIcon className="h-3 w-3 mr-2" /></ArrowRightIcon>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div></div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2"></ul>
              {solutions.map((solution) => (
                <li key={solution.name}></li>
                  <Link
                    to={solution.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  ></Link>
                    <ArrowRightIcon className="h-3 w-3 mr-2" /></ArrowRightIcon>
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div></div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2"></ul>
              {resources.map((resource) => (
                <li key={resource.name}></li>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  ></Link>
                    <ArrowRightIcon className="h-3 w-3 mr-2" /></ArrowRightIcon>
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div></div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2"></ul>
              {company.map((item) => (
                <li key={item.name}></li>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  ></Link>
                    <ArrowRightIcon className="h-3 w-3 mr-2" /></ArrowRightIcon>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-700"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
            <div className="flex items-center"></div>
              <PhoneIcon className="h-5 w-5 text-purple-400 mr-3" /></PhoneIcon>
              <div></div>
                <p className="text-white font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">24/7 Support</p>
              </div>
            </div>
            <div className="flex items-center"></div>
              <EnvelopeIcon className="h-5 w-5 text-cyan-400 mr-3" /></EnvelopeIcon>
              <div></div>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
              </div>
            </div>
            <div className="flex items-center"></div>
              <MapPinIcon className="h-5 w-5 text-green-400 mr-3" /></MapPinIcon>
              <div></div>
                <p className="text-white font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"></div>
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0"></div>
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
          </div>
          <div className="flex space-x-6"></div>
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              ></Link>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-6 text-center"></div>
          <p className="text-gray-400 text-sm flex items-center justify-center"></p>
            Made with <HeartIcon className="h-4 w-4 text-red-400 mx-1" /> by Zion Tech Group
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;