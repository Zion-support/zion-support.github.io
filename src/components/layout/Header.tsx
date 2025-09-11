<span>{contactInfo.phone}</span>,
            </div>,
            <div className="flex items-center space-x-2">,
              <Mail className="w-4 h-4" />,
              <span>{contactInfo.email}</span>,
            </div>,
            <div className="flex items-center space-x-2">,
              <MapPin className="w-4 h-4" />,
              <span>{contactInfo.address}</span>,
            </div>,
          </div>,
          <div className="text-blue-200">,
            <span className="font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */};
            {navigationItems.map((item) => (,
              <div key={item.name} className="relative group">,
                <Link,
                  href={item.href};
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                                  {subItem.name};
                                </div>,
                                <div className="text-sm text-gray-500">,
                                  {subItem.description};
                        })};
                      </motion.div>,
                    )};
            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */};
          <button,
            onClick={() => setIsOpen(!isOpen)};
          >,
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
            >,
              <div className="py-4">,
                {navigationItems.map((item, index) => (,
                  <div key={index}>,
                    <Link,
                      href={item.href};
                              onClick={() => setIsOpen(false)};
                            >,
                              <IconComponent className="w-4 h-4" />,
                              <span>{subItem.name}</span>,
                            </Link>,
                ))};
                <div className="px-6 py-4 border-t border-gray-200">,
                  <Link,
                    href="/contact",
                    onClick={() => setIsOpen(false)};
                  >,
                    Get Quote,
                  </Link>,
                </div>,
              </div>,
        </AnimatePresence>,
      </nav>,
    </header>,
  ),
};

} return ( <header class_name = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled ? 'bg - white / 95 backdrop - blur - md shadow - lg': 'bg - transparent'} ${class_name}`}> {/* Top Contact Bar */} <div class_name = "bg - blue - 900 text - white py - 2 px - 4 hidden lg: block">, <div class_name = "container mx - auto flex justify - between items - center text - sm">, <div class_name = "flex items - center space - x-6"> <div class_name = "flex items - center space - x-2"> <Phone class_name = "w - 4 h - 4" /> <span>{contact_info.phone}</span> </div> <div class_name = "flex items - center space - x-2"> <Mail class_name = "w - 4 h - 4" /> <span>{contact_info.email}</span> </div> <div class_name = "flex items - center space - x-2"> <MapPin class_name = "w - 4 h - 4" /> <span>{contact_info.address}</span> </div> </div> <div class_name = "text - blue - 200"> <span class_name = "font - semibold">Zion Tech Group</span> - Your Digital Transformation Partner </div> </div> </div> {/* Main Navigation */} <nav class_name = "container mx - auto px - 4 py - 4"> <div class_name = "flex items - center justify - between"> {/* Logo */} <Link href = "/" class_name = "flex items - center space - x-2"> <div class_name = "w - 10 h - 10 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center"> <Brain class_name = "w - 6 h - 6 text - white" /> </div> <span class_name = "text - xl font - bold text - gray - 900">; Zion Tech Group </span> </Link> {/* Desktop Navigation */} <div class_name = "hidden lg: flex items - center space - x-8">, {navigation_items.map ((item) = > (, <div key = {item.name} class_name = "relative group"> <Link; href = {item.href} class_name = "flex items - center space - x-1 text - gray - 700 hover:text - blue - 600 transition - colors duration - 200 font - medium"; onMouseEnter = {() = > setActiveDropdown (item.name)} onMouseLeave = {() = > setActiveDropdown (null)}> <span>{item.name}</span> {item.dropdown && <ChevronDown class_name = "w - 4 h - 4" />} </Link> {/* Dropdown Menu */} {item.dropdown && ( <AnimatePresence> {active_dropdown = = = item.name && ( <motion.div; initial = {{ opacity: 0, coordinate_y: 10 }} animate = {{ opacity: 1, coordinate_y: 0 }} exit = {{ opacity: 0, coordinate_y: 10 }} class_name = "absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4 z - 50"; onMouseEnter = {() = > setActiveDropdown (item.name)} onMouseLeave = {() = > setActiveDropdown (null)}> {item.dropdown.map ((sub_item, index) = > {const IconComponent = sub_item.icon; return ( <Link; key = {index} href = {sub_item.href} class_name = "flex items - start space - x-3 px - 6 py - 3 hover: bg - gray - 50 transition - colors duration - 200 group">, <div class_name = "flex - shrink - 0">, <IconComponent class_name = "w - 5 h - 5 text - blue - 600 group - hover: text - purple - 600 transition - colors" />, </div>, <div> <div class_name = "font - medium text - gray - 900 group - hover:text - blue - 600 transition - colors"> {sub_item.name} </div> <div class_name = "text - sm text - gray - 500"> {sub_item.description}})} </motion.div>)} </AnimatePresence>)} </div>))} </div> {/* CTA Button */} <div class_name = "hidden lg: flex items - center space - x-4">, <Link, href = "/contact"; class_name = "px - 6 py - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white rounded - lg hover: shadow - lg transition - all duration - 300 font - semibold">, Get Quote, </Link> </div> {/* Mobile Menu Button */} <button; on_click = {() = > setIsOpen (!is_open)} class_name = "lg:hidden p - 2 rounded - lg text - gray - 700 hover:bg - gray - 100 transition - colors"> {is_open ? <X class_name = "w - 6 h - 6" />: <Menu class_name = "w - 6 h - 6" />} </button> </div> {/* Mobile Navigation */} <AnimatePresence> {is_open && ( <motion.div; initial = {{ opacity: 0, height: 0 }} animate = {{ opacity: 1, height: 'auto' }} exit = {{ opacity: 0, height: 0 }} class_name = "lg: hidden mt - 4 bg - white rounded - lg shadow - lg border border - gray - 200 overflow - hidden">, <div class_name = "py - 4">, {navigation_items.map ((item, index) = > ( <div key = {index}> <Link; href = {item.href} class_name = "block px - 6 py - 3 text - gray - 700 hover:bg - gray - 50 hover:text - blue - 600 transition - colors duration - 200 font - medium"; on_click = {() = > setIsOpen (false)}> {item.name} </Link> {item.dropdown && ( <div class_name = "pl - 6 space - y-2"> {item.dropdown.map ((sub_item, sub_index) = > {const IconComponent = sub_item.icon; return ( <Link; key = {sub_index} href = {sub_item.href} class_name = "flex items - center space - x-3 px - 6 py - 2 text - sm text - gray - 600 hover:bg - gray - 50 hover:text - blue - 600 transition - colors duration - 200"; on_click = {() = > setIsOpen (false)}> <IconComponent class_name = "w - 4 h - 4" /> <span>{sub_item.name}</span> </Link>)})} </div>)} </div>))} <div class_name = "px - 6 py - 4 border - t border - gray - 200"> <Link; href = "/contact"; class_name = "block w - full text - center px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold"; on_click = {() = > setIsOpen (false)}>; Get Quote </Link> </div> </div> </motion.div>)} </AnimatePresence> </nav> </header>)} }
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Code } from 'lucide-react';
const services = [];
const applications = [];
const solutions = [];
  Menu,;
  X,;
  ChevronDown,;
  Phone,;
  Mail,;
  Zap,;
  Brain,;
  Shield,;
  Cloud,;
  Code,;
  Building,;
  Globe;
} from 'lucide-react';
;
const _Header = ("props": "any) => {;
  const [isMenuOpen", setIsMenuOpen] = useState<any>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<any>(false);
  const [isScrolled, setIsScrolled] = useState<any>(false);
  const _location = useLocation();
;
  useEffect(() => {;
    const _handleScroll = ("props": "any) => {;
      setIsScrolled(window.scrollY > 50);
    "};
;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
;
  const _services = [;
    {;
      "icon": "Brai n",;
      "title": 'AI & Machine Learning',;
      "description": 'Intelligent solutions for business automation',;
      "href": '/services/ai-solutions',;
      "color": 'from-purple-500 to-pink-500';
    },;
    {;
      "icon": "Shiel d",;
      "title": 'Cybersecurity',;
      "description": 'Advanced security and threat protection',;
      "href": '/services/cybersecurity',;
      "color": 'from-red-500 to-orange-500';
    },;
    {;
      "icon": "Clou d",;
      "title": 'Cloud Infrastructure',;
      "description": 'Scalable cloud solutions and migration',;
      "href": '/services/cloud-infrastructure',;
      "color": 'from-blue-500 to-cyan-500';
    },;
    {;
      "icon": "Cod e",;
      "title": 'Blockchain & Web3',;
      "description": 'Decentralized applications and smart contracts',;
      "href": '/services/blockchain-web3',;
      "color": 'from-indigo-500 to-purple-500';
    },;
    {;
      "icon": "Buildin g",;
      "title": 'Smart City Solutions',;
      "description": 'AI-powered urban management systems',;
      "href": '/services/smart-city',;
      "color": 'from-green-500 to-blue-500';
    },;
    {;
      "icon": "Za p",;
      "title": 'Quantum Computing',;
      "description": 'Next-generation computational power',;
      "href": '/services/quantum-computing',;
      "color": 'from-yellow-500 to-orange-500';
    }
  ];
;
  const _navigation = [;
    { "name": 'Home', "href": '/' },;
    { "name": 'About', "href": '/about' },;
    { "name": 'Services', "href": '/services', "hasDropdown": "tru e "},;
    { "name": 'Contact', "href": '/contact' }
  ];
;
  const _toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const _closeMenu = () => setIsMenuOpen(false);
;
  return (;
    <>;
      <header;
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
          isScrolled;
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10';
            : 'bg-transparent';
        }`}
      >;
        <div className="container mx-auto px-4">;
          <div className="flex items-center justify-between h-20">;
            {/* Logo */}
            <Link;
              to="/";
              className="flex items-center space-x-3 group";
              onClick={closeMenu}
            >;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-"hover": "scal e-110 transition-transform duration-200">;
                <Globe className="w-6 h-6 text-white"  />;
              </div>;
              <div>;
                <div className="text-xl font-bold text-white">ZionTech Group</div>;
                <div className="text-xs text-cyan-400">AI & Technology Solutions</div>;
              </div>;
            </Link>;
            {/* Desktop Navigation */"}
            <nav className="hidden "lg": "flex items-center space-x-8">;
              {navigation.map((item) => (;
                <div key={item.name"} className="relative">;
                  {item.hasDropdown ? (;
                    <div;
                      className="relative";
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >;
                      <button;
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${;
                          location.pathname.startsWith('/services');
                            ? 'text-cyan-400 bg-cyan-400/10';
                            : 'text-gray-300 "hover": "tex t-cyan-400 "hover": b g-cyan-400/5';
                        "}`}
                      >;
                        <span>{item.name}</span>;
                        <ChevronDown className="w-4 h-4"  />;
                      </button>;
                      <AnimatePresence>;
                        {isServicesOpen && (;
                          <motion.div;
                            initial={{ "opacity": "0", "y": "1 0 "}}
                            animate={{ "opacity": "1", "y": "0 "}}
                            exit={{ "opacity": "0", "y": "1 0 "}}
                            transition={{ "duration": "0.2 "}}
                            className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl";
                          >;
                            <div className="p-4">;
                              <div className="grid gap-3">;
                                {services.map((service) => (;
                                  <Link;
                                    key={service.title}
                                    to={service.href}
                                    className="flex items-start space-x-3 p-3 rounded-lg "hover": "b g-white/5 transition-colors duration-200 group";
                                    onClick={() => setIsServicesOpen(false)"}
                                  >;
                                    <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-"hover": "scal e-110 transition-transform duration-200`"}>;
                                      <service.icon className="w-5 h-5 text-white" />;
                                    </div>;
                                    <div className="flex-1">;
                                      <div className="text-white font-medium group-"hover": "tex t-cyan-400 transition-colors">;
                                        {service.title"}
                                      </div>;
                                      <div className="text-sm text-gray-400">;
                                        {service.description}
                                      </div>;
                                    </div>;
                                  </Link>;
                                ))}
                              </div>;
                              <div className="mt-4 pt-4 border-t border-white/10">;
                                <Link;
                                  to="/services";
                                  className="block text-center py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg "hover": "fro m-cyan-600 "hover": t o-blue-600 transition-all duration-200";
                                  onClick={() => setIsServicesOpen(false)"}
                                >;
                                  View All Services;
                                </Link>;
                              </div>;
                            </div>;
                          </motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ) : "(;
                    <Link;
                      to={item.href"}
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 ${;
                        location.pathname === item.href;
                          ? 'text-cyan-400 bg-cyan-400/10';
                          : 'text-gray-300 "hover": "tex t-cyan-400 "hover": b g-cyan-400/5';
                      "}`}            </nav>
"
            {/* Contact Info & CTA */}""
            <div className="hidden "lg": flex items-center space-x-4">""
              <div className="flex items-center space-x-4 text-sm text-gray-300">"
                <a";,";,
                  href="tel:+13024640950"";,";,
                  className="flex items-center space-x-2 hover: tex t-cyan-400 transition-colors""
                >""
                  <Phone className="w-4 h-4"  />
                  <span>+1 302 464 0950</span>
                </a>"
                <a";,";,
                  href="mailto: klebe r@ziontechgroup.com"";,";,
                  className="flex items-center space-x-2 hover: tex t-cyan-400 transition-colors""
                >""
                  <Mail className="w-4 h-4"  />
                  <span>Email</span>
                </a>
              </div>"
              <Link";,";,
                to="/contact"";,";,
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover: fro m-cyan-600 hover: t o-blue-600 transition-all duration-200 transform hover:-translate-y-0.5"
              >;,;,
                Get Quote
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button;,";,
              onClick={toggleMenu}";,";,
              className=""lg": hidden p-2 text-gray-300 hover: tex t-cyan-400 transition-colors"
            >"
              {isMenuOpen ? (""
                <X className="w-6 h-6"  />"
              ) : (""
                <Menu className="w-6 h-6"  />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>'
          {isMenuOpen && (''"
            <motion.div';";,'";,
              initial={{ "opacity": 0, "height": 0 }}'";,'";,
              animate={{ "opacity": 1, "height": 'auto' }}";,";,
              exit={{ "opacity": 0, "height": 0 }}";,";,
              transition={{ "duration": 0.3 }}";,";,
              className=""lg": hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10""
            >""
              <div className="container mx-auto px-4 py-6">""
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button;,";,
                            onClick={() => setIsServicesOpen(!isServicesOpen)}";,";,
                            className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 "hover": tex t-cyan-400 transition-colors"
                          >
                            <span>{item.name}</span>'"
                            <ChevronDown className={`w-4 h-4 transition-transform ${'";,'";,
                                isServicesOpen ? 'rotate-180' : "
                              }`}
                             />
                          </button>
                          <AnimatePresence>'
                            {isServicesOpen && (''"
                              <motion.div';";,'";,
                                initial={{ "opacity": 0, "height": 0 }}'";,'";,
                                animate={{ "opacity": 1, "height": 'auto' }}";,";,
                                exit={{ "opacity": 0, "height": 0 }}";,";,
                                transition={{ "duration": 0.2 }}";,";,
                                className="mt-2 pl-4 space-y-2"
                              >
                                {services.map((service) => (
                                  <Link;,;,
                                    key={service.title}";,
                                    to={service.href}";,";,
                                    className="block px-3 py-2 text-sm text-gray-400 "hover": tex t-cyan-400 transition-colors";,;,
                                    onClick={closeMenu}
                                  >
                                    {service.title}
                                  </Link>
                                ))}"
                                <Link";,";,
                                  to="/services"";,";,
                                  className="block px-3 py-2 text-sm text-cyan-400 font-medium";,;,
                                  onClick={closeMenu}
                                >;,;,
                                  View All Services
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link;,;,
                          to={item.href}';,
                          className={`block px-3 py-2 rounded-lg transition-colors ${';,';,
                            location.pathname === item.href';';''"
                              ? 'text-cyan-400 bg-cyan-400/10''"'"
                              : 'text-gray-300 "hover": tex t-cyan-400'
                          }`}
                          onClick={closeMenu}
                        >;
                          {item.name}
                        </Link>;
                      )}
                    </div>;
                  ))}
                </nav>;
                {/* Mobile Contact & CTA */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">;
                  <div className="space-y-2">;
                    <a;
                      href=""tel": "+13024640950";
                      className="flex items-center space-x-2 text-gray-300 "hover": tex t-cyan-400 transition-colors";
                    >;
                      <Phone className="w-4 h-4"  />;
                      <span>+1 302 464 0950</span>;
                    </a>;
                    <a;
                      href=""mailto": klebe r@ziontechgroup.com";
                      className="flex items-center space-x-2 text-gray-300 "hover": tex t-cyan-400 transition-colors";
                    >;
                      <Mail className="w-4 h-4"  />;
                      <span>kleber@ziontechgroup.com</span>;
                    </a>;
                  </div>;
                  <Link;
                    to="/contact";
                    className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg "hover": fro m-cyan-600 "hover": t o-blue-600 transition-all duration-200";
                    onClick={closeMenu"}
                  >;
                    Get Quote;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          )}
        </AnimatePresence>;
      </header>;
      {/* Spacer for fixed header */}
      <div className="h-20"  />;
    </>;
  );
};
; return ( <headerclassName = {`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg': 'bg-transparent'} ${className}`}>; {/* Top Contact Bar */}; <div className = "bg-blue-900 text-white py-2 px-4 hidden lg: block">, <div className = "container mx-auto flex justify-between items-center text-sm">, <div className = "flex items-center space-x-6">; <div className = "flex items-center space-x-2">; <Phone className = "w-4 h-4" />; <span>{contactInfo && contactInfo.phone}</span>; </div>; <div className = "flex items-center space-x-2">; <Mail className = "w-4 h-4" />; <span>{contactInfo && contactInfo.email}</span>; </div>; <div className = "flex items-center space-x-2">; <MapPin className = "w-4 h-4" />; <span>{contactInfo && contactInfo.address}</span>; </div>; </div>; <div className = "text-blue-200">; <span className = "font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner; </div>; </div>; </div>; {/* Main Navigation */}; <nav className = "container mx-auto px-4 py-4">; <div className = "flex items-center justify-between">; {/* Logo */}; <Link href = "/" className = "flex items-center space-x-2">; <div className = "w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">; <Brain className = "w-6 h-6 text-white" />; </div>; <span className = "text-xl font-bold text-gray-900">; Zion Tech Group; </span>; </Link>; {/* Desktop Navigation */}; <div className = "hidden lg: flex items-center space-x-8">, {navigationItems && navigationItems.map((item) = > (, <div key = {item && item.name} className = "relative group">; <Link href = {item && item.href} className = "flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium" onMouseEnter = {() => setActiveDropdown(item && item.name)}; onMouseLeave = {() = > setActiveDropdown(null)}>; <span>{item && item.name}</span>; {item && item.dropdown && <ChevronDown className = "w-4 h-4" />}; </Link>; {/* Dropdown Menu */}; {item && item.dropdown && (; <AnimatePresence>; {activeDropdown = = = item && item.name && (; <motion&& motion.div initial = {{ opacity: 0, y: 10 }} animate = {{ opacity: 1, y: 0 }} exit = {{ opacity: 0, y: 10 }} className = "absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50" onMouseEnter = {() => setActiveDropdown(item && item.name)}; onMouseLeave = {() = > setActiveDropdown(null)}>; {item && item.dropdown.map((subItem, index) = > {; const IconComponent = subItem && subItem.icon; return ( <Link key = {index} href = {subItem && subItem.href} className = "flex items-start space-x-3 px-6 py-3 hover: bg-gray-50 transition-colors duration-200 group">, <div className = "flex-shrink-0">, <IconComponent className = "w-5 h-5 text-blue-600 group-hover: text-purple-600 transition-colors" />, </div>, <div>; <div className = "font-medium text-gray-900 group-hover:text-blue-600 transition-colors">; {subItem && subItem.name}; </div>; <div className = "text-sm text-gray-500">; {subItem && subItem.description}})}; </motion && motion.div>; )}; </AnimatePresence>; )}; </div>; ))}; </div>; {/* CTA Button */}; <div className = "hidden lg: flex items-center space-x-4">, <Link, href = "/contact" className = "px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold">, Get Quote, </Link>; </div>; {/* Mobile Menu Button */}; <button onClick = {() => setIsOpen(!isOpen)}; className = "lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">; {isOpen ? <X className = "w-6 h-6" />: <Menu className = "w-6 h-6" />}; </button>; </div>; {/* Mobile Navigation */}; <AnimatePresence>; {isOpen && (; <motion&& motion.div initial = {{ opacity: 0, height: 0 }} animate = {{ opacity: 1, height: 'auto' }} exit = {{ opacity: 0, height: 0 }} className = "lg: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">, <div className = "py-4">, {navigationItems && navigationItems.map((item, index) = > (; <div key = {index}>; <Link href = {item && item.href} className = "block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium" onClick = {() => setIsOpen(false)}>; {item && item.name}; </Link>; {item && item.dropdown && (; <div className = "pl-6 space-y-2">; {item && item.dropdown.map((subItem, subIndex) = > {; const IconComponent = subItem && subItem.icon; return ( <Link key = {subIndex} href = {subItem && subItem.href} className = "flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200" onClick = {() => setIsOpen(false)}>; <IconComponent className = "w-4 h-4" />; <span>{subItem && subItem.name}</span>; </Link>; )})}; </div>; )}; </div>; ))}; <div className = "px-6 py-4 border-t border-gray-200">; <Link href = "/contact" className = "block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold" onClick = {() => setIsOpen(false)}>; Get Quote; </Link>; </div>; </div>; </motion && motion.div>; )}; </AnimatePresence>; </nav>; </header>; )};};
};
  };
,
  return (,
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${,
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
    } ${className}`}>,
      {/* Top Contact Bar */};
      <div className="bg-blue-900 text-white py-2 px-4 hidden lg: block">,
        <div className="container mx-auto flex justify-between items-center text-sm">,
          <div className="flex items-center space-x-6">,
            <div className="flex items-center space-x-2">,
              <Phone className="w-4 h-4" />,
              <span>{contactInfo.phone}</span>,
            </div>,
            <div className="flex items-center space-x-2">,
              <Mail className="w-4 h-4" />,
              <span>{contactInfo.email}</span>,
            </div>,
            <div className="flex items-center space-x-2">,
              <MapPin className="w-4 h-4" />,
              <span>{contactInfo.address}</span>,
            </div>,
          </div>,
          <div className="text-blue-200">,
            <span className="font-semibold">Zion Tech Group</span> - Your Digital Transformation Partner,
          </div>,
        </div>,
      </div>,
      {/* Main Navigation */};
      <nav className="container mx-auto px-4 py-4">,
        <div className="flex items-center justify-between">,
          {/* Logo */};
          <Link href="/" className="flex items-center space-x-2">,
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <Brain className="w-6 h-6 text-white" />,
            </div>,
            <span className="text-xl font-bold text-gray-900">,
              Zion Tech Group,
            </span>,
          </Link>,
          {/* Desktop Navigation */};
          <div className="hidden lg: flex items-center space-x-8">,
            {navigationItems.map((item) => (,
              <div key={item.name} className="relative group">,
                <Link,
                  href={item.href};
                  className="flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors duration-200 font-medium",
                  onMouseEnter={() => setActiveDropdown(item.name)};
                  onMouseLeave={() => setActiveDropdown(null)};
                >,
                  <span>{item.name}</span>,
                  {item.dropdown && <ChevronDown className="w-4 h-4" />};
                </Link>,
                {/* Dropdown Menu */};
                {item.dropdown && (,
                  <AnimatePresence>,
                    {activeDropdown === item.name && (,
                      <motion.div,
                        initial={{ opacity: 0, y: 10 }};
                        animate={{ opacity: 1, y: 0 }};
                        exit={{ opacity: 0, y: 10 }};
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50",
                        onMouseEnter={() => setActiveDropdown(item.name)};
                        onMouseLeave={() => setActiveDropdown(null)};
                      >,
                        {item.dropdown.map((subItem, index) => {,
                          const IconComponent = subItem.icon,
                          return (,
                            <Link,
                              key={index};
                              href={subItem.href};
                              className="flex items-start space-x-3 px-6 py-3 hover: bg-gray-50 transition-colors duration-200 group",
                            >,
                              <div className="flex-shrink-0">,
                                <IconComponent className="w-5 h-5 text-blue-600 group-hover: text-purple-600 transition-colors" />,
                              </div>,
                              <div>,
                                <div className="font-medium text-gray-900 group-hover: text-blue-600 transition-colors">,
                                  {subItem.name};
                                </div>,
                                <div className="text-sm text-gray-500">,
                                  {subItem.description};
                        })};
                      </motion.div>,
                    )};
                  </AnimatePresence>,
                )};
              </div>,
            ))};
          </div>,
          {/* CTA Button */};
          <div className="hidden lg: flex items-center space-x-4">,
            <Link,
              href="/contact",
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold",
            >,
              Get Quote,
            </Link>,
          </div>,
          {/* Mobile Menu Button */};
          <button,
            onClick={() => setIsOpen(!isOpen)};
            className="lg: hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
          >,
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>,
        </div>,
        {/* Mobile Navigation */};
        <AnimatePresence>,
          {isOpen && (,
            <motion.div,
              initial={{ opacity: 0, height: 0 }};
              animate={{ opacity: 1, height: 'auto' }};
              exit={{ opacity: 0, height: 0 }};
              className="lg: hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden",
            >,
              <div className="py-4">,
                {navigationItems.map((item, index) => (,
                  <div key={index}>,
                    <Link,
                      href={item.href};
                      className="block px-6 py-3 text-gray-700 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium",
                      onClick={() => setIsOpen(false)};
                    >,
                      {item.name};
                    </Link>,
                    {item.dropdown && (,
                      <div className="pl-6 space-y-2">,
                        {item.dropdown.map((subItem, subIndex) => {,
                          const IconComponent = subItem.icon,
                          return (,
                            <Link,
                              key={subIndex};
                              href={subItem.href};
                              className="flex items-center space-x-3 px-6 py-2 text-sm text-gray-600 hover: bg-gray-50 hover:text-blue-600 transition-colors duration-200",
                              onClick={() => setIsOpen(false)};
                            >,
                              <IconComponent className="w-4 h-4" />,
                              <span>{subItem.name}</span>,
                            </Link>,
                          ),
                        })};
                      </div>,
                    )};
                  </div>,
                ))};
                <div className="px-6 py-4 border-t border-gray-200">,
                  <Link,
                    href="/contact",
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover: shadow-lg transition-all duration-300 font-semibold",
                    onClick={() => setIsOpen(false)};
                  >,
                    Get Quote,
                  </Link>,
                </div>,
              </div>,
            </motion.div>,
          )};
        </AnimatePresence>,
      </nav>,
    </header>,
  ),
};
} return ( <header class_name = {`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled ? 'bg - white / 95 backdrop - blur - md shadow - lg': 'bg - transparent'} ${class_name}`}> {/* Top Contact Bar */} <div class_name = "bg - blue - 900 text - white py - 2 px - 4 hidden lg: block">, <div class_name = "container mx - auto flex justify - between items - center text - sm">, <div class_name = "flex items - center space - x-6"> <div class_name = "flex items - center space - x-2"> <Phone class_name = "w - 4 h - 4" /> <span>{contact_info.phone}</span> </div> <div class_name = "flex items - center space - x-2"> <Mail class_name = "w - 4 h - 4" /> <span>{contact_info.email}</span> </div> <div class_name = "flex items - center space - x-2"> <MapPin class_name = "w - 4 h - 4" /> <span>{contact_info.address}</span> </div> </div> <div class_name = "text - blue - 200"> <span class_name = "font - semibold">Zion Tech Group</span> - Your Digital Transformation Partner </div> </div> </div> {/* Main Navigation */} <nav class_name = "container mx - auto px - 4 py - 4"> <div class_name = "flex items - center justify - between"> {/* Logo */} <Link href = "/" class_name = "flex items - center space - x-2"> <div class_name = "w - 10 h - 10 bg - gradient - to - r from - blue - 600 to - purple - 600 rounded - lg flex items - center justify - center"> <Brain class_name = "w - 6 h - 6 text - white" /> </div> <span class_name = "text - xl font - bold text - gray - 900">; Zion Tech Group </span> </Link> {/* Desktop Navigation */} <div class_name = "hidden lg: flex items - center space - x-8">, {navigation_items.map ((item) = > (, <div key = {item.name} class_name = "relative group"> <Link; href = {item.href} class_name = "flex items - center space - x-1 text - gray - 700 hover:text - blue - 600 transition - colors duration - 200 font - medium"; onMouseEnter = {() = > setActiveDropdown (item.name)} onMouseLeave = {() = > setActiveDropdown (null)}> <span>{item.name}</span> {item.dropdown && <ChevronDown class_name = "w - 4 h - 4" />} </Link> {/* Dropdown Menu */} {item.dropdown && ( <AnimatePresence> {active_dropdown = = = item.name && ( <motion.div; initial = {{ opacity: 0, coordinate_y: 10 }} animate = {{ opacity: 1, coordinate_y: 0 }} exit = {{ opacity: 0, coordinate_y: 10 }} class_name = "absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4 z - 50"; onMouseEnter = {() = > setActiveDropdown (item.name)} onMouseLeave = {() = > setActiveDropdown (null)}> {item.dropdown.map ((sub_item, index) = > {const IconComponent = sub_item.icon; return ( <Link; key = {index} href = {sub_item.href} class_name = "flex items - start space - x-3 px - 6 py - 3 hover: bg - gray - 50 transition - colors duration - 200 group">, <div class_name = "flex - shrink - 0">, <IconComponent class_name = "w - 5 h - 5 text - blue - 600 group - hover: text - purple - 600 transition - colors" />, </div>, <div> <div class_name = "font - medium text - gray - 900 group - hover:text - blue - 600 transition - colors"> {sub_item.name} </div> <div class_name = "text - sm text - gray - 500"> {sub_item.description}})} </motion.div>)} </AnimatePresence>)} </div>))} </div> {/* CTA Button */} <div class_name = "hidden lg: flex items - center space - x-4">, <Link, href = "/contact"; class_name = "px - 6 py - 2 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white rounded - lg hover: shadow - lg transition - all duration - 300 font - semibold">, Get Quote, </Link> </div> {/* Mobile Menu Button */} <button; on_click = {() = > setIsOpen (!is_open)} class_name = "lg:hidden p - 2 rounded - lg text - gray - 700 hover:bg - gray - 100 transition - colors"> {is_open ? <X class_name = "w - 6 h - 6" />: <Menu class_name = "w - 6 h - 6" />} </button> </div> {/* Mobile Navigation */} <AnimatePresence> {is_open && ( <motion.div; initial = {{ opacity: 0, height: 0 }} animate = {{ opacity: 1, height: 'auto' }} exit = {{ opacity: 0, height: 0 }} class_name = "lg: hidden mt - 4 bg - white rounded - lg shadow - lg border border - gray - 200 overflow - hidden">, <div class_name = "py - 4">, {navigation_items.map ((item, index) = > ( <div key = {index}> <Link; href = {item.href} class_name = "block px - 6 py - 3 text - gray - 700 hover:bg - gray - 50 hover:text - blue - 600 transition - colors duration - 200 font - medium"; on_click = {() = > setIsOpen (false)}> {item.name} </Link> {item.dropdown && ( <div class_name = "pl - 6 space - y-2"> {item.dropdown.map ((sub_item, sub_index) = > {const IconComponent = sub_item.icon; return ( <Link; key = {sub_index} href = {sub_item.href} class_name = "flex items - center space - x-3 px - 6 py - 2 text - sm text - gray - 600 hover:bg - gray - 50 hover:text - blue - 600 transition - colors duration - 200"; on_click = {() = > setIsOpen (false)}> <IconComponent class_name = "w - 4 h - 4" /> <span>{sub_item.name}</span> </Link>)})} </div>)} </div>))} <div class_name = "px - 6 py - 4 border - t border - gray - 200"> <Link; href = "/contact"; class_name = "block w - full text - center px - 6 py - 3 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white rounded - lg hover:shadow - lg transition - all duration - 300 font - semibold"; on_click = {() = > setIsOpen (false)}>; Get Quote </Link> </div> </div> </motion.div>)} </AnimatePresence> </nav> </header>)} }
import React from 'react';

export default function LayoutHeader() {
  return (
    <header className="layout-header">
      <h1>Layout Header</h1>
    </header>
  );
}
},;
ursor/expand-services-advertise-and-build-project-4b36
