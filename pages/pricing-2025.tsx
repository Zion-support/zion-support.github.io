const filteredServices = innovative2025MicroSaasExpansionV3.filter (service => selectedCategory === 'all' || service.category.includes (selectedCategory) );
const containerVariants = {
  hidden: {
  opacity: 0 
};
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 


};
const itemVariants = {
  hidden: {
  opacity: 0, y: 20 
};
visible: {
  opacity: 1, y: 0, transition: {
  duration: 0.5 


};
<motion.div initial= {
  {
  opacity: 0, y: 30 

}animate= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}> <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent" > 2025 Pricing & Services </h1> Monthly </span> <button onClick= {
  () => setBillingCycle (billingCycle === 'monthly' ? 'annual' : 'monthly') 
}className= {
  `relative w-16 h-8 rounded-full transition-all duration-300 $ {
  billingCycle === 'annual' ? 'bg-cyan-500' : 'bg-white/20' 
}` 
}> <div className= {
  `absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 $ {
  billingCycle === 'annual' ? 'right-1' : 'left-1' 
}` 
}/> </button> <span className= {
  `text-lg $ {
  billingCycle === 'annual' ? 'text-white' : 'text-white/60' 
}` 
}> Annual <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full" > Save 20% </span> </span> </div> </motion.div> </div> </section> key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white' 
}` 
}> <span> {
  category.icon 
}</span> {
  category.name 
}</button>) ) 
}</div> </div> </section> > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl $ {
  service.popular ? 'ring-2 ring-cyan-400/50' : '' 
}` 
}> MOST POPULAR </div>) 
}</p>) 
}</div> <Star key= {
  i 
}className= {
  `w-4 h-4 $ {
  i < Math.floor (service.rating) ? 'text-yellow-400 fill-current': 'text-white/20' 
}` 
}/>) ) 
}</div> + {
  service.features.length - 5 
}more features </div>) 
}</div> </div> </div> </div> </div> > Get Started <ExternalLink className="w-4 h-4" /> </Link> <a > Contact Sales </Link> </div> </div> </div> </motion.div>) ) 
}</motion.div> <button onClick= {
  () => setSelectedCategory ('all') 
}className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300" > View All Services </button> </div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 30 

}whileInView= {
  {
  opacity: 1, y: 0 

}transition= {
  {
  duration: 0.8 

}viewport= {
  {
  once: true 

}> <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Need Enterprise Solutions? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > We offer custom enterprise solutions, volume discounts, and dedicated support for organizations requiring multiple services or specialized implementations. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <a href="mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Inquiry&body=Hi, I'm interested in enterprise solutions and volume pricing. Please provide more information about your enterprise offerings, custom implementations, and dedicated support options." className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2" > Contact Enterprise Sales <ArrowRight className="w-5 h-5" /> </Link> <a href="tel:+13024640950" className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Call Us Now </Link> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent" > Frequently Asked Questions </h2> </motion.div> </motion.div>) ) 
}</div> </div> </section> <EnhancedFooter /> </div>)
