 const categories = [ {
  //Sort categories const sortedCategories = [...filteredCategories].sort ( (a, b) => {
  switch (sortBy) {
  case 'popularity': return b.serviceCount - a.serviceCount;
case 'name': return a.name.localeCompare (b.name);
case 'featured': </Head> <SmartHeader /> <motion.div initial= {
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
}> <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6" > Explore Technology Categories </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105" > Start Exploring <ArrowRight className="w-5 h-5 ml-2" /> </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View All Services </button> </div> </motion.div> </div> </section> /> </div> </div> > <option value="popularity" >Sort by Popularity</option> <option value="name" >Sort by Name</option> <option value="featured" >Sort by Featured</option> </select> </div> </div> </div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4" > Featured Services </h2> <p className="text-white/60" > Explore our most innovative and cutting-edge technology solutions </p> </motion.div> service.status === 'active' ? 'bg-green-500/20 text-green-300' : service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-blue-500/20 text-blue-300' 
}` 
}> {
  service.status 
}</span> > Learn More <ChevronRight className="w-4 h-4 ml-1" /> </Link> </div> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-3xl font-bold text-white mb-4" > Technology Categories </h2> > <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center" > <Search className="w-12 h-12 text-white/40" /> </div> <h3 className="text-2xl font-semibold text-white mb-2" >No categories found</h3> <p className="text-white/60 mb-6" > Try adjusting your search terms </p> <button > Clear Search </button> </motion.div> ⭐ Featured </span> </div>) 
}</div> </div> </div> Explore Category </span> <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1" /> </div> </div> </motion.div>) ) 
}</div>) 
}</AnimatePresence> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Emerging Technology Trends </h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Stay ahead of the curve with our insights into the latest technology developments </p> </motion.div> {
  icon: Brain, title: 'AI Consciousness', description: 'The evolution of AI towards true consciousness and emotional intelligence', trend: 'Rising', color: 'from-purple-500 to-pink-500' 
};
{
  icon: Atom, title: 'Quantum Supremacy', description: 'Breakthroughs in quantum computing and quantum AI applications', trend: 'Breakthrough', color: 'from-blue-500 to-cyan-500' 
};
{
  icon: Shield, title: 'Quantum Security', description: 'Quantum-resistant cryptography and AI-powered threat detection', trend: 'Critical', color: 'from-red-500 to-orange-500' 
};
{
  icon: Rocket, title: 'Space Innovation', description: 'AI-powered space exploration and resource optimization', trend: 'Emerging', color: 'from-indigo-500 to-purple-500' 
};
{
  icon: ZapIcon, title: 'Neural Interfaces', description: 'Brain-computer interfaces and neural augmentation', trend: 'Experimental', color: 'from-pink-500 to-rose-500' 
};
{
  icon: TrendingUp, title: 'Autonomous Systems', description: 'Self-improving AI systems and autonomous business operations', trend: 'Growing', color: 'from-emerald-500 to-green-500' 
}].map ( (trend, index) => (<motion.div trend.trend === 'Rising' ? 'bg-green-500/20 text-green-300' : trend.trend === 'Breakthrough' ? 'bg-blue-500/20 text-blue-300' : trend.trend === 'Critical' ? 'bg-red-500/20 text-red-300' : trend.trend === 'Emerging' ? 'bg-yellow-500/20 text-yellow-300' : trend.trend === 'Experimental' ? 'bg-purple-500/20 text-purple-300' : 'bg-cyan-500/20 text-cyan-300' 
}` 
}> {
  trend.trend 
}</span> </div> </motion.div>) ) 
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
}> Ready to Explore? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Dive deep into our technology categories and discover the perfect solutions for your business needs. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="/services" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" > View All Services <ArrowRight className="w-5 h-5 ml-2" /> </Link> <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Get Expert Guidance </Link> </div> </motion.div> </div> </section> <SmartFooter /> </div>) 
}