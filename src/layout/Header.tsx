

export default function Header() ;{}
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {}
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)}
;
    window.addEventListener(&apos;scroll&apos;, handleScroll);
    return () => window.removeEventListener(&apos;scroll&apos;, handleScroll)}, []);&apos;
  const navigation = [
    {

      href: '/services', current: location.pathname.startsWith('/services'), dropdown: [{ name: 'AI & Machine Learning', href: '/services/ai-machine-learning' }, { name: 'Cloud & DevOps', href: '/services/cloud-devops' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Digital Transformation', href: '/services/digital-transformation' }, { name: 'Financial Solutions', href: '/services/financial-solutions' }, { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions' }, { name: 'Industry Solutions', href: '/services/industry-solutions' }
      ]}, { name: 'Solutions',
      href: '/solutions', current: location.pathname.startsWith('/solutions'), dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Space Technology', href: '/solutions/space-tech' }, { name: 'Supply Chain', href: '/solutions/supply-chain' }
      ]}, { name: 'About',
      href: '/about', current: location.pathname.startsWith('/about'), dropdown: [
        { name: 'Our Story', href: '/about/story' }, { name: 'Team', href: '/about/team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }
      ]}, { name: 'Resources',
      href: '/resources', current: location.pathname.startsWith('/resources'), dropdown: [
        { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case-studies' }, { name: 'White Papers', href: '/white-papers' }, { name: 'Webinars', href: '/webinars' }, { name: 'Training', href: '/training' }, { name: 'Documentation', href: '/docs' }
      ]}, { name: 'Contact',
      href: '/contact', current: location.pathname === '/contact'}

  ]
  return(&apos;&apos;
    <;<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled;
        ? &apos;bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg';
        : &apos;bg-white/90 backdrop-blur-md&apos}`}>&apos;&apos;
      <div className=&apos;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&apos;>&apos;

        <div className=&apos;flex items-center justify-between h-16 l,g:h-20&apos;>
          {/* Logo */}&apos;
          <Link to=&apos;/&apos; className=&apos;flex items-center space-x-3&apos;>&apos;
            <div className=&apos;w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center&apos;>&apos;

              <span className=&apos;text-white font-bold text-xl&apos;>Z&apos;</span>
            </div>
            <div className=&apos;hidden sm:block&apos;>&apos;
              <h1 className=&apos;text-xl font-bold text-gray-900&apos;>Zion Tech Group&apos;</h1>
              <p className=&apos;text-xs text-gray-600&apos;>Innovation & Technology&apos;</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className=&apos;hidden lg:flex items-center space-x-8&apos;>
            {navigation.map((item) => (&apos}
              <div key={item.name} className=&apos;relative group&apos;>
                {item.dropdown ? (&apos}
                  <div className=&apos;relative&apos;>&apos;'
                    <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      item.current;
                        ? &apos;text-blue-600 bg-blue-50';
                        : &apos;text-gray-700 hover:text-blue-600 hove,r:bg-gray-50&apos}`}>{item.name}&apos;&apos;
                      <svg className=&apos;ml-1 inline-block w-4 h-4&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;

                        <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M19 9l-7 7-7-7&apos; />&apos;
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div className=&apos;absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hove,r:visible transition-all duration-200 z-50&apos;>&apos;
                      <div className=&apos;py-2&apos;>
                        {item.dropdown.map((subItem) => (&apos}
                          <Link
                            key={subItem.name}
                            to={subItem.href}

                          </Link>

                        ))}
                      </div>;
                    </div>;
                  </div>;
                ) : (;
                  <Link;
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                      item.current;

                )}
              </div>;
            ))}


            </Link>
          </div>
          {/* Mobile menu button */}
          <button;
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}


            </svg>
          </button>
        </div>
      </div>

                        <Link;
                          key={subItem.name}
                          to={subItem.href}


                          onClick={() => setMobileMenuOpen(false)}

                      ))}
                    </div>;
                  </div>;
                ) : (;
                  <Link;
                    to={item.href}


                    onClick={() => setMobileMenuOpen(false)}

                )}
              </div>;
            ))}

              <Link;


                onClick={() => setMobileMenuOpen(false)}

              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )}






