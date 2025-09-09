

  ']  const getPriceRange = (price: number) => { if (price < 5000) return 'Under $5K;
  ' if (price < 10000) return '$5K-$10K;
  ' if (price < 20000) return '$10K-$20K;
  ' return 'Over $20K }  const filteredServices = COMPREHENSIVE_INNOVATIVE_SERVICES_2030.filter(service => { const matchesSearch = service.title?.toLowerCase().includes(searchQuery.toLowerCase()) || service.description?.toLowerCase().includes(searchQuery.toLowerCase()) || service.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))  const matchesCategory = selectedCategory ===,
  All;
  ' || service.category === selectedCategory  const matchesPrice = selectedPriceRange === 'All;
  ' || getPriceRange(service.price || 0) === selectedPriceRange  return matchesSearch && matchesCategory && matchesPrice })  const sortedServices = [...filteredServices].sort((a, b) => { switch (sortBy) { case 'featured;
  ':  return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) case 'rating;


  grid;
  ' ? 'grid lg: grid-cols-3 gap-8;
  ' : 'space-y-6} > {allServices.map((service, index) => ( <motion.div key={service.id} variants={itemVariants} className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover: border-white/40 transition-all duration-300 hove,
    r:transform hove,
    r:scale-105 group ${ viewMode ===,
  grid;`
  ' ? 'p-6;
  );
};