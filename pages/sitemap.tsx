 </Head> <SmartHeader /> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Site Map </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="#main-pages" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105" > Explore Site <ArrowRight className="w-5 h-5 ml-2" /> </Link> <a href="/search" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Search Site <Search className="w-5 h-5 ml-2" /> </Link> </div> </motion.div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > Main Pages </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Core pages that provide essential information about our company and services </p> </motion.div> </h3> <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" /> </div> </Link> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > Service Categories </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Browse our comprehensive range of technology solutions organized by category </p> </motion.div> </h3> <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" /> </div> </Link> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > Featured Services </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Our most popular and innovative technology solutions </p> </motion.div> </h3> <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" /> </div> </Link> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > Resources & Tools </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Additional resources, tools, and information to help you succeed </p> </motion.div> </h3> <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" /> </div> </Link> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > External Resources </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Additional resources and tools hosted on external platforms </p> </motion.div> </h3> <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" /> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4 text-center" > Contact Information </h2> <p className="text-white/60 text-center max-w-2xl mx-auto" > Get in touch with us for consultations, support, or to start your project </p> </motion.div> </motion.div>) ) 
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
}> Need Help Finding Something? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Use our search functionality or contact us directly for assistance </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/search" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" > Search Site <Search className="w-5 h-5 ml-2" /> </Link> <Link href="/contact" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Contact Support <Mail className="w-5 h-5 ml-2" /> </Link> </div> </motion.div> </div> </section> <SmartFooter /> </div>) 
}