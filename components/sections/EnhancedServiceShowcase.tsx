(selectedCategory === 'ai' && (service.category.includes ('AI') || service.category.includes ('Machine Learning') ) ) || (selectedCategory === 'quantum' && (service.category.includes ('Quantum') || service.category.includes ('Space') ) ) || (selectedCategory === 'blockchain' && (service.category.includes ('Blockchain') || service.category.includes ('DeFi') || service.category.includes ('NFT') ) ) || (selectedCategory === 'enterprise' && (service.category.includes ('Enterprise') || service.category.includes ('IT') ) ) || (selectedCategory === 'emerging' && (service.category.includes ('Neural') || service.category.includes ('Autonomous') || service.category.includes ('Space') || service.category.includes ('Biotech') ) )
}return filtered.slice (0, maxServices) 
}, [services, selectedCategory, selectedPriceRange, sortBy, maxServices])
> {
  title 
}</motion.h2> <motion.p > {
  subtitle 
}</motion.p> {
  /* Stats */ 
}<motion.div </div>) ) 
}</motion.div> </div> <div> <label className="block text-sm font-medium text-gray-300 mb-3" >Category</label> <select > {
  categories.map ( (category) => (<option key= {
  category.id 
}value= {
  category.id 
}> {
  category.icon 
}{
  category.name 
}</option>) ) 
}</select> </div> {
  /* Price Range Filter */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-3" >Price Range</label> <select > {
  priceRanges.map ( (range) => (<option key= {
  range.id 
}value= {
  range.id 
}> {
  range.name 
}</option>) ) 
}</select> </div> {
  /* Sort Options */ 
}<div> <label className="block text-sm font-medium text-gray-300 mb-3" >Sort By</label> <select > {
  sortOptions.map ( (option) => (<option key= {
  option.id 
}value= {
  option.id 
}> {
  option.name 
}</option>) ) 
}</select> </div> </div> </div> </motion.div>) 
}{
  /* Services Grid */ 
}<motion.div > <AnimatePresence> {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}⭐ Most Popular </div>) 
}</li>) ) 
}</ul> </div> > Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> </Button> </div> </div> </div> </div> </motion.div>) ) 
}</AnimatePresence> </motion.div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20" > <h3 className="text-2xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-gray-300 mb-6 max-w-2xl mx-auto" > Join thousands of companies already achieving breakthrough results with our cutting-edge AI, quantum, and blockchain solutions. Get started today and see the future of business technology. </p> Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" /> </Button> <Button href="/pricing" variant="secondary" className="text-lg px-8 py-4" > View Pricing Plans <DollarSign className="ml-2 w-5 h-5" /> </Button> </div> <div className="mt-6 text-sm text-gray-400" > <p>📞 Call us: <span className="text-cyan-400" >+1 302 464 0950</span></p> <p>📧 Email: <span className="text-cyan-400" >kleber@ziontechgroup.com</span></p> <p>🌐 Visit: <span className="text-cyan-400" >https://ziontechgroup.com</span></p> </div> </div> </motion.div> </div> </section>) 
}
export default EnhancedServiceShowcase