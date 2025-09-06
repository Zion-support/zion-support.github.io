 window.addEventListener ('scroll', handleScroll);
return () => window.removeEventListener ('scroll', handleScroll) 
}, []);
];
dropdownItems: [ {
  name: 'AI & Machine Learning', href: '/services?category=ai-ml' 
};
{
  name: 'Quantum Computing', href: '/services?category=quantum' 
};
{
  name: 'Space Technology', href: '/services?category=space' 
};
{
  name: 'Biotech & Healthcare', href: '/services?category=biotech' 
};
{
  name: 'Financial Services', href: '/services?category=finance' 
};
{
  name: 'Cybersecurity', href: '/services?category=security' 
};
{
  name: 'Edge Computing', href: '/services?category=edge' 
};
{
  name: 'Blockchain', href: '/services?category=blockchain' 
};
{
  name: 'View All Services', href: '/services' 
}] 
};
{
  name: 'Solutions', href: '/solutions', hasDropdown: true, dropdownItems: [ {
  name: 'Enterprise Solutions', href: '/solutions?type=enterprise' 
};
{
  name: 'Startup Solutions', href: '/solutions?type=startup' 
};
{
  name: 'Government Solutions', href: '/solutions?type=government' 
};
{
  name: 'Healthcare Solutions', href: '/solutions?type=healthcare' 
};
{
  name: 'Financial Solutions', href: '/solutions?type=financial' 
}] 
};
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
};
export default EnhancedNavigation;
