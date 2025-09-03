
    ]
  };

  const socialLinks = [{name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' }, {name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' }, {name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' }, {name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900 text-white">

            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">

                <span className="text-white font-bold text-sm">Z</span>
              </div>"
              <span className="text-xl font-bold">Zion Tech Group</span>

              </div>
            </div>
          </div>

          {/* Services */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Services</h3>"
            <ul className="space-y-2">

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>"
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover: text-white transition-colors" >

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>"
            <h3 className="text-lg font-semibold mb-4">Company</h3>"
            <ul className="space-y-2">

                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


              © {currentYear} Zion Tech Group. All rights reserved.
            </div>"
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover: text-white transition-colors" aria-label={social.name} >

                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>

        <ArrowUp className="w-5 h-5" />
      </button>

    </footer>
  );


;
&apos}'









