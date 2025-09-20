}} transition={{ delay: 0.1 }} className="bg-white rounded-lg shadow-lg p - 6 mb-8">
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap-4">
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Category</label>
            <select value={filters.category} onChange = { (e) => setFilters(prev => ({ ...prev,
  category: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Complexity</label>
            <select value={filters.complexity} onChange = { (e) => setFilters(prev => ({ ...prev,
  complexity: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Price Range</label>
            <select value={filters.priceRange} onChange = { (e) => setFilters(prev => ({ ...prev,
  priceRange: e.target.value
          <div>
            <label className="block text-sm font - medium text-zion - slate - dark mb-2">Technology</label>
            <select value={filters.technology} onChange = { (e) => setFilters(prev => ({ ...prev,
  technology: e.target.value
