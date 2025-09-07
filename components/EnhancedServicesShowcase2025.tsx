benefits: [ 'Reduce manual tasks by 80%Improve accuracy by 95%24/7 automated operationsScalable AI infrastructure' ] 
}
benefits: [ 'Solve previously impossible problemsExponential speed improvementsFuture-proof technologyResearch and development support' ] 
}
benefits: [ 'Reduced latency by 90%Lower bandwidth costsEnhanced privacyScalable edge deployment' ] 
}
benefits: [ 'Future-proof securityQuantum-resistant encryptionComprehensive complianceAdvanced threat protection' ] 
}
benefits: [ 'Unified data viewReal-time insightsImproved data qualityReduced integration costs' ] 
}
benefits: [ 'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability' ] 
}]
if (searchTerm) {
  filtered = filtered.filter (service => service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.technologies.some (tech => tech.toLowerCase () .includes (searchTerm.toLowerCase () ) ) return filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'price': return a.pricing.starter - b.pricing.starter
case 'category': > <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > 2025 Services Showcase </h1> <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Discover our cutting-edge technology solutions designed for the future. From AI-powered automation to quantum computing, we're building tomorrow's innovations today. </p> </motion.div> {
  /* Search and Filters */ 
}<motion.div > <div className="flex flex-col md:flex-row gap-4 items-center justify-center" > <div className="relative flex-1 max-w-md" > <input /> <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> </div> <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="category" >Sort by Category</option> </select> </div> </motion.div> {
  /* Category Tabs */ 
}<motion.div > <div className="flex flex-wrap justify-center gap-4" > <button onClick= {
  () => setSelectedCategory ('all') 
}className= {
  `px-6 py-3 rounded-lg font-medium transition-all duration-300 $ {
  selectedCategory === 'all' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20' 
}` 
}> All Services </button> {
  serviceCategories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? `bg-gradient-to-r $ {
  category.color 
}text-white shadow-lg`: 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20' 
}` 
}> {
  category.icon 
}{
  category.name 
}</button>) ) 
}</div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}<span key= {
  tech 
}className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300" > {
  tech 
}</span>) ) 
}+ {
  service.technologies.length - 3 
}more </span>) 
}</div> </div> <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300" > Learn More </button> </div> </motion.div>) ) 
}</motion.div> {
  /* No Results */ 
}{
  filteredServices.length === 0 && (<motion.div > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-gray-300 mb-2" >No services found</h3> <p className="text-gray-400" >Try adjusting your search terms or category filters</p> </motion.div>) 
}</div> {
  /* Service Detail Modal */ 
}<AnimatePresence> > <span className="text-2xl" >×</span> </button> </div> </li>) ) 
}</ul> </div> {
  /* Benefits */ 
}<div> </li>) ) 
}</ul> </div> </div> <span key= {
  tech 
}className="px-3 py-2 bg-white/10 rounded-lg text-gray-300" > {
  tech 
}</span>) ) 
}</div> </div> <div key= {
  plan 
}className="p-4 bg-white/5 border border-white/20 rounded-lg text-center" > </div> <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300" > Get Started </button> </div>) ) 
}</div> </div> </motion.div> </motion.div>) 
}</AnimatePresence> </div>) 
}
export default EnhancedServicesShowcase2025
