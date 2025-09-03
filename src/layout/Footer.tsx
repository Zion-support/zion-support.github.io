
import { Bottom, Center, Cloud, Common, Cookie, File, Info, User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown" > {"
  data: T;

  status: number;
  message?: string}


interface User {id: string;
  email: string;


interface Service {id: string;
  name: string;
  description: string;




interface ComponentProps {className?: string;
  children?: React.ReactNode;
  [key: string]: unknown}





      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Space Technology', href: '/solutions/space-tech' }, { name: 'Supply Chain', href: '/solutions/supply-chain' }, { name: 'Industry Solutions', href: '/solutions/industry' }
      ]}, { title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },

        { name: 'Our Story', href: '/about/story' }, { name: 'Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Contact', href: '/contact' }

      links: [
        { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'White Papers', href: '/white-papers' }, { name: 'Webinars', href: '/webinars' }, { name: 'Training', href: '/training' }, { name: 'Documentation', href: '/docs' }
      ]}, { title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' }, { name: 'FAQ', href: '/faq' }, { name: 'Support', href: '/support' }, { name: 'System Status', href: '/system-status' }, { name: 'Industry Solutions', href: '/solutions/industry' }
      ]}, {""
      title: 'Compunknown',
      links: [""
        { name: 'About Us', href: '/about' }","
        { name: 'Our Story', href: '/about/story' }","
        { name: 'Team', href: '/about/team' }","
        { name: 'Careers', href: '/careers' }","
        { name: 'Partners', href: '/partners' }","
        { name: 'Contact', href: '/contact' }


        { name: 'Request Quote', href: '/request-quote' }
      ]}
  ];""

  const legalLinks = [""
    { name: 'Privacy Policy', href: '/privacy-policy' }","
    { name: 'Terms of Service', href: '/terms-of-service' }","
    { name: 'Cookie Policy', href: '/cookie-policy' }","
    { name: 'Accessibility', href: '/accessibility' }


    <footer className='bg-gray-900 text-white'>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>

                <span className='text-white font-bold text-2xl'>Z</span>
              </div>""
              <div>""
                <h3 className='text-xl font-bold'>Zion Tech Group</h3>""
                <p className='text-gray-400 text-sm'>Innovation & Technology</p>
              </div>""

            </div>""
            <p className='text-gray-400 mb-6 max-w-md'>
              Empowering businesses with cutting-edge technology solutions, AI innovation,

              and digital transformation expertise to drive growth and competitive advantage.

                </svg>
              </a>
              <a href=&apos;#&apos; className=&apos;text-gray-400 hover:text-white transition-colors&apos;>&apos;

                <svg className=&apos;w-6 h-6&apos; fill=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;
                  <path d=&apos;M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z&apos;/>&apos;
                </svg>
              </a>





                </svg>
              </a>
            </div>
          </div>

              <ul className='space-y-2'>
                {section.links.map((link) => ('
                  <li key={link.name}" >
                    <Link to={link.href} className='text-gray-400 hover: text-white transition-colors text-sm'>{link.name}

                    <Link



                      className='text-gray-400 hover: text-white transition-colors text-sm'>{link.name}



                    </Link>
                  </li>

                ))}
              </ul>;
            </div>;
          ))}


            <div className='text-gray-400 text-sm'>
              © {currentYear} Zion Tech Group. All rights reserved.""

            </div>""
            <div className='flex space-x-6'>
              {legalLinks.map((link) => (

                <Link

                  key={link.name}


                  className='text-gray-400 hover: text-white transition-colors text-sm'>{link.name}



                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>



