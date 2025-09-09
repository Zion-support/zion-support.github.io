
  ') const [sortBy, setSortBy] = useState('rating;
  ') const [priceRange, setPriceRange] = useState([0, 50000])  const categories = ['All'
  ', ...Array.from(new Set(COMPREHENSIVE_SERVICES_2030.map(service => service.category)))]  const filteredServices = useMemo(() => { let filtered = COMPREHENSIVE_SERVICES_2030.filter(service => { const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()) || service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))  const matchesCategory = selectedCategory === 'All'

  ' || service.category === selectedCategory  const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1]  return matchesSearch && matchesCategory && matchesPrice }) ';

