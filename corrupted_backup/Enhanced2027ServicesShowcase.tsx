
  /* Search and Filters */ 
}<motion.div /> </div> </div> > {
  categories.map ( (category) => (<option key= {
  category 
}value= {
  category 
}> {
  category === 'all' ? 'All Categories' : category 
}</option>) ) 
}</select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> </div> > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="roi" >Sort by ROI</option> </select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> </div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-200 $ {
  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-200 $ {
  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> </div> </div> </motion.div> {
  /* Results Count */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}</li>) ) 
}</ul> </div> <span key= {
  idx 
}className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50" > {
  tag 
}</span>) ) 
}</div> {
  /* CTA */ 
}<Link > <span>Learn More</span> <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </a> </div> </motion.div>) ) 
}</motion.div> > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}<span key= {
  idx 
}className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50" > {
  tag 
}</span>) ) 
}</div> </div> > <span>Learn More</span> <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div>) 
}</AnimatePresence> > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-white mb-4" >No services found</h3> <p className="text-gray-400 mb-8" > Try adjusting your search terms or category filter to find what you're looking for. </p> <button > Clear Filters </button> </motion.div>) 
}{
  /* CTA Section */ 
}<motion.div > Ready to Transform Your Business? </h3> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Our team of experts is ready to help you implement these revolutionary services and achieve unprecedented growth. Let's build the future together. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25" > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </a> <Link href="/pricing" className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50" > <span>View Pricing</span> <TrendingUp className="w-5 h-5" /> </a> </div> </div> </motion.div> </div> </section>) 
};

export default Enhanced2027ServicesShowcase;
