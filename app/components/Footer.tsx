import React from 'react'
import { Link } from 'react-router-dom'
import {



const services = []
    { name: 'AI Solutions', href: '/ai-solutions', },
    { name: 'IT Solutions', href: '/it-solutions', },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', },
    { name: 'Digital Transformation', href: '/digital-transformation', }
  ];

  const Footer: React.FC = () => {
  

  

  const company = []
    { name: 'About Us', href: '/about', },
    { name: 'Solutions', href: '/solutions', },
    { name: 'Pricing', href: '/pricing', },
    { name: 'Blog', href: '/blog', },
    { name: 'Careers', href: '/careers', },
    { name: 'Case Studies', href: '/case-studies', }
  ];

  const support = []
    { name: 'Contact', href: '/contact', },
    { name: 'Support', href: '/support', },
    { name: 'Tutorials', href: '/tutorials', },
    { name: 'Demo', href: '/demo', },
    { name: 'Documentation', href: '/docs', }
  ];

  const legal = []
    { name: 'Privacy Policy', href: '/privacy', },
    { name: 'Terms of Service', href: '/terms', },
    { name: 'Cookie Policy', href: '/cookies', },
    { name: 'GDPR', href: '/gdpr', },
    { name: 'Security', href: '/security', },
    { name: 'Compliance', href: '/compliance', }
  ];

  const socialLinks = []
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin', },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter', },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github', },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook', }
  ];

  return (
    <footer className="bg-slate-900border-tborder-slate-700">
      <div className="max-w-7xlmx-autopx-4sm:px-6lg:px-8py-12">
        <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8">
          {/* Company Info */}
          <div className="l g: col-span-2">
            <Link to="/" className="flexitems-centerspace-x-3mb-6group">
              <div className="w -1 2 h-12 bg-gradient-to-r from-purple-500 to-cyan-500rounded-lgflexitems-centerjustify-centergroup-hover:scale-110transition-transformcyber-glow">
                <span className="text-whitefont-boldtext-xl">Z</span>
                </div>
        </div>
              <span className="text-xlfont-bold text-whitegroup-hover:text-purple-400transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400mb-6max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3mb-6">
              <div className="flexitems-centerspace-x-3text-gray-300">
                <PhoneIcon className="w -5h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <EnvelopeIcon className="w -5h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
                </div>
        </div>
              <div className="flexitems-centerspace-x-3text-gray-300">
                <MapPinIcon className="w -5h-5 text-purple-400" />
                <span>3 6 4 E Main St STE 1 0 0 8, Middletown, DE 19 7 0 9</span>
                </div>
        </div>
              </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
  )
                  href={social.href}
  )
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'github' && '🐙'}
                </a>
              ))}
  )
            </div>

          {/* Services */}
  )
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

          {/* Company */}
  )
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRight Icon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
  )
                  </Link>
                </li>
              ))}
  )
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">Resources</h3>
            <ul className="space-y-3mb-8">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mt-16pt-8border-tborder-slate-700/5 0">
          <div className="max-w-2xlmx-autotext-center">
            <h3 className="text -2xl font-bold text-whitemb-4bg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">Stay Updated</h3>
            <p className="text-gray-300mb-6text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4max-w-mdmx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex -1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:ring-2focus:ring-purple-500focus:border-transparent"
              />
              <button className="px -8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerfont-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt -1 2 pt-8border-tborder-slate-700/5 0flexflex-colmd:flex-rowjustify-betweenitems-center">
          <div className="flexitems-centerspace-x-2text-gray-400mb-4md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w -4h-4 text-red-400" />
            <span>by Zion Tech Group</span>
            </div>
        </div>
          <div className="flexspace-x-6">
            <Link to="/privacy" className="text-gray-400hover:text-whitetransition-colorstext-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400hover:text-whitetransition-colorstext-sm">Terms of Service</Link>
            </div>
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
  )
export default Footer;;
