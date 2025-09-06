 service.tagline.toLowerCase () .includes (searchQuery.toLowerCase () ) || service.features.some (feature => feature.toLowerCase () .includes (searchQuery.toLowerCase () ) );
const matchesCategory = selectedCategory === 'all' || (selectedCategory === 'ai' && service.variant.includes ('ai') ) || (selectedCategory === 'quantum' && service.variant.includes ('security') ) || (selectedCategory === 'it' && service.variant.includes ('it') ) || (selectedCategory === 'api' && service.variant.includes ('api') ) || (selectedCategory === 'cloud' && service.variant.includes ('cloud') ) || (selectedCategory === 'marketing' && service.variant.includes ('marketing') ) || (selectedCategory === 'project' && service.variant.includes ('project') ) || (selectedCategory === 'customer' && service.variant.includes ('customer') );
case 'rating': aValue = a.rating;
bValue = b.rating;
break;
case 'customers': return filtered;
}, [allServices, searchQuery, selectedCategory, sortBy, sortOrder]);
return (<> <Head> <title>2024 Revolutionary Services - Zion Tech Group</title> <motion.div initial= {
  {
  opacity: 0, y: 20 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8" > <Sparkles className="w-5 h-5 text-cyan-400" /> <span className="text-cyan-400 font-medium" >2024 Revolutionary Services</span> </div> <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" > Future-Ready </span> <br /> <span className="text-white" >Solutions</span> </h1> </div> <div className="text-center" > <div className="text-3xl font-bold text-purple-400 mb-2" >17</div> <div className="text-gray-400" >Service Categories</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-pink-400 mb-2" >4.8</div> <div className="text-gray-400" >Average Rating</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-green-400 mb-2" >1000+</div> <div className="text-gray-400" >Happy Customers</div> </div> </div> </motion.div> </div> </section> /> </div> </div> {
  /* Category Filter */ 
}<div> <select </option>) ) 
}</select> </div> </button> </div> </div> </div> </div> </section> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> </div> <div className="text-xs text-gray-400" >Rating</div> </div> </Link> 
}</div>) 
}</div> </section> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 leading-relaxed" > Join thousands of businesses already leveraging our revolutionary 2024 services. Get started today and experience the future of technology. </p> <Link href="/contact" className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 font-semibold" > <Zap className="w-5 h-5" /> <span>Get Started Today</span> </Link> <Link href="/pricing-2033" className="flex items-center space-x-2 border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold" > <span>View Pricing Plans</span> <ArrowRight className="w-4 h-4" /> </Link> </div> </motion.div> </div> </section> </div> </>) 
};
export default Services2024Page;
