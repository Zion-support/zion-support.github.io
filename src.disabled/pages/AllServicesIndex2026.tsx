
  ' ] const innovationLevels = ['all

  ', ...new Set(allServices.map(service => service.innovationLevel))]  const getPriceRange = (price: number) => { if (price < 2000) returnUnder $2, 000,
   if (price < 5000) return '$2, 000 - $5,000;
  ' if (price < 10000) return '$5, 000 - $10,000;
  ' if (price < 20000) return '$10, 000 - $20,000;
  ' return 'Over $20, 000;
  ' }  const filteredServices = allServices.filter(service => { const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()) || service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))  const matchesCategory = selectedCategory === 'all;
  ' || service.category === selectedCategory  const matchesPrice = selectedPriceRange === 'all;

  ': return <Star className='w-5 h-5' />''' case 'Financial Services: return <TrendingUp className='w-5 h-5' />''' default: return <Star className='w-5 h-5' /> } }  const getInnovationLevelColor = (level: string) => { switch (level) { case,

  Revolutionary;
  ': return 'text-purple-600 bg-purple-100;
  ' case 'Cutting-edge;
  ': return 'text-blue-600 bg-blue-100;
  ' case 'Advanced;
  ': return 'text-green-600 bg-green-100;

  ' ? 'All Categories
  ' : category} </option> ))} </select>' {}' <select'; value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}''' className='px-4 py-3 border border-gray-200 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent' > {priceRanges.map(range => ( <option key={range} value={range}> {range === 'all
  ' ? 'All Prices



