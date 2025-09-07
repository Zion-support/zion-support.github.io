import Link from 'next/link'
useEffect ( () => {
  const handleScroll = () => {
  setIsScrolled (window.scrollY > 20) 
}
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> <Link href="/" className="flex items-center space-x-3"> <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center"> <Brain className="w-6 h-6 text-white" /> </div> <span className="text-xl font-bold text-white">Zion Tech Group</span> </Link> <div className="hidden md:flex items-center space-x-8"> <Link href="/services" className="text-white hover:text-cyan-400 transition-colors"> Services </Link> <Link href="/about" className="text-white hover:text-cyan-400 transition-colors"> About </Link> <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors"> Contact </Link> </div> </div> 
}



const toggleDropdown = ("dropdown": string) => {setActiveDropdown(activeDropdown === dropdown ? null : dropdown;
}



                <span>Services</span>;
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />;`              </button>;{activeDropdown === 'services' && (<motion&& motion.div;'
                  }
                  initial={{ "opacity": 0, "y": 10 
}
                  animate={{ "opacity": 1, "y": 0 
}
                  exit={{ "opacity": 0, "y": 10 
}
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6">"

                  <div className="grid grid-cols-2 gap-4 px-6">;"
                    {services.map((service) => (<Link;
                        }
                        key={service.name}
                        href={service.href}
                        className="group p-4 rounded-lg "hover":bg-gray-50 transition-colors";"
                        onClick={closeAllDropdowns}
                      >;
                        <div className="flex items-start space-x-3">;"
                          <service.icon className="w-6 h-6 text-blue-600 mt-1" />;"
                          <div>;
                            <h3 className="font-semibold text-gray-900 group-"hover":text-blue-600">;"
                              {service.name}
                            </h3>;
                            <p className="text-sm text-gray-600">{service.description}</p>;"
                          </div>;
                        </div>;
                      </Link>;
                    ))}
                  </div>;
                </motion.div>;
              )}
            </div>;
            {/* Company Dropdown */}

          {/* Mobile Menu Button */}
          <button;
            onClick={() => setIsOpen(!isOpen)}


            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
        {/* Mobile Menu */}
const EnhancedNavigation: React.FC;
const EnhancedNavigation: React.FC;
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -20 }}
            className = $2;
export default EnhancedNavigation,
