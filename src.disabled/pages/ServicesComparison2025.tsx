
  ', icon: Star, color:,

  text-purple-600;
  ' }, { id: 'ai-service,s, name: 'AI: Services;';
  ',, icon: Brai,n, color:,';
  text-blue-600;
  ' }, { id: 'micro-saa,s, name: 'Micro: SAAS;';
  ',, icon: Za,p, color:,';
  text-green-600;
  ' }, { id: 'it-service,s, name: 'IT: Services;';
  ',, icon: Databas,e, color:,';
  text-orange-600;
  ' }, { id: 'emerging-tec,h, name: 'Emerging: Tech;';
  ',, icon: Glob,e, color:,';
  text-red-600;

  ai-services;
  ': return Brain case 'micro-saas;
  ': return Zap case 'it-services;
  ': return Database case 'emerging-tech;
  ': return Globe case 'business-tools: return Briefcase defaul,
    t: return Star } }  const getCategoryColor = (category: string) => { switch (category) { case,
  ai-services;
  ': return 'bg-blue-100 text-blue-800;
  ' case 'micro-saas;
  ': return 'bg-green-100 text-green-800;
  ' case 'it-services;
  ': return 'bg-orange-100 text-orange-800;
  ' case 'emerging-tech;
  ': return 'bg-red-100 text-red-800;

  ': return 'bg-indigo-100 text-indigo-800
  ' default: return 'bg-gray-100 text-gray-800 } }  const selectedServicesData = selectedServices.map(id => INNOVATIVE_MICRO_SAAS_SERVICES_2025.find(service => service.id === id) ).filter(Boolean)  const allFeatures = Array.from(new Set( INNOVATIVE_MICRO_SAAS_SERVICES_2025.flatMap(service => service.features) ))  return ( <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>' {}'' <section className='relative py-20 px-4 overflow-hidden'>'' <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20'></div>'' <div className='relative max-w-7xl mx-auto text-center'> <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}' transition={{ duration: 0.6 }}'' className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6'' >'' <Compare className='w-4 h-4 mr-2' /> Services Comparison 2025 </motion.div> <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}' transition={{ duration: 0.8 }}'' className='text-5xl md: text-7xl font-bold text-white mb-6' >' Compare Our'' <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'> Technology Services </span> </motion.h1> <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}' transition={{ duration: 0.8, delay: 0.2 }}'' className='text-xl md: text-2xl text-gray-300 mb-8 max-w-4xl mx-auto' > Make informed decisions by comparing features, pricing, and benefits across our comprehensive suite of innovative technology solutions. </motion.p> </div> </section>' {}'' <section className='bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-8 px-4'>'' <div className='max-w-7xl mx-auto'>'' <div className='grid grid-cols-1 md: grid-cols-3 gap-6 text-center'>'' <div className='flex flex-col items-center space-y-2'>'' <Phone className='w-6 h-6 text-purple-400' />'' <span className='text-white font-semibold'>Call Us</span>'' <a href='tel: +13024640950' className='text-purple-300 hover:text-white transition-colors'> +1 302 464 0950 </a>' </div>'' <div className='flex flex-col items-center space-y-2'>'' <Mail className='w-6 h-6 text-blue-400' />'' <span className='text-white font-semibold'>Email Us</span>'' <a href='mailto: kleber@ziontechgroup.com' className='text-blue-300 hover:text-white transition-colors'> kleber@ziontechgroup.com </a>' </div>'' <div className='flex flex-col items-center space-y-2'>'' <MapPin className='w-6 h-6 text-green-400' />'' <span className='text-white font-semibold'>Visit Us</span>'' <span className='text-green-300'> 364 E Main St STE 1008<br / / /> Middletown DE 19709 </span> </div> </div> </div> </section>' {}'' <section className='py-16 px-4'>'' <div className='max-w-7xl mx-auto'>'' <div className='text-center mb-12'>'' <h2 className='text-3xl md: text-4xl font-bold text-white mb-6'> Select Services to Compare' </h2>'' <p className='text-xl text-gray-300 max-w-3xl mx-auto'> Choose up to 4 services to compare side by side. Select services from the list below to start your comparison. </p> </div>' {}'' <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8'>'' <div className='flex flex-col lg: flex-row gap-6'>'' <div className='flex-1'>'' <div className='relative'>' <input'' type='text'' placeholder='Search services...' value={searchTerm}' onChange={(e) = / /> setSearchTerm(e.target.value)}'' className='w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'' />'' <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' /> </div> </div>'' <div className='flex flex-wrap gap-2'> {categories.map((category) => { const Icon = category.icon return ( <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${ selectedCategory === category.id ?,
  bg-purple-600 border-purple-600 text-white
  ': 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20 }`}' >'' <Icon className='w-4 h-4' /> {category.name} </button> ) })} </div> </div> </div> {}' {selectedServices.length > 0 && ('' <div className='mb-8'>'' <h3 className='text-xl font-bold text-white mb-4'> Selected Services ({selectedServices.length}/4)' </h3>'' <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-4'>' {selectedServicesData.map((service) => ('' <div key={service?.id} className='bg-white/5 border border-white/20 rounded-lg p-4'>'' <div className='flex items-center justify-between mb-2'> <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service?.category || '')}`}> {service?.category.replace(
  '-, ').toUpperCase()} </span> <button' onClick={() => toggleServiceSelection(service?.id || '
  ')}'' className='text-red-400 hover: text-red-300 transition-colors' > × </button>' </div>'' <h4 className='text-white font-semibold text-sm'>{service?.name}</h4>'' <p className='text-gray-400 text-xs mt-1'>{service?.tagline}</p> </div> ))} </div> </div> )}' {}'' <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6'> {filteredServices.map((service) => { const isSelected = selectedServices.includes(service.id) const Icon = getCategoryIcon(service.category)  return ( <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover: scale-105 ${ isSelected ?,
  border-purple-500 bg-purple-500/10;

  ').toUpperCase()} </span> </div>' {isSelected && ('' <div className='w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center'>'' <CheckCircle className='w-4 h-4 text-white' /> </div> )} </div>'' <h3 className='text-lg font-bold text-white mb-2'>{service.name}</h3>'' <p className='text-gray-300 text-sm mb-4'>{service.tagline}</p>'' <div className='space-y-3 mb-4'>'' <div className='flex justify-between text-sm'>'' <span className='text-gray-400'>Monthly: </span>'' <span className='text-green-400 font-semibold'>{service.pricing.monthly}</span>' </div>'' <div className='flex justify-between text-sm'>'' <span className='text-gray-400'>Setup: </span>'' <span className='text-blue-400 font-semibold'>{service.pricing.setup}</span>' </div>'' <div className='flex justify-between text-sm'>'' <span className='text-gray-400'>ROI: </span>'' <span className='text-purple-400 font-semibold'>{service.roi}</span> </div> </div>'' <div className='text-center'> <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${ isSelected ?,
  bg-red-500 hover: bg-red-600 text-white;
  ' : 'bg-purple-600 hover:bg-purple-700 text-white }`} onClick={(e) => { e.stopPropagation() toggleServiceSelection(service.id) }} > {isSelected ?,
  Remove
  ': 'Add to Comparison} </button> </div> </motion.div> ) })} </div> </div> </section> {}' {selectedServices.length > 0 && ('' <section className='py-16 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20'>'' <div className='max-w-7xl mx-auto'>'' <div className='text-center mb-12'>'' <h2 className='text-3xl md: text-4xl font-bold text-white mb-6'> Service Comparison' </h2>'' <p className='text-xl text-gray-300 max-w-3xl mx-auto'> Detailed comparison of selected services to help you make the best choice for your business. </p> </div>'' <div className='overflow-x-auto'>'' <table className='w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden'>' <thead>'' <tr className='bg-white/10'>'' <th className='px-6 py-4 text-left text-white font-semibold'>Features & Details</th>' {selectedServicesData.map((service) => ('' <th key={service?.id} className='px-6 py-4 text-center text-white font-semibold min-w-[250px]'>'' <div className='text-center'> <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(service?.category || '')}`}> {service?.category.replace(
  );
};