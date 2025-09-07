const filteredServices = activeCategory === 'all' ? allServices const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
}
const itemVariants = {
  hidden: {
  opacity: 0, y: 20 
}
visible: {
  opacity: 1, y: 0, transition: {
  duration: 0.5 
}
}
}
> <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" > Revolutionary 2025 </span> <br /> <span className="text-white" >Services</span> </h2> Transform your business with services that were once science fiction. </p> </motion.div> {
  /* Category Filter */ 
}<motion.div > {
  categories.map ( (category) => (<button key= {
  category.id 
}activeCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50' 
}` 
}> </span> </button>) ) 
}</motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.slice (0, visibleServices) .map ( (service, index) => (<motion.div key= {
  service.id 
}POPULAR </div>) 
}> <span>Get Started</span> <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" /> </a> <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5" > Learn More </button> </div> </div> </div> </div> </motion.div>) ) 
}</motion.div> {
  /* Load More Button */ 
}{
  visibleServices < filteredServices.length && (<motion.div > Load More Revolutionary Services </button> </motion.div>) 
}{
  /* Call to Action */ 
}<motion.div > <h3 className="text-3xl font-bold text-white mb-4" > Ready to Experience the Future? </h3> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the revolution with our cutting-edge AI, quantum, and emerging technology services. Transform your business and stay ahead of the competition. </p> <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40" > Start Your Transformation </a> <a href="/pricing" className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300" > View Pricing </a> </div> </motion.div> </div> </section>) 
}
export default RevolutionaryServicesShowcase