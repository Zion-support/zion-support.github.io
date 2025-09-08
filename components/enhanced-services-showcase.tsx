//Combine all services for comprehensive showcase const all_services = [ ...nextGenerationAIServices;
...cuttingEdgeITServices;
...innovativeMicroSaasV2Services;
...enhancedRealMicroSaasServices;
...innovativeAIServices;
...quantumSpaceServices;
...enterpriseITServices;
...realMarketServices;
...newVerifiedServicesQ22025 ];

//Filter and sort services const filtered_services = React.useMemo ( () => {
  let filtered = all_services.filter (service => {
  const matches_category = selected_category === 'all' || (selected_category === 'next - gen - ai' && nextGenerationAIServices.includes (service) ) || (selected_category === 'cutting - edge - it' && cuttingEdgeITServices.includes (service) ) || (selected_category === 'innovative - saas' && innovativeMicroSaasV2Services.includes (service) ) || (selected_category === 'quantum - space' && quantumSpaceServices.includes (service) ) || (selected_category === 'enterprise' && enterpriseITServices.includes (service) );
const matches_search = service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || service.category.toLowerCase () .includes (search_term.toLowerCase () ) || (service.tagline && service.tagline.toLowerCase () .includes (search_term.toLowerCase () ) );

return filtered;
}, [all_services, selected_category, search_term, sort_by]);

const container_variants = {
  hidden: {

//Filter and sort services const filteredServices = React && React.useMemo ( () => {;
  let filtered = allServices && allServices.filter (service => {;
  const matchesCategory = selectedCategory === 'all' || (selectedCategory === 'next-gen-ai' && nextGenerationAIServices && nextGenerationAIServices.includes (service) ) || (selectedCategory === 'cutting-edge-it' && cuttingEdgeITServices && cuttingEdgeITServices.includes (service) ) || (selectedCategory === 'innovative-saas' && innovativeMicroSaasV2Services && innovativeMicroSaasV2Services.includes (service) ) || (selectedCategory === 'quantum-space' && quantumSpaceServices && quantumSpaceServices.includes (service) ) || (selectedCategory === 'enterprise' && enterpriseITServices && enterpriseITServices.includes (service) );
const matchesSearch = service && service.name.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.description.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.category.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || (service && service.tagline && service && service.tagline.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) );
return filtered;
}, [allServices, selectedCategory, searchTerm, sortBy]);
const containerVariants = {;
  hidden: {;
  opacity: 0 ;
};
visible: {;
  opacity: 1, transition: {;
  staggerChildren: 0 && 0.1, delayChildren: 0 && 0.2 ;
};

};
<motion&& motion.div initial= {

  {
  opacity: 0, y: 30
}animate= {
  {}
  opacity: 1, y: 0,}
}transition= {
  {

  duration: 0 && 0.8 

}> <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6" > Enhanced Services Showcase </h1> </p> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" > <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 border border-cyan-500/30" > <Users className="w-5 h-5 text-cyan-400" /> <span className="text-cyan-300 font-semibold" >600+ Services</span> </div> <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-6 py-3 border border-purple-500/30" > <TrendingUp className="w-5 h-5 text-purple-400" /> <span className="text-purple-300 font-semibold" >1000% ROI</span> </div> <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full px-6 py-3 border border-pink-500/30" > <Zap className="w-5 h-5 text-pink-400" /> <span className="text-pink-300 font-semibold" >24/7 Support</span> </div> </div> </motion && motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6" > Featured Service Categories </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Explore our most innovative and high-impact service categories </p> </motion && motion.div> </div> <ArrowRight className="w-4 h-4" /> </div>) ) ;
}</div> <Button > View All {;
  category && category.title.split (' ') [0"Services </Button> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section> {;
  /* Filters and Search */ ;
}<section className="py-8 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6"> <div className="flex flex-col lg:flex-row gap-6"> {;
  /* Search */ ;
}<div className="flex-1"> <div className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/> <input className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"/> </div> </div> {;
  /* Category Filter */ ;
}<div className="flex-shrink-0"> <selectvalue= {
  selectedCategory 
}onChange= {
  (e) => setSelectedCategory (e && e.target.value) ;
}className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"> {;
  categories && categories.map ( (category) => (<optionkey= {
  category && category.id 
}value= {
  category && category.id 
}> {;
  category && category.name ;
}({;
  category && category.count ;
}) </option>) ) ;
}</select> </div> {;
  /* Sort Options */ ;
}<div className="flex-shrink-0"> <selectvalue= {
  sortBy 
}onChange= {
  (e) => setSortBy (e && e.target.value) ;
}className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"> {;
  sortOptions && sortOptions.map ( (option) => (<optionkey= {
  option && option.id 
}value= {
  option && option.id 
}> {;
  option && option.name ;
}</option>) ) ;
}</select> </div> {;
  /* View Mode Toggle */ ;
}<div className="flex-shrink-0"> <div className="flex bg-gray-700/50 rounded-lg p-1"> <buttononClick= {
  () => setViewMode ('grid') ;
}className= {;
  `p-2 rounded-md transition-colors $ {;
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' ;
}` ;
}> <Grid className="w-5 h-5"/> </button> <buttononClick= {
  () => setViewMode ('list') ;
}className= {;
  `p-2 rounded-md transition-colors $ {;
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' ;
}` ;
}> <List className="w-5 h-5"/> </button> </div> </div> </div> </div> </div> </section> {;
  /* Services Grid/List */ ;
}<section className="py-16 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <motion&& motion.div ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6' 
}> {;
  filteredServices && filteredServices.map ( (service, index) => (<motion&& motion.div key= {
  service && service.id 

}variants= {
  itemVariants
}className= {

  opacity: 0;
}
visible: {
  opacity: 1, transition: {
  stagger_children: 0.1, delay_children: 0.2;
}
;
}
<motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}> <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 6" > Enhanced Services Showcase </h1> </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center mb - 16" > <div className="flex items - center justify - center space - x-3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 rounded - full px - 6 py - 3 border border - cyan - 500 / 30" > <Users className="w - 5 h - 5 text - cyan - 400" /> <span className="text - cyan - 300 font - semibold" >600+ Services</span> </div> <div className="flex items - center justify - center space - x-3 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full px - 6 py - 3 border border - purple - 500 / 30" > <TrendingUp className="w - 5 h - 5 text - purple - 400" /> <span className="text - purple - 300 font - semibold" >1000% ROI</span> </div> <div className="flex items - center justify - center space - x-3 bg - gradient - to - r from - pink - 500 / 20 to - cyan - 500 / 20 rounded - full px - 6 py - 3 border border - pink - 500 / 30" > <Zap className="w - 5 h - 5 text - pink - 400" /> <span className="text - pink - 300 font - semibold" >24 / 7 Support</span> </div> </div> </motion.div> </div> </section> > <h2 className="text - 4xl md:text - 5xl font - bold bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent mb - 6" > Featured Service Categories </h2> <p className="text - xl text - gray - 300 max - w-3xl mx - auto" > Explore our most innovative and high - impact service categories </p> </motion.div> </div> <ArrowRight className="w - 4 h - 4" /> </div>) );
}</div> <Button > View All {
  category.title.split (' ') [0"Services </Button> </div> </div> </motion.div>) );
}</div> </div> </section> {
  /* Filters and Search */;
}<section className="py - 8 px - 4 sm:px - 6 lg:px - 8"> <div className="max - w-7xl mx - auto"> <div className="bg - gray - 800 / 60 border border - gray - 700 rounded - 2xl p - 6"> <div className="flex flex - col lg:flex - row gap - 6"> {
  /* Search */;
}<div className="flex - 1"> <div className="relative"> <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5"/> <input className="w - full pl - 10 pr - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"/> </div> </div> {
  /* Category Filter */;
}<div className="flex - shrink - 0"> <select value= {
  selected_category;
}on_change= {
  (e) => setSelectedCategory (e.target.value);
}className="px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"> {
  categories.map ( (category) => (<option key= {
  category.id;
}value= {
  category.id;
}> {
  category.name;
}({
  category.count;
}) </option>) );
}</select> </div> {
  /* Sort Options */;
}<div className="flex - shrink - 0"> <select value= {
  sort_by;
}on_change= {
  (e) => setSortBy (e.target.value);
}className="px - 4 py - 3 bg - gray - 700 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent"> {
  sort_options.map ( (option) => (<option key= {
  option.id;
}value= {
  option.id;
}> {
  option.name;
}</option>) );
}</select> </div> {
  /* View Mode Toggle */;
}<div className="flex - shrink - 0"> <div className="flex bg - gray - 700 / 50 rounded - lg p - 1"> <button on_click= {
  () => setViewMode ('grid');
}className= {
  `p - 2 rounded - md transition - colors $ {
  view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
}`;
}> <Grid className="w - 5 h - 5"/> </button> <button on_click= {
  () => setViewMode ('list');
}className= {
  `p - 2 rounded - md transition - colors $ {
  view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';
}`;
}> <List className="w - 5 h - 5"/> </button> </div> </div> </div> </div> </div> </section> {
  /* Services Grid / List */;
}<section className="py - 16 px - 4 sm:px - 6 lg:px - 8"> <div className="max - w-7xl mx - auto"> <motion.div ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8' : 'space - y-6';
}> {
  filtered_services.map ( (service, index) => (<motion.div key= {
  service.id;
}variants= {
  item_variants;
}className= {
  view_mode === 'grid' ? '': 'bg - gray - 800 / 60 border border - gray - 700 rounded - 2xl p - 6';
}> {
  view_mode === 'grid' ? (<div className="bg - gray - 800 / 60 border border - gray - 700 rounded - 2xl p - 6 hover:border - cyan - 500 / 40 transition - colors h - full"> <div className="flex items - center justify - between mb - 4"> <div className="flex items - center space - x-2"> <span className="text - 2xl"> {
  service.icon;
}</span> <div> <div className="text - sm text - gray - 400"> {
  service.category;
}</div> <div className="text - xs text - gray - 500"> {
  service.setup_time;
}setup</div> </div> </div> <div className="text - right"> <div className="text - 2xl font - bold text - cyan - 400"> {
  service.price;
}</div> <div className="text - sm text - gray - 400"> {
  service.period;
}</div> </div> </div> <h3 className="text - xl font - bold text - white mb - 2"> {
  service.name;
}</h3> <p className="text - gray - 300 mb - 3"> {
  service.tagline;
}</p> <p className="text - gray - 400 text - sm mb - 4"> {
  service.description;
}</p> <div className="space - y-3 mb - 6"> <div className="flex items - center justify - between text - sm"> <span className="text - gray - 400">Rating:</span> <div className="flex items - center space - x-1"> <Star className="w - 4 h - 4 text - yellow - 400 fill - current"/> <span className="text - white"> {
  service.rating;
}</span> <span className="text - gray - 400"> ({
  service.reviews;
}) </span> </div> </div> <div className="flex items - center justify - between text - sm"> <span className="text - gray - 400">Customers:</span> <span className="text - white"> {
  service.customers.toLocaleString ();
}</span> </div> <div className="flex items - center justify - between text - sm"> <span className="text - gray - 400">Trial:</span> <span className="text - white"> {
  service.trial_days;
}days</span> </div> </div> <div className="flex gap - 3"> <Button href= {
  service.link;
}variant="primary"className="flex - 1"> Learn More <ExternalLink className="ml - 2 w - 4 h - 4"/> </Button> <Button href="/contact"variant=" secondary"className="flex - 1"> Get Started </Button> </div> </div>) : (<div className="flex items - start space - x-6"> <div className="flex - shrink - 0"> <div className="w - 16 h - 16 bg - gradient - to - br from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center text - 2xl"> {
  service.icon;
}</div> </div> <div className="flex - 1 min - w-0"> <div className="flex items - start justify - between"> <div> <h3 className="text - xl font - bold text - white mb - 2"> {
  service.name;
}</h3> <p className="text - gray - 300 mb - 3"> {
  service.tagline;
}</p> <p className="text - gray - 400 text - sm mb - 4"> {
  service.description;
}</p> </div> <div className="text - right ml - 4"> <div className="text - 2xl font - bold text - cyan - 400"> {
  service.price;
}</div> <div className="text - sm text - gray - 400"> {
  service.period;
}</div> </div> </div> <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 4 mb - 4 text - sm"> <div> <span className="text - gray - 400">Category:</span> <div className="text - white"> {
  service.category;
}</div> </div> <div> <span className="text - gray - 400">Rating:</span> <div className="flex items - center space - x-1"> <Star className="w - 4 h - 4 text - yellow - 400 fill - current"/> <span className="text - white"> {
  service.rating;
}</span> </div> </div> <div> <span className="text - gray - 400">Customers:</span> <div className="text - white"> {
  service.customers.toLocaleString ();
}</div> </div> <div> <span className="text - gray - 400">Setup:</span> <div className="text - white"> {
  service.setup_time;
}</div> </div> </div> <div className="flex gap - 3"> <Button > Learn More <ExternalLink className="ml - 2 w - 4 h - 4"/> </Button> <Button href="/contact"variant=" secondary"size=" sm"> Get Started </Button> </div> </div> </div>);
}</motion.div>) );

}</motion.div> {
  filtered_services.length === 0 && (<div className="text - center py - 16"> <div className="text - 6xl mb - 4">🔍</div> <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3> <p className="text - gray - 400 mb - 6">Try adjusting your search criteria or browse all categories</p> <Button href="#"on_click= {
  () => {

  viewMode === 'grid' ? '': 'bg-gray-800/60 border border-gray-700 rounded-2xl p-6' 
}> {;
  viewMode === 'grid' ? (<div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors h-full"> <div className="flex items-center justify-between mb-4"> <div className="flex items-center space-x-2"> <span className="text-2xl"> {;
  service && service.icon ;
}</span> <div> <div className="text-sm text-gray-400"> {;
  service && service.category ;
}</div> <div className="text-xs text-gray-500"> {;
  service && service.setupTime ;
}setup</div> </div> </div> <div className="text-right"> <div className="text-2xl font-bold text-cyan-400"> {;
  service && service.price ;
}</div> <div className="text-sm text-gray-400"> {;
  service && service.period ;
}</div> </div> </div> <h3 className="text-xl font-bold text-white mb-2"> {;
  service && service.name ;
}</h3> <p className="text-gray-300 mb-3"> {;
  service && service.tagline ;
}</p> <p className="text-gray-400 text-sm mb-4"> {;
  service && service.description ;
}</p> <div className="space-y-3 mb-6"> <div className="flex items-center justify-between text-sm"> <span className="text-gray-400">Rating:</span> <div className="flex items-center space-x-1"> <Star className="w-4 h-4 text-yellow-400 fill-current"/> <span className="text-white"> {;
  service && service.rating ;
}</span> <span className="text-gray-400"> ({;
  service && service.reviews ;
}) </span> </div> </div> <div className="flex items-center justify-between text-sm"> <span className="text-gray-400">Customers:</span> <span className="text-white"> {;
  service && service.customers.toLocaleString () ;
}</span> </div> <div className="flex items-center justify-between text-sm"> <span className="text-gray-400">Trial:</span> <span className="text-white"> {;
  service && service.trialDays ;
}days</span> </div> </div> <div className="flex gap-3"> <Buttonhref= {
  service && service.link 
}variant="primary"className="flex-1"> Learn More <ExternalLink className="ml-2 w-4 h-4"/> </Button> <Button href="/contact"variant=" secondary"className="flex-1"> Get Started </Button> </div> </div>) : (<div className="flex items-start space-x-6"> <div className="flex-shrink-0"> <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl"> {;
  service && service.icon ;
}</div> </div> <div className="flex-1 min-w-0"> <div className="flex items-start justify-between"> <div> <h3 className="text-xl font-bold text-white mb-2"> {;
  service && service.name ;
}</h3> <p className="text-gray-300 mb-3"> {;
  service && service.tagline ;
}</p> <p className="text-gray-400 text-sm mb-4"> {;
  service && service.description ;
}</p> </div> <div className="text-right ml-4"> <div className="text-2xl font-bold text-cyan-400"> {;
  service && service.price ;
}</div> <div className="text-sm text-gray-400"> {;
  service && service.period ;
}</div> </div> </div> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm"> <div> <span className="text-gray-400">Category:</span> <div className="text-white"> {;
  service && service.category ;
}</div> </div> <div> <span className="text-gray-400">Rating:</span> <div className="flex items-center space-x-1"> <Star className="w-4 h-4 text-yellow-400 fill-current"/> <span className="text-white"> {;
  service && service.rating ;
}</span> </div> </div> <div> <span className="text-gray-400">Customers:</span> <div className="text-white"> {;
  service && service.customers.toLocaleString () ;
}</div> </div> <div> <span className="text-gray-400">Setup:</span> <div className="text-white"> {;
  service && service.setupTime ;
}</div> </div> </div> <div className="flex gap-3"> <Button > Learn More <ExternalLink className="ml-2 w-4 h-4"/> </Button> <Button href="/contact"variant=" secondary"size=" sm"> Get Started </Button> </div> </div> </div>) ;
}</motion && motion.div>) ) ;
}</motion && motion.div> {;
  filteredServices && filteredServices.length === 0 && (<div className="text-center py-16"> <div className="text-6xl mb-4">🔍</div> <h3 className="text-2xl font-bold text-white mb-2">No services found</h3> <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories</p> <Buttonhref="#"onClick= {
  () => {;
  > View All Services </Button> </div>) ;
}</div> </section> {;
  /* Contact Section */ ;
}<section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-4xl mx-auto text-center"> <motion&& motion.div initial= {

  {
  }
  "opacity": 0, "y": 30
}whileInView= {
  {
  }
  "opacity": 1, "y": 0
}transition= {
  {
  duration: 0.8
}viewport= {
  {
  once: true
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8"> Join thousands of companies achieving breakthrough results with our revolutionary services </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className="flex items-center justify-center space-x-3"> <Phone className="w-6 h-6 text-cyan-400"/> <span className="text-lg"> {
  contactInfo.mobile
}</span> </div> <div className="flex items-center justify-center space-x-3"> <Mail className="w-6 h-6 text-purple-400"/> <span className="text-lg"> {
  contactInfo.email
}</span> </div> <div className="flex items-center justify-center space-x-3"> <MapPin className="w-6 h-6 text-green-400"/> <span className="text-lg"> {
  contactInfo.address
}</span> </div> </div> <div className="flex flex-col sm: flex-row gap-4 justify-center"> <Button href="/contact"variant=" primary"size=" lg"className="text-lg px-8 py-4"> Start Your Transformation <Rocket className="ml-2 w-6 h-6"/> </Button> <Button href="/pricing"variant=" secondary"size=" lg"className="text-lg px-8 py-4"> View Pricing <DollarSign className="ml-2 w-6 h-6" /> </Button> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticMatrixBackground>)
}//Button component (if not imported)
}> {
  children
}</a>)
}
}> {
}
}> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 mb-8"> Join thousands of companies achieving breakthrough results with our revolutionary services </p> <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div className="flex items-center justify-center space-x-3"> <Phone className="w-6 h-6 text-cyan-400"/> <span className="text-lg"> {
  contactInfo.mobile 
}</span> </div> <div className="flex items-center justify-center space-x-3"> <Mail className="w-6 h-6 text-purple-400"/> <span className="text-lg"> {
  contactInfo.email 
}</span> </div> <div className="flex items-center justify-center space-x-3"> <MapPin className="w-6 h-6 text-green-400"/> <span className="text-lg"> {
  contactInfo.address 
}</span> </div> </div> <div className="flex flex-col sm: flex-row gap-4 justify-center"> <Button href="/contact"variant=" primary"size=" lg"className="text-lg px-8 py-4"> Start Your Transformation <Rocket className="ml-2 w-6 h-6"/> </Button> <Button href="/pricing"variant=" secondary"size=" lg"className="text-lg px-8 py-4"> View Pricing <DollarSign className="ml-2 w-6 h-6" /> </Button> </div> </motion.div> </div> </section> </div> </UltraAdvancedFuturisticMatrixBackground>) 
}//Button component (if not imported) return (<a href= {
  href 
}className= {
  classes 

}> {

  href,
  variant = 'primary';
  size = 'md';
  children: React && React.ReactNode,;
  onClick?: () => void;
}) => {;
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',;
  const variantClasses = {;
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-cyan-500',;
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500 focus:ring-gray-500';
  };
  const sizeClasses = {;
    sm: 'px-4 py-2 text-sm',;
    md: 'px-6 py-3 text-base',;
    lg: 'px-8 py-4 text-lg';
  href,
  variant = 'primary';
  size = 'md';
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
    return (
      <a href={href} className={classes}>;
        {children}
      </a>;
    );
  }
    return (
      <a href = $2;
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

    </button>;
  )
};


