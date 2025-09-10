<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Building,
  Users,
  ShoppingCart,
  Shield,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const services = [
    { name: 'AI Services', href: '/ai-services', description: 'Machine Learning, NLP, Computer Vision', icon: BarChart3 },
    { name: 'IT Services', href: '/it-services', description: 'Cloud, DevOps, Cybersecurity', icon: Shield },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Custom SaaS Solutions', icon: Zap },
    { name: 'Blockchain', href: '/blockchain', description: 'Smart Contracts, DeFi, NFTs', icon: Building },
    { name: 'IoT Solutions', href: '/iot', description: 'Connected Devices, Edge Computing', icon: Globe },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security Audits, Compliance', icon: Shield }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', description: 'Large-scale business solutions', icon: Building },
    { name: 'Startup Solutions', href: '/startup', description: 'Scalable startup platforms', icon: Zap },
    { name: 'E-commerce', href: '/ecommerce', description: 'Online store solutions', icon: ShoppingCart },
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions', icon: Users },
    { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions', icon: BarChart3 },
    { name: 'Education', href: '/industries/education', description: 'EdTech platforms', icon: Users }
  ];
=======
import { Menu, X, ChevronDown } from 'lucide-react';
const Navigation: React.FC = () => {;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {;
      setIsScrolled(window.scrollY > 50);
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);
  const navigationItems = [;
    { name: 'Home', href: '/' },
    { ;
      name: 'Services',
      href: '/services',
      dropdown: [;
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Cloud Architecture', href: '/services/cloud-architecture' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'DevOps', href: '/services/devops' },
      ];
},
    { ;
      name: 'Solutions',
      href: '/solutions',
      dropdown: [;
        { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
        { name: 'IoT Platforms', href: '/iot-platforms' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      ];
},
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  return (;
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${;
      isScrolled ;
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10' ;
        : 'bg-transparent';
}`}>;
      <div className="container mx-auto px-4">;
        <div className="flex items-center justify-between h-16">;
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-sm">Z</span>;
            </div>;
            <span className="text-white font-bold text-xl">Zion Tech</span>;
          </Link>;

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">;
            {navigationItems.map((item) => (;
              <div key={item.name} className="relative group">;
                <Link;
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1";
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >;
                  <span>{item.name}</span>;
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>;
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (;
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-2">;
                    {item.dropdown.map((dropdownItem) => (;
                      <Link;
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200">;
                        {dropdownItem.name}
                      </Link>;
                    ))}
                  </div>;
                )}
              </div>;
            ))}
          </div>;
>>>>>>> origin/automation-fixes

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare', description: 'Medical technology solutions' },
    { name: 'Finance', href: '/industries/finance', description: 'Fintech and banking solutions' },
    { name: 'Education', href: '/industries/education', description: 'EdTech platforms' },
    { name: 'Government', href: '/industries/government', description: 'Public sector solutions' },
    { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Industrial automation' },
    { name: 'Retail', href: '/industries/retail', description: 'E-commerce and retail tech' },
    { name: 'Real Estate', href: '/industries/real-estate', description: 'Property technology' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog', description: 'Latest insights and updates' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and projects' },
    { name: 'White Papers', href: '/white-papers', description: 'In-depth research and analysis' },
    { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
    { name: 'Training', href: '/training', description: 'Professional development' },
    { name: 'Events', href: '/events', description: 'Webinars and conferences' },
    { name: 'News', href: '/news', description: 'Industry news and updates' }
  ];


  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-200">24/7 Support Available</span>
              <div className="flex space-x-2">
                <a href="#" className="hover:text-blue-300"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="hover:text-blue-300"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
                <div className="text-xs text-gray-500">Technology Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-4 px-6">
                        {services.map((service, index) => {
                          const IconComponent = service.icon;
                          return (
                            <Link
                              key={index}
                              href={service.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="flex items-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {service.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {service.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                        <Link 
                          href="/services" 
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
<<<<<<< HEAD
                </AnimatePresence>
              </div>

        {/* Mobile Navigation */}
        {isOpen && (;
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">;
            <div className="px-4 py-4 space-y-4">;
              {navigationItems.map((item) => (;
                <div key={item.name}>;
                  <Link;
                    href={item.href}
                    className="block text-white hover:text-blue-400 transition-colors duration-200 py-2";
                    onClick={() => setIsOpen(false)}
                  >;
                    {item.name}
                  </Link>;
                  {item.dropdown && (;
                    <div className="ml-4 space-y-2">;
                      {item.dropdown.map((dropdownItem) => (;
                        <Link;
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 py-1";
                          onClick={() => setIsOpen(false)}
                        >;
                          {dropdownItem.name}
                        </Link>;
                      ))}
                    </div>
                  </div>

                  {/* Mobile Solutions */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Solutions</div>
                    <div className="space-y-1 ml-4">
                      {solutions.map((solution, index) => (
                        <Link
                          key={index}
                          href={solution.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Industries */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Industries</div>
                    <div className="space-y-1 ml-4">
                      {industries.map((industry, index) => (
                        <Link
                          key={index}
                          href={industry.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Resources */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">Resources</div>
                    <div className="space-y-1 ml-4">
                      {resources.map((resource, index) => (
                        <Link
                          key={index}
                          href={resource.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/pricing" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>

                  <div className="px-4 py-2 space-y-2">
                    <Link 
                      href="/contact" 
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                    <a 
                      href="tel:+13024640950" 
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
=======
                </div>;
              ))}
              <div className="pt-4 border-t border-white/10">;
                <Link;
                  href="/contact";
                  className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200";
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started;
                </Link>;
              </div>;
            </div>;
          </div>;
        )}
      </div>;
    </nav>;
  );
};
export default Navigation;
>>>>>>> origin/automation-fixes
=======
import React,{ useState } from 'react'; import Link from 'next/link'; import { Menu,X,ChevronDown,Phone,Shield } from 'lucide-react'; const Navigation: React.FC = () => { const [isOpen,setIsOpen] = useState(false) const [activeDropdown,setActiveDropdown] = useState<string | null>(null); const navigationItems = [ { name: 'Home',href: '/' },{ name: 'Services',href: '/services',dropdown: [ { name: 'AI Services',href: '/ai-services' },{ name: 'IT Services',href: '/it-services' },{ name: 'Micro SaaS',href: '/micro-saas' },{ name: 'Blockchain Solutions',href: '/blockchain-solutions' },{ name: 'All Services',href: '/services' } ] },{ name: 'Solutions',href: '/solutions',dropdown: [ { name: 'AI Content Creation',href: '/solutions/ai-content-creation' },{ name: 'Email Automation',href: '/solutions/email-automation' },{ name: 'Customer Support Platform',href: '/solutions/customer-support' },{ name: 'Event Management',href: '/solutions/event-management' },{ name: 'Project Management',href: '/solutions/project-management' },{ name: 'Workflow Automation',href: '/solutions/workflow-automation' } ] },{ name: 'Pricing',href: '/pricing' },{ name: 'About',href: '/about' },{ name: 'Blog',href: '/blog' },{ name: 'Careers',href: '/careers' },{ name: 'Contact',href: '/contact' } ]; const toggleDropdown = (itemName: string) => { setActiveDropdown(activeDropdown === itemName ? null : itemName)} return ( <nav className='bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 shadow-lg sticky top-0 z-50'> <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> <div className='flex justify-between items-center h-16'> {} <div className='flex-shrink-0'> <Link href='/' className='text-white text-2xl font-bold hover:text-blue-300 transition-colors'> Zion Tech Group </Link> </div> {} <div className='hidden md:block'> <div className='ml-10 flex items-baseline space-x-4'> {navigationItems.map((item) => ( <div key={item.name} className='relative'> {item.dropdown ? ( <div className='relative'> <button onClick={() => toggleDropdown(item.name)} className='text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center' > {item.name} <ChevronDown className='ml-1 h-4 w-4' /> </button> {activeDropdown === item.name && ( <div className='absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50'> {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors' onClick={() => setActiveDropdown(null)} > {dropdownItem.name} </Link> ))} </div> )} </div> ) : ( <Link href={item.href} className='text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors' > {item.name} </Link> )} </div> ))} <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center" > <Phone className="h-4 w-4 mr-2" /> Contact Us </Link> </div> </div> {} <div className='md:hidden'> <button onClick={() => setIsOpen(!isOpen)} className='text-white hover:text-blue-300 p-2 rounded-md transition-colors' > {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />} </button> </div> </div> </div> {} {isOpen && ( <div className='md:hidden'> <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 bg-opacity-95'> {navigationItems.map((item) => ( <div key={item.name}> {item.dropdown ? ( <div> <button onClick={() => toggleDropdown(item.name)} className='text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between' > {item.name} <ChevronDown className='h-4 w-4' /> </button> {activeDropdown === item.name && ( <div className='pl-4 space-y-1'> {item.dropdown.map((dropdownItem) => ( <Link key={dropdownItem.name} href={dropdownItem.href} className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm' onClick={() => { setIsOpen(false); setActiveDropdown(null) }} > {dropdownItem.name} </Link> ))} </div> )} </div> ) : ( <Link href={item.href} className='text-white hover:text-blue-300 block px-3 py-2 rounded-md text-base font-medium' onClick={() => setIsOpen(false)} > {item.name} </Link> )} </div> ))} </div> </div> )} </nav> )}; export default Navigation
>>>>>>> origin/automation-improvements
