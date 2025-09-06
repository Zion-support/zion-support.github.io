import React, { useState } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  ArrowRight, Star, TrendingUp, Zap, Brain, Atom,
  Rocket, Shield, Target, CheckCircle, ExternalLink,
  Search, Filter, Grid, List, ChevronDown
} from 'lucide-react',
import { cuttingEdge2027Innovations } from '../../data/2027-cutting-edge-innovations',
import { practicalMicroSaas2027 } from '../../data/2027-practical-micro-saas',
import { emergingTech2027Services } from '../../data/2027-emerging-tech-services',
const Enhanced2027ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [sortBy, setSortBy] = useState('name'),

  // Combine all 2027 services,
const all2027Services = [
    ...cuttingEdge2027Innovations,
    ...practicalMicroSaas2027,
    ...emergingTech2027Services
  ],

  // Get unique categories,
const categories = ['all', ...Array.from(new Set(all2027Services.map(service => service.category)))],
  // Filter and sort services,
const filteredServices = all2027Services
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory,
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {        case 'name':
          return a.name.localeCompare(b.name),
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')),
        case 'roi':
          return parseFloat(a.roi.replace(/[^0-9.]/g, '')) - parseFloat(b.roi.replace(/[^0-9.]/g, '')),
        default: return 0
      }
    }),

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600Quantum Computing': 'from-blue-500 to-cyan-600Emerging Technology': 'from-green-500 to-emerald-600Business Operations': 'from-orange-500 to-red-600Cybersecurity': 'from-red-500 to-pink-600Enterprise IT': 'from-indigo-500 to-purple-600Healthcare & Biotechnology': 'from-emerald-500 to-teal-600Financial Technology': 'from-yellow-500 to-orange-600Space Technology': 'from-violet-500 to-purple-600Neural Technology': 'from-pink-500 to-rose-600Materials Science': 'from-cyan-500 to-blue-600Environmental Technology': 'from-teal-500 to-green-600'
    },
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
  },

  const getCategoryIcon = (category: string) => {
    const icons = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Quantum Computing': <Atom className="w-5 h-5" />,
      'Emerging Technology': <Rocket className="w-5 h-5" />,
      'Business Operations': <Target className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Enterprise IT': <Zap className="w-5 h-5" />,
      'Healthcare & Biotechnology': <Brain className="w-5 h-5" />,
      'Financial Technology': <TrendingUp className="w-5 h-5" />,
      'Space Technology': <Rocket className="w-5 h-5" />,
      'Neural Technology': <Brain className="w-5 h-5" />,
      'Materials Science': <Atom className="w-5 h-5" />,
      'Environmental Technology': <Rocket className="w-5 h-5" />
    },
    return icons[category as keyof typeof icons] || <Zap className="w-5 h-5" />
  }  };

  return (
    <section className=&quot;py-20 bg-gray-900&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        {/* Header */}
        <motion.div,
className=&quot;text-center mb-16&quot;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}        >
          <h2 className=&quot;text-5xl font-bold mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              2027 Revolutionary Services
            </span>
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed&quot;>
            Discover our cutting-edge portfolio of 500+ innovative services spanning AI consciousness, 
            quantum computing, synthetic biology, and beyond. Each service delivers measurable ROI             and transforms your business into a future-ready powerhouse.
          </p>
        </motion.div>

        {_/* Search and Filters */}
        <motion.div,
className=&quot;mb-12&quot;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className=&quot;bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6&quot;>
            <div className=&quot;flex flex-col lg:flex-row gap-6 items-center justify-between&quot;>
              {/* Search */}
              <div className=&quot;flex-1 max-w-md&quot;>
                <div className=&quot;relative&quot;>
                  <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                  <input,
type=&quot;text&quot;
                    placeholder=&quot;Search services, features, or use cases...&quot;
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=&quot;w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50&quot;                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className=&quot;flex items-center space-x-4&quot;>
                <div className=&quot;relative&quot;>
                  <select,
value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=&quot;appearance-none bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 pr-10&quot;                  >
                    {categories.map(_(category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none&quot; />
                </div>

                {/* Sort */}
                <div className=&quot;relative&quot;>
                  <select,
value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className=&quot;appearance-none bg-gray-700/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 pr-10&quot;                  >
                    <option value=&quot;name&quot;>Sort by Name</option>
                    <option value=&quot;price&quot;>Sort by Price</option>
                    <option value=&quot;roi&quot;>Sort by ROI</option>
                  </select>
                  <ChevronDown className=&quot;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none&quot; />
                </div>

                {/* View Mode */}
                <div className=&quot;flex bg-gray-700/50 rounded-xl p-1&quot;>                  <button,
onClick={_() => setViewMode('grid')}
                    className={_`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className=&quot;w-5 h-5&quot; />
                  </button>
                  <button,
onClick={_() => setViewMode('list')}
                    className={_`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className=&quot;w-5 h-5&quot; />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {_/* Results Count */}
        <motion.div,
className=&quot;mb-8&quot;
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className=&quot;text-gray-400&quot;>
            Showing <span className=&quot;text-cyan-400 font-semibold&quot;>{filteredServices.length}</span> of{' '}
            <span className=&quot;text-cyan-400 font-semibold&quot;>{all2027Services.length}</span> services
          </p>
        </motion.div>

        {/* Services Grid/List */}
        <AnimatePresence mode=&quot;wait&quot;>
          {viewMode === 'grid' ? (
            <motion.div,
key=&quot;grid&quot;
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;            >
              {filteredServices.map((service, index) => (
                <motion.div,
key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2&quot;>
                    {/* Header */}
                    <div className=&quot;flex items-start justify-between mb-4&quot;>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} shadow-lg`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <div className=&quot;text-right&quot;>
                        <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                        <div className=&quot;text-sm text-gray-400&quot;>ROI: {service.roi}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors&quot;>
                      {service.name}
                    </h3>
                    <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>
                      {service.description}
                    </p>;
;
                    {/* Features */}
                    <div className=&quot;mb-4&quot;>
                      <h4 className=&quot;text-sm font-semibold text-gray-400 mb-2&quot;>Key Features:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-cyan-400 mr-2 flex-shrink-0&quot; />
                            {feature}                          </li>
                        ))}
                      </ul>;
                    </div>;
;
                    {/* Tags */}
                    <div className=&quot;flex flex-wrap gap-2 mb-6&quot;>
                      {service.tags.slice(0, 3).map((tag, idx) => (                        <span,
key={idx}
                          className=&quot;px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50&quot;
                        >
                          {tag}
                        </span>;
                      ))}
                    </div>

                    {_/* CTA */}
                    <Link,
href={service.link}
                      className=&quot;inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25&quot;                    >
                      <span>Learn More</span>
                      <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div,
key=&quot;list&quot;
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className=&quot;space-y-4&quot;            >
              {filteredServices.map((service, index) => (
                <motion.div,
key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className=&quot;group&quot;
                >
                  <div className=&quot;bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300&quot;>
                    <div className=&quot;flex flex-col lg:flex-row items-start lg:items-center gap-6&quot;>
                      {/* Icon and Category */}
                      <div className=&quot;flex items-center space-x-4&quot;>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)} shadow-lg`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <div className=&quot;text-sm text-gray-400&quot;>{service.category}</div>
                          <div className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className=&quot;flex-1&quot;>
                        <h3 className=&quot;text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors&quot;>
                          {service.name}
                        </h3>
                        <p className=&quot;text-gray-300 mb-3 leading-relaxed&quot;>
                          {service.description}
                        </p>
                        <div className=&quot;flex flex-wrap gap-2 mb-3&quot;>
                          {service.tags.slice(0, 4).map((tag, idx) => (                            <span,
key={idx}
                              className=&quot;px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50&quot;
                            >
                              {tag}
                            </span>;
                          ))}
                        </div>;
                      </div>;
;
                      {/* Stats and CTA */}
                      <div className=&quot;flex flex-col items-end space-y-3&quot;>
                        <div className=&quot;text-right&quot;>
                          <div className=&quot;text-sm text-gray-400&quot;>ROI</div>
                          <div className=&quot;text-lg font-bold text-green-400&quot;>{service.roi}</div>
                        </div>
                        <Link,
href={service.link}
                          className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25&quot;                        >
                          <span>Learn More</span>
                          <ArrowRight className=&quot;w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform&quot; />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>;
          )}
        </AnimatePresence>;
;
        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div,
className=&quot;text-center py-20&quot;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}          >
            <div className=&quot;text-6xl mb-4&quot;>🔍</div>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>No services found</h3>
            <p className=&quot;text-gray-400 mb-8&quot;>
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <button,
onClick={() => {
                setSearchTerm(''),
                setSelectedCategory('all')
              }}
              className=&quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {_/* CTA Section */}
        <motion.div,
className=&quot;mt-20 text-center&quot;
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}        >
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Our team of experts is ready to help you implement these revolutionary services,
and achieve unprecedented growth. Let's build the future together.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <Link,
href=&quot;/contact&quot;
                className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25&quot;
              >
                <span>Get Started Today</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <Link,
href=&quot;/pricing&quot;
                className=&quot;inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50&quot;
              >
                <span>View Pricing</span>
                <TrendingUp className=&quot;w-5 h-5&quot; />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
},

export default Enhanced2027ServicesShowcase,  /* Search and Filters */ 
}<motion.div /> </div> </div> > {
  categories.map ( (category) => (<option key= {
  category 
}value= {
  category 
}> {
  category === 'all' ? 'All Categories' : category 
}</option>) ) 
}</select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> </div> > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="roi" >Sort by ROI</option> </select> <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" /> </div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-200 $ {
  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-200 $ {
  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </div> </div> </div> </motion.div> {
  /* Results Count */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}</li>) ) 
}</ul> </div> <span key= {
  idx 
}className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50" > {
  tag 
}</span>) ) 
}</div> {
  /* CTA */ 
}<Link > <span>Learn More</span> <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </a> </div> </motion.div>) ) 
}</motion.div> > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}<span key= {
  idx 
}className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50" > {
  tag 
}</span>) ) 
}</div> </div> > <span>Learn More</span> <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /> </a> </div> </div> </div> </motion.div>) ) 
}</motion.div>) 
}</AnimatePresence> > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-white mb-4" >No services found</h3> <p className="text-gray-400 mb-8" > Try adjusting your search terms or category filter to find what you're looking for. </p> <button > Clear Filters </button> </motion.div>) 
}{
  /* CTA Section */ 
}<motion.div > Ready to Transform Your Business? </h3> <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" > Our team of experts is ready to help you implement these revolutionary services and achieve unprecedented growth. Let's build the future together. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" > <Link href="/contact" className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25" > <span>Get Started Today</span> <ArrowRight className="w-5 h-5" /> </a> <Link href="/pricing" className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-600/50" > <span>View Pricing</span> <TrendingUp className="w-5 h-5" /> </a> </div> </div> </motion.div> </div> </section>) 
};
export default Enhanced2027ServicesShowcase;
