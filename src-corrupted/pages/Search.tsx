import React, { useState, useEffect } from 'react';
export default Search;
import { motion  } from 'framer-motion';
export default function Page(props: any) {
,
    { id: 'equipment', name: 'Equipment', count: 0 },
    { id: 'companies', name: 'Companies', count: 0 },
  ];

  const sortOptions = [{ id: 'relevance', name: 'Relevance' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price - low', name: 'Price: Low to High' },
    { id: 'price - high', name: 'Price: High to Low' },
  ];

  const mockResults = [{
      id: 1,
      title: 'AI - Powered Business Intelligence Platform',
      description:
        'Advanced analytics and business intelligence solution powered by machine learning algorithms.',
      type: 'services',
      price: '$5,000 / month',
      rating: 4.8,
      reviews: 12 7,
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
      featured: tru e,
      date: '2024 - 12 - 01',
    },
    {
      id: 2,
      title: 'Senior Full - Stack Developer',
      description:
        'Experienced developer specializing in React, Node.js, and cloud technologies.',
      type: 'talent',
      price: '$120 / hour',
      rating: 4.9,
      reviews: 8 9,
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['React', 'Node.js', 'Full - Stack', 'Cloud'],
      featured: fals e,
      date: '2024 - 11 - 28',
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description:
        'Complete cloud infrastructure design and implementation for enterprise applications.',
      type: 'services',
      price: '$15,000',
      rating: 4.7,
      reviews: 20 3,
      location: 'On - site',
      company: 'Zion Tech Group',
      tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'],
      featured: tru e,
      date: '2024 - 11 - 25',
    },
    {
      id: 4,
      title: 'High-Performance Computing Cluster',
      description:
        'Enterprise - grade computing cluster for data processing and machine learning workloads.',
      type: 'equipment',
      price: '$50,000',
      rating: 4.6,
      reviews: 4 5,
      location: 'On - site',
      company: 'Zion Tech Group',
      tags: ['HPC', 'Computing', 'Data Processing', 'ML'],
      featured: fals e,
      date: '2024 - 11 - 20',
    },
  ];

  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    if(searchQuery) {
      performSearch () ;
    }
  }, [searchQuery, activeCategory, sortBy]) ;

  const performSearch = async () => {
    setLoading(true) ;
    // Simulate API call delay
    await new Promise(resolve => setTimeout (resolve, 500) ) ;

    // Filter results based on search query and category
    let filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase () .includes(searchQuery.toLowerCase () ) ||
        result.description.toLowerCase () .includes(searchQuery.toLowerCase () ) ||
        result.tags.some((tag: string) =>
          tag.toLowerCase () .includes(searchQuery.toLowerCase () ) ) ;

      const matchesCategory = activeCategory === 'all' || result.type === activeCategory;

      return matchesQuery && matchesCategory;
    }) ;

    // Sort results
    filteredResults.sort((a, b) => {
      switch(sortBy) {
        case 'newest':
          return new Date(b.date) .getTime () - new Date(a.date) .getTime () ;
        case 'rating':
          return b.rating - a.rating;
        case 'price - low':
          return (parseFloat (a.price.replace (/[^0 - 9.]/g, '') ) -
            parseFloat(b.price.replace (/[^0 - 9.]/g, '') ) ) ;
        case 'price - high':
          return (parseFloat (b.price.replace (/[^0 - 9.]/g, '') ) -
            parseFloat(a.price.replace (/[^0 - 9.]/g, '') ) ) ;
        default: return 0;
      }
    }) ;

    setResults(filteredResults) ;
    setLoading(false) ;
  };

  const handleSearch = useCallback((e: Reac t.FormEvent) => {
    e.preventDefault () ;
    if(searchQuery.trim () ) {
      performSearch () ;
    }
  };

  const getTypeIcon = (props: any) => {
    switch(type) {
      case 'services':
        return < Server className="w-5 h-5 text-blue -400" />;
      case 'talent':
        return < Users className="w-5 h-5 text-purple -400" />;
      case 'equipment':
        return < Building className="w-5 h-5 text-orange -400" />;
      default: retur n < SearchIcon className="w-5 h-5 text-gray -400" />;
    }
  };

  const getTypeLabel = (props: any) => {
    switch(type) {
      case 'services':
        return 'Service';
      case 'talent':
        return 'Talent';
      case 'equipment':
        return 'Equipment';
      default: retur n 'Unknown';
    }
  };

  return (<>
      <SEO title="Search-Zion Tech Group"
        description="Search for services, talent, equipment, and companies across Zion Tech Group's comprehensive technology marketplace."
        keywords="search, services, talent, equipment, companies, technology marketplace, Zion Tech Group"
       />

      <div  className="min - h-screen bg-gradient - to - br from - blue - 900 via - purple - 900 to - indigo -900">
        {/* Search Header */}
        <section className="pt - 32 pb - 16 px-4">
          <div  className="max - w-7xl mx -auto">
            <motion.div
              initial={{ opacity: 0, y: 2 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md: tex t-6xl font - bold bg-gradient - to - r from - cyan - 400 to - blue - 400 bg-clip - text text-transparent mb-6">
                Search Zion Tech Group
              </h1>
              <p className="text-xl text-gray - 300 max - w-3xl mx -auto">
                Find the perfect services, talent, equipment, and companies for
                your technology needs.</p>
            </motion.div>
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max - w-4xl mx -auto">
              <div  className="relative">
                <SearchIcon className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 text-gray - 400 w-6 h-6"  />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery (e.target.value) }
                  placeholder="Search for services, talent, equipment, companies..."
                  className="w-full pl - 12 pr - 4 py-4 bg-slate - 800 / 50 border border-slate - 700 / 50 rounded-lg text-white placeholder - gray - 400 focus: outlin e - none focus: rin g - 2 focus: rin g - blue - 500 focus: borde r-transparent text-lg"
                />
                <button     type="submit"
                  className="absolute right - 2 top - 1/2 transform - translate - y-1 / 2 bg-gradient - to - r from - blue - 500 to - purple - 500 text-white px-6 py-2 rounded-md font - semibold hover: fro m - blue - 600 hover: t o - purple - 600 transition - all duration -300"
                >
                  Search
                </button>
</div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover: b g-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
};
export default Search;