'use client'
> {
  /* Badge */ 
}<motion.div > <Star className="w-5 h-5 text-yellow-400 fill-current" /> <span className="text-white font-medium" >Leading Technology Solutions Provider</span> </motion.div> {
  /* Main Heading */ 
}<motion.h1 > Transform Your Business with <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Cutting-Edge Technology </span> </motion.h1> {
  /* Subtitle */ 
}<motion.p > From AI development to cloud architecture, we help companies revolutionize their digital presence and achieve sustainable growth in the modern technology landscape. </motion.p> {
  /* CTA Buttons */ 
}<motion.div > <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1" > Get Started Today <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> </a> <button className="group flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-300" > <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-blue-400 transition-colors" > <Play className="w-6 h-6 ml-1" /> </div> <span className="text-lg font-medium" >Watch Demo</span> </button> </motion.div> {
  /* Stats */ 
}<motion.div > {
  stats.map ( (stat, index) => (<motion.div key= {
  stat.label 
}> <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20 group-hover:border-blue-400 transition-colors" > <stat.icon className="w-8 h-8 text-blue-400" /> </div> </motion.div>) ) 
}</motion.div> </motion.div> </div> {
  /* Scroll Indicator */ 
}<motion.div /> </motion.div> </motion.div> </section>) 
}
export default HeroSection