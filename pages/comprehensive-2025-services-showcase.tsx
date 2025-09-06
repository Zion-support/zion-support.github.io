 const filteredServices = innovative2025MicroSaasExpansionV3 .filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || case 'popularity': return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
case 'price': case 'rating': return b.rating - a.rating;
case 'newest': const containerVariants = {
  hidden: {
  opacity: 0 
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
};
const itemVariants = {
  hidden: {
  opacity: 0, y: 20 
};
visible: {
  opacity: 1, y: 0, transition: {
  duration: 0.5 

};
<motion.div initial= {
  {
  opacity: 0, y: 30 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent" > 2025 Innovative Services Showcase </h1> </div> <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold" > AI-Powered Solutions </div> <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-full text-lg font-semibold" > Quantum-Ready Technology </div> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white' 
}` 
}> {
  category.name 
}({
  category.count 
}) </button>) ) 
}</div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white/70 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> <select > <option value="popularity" >Most Popular</option> <option value="price" >Price: Low to High</option> <option value="rating" >Highest Rated</option> <option value="newest" >Newest First</option> </select> </div> </div> </div> </section> > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl' : 'p-6 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300' 
}` 
}> POPULAR </div>) 
}+ {
  service.features.length - 3 
}more features </div>) 
}</div> </div> > Learn More <ExternalLink className="w-4 h-4" /> </Link> <button className="px-6 py-3 border border-white/20 hover:border-cyan-400/30 rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white/5" > Contact Sales </button> </div> </div> </div> </motion.div>) ) 
}</motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> Ready to Transform Your Business? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Our team of experts is ready to help you implement these cutting-edge solutions and drive innovation in your organization. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2" > Schedule Consultation <ArrowRight className="w-5 h-5" /> </Link> <a href="tel:+13024640950" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Call Us Now </Link> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 