import { 
  ArrowRight, Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  ChevronRight, ExternalLink, TrendingUp, BarChart3, Cloud, Network;
  Search, Filter, Grid, List, Star as StarIcon, Eye, Heart, Share2;
  DollarSign, Calendar, Users as UsersIcon, Zap as ZapIcon
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { advancedInnovativeServices } from '../data/2025-advanced-innovative-services-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';
export default function AdvancedServicesShowcase2025() {
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(, '')) - parseFloat(b.price.replace('$', '').replace(, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default: return 0
      }
    })
  const containerVariants = {
    visible: {
      opacity: 1
      transition: {
        stagger_children: 0.1;
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
  },
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || '🚀'
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <Head>
        <title>2025 Advanced Services Showcase — Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group." />
        <meta property="og:title" content="2025 Advanced Services Showcase — Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting-edge AI solutions, quantum technologies, and revolutionary IT services." />
        <meta name="keywords" content="advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2025-advanced-services-showcase" />
      </Head>
      <EnhancedNavigation />
  },
  const getCategoryIcon = (category: string) =>: any {
    const category_data = categories.find (cat => cat.id === category),
    return category_data?.icon || '🚀';
  },
  return (
    <div className="min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white overflow - hidden">;
      <Head>;
        <title > 2025 Advanced Services Showcase — Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting - edge AI solutions, quantum technologies, and revolutionary IT services. Transform your business with Zion Tech Group." />;
        <meta property="og:title" content="2025 Advanced Services Showcase — Zion Tech Group" />;
        <meta property="og:description" content="Explore our comprehensive collection of advanced innovative micro SAAS services, cutting - edge AI solutions, quantum technologies, and revolutionary IT services." />;
        <meta name="keywords" content="advanced micro SAAS, AI services, quantum computing, cybersecurity, edge computing, space technology, neural interfaces, Zion Tech Group" />;
        <link rel="canonical" href="https://ziontechgroup.com / 2025 - advanced - services - showcase" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Advanced Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive collection of cutting-edge micro SAAS services, advanced AI solutions
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-white/70">Advanced Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-white/70">Technology Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-white/70">Expert Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
          >;
            <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent">;
              2025 Advanced Services Showcase;
            </h1>;
            <p className="text - xl md:text - 2xl text - white / 80 max - w-4xl mx - auto leading - relaxed mb - 8">;
              Discover our comprehensive collection of cutting - edge micro SAAS services, advanced AI solutions,
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.;
            </p>;
            {/* Stats */}
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 6 mb - 12">;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - cyan - 400 mb - 2">{all_services.length}+</div>;
                <div className="text - white / 70">Advanced Services</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - purple - 400 mb - 2">15+</div>;
                <div className="text - white / 70">Technology Categories</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - green - 400 mb - 2">99.9%</div>;
                <div className="text - white / 70">Uptime Guarantee</div>;
              </div>;
              <div className="text - center">;
                <div className="text - 3xl font - bold text - orange - 400 mb - 2">24 / 7</div>;
                <div className="text - white / 70">Expert Support</div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filters */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-12 py-4 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
              {/* Category Filter */}
              {/* View Mode Toggle */}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid/List */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div;
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-white/70">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </motion.div>
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid'
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            className="mb - 8";
          >;
            <p className="text - white / 70">;
              Showing {filtered_services.length} of {all_services.length} services;
            </p>;
          </motion.div>;
          {/* Services Display */}
          <motion.div;
            variants={container_variants}
            initial="hidden";
            animate="visible";
            className={view_mode === 'grid';
              ? "grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              : "space - y-6";
            }
                  key={service.id}
                  className={viewMode === 'grid' 
                    ? "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                    : "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl"
                  variants={item_variants}
                  className={view_mode === 'grid';
                    ? "group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
                    : "group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 hover:shadow - 2xl";
                  }
                >;
                  {/* Service Header */}
                  <div className="p - 6">;
                    <div className="flex items - start justify - between mb - 4">;
                      <div className="flex items - center gap - 3">;
                        <div className={`text - 3xl ${service.color.includes ('from-') ? '' : 'bg - gradient - to - r ' + service.color}`}>;
                          {service.icon}
                        </div>;
                        <div>;
                          <h3 className="text - xl font - bold text - white mb - 1">{service.name}</h3>;
                          <p className="text - white / 70 text - sm">{service.tagline}</p>;
                        </div>;
                      </div>;
                    {/* Features */}
                    <div className="mb - 6">;
                      <h4 className="text - white font - semibold mb - 3">Key Features:</h4>;
                      <div className="grid grid - cols - 1 gap - 2">;
                        {service.features.slice (0, 3).map ((feature, idx) => (
                          <div key={idx} className="flex items - center gap - 2">;
                            <CheckCircle className="w - 4 h - 4 text - green - 400 flex - shrink - 0" />;
                            <span className="text - white / 80 text - sm">{feature}</span>;
                          </div>))}
                        {service.features.length > 3 && (
                    {/* Category and Technology */}
                    <div className="flex items - center justify - between mb - 6">;
                      <div className="flex items - center gap - 2">;
                        <span className="text - xs bg - white / 10 text - white / 70 px - 3 py - 1 rounded - full">;
                          {getCategoryIcon (service.category)} {service.category}
                        </span>;
                      </div>;
                      <div className="text - white / 60 text - sm">;
                        {service.technology.slice (0, 2).join ()}
                        {service.technology.length > 2 && '...'}
                    {/* ROI and Benefits */}
                    <div className="mb - 6">;
                      <div className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 rounded - xl p - 4 border border - cyan - 500 / 20">;
                        <h4 className="text - cyan - 400 font - semibold mb - 2">ROI & Benefits</h4>;
                        <p className="text - white / 80 text - sm mb - 3">{service.roi}</p>;
                        <div className="flex flex - wrap gap - 2">;
                          {service.benefits.slice (0, 2).map ((benefit, idx) => (
                            <span key={idx} className="text - xs bg - cyan - 500 / 20 text - cyan - 300 px - 2 py - 1 rounded - full">;
                              {benefit}
                    {/* Action Buttons */}
                    <div className="flex gap - 3">;
                      <a;
                        href={service.link}
          {/* No Results */}
          {filtered_services.length === 0 && (
            <motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setPriceRange([0, 10000])
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
      {/* CTA Section */}
      <section className="px - 6 py - 20">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
          >;
            <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - white to - cyan - 100 bg - clip - text text - transparent">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - white / 80 mb - 8 max - w-2xl mx - auto">;
              Our advanced services are designed to give you a competitive edge in the rapidly evolving technology landscape.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com";
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Schedule Consultation;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10 flex items - center justify - center gap - 2";
              >;
                Call +1 302 464 0950;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>);
