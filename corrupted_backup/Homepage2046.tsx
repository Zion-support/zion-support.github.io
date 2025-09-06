 />) ) 
}</div> {
  /* Quantum loading animation */ 
}<motion.div > <div className="relative" > <motion.div 
}
}className="w-32 h-32 mx-auto mb-8" > <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 rounded-full blur-xl opacity-40 animate-pulse" ></div> <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center" > <Brain className="w-16 h-16 text-white" /> </div> </motion.div> </div> <motion.h1 > Zion Tech Group 2046 </motion.h1> <p className="text-xl text-gray-300 mb-3" >Quantum AI • Neural Interfaces • Space Technology</p> <p className="text-lg text-gray-400" >Preparing your revolutionary digital transformation journey</p> /> </div> </motion.div> </div>);
return () => clearTimeout (timer) 
}, []);
//Intersection Observer for better performance useEffect ( () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
  const observer = new (window as any) .IntersectionObserver ( (entries: unknown[]) => {
  entries.forEach ( (entry) => {
  if (entry.isIntersecting) {
  return () => observer.disconnect () 
}
}, []);
const allServices = [ ...innovative2046AIServices;
...innovative2046ITServices;
...innovative2046MicroSAASServices ];
{
  /* Floating orbs */ 
}{
  [...Array (20) ].map ( (, i) => (<motion.div key= {
  i 
}/>) ) 
}</div> <motion.div initial= {
  {
  opacity: 0, y: 50 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 1 
}
}> <motion.h1 > <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent" > Zion Tech Group </span> </motion.h1> <motion.p > Revolutionary <span className="text-cyan-400 font-semibold" >Quantum AI</span>;
<span className="text-purple-400 font-semibold" > Neural Interfaces</span>, and <span className="text-cyan-400 font-semibold" > Space Technology</span> Solutions </motion.p> <motion.div > <Link href="/services" > <motion.button > Explore Services <ArrowRight className="w-5 h-5" /> </motion.button> </a> <Link href="/contact" > <motion.button > Get Started <Rocket className="w-5 h-5" /> </motion.button> </a> </motion.div> </motion.div> {
  /* Contact Information */ 
}<motion.div > <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center" > <div className="flex flex-col items-center" > <Phone className="w-6 h-6 text-cyan-400 mb-2" /> <p className="text-sm text-gray-300" >Phone</p> <p className="text-white font-semibold" >+1 302 464 0950</p> </div> <div className="flex flex-col items-center" > <Mail className="w-6 h-6 text-purple-400 mb-2" /> <p className="text-sm text-gray-300" >Email</p> <p className="text-white font-semibold" >kleber@ziontechgroup.com</p> </div> <div className="flex flex-col items-center" > <MapPin className="w-6 h-6 text-cyan-400 mb-2" /> <p className="text-sm text-gray-300" >Address</p> <p className="text-white font-semibold text-sm" >364 E Main St STE 1008<br />Middletown DE 19709</p> </div> </div> </motion.div> </div> </section> > <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Revolutionary Services </span> </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our cutting-edge quantum AI, neural interface, and space technology solutions that are transforming industries worldwide. </p> </motion.div> {
  /* Search and Filter */ 
}<motion.div > <div className="flex flex-col md:flex-row gap-4 justify-center items-center" > <div className="relative flex-1 max-w-md" > <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> <input key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-black/30 border border-cyan-400/30 text-gray-300 hover:border-cyan-400 hover:text-cyan-400' 
}` 
}> {
  category === 'all' ? 'All Categories' : category 
}</button>) ) 
}</div> </div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}> <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 h-full" > <div className="flex items-start justify-between mb-4" > <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center" > <Brain className="w-6 h-6 text-white" /> </div> <Star key= {
  i 
}className= {
  `w-4 h-4 $ {
  i < Math.floor (service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600' 
}` 
}/>) ) 
}</div> </div> </div> </li>) ) 
}</ul> </div> > Learn More <ArrowUpRight className="w-4 h-4" /> </motion.button> </a> </div> </div> </div> </div> </motion.div>) ) 
}</motion.div> {
  /* Call to Action */ 
}<motion.div > <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30" > <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" > Ready to Transform Your Business? </h3> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join the future with our revolutionary quantum AI, neural interface, and space technology solutions. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" > <motion.button > Get Started Today </motion.button> </a> <Link href="/services" > <motion.button 
};
export default Homepage2046;
