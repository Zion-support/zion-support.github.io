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
> <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6" > Revolutionary Technology Services </h2> <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Discover our comprehensive suite of cutting-edge AI, quantum computing, and emerging technology solutions. Each service is designed to transform your business and propel you into the future. </p> </motion.div>) ) 
}</div> </motion.div> {
  /* Search and Filter */ 
}<motion.div /> <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> </div> {
  /* Category Filter */ 
}<select </option>) ) 
}</select> </div> </motion.div> {
  /* Service Categories */ 
}<motion.div key= {
  category.id 
}initial= {
  {
  opacity: 0, y: 20 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.5, delay: index * 0.1 
}
}viewport= {
  {
  once: true 
}
}className= {
  `p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer $ {
  selectedCategory === category.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/20 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/5' 
}` 
}onClick= {
  () => setSelectedCategory (category.id === selectedCategory ? 'all' : category.id) 
}> </div> </motion.div>) ) 
}</div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}Popular </div>) 
}+ {
  service.features.length - 3 
}more features </div>) 
}</div> > Get Started <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" /> </a> <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200" > <Eye className="w-4 h-4" /> </button> </div> </div> </div> </motion.div>) ) 
}</motion.div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm" > <h3 className="text-3xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Join thousands of businesses already leveraging our cutting-edge technology solutions. Get started today and experience the future of business automation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-lg" > Start Your Free Trial </a> <a href="/pricing-2034" className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg" > View Pricing </a> </div> </div> </div> </motion.div> </div> </section>) 
}