 //Filter services based on category and search const filteredServices = allServices.filter (service => {
  const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase () .includes (selectedCategory) || service.name.toLowerCase () .includes (selectedCategory);
const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () );
//Sort services const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'popularity': return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
case 'price-low': case 'rating': return b.rating - a.rating;
case 'newest': return (<Layout> <Head> <title>Innovative Micro SAAS Services Showcase 2025 | Zion Tech Group</title> <motion.div initial= {
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
}> <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6" > Innovative Micro SAAS Services </h1> </motion.div>) ) 
}</div> </motion.div> </div> </section> </div> </div> </div> </section> key= {
  category.value 
}onClick= {
  () => setSelectedCategory (category.value) 
}className= {
  `flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 $ {
  selectedCategory === category.value ? `bg-gradient-to-r $ {
  category.color 
}border-transparent text-white`: 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20' 
}` 
}> </button>) ) 
}</div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> <select > <option value="popularity" >Most Popular</option> <option value="rating" >Highest Rated</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="newest" >Newest First</option> </select> </div> </div> </div> </section> Popular </div>) 
}</div>) ) 
}</div> </div> > Learn More </Link> <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300" > <Heart className="w-4 h-4" /> </button> </div> > <span>View Details</span> <ArrowRight className="w-4 h-4" /> </Link> </div> </div> </motion.div>) ) 
}</div> </div> </div> </div> </div> <div className="flex space-x-2" > <Link > Learn More </Link> <button className="p-2 bg-white/10 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300" > <Heart className="w-4 h-4" /> </button> </div> </div> </div> </div> </motion.div>) ) 
}</div>) 
}</div> </section> <motion.div initial= {
  {
  opacity: 0, y: 20 
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
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" > Join thousands of companies already using our innovative services to gain competitive advantages and drive growth. </p> <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105" > Get Started Today </Link> <Link href="/pricing" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300" > View Pricing </Link> </div> </motion.div> </div> </section> </Layout>) 
}