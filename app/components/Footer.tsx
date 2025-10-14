import React from 'react';
import { Link } from 'react-router-dom;
import { PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon'
} from '@heroicons/react/24/outline;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = ['
    { name: 'AI Services', href: '/ai-services' },'
    { name: 'AI Solutions', href: '/ai-solutions' },'
    { name: 'IT Solutions', href: '/it-solutions' },'
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
    { name: 'Cybersecurity', href: '/cybersecurity' },'
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },'
    { name: 'Digital Transformation', href: '/digital-transformation' },'
    { name: '5G Solutions', href: '/5g-solutions' },'
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const company = ['
    { name: 'About Us', href: '/about' },'
    { name: 'Our Team', href: '/team' },'
    { name: 'Careers', href: '/careers' },'
    { name: 'Contact', href: '/contact' },'
    { name: 'News', href: '/news' },'
    { name: 'Partners', href: '/partners' }
  ];

  const resources = ['
    { name: 'Blog', href: '/blog' },'
    { name: 'Tutorials', href: '/tutorials' },'
    { name: 'Documentation', href: '/docs' },'
    { name: 'Support', href: '/support' },'
    { name: 'Demo', href: '/demo' },'
    { name: 'Pricing', href: '/pricing' }
  ];

  const legal = ['
    { name: 'Privacy Policy', href: '/privacy' },'
    { name: 'Terms of Service', href: '/terms' },'
    { name: 'Cookie Policy', href: '/cookies' },'
    { name: 'GDPR', href: '/gdpr' }
  ];


  const socialLinks = ['
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: LinkedinIcon },;
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: TwitterIcon },;
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: FacebookIcon },;
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: InstagramIcon }
  ];

  return (
    
    <footer />
      <div>
    <div />
          {/* Company Info */}
          <div>
    <div />
              <div>
    <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-2xl">Zion Tech Group</span>
            </Link>
            <p />
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age with real, proven results.
            </p>
            
            {/* Contact Info */}
            <div>
    <div />
                <PhoneIcon />
                <span>+1-302-464-0950</span>
              </div>
              <div>
    <EnvelopeIcon />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div>
    <MapPinIcon />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div />
              {socialLinks.map((social) => (
                <a />
                  <social />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div />
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul />
              {services.map((service) => (
                <li />
                  <Link />
                    <ArrowRightIcon />
                    {service.name}
                  </Link>
                </li>
              ))}          <div />
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4> 
            <ul />
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div />
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul />
              {company.map((item) => (
                <li />
                  <Link />
                    <ArrowRightIcon />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div />
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul />
              {resources.map((resource) => (
                <li />
                  <Link />
                    <ArrowRightIcon />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal */}
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul />
              {legal.map((item) => (
                <li />
                  <Link />
                    <ArrowRightIcon />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div>
    <div />
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest news and updates from Zion Tech Group</p>
            <div>
    <input />
              <button />
                Subscribe
                <ArrowRightIcon />
              </button>
            </div>
        </div>
      </div>

        {/* Copyright */}
        <div>
    <div />
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div>
    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Futuristic Background Effects */}
      <div>
    <div />'
        <div />'
        <div />'
        <div />
      </div>
    </footer>
  );
};

export default Footer;