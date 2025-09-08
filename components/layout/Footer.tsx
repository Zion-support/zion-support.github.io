



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();





  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
  ];


                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>

                </a>
              </div>"
              <div className=\"flex items-center space-x-3\"    />"
                <Mail className=\"w-4 h-4 text-blue-400\"    />"
                <a href=\"mailto:kleber@ziontechgroup.com\" className=\"text-gray-400 hover:text-white transition-colors\"    />
                  kleber@ziontechgroup.com;
                </a>
              </div>"
              <div className=\"flex items-center space-x-3\"    />"
                <MapPin className=\"w-4 h-4 text-blue-400\"    />"
                <span className=\"text-gray-400\"    />
                  364 E Main St STE 1008<br    />
                  Middletown DE 19709;
                </span>
              </div>
            </div>
          </div>


                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;


            </ul>;
          </div>;

              {socialLinks && socialLinks.map((social) => (;


          {/* Solutions */}
          <div    />;"
            <h3 className=\"text-lg font-semibold mb-4\"    />Solutions</h3>;"
            <ul className=\"space-y-2\"    />;
              {solutions && solutions.map((solution) => (<li key={solution && solution.name}    />;
                  <Link;
              {solutions && solutions.map((solution) =    /> (;}
                <li key={solution && solution.name}    />;
                  <Link;
href={solution && solution.href}"
                    className=\"text-gray-400 hover:text-white transition-colors\"    />;
                    {solution && solution.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company & Support */}


              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;



};

export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react';


          <div    />"
            <h3 className=\"text-lg font-semibold mb-4\"    />Services</h3>"
            <ul className=\"space-y-2\"    />
              {services.map((service) => (}
                <li key={service.name}    />
                  <Link;
href={service.href}"
                    className=\"text-gray-300 hover:text-blue-400 transition-colors\"
                      />

                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div    />"
            <h3 className=\"text-lg font-semibold mb-4\"    />Company</h3>"
            <ul className=\"space-y-2\"    />
              {company.map((item) => (}
                <li key={item.name}    />
                  <Link;
href={item.href}"
                    className=\"text-gray-300 hover:text-blue-400 transition-colors\"
                      />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Built with ❤️ for the future of technology
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;






