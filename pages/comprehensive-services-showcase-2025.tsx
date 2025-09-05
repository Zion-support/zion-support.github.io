 switch (selectedPriceRange) {
  case 'Under $300': priceMatch = price < 300;
break;
case '$300 - $500': priceMatch = price >= 300 && price <= 500;
break;
case '$500 - $800': priceMatch = price > 500 && price <= 800;
break;
case '$800+': 
}const searchMatch = service.name.toLowerCase () .includes (searchQuery.toLowerCase () ) || service.description.toLowerCase () .includes (searchQuery.toLowerCase () ) || service.category.toLowerCase () .includes (searchQuery.toLowerCase () );
return categoryMatch && priceMatch && searchMatch 
});
//Sort services const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'name': return a.name.localeCompare (b.name);
case 'price': case 'rating': return b.rating - a.rating;
case 'popularity': const getCategoryIcon = (category: string) => {
  const categoryData = categories.find (cat => category.toLowerCase () .includes (cat.id.toLowerCase () ) const getCategoryColor = (category: string) => {
  const categoryData = categories.find (cat => category.toLowerCase () .includes (cat.id.toLowerCase () ) return (<> <Head> <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title> <meta name="description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms. Transform your business with cutting-edge technology." /> <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence" /> <meta property="og:title" content="Comprehensive Services Showcase 2025 | Zion Tech Group" /> <meta property="og:description" content="Explore our comprehensive portfolio of real, innovative micro SAAS services, IT solutions, and AI platforms." /> <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" /> <meta property="og:type" content="website" /> <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" /> </Head> </div> <div className="relative z-10 container mx-auto px-4 text-center" > <motion.div initial= {
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
}> <h1 className="text-5xl lg:text-7xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" > Comprehensive Services </span> <br /> <span className="text-white" >Showcase 2025</span> </h1> <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed" > Discover our portfolio of <span className="text-cyan-400 font-semibold" >real, innovative micro SAAS services</span>;
cutting-edge IT solutions, and revolutionary AI platforms. Transform your business with <span className="text-blue-400 font-semibold" > proven technology</span> that delivers measurable results. </p> </div> <div className="text-center" > <div className="text-3xl font-bold text-blue-400 mb-2" >$2.5B+</div> <div className="text-gray-400" >Market Coverage</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-purple-400 mb-2" >95%</div> <div className="text-gray-400" >AI Accuracy</div> </div> <div className="text-center" > <div className="text-3xl font-bold text-green-400 mb-2" >400%</div> <div className="text-gray-400" >Average ROI</div> </div> </div> <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25" > Get Started Today <ArrowRight className="w-5 h-5 ml-2 inline" /> </Link> <a </div> </motion.div> </div> </section> key= {
  category 
}onClick= {
  () => setSelectedCategory (category) 
}className= {
  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
}` 
}> {
  category 
}</button>) ) 
}</div> > {
  pricingRanges.map ( (range) => (<option key= {
  range 
}value= {
  range 
}> {
  range 
}</option>) ) 
}</select> </div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-md transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-md transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> > <option value="popularity" >Popularity</option> <option value="name" >Name</option> <option value="price" >Price</option> <option value="rating" >Rating</option> </select> </div> </div> </div> </section> Popular </span> </div>) 
}</div>) ) 
}</div> </div>) ) 
}</div> </div> {
  /* CTA Button */ 
}<Link > Learn More <ArrowRight className="w-4 h-4 ml-2 inline" /> </Link> </div> </motion.div>) ) 
}</div> Popular </span>) 
}</div> </div> </div> </div> </span> </div> </div> </div>) ) 
}</div> </div> <div> </div>) ) 
}</div> </div> </div> > Learn More <ArrowRight className="w-4 h-4 ml-2 inline" /> </Link> </div> </div> </motion.div>) ) 
}</div>) 
}Try adjusting your filters or search terms to find what you're looking for. </p> <button onClick= {
  () => {
  > Clear All Filters </button> </div>) 
}</div> </section> > <h2 className="text-4xl lg:text-6xl font-bold mb-6" > <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Ready to Transform </span> <br /> <span className="text-white" >Your Business?</span> </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Let's discuss how our innovative services can help you achieve your business goals. Get in touch with our experts today. </p> <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8" > <a </div> </motion.div> </div> </section> </>) 
};
export default ComprehensiveServicesShowcase2025;
