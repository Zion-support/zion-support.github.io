setIsSearching (true)
//Simulate search delay setTimeout ( () => {
  const results = allServices.filter (service => {
  const matchesSearch = service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.technology.toLowerCase () .includes (searchTerm.toLowerCase () )
switch (filters.priceRange) {
  case 'under-500': matchesPrice = price < 500
break
case '500-1000': matchesPrice = price >= 500 && price < 1000
break
case '1000-2500': matchesPrice = price >= 1000 && price < 2500
break
case 'over-2500': 
}return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice 
})
//Sort results const sortedResults = results.sort ( (a, b) => {
  switch (sortBy) {
  case 'relevance': return b.relevance - a.relevance
case 'price-low': case 'name': return a.title.localeCompare (b.title)
case 'status': setSearchResults (sortedResults)
setIsSearching (false) 
}, 500) 
}
//Handle search on Enter key </Head> <SmartHeader /> <motion.div initial= {
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
}> <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Search Our Services </h1> <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8" > Find the perfect AI and technology solutions for your business needs. Search across our comprehensive service catalog with advanced filtering options. </p> </motion.div> </div> </section> > Search </button> </div> </div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> > <Sliders className="w-4 h-4" /> Filters) 
}</button> <select > <option value="relevance" >Sort by Relevance</option> <option value="price-low" >Sort by Price: Low to High</option> <option value="price-high" >Sort by Price: High to Low</option> <option value="name" >Sort by Name</option> <option value="status" >Sort by Status</option> </select> </div> {
  Object.values (filters) .some (f => f !== 'all') && (<button onClick= {
  clearFilters 
}className="flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors" > <X className="w-4 h-4" /> Clear Filters </button>) 
}</div> <div> <label className="block text-white font-medium mb-2" >Category</label> <select </option>) ) 
}</select> </div> {
  /* Status Filter */ 
}<div> <label className="block text-white font-medium mb-2" >Status</label> <select </option>) ) 
}</select> </div> {
  /* Price Range Filter */ 
}<div> <label className="block text-white font-medium mb-2" >Price Range</label> <select </option>) ) 
}</select> </div> {
  /* Technology Filter */ 
}<div> <label className="block text-white font-medium mb-2" >Technology</label> <select </option>) ) 
}</select> </div> </div> </motion.div>) 
}</div> </div> </section> </div> <p className="text-white/60" >Searching our services...</p> </div>) 
}</div> <h3 className="text-2xl font-semibold text-white mb-2" >No services found</h3> <p className="text-white/60 mb-6" > Try adjusting your search terms or filters </p> <button onClick= {
  clearFilters 
}className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-medium transition-colors" > Clear All Filters </button> </div>) 
}<div className= {
  viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6' 
}> {
  searchResults.map ( (service, index) => (<motion.div key= {
  service.id 
}initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.5, delay: index * 0.1 
}
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl' : 'p-6 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition-all duration-300' 
}` 
}> service.status === 'active' ? 'bg-green-500/20 text-green-300' : service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300' 
}` 
}> {
  service.status 
}</span> </div>) ) 
}</div> </div> <div className="flex items-center justify-between" > <a > <span className="text-sm font-medium" >Learn More</span> <ExternalLink className="w-4 h-4 ml-2" /> </Link> <a href="mailto:kleber@ziontechgroup.com" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-300 transform hover:scale-105" > Get Quote </Link> </div> </div> </motion.div>) ) 
}</div> </AnimatePresence>) 
}</div> <h3 className="text-2xl font-semibold text-white mb-2" >Start Your Search</h3> <p className="text-white/60 mb-6" > Enter keywords above to find the perfect technology solutions for your business </p> <button key= {
  term 
}onClick= {
  () => {
  setSearchTerm (term)
performSearch () 
}
}className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors" term 
}</button>) ) 
}</div> </div>) 
}</div> </section> <SmartFooter /> </div>) 
}