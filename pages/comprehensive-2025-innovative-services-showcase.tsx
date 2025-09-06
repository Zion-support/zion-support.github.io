import { 
  ArrowRight, CheckCircle, Globe;
  Search, Grid, List, Star as StarIcon;
  Phone, Mail, MapPin
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import { comprehensiveInnovativeServices } from '../data/comprehensive-2025-innovative-services-expansion';
import { specializedEnterpriseServices } from '../data/specialized-2025-enterprise-services';
export default function Comprehensive2025InnovativeServicesShowcase() {
    { id: 'Advanced Analytics & AI', name: 'Advanced Analytics', count: allServices.filter(s => s.category.includes('Advanced Analytics')).length }
  ]
  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(, ''))
    if (numPrice < 1000) return 'budget'
    if (numPrice < 5000) return 'mid'
    return 'enterprise'
  };

      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
        case 'price':
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }
  return (
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
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              2025 Comprehensive Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our extensive collection of cutting-edge micro SAAS services, AI solutions
              quantum technologies, and revolutionary IT services that are transforming industries worldwide.
            </p>
            {/* Contact Information */}
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
      {/* Search and Filters */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or features..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>
            </div>
              {/* Category Filter */}
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-white/60">
              </p>
            </div>
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/60 mb-6">Try adjusting your search criteria or filters</p>
                <button
                  onClick={() => {
                    setPriceRange('all')
                  }}
                  className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={item_variants}
                    className={`group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl ${
                      view_mode === 'list' ? 'flex' : '';
                    }`}
                  >;
                      {/* Header */}
                      <div className="flex items - start justify - between mb - 4">;
                        <div className="flex items - center gap - 3">;
                          <div className={`text - 3xl ${service.color.includes ('from-') ? '' : service.color}`}>;
                            {service.icon}
                          </div>;
                          <div>;
                            <h3 className="font - bold text - lg text - white group - hover:text - cyan - 300 transition - colors duration - 300">;
                              {service.name}
                            </h3>;
                            <p className="text - sm text - white / 60">{service.tagline}</p>;
                          </div>;
                        </div>;
                        {service.popular && (
                      {/* Description */}
                      {/* Features */}
                      <div className="mb - 4">;
                        <h4 className="text - sm font - semibold text - white / 70 mb - 2">Key Features:</h4>;
                        <div className="grid grid - cols - 1 gap - 1">;
                          {service.features.slice (0, 3).map ((feature, idx) => (
                            <div key={idx} className="flex items - center gap - 2 text - xs text - white / 60">;
                              <CheckCircle className="w - 3 h - 3 text - green - 400" />;
                              {feature}
                            </div>))}
                          {service.features.length > 3 && (
                            <div className="text-xs text-white/40">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Price and Rating */}
                      <div className="flex items - center justify - between mb - 4">;
                        <div className="text - 2xl font - bold text - cyan - 400">;
                          {service.price}
                      {/* Action Buttons */}
                      <div className="flex gap - 2">;
                        <a;
                          href={service.link}
      {/* Contact CTA */}
      <section className="px - 6 pb - 20">;
        <div className="max - w-4xl mx - auto text - center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
                className="px-8 py-4 border border-white/20 hover:border-cyan-400/50 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            <div className="mt-8 text-white/60">
              <p>Contact us directly:</p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <span>{contactInfo.mobile}</span>
                <span>{contactInfo.email}</span>
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <EnhancedFooter />
    </div>
            className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 backdrop - blur - xl rounded - 3xl p - 12 border border - cyan - 400 / 20";
          >;
            <h2 className="text - 4xl font - bold text - white mb - 6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - white / 80 mb - 8 max - w-2xl mx - auto">;
              Our team of experts is ready to help you implement the perfect solution for your business needs.;
              Get in touch today for a personalized consultation.;
            </p>;
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <a;
                href={`mailto:${contact_info.email}?subject = Business Consultation Request`}
                className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 500 hover:from - cyan - 600 hover:to - blue - 600 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2";
              >;
                Schedule Consultation;
                <ArrowRight className="w - 5 h - 5" />;
              </a>;
              <a;
                href={`tel:${contact_info.mobile}`}
                className="px - 8 py - 4 border border - white / 20 hover:border - cyan - 400 / 50 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 backdrop - blur - sm bg - white / 5 hover:bg - white / 10 flex items - center justify - center gap - 2";
              >;
                <Phone className="w - 5 h - 5" />;
                Call Now;
              </a>;
            </div>;
            <div className="mt - 8 text - white / 60">;
              <p > Contact us directly:</p>;
              <div className="flex flex - wrap justify - center gap - 6 mt - 4">;
                <span>{contact_info.mobile}</span>;
                <span>{contact_info.email}</span>;
                <span>{contact_info.address}</span>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
    </div>);
}
