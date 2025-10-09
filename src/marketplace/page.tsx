'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MarketplacePage: React.FC = () =>{
  const [activeCategory, setActiveCategory] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredItems = () => {
    const items = getItemsByCategory(activeCategory);
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  const getItemsByCategory = (category: string) => {
    switch (category) {
      case 'products':
        return products;
      case 'services':
        return services;
      case 'talent':
        return talent;
      case 'equipment':
        return equipment;
      default:
        return []
    }
  }
        return (
    <>
      <Navigation />
      <div>
        <div>
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Zion Tech Marketplace</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover, compare, and purchase AI and IT solutions from verified vendors. 
              Find the perfect tools, talent, and equipment for your business needs.
            </p>
          </div>
          {/* Stats */}
          <div>
            {stats.map((stat, index) => (
              <div>
                <div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Search and Filters */}
          <div>
            <div>
              <div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search marketplace..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <button className="px-6 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white hover:bg-slate-700 transition-colors flex items-center">
                <Filter className="w-5 h-5 mr-2" />Filters</button>
            </div>
            {/* Category Tabs */}
            <div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} ${category.color} border-2 border-current`
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border-2 border-transparent'
                  }`}
                >
                  <category.icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Items Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} ({filteredItems.length})
            </h2>
            <div>
              {filteredItems.map((item) => (
                <div>
                  <div>
                    <div className="text-4xl mr-4">{item.image}</div>
                    <div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        {item.verified && (
                          <div>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                      <div>
                        <span className="mr-2">{item.category}</span>
                        {item.vendor && <span>• {item.vendor}</span>}
                      </div>
                    </div>
                  </div>
                  {activeCategory === 'products' && (
                    <>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div>
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.reviews} reviews)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.price}</div>
                      </div>
                    </>
                  )}

                  {activeCategory === 'talent' && (
                    <>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
                        <div>
                          {item.expertise.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div>
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.projects} projects)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.rate}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">{item.experience} experience</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {item.available ? 'Available' : 'Busy'}
                        </span>
                      </div>
                    </>
                  )}

                  {activeCategory === 'equipment' && (
                    <>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Specifications:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div>
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm text-white font-medium">{item.rating}</span>
                          <span className="text-sm text-gray-400 ml-1">({item.reviews} reviews)</span>
                        </div>
                        <div className="text-lg font-bold text-cyan-400">{item.price}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">{item.vendor}</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </>
                  )}

                  <button className="w-full mt-4 bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center">
                    {activeCategory === 'talent' ? 'Contact' : 'Add to Cart'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Why Choose Our Marketplace?
            </h2>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <div>
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Find Your Perfect Solution?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">Browse our marketplace to discover the tools, talent, and equipment you need
              to transform your business with cutting-edge technology.
            </p>
            <div>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />Start Shopping</a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />(302) 464-0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />Email Us</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);
}
export default MarketplacePage