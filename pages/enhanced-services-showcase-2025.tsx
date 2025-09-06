 let filtered = allServices.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () );
const matchesCategory = selectedCategory === 'all' || (selectedCategory === 'ai' && service.category.includes ('AI') ) || (selectedCategory === 'quantum' && service.category.includes ('Quantum') ) || (selectedCategory === 'blockchain' && service.category.includes ('Blockchain') ) || (selectedCategory === 'iot' && service.category.includes ('IoT') ) || (selectedCategory === 'space' && service.category.includes ('Space') ) || (selectedCategory === 'security' && (service.category.includes ('Security') || service.category.includes ('Cybersecurity') ) );
const matchesPrice = selectedPriceRange === 'all' || (selectedPriceRange === 'low' && parsePriceToNumber (service.price) < 2000) || (selectedPriceRange === 'medium' && parsePriceToNumber (service.price) >= 2000 && parsePriceToNumber (service.price) < 8000) || (selectedPriceRange === 'high' && parsePriceToNumber (service.price) >= 8000 && parsePriceToNumber (service.price) < 20000) || (selectedPriceRange === 'premium' && parsePriceToNumber (service.price) >= 20000);
return filtered;
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy, allServices]);
const containerVariants = {
  hidden: {
  opacity: 0 
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
};
const itemVariants = {
  hidden: {
  opacity: 0, y: 20 
};
visible: {
  opacity: 1, y: 0, transition: {
  duration: 0.5 
}
}
};
> <div className="min-h-screen" > <Head> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <div className="flex items-center justify-center mb-6" > <Sparkles className="w-12 h-12 text-cyan-400 mr-4" /> <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" > 2025 Innovation Showcase </h1> <Sparkles className="w-12 h-12 text-pink-400 ml-4" /> </div> </p> <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto" > Discover our cutting-edge solutions that are transforming industries and driving the future of technology </p> </div> </div> </motion.div> </div> </section> /> </div> {
  /* Category Filter */ 
}<select </option>) ) 
}</select> {
  /* Price Range Filter */ 
}<select </option>) ) 
}</select> {
  /* Sort Options */ 
}<select </option>) ) 
}</select> </div> </div> </div> </section> <AnimatePresence> {
  filteredServices.map ( (service) => (<motion.div key= {
  service.id 
}<span>Popular</span> </div>) 
}</div> </li>) ) 
}</ul> </div> Learn More <ArrowRight className="w-4 h-4 ml-2" /> </Link> <a href="/contact" className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500" > Contact Us </Link> </div> </div> </div> </motion.div>) ) 
}</AnimatePresence> </motion.div> {
  /* No Results Message */ 
}{
  filteredServices.length === 0 && (<motion.div </motion.div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8" > Join thousands of companies achieving breakthrough results with our revolutionary services </p> </div> <span className="text-lg text-white" >+1 302 464 0950</span> </div> <div className="flex items-center justify-center space-x-3" > <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center" > <Award className="w-6 h-6 text-purple-400" /> </div> <span className="text-lg text-white" >kleber@ziontechgroup.com</span> </div> <div className="flex items-center justify-center space-x-3" > <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center" > <Lightbulb className="w-6 h-6 text-green-400" /> </div> <span className="text-lg text-white" >364 E Main St STE 1008 Middletown DE 19709</span> </div> </div> /contact"className=" inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl border border-blue-500/20 no-underline"> <span className=" relative">Start Your Transformation</span> <Rocket className=" ml-2 w-6 h-6"/> </Link> <a href=" /pricing"className=" inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group rounded-xl transform hover:scale-105 active:scale-95 px-6 py-3 text-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-500 hover:to-gray-600 text-white shadow-lg hover:shadow-xl border border-gray-500/20 no-underline"> <span className=" relative">View Pricing</span> <DollarSign className=" ml-2 w-6 h-6" /> </Link> </div> </motion.div> </div> </section> </div> </EnhancedFuturisticBackground>) 
}