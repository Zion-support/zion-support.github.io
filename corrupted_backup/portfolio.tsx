
</Head> <EnhancedNavigation /> > <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Our Work </h1> <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed" > Innovative technology solutions that drive business transformation and growth </p> </motion.div> <motion.div > <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8" > Discover how we've helped organizations leverage cutting-edge technology to solve complex challenges and achieve remarkable results. </p> </motion.div> </div> </section> > <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4" > <stat.icon className="w-8 h-8 text-cyan-400" /> </div> </motion.div>) ) 
}</div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-6 py-3 rounded-full font-semibold transition-all duration-300 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white': 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> </div> </section> </span>) ) 
}</div> </div> </li>) ) 
}</ul> </div> View Details </button> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
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
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Start Your Project? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how we can help you achieve similar results with our innovative technology solutions. </p> Start Your Project </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Schedule Consultation </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>) 
}