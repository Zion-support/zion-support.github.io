
  'All Services', icon: Globe, count: INNOVATIVE_SERVICES.length }, { id: 'placeholder',
  AI & Analytics', name: 'AI & Analytics, icon: Brain, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(',
  AI')).length }, { id: 'Cybersecurity, name:;
  'Cybersecurity', icon: Shield, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Cybersecurity')).length }, { id: 'DevOps, name:;
  'DevOps & Infrastructure', icon: Server, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  DevOps')).length }, { id: 'Healthcare, name:;
  'Healthcare & AI', icon: Activity, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Healthcare')).length }, { id: 'Edge Computing, name:;
  'Edge Computing', icon: Cpu, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Edge')).length }, { id: 'Legal Tech, name:;
  'Legal Tech & AI', icon: Scale, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Legal')).length }, { id: 'Customer Success, name:;
  'Customer Success & AI', icon: Users, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Customer')).length }, { id: 'FinTech, name:;
  'FinTech & AI', icon: Coins, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  FinTech')).length }, { id: 'Supply Chain, name:;
  'Supply Chain & AI', icon: Truck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Supply Chain')).length }, { id: 'Content, name:;
  'Content & AI', icon: FileText, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Content')).length }, { id: 'SEO, name:;
  'SEO & AI', icon: Search, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  SEO')).length }, { id: 'IoT, name:;
  'IoT & AI', icon: Wifi, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  IoT')).length }, { id: 'HR, name:;
  'HR & AI', icon: Users2, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  HR')).length }, { id: 'Sales, name:;
  'Sales & AI', icon: Target, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Sales')).length }, { id: 'Compliance, name:;
  'Compliance & AI', icon: ShieldCheck, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Compliance')).length }, { id: 'Cloud, name:;
  'Cloud & FinOps', icon: Cloud, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Cloud')).length }, { id: 'Manufacturing, name:
  'Manufacturing & AI', icon: Factory, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Manufacturing')).length }, { id: 'Space Tech, name:'
  'Space Tech & AI', icon: Satellite, count: INNOVATIVE_SERVICES.filter(s => s.category.includes(,
  Space')).length } ]  const priceRanges = [
  { id: 'all, name:,
  All Prices', range: 'All }, { id: 'placeholder',
  budget', name: 'Budget ($0 - $999), range:',
  0-999' }, { id: 'professional, name:,
  Professional ($1,000 - $2, 999), range: '1000-2999 }, { id: 'placeholder',
  enterprise', name: Enterprise ($3,000 - $5, 999),
  , range: '3000-5999 }, { id: 'placeholder',
  premium', name: Premium ($6,000+),

  innovation', name: 'Innovation Level, icon: Rocket }' { id: 'placeholder',
  delivery', name: 'Delivery Time, icon: Clock } ]  const filteredServices = INNOVATIVE_SERVICES.filter(service => { const matchesCategory = selectedCategory ===',
  all' || service.category.includes(selectedCategory)  let matchesPrice = true if (priceRange ==='
  'budget') matchesPrice = service.price <= 999 else if (priceRange ===;
  'professional') matchesPrice = service.price >= 1000 && service.price <= 2999 else if (priceRange ===;
  'enterprise') matchesPrice = service.price >= 3000 && service.price <= 5999 else if (priceRange ===;
  'premium') matchesPrice = service.price >= 6000  return matchesCategory && matchesPrice })  const sortedServices = [...filteredServices].sort((a, b) => { switch (sortBy) { case;
  'price':  return a.price - b.price case;
  'price-desc': return b.price - a.price case;
  'roi': const aRoi = parseInt(a.roi.split('
  '-')[0]) const bRoi = parseInt(b.roi.split('
  '-')[0]) return bRoi - aRoi case;
  'innovation': const innovationOrder = {'
  'Advanced: 1,
  'Cutting-edge': 2,
  'Revolutionary': 3 } return innovationOrder[a.innovationLevel] - innovationOrder[b.innovationLevel] case,



