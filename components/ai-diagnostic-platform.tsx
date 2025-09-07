export default function AIDiagnosticPlatform () {
  return (<Layout> <Head> <title>AI Diagnostic Pro Platform | Zion Tech Group</title> </Head> {
  /* Hero Section */ 
}<section className="relative min-h-screen flex items-center justify-center overflow-hidden" > <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" ></div> </div> <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" > <motion.div > <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6" > <Stethoscope className="w-4 h-4 mr-2" /> Healthcare Technology </div> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent" > AI Diagnostic </span> <br /> <span className="text-white" >Pro Platform</span> </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" > Advanced medical diagnostic platform using AI and machine learning to provide accurate disease detection and treatment recommendations. </p> </motion.div> {
  /* CTA Buttons */ 
}<motion.div > <a href="#pricing" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105" > <Target className="w-5 h-5 mr-2" /> Get Started </a> <a href="#contact" className="inline-flex items-center px-8 py-4 rounded-full border-2 border-blue-500/30 text-blue-400 font-semibold text-lg hover:bg-blue-500/10 transition-all duration-300" > <Phone className="w-5 h-5 mr-2" /> Contact Sales </a> </motion.div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Revolutionary Medical Technology </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Experience the future of medical diagnostics with AI-powered analysis and comprehensive healthcare solutions. </p> </motion.div> > <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4" > <CheckCircle className="w-6 h-6 text-white" /> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Choose Your Plan </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Flexible pricing options designed for healthcare providers of all sizes, from clinics to large hospital systems. </p> </motion.div> <motion.div key= {
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
  `relative bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border rounded-2xl p-8 $ {
  plan.popular ? 'border-blue-500/50 scale-105' : 'border-blue-500/20' 
}` 
}> Most Popular </span> </div>) 
}</li>) ) 
}</ul> <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300" > Get Started </button> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Healthcare? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Contact our team to learn more about how AI Diagnostic Pro Platform can revolutionize your medical practice. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <motion.div > <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Phone className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Mail className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <MapPin className="w-8 h-8 text-white" /> </div> </motion.div> </div> </div> </section> </Layout>) 
}