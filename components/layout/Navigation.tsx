 window.addEventListener ('scroll', handleScroll);
return () => window.removeEventListener ('scroll', handleScroll) 
}, []);
const navigationItems = [ {
  name: 'Home', href: '/', icon: Home 
};
{
  name: 'Services', href: '/services', icon: Rocket, dropdown: [ {
  name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Revolutionary AI solutions' 
};
{
  name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Enterprise IT solutions' 
};
{
  name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Specialized software solutions' 
};
{
  name: 'Innovative Showcase', href: '/innovative-services-showcase', icon: Globe, description: 'Cutting-edge technology' 
}] 
};
return (<> {
  /* Navigation Bar */ 
}<motion.nav initial= {
  {
  y: -100 
}
}animate= {
  {
  y: 0 
}
}transition= {
  {
  duration: 0.5 
}
}className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' : 'bg-transparent' 
}` 
}> > <Link href="/" className="flex items-center space-x-2 group" > <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300" > <span className="text-white font-bold text-lg lg:text-xl" >Z</span> </div> <div className="hidden sm:block" > <div className="text-white font-bold text-lg lg:text-xl" >Zion Tech Group</div> <div className="text-cyan-400 text-xs" >Revolutionary Technology</div> </div> </a> </motion.div> {
  /* Dropdown Menu */ 
}<AnimatePresence> > <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-gradient-to-r group-hover/item:from-cyan-500/30 group-hover/item:to-purple-500/30 transition-all duration-300" > <Icon className="w-5 h-5 text-cyan-400" /> </div> <div> </div> </div> 
}) 
}</div> </motion.div>) 
}</AnimatePresence> </div>) : (<Link) 
}</div>) ) 
}</div> > Get Started </motion.a> </div> </motion.button> </div> </div> </div> </motion.nav> {
  /* Mobile Navigation */ 
}<AnimatePresence> > {
  /* Backdrop */ 
}<div /> {
  /* Mobile Menu */ 
}<motion.div > <X className="w-6 h-6" /> </motion.button> </div> > <Icon className="w-5 h-5 text-cyan-400" /> <div> </div> 
}) 
}</div> </div>) 
}</div>) ) 
}</div> </div> </div> </div> > Get Started Today </motion.a> </div> </div> </motion.div> </motion.div>) 
}</AnimatePresence> </>) 
};
export default Navigation;
