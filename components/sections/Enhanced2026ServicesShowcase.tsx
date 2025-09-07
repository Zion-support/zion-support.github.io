> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > 2026 Revolutionary Services </span> </h2> </p> </motion.div> {
  /* Category Overview */ 
}<motion.div > {
  categories.map ( (category, index) => (<motion.div key= {
  category.name 
}</motion.div>) ) 
}</motion.div> </li>) ) 
}</ul> </div> > Learn More <ArrowRight className="w-4 h-4 ml-1" /> </a> </div> </div> </motion.div>) ) 
}</div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8" > <h3 className="text-2xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-gray-300 mb-6 max-w-2xl mx-auto" > Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation. </p> <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6" > <motion.div whileHover= {
  {
  scale: 1.05 
}
}whileTap= {
  {
  scale: 0.95 
}
}transition= {
  {
  duration: 0.2 
}
}> <Link href="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200" > <Rocket className="w-5 h-5 mr-2" /> View All Services </a> </motion.div> <motion.div whileHover= {
  {
  scale: 1.05 
}
}whileTap= {
  {
  scale: 0.95 
}
}transition= {
  {
  duration: 0.2, delay: 0.1 
}
}> <Link > <Shield className="w-5 h-5 mr-2" /> Get Started </a> </motion.div> </div> </div> </motion.div> </div> </section>) 
}
export default Enhanced2026ServicesShowcase