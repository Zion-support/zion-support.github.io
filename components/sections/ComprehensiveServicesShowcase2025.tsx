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
> <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6" > Revolutionary 2025 Services </h2> </p> </motion.div> {
  /* Service Categories */ 
}<motion.div > {
  serviceCategories.map ( (category, categoryIndex) => (<motion.div key= {
  category.title 
}</p> </div> </div> + {
  service.features.length - 3 
}more features </li>) 
}</ul> </div> </div> </div> </div> <span key= {
  useCaseIndex 
}className="px-2 py-1 bg-slate-700/50 text-xs text-gray-300 rounded-full" > {
  useCase 
}</span>) ) 
}</div> </div> > Learn More <ArrowRight className="w-4 h-4 ml-2" /> </a> </div> </motion.div>) ) 
}</div> </motion.div>) ) 
}</motion.div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30" > <h3 className="text-3xl font-bold text-white mb-4" > Ready to Transform Your Business? </h3> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join thousands of businesses already leveraging our cutting-edge solutions to drive innovation, efficiency, and growth. </p> <a href="https://ziontechgroup.com/contact" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30" > Get Started Today <Rocket className="w-5 h-5 ml-2" /> </a> <a href="tel:+13024640950" className="inline-flex items-center justify-center px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600/50 transition-all duration-200 border border-slate-600" > Call +1 302 464 0950 <Phone className="w-5 h-5 ml-2" /> </a> </div> </div> </motion.div> </div> </section>) 
};
export default ComprehensiveServicesShowcase2025;
