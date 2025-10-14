const [isServicesOpen, setIsServicesOpen] = useState(false)';,
const navigationItems = [{ name: "Home", href: "/" },'{ name: "About", href: "/about" },'{",
      name: "Services",'",
      href: "/services",'",
      submenu: [{ name: "AI Services", href: "/ai-services" },'{ name: "IT Services", href: "/it-services" },'{ name: "Cloud Infrastructure", href: "/cloud-infrastructure" },'{ name: "Digital Transformation", href: "/digital-transformation" }'"]}
    { name: "Solutions", href: "/solutions" },'{ name: "Case Studies", href: "/case-studies" },'{ name: "Blog", href: "/blog" },'{ name: "Contact", href: "/contact" }'",
  ];,
import React from 'react';',
{ useState } from 'react';';,
import { Link  , Menu,  X,  ChevronDown } from 'lucide-react';,
const Header: React.FC = () => { const [isOpen, setIsOpen] = useState(false);,
  const [isServicesOpen, setIsServicesOpen] = useState(false);,
' }
const navigationItems = [{ name: "Home", href: "/" },';'",
    { name: "About", href: "/about" },'",
    { ',
      name: "Services",';'",
      href: "/services",';' }
      submenu: [{ name: "AI Services", href: "/ai-services" },';'",
        { name: "IT Services", href: "/it-services" },';'",
        { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },';'",
        { name: "Digital Transformation", href: "/digital-transformation" }'"];,
    },',
    { name: "Solutions", href: "/solutions" },';'",
    { name: "Case Studies", href: "/case-studies" },';'",
    { name: "Blog", href: "/blog" },';'",
    { name: "Contact", href: "/contact" }'",
  ];,
  return (<nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50"></nav>
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"><div className="flex justify-between items-center h-16"></div>
    </div>
          { /* Logo */ }
          <div className="flex-shrink-0"><Link to="/" className="text-2xl font-bold text-white"></Link>
              Zion Tech Group;,
            </Link>
          </div>
    </div>
          { /* Desktop Navigation */ }
          <div className="hidden md: block"><div className="ml-10 flex items-baseline space-x-4"></div>)
              {navigationItems.map((item) => (

                <div key={item.name} className="relative group"></div>
    </div>
          <div className="hidden md: block"><div className="ml-10 flex items-baseline space-x-4"></div>;)
              { navigationItems.map((item) => ( }
                <div key={item.name} className="relative group"></div>
    </div>
                  <Link;,
                    to={ item.href }
                    className="$1")
                    onMouseEnter={ () => item.submenu && setIsServicesOpen(true) }
                    onMouseLeave={ () => item.submenu && setIsServicesOpen(false) }
                  >,
                    { item.name }
                    { item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" /> }
                  </Link>
                  { /* Dropdown Menu */ }
                  {item.submenu && isServicesOpen && (

                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"></div>)
                      {item.submenu.map((subItem) => (

                        <Link;}
                          key={ subItem.name }
                          to={ subItem.href }
                          className="$1"
                        ></Link;}
>
                          { subItem.name }
        <div className="flex justify-between items-center h-16"></div>{ /* Logo */ }
          <div className="flex-shrink-0"><Link to="/" className="text-2xl font-bold text-white"></Link>
              Zion Tech Group</Link></div>{ /* Desktop Navigation */ }
          <div className="hidden md: block"></div>)
            <div className="ml-10 flex items-baseline space-x-4"></div>{navigationItems.map((item) => (",
                <div key={item.name} className="relative group"></div>
    </div>
                  <Link,
                    to={ item.href }
                    className="text-gray-300 hover: text-white px-3 py-2 rounded-md text-sm font-medium transition-colors")
                    onMouseEnter={ () => item.submenu && setIsServicesOpen(true) }
                    onMouseLeave={ () => item.submenu && setIsServicesOpen(false) }
                  >{ item.name }
                    { item.submenu && <ChevronDown className="inline w-4 h-4 ml-1" /> }
                  </Link>{ /* Dropdown Menu */ }

                  {item.submenu && isServicesOpen && (")
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"></div>{item.submenu.map((subItem) => (",
                        <Link,
                          key={subItem.name}

                          to={ subItem.href }
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700">{ subItem.name }
                        </Link>)
                      ))
                    </div>
    </div>
                  )
                </div>
    </div>
              ))
            </div>
    </div>
          </div>

    </div>
          { /* CTA Button */ }
          <div className="hidden md: block"><Link",
              to="$1"",
              className="$1"
            ></Link",
>
              Get Started;,
            </Link>
          </div>

    </div>
          { /* Mobile menu button */ }
          <div className="md: hidden"><button,
              onClick={ () => setIsOpen(!isOpen) }
              className="$1"
            >,
              { isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
            </button>
          </div>
    </div>
        </div>
    </div>
        { /* Mobile Navigation */ }
        {isOpen && (

          <div className="md: hidden"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2"></div>)
              {navigationItems.map((item) => (

                <div key={item.name}></div>
    </div>
          <div className="md: hidden"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/50 rounded-lg mt-2"></div>;)
              { navigationItems.map((item) => ( }
                <div key={item.name}></div>;,
                  <Link;,
                    to={ item.href }
                    className="$1")
                    onClick={ () => setIsOpen(false) }

                  >,
                    { item.name }
                  </Link>
                  {item.submenu && (

                    <div className="ml-4 space-y-1"></div>)
                      {item.submenu.map((subItem) => (

                        <Link;}
                          key={ subItem.name }
                          to={ subItem.href }
                          className="$1")
                          onClick={ () => setIsOpen(false) }
                        >,
                          { subItem.name }
            </div></div>{ /* CTA Button */ }
          <div className="hidden md: block"><Link",
              to="/contact",
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: from-cyan-600 hover:to-blue-700 transition-all duration-300"></Link",
>
              Get Started</Link></div>{ /* Mobile menu button */ }
          <div className="md: hidden"><button",
              onClick={ () => setIsOpen(!isOpen) }
              className="text-gray-300 hover:text-white p-2">{ isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
            </button></div></div>{ /* Mobile Navigation */ }

        {isOpen && (

          <div className="md: hidden"></div>)
            <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3 bg-slate-800/50 rounded-lg mt-2"></div>{navigationItems.map((item) => (",
                <div key={item.name}></div>
    </div>
                  <Link,

                    to={ item.href }
                    className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium")
                    onClick={ () => setIsOpen(false) }
                  >{ item.name }

                  </Link>{item.submenu && (")
                    <div className="ml-4 space-y-1"></div>{item.submenu.map((subItem) => (",
                        <Link,
                          key={subItem.name}

                          to={ subItem.href }
                          className="text-gray-400 hover: text-white block px-3 py-2 rounded-md text-sm")
                          onClick={ () => setIsOpen(false) }
                        >{ subItem.name }

                        </Link>
                      ))
                    </div>
    </div>
                  )
                </div>
    </div>
              ))
              <div className="pt-4"><Link",
                  to="$1",
                  className="$1"
                  onClick={ () => setIsOpen(false) }

                >,
                  Get Started;,
                </Link>
              </div>
    </div>
            </div>
    </div>
          </div>
    </div>
        )
      </div>
    </div>
    </nav>
  );,
export default Header;,
                <Link,
                  to="/contact",
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={ () => setIsOpen(false) }

                >,
                  Get Started</Link></div></div></div>
    </div>
        )
      </div></nav>
  );,
export default Header;,
}}}}}}}}}}};,