const filteredServices = ultimateFuturisticServices2025.filter (service => {
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'price-low': case 'rating': return b.rating - a.rating
case 'customers': const containerVariants = {
  hidden: {
  opacity: 0 
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
}
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<Layout> <Head> <title>Ultimate Futuristic Services Showcase 2025 | Zion Tech Group</title> <motion.div initial= {
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
}> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Ultimate Futuristic </span> <br /> <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent" > Services 2025 </span> </h1> </div> </motion.div>) ) 
}</div> </motion.div> </div> </section> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select > <option value="popular" >Most Popular</option> <option value="price-low" >Price: Low to High</option> <option value="price-high" >Price: High to Low</option> <option value="rating" >Highest Rated</option> <option value="customers" >Most Customers</option> </select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded $ {
  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="grid grid-cols-2 gap-1 w-4 h-4" > <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> <div className="bg-current rounded-sm" ></div> </div> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded $ {
  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400' 
}` 
}> <div className="space-y-1 w-4 h-4" > <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> <div className="bg-current rounded-sm h-0.5" ></div> </div> </button> </div> </div> </div> </div> </section> > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative $ {
  viewMode === 'grid' ? 'bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105' : 'bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300' 
}` 
}> Popular </div>) 
}{
  /* Service Header */ 
}<div className= {
  `$ {
  viewMode === 'list' ? 'flex items-start space-x-6' : 'text-center' 
}` 
}> <div className= {
  `$ {
  viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-4' 
}` 
}> <div className= {
  `w-16 h-16 rounded-2xl bg-gradient-to-br $ {
  service.color 
}flex items-center justify-center text-3xl` 
}> {
  service.icon 
}</div> </div> </div> </div> </div> + {
  service.features.length - 4 
}more features </div>) 
}</div> </div> </div> </div> </div> > Get Started </a> <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-purple-500/50 transition-colors" > <Eye className="w-5 h-5" /> </button> </div> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div> > Clear Filters </button> </div>) 
}</div> </section> <motion.div initial= {
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
}> Ready to Experience the Future? </h2> <p className="text-xl text-gray-300 mb-8" > Transform your business with our revolutionary futuristic services. Get in touch with our experts to discuss your specific needs and implementation strategy. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center" > <Link href="/contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105" > Contact Our Experts </a> <Link href="/pricing" className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:border-purple-500/50 transition-colors" > View Pricing </a> </div> </motion.div> </div> </section> </Layout>) 
}