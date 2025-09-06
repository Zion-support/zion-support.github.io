 const filteredServices = allServices.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': case 'rating': return b.rating - a.rating;
case 'customers': return (<> <Head> <title>Revolutionary 2025 Services Showcase | Zion Tech Group</title> <meta name="description" content="Discover the most innovative micro SAAS services, IT solutions, and AI platforms of 2025. Revolutionary technology with real implementation and proven ROI." /> <meta name="keywords" content="AI services, quantum computing, cybersecurity, cloud infrastructure, fintech, healthcare AI, space technology, Zion Tech Group" /> <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2025-services-showcase" /> </Head> <div className="container mx-auto relative z-10" > <motion.div > <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" > Revolutionary 2025 Services </h1> <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" > Discover the most innovative micro SAAS services, IT solutions, and AI platforms that are reshaping industries and creating unprecedented value. </p> <div className="flex flex-wrap justify-center gap-4 mb-8" > <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full" > <Star className="w-5 h-5 text-purple-400" /> <span className="text-purple-300" >Real Implementation</span> </div> <div className="flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full" > <TrendingUp className="w-5 h-5 text-blue-400" /> <span className="text-blue-300" >Proven ROI</span> </div> <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full" > <Award className="w-5 h-5 text-green-400" /> <span className="text-green-300" >Market Leaders</span> </div> </div> </motion.div> </div> </section> </option>) )
}</select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" /> </div> > <option value="popularity" >Most Popular</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> </select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" /> </div> <button onClick= {
  () => setViewMode ('grid')
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
}`
}> <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" > <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /> </svg> </button> <button onClick= {
  () => setViewMode ('list')
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
}`
}> <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" > <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /> </svg> </button> </div> </div> </div> </div> </section>)
}</p> </div> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id
}POPULAR </div>)
}</li>) )
}</ul> </div> Learn More </button> </Link> <Link href="/contact" > <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300 text-sm" > Contact </button> </Link> </div> </div> </div> </div> </motion.div>) )
}</motion.div> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id
}POPULAR </span>)
}</div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4" > <div> </li>) )
}</ul> </div> <div> </span>) )
}</div> </div> </div> </div> </div> <div className="text-sm text-gray-400" >30-day free trial</div> </div> Learn More </button> </Link> <Link href="/contact" > <button className="w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300" > Contact Sales </button> </Link> </div> </div> </div> </div> </div> </motion.div>) )
}</motion.div>)
}</AnimatePresence> > Clear Filters </button> </div>)
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

}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Join thousands of companies already leveraging our revolutionary services to achieve unprecedented growth and innovation. </p> Call Now → </Link> </div> Send Email → </Link> </div> Get Directions → </Link> </div> </div> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" > <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105" > Start Your Transformation </button> </Link>
