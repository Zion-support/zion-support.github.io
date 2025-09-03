
  AI & Retail

  ', name: 'AI & Retail', icon: <ShoppingCart className='w-5 h-5' /> } ]  const filteredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2032.filter(service => { const matchesCategory = selectedCategory ===,
  all;
  ' || service.category === selectedCategory const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) return matchesCategory && matchesSearch })  const sortedServices = [...filteredServices].sort((a, b) => { switch (sortBy) { case 'price;
  ':  return a.price - b.price case 'name;



