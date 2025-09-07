'use client'
const ServicesSection: React.FC = () => {
  const services = [ {
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
> <Zap className="w-5 h-5 text-blue-400" /> <span className="text-blue-400 font-medium" >Our Services</span> </motion.div> <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" > Comprehensive Technology <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" > Solutions </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" > We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for businesses across all industries. </p> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  services.map ( (service, index) => (<motion.div key= {
  service.title 
}</li>) ) 
}</ul> {
  /* CTA */ 
}<Link > <span className="font-medium" >Learn More</span> <ArrowRight className="w-4 h-4" /> </a> </div> </motion.div>) ) 
}</motion.div> {
  /* Bottom CTA */ 
}<motion.div > <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 max-w-2xl mx-auto" > <h3 className="text-2xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </a> </div> </motion.div> </div> </section>) 
}
export default ServicesSection