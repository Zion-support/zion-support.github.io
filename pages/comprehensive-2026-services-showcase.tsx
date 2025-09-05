 //Combine all services const allServices = [ ...nextGenAIServices2026;
...revolutionaryITInfrastructure2026;
...innovativeMicroSaas2026 ];
//Categories for filtering //Filter and sort services const filteredServices = allServices .filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || case 'rating': return b.rating - a.rating;
case 'customers': const containerVariants = {
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
  y: 20, opacity: 0 
};
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
};
</Head> <UltraAdvancedNavigation /> <motion.div initial= {
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
}> <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6" > Comprehensive 2026 <br /> <span className="text-6xl md:text-8xl" >Services Showcase</span> </h1> </div> <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30" > <div className="text-3xl font-bold text-purple-400 mb-2" >15+</div> <div className="text-gray-300" >Categories</div> </div> <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30" > <div className="text-3xl font-bold text-green-400 mb-2" >4.8+</div> <div className="text-gray-300" >Avg Rating</div> </div> <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30" > <div className="text-3xl font-bold text-orange-400 mb-2" >1000+</div> <div className="text-gray-300" >Happy Customers</div> </div> </div> </div> </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-cyan-600 border-cyan-500 text-white' : 'bg-gray-800/50 border-gray-600/30 text-gray-300 hover:border-cyan-500/50' 
}` 
}> </span> </button>) ) 
}</div> > <option value="popularity" >Most Popular</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> </select> <div className="flex bg-gray-800/50 rounded-xl p-1 border border-gray-600/30" > <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" > <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> </svg> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" > <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /> </svg> </button> </div> </div> </div> </div> </div> </section> > <AnimatePresence> {
  filteredServices.map ( (service) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}layout className= {
  `bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-600/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 group $ {
  viewMode === 'list' ? 'flex flex-col lg:flex-row' : '' 
}` 
}> Popular </div>) 
}</div> </div> </div> </div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> > Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </Link> <button className="bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold py-3 px-6 rounded-xl border border-gray-600/30 transition-all duration-300 flex items-center justify-center gap-2" > <Phone className="w-4 h-4" /> Contact </button> </div> </div> </motion.div>) ) 
}</AnimatePresence> </motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 leading-relaxed" > Our team of experts is ready to help you implement the perfect solution for your business needs. Get started today with a free consultation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link > <Mail className="w-5 h-5" /> Email Us </Link> </div> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) 
}