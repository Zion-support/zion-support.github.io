<motion.div initial= {
  {
  opacity: 0, y: 20 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent" > Industry Solutions </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" > Tailored technology solutions designed for your industry's unique challenges and opportunities </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105" > Get Started </Link> <a href="/contact" className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Demo </Link> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" > Solution Capabilities </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Comprehensive capabilities to deliver industry-specific technology solutions </p> </motion.div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" > Industry Solutions </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Choose from our comprehensive suite of industry-specific solutions </p> </motion.div> <motion.div key= {
  solution.id 
}initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.6, delay: index * 0.1 

}viewport= {
  {
  once: true 

}className= {
  `relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 $ {
  solution.popular ? 'border-orange-500 shadow-lg shadow-orange-500/25': 'border-gray-700 hover:border-orange-500' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <a href="/contact" className="w-full block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300" > Get Started </Link> </motion.div>) ) 
}</div> <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" > Industry Solutions </h1> <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8" > Tailored technology solutions designed specifically for your industry's unique challenges and opportunities. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300" > Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" /> </Link> <Link href="/demo" className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10" > Request Demo </Link> </div> </motion.div> </div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> Ready for Industry Transformation? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Partner with us to build industry-specific solutions that drive your business forward </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105" > Start Your Transformation </Link> <a href="/contact" className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Schedule Consultation </Link> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticBackground>) 
};
export default Solutions;
