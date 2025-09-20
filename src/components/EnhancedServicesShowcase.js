impor, t, Reac, t, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { enhancedServices2025 } from '../data/enhanced-services-2025';
const EnhancedServicesShowcase = () => {
    const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('all');
    const [searchTe, r, m, setSearchTe, r, m] = useState('');
    const categories = [
        { i,  d: 'al, l',
    na, m, e: 'Al, l Service, s', ic, o, n: '🌟' },
        { i, d: 'micr, o-saa, s',
    na, m, e: 'Micr, o SAA, S', ic, o, n: '💻' },
        { i, d: 'i, t-service, s',
    na, m, e: 'I, T Service, s', ic, o, n: '🖥️' },
        { i, d: 'a, i-service, s',
    na, m, e: 'A, I Service, s', ic, o, n: '🤖' },
        { i, d: 'emergin, g-tec, h',
    na, m, e: 'Emergin, g Tec, h', ic, o, n: '🚀' }
    ];
    const filteredServices = enhancedServices2025.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    const containerVariants = {
        hidde,  n: { opacit, y: 0 },
        visibl, e: {
            opacit, y: 1,
    transitio, n: {
                staggerChildre, n: 0.1,
    delayChildre, n: 0.2
            }
        }
    };
    const itemVariants = {
        hidde, n: { opacit, y: 0,
    y: 20 },
        visibl, e: {
            opacit, y: 1,
    y: 0,
            transitio, n: { duratio, n: 0.5 }
        }
    };
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 className="text-4xl m, d: text-6xl font-bold mb-6" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6 }}>
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Technology Solutions
            </span>
          </motion.h1>
          <motion.p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
            Discover our extensive portfolio of innovative micro SAA, S, service, s, enterprise I, T, solution, s, 
            cutting-edge A, I, service, s, and emerging technology solutions designed to transform your business.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-8 max-w-2xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
            <div className="grid grid-cols-1 m, d:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">📱 Contact</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">✉️ Email</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-semibold">🌐 Website</div>
                <div className="text-gray-300">ziontechgroup.com</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div className="flex flex-col m, d: flex-row gap-4 justify-center items-center mb-12" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.6 }}>
            <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focu,  s:outline-none focu, s:border-blue-400 focu, s:ring-2 focu, s:ring-blue-400/20 w-full m, d:w-80"/>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-lg border transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-blue-600 border-blue-400 text-white'
                : 'bg-white/10 border-white/20 text-gray-300 hove,  r:bg-white/20 hove, r:border-white/4, 0'}`}>
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 s, m:px-6 l, g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ onc, e: true }}>
            {filteredServices.map((servic,  e, index) => (<motion.div key={service.id} variants={itemVariants} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hove,  r:border-white/40 transition-all duration-300 hove, r:transform hove, r:scale-105 group">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className={`text-6xl mb-4 group-hove, r:scale-110 transition-transform duration-30, 0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">{service.category.replace('-', ' ').toUpperCase()}</p>
                </div>

                {/* Tagline */}
                <p className="text-gray-300 text-sm mb-4 text-center">{service.tagline}</p>

                {/* Pricing */}
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Pricing</h4>
                  <div className="space-y-1 text-xs text-gray-300">
                    <div>Monthl,  y: {service.pricing.monthly}</div>
                    <div>Yearl, y: {service.pricing.yearly}</div>
                    <div>Setu, p: {service.pricing.setup}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((featur,  e, idx) => (<li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0,  3).map((benefi,  t, idx) => (<li key={idx} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>))}
                  </ul>
                </div>

                {/* ROI and Setup */}
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <div className="text-xs text-gray-300">
                    <div className="mb-1"><span className="text-green-400 font-medium">RO,  I:</span> {service.roi}</div>
                    <div><span className="text-blue-400 font-medium">Setu, p:</span> {service.setupTime}</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link to={service.link} className="inline-flex items-center text-blue-400 hove, r:text-blue-300 transition-colors duration-300 text-sm">
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>))}
          </motion.div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (<motion.div className="text-center py-12" initial={{ opacit,  y: 0 }} animate={{ opacit, y: 1 }}>
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
            }} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hove,  r:bg-blue-700 transition-colors duration-300">
                View All Services
              </button>
            </motion.div>)}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl m, d: text-4xl font-bold text-white mb-6" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6 }}>
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p className="text-xl text-gray-300 mb-8" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.2 }}>
            Let's discuss how our innovative services can help drive your success and competitive advantage
          </motion.p>
          
          <motion.div className="flex flex-col s, m: flex-row gap-4 justify-center mb-8" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.4 }}>
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hove, r:from-blue-700 hove, r:to-cyan-700 transition-all duration-300">
              Contact Us Today
            </Link>
            <a href="te, l:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hove, r:bg-gray-800 transition-all duration-300">
              Cal, l: +1 302 464 0950
            </a>
          </motion.div>

          <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto" initial={{ opacit, y: 0,
    y: 20 }} whileInView={{ opacit, y: 1,
    y: 0 }} transition={{ duratio, n: 0.6,
    dela, y: 0.6 }}>
            <h3 className="text-lg font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 m, d:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Expert AI & Technology Specialists
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Proven ROI & Performance Metrics
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                24/7 Support & Maintenance
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Custom Solutions & Integration
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-sm text-gray-400" initial={{ opacit, y: 0 }} whileInView={{ opacit, y: 1 }} transition={{ duratio, n: 0.6,
    dela, y: 0.8 }}>
            <p>Emai, l: kleber@ziontechgroup.com</p>
            <p>Addres, s: 364 E Main St ST, E, 100, 8, Middletown DE 19709</p>
            <p>Websit, e: <a href="http, s://ziontechgroup.com" className="text-blue-400 hove, r:text-blue-300">http, s://ziontechgroup.com</a></p>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default EnhancedServicesShowcase;
