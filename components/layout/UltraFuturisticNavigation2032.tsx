
import Link from 'next/link;
import { motion, AnimatePresence } from framer-motion';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
import { Menu, X, ChevronDown, Search, Phone, Mail, MapPin;
  }
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield;
  Microscope, DollarSign, Home, Users, Briefcase;
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  BookOpen, MessageCircle, Star, TrendingUp, Target;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck;
  Earth, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye;
  Network, Server, HardDrive, Monitor;

  Laptop, Watch, Headphones, Speaker, Mic;
  Keyboard, Mouse, CpuIcon, DatabaseIcon;
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon;
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon;
  MenuIcon, CloseIcon, ChevronRightIcon

    title: '🧠 AI & Consciousness 2030'
=======
 } from 'lucide-react;

const contactInfo = null;
origin/cursor/automate-test-improve-and-merge-code-2533
const serviceCategories = [
  {

    title: 🧠 AI & Consciousness 2030'
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    icon: BrainIcon'
    color: from-violet-600 via-purple-600 to-indigo-600'
    description: 'Next-generation AI consciousness and emotional intelligence
    services: []
];


    title: '⚛️ Quantum & Emerging Tech 2030',
    icon: AtomIcon,
    color: from - indigo - 600 via - blue - 600 to - cyan - 600','
    description: Quantum computing and beyond,



  { name: 'Support', href: '/support' },
{ name: 'Status', href: '/status' },
];
=======
  { name: 'Support', href: /support },
{ name: 'Status', href: /status }];
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export default function UltraFuturisticNavigation2032() {
origin/cursor/automate-test-improve-and-merge-code-2533
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {}
    const handleScroll = () => {}
const mainNavigation = [;'
  { name: 'Home, href: /', icon: Home },'
  { name: Services, href: '/services', icon: Briefcase },
  { name: Solutions', href: '/solutions, icon: Layers },
  { name: 'Pricing', href: /pricing, icon: DollarSign },'
  { name: 'Resources, href: /resources', icon: BookOpen },'
  { name: Case Studies, href: '/case-studies', icon: TrendingUp },
  { name: Blog', href: '/blog, icon: MessageCircle },
  { name: 'Contact', href: /contact, icon: MessageCircle }];  { name: 'Contact', href: /contact, icon: MessageCircle }
];


  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>;
      {/* Top Contact Bar */}
            <Link href="/ className=flex items-center space-x-3 group">"
              <div className=w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300>"
=======

  return (
    <>;
      {/* Top Contact Bar */}
            <Link href="/ className=flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                <Rocket className=w-7 h-7 text-white" />
              </div>
              <div>"
                <div className=text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent>


                </svg>;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
<nav;

=======
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled;
            ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10';
            : bg-transparent;
        }`}
      >;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
          <div className=flex items-center justify-between h-20>;
            {/* Logo */}
            <Link href='/' className=flex items-center space-x-3 group>;
              <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                <Rocket className=w-7 h-7 text-white />;
              </div>;
              <div>;
                <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </div>

                <Rocket className=w-7 h-7 text-white />;
              </div>;
              <div>;'
                <div className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>;
                  2030 Future Technology;
                </div>              </div>;
            </Link>;
                <div className=text-xs text-gray-400 />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  2030 Future Technology;
                </div>;
              </div>;
            </Link>;


                <Link
}
key={item.name}
                  href={item.href}

                            </div>;
                            <div>;
                              <h3 className='text-lg font-semibold text-white'>;'
                                {category.title}
                              </h3>;

                                {category.description}
                          <div className='space-y-2'>                            {category.services.map((service, serviceIndex) => (
                              <Link
                              </p>;
                            </div>;
                          </div>;
                          <div className=space-y-2>                            {category.services.map((service, serviceIndex) => (<Link;
                                key={serviceIndex}
                                href={service.href}
                                className='block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group'                <Link
                  key={item.name}
                  href={item.href}
                <div className="text-xs text-gray-400">2030 Future Technology</div>
              </div>
            </Link>


                            </div>;
                            <div>;
                              <h3 className=text-lg font-semibold text-white'>;
                                {category && category.title}
                              </h3>;'
                              <p className=text-sm text-gray-400>;
                                {category && category.description}
                              </p>;
                            </div>;
                          </div>;'
                          <div className='space-y-2>                            {category && category.services.map((service, serviceIndex) => (;
                              <Link;
                                key={serviceIndex}
                                href={service && service.href}
                                className='block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group'                <Link;
                  key={item && item.name}
                  href={item && item.href}
                  className=text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group">;"
                  <item && item.icon className=w-4 h-4 group-hover:scale-110 transition-transform />;
                  <span>{item && item.name}</span>;
                </Link>;"
            <div className="hidden lg:flex items-center space-x-8>
              {mainNavigation.map((item) => (

            {/* Desktop Navigation */}
<div className=hidden lg:flex items-center space-x-8>
              {mainNavigation.map(item => (
origin/cursor/automate-test-improve-and-merge-code-2533
                <Link
=======
                <Link;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  key={item.name}
                  href={item.href}
              {/* Services Dropdown */}'
              <div className='relative group>
                <button className='text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group'>
                  <Briefcase className=w-4 h-4 group-hover:scale-110 transition-transform' />
                  <span>Services</span>'
                  <ChevronDown className=w-4 h-4 group-hover:rotate-180 transition-transform />
                </button>
                {/* Mega Menu */}'
                <div className='absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4>
                  <div className='bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20'>
                    <div className=grid grid-cols-2 gap-8'>
                      {serviceCategories.map((category, index) => ('
                        <div key={index} className=space-y-4>'
                          <div className='flex items-center space-x-3>
                            <div;`
                              className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                            >
                              <category.icon className='w-5 h-5 text-white' />
                            </div>
                            <div>
                              <h3 className=text-lg font-semibold text-white'>
                            <div />;
                              <h3 className='text-lg font-semibold text-white />;
                                {category.title}

                                {category.description}

                              </p>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                            </div>

key={serviceIndex}
                                href={service.href}


                                    </div>;
                                    <div className='text-sm text-gray-400'>;'
                                      {service.description}                                    </div>;
                                  </div>;

                                    {service.price}
                                    <div className=text-white group-hover:text-cyan-400 transition-colors font-medium>
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{service.description}</div>
                                  </div>
                                  <div className=text-cyan-400 font-semibold text-sm>{service.price}</div>
                                </div>
origin/cursor/automate-test-improve-and-merge-code-2533
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
<div className='hidden lg:flex items-center space-x-4' />
              <Link href=/contact />
                <button className='px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl' />
                  Get Started;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </button>
              </Link>
            </div>

                </Link>))}
              {/* Services Dropdown */}
              <div className="relative group">;"
                <button className="text - gray - 300 "hover":text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group">;"
                  <Briefcase className="w - 4 h - 4 group - "hover":scale - 110 transition - transform" />;"
                  <span > Services</span>;
                  <ChevronDown className="w - 4 h - 4 group - "hover":rotate - 180 transition - transform" />;"
                </button>;
                {/* Mega Menu */}
                <div className="absolute top - full left - 0 w - screen max - w-7xl transform -translate - x-1 / 2 left - 1/2 opacity - 0 invisible group - "hover":opacity - 100 group - "hover":visible transition - all duration - 300 pt - 4">;"
                  <div className="bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 8 shadow - 2xl shadow - cyan - 500 / 20">;"
                    <div className="grid grid - cols - 2 gap - 8">;"
                      {service_categories.map ((category, index) => (<div key={index} className="space - y-4">;"
                          <div className="flex items - center space - x-3">;"
                            <div className={`w - 10 h - 10 bg - gradient - to - r ${category.color} rounded - xl flex items - center justify - center`}>`
                              <category.icon className="w - 5 h - 5 text - white" />;"
                            </div>;
                            <div>;
                              <h3 className="text - lg font - semibold text - white">{category.title}</h3>;"
                              <p className="text - sm text - gray - 400">{category.description}</p>;"
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  <item.icon className=w - 4 h - 4 group - hover:scale - 110 transition - transform />;
                  <span>{item.name}</span>;
                </Link>))}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                key={service_index}
                                href={service.href}'
                                className='block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - colors group                <Link;
                  key={item.name}

                </Link>))}
              {/* Services Dropdown */}
              <div className="relative group">;
                <button className=text - gray - 300 hover:text - cyan - 400 transition - colors duration - 200 flex items - center space - x-2 group>;
                  <Briefcase className="w - 4 h - 4 group - hover:scale - 110 transition - transform" />;
                  <span > Services</span>;
                  <ChevronDown className=w - 4 h - 4 group - hover:rotate - 180 transition - transform />;
                </button>;
                {/* Mega Menu */}
                <div className="absolute top - full left - 0 w - screen max - w-7xl transform -translate - x-1 / 2 left - 1/2 opacity - 0 invisible group - hover:opacity - 100 group - hover:visible transition - all duration - 300 pt - 4">;
                  <div className=bg - black / 95 backdrop - blur - xl border border - cyan - 500 / 20 rounded - 2xl p - 8 shadow - 2xl shadow - cyan - 500 / 20>;
                    <div className="grid grid - cols - 2 gap - 8">;
                      {service_categories.map ((category, index) => (<div key={index} className=space - y-4>;
                          <div className="flex items - center space - x-3">;
                            <div className={`w - 10 h - 10 bg - gradient - to - r ${category.color} rounded - xl flex items - center justify - center`}>;
                              <category.icon className=w - 5 h - 5 text - white />;
                            </div>;
                            <div>;
                              <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                              <p className=text - sm text - gray - 400>{category.description}</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                            </div>;
                          </div>;
                          <div className="space - y-2">;"
                            {category.services.map ((service, service_index) => (<Link;
                                }
                                key={service_index}
                                href={service.href}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                                </div>;
                              </Link>))}
                          </div>;
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;

            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className=w-6 h-6' />
=======
            {/* CTA Buttons */}

                  Get Started;
                </button>;
              </Link>;
            </div>;{/* Mobile Menu Button */}
            <button;
              onClick={toggleMenu}

            >


            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className=lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6 /> : <Menu className=w-6 h-6" />}
=======
className=lg: hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors'
             />
              {isOpen ? (

              )}            </button>              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors
            >
            {/* Mobile Menu Button */}
            <button;
              onClick={toggleMenu}'
              className=lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors>;
              {isOpen ? (;'
                <X className='w-6 h-6 />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors";
            >;
              {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />}
              )}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
              }
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </button>
          </div>
        </div>
      </nav>
className=lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors;
            >;
              {isOpen ? (<X className='w-6 h-6' />;
              ) : (<Menu className=w-6 h-6 />;
              )}            </button>              className=lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors";
            >;
            {/* Mobile Menu Button */}
            <button;
              onClick={toggleMenu}
              className='lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors'>;
              {isOpen ? (<X className=w-6 h-6 />;
              ) : (<Menu className='w-6 h-6' />;
              )}            </button>              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors;
            >;
              {isOpen ? <X className=w-6 h-6" /> : <Menu className="w-6 h-6 />})}</button>;
          </div>;
        </div>;
      </nav>;
            </button>;
          </div>;
        </div>;
      </nav>;
      {/* Mobile Menu */}
      <AnimatePresence>;

                    </div>
                    <div>
                      <div className=text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                        Zion Tech Group
                      </div>
                    </div>
                  </div>

                  </button>;
                </div>;
                {/* Mobile Navigation */}


                    <button;
                      onClick={() =>;
                        setActiveCategory(activeCategory === 0 ? null : 0)}

                        <Briefcase className='w-5 h-5 />;
                        <span>Services</span>;
                      </span>;

                      <ChevronRightIcon className={`w-5 h-5 transition-transform ${activeCategory === 0 ? rotate-90' : '}`} />;
                    </button>;
                    {activeCategory === 0 && (;
                      <div className=pl-8 space-y-2">;
                        {serviceCategories && serviceCategories.map((category, index) => (;"
                          <div key={index} className=space-y-2>;"
                            <div className="text-sm font-medium text-cyan-400 py-2>{category && category.title}</div>;
                            {category && category.services.map((service, serviceIndex) => (;

                      />
                    </button>
                    {activeCategory === 0 && (
                      <div className=pl-8 space-y-2' />}
                        {serviceCategories.map((category, index) => (}
                          <div key={index} className='space-y-2 />
                            <div className=text-sm font-medium text-cyan-400 py-2' />
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                              {category.title}
                            </div>
                            {category.services.map((service, serviceIndex) => (
origin/cursor/automate-test-improve-and-merge-code-2533
                              <Link
}
key={serviceIndex}
                                href={service && service.href}
                                onClick={closeMenu}

                              >
                                {service.name}
                              </Link>
origin/cursor/automate-test-improve-and-merge-code-2533
                            ))}
                            {category.services.map((service, serviceIndex) => (}
                              <Link;}
key={serviceIndex}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                                href={service && service.href}
                                onClick={closeMenu}


                        ))}
                      </div>
                    )}
                  </div>

                  {/* Company Links */}


                          {link.name}
                  {/* Company Links */}




                      ))}

                  {/* Contact Info */}
<div className='pt-4 border-t border-gray-700/50 />
                    <div className=text-sm font-medium text-gray-400 mb-3' />
                      Contact;
                    </div>
                  </div>




                        <span />{contactInfo.mobile}</span>
                      </div>

                        <span className='text-xs'>{contactInfo.address}</span>                      </div>                        <span>{contactInfo.mobile}</span>

                        <span>{contactInfo.mobile}</span>
                      ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className=w-4 h-4 text-purple-400" />
                        <span>{contactInfo.email}</span>
                      </div>"
                      <div className=flex items-center space-x-2>"
                        <MapPin className="w-4 h-4 text-pink-400 />
                        <span className="text-xs">{contactInfo.address}</span>
                        <span className=text-xs>{contactInfo.address}</span>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

                        <span>{contactInfo.mobile}</span>
                      ))}
                      </div>

                      </div>
                    </div>
                  </div>

                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">;
                        Get Started Today;
                      </button>;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion && motion.div>;
    </>
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}'
      <div className='h-20 />;
    </>;
  );      <div className=h-20" />;
    </>;
  );
                  <button;
                    on_click={close_menu}
                    className='p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50';
                  >;
                    <X className=w - 6 h - 6' />                  </button>;
                </div>;
                {/* Mobile Navigation */}'
                <div className=space - y-6>;
                  {main_navigation.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}'
                      className='flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50;
                    >;"
                      <item.icon className='w - 5 h - 5' />                      <span>{item.name}</span>                  <button on_click={close_menu} className=p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50>;"
                    <X className="w - 6 h - 6 />;
                  </button>;
                </div>;
                {/* Mobile Navigation */}
                <div className=space - y-6'>;
                  {main_navigation.map (item => (                <div className="space - y-6">;
                  {main_navigation.map ((item) => (
                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}'
                      className=flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50;
                    >;'
                      <item.icon className='w - 5 h - 5 />                      className=flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50";
                    >;"
                      <item.icon className=w - 5 h - 5 />;
                      <span>{item.name}</span>;
                    </Link>))}
                  {/* Services Accordion */}
                  <div className='space - y-2'>;
                    <button;
                      on_click={() =>;
                        setActiveCategory (active_category === 0 ? null : 0);
                      }
                      className=w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors';
                    >;'
                      <span className=flex items - center space - x-3>;'
                        <Briefcase className='w - 5 h - 5 />;
                        <span > Services</span>;
                      </span>;
                      <ChevronRightIcon;`
                        className={`w - 5 h - 5 transition - transform ${active_category === 0 ? 'rotate - 90' : }`}
                      />;
                    </button>;
                    {active_category === 0 && ('
                      <div className='pl - 8 space - y-2>;
                        {service_categories.map ((category, index) => (
                          <div key={index} className='space - y-2'>;
                            <div className=text - sm font - medium text - cyan - 400 py - 2'>;
                              {category.title}
                            </div>                            {category.services.map ((service, service_index) => (                    <button;
                      on_click={() => setActiveCategory (active_category === 0 ? null : 0)}"
                      className="w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors;
                    >;
                      <span className="flex items - center space - x-3">;
                        <Briefcase className=w - 5 h - 5" />;
                        <span > Services</span>;
                      </span>;'`
                      <ChevronRightIcon className={`w - 5 h - 5 transition - transform ${active_category === 0 ? rotate - 90 : ''}`} />;
                    </button>;
                    {active_category === 0 && ("
                      <div className=pl - 8 space - y-2>;
                        {service_categories.map ((category, index) => ("
                          <div key={index} className="space - y-2>;
                            <div className="text - sm font - medium text - cyan - 400 py - 2">{category.title}</div>;
                            {category.services.map ((service, service_index) => (
                              <Link;
                                key={service_index}
                                href={service.href}
                                on_click={close_menu}
                                className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                              >                                className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1";
                              >;
                                {service.name}
                              </Link>))}
                          </div>))}
                      </div>)}
                  </div>;
                  {/* Company Links */}'
                  <div className=pt - 4 border - t border - gray - 700 / 50>;'
                    <div className='text - sm font - medium text - gray - 400 mb - 3>;
                      Company;
                    </div>;
                    <div className='space - y-2'>;
                      {company_links.map (link => (                        <Link;
                          key={link.name}
                          href={link.href}
                          on_click={close_menu}"
                          className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                        >                  <div className=pt - 4 border - t border - gray - 700 / 50>;"
                    <div className="text - sm font - medium text - gray - 400 mb - 3>Company</div>;
                    <div className="space - y-2">;
                      {company_links.map ((link) => (
                          key={link.name}
                          href={link.href}
                          on_click={close_menu}'
                          className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1                          className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1";
                        >;
                          {link.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Contact Info */}'
                  <div className='pt - 4 border - t border - gray - 700 / 50>;
                    <div className='text - sm font - medium text - gray - 400 mb - 3'>;
                      Contact;
                    </div>;
                    <div className=space - y-2 text - sm text - gray - 400'>;'
                      <div className=flex items - center space - x-2>;'
                        <Phone className='w - 4 h - 4 text - cyan - 400 />;
                        <span>{contact_info.mobile}</span>;
                      </div>;
                      <div className='flex items - center space - x-2'>;
                        <Mail className=w - 4 h - 4 text - purple - 400' />;
                        <span>{contact_info.email}</span>;
                      </div>;'
                      <div className=flex items - center space - x-2>;'
                        <MapPin className='w - 4 h - 4 text - pink - 400 />;
                        <span className='text - xs'>{contact_info.address}</span>                      </div>                        <span>{contact_info.mobile}</span>;
                      </div>;"
                      <div className=flex items - center space - x-2>;"
                        <Mail className="w - 4 h - 4 text - purple - 400 />;
                        <span>{contact_info.email}</span>;
                      </div>;
                      <div className="flex items - center space - x-2">;
                        <MapPin className=w - 4 h - 4 text - pink - 400" />;"
                        <span className=text - xs>{contact_info.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                  {/* CTA Button */}
                  <div className=pt - 4'>;'
                    <Link href=/contact on_click={close_menu}>;'"
                      <button className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200>                        Get Started Today                  <div className="pt - 4>;
                    <Link href="/contact" on_click={close_menu}>;
                      <button className=w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200">;
                        Get Started Today;
                      </button>;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className='h - 20' />;"
    </>);      <div className=h - 20 />;
    </>);
}


                        Get Started Today
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link href=/contact onClick={closeMenu}>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                        Get Started Today
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        
}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}
      <div className='h-20' />;
    </>;
  )<div className=h-20 />;
    </>;
  )<button;
                    on_click={close_menu}
                    className=p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50;
                  >;
                    <X className='w - 6 h - 6' />                  </button>;
                </div>;
                {/* Mobile Navigation */}
                <div className=space - y-6>;
                  {main_navigation.map (item => (                    <Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className='flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50';
                    >;
                      <item.icon className=w - 5 h - 5 />                      <span>{item.name}</span>                  <button on_click={close_menu} className="p - 2 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50">;
                    <X className=w - 6 h - 6 />;
                  </button>;
                </div>;
                {/* Mobile Navigation */}
                <div className='space - y-6'>;
                  {main_navigation.map (item => (                <div className="space - y-6">;
                  {main_navigation.map ((item) => (<Link;
                      key={item.name}
                      href={item.href}
                      on_click={close_menu}
                      className=flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50;
                    >;
                      <item.icon className='w - 5 h - 5' />                      className=flex items - center space - x-3 text - gray - 300 hover:text - cyan - 400 transition - colors p - 3 rounded - lg hover:bg - gray - 800 / 50;
                    >;
                      <item.icon className="w - 5 h - 5" />;
                      <span>{item.name}</span>;
                    </Link>))}
                  {/* Services Accordion */}
                  <div className=space - y-2>;
                    <button;
                      on_click={() =>;
                        setActiveCategory (active_category === 0 ? null : 0)}
                      className='w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors';
                    >;
                      <span className=flex items - center space - x-3>;
                        <Briefcase className='w - 5 h - 5' />;
                        <span > Services</span>;
                      </span>;
                      <ChevronRightIcon;
                        className={`w - 5 h - 5 transition - transform ${active_category === 0 ? rotate - 90 : ''}`}
                      />;
                    </button>;
                    {active_category === 0 && (<div className=pl - 8 space - y-2>;
                        {service_categories.map ((category, index) => (<div key={index} className='space - y-2'>;
                            <div className=text - sm font - medium text - cyan - 400 py - 2>;
                              {category.title}
                            </div>                            {category.services.map ((service, service_index) => (                    <button;
                      on_click={() => setActiveCategory (active_category === 0 ? null : 0)}
                      className=w - full flex items - center justify - between p - 3 rounded - lg text - gray - 300 hover:text - cyan - 400 hover:bg - gray - 800 / 50 transition - colors;
                    >;
                      <span className="flex items - center space - x-3">;
                        <Briefcase className=w - 5 h - 5 />;
                        <span > Services</span>;
                      </span>;
                      <ChevronRightIcon className={`w - 5 h - 5 transition - transform ${active_category === 0 ? 'rotate - 90' : }`} />;
                    </button>;
                    {active_category === 0 && (<div className="pl - 8 space - y-2">;
                        {service_categories.map ((category, index) => (<div key={index} className=space - y-2>;
                            <div className="text - sm font - medium text - cyan - 400 py - 2">{category.title}</div>;
                            {category.services.map ((service, service_index) => (<Link;
                                key={service_index}
                                href={service.href}
                                on_click={close_menu}
                                className='block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                              >                                className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1;
                              >;
                                {service.name}
                              </Link>))}
                          </div>))}
                      </div>)}
                  </div>;
                  {/* Company Links */}
                  <div className=pt - 4 border - t border - gray - 700 / 50>;
                    <div className='text - sm font - medium text - gray - 400 mb - 3'>;
                      Company;
                    </div>;
                    <div className=space - y-2>;
                      {company_links.map (link => (                        <Link;
                          key={link.name}
                          href={link.href}
                          on_click={close_menu}
                          className='block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1'                        >                  <div className="pt - 4 border - t border - gray - 700 / 50">;
                    <div className=text - sm font - medium text - gray - 400 mb - 3>Company</div>;
                    <div className="space - y-2">;
                      {company_links.map ((link) => (key={link.name}
                          href={link.href}
                          on_click={close_menu}
                          className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1                          className=block text - sm text - gray - 400 hover:text - cyan - 400 transition - colors py - 1;
                        >;
                          {link.name}
                        </Link>))}
                    </div>;
                  </div>;
                  {/* Contact Info */}
                  <div className='pt - 4 border - t border - gray - 700 / 50'>;
                    <div className=text - sm font - medium text - gray - 400 mb - 3>;
                      Contact;
                    </div>;
                    <div className='space - y-2 text - sm text - gray - 400'>;
                      <div className=flex items - center space - x-2>;
                        <Phone className='w - 4 h - 4 text - cyan - 400' />;
                        <span>{contact_info.mobile}</span>;
                      </div>;
                      <div className=flex items - center space - x-2>;
                        <Mail className='w - 4 h - 4 text - purple - 400' />;
                        <span>{contact_info.email}</span>;
                      </div>;
                      <div className=flex items - center space - x-2>;
                        <MapPin className='w - 4 h - 4 text - pink - 400' />;
                        <span className=text - xs>{contact_info.address}</span>                      </div>                        <span>{contact_info.mobile}</span>;
                      </div>;
                      <div className="flex items - center space - x-2">;
                        <Mail className=w - 4 h - 4 text - purple - 400 />;
                        <span>{contact_info.email}</span>;
                      </div>;
                      <div className="flex items - center space - x-2">;
                        <MapPin className=w - 4 h - 4 text - pink - 400 />;
                        <span className="text - xs">{contact_info.address}</span>;
                      </div>;
                    </div>;
                  </div>;
                  {/* CTA Button */}
                  <div className='pt - 4'>;
                    <Link href=/contact on_click={close_menu}>;
                      <button className='w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200'>                        Get Started Today                  <div className=pt - 4>;
                    <Link href="/contact" on_click={close_menu}>;
                      <button className=w - full px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 200>;
                        Get Started Today;
                      </button>;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
      {/* Spacer for fixed navigation */}


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533

=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
