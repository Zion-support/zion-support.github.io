import { motion, AnimatePresence } from 'framer-motion';
import {
  Search
  CheckCircle
  ArrowRight
  Rocket
  Mail
  Phone
  MapPin
  MessageSquare
  Globe;
  Search,
  CheckCircle,
  ArrowRight,
  Rocket,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components / ui / UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data / revolutionary - 2027 - ai - services';
import {revolutionary2027ITServices} from '../data / revolutionary - 2027 - it - services';
import {revolutionary2027MicroSaasServices} from '../data / revolutionary - 2027 - micro - saas';
;
  MessageSquare,;
  Globe,;
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount }
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...revolutionary2027AIServices;
    ...revolutionary2027ITServices;
    ...revolutionary2027MicroSaasServices;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: all_services.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: ai_count },
    {
      id: 'quantum',
      name: 'Quantum Services',
      icon: '⚛️',
      count: quantum_count,
    },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: it_count },
    { id: 'micro - saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    {
      id: 'holographic',
      name: 'Holographic',
      icon: '🎭',
      count: holographic_count,
    },  ];
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Services',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'holographic',;
      name: 'Holographic',;
      icon: '🎭',;
      count: holographicCount,;
    },  ];

  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
          );
        if (selectedCategory === 'micro-saas');
          return (

            service && service.category.includes('Micro SaaS') ||;
            service && service.category.includes('Marketing') ||;
            service && service.category.includes('Legal') ||;
            service && service.category.includes('Health');

          );
        if (selectedCategory === 'holographic');
          return service && service.category.includes('Holographic');
        return true;
            {/* Contact Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>;
              <motion&& motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Phone className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.mobile}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-purple-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Mail className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.email}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-green-400'


              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                transition={{ type: 'spring', stiffness: 300 }}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI, Quantum Computing, and Next-Generation IT services.
              Each solution delivers measurable ROI and transforms industries.
            </p>
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </motion.div>
            </div>
                Get Started Today
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
              <input
                type='text'
                placeholder='Search revolutionary services...'
                value={searchTerm}
            </div>
            {/* Filters */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}

                </select>;
              </div>;

                  ))}

              {/* Sort By */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </option>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-end">
                <div className="text-gray-300">
                  <span className="text-sm">Showing </span>
                  <span className="font-semibold text-cyan-400">{filteredServices.length}</span>
                  <span className="text-sm"> of </span>
                  <span className="font-semibold text-purple-400">{allServices.length}</span>
                  <span className="text-sm"> services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
              </div>;

              {/* Results Count */}
              <div className='flex items-end'>;
                <div className='text-gray-300'>;
                  <span className='text-sm'>Showing </span>;
                  <span className='font-semibold text-cyan-400'>;
                    {filteredServices && filteredServices.length}
                  </span>;
                  <span className='text-sm'> of </span>;
                  <span className='font-semibold text-purple-400'>;
                    {allServices && allServices.length}
                  </span>;
                  <span className='text-sm'> services</span>                </div>;
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )}
                        </div>
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>
                        </div>;

                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-300 text-sm mb-3 line-clamp-2'>                          {service && service.tagline}
                        </p>;

                        {/* Price */}
                        <div className='flex items-baseline gap-2 mb-4'>;
                          <span className='text-3xl font-bold text-white'>;
                            {service && service.price}
                          </span>;
                          <span className='text-gray-400'>;
                            {service && service.period}
                          </span>;
                        </div>;

                        {/* Description */}
                        <p className='text-gray-300 text-sm mb-4 line-clamp-3'>                          {service && service.description}
                        </p>;

                        {/* Features */}

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                          <div>
                            <div className="text-lg font-bold text-cyan-400">{service.customers}</div>
                            <div className="text-xs text-gray-400">Customers</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-400">{service.rating}</div>
                            <div className="text-xs text-gray-400">Rating</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-400">{service.reviews}</div>
                            <div className="text-xs text-gray-400">Reviews</div>
                          </div>
                        </div>
                          </span>
                        </div>
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service && service.color} text-white`}>                            {service && service.category}
                          </span>;
                        </div>;


                        {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex gap-2">
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </Link>
                          <a
                            href={service && service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'>;
                            <ArrowRight className='w-4 h-4 mr-1' />;
                            Learn More;
                          </a>;
                          <a
                            href='/contact'
                            className='px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300'>;
                            <MessageSquare className='w-4 h-4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion && motion.div>;
                        <div className="flex gap-2">
                          <a 
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </a>
                          <a 
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the future of technology with our revolutionary 2027
              services. Each solution is designed to deliver measurable ROI and
              competitive advantage.
            </p>

            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                className='text - center py - 16';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400 mb - 6'>;
                  Try adjusting your search criteria or filters;
                </p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                    setSelectedPriceRange ('all');
                  }}
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                >                  Clear Filters;
                </button>;
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </section>;
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </div>
            </div>
                Start Your Transformation
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>
  )
}
            <div className='flex flex - wrap items - center justify - center gap - 6 mb - 8'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Start Your Transformation;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                Explore All Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </UltraQuantumHolographicBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
