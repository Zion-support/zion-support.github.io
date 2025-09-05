 ] 
}];
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const filteredServices = sidebarItems.flatMap (item => item.children?.filter (child => child.name.toLowerCase () .includes (searchQuery.toLowerCase () ) || child.description?.toLowerCase () .includes (searchQuery.toLowerCase () ) ) || []);
</div> <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50" ></div> </div> <div> <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" > Zion Tech Group </h2> <p className="text-xs text-gray-400" >Navigation</p> </div> </div> </div> </div> </div> {
  section.badge 
}</span>) 
}</div>) : (<ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />) 
}</button> <AnimatePresence> > <CloseIcon className="w-5 h-5" /> </button> </div> </div> </a>) ) 
}+ {
  filteredServices.length - 5 
}more results </div>) 
}</div>) : (<div className="text-sm text-gray-500 text-center py-2" > No services found </div>) 
}</div>) 
}</div> </div> </div> </div> </motion.div>) ) 
}</div> </div> </span> </a>) ) 
}</div> </div> </span> </div> <ChevronRight className= {
  `w-4 h-4 text-gray-400 transition-transform duration-200 $ {
  expandedCategory === item.name ? 'rotate-90' : '' 
}` 
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
  child.name 
}{
  child.badge 
}</span>) 
}</a>) ) 
}</motion.div>) 
}</AnimatePresence> </div>) ) 
}</div> </div> <span>Quick Links</span> </h3> <div className="space-y-2" > <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > Contact Us </div> <div className="text-xs text-gray-500" >Get in touch with our team</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > View Pricing </div> <div className="text-xs text-gray-500" >Explore our pricing plans</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > About Us </div> <div className="text-xs text-gray-500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-blue-400" >1000+</div> <div className="text-xs text-gray-400" >Clients</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-purple-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-green-400" >99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > <span>Get Started Today</span> <ArrowRight className="w-4 h-4 ml-2 inline" /> </a> </div> </div> </motion.aside>) 
};
export default EnhancedSidebar2025;
