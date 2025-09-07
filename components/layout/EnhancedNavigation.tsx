<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'All Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Innovative Solutions', href: '/innovative-it-services' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {services.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link key={service.name} href={service.href} onClick={() => setIsMenuOpen(false)}>
                              <span className="block text-gray-500 hover:text-blue-600 transition-colors py-1">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <span className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
=======
window.addEventListener ('scroll', handleScroll)
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
]
dropdownItems: [ {
  name: 'AI & Machine Learning', href: '/services?category=ai-ml' 
}
{
  name: 'Quantum Computing', href: '/services?category=quantum' 
}
{
  name: 'Space Technology', href: '/services?category=space' 
}
{
  name: 'Biotech & Healthcare', href: '/services?category=biotech' 
}
{
  name: 'Financial Services', href: '/services?category=finance' 
}
{
  name: 'Cybersecurity', href: '/services?category=security' 
}
{
  name: 'Edge Computing', href: '/services?category=edge' 
}
{
  name: 'Blockchain', href: '/services?category=blockchain' 
}
{
  name: 'View All Services', href: '/services' 
}] 
}
{
  name: 'Solutions', href: '/solutions', hasDropdown: true, dropdownItems: [ {
  name: 'Enterprise Solutions', href: '/solutions?type=enterprise' 
}
{
  name: 'Startup Solutions', href: '/solutions?type=startup' 
}
{
  name: 'Government Solutions', href: '/solutions?type=government' 
}
{
  name: 'Healthcare Solutions', href: '/solutions?type=healthcare' 
}
{
  name: 'Financial Solutions', href: '/solutions?type=financial' 
}] 
}
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' > <Link href="/" className="flex items-center space-x-3 group" > <div className="relative" > <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" > <Zap className="w-6 h-6 text-white" /> </div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" /> </div> <div className="hidden sm:block" > <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300" > Zion Tech Group </div> <div className="text-xs text-cyan-400" >Revolutionary Technology</div> </div> </a> </motion.div> <span> {
  item.name 
}</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === item.name ? 'rotate-180' : '' 
}` 
}/> </button> <AnimatePresence> {
  activeDropdown === item.name && (<motion.div) ) 
}</div> </motion.div>) 
}</AnimatePresence> </div>) : (<Link) 
}</motion.div>) ) 
}</div> > <Search className="w-5 h-5" /> </motion.button> {
  /* Notifications */ 
}<motion.button > <Bell className="w-5 h-5" /> <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" /> </motion.button> {
  /* CTA Button */ 
}<motion.div initial= {
  {
  opacity: 0, scale: 0.8 
}
}animate= {
  {
  opacity: 1, scale: 1 
}
}transition= {
  {
  duration: 0.5, delay: 0.8 
}
}> <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > Get Started </a> </motion.div> </div> {
  /* Mobile menu button */ 
}<motion.button </motion.button> </div> </div> {
  /* Mobile Navigation */ 
}<AnimatePresence> <input type="text" placeholder="Search services..." className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500" /> </div>) ) 
}</div>) 
}</div>) ) 
}</div> </div> </div> > Get Started Today </a> </div> </div> </motion.div>) 
}</AnimatePresence> </nav>) 
}
export default EnhancedNavigation
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
