const filteredServices = serviceCategories.flatMap (category => category.services.filter (service => (selectedCategory === 'all' || category.id === selectedCategory) && (searchTerm === ''|| service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () ) ) ) )
const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'name': return a.name.localeCompare (b.name)
case 'price': return a.pricing.starter.price - b.pricing.starter.price
case 'category': return (<Layout> <Head> <title>Innovative Services Showcase 2025 | Zion Tech Group</title> </div> <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" > <motion.div > <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6" > <Star className="w-4 h-4 mr-2" /> Innovation Showcase 2025 </div> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Innovative Services </span> <br /> <span className="text-white" >Showcase</span> </h1> </p> </motion.div> {
  /* Stats */ 
}<motion.div </div> <div className="text-gray-400" >Services</div> </div> </div> <div className="text-gray-400" >Categories</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" > 24/7 </div> <div className="text-gray-400" >Support</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2" > 99.9% </div> <div className="text-gray-400" >Uptime</div> </div> </motion.div> </div> </section> /> </div> {
  /* Category Filter */ 
}<div> <select </option>) ) 
}</select> </div> {
  /* Sort By */ 
}<div> <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="category" >Sort by Category</option> </select> </div> </div> </div> </div> </section> + {
  service.features.length - 3 
}more features </li>) 
}</ul> </div> > Learn More </a> <a > <Mail className="w-5 h-5" /> </a> </div> </motion.div>) ) 
}</div> {
  sortedServices.length === 0 && (<motion.div > <div className="text-gray-400 text-xl mb-4" >No services found</div> <div className="text-gray-500" >Try adjusting your search or filter criteria</div> </motion.div>) 
}</div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <motion.div > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Phone className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Mail className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <MapPin className="w-8 h-8 text-white" /> </div> </motion.div> </div> </div> </section> </Layout>) 
}
