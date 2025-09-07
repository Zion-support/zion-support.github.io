window.addEventListener ('scroll', handleScroll)
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
const navigationItems = [ {
  name: 'Services', href: '/services', hasDropdown: true, dropdownItems: [ {
  name: 'AI & Machine Learning', href: '/services/ai-ml', icon: Brain, color: 'from-purple-500 to-pink-600' 
}
{
  name: 'Quantum Computing', href: '/services/quantum', icon: Atom, color: 'from-cyan-500 to-blue-600' 
}
{
  name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' 
}
{
  name: 'IT Solutions', href: '/services/it-solutions', icon: Rocket, color: 'from-green-500 to-emerald-600' 
}
{
  name: 'View All Services', href: '/services', icon: Rocket, color: 'from-gray-500 to-gray-600' 
}] 
}
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-500 $ {
  isScrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl' > <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl" > <Rocket className="w-7 h-7 text-white" /> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400 -mt-1" >Revolutionary Technology</div> </div> </motion.div> <div onMouseEnter= {
  () => setActiveDropdown (item.name) 
}onMouseLeave= {
  () => setActiveDropdown (null) 
}> </button> {
  /* Dropdown Menu */ 
}<AnimatePresence>) 
}</div> </a>) ) 
}</div> </div> </motion.div>) 
}</AnimatePresence> </div>) : (<Link) 
}</div>) ) 
}</div> </div> </div> {
  /* CTA Button */ 
}<motion.div whileHover= {
  {
  scale: 1.05 
}
}whileTap= {
  {
  scale: 0.95 
}
}> <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30" > <Rocket className="w-4 h-4 mr-2" /> Get Started </a> </motion.div> </div> </button> </div> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence> <div> <button onClick= {
  () => setActiveDropdown (activeDropdown === item.name ? null : item.name) 
}className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50" > <span> {
  item.name 
}</span> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-300 $ {
  activeDropdown === item.name ? 'rotate-180' : '' 
}` 
}/> </button> > {
  item.dropdownItems?.map ( (dropdownItem) => (<Link key= {
  dropdownItem.name 
}</span> </a>) ) 
}</motion.div>) 
}</div>) 
}</div>) ) 
}> <Rocket className="w-5 h-5 inline mr-2" /> Get Started </a> </div> </div> </motion.div>) 
}</AnimatePresence> </nav>) 
}