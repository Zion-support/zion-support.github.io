
  Search,
  CheckCircle,
  ArrowRight,
  Rocket,
  Mail,
  Phone,
  MapPin,

} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount }
    {
      id: 'quantum'
      name: 'Quantum Services'
      icon: '⚛️'
      count: quantumCount
    }
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount }
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
    {
      id: 'holographic'
      name: 'Holographic'
      icon: '🎭'
      count: holographicCount
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'under-500', name: 'Under $500', range: 'Under $500' }
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' }
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' }
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name' }
    { id: 'price', name: 'Price' }
    { id: 'rating', name: 'Rating' }
    { id: 'customers', name: 'Customers' }
    { id: 'launchDate', name: 'Launch Date' },  ];
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'quantum')
          return service.category.includes('Quantum');
        if (selectedCategory === 'it')
          return (
            service.category.includes('IT') |
            service.category.includes('Infrastructure')
          );
        if (selectedCategory === 'micro-saas')
          return (
            service.category.includes('Micro SaaS') |
            service.category.includes('Marketing') |
            service.category.includes('Legal') |
            service.category.includes('Health')
          );
        if (selectedCategory === 'holographic')
          return service.category.includes('Holographic');
        return true;
      });    }
    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'under-500') return price < 500;
        if (selectedPriceRange === '500-2000')
          return price >= 500 && price < 2000;
        if (selectedPriceRange === '2000-10000')
          return price >= 2000 && price < 10000;
        if (selectedPriceRange === 'over-10000') return price >= 10000;
        return true;
      });    }
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );    }
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (
            parseInt(a.price.replace(/[^0-9]/g, '')) -
            parseInt(b.price.replace(/[^0-9]/g, ''))
          );        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        case 'launchDate':
          return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
        default: return a.name.localeCompare(b.name)
      }
    });
    return filtered;  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

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
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
    { id: 'launchDate', name: 'Launch Date'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => {;
        if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true;
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Price range filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered.filter(service => {;
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),;
        if (selectedPriceRange === 'under-500') return price < 500,;
        if (selectedPriceRange === '500-2000') return price >= 500 && price < 2000,;
        if (selectedPriceRange === '2000-10000') return price >= 2000 && price < 10000,;
        if (selectedPriceRange === 'over-10000') return price >= 10000,;
        return true;
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Search filter;
    if (searchTerm) {;
      filtered = filtered.filter(service =>;
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
        service.category.toLowerCase().includes(searchTerm.toLowerCase());
      );
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Sort;
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),;
        case 'rating':;
          return b.rating - a.rating,;
        case 'customers':;
          return b.customers - a.customers,;
        case 'launchDate':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),
    return filtered
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>
      <Head>
        <title>Revolutionary 2027 Services Showcase - Zion Tech Group | Next-Generation AI, Quantum & Technology Solutions</title>
        <meta name="description" content="Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting-edge solutions with proven ROI and real-world implementation." />
        <meta property="og:title" content="Revolutionary 2027 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore the future of technology with our revolutionary 2027 services showcase." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2027-services-showcase" />
      </Head>

          >

            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
              Revolutionary 2027
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Showcase
            </h2>

            </p>
            {/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <motion.div className="flex items-center gap-2 text-cyan-400"
                whileHover={{ scale: 1.05 }}

              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >

                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </motion.div>
            </div>

                Get Started Today
              </Link>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </Link>

            </div>
          </motion.div>
        </div>
      </section>

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

              {/* Price Range Filter */}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select

              {/* Sort By */}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select

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

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div

                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 30 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}

                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>

                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>

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

                            Learn More
                          </Link>
                          <a
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </Link>

                        </div>
                      </div>
                    </div>
                  </motion.div>

                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>

                animate={{ opacity: 1 }} className="text-center py-16">;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>;
                <button;
                  onClick={() => {;
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">;
                  Clear Filters;
                </button>;
              </motion.div>;
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </AnimatePresence>;
        </div>;
      </section>;
      {/* Contact CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">

              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary 2027 services.
              Each solution is designed to deliver measurable ROI and competitive advantage.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>

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
              </Link>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                Explore All Services
              </Link>

            </div>
          </motion.div>
        </div>
      </section>
    </UltraQuantumHolographicBackground>

              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
