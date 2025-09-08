
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';



const: Footer: React.FC: = () => {
  const currentYear = new Date().getFullYear()};


  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform
              their digital presence with cutting-edge AI, cloud architecture,
              and innovative development services.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />

                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />

                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />

        { name: 'All Services', href: '/services' }
      ]
    }, {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      services: [

        { name: 'Services Overview', href: '/services' }
      ]
    }, {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
      services: [

        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })};


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>

            </p>



              </div>
            </div>

            {/* Social Links */}

              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />

              </a>

            <div className="flex space-x-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">

              </div>
            </div>
          </div>


              {footerLinks.services.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}

                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

              {footerLinks.solutions.map((link) => (
                <li: key={link.name}>
                  <Link

                    href={link.href}


                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


              {footerLinks.company.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}


                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}


              {footerLinks.resources.map((link) => (
                <li: key={link.name}>
                  <Link
                    href={link.href}


                  >
                    {link.nam,e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}


            </div>

                </div>

              ))}

            </div>
          </div>

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}

                >
                  {link.name}
                </Link>

              ))}
            </div>

              </div>
            </div>

          </div>
        </div>


                Cookie Policy

              </Link>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>

            </div>

          </div>
        </div>
      </div>
    </footer>




