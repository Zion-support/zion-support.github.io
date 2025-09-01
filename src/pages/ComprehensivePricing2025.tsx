

  const [selectedIndustry, setSelectedIndustry] = useState('All');

  
  
  
  
    
    return categoryMatch && industryMatch});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for all our cutting-edge technology solutions with proven ROI
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-2">Industry</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border ${
                item.popular ? 'border-zion-cyan' : 'border-white/20'
              } relative`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-zion-cyan text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">${item.price}</span>
                  <span className="text-gray-300">/{item.period}</span>
                </div>
                
                <div className="flex justify-center gap-4 text-sm mb-4">
                  <span className="text-green-400">ROI: {item.roi}</span>
                  <span className="text-blue-400">Delivery: {item.delivery}</span>
                </div>
                
                {item.annualDiscount > 0 && (
                  <div className="text-yellow-400 text-sm mb-4">
                    Save {item.annualDiscount}% with annual billing
                  </div>
                )}
              </div>
              
              <ul className="space-y-2 mb-6">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white py-3 rounded-lg font-medium hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )};

export default ComprehensivePricing2025;