 ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Filter by search term if (searchTerm) {
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered) 
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
}
};
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100 
}%`;
top: `$ {
  Math.random () * 100 
}%` 
}
}/>) ) 
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion.div initial= {
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
}> <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"> <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion.div>) ) 
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name 
}onClick= {
  () => setSelectedCategory (category.name) 
}className= {
  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {
  selectedCategory === category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' 
}` 
}> </span> </button>) ) 
}</div> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select </option>) ) 
}</select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid3X3 className=" w-4 h-4"/> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' 
}` 
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> Learn More </button> </motion.div>) ) 
}</div> </span> </div> </div> </div>) ) 
}</div> </div> </div> </div> </div> </div> </motion.div>) ) 
}</div>) 
}</div> <h3 className=" text-2xl font-bold text-white mb-2">No services found</h3> <p className=" text-gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button onClick= {
  () => {
  > Clear All Filters </button> </div>) 
}</div> <motion.div initial= {
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
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>) 
}