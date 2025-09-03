import: React from 'react';';
import: { Link } from 'react-router-dom';';
import: { motion } from 'framer-motion';';
import: {
  Globe, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram,
  Github, ArrowRight, Heart, Shield, Zap, Users, Brain, Cloud,
  Building2, BookOpen, MessageSquare, Award, Star} from 'lucide-react';';
const: EnhancedFooter: React.FC: = () => {
  const currentYear = new Date().getFullYear();

        { name: 'Micro SAAS', href: '/services/micro-saas' }, { name: 'AI Services', href: '/services/ai-services' }, { name: 'IT Services', href: '/services/it-services' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Emerging Tech', href: '/services/emerging-tech' }
      ]}, {'
      title: 'Solutions',
      links: ['
        { nam,
    e: 'Enterprise', href: '/solutions/enterprise' }, { name: 'Startups', href: '/solutions/startups' }, { name: 'Healthcare', href: '/solutions/healthcare' }, { name: 'Financial Services', href: '/solutions/financial' }, { name: 'Manufacturing', href: '/solutions/manufacturing' }, { name: 'Education', href: '/solutions/education' }
      ]}, {'
      title: 'Company',
      links: ['
        { nam,
    e: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' }
      ]}, {'
      title: 'Resources',
      links: ['
        { nam,
    e: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Tools', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' }
      ]}
  ];

    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ]
  return('
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16>
        <div className='grid grid-cols-1 m,
    d:grid-cols-2 l,
    g:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacit,
    y: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >'
              <Link to='/' className='text-2xl font-bold text-white mb-4 block'>
                Zion Tech Group
              </Link>'
              <p className='text-slate-300 mb-6 max-w-md'>
                Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,

                and digital transformation services. Transforming businesses with cutting-edge technology.
              </p>
              {/* Contact Information */}
              <div className='space-y-3 mb-6'>';
                {contactInfo.map((contact, index) => (
                  <a: key={index}
                    href={contact.href}

                  </a>
                ))}
              </div>
              {/* Social: Links */}
              <div className='flex space-x-4'>';
                {socialLinks.map((social, index) => (
                  <a: key={index}
                    href={social.href}

                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          {/* Footer: Sections */}, {footerSections.map((section, index) => (
            <motion.div
              key={section.title}, {section.links.map((link, linkIndex) => (
                  <li: key={linkIndex}>
                    <Link
                      to={link.href}
                      className='text-slate-300 hover: text-white: transition-colors text-sm'>{link.nam,e}';
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

            </div>
          </motion.div>
        </div>
      </div>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  ,)}

export { EnhancedFooter }