import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);



} from "lucide-react";
import Link from "next/link";
interface EnhancedNavigationProps {;
  className?: string;
}





const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      name: "Services"
      href: "/services"
      icon: <Brain className="w-4 h-4" />

      dropdown: [
        {
          name: "AI & Machine Learning"
          href: "/services?category=ai-ml"
          icon: <Brain className="w-4 h-4" />
        }
        {
          name: "Quantum Computing"
          href: "/services?category=quantum"
          icon: <Rocket className="w-4 h-4" />
        }
        {
          name: "Space Technology"
          href: "/services?category=space"
          icon: <Globe className="w-4 h-4" />
        }
        {
          name: "Biotech & Healthcare"
          href: "/services?category=biotech"
          icon: <Dna className="w-4 h-4" />
        }
        {
          name: "Financial Services"
          href: "/services?category=finance"
          icon: <DollarSign className="w-4 h-4" />
        }
        {
          name: "Cybersecurity"
          href: "/services?category=security"
          icon: <Lock className="w-4 h-4" />
        }
        {
          name: "IoT & Smart Devices"
          href: "/services?category=iot"
          icon: <Wifi className="w-4 h-4" />
        }
        {
          name: "Logistics & Supply Chain"
          href: "/services?category=logistics"
          icon: <Truck className="w-4 h-4" />
        }
        {
          name: "Metaverse & Gaming"
          href: "/services?category=metaverse"
          icon: <Gamepad2 className="w-4 h-4" />
        }
        {
          name: "Robotics & Automation"
          href: "/services?category=robotics"
          icon: <Bot className="w-4 h-4" />
        }
        {
          name: "Manufacturing"
          href: "/services?category=manufacturing"
          icon: <Factory className="w-4 h-4" />
        }
        {
          name: "Autonomous Vehicles"
          href: "/services?category=vehicles"
          icon: <Car className="w-4 h-4" />
        }
      ]
      hasDropdown: true
      dropdownItems: [

        { name: "AI & Machine Learning", href: "/services?category=ai-ml" }
        { name: "Quantum Computing", href: "/services?category=quantum" }
        { name: "Space Technology", href: "/services?category=space" }
        { name: "Biotech & Healthcare", href: "/services?category=biotech" }
        { name: "Financial Services", href: "/services?category=finance" }
        { name: "Cybersecurity", href: "/services?category=security" }
        { name: "Edge Computing", href: "/services?category=edge" }
        { name: "Blockchain", href: "/services?category=blockchain" }
        { name: "View All Services", href: "/services" }
      ]
    }
        { name: "AI & Machine Learning", href: "/services?category=ai-ml" },
        { name: "Quantum Computing", href: "/services?category=quantum" },
        { name: "Space Technology", href: "/services?category=space" },
        { name: "Biotech & Healthcare", href: "/services?category=biotech" },
        { name: "Financial Services", href: "/services?category=finance" },
        { name: "Cybersecurity", href: "/services?category=security" },
        { name: "Edge Computing", href: "/services?category=edge" },
        { name: "Blockchain", href: "/services?category=blockchain" },
        { name: "View All Services", href: "/services" },
      ],
    },
    {
      name: "Solutions"
      href: "/solutions"
      hasDropdown: true
      dropdownItems: [
        { name: "Enterprise Solutions", href: "/solutions?type=enterprise" }
        { name: "Startup Solutions", href: "/solutions?type=startup" }
        { name: "Government Solutions", href: "/solutions?type=government" }
        { name: "Healthcare Solutions", href: "/solutions?type=healthcare" }
        { name: "Financial Solutions", href: "/solutions?type=financial" }
      ]
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Resources", href: "/resources" }
    { name: "Blog", href: "/blog" }
    { name: "Contact", href: "/contact" }
  ];





  const contactInfo = {
    mobile: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    website: "https://ziontechgroup.com"
  }

const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({;
  className = "",;
}) => {;
const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({
  className = ""
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener("scroll", handleScroll);
    return () => window && window.removeEventListener("scroll", handleScroll);
  }, []);


;
  const contact_info = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com",
    {
      name: "Solutions"
      href: "/solutions"
      hasDropdown: true
      dropdownItems: [
        { name: "Enterprise Solutions", href: "/solutions?type=enterprise" }
        { name: "Startup Solutions", href: "/solutions?type=startup" }
        { name: "Government Solutions", href: "/solutions?type=government" }
        { name: "Healthcare Solutions", href: "/solutions?type=healthcare" }
        { name: "Financial Solutions", href: "/solutions?type=financial" }
      ]
    }
    { name: "Pricing", href: "/pricing" }
    { name: "Resources", href: "/resources" }
    { name: "Blog", href: "/blog" }
    { name: "Contact", href: "/contact" }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950"
    email: "kleber@ziontechgroup.com"
    address: "364 E Main St STE 1008 Middletown DE 19709"
    website: "https://ziontechgroup.com"

  }
;

  return (
    <nav className='bg-white shadow-lg sticky top-0 z-50'    />
      <div className='container mx-auto px-4'    />
        <div className='flex justify-between items-center py-4'    />

          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'    />;
            <div className='flex items-center space-x-2'    />;
              <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'    />;
                <span className='text-white font-bold text-xl'    />Z</span>;
              </div>;
              <div className='text-xl font-bold text-gray-800'    />Zion Tech Group</div>;
            </div>;
          </Link>;
          {/* Desktop Navigation */}
          <div className='hidden lg: flex items-center space-x-8'    />;
            <Link href='/' className='text-gray-600 hover:text-blue-600 transition-colors'    />;
              Home;
            </Link>;
            {/* Services Dropdown */}
            <div className='relative group'    />;
              <button;
                className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors';
                onMouseEnter={() =    /> setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;
                <span    />Services</span>;
                <ChevronDown className='w-4 h-4'    />;
              </button>;
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() =    /> setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >;
                <Link href='/services/ai-services' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'    />;
                  AI Services;
                </Link>;
                <Link href='/services/it-services' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  IT Services;
                </Link>;
                <Link href='/services/micro-saas' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Micro SaaS;
                </Link>;
                <Link href='/services/ai-ops-copilot' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  AI Ops Copilot                </Link>;
                <Link href='/services/security-copilot' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Security Copilot;
                </Link>;
                <Link href='/services/data-platform' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Data Platform;
                </Link>;
                <Link href='/services/martech-automation' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  MarTech Automation;
                </Link>;
              </div>;
            </div>;
            {/* Solutions Dropdown */}
            <div className='relative group'    />;
              <button;
                className='flex items-center space-x-1 text-gray-700 hover: text-blue-600 transition-colors';
                onMouseEnter={() =    /> setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >;
                <span    />Solutions</span>;
                <ChevronDown className='w-4 h-4'    />;
              </button>;
              <div;
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() =    /> setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >;
                <Link href='/solutions' className='block px-4 py-2 text-gray-700 hover: bg-blue-50 hover:text-blue-600'    />;
                  Solutions Overview;
                </Link>;
                <Link href='/solutions/enterprise' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Enterprise Solutions;
                </Link>;
                <Link href='/solutions/small-business' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Small Business;
                </Link>;
                <Link href='/solutions/startups' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Startups;
                </Link>;
                <Link href='/case-studies' className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'    />;
                  Case Studies                </Link>;
              </div>;
            </div>;
            <Link href='/about' className='text-gray-700 hover: text-blue-600 transition-colors'    />;
              About;
            </Link>;
            <Link href='/contact' className='text-gray-700 hover:text-blue-600 transition-colors'    />;
              Contact;
            </Link>;
          </div>;
          {/* CTA Button */}
          <div className='hidden lg:block'    />;
            <Link href='/contact' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block'    />;
              Get Started;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <button;
            className='lg:hidden text-gray-600 hover:text-gray-900';
            onClick={() =    /> setIsOpen(!isOpen)}
          >;
            {isOpen ? <X className='w-6 h-6'    /> : <Menu className='w-6 h-6'    />}
          </button>;
        </div>;
        {/* Mobile Navigation */}
        {isOpen && (<div className='lg:hidden border-t border-gray-200 py-4'    />;
            <div className='space-y-2'    />;
              <Link href='/' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                Home;
              </Link>;
              <div className='py-2'    />;
                <div className='text-gray-600 font-semibold mb-2'    />Services</div>;
                <div className='pl-4 space-y-2'    />;
                  <Link href='/services/ai-development' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    AI Development;
                  </Link>;
                  <Link href='/services/cloud-services' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Cloud Services;
                  </Link>;
                  <Link href='/services/web-development' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Web Development;
                  </Link>;
                  <Link href='/services/mobile-development' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Mobile Development;
                  </Link>;
                  <Link href='/services/blockchain-solutions' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Blockchain Solutions;
                  </Link>;
                  <Link href='/services/iot-platforms' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    IoT Platforms;
                  </Link>;
                  <Link href='/services/cybersecurity' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Cybersecurity;
                  </Link>;
                </div>;
              </div>;
              <div className='py-2'    />;
                <div className='text-gray-600 font-semibold mb-2'    />Solutions</div>;
                <div className='pl-4 space-y-2'    />;
                  <Link href='/solutions/enterprise' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Enterprise Solutions;
                  </Link>;
                  <Link href='/solutions/small-business' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Small Business;
                  </Link>;
                  <Link href='/solutions/startups' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Startups;
                  </Link>;
                  <Link href='/solutions/healthcare' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Healthcare;
                  </Link>;
                  <Link href='/solutions/finance' className='block py-1 text-gray-500 hover:text-blue-600'    />;
                    Finance;
                  </Link>;
                </div>;
              </div>;
              <Link href='/products' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                Products;
              </Link>;
              <Link href='/about' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                About;
              </Link>;
              <Link href='/blog' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                Blog;
              </Link>;
              <Link href='/careers' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                Careers;
              </Link>;
              <Link href='/contact' className='block py-2 text-gray-600 hover:text-blue-600'    />;
                Contact;
              </Link>;
              <div className='pt-4'    />;
                <Link href='/contact' className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer inline-block w-full text-center'    />;
                  Get Started;
                </Link>;
              </div>            </div>;}
          </div>;}
        )}

      </div>
    </nav>
  )
}

const EnhancedNavigation: React.FC<EnhancedNavigationProps    /> = ({ className = \"\"}
  }
}) => {



 ;
  const [isOpen, setIsOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {

    const handleScroll = (
      setIsScrolled(window.scrollY > 20);) => {
  return $3;}
}
    }"
    window.addEventListener(\"scroll\", handleScroll);"
    return () => window.removeEventListener(\"scroll\", handleScroll);
  }, []);

const navigationItems = [
    {"
      name: \"Services\"
      href: \"/services\"
      icon: <Brain className=\"w-4 h-4\"    />

      dropdown: [
        { name: 'AI & Machine Learning', href: '/services?category=ai-ml', icon: <Brain className = $2;
        { name: 'Quantum Computing', href: '/services?category=quantum', icon: <Rocket className = $2;
        { name: 'Space Technology', href: '/services?category=space', icon: <Globe className = $2;
        { name: 'Biotech & Healthcare', href: '/services?category=biotech', icon: <Dna className = $2;
        { name: 'Financial Services', href: '/services?category=finance', icon: <DollarSign className = $2;
        { name: 'Cybersecurity', href: '/services?category=security', icon: <Lock className = $2;
        { name: 'IoT & Smart Devices', href: '/services?category=iot', icon: <Wifi className = $2;
        { name: 'Logistics & Supply Chain', href: '/services?category=logistics', icon: <Truck className = $2;
        { name: 'Metaverse & Gaming', href: '/services?category=metaverse', icon: <Gamepad2 className = $2;
        { name: 'Robotics & Automation', href: '/services?category=robotics', icon: <Bot className = $2;
        { name: 'Manufacturing', href: '/services?category=manufacturing', icon: <Factory className = $2;
        { name: 'Autonomous Vehicles', href: '/services?category=vehicles', icon: <Car className = $2;
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI & Machine Learning', href: '/services?category = $2;
        { name: 'Quantum Computing', href: '/services?category = $2;
        { name: 'Space Technology', href: '/services?category = $2;
        { name: 'Biotech & Healthcare', href: '/services?category = $2;
        { name: 'Financial Services', href: '/services?category = $2;
        { name: 'Cybersecurity', href: '/services?category = $2;
        { name: 'Edge Computing', href: '/services?category = $2;
        { name: 'Blockchain', href: '/services?category = $2;
        { name: 'View All Services', href: '/services' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions?type = $2;
        { name: 'Startup Solutions', href: '/solutions?type = $2;
        { name: 'Government Solutions', href: '/solutions?type = $2;
        { name: 'Healthcare Solutions', href: '/solutions?type = $2;
        { name: 'Financial Solutions', href: '/solutions?type = $2;
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ],

  const contactInfo = $2;
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}

          <motion&& motion.div;
            initial={{ opacity: 0, x: -20 }
}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0 && 0.5 }
}"
            className=\"flex items-center space-x-3\"    />;"
            <Link href=\"/\" className=\"flex items-center space-x-3 group\"    />;"
              <div className=\"relative\"    />;"
                <div className=\"w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300\"    />;"
                  <Zap className=\"w-6 h-6 text-white\"    />;
                </div>;"
                <div className=\"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300\"    />;
              </div>;"
              <div className=\"hidden sm:block\"    />;"
                <div className=\"text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300\"    />;
                  Zion Tech Group;
                </div>;"
                <div className=\"text-xs text-cyan-400\"    />;
"
const contact_info = {mobile: \"+1 302 464 0950\",email: \"kleber@ziontechgroup.com\",address: \"364 E Main St STE 1008 Middletown DE 19709\",website: \'https://ziontechgroup.com\';}"
    website: \'https://ziontechgroup.com\';}
  }return (<nav;
      className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;"
          ? \'bg - black / 80 backdrop - blur - xl border - b border - cyan - 500 / 20 shadow - 2xl shadow - cyan - 500 / 10\';}"
          : \'bg - transparent\';}
      } ${class_name}`}    />
"
      <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8\"    />;"
        <div className=\"flex items - center justify - between h - 20\"    />;"
      <div className=\"max - w-7xl mx - auto px - 4 sm:px-6 lg:px-8\"    />;"
        <div className=\"flex items - center justify-between h-20\"    />;"
          {\" \"}
          {/* Logo */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }
}
            animate={{ opacity: 1, coordinate_x: 0 }}

                  Revolutionary Technology;
                </div>;
              </div>;
            </Link>;


                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }
}"
                          className=\"absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden\">;"
                          <div className=\"p-2\"    />;
                            {item && item.dropdownItems?.map((dropdownItem) => (<Link;}
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}"
                                className=\"block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300\"    />;
                                {dropdownItem && dropdownItem.name}
                              </Link>;
                            ))}
                          </div>;
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;

                ) : (;
                  <Link

                    {item && item.name}
                  </Link>;
                )}
              </motion && motion.div>;
            ))}



                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1}}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}

            <motion.button;


            {/* Notifications */}
            <motion&& motion.button
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              className="p - 2 text - gray - 400 hover:text - cyan - 400 hover:bg - cyan - 500 / 10 rounded - lg transition - all duration - 300";
            >;
              <Search className="w - 5 h - 5" />;
            </motion.button>;
            {/* Notifications */}
            <motion.button;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 0 && 0.5, delay: 0 && 0.7 }}
              className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 relative">;
              <Bell className="w-5 h-5" />;
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />;
            </motion && motion.button>;





            {/* CTA Button */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.8 }}>;
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">;

                Get Started;
              </Link>;
            </motion && motion.div>;
          </div>;
          {/* Mobile menu button */}



      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div


            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">;
            <div className="px-4 py-6 space-y-4">;
              {/* Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"


                />;
              </div>;



              {/* Navigation Items */}
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="space-y-2">;
                  <Link
                    href={item && item.href}
                    onClick={() => setIsOpen(false)}


                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2";
                  >;
                    {item && item.name}
                  </Link>;

                  {item && item.hasDropdown && item && item.dropdownItems && (;
                    <div className="ml-4 space-y-1">;
                      {item && item.dropdownItems.map((dropdownItem) => (;


                        <Link
                          key={dropdownItem && dropdownItem.name}
                          href={dropdownItem && dropdownItem.href}
                          onClick={() => setIsOpen(false)}
className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1 text-sm";

                        >;
                          {dropdownItem && dropdownItem.name}
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;

              ))}

            </motion.button>;

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, delay: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
              </div>
              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}

                    on_click={() =    /> setIsOpen (false)}"
                    className=\'block text - gray - 300 hover:text - cyan - 400 transition - colors duration - 300 py - 2\';"
                <div key={item.name} className=\"space-y-2\"    />;
                  <Link;
                    href={item.href}
                    on_click={() =    /> setIsOpen (false)}"
                    className=\"block text - gray - 300 hover: text - cyan - 400 transition - colors duration-300 py-2\">

                    {item.nam}
}
                  </Link>;"
                  {item.has_dropdown && item.dropdown_items && (<div className=\"ml - 4 space - y-1\"    />;"
                    <div className=\"ml-4 space-y-1\"    />;}
                      {item.dropdown_items.map ((dropdown_item) => (<Link;}
                          key={dropdown_item.name}
                          href={dropdown_item.href}
                          on_click={() =    /> setIsOpen (false)}"
                          className=\'block text - gray - 400 hover:text - cyan - 400 transition - colors duration - 300 py - 1 text - sm\';"
                          className=\"block text - gray - 400 hover: text - cyan - 400 transition - colors duration - 300 py-1 text-sm\">

                          {dropdown_item.name}
                        </Link>))}
                    </div>)}
                </div>))}
              {/* Contact Info *}
}"
              <div className=\"pt - 4 border - t border - cyan - 500 / 20\"    />;"
                <div className=\"space - y-2 text - sm text - gray - 400\"    />;"
                  <div className=\"flex items - center space - x-2\"    />;"
                    <Globe className=\"w - 4 h - 4\"    />;
                    <span    />{contact_info.website}</span>;
                  </div>;"
                  <div className=\"flex items - center space - x-2\"    />;"
                    <User className=\"w - 4 h - 4\"    />;"
              <div className=\"pt - 4 border - t border-cyan-500 / 20\"    />;"
                <div className=\"space - y-2 text - sm text-gray-400\"    />;"
                  <div className=\"flex items-center space-x-2\"    />;"
                    <Globe className=\"w-4 h-4\"    />;
                    <span    />{contact_info.website}</span>;
                  </div>;"
                  <div className=\"flex items-center space-x-2\"    />;"
                    <User className=\"w-4 h-4\"    />;
                    <span    />{contact_info.email}</span>;
                  </div>;
                </div>;
              </div>;




