const filteredServices = selectedCategory === 'all' ? allServices : allServices.filter (service => service.category === selectedCategory)
const containerVariants = {
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
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<> <Head> <title>Cutting-Edge Pricing 2025 - Zion Tech Group | Future Technology Solutions</title> > Cutting-Edge <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90" > Pricing 2025 </span> </motion.h1> <motion.p > Experience revolutionary technology at competitive prices. Our cutting-edge services are designed to give you a competitive advantage while maintaining affordability and value. </motion.p> {
  /* Hero Stats */ 
}<motion.div </div>) ) 
}</motion.div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Flexible </span> {
  ' ' 
}Pricing Plans </h2> <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Choose the perfect plan for your business needs. All plans include our cutting-edge technology and world-class support to ensure your success. </p> </motion.div> <motion.div key= {
  index 
}initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: index * 0.1 
}
}viewport= {
  {
  once: true 
}
}className= {
  `relative group $ {
  tier.popular ? 'scale-105' : '' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <a href= {
  tier.ctaLink 
}className= {
  `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 $ {
  tier.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25': 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10' 
}` 
}> </a> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Service </span> {
  ' ' 
}Categories </h2> <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Explore our comprehensive range of cutting-edge services across multiple technology domains. Each category offers specialized solutions for different business needs. </p> </motion.div> <button onClick= {
  () => setSelectedCategory ('all') 
}className= {
  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === 'all'? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white': 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' 
}` 
}> All Categories ({
  allServices.length 
}) </button> {
  serviceCategories.map ( (category) => (<button key= {
  category.name 
}onClick= {
  () => setSelectedCategory (category.name) 
}className= {
  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category.name ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white': 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' 
}` 
}> {
  category.name 
}({
  category.services.length 
}) </button>) ) 
}</div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}</p> </div> <div className="ml-4" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center" > <Star className="w-6 h-6 text-cyan-400" /> </div> </div> </div> <span key= {
  tagIndex 
}className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20" > {
  tag 
}</span>) ) 
}</div> > Learn More <ExternalLink className="ml-1 w-4 h-4" /> </a> <a href="/contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Get Started <ArrowRight className="ml-2 w-4 h-4" /> </a> </div> </div> </motion.div>) ) 
}</motion.div> </div> </section> <motion.div initial= {
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
}> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" > Ready to Get Started? </h2> <p className="text-xl text-white/80 mb-8 leading-relaxed" > Our team of experts is ready to help you choose the perfect plan and get you started with our cutting-edge technology solutions. Contact us today for a personalized consultation. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" > <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25" > Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /> </a> <a > <Phone className="mr-2 w-5 h-5" /> Call Now </a> </div> </a> </div> <div className="flex flex-col items-center" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3" > <Mail className="w-6 h-6 text-cyan-400" /> </div> </a> </div> <div className="flex flex-col items-center" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3" > <MapPin className="w-6 h-6 text-cyan-400" /> </div> </div> </div> </motion.div> </div> </section> </Layout> </>) 
}