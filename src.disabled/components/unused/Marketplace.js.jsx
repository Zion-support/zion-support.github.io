
  ai-solutions;
  ', name: 'AI: Solution,s, icon: Brai,n, count: 8 }' { id: 'placeholder'',;
  cybersecurity;
  ', name: 'Cybersecurit,y, icon: Shiel,d, count: 6 }' { id: 'placeholder'',;
  cloud-infrastructure;
  ', name: 'Cloud: & Infrastructur,e, icon: Clou,d, count: 5 }' { id: 'placeholder'',;
  blockchain;
  ', name: 'Blockchain: & Web,3, icon: Networ,k, count: 3 }' { id: 'placeholder'',;
  iot-platforms;

  all;
  ', name: 'All: Prices }' { id: 'placeholder'',;
  free;
  ', name: 'Free }' { id: 'placeholder'',;
  under-100;
  ', name: 'Under: $100 }' { id: 'placeholder'',;
  100-500;
  ', name: '$100: - $500 }' { id: 'placeholder'',;
  500-1000;

  Featured;
  ' }, { id: 'price-lo,w, name:',;
  Price: Low: to High }, { id: 'placeholder',
  price-high;

  newest;
  ', name: 'Newest }' { id: 'placeholder'',;
  popular;
  ', name: 'Most: Popular }' { id: 'placeholder'',;
  rating;

  ' ], tags: ['AI, 'Business Automation;
  ,Enterprise;
  ,Cloud;
  '], featured: true, new: false, discount: 25, type: 'software;
  ' }, { id: 2, name:,
  Quantum Neural Network Framework;
  ', description: 'Advanced quantum computing framework for neural network development and optimization., category: 'ai-solutions;
  ', price: 1499, originalPrice: 1999, currency: 'USD;
  ', rating: 4.8, reviewCount: 89, image:,
  /images/marketplace/quantum-framework.jpg;
  ', features[';Quantum algorithm optimization;

  ' ], tags: ['Quantum Computing, 'AI;
  ,Research;
  ,Python;
  '], featured: true, new: true, discount: 25, type: 'software;
  ' }, { id: 3, name:,
  SOC2 Compliance Automation Suite;
  ', description: 'Comprehensive security and compliance automation platform for enterprise organizations., category: 'cybersecurity;
  ', price: 899, originalPrice: 1199, currency: 'USD;
  ', rating: 4.7, reviewCount: 156, image:,
  /images/marketplace/soc2-suite.jpg;
  ', features[';Automated compliance checks;

  ' ], tags: ['Cybersecurity, 'Compliance;
  ,SOC2;
  ,Enterprise;
  '], featured: false, new: false, discount: 25, type: 'software;
  ' }, { id: 4, name:,
  5G Enterprise Network Kit;
  ', description: 'Complete 5G networking solution for enterprise environments with advanced security., category: 'cloud-infrastructure;
  ', price: 2499, originalPrice: 2999, currency: 'USD;
  ', rating: 4.6, reviewCount: 73, image:,
  /images/marketplace/5g-kit.jpg;
  ', features[';5G network infrastructure;

  ' ], tags: ['5G, 'Networking;
  ,Enterprise;
  ,Infrastructure;
  '], featured: false, new: false, discount: 17, type: 'hardware;
  ' }, { id: 5, name:,
  AI Workflow Templates Pack;
  ', description: 'Collection of 50+ pre-built AI workflow templates for common business processes., category: 'ai-solutions;
  ', price: 199, originalPrice: 299, currency: 'USD;
  ', rating: 4.5, reviewCount: 234, image:,
  /images/marketplace/workflow-templates.jpg;
  ', features[';50+ workflow templates;

  ' ], tags: ['AI, 'Workflows;
  ,Templates;
  ,Business;
  '], featured: false, new: false, discount: 33, type: 'template;
  ' }, { id: 6, name:,
  Blockchain DeFi Development Kit;
  ', description: 'Complete toolkit for building decentralized finance applications on blockchain., category: 'blockchain;
  ', price: 599, originalPrice: 799, currency: 'USD;
  ', rating: 4.4, reviewCount: 98, image:,
  /images/marketplace/blockchain-defi.jpg;
  ', features[';Smart contract templates;

  ' ], tags: ['Blockchain, 'DeFi;
  ,Smart Contracts;
  ,Development;
  '], featured: false, new: true, discount: 25, type: 'development-kit;
  ' }, { id: 7, name:,
  IoT Data Analytics Platform;
  ', description: 'Enterprise IoT platform with advanced analytics and machine learning capabilities., category: 'iot-platforms;
  ', price: 1799, originalPrice: 2299, currency: 'USD;
  ', rating: 4.3, reviewCount: 67, image:,
  /images/marketplace/iot-platform.jpg;
  ', features[';IoT device management;

  ' ], tags: ['IoT, 'Analytics;
  ,Machine Learning;
  ,Enterprise;
  '], featured: false, new: false, discount: 22, type: 'platform;
  ' }, { id: 8, name:,
  Cybersecurity Threat Intelligence;
  ', description: 'Real-time threat intelligence and security monitoring service., category: 'cybersecurity;
  ', price: 399, originalPrice: 599, currency: 'USD;
  ', rating: 4.8, reviewCount: 189, image:,
  /images/marketplace/threat-intelligence.jpg;
  ', features[';Real-time threat feeds;

  ' ], tags: ['Cybersecurity, 'Threat Intelligence;
  ,Monitoring;
  ,Security;
  '], featured: false, new: false, discount: 33, type:,
  service;
  ' } ] const filteredProducts = marketplaceProducts.filter(product => { const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) const matchesCategory = selectedCategory === 'all;

  ') { matchesPrice = product.price < 100} else if (selectedPriceRange === '100-500;
  ') { matchesPrice = product.price >= 100 && product.price <= 500} else if (selectedPriceRange === '500-1000;
  ') { matchesPrice = product.price >= 500 && product.price <= 1000} else if (selectedPriceRange === 'over-1000;
  ') { matchesPrice = product.price > 1000} return matchesSearch && matchesCategory && matchesPrice}) const sortedProducts = [...filteredProducts].sort((a, b) => { switch (sortBy) { case 'price-low;
  ':  return a.price - b.price case 'price-high;
  ': return b.price - a.price case 'newest;
  ': return b.new ? 1 : -1 case 'popular;



