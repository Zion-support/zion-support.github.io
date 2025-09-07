//Import our enhanced components import EnhancedNavigation from './layout/EnhancedNavigation'
import EnhancedServiceCard from './ui/EnhancedServiceCard'
import PerformanceMonitor from './PerformanceMonitor'
import UltraFuturisticBackground from './ui/UltraFuturisticBackground'
//Import service data window.addEventListener ('mousemove', handleMouseMove)
//Combine all revolutionary services const allRevolutionaryServices = [ ...revolutionary2044AdvancedMicroSaas
...revolutionary2044ITServices
...revolutionary2044AIServices
...realEnterpriseMicroSaas2025
...innovativeITServicesExpansion2025V3
...innovativeAIServicesExpansion2025V3...innovative2025ITInfrastructureServices
...innovative2025AIAutonomousServices ]
//Filter services by category //Animation variants const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  duration: 0.8, staggerChildren: 0.1 
}
}
}
}
}
}
}
}
}
return (<> <Head> <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title> </Head> {
  /* Enhanced Navigation */ 
}<EnhancedNavigation /> > Zion Tech Group </motion.h1> <motion.p > Pioneering the Future of Technology with Revolutionary AI Consciousness, Quantum Computing, and Autonomous Solutions </motion.p> {
  /* CTA Buttons */ 
}<motion.div > <Link href="/services" > <motion.button > Explore Services <ArrowRight className="inline-block ml-2 w-5 h-5" /> </motion.button> </a> <Link href="/quote" > <motion.button > Get Quote <ArrowUpRight className="inline-block ml-2 w-5 h-5" /> </motion.button> </a> </motion.div> {
  /* Contact Information */ 
}<motion.div > <div className="flex items-center space-x-2" > <Phone className="w-4 h-4 text-cyan-400" /> <span>+1 302 464 0950</span> </div> <div className="flex items-center space-x-2" > <Mail className="w-4 h-4 text-cyan-400" /> <span>kleber@ziontechgroup.com</span> </div> <div className="flex items-center space-x-2" > <MapPin className="w-4 h-4 text-cyan-400" /> <span>364 E Main St STE 1008 Middletown DE 19709</span> </div> </motion.div> </div> {
  /* Floating Elements */ 
}<motion.div > <Atom className="w-8 h-8" /> </motion.div> <motion.div > <Brain className="w-6 h-6" /> </motion.div> <motion.div > <Rocket className="w-7 h-7" /> </motion.div> </motion.section> {
  /* Category Filter */ 
}<motion.section > <div className="max-w-6xl mx-auto" > <motion.h2 > Explore Our Revolutionary Services </motion.h2> <motion.div > {
  categories.map ( (category) => (<motion.button key= {
  category.id 
}onClick= {
  () => handleCategoryChange (category.id) 
}className= {
  `px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r ' + category.color + 'text-white shadow-2xl' : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600' 
}` 
}whileHover= {
  {
  scale: 1.05 
}
}whileTap= {
  {
  scale: 0.95 
}
}> </motion.button>) ) 
}</motion.div> </div> </motion.section> {
  /* Services Grid */ 
}<motion.section > <div className="max-w-7xl mx-auto" > <motion.div > {
  getFilteredServices () .slice (0, 12) .map ( (service, index) => (<EnhancedServiceCard key= {
  service.id 
}
}</motion.div> {
  getFilteredServices () .length > 12 && (<motion.div className="text-center mt-12" variants= {
  itemVariants 
}> <Link href="/services" > <motion.button > View All Services <ArrowRight className="inline-block ml-2 w-5 h-5" /> </motion.button> </a> </motion.div>) 
}</div> </motion.section> {
  /* Featured Service Showcase */ 
}<motion.section > <div className="max-w-6xl mx-auto" > <motion.h2 > Featured Revolutionary Services </motion.h2> <motion.div > <AnimatePresence mode="wait" > <motion.div </span>) ) 
}</div> <Link href= {
  `/services/$ {
  (featuredServices[currentServiceIndex] as any) ?.slug || featuredServices[currentServiceIndex]?.id 
}` 
}> <motion.button > Learn More <ArrowRight className="inline-block ml-2 w-4 h-4" /> </motion.button> </a> </div> <div className="relative" > <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center" > <div className="text-center" > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" > <Rocket className="w-8 h-8 text-white" /> </div> <p className="text-cyan-400 font-medium" >Revolutionary Technology</p> </div> </div> </div> </motion.div> </AnimatePresence> </motion.div> </div> </motion.section> {
  /* Call to Action */ 
}<motion.section > <div className="max-w-4xl mx-auto text-center" > <motion.h2 > Ready to Transform Your Business? </motion.h2> <motion.p > Join the future of technology with Zion Tech Group's revolutionary solutions. Get started today and experience the power of AI consciousness and quantum computing. </motion.p> <motion.div > <Link href="/quote" > <motion.button > Get Started Today <ArrowRight className="inline-block ml-2 w-5 h-5" /> </motion.button> </a> <Link href="/contact" > <motion.button > Contact Us <Phone className="inline-block ml-2 w-5 h-5" /> </motion.button> </a> </motion.div> </div> </motion.section> </UltraFuturisticBackground> {
  /* Performance Monitor */ 
}<AnimatePresence> {
  showPerformanceMonitor && (<PerformanceMonitor />) 
}</AnimatePresence> </>) 
}
export default EnhancedHomepage
