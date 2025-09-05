 return (<Layout> <SEO /> <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white" > {
  /* Hero Section */ 
}<section className="relative py-20 px-4 overflow-hidden" > <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse" ></div> <div className="relative z-10 max-w-7xl mx-auto text-center" > <motion.h1 > 2036 Services Showcase </motion.h1> <motion.p > Experience the future of technology with our revolutionary portfolio of AI, Quantum Computing, Space Technology, and cutting-edge IT solutions </motion.p> <motion.div > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg" > Get Started Today </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > View Pricing </button> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Revolutionary Service Categories </h2> </span> </div> </motion.div>) ) 
}</div> {
  /* Featured Services */ 
}<motion.div > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Featured Revolutionary Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our most innovative and game-changing services that are reshaping industries and defining the future of technology. </p> </motion.div> Popular </span>) 
}</div> </div>) ) 
}</div> <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105" > Learn More </button> </motion.div>) ) 
}</div> {
  /* All Services Section */ 
}<motion.div > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Complete Service Portfolio </h2> </p> </motion.div> {
  /* Services by Category */ 
}{
  categories.map ( (category, categoryIndex) => (<motion.div key= {
  category 
}.filter (service => service.category === category) .map ( (service, serviceIndex) => (<motion.div key= {
  service.id 
}Popular </span>) 
}</div> </div>) ) 
}</div> <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm" > View Details </button> </motion.div>) ) 
}</div> </motion.div>) ) 
}{
  /* Call to Action */ 
}<motion.div > <h2 className="text-4xl font-bold mb-6 text-white" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future of technology with our revolutionary services. Get in touch to discuss how we can help you achieve your goals. </p> Contact Us Today </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Demo </button> </div> </motion.div> </div> </section> </div> </Layout>) 
};
export default ComprehensiveServicesShowcase2036;
