<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  Menu
  X
  ChevronDown
  Search
  Phone
  Mail
  MapPin
  Brain
  Rocket
  Dna
  Globe
  Shield
  Wifi
  Package
  Bot
  Car
  Building2
  DollarSign
  Monitor
  Users
  Cpu
  Zap
  Atom
  Database
  Cloud
  Lock
  Code;
} from 'lucide-react';
import Link from 'next/link';import {


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Menu,
  X,
  ChevronDown,
  Search,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Dna,
  Globe,
  Shield,
  Wifi,
  Package,
  Bot,
  Car,
  Building2,
  DollarSign,
  Monitor,
  Users,
  Cpu,
  Zap,
  Atom,
  Database,
  Cloud,
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Lock,
  Code,
} from 'lucide-react';

import Link from 'next/link';import { ;

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

  Lock,
  Code,
} from 'lucide-react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin;

  Brain, Rocket, Dna, Globe, Shield, Wifi, Package;
  Bot, Car, Building2, DollarSign, Monitor, Users;
<<<<<<< HEAD
  Cpu, Zap, Atom, Database, Cloud, Lock, Code
 } from 'lucide-react';
import Link from 'next/link';

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, []);      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigationItems = [
    {
      name: 'Home'
      href: '/'
      icon: null
    },    {      icon: null
    }

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: 'AI Services'
      href: '#'
      icon: Brain
      description: 'Cutting-edge AI solutions'
      dropdown: [
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      description: 'Benchmarks & vendor references'
    }
    {
      name: 'About'
      href: '/about',          price: '$7,999/month'
        }
      ]
    }
      name: 'Micro SaaS'
      href: '/services'
      icon: Monitor
      description: '300+ micro SaaS services'
    },      description: '300+ micro SaaS services'
    }
    {
      name: 'Market Pricing'
      href: '/market-pricing'
      icon: DollarSign
      description: 'Benchmarks & vendor references'
    },    {
<<<<<<< HEAD

    }

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      name: 'Contact'
      href: '/contact'
      icon: null
    }
    {
<<<<<<< HEAD

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
=======
    >;
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <div className='flex justify-between items-center h-20'>          {/* Logo */}  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50'
        : 'bg-transparent'
<<<<<<< HEAD
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <Zap className='w-6 h-6 text-white' />
              </div>
              <div className='hidden sm:block'>
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                  Zion Tech Group
                </div>
                <div className='text-xs text-gray-400'>
                  Revolutionary Technology
                </div>              </div>          >
<<<<<<< HEAD

=======
    }`}>;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-20">;
          <motion&& motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>
            transition={{ duration: 0 && 0.5 }}
            className='flex items-center'>;
            <Link href='/' className='flex items-center space-x-3 group'>;
              <div className='w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>;
                <Zap className='w-6 h-6 text-white' />;
              </div>;
              <div className='hidden sm:block'>;
                <div className='text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>;
                  Zion Tech Group;
                </div>;
                <div className='text-xs text-gray-400'>;
                  Revolutionary Technology;
                </div>              </div>          >;
            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                <Zap className="w-6 h-6 text-white" />;
              </div>;
              <div className="hidden sm:block">;
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </div>;
                <div className="text-xs text-gray-400">Revolutionary Technology</div>;
              </div>;
            </Link>;
          </motion && motion.div>;

<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


=======
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  </Link>
                )}

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======






                  </Link>
                )}

                )}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {/* Dropdown Menu */}
                {item && item.dropdown && (;
                  <AnimatePresence>;
                    {activeDropdown === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}

<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                      >
                        <div className="p-4">
                          <div className="text-sm text-gray-400 mb-3">{item.description}</div>
                          <div className="space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
<<<<<<< HEAD
                                key={dropdownItem.name}
                                href={dropdownItem.href}
className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                                </div>
                                <div className="text-sm font-semibold text-cyan-400">
=======
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
<<<<<<< HEAD
          </div>

=======
          </div>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>;
            <div className='flex items-center space-x-4 text-sm text-gray-300'>;
              <a
<<<<<<< HEAD

                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'
              >
                <Phone className='w-4 h-4' />
                <span className='hidden xl:inline'>{contactInfo.mobile}</span>

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </a>
              <a

          </div>

          {/* Contact Info & CTA */}
          <div className='hidden lg:flex items-center space-x-6'>
            <div className='flex items-center space-x-4 text-sm text-gray-300'>
              <a
                href={`tel:${contactInfo.mobile}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'
              >
                <Phone className='w-4 h-4' />
                <span className='hidden xl:inline'>{contactInfo.mobile}</span>

              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className='flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200'
              >
                <Mail className='w-4 h-4' />
                <span className='hidden xl:inline'>{contactInfo.email}</span>
              </a>
            </div>
            <motion.a
              href='/contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'            >              </a>

              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.email}</span>
              </a>
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>
<<<<<<< HEAD

=======
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white transition-colors duration-200';
            >;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              )}            </button>            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
<<<<<<< HEAD
            </button>
          </div>
        </div>
      </div>
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            </button>;
          </div>;
        </div>;
      </div>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Mobile Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD


                  )}
                </div>;
              ))}





              {/* Mobile Contact Info */}
              <div className='pt-6 border-t border-gray-800/50'>;
                <div className='space-y-3 text-sm text-gray-400'>;
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className='flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200'>;
                    <Phone className='w-4 h-4' />;
                    <span>{contactInfo && contactInfo.mobile}</span>;
                  </a>;
                  <a

            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="w-5 h-5" />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-8 mt-2 space-y-2">

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden'
          >
            <div className='px-4 py-6 space-y-4'>
              {navigationItems.map(item => (                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )
                        }
                        className='flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3'
                        <div className='flex items-center space-x-3'>
                          {item.icon && <item.icon className='w-5 h-5' />}
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className='ml-8 mt-2 space-y-2'>
                          {item.dropdown.map(dropdownItem => (                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className='block py-2 text-gray-400 hover:text-white transition-colors duration-200'                            >                        <div className="ml-8 mt-2 space-y-2">

                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}

                            >
                              {dropdownItem.name}
                            </Link>

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
<<<<<<< HEAD

                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span>{item.name}</span>

=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                      {item.icon && <item.icon className='w-5 h-5' />}                      <span>{item.name}</span>

                      <span>{item.name}</span>

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </Link>

                  )}
                </div>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{contactInfo.mobile}</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1 && 1.05 }}
                  whileTap={{ scale: 0 && 0.95 }}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">;
                  Get Started;
                </motion && motion.a>;
              </div>;
            </div>;
          </motion && motion.div>;
        )}
      </AnimatePresence>;
    </nav>;
  );
<<<<<<< HEAD
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

export default UltraAdvancedNavigation;  )
}
export default UltraAdvancedNavigation;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};

export default UltraAdvancedNavigation;  );
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default UltraAdvancedNavigation;

export default UltraAdvancedNavigation;
export default UltraAdvancedNavigation;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

export default UltraAdvancedNavigation;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden';
          >;
            <div className='px - 4 py - 6 space - y-4'>;
              {navigation_items.map (item => (                <div key={item.name}>;
                  {item.dropdown ? (
                    <div>;
                      <button            className="lg:hidden bg - gray - 900 / 95 backdrop - blur - xl border - t border - gray - 800 / 50 overflow - hidden";
          >;
            <div className="px - 4 py - 6 space - y-4">;
              {navigation_items.map ((item) => (
                  {item.dropdown ? (
                    <div>;
                      <button;
                        on_click={() =>;
                          setActiveDropdown (
                            active_dropdown === item.name ? null : item.name);
                        }
                        className='flex items - center justify - between w - full text - left text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                        <div className='flex items - center space - x-3'>;
                          {item.icon && <item.icon className='w - 5 h - 5' />}
                          <span>{item.name}</span>;
                        </div>;
                        <ChevronDown;
                          className={`w - 4 h - 4 transition - transform duration - 200 ${
                            active_dropdown === item.name ? 'rotate - 180' : '';
                          }`}
                        />;
                      </button>;
                      {active_dropdown === item.name && (
                        <div className='ml - 8 mt - 2 space - y-2'>;
                          {item.dropdown.map (dropdown_item => (                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                            >                        <div className="ml - 8 mt - 2 space - y-2">;
                          {item.dropdown.map ((dropdown_item) => (
                            <Link;
                              key={dropdown_item.name}
                              href={dropdown_item.href}
                              on_click={() => setIsOpen (false)}
                              className='block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200'                              className="block py - 2 text - gray - 400 hover:text - white transition - colors duration - 200";
                            >;
                              {dropdown_item.name}
                            </Link>))}
                        </div>)}
                    </div>) : (
                    <Link;
                      href={item.href}
                      on_click={() => setIsOpen (false)}
                      className='flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3';
                    >;
                      {item.icon && <item.icon className='w - 5 h - 5' />}                      <span>{item.name}</span>                      className="flex items - center space - x-3 text - gray - 300 hover:text - white transition - colors duration - 200 py - 3";
                    >;
                      {item.icon && <item.icon className="w - 5 h - 5" />}
                      <span>{item.name}</span>;
                    </Link>)}
                </div>))}
              {/* Mobile Contact Info */}
              <div className='pt - 6 border - t border - gray - 800 / 50'>;
                <div className='space - y-3 text - sm text - gray - 400'>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Phone className='w - 4 h - 4' />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200';
                  >;
                    <Mail className='w - 4 h - 4' />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className='flex items - start space - x-3'>;
                    <MapPin className='w - 4 h - 4 mt - 0.5' />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <motion.a;
                  href='/contact';
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className='block w - full mt - 6 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - center py - 3 rounded - 2xl font - semibold hover:shadow - lg hover:shadow - cyan - 500 / 25 transition - all duration - 300'                >              {/* Mobile Contact Info */}
              <div className="pt - 6 border - t border - gray - 800 / 50">;
                <div className="space - y-3 text - sm text - gray - 400">;
                  <a href={`tel:${contact_info.mobile}`} className="flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200">;
                    <Phone className="w - 4 h - 4" />;
                    <span>{contact_info.mobile}</span>;
                  </a>;
                  <a href={`mailto:${contact_info.email}`} className="flex items - center space - x-3 hover:text - cyan - 400 transition - colors duration - 200">;
                    <Mail className="w - 4 h - 4" />;
                    <span>{contact_info.email}</span>;
                  </a>;
                  <div className="flex items - start space - x-3">;
                    <MapPin className="w - 4 h - 4 mt - 0.5" />;
                    <span>{contact_info.address}</span>;
                  </div>;
                </div>;
                <motion.a;
                  href="/contact";
                  while_hover={{ scale: 1.05 }}
                  while_tap={{ scale: 0.95 }}
                  className="block w - full mt - 6 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - center py - 3 rounded - 2xl font - semibold hover:shadow - lg hover:shadow - cyan - 500 / 25 transition - all duration - 300";
                >;
                  Get Started;
                </motion.a>;
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
;
export default UltraAdvancedNavigation);
}
;
export default UltraAdvancedNavigation;

export default UltraAdvancedNavigation;
  );

};


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
