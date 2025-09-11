

} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion',;
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services',;
export default function Comprehensive2025InnovativeServicesShowcase() {
  // Combine all services
  const allServices = [...comprehensiveInnovativeServices, ...specializedEnterpriseServices],

import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  ArrowRight, CheckCircle, Globe,;
  Search, Grid, List, Star as StarIcon,;
  Phone, Mail, MapPin;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion';
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services';
export default function Comprehensive2025InnovativeServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity')
  const [priceRange, setPriceRange] = useState<'all' | 'budget' | 'mid' | 'enterprise'>('all')
  // Combine all services
  const allServices = [...comprehensiveInnovativeServices, ...specializedEnterpriseServices]
  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length }
    { id: 'AI & Machine Learning', name: 'AI & ML', count: allServices.filter(s => s.category.includes('AI') |s.category.includes('Machine Learning')).length }
    { id: 'Cybersecurity', name: 'Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length }
    { id: 'DevOps & Infrastructure', name: 'DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length }
    { id: 'Edge Computing', name: 'Edge Computing', count: allServices.filter(s => s.category.includes('Edge')).length }
    { id: 'Healthcare AI', name: 'Healthcare', count: allServices.filter(s => s.category.includes('Healthcare')).length }
    { id: 'Financial Technology', name: 'FinTech', count: allServices.filter(s => s.category.includes('Financial')).length }
    { id: 'Education Technology', name: 'EdTech', count: allServices.filter(s => s.category.includes('Education')).length }
    { id: 'Supply Chain & Logistics', name: 'Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length }
    { id: 'Energy & Sustainability', name: 'Energy', count: allServices.filter(s => s.category.includes('Energy')).length }
    { id: 'Advanced AI & Consciousness', name: 'AI Consciousness', count: allServices.filter(s => s.category.includes('Consciousness')).length }
    { id: 'Quantum Computing & AI', name: 'Quantum AI', count: allServices.filter(s => s.category.includes('Quantum')).length }
    { id: 'Space Technology', name: 'Space Tech', count: allServices.filter(s => s.category.includes('Space')).length }
    { id: 'Neural Technology & BCI', name: 'Neural Tech', count: allServices.filter(s => s.category.includes('Neural')).length }
    { id: 'Advanced IoT & Edge Computing', name: 'Advanced IoT', count: allServices.filter(s => s.category.includes('Advanced IoT')).length }
  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(, '')),
    if (numPrice < 1000) return 'budget',
    if (numPrice < 5000) return 'mid',
    return 'enterprise'
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
        duration: 0.5;
      }
    }

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'


          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        default: return 0
      }
    }),

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1}
    }
  },

  const _itemVariants = {_hidden: { opacity: 0, _y: 20},
    visible: {_opacity: 1, _y: 0, _transition: {
        duration: 0.5}
    }
  },
  };
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
  },


    website: 'https://ziontechgroup.com'
  }
  },  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting-edge IT services." />
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-2025-services-showcase" />
      </Head>
      <EnhancedNavigation />
  },
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com';
  },
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white overflow - hidden">;
      <Head>;
        <title > Comprehensive 2025 Innovative Services Showcase — Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services. Transform your business with Zion Tech Group." />;
        <meta property="og:title" content="Comprehensive 2025 Innovative Services Showcase — Zion Tech Group" />;
        <meta property="og:description" content="Explore our comprehensive collection of innovative micro SAAS services, AI solutions, quantum technologies, and cutting - edge IT services." />;
        <meta name="keywords" content="micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / comprehensive - 2025 - services - showcase" />;
      </Head>;
      <EnhancedNavigation />;

      {/* Hero Section */}

      {/* Hero Section */}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}


            {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{allServices.filter(s => s.popular).length}</div>
                <div className="text-white/60">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{allServices.filter(s => s.realService).length}</div>
                <div className="text-white/60">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{allServices.filter(s => s.rating >= 4.5).length}</div>
                <div className="text-white/60">Top Rated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

          >;
            <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent">;
              2025 Comprehensive Services Showcase;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto leading - relaxed mb - 8">;
              Discover our extensive collection of cutting - edge micro SAAS services, AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.;
            </p>;
            {/* Contact Information */}
            <div className="flex flex - wrap justify - center gap - 6 mb - 8 text - white / 70">;
              <div className="flex items - center gap - 2">;
                <Phone className="w - 5 h - 5" />;
                <span>{contact_info.mobile}</span>;
              </div>;
              <div className="flex items - center gap - 2">;
                <Mail className="w - 5 h - 5" />;
                <span>{contact_info.email}</span>;
              </div>;
              <div className="flex items - center gap - 2">;
                <MapPin className="w - 5 h - 5" />;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
            {/* Stats */}
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 max - w-4xl mx - auto">;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - cyan - 400">{all_services.length}+</div>;
                <div className="text - white / 60">Services Available</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - purple - 400">{all_services.filter (string => s.popular).length}</div>;
                <div className="text - white / 60">Popular Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - green - 400">{all_services.filter (string => s.real_service).length}</div>;
                <div className="text - white / 60">Real Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - orange - 400">{all_services.filter (string => s.rating >= 4.5).length}</div>;
                <div className="text - white / 60">Top Rated</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Contact Information */}
              Discover our extensive collection of cutting-edge micro SAAS services, AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            {/* Stats */}
            {/* Stats */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-white/60">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{allServices.filter(s => s.popular).length}</div>
                <div className="text-white/60">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{allServices.filter(s => s.realService).length}</div>
                <div className="text-white/60">Real Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">{allServices.filter(s => s.rating >= 4.5).length}</div>
                <div className="text-white/60">Top Rated</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Search and Filters */}
      <section className="px - 6 pb - 12">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg - white / 5 backdrop - blur - xl rounded - 2xl p - 6 border border - white / 10";
          >;
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSearchTerm(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
            {/* Filters */}
            <div className="grid grid - cols - 1 md:grid - cols - 4 gap - 4">;              {/* Category Filter */}


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
                <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
                <select
                  value={selectedCategory  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  onChange={(e) => setSelectedCategory(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </select>;
              </div>;
              {/* Price Range Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Price Range</label>
                <select
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0 - $999)</option>
                  <option value="mid">Mid-Range ($1,000 - $4,999)</option>
                  <option value="enterprise">Enterprise ($5,000+)</option>
                </select>
              </div>
              {/* Sort By */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Sort By</label>
                <select
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
              {/* View Mode */}              {/* View Mode */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">View Mode</label>
                <div className="flex gap-2">
                  <button
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 

                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}

            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-white/60">

                Showing results for &quot,{searchTerm || 'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}

                Showing results for &quot,{searchTerm || 'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
                Showing results for &quot,{searchTerm |'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
                Showing results for &quot,{searchTerm || 'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}
                Showing results for &quot,{searchTerm || 'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}


                Showing results for &quot,{searchTerm || 'all services'}&quot, in {selectedCategory === 'all' ? 'all categories' : selectedCategory}

            </div>
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');

                    setPriceRange('all')

                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300"
                    setPriceRange('all')
                  }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300"                >
                  Clear Filters
                </button>
              </div>
            ) : (


                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }>
                {filteredServices.map((service, index) => (
                  <motion.div
              <div>;
                <label className="block text - sm font - medium text - white / 70 mb - 2">Category</label>;
                <select;
                  value={selected_category}
                  on_change={(e) => setSelectedCategory (e.target.value)}
                  className="w - full px - 3 py - 2 bg - white / 10 border border - white / 20 rounded - lg text - white focus:outline - none focus:border - cyan - 400 / 50";
                >;
                  {categories.map ((category) => (
                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>))}
                </select>;
              </div>;
              {/* Price Range Filter */}
              <div>;
                <label className="block text - sm font - medium text - white / 70 mb - 2">Price Range</label>;
                <select;
                  value={price_range}
                  on_change={(e) => setPriceRange (e.target.value as any)}
                  className="w - full px - 3 py - 2 bg - white / 10 border border - white / 20 rounded - lg text - white focus:outline - none focus:border - cyan - 400 / 50";
                >;
                  <option value="all">All Prices</option>;
                  <option value="budget">Budget ($0 - $999)</option>;
                  <option value="mid">Mid - Range ($1, 000 - $4, 999)</option>;
                  <option value="enterprise">Enterprise ($5, 000+)</option>;
                </select>;
              </div>;
              {/* Sort By */}
              <div>;
                <label className="block text - sm font - medium text - white / 70 mb - 2">Sort By</label>;
                <select;
                  value={sort_by}
                  on_change={(e) => setSortBy (e.target.value as any)}
                  className="w - full px - 3 py - 2 bg - white / 10 border border - white / 20 rounded - lg text - white focus:outline - none focus:border - cyan - 400 / 50";
                >;
                  <option value="popularity">Popularity</option>;
                  <option value="price">Price (Low to High)</option>;
                  <option value="rating">Rating</option>;
                  <option value="newest">Newest</option>;
                </select>;
              </div>;
              {/* View Mode */}
              <div>;
                <label className="block text - sm font - medium text - white / 70 mb - 2">View Mode</label>;
                <div className="flex gap - 2">;
                  <button;
                    on_click={() => setViewMode ('grid')}
                    className={`px - 3 py - 2 rounded - lg transition - all duration - 300 ${
                      view_mode === 'grid';
                        ? 'bg - cyan - 500 text - white';
                        : 'bg - white / 10 text - white / 70 hover:bg - white / 20';
                    }`}

                    key={service.id}
                    variants={itemVariants}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    {/* Service Card Content */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      {/* Header */}
                  >;
                    <Grid className="w - 4 h - 4" />;
                  </button>;
                  <button;
                    on_click={() => setViewMode ('list')}
                    className={`px - 3 py - 2 rounded - lg transition - all duration - 300 ${
                      view_mode === 'list';
                        ? 'bg - cyan - 500 text - white';
                        : 'bg - white / 10 text - white / 70 hover:bg - white / 20';
                    }`}
                  >;
                    <List className="w - 4 h - 4" />;
                  </button>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="px - 6 pb - 20">;
        <div className="max - w-7xl mx - auto">;
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className="mb - 8";
          >;
            <div className="text - center mb - 8">;
              <h2 className="text - 3xl font - bold text - white mb - 2">;
                {filtered_services.length} Services Found;
              </h2>;
              <p className="text - white / 60">;
                Showing results for &quot, {search_term || 'all services'}&quot, in {selected_category === 'all' ? 'all categories' : selected_category}
              </p>;
            </div>;
            {filtered_services.length === 0 ? (
              <div className="text - center py - 20">;
                <div className="text - 6xl mb - 4">🔍</div>;
                <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
                <p className="text - white / 60 mb - 6">Try adjusting your search criteria or filters</p>;
                <button;
                  on_click={() => {
                    setSearchTerm (''),
                    setSelectedCategory ('all'),
                    setPriceRange ('all');
                  }}
                  className="px - 6 py - 3 bg - cyan - 500 hover:bg - cyan - 600 rounded - lg transition - colors duration - 300";
                >;
                  Clear Filters;
                </button>;
              </div>) : (
              <div className={view_mode === 'grid';
                ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8';
                : 'space - y-6';
              }>;
                {filtered_services.map ((service, index) => (
                  <motion.div;
                    {/* Service Card Content */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>;
                      {/* Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`text-3xl ${service.color.includes('from-') ? '' : service.color}`}>
                            {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
                            </h3>
                            <p className="text-sm text-white/60">{service.tagline}</p>
                          </div>
                        </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white/70 mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </div>))}

                          {service.price}



