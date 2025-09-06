import React from 'react';
import Link from 'next/link';
import {
  Brain,
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter,;
} from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
        { name: 'Edge Computing', href: '/edge-computing-orchestration' },
        { name: 'Space Technology', href: '/space-technology' },
        {
          name: 'View All Services',
          href: '/comprehensive-2025-services-showcase',
        },
      ],
    },    {

    {

      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Work', href: '/portfolio' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ],
    },    {

    {

      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github },

                <span>Global Operations</span>

              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map(section => (

            <div key={section.title}>
              <h3 className='text-white font-semibold mb-4'>{section.title}</h3>
              <ul className='space-y-2'>
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-white/70 hover:text-white transition-colors duration-200'                    >

                    >

                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='text-white/60 text-sm'>              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}
            <div className='flex items-center space-x-4'>
              {socialLinks.map(social => (

              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Social Links */}

                </a>

              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};export default EnhancedFooter;

export default EnhancedFooter;