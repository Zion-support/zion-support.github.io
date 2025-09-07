export default function DeFiNexusPlatform () {
  return (<Layout> <Head> <title>DeFi Nexus Platform | Zion Tech Group</title> </Head> {
  /* Hero Section */ 
}<section className="relative min-h-screen flex items-center justify-center overflow-hidden" > <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" ></div> </div> <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" > <motion.div > <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6" > <TrendingUp className="w-4 h-4 mr-2" /> DeFi & Blockchain </div> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent" > DeFi Nexus </span> <br /> <span className="text-white" >Platform</span> </h1> </p> </motion.div> {
  /* CTA Buttons */ 
}<motion.div > <a href="#pricing" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105" > <Target className="w-5 h-5 mr-2" /> Get Started </a> <a href="#contact" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-green-500/30 text-green-400 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300" > <Phone className="w-5 h-5 mr-2" /> Contact Sales </a> </motion.div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Revolutionary DeFi Technology </h2> > <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4" > <CheckCircle className="w-6 h-6 text-white" /> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Choose Your Plan </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors. </p> </motion.div> <motion.div key= {
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
  `relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 $ {
  plan.popular ? 'border-green-500/50 scale-105' : 'border-green-500/20' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300" > Get Started </button> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Ready to Transform DeFi? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <motion.div > <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Phone className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Mail className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <MapPin className="w-8 h-8 text-white" /> </div> </motion.div> </div> </div> </section> </Layout>) 
}
