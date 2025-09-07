] 
}]
]

return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
</div> <div> <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400" >Revolutionary Technology</div> </div> </a> > {
  item.icon 
}<span> {
  item.name 
}</span> {
  item.badge && (<span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30' 
}` 
}> {
  item.badge 
}</span>) 
}<ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : '' 
}` 
}/> </button> {
  /* Dropdown Menu */ 
}<AnimatePresence> {
  activeDropdown === item.name && (<motion.div) 
}</div> </div> <Link key= {
  child.name 
}href= {
  child.href 
}className= {
  `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20': 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
}` 
}onClick= {
  closeDropdowns 
}>) 
}</div> <ArrowRight className="w-4 h-4 opacity-50" /> </a>) ) 
}</div> </div> </motion.div>) 
}</AnimatePresence> </div>) ) 
}</div> <Link key= {
  action.name 
}href= {
  action.href 
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25': 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
}` 
}> </a> </div> </div> {
  /* Mobile Menu Button */ 
}<button </button> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence> <span className= {
  `px-2 py-1 text-xs rounded-full $ {
  item.badge === 'New'? 'bg-green-500/20 text-green-400': item.badge === 'Hot'? 'bg-red-500/20 text-red-400': item.badge === 'Showcase'? 'bg-cyan-500/20 text-cyan-400': 'bg-gray-500/20 text-gray-400' 
}` 
}> {
  item.badge 
}</span>) 
}</div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180': '' 
}` 
}/> </button> {
  /* Mobile Dropdown */ 
}<AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name 
}href= {
  child.href 
}className= {
  `block p-3 rounded-lg transition-colors duration-200 $ {
  child.featured ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400': 'text-gray-400 hover:text-white hover:bg-gray-800/50' 
}` 
}onClick= {
  closeMobileMenu 
}>) 
}</a>) ) 
}</motion.div>) 
}</AnimatePresence> </div>) ) 
}<Link key= {
  action.name 
}href= {
  action.href 
}className= {
  `flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 $ {
  action.primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white': 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
}` 
}onClick= {
  closeMobileMenu 
}>) ) 
}</div> </div> </div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> </div> </nav>) 
}
export default UltraFuturisticNavigation2035