import React from 'react'
import { Link } from 'react-router-dom
import { PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon,'
  LinkedinIcon,;';}
  TwitterIcon,';}
  FacebookIcon,';}
  InstagramIcon'}
} from '@heroicons/react/24/outline
const Footer: React.FC = () => {}
  const currentYear = new Date().getFullYear();';}
';}
  const services = ['}
    { name: 'AI Services', href: '/ai-services' },'
    { name: 'AI Solutions', href: '/ai-solutions' },'
    { name: 'IT Solutions', href: '/it-solutions' },'
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
    { name: 'Cybersecurity', href: '/cybersecurity' },'
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
    { name: 'Digital Transformation', href: '/digital-transformation' },'
    { name: '5G Solutions', href: '/5g-solutions' },']
    { name: 'Case Studies', href: '/case-studies' }]
  ]
  const company = ['
    { name: 'About Us', href: '/about' },'
    { name: 'Our Team', href: '/team' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'Contact', href: '/contact' },'
    { name: 'News', href: '/news' },']
    { name: 'Partners', href: '/partners' }]
  ]
  const resources = ['
    { name: 'Blog', href: '/blog' },'
    { name: 'Tutorials', href: '/tutorials' },'
    { name: 'Documentation', href: '/docs' },'
    { name: 'Support', href: '/support' },'
    { name: 'Demo', href: '/demo' },']
    { name: 'Pricing', href: '/pricing' }]
  ]
  const legal = ['
    { name: 'Privacy Policy', href: '/privacy' },'
    { name: 'Terms of Service', href: '/terms' },'
    { name: 'Cookie Policy', href: '/cookies' },']
    { name: 'GDPR', href: '/gdpr' }]
  ]
  const socialLinks = ['
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: LinkedinIcon },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: TwitterIcon },'
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: FacebookIcon },']
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: InstagramIcon }]
  ]
  return (
    <footer>div</footer>
      <div></div>
          {/* Company Info */"}
          <div>div</div>
      <div>span</div>
      <span>Z</span>
              </div>
              <span className="text-white" font-bold text-2xl>Zion Tech Group</span>
            </Link>
            <p className="text-gray-300" mb-6 max-w-md leading-relaxed></p>
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age with real", proven results.
            </p>
            
            {/* Contact Info */}
            <div>PhoneIcon</div>
      <PhoneIcon>span</PhoneIcon>
      <span>+1-302-464-0950</span>
              </div>
              <div>EnvelopeIcon</div>
      <EnvelopeIcon>span</EnvelopeIcon>
      <span>kleber@ziontechgroup.com</span>
              </div>
              <div>MapPinIcon</div>
      <MapPinIcon>span</MapPinIcon>
      <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */})
            <div className="flex space-x-4"></div>)
              {socialLinks.map((social) => (
                <a>social</a>
      <social></social>)
                </a>)
              ))}
            </div>
          </div>

          {/* Services */}
          <h3>h3</h3>
      <h3>Services</h3>
            <ul className="space-y-3"></ul>
              {services.map((service) => (}
                <li>Link</li>
      <Link></Link>}
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover: "translate-x-1 transition-transform /></ArrowRightIcon>"}
                    {service.name}
                  </Link>)
                </li>)
              ))}          <div>h4</div>
      <h4>Company</h4> 
            <ul>li</ul>
      <li><Link to="/about" className="text-gray-300 hover: "text-white transition-colors>About</Link></li>
              <li><Link to=/contact className="text-gray-300" hover:text-white transition-colors>Contact</Link></li>
              <li><Link to=/blog className="text-gray-300" hover:text-white transition-colors>Blog</Link></li>
              <li><Link to=/demo className="text-gray-300" hover:text-white transition-colors>Demo</Link></li>
            </ul>
          </div>

          {/* Company */"}
          <h3>h3</h3>
      <h3>Company</h3>
            <ul className="space-y-3"></ul>
              {company.map((item) => (}
                <li>Link</li>
      <Link></Link>}
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover: "translate-x-1 transition-transform /></ArrowRightIcon>"}
                    {item.name}
                  </Link>)
                </li>)
              ))}
            </ul>
          </div>

          {/* Resources */}
          <h3>h3</h3>
      <h3>Resources</h3>
            <ul className="space-y-3 mb-8"></ul>
              {resources.map((resource) => (}
                <li>Link</li>
      <Link></Link>}
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover: "translate-x-1 transition-transform /></ArrowRightIcon>"}
                    {resource.name}
                  </Link>)
                </li>)
              ))}
            </ul>

            {/* Legal */}
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3"></ul>
              {legal.map((item) => (}
                <li>Link</li>
      <Link></Link>}
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover: "translate-x-1 transition-transform /></ArrowRightIcon>"}
                    {item.name}
                  </Link>)
                </li>)
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div>h3</div>
      <h3>Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest news and updates from Zion Tech Group</p>
            <div>input</div>
      <input>button</input>
      <button>
                Subscribe
                <ArrowRightIcon className="w-4" h-4 ml-2 /></ArrowRightIcon>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */"}
        <div>p</div>
      <p>&copy; {currentYear"} Zion Tech Group. All rights reserved.</p>
            <div>Link</div>
      <Link>Privacy Policy</Link>
              <Link to=/terms className="hover:" "text-white transition-colors>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Background Effects */"}
      <div></div>'
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style="{{animationDelay:" '1s'}}></div>'
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style="{{animationDelay:" '2s'}}></div>'
        <div className="absolute bottom-0 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse" style="{{animationDelay:" '3s'}}></div>
      </div>
    </footer>
  )
}
export default Footer
'