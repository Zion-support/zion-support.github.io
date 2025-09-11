


  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced',
    if (serviceVariant.includes('quantum')) return 'quantum',
    if (serviceVariant.includes('ai')) return 'ai-futuristic',
    if (serviceVariant.includes('holographic')) return 'holographic',
    if (serviceVariant.includes('neural')) return 'neural',
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',
    if (serviceVariant.includes('security')) return 'cyberpunk',
    if (serviceVariant.includes('data')) return 'neural',
    if (serviceVariant.includes('mobility')) return 'holographic',
    if (serviceVariant.includes('network')) return 'quantum-advanced',
    if (serviceVariant.includes('backup')) return 'quantum-advanced',
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',
    if (serviceVariant.includes('monitoring')) return 'neural',
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',
    if (serviceVariant.includes('metaverse')) return 'holographic',
    if (serviceVariant.includes('iot')) return 'quantum-iot',
    if (serviceVariant.includes('edge')) return 'quantum-advanced',
    if (serviceVariant.includes('ar')) return 'holographic',
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',
    if (serviceVariant.includes('5g')) return 'quantum-advanced',
    if (serviceVariant.includes('biometric')) return 'cyberpunk',
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',
    if (serviceVariant.includes('api')) return 'quantum-advanced',
    if (serviceVariant.includes('integration')) return 'quantum-advanced',
    if (serviceVariant.includes('analytics')) return 'neural',
    return 'default'
  },

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2,
    ...innovative2026AIServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3
  ],

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ],

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ],

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' }
  ],

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services,

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'ai') {
        filtered = filtered.filter(service => service.category.includes('AI'))
      } else if (selectedCategory === 'quantum') {
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'))
      } else if (selectedCategory === 'enterprise') {
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'))
      } else if (selectedCategory === 'micro-saas') {
        filtered = filtered.filter(service => service.category.includes('SaaS'))
      } else if (selectedCategory === 'healthcare') {
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'))
      } else if (selectedCategory === 'financial') {
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'))
      } else if (selectedCategory === 'manufacturing') {
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'))
      }
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),
        if (selectedPriceRange === 'low') return price < 1000,
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000,
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000,
        if (selectedPriceRange === 'premium') return price >= 20000,
        return true
      })
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),
        case 'popularity':
          return (b.rating * b.reviews) - (a.rating * a.reviews),
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),
        case 'rating':
          return b.rating - a.rating,
        default: return a.name.localeCompare(b.name)
      }
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
=======
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services including new ones
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2;
    ...emergingTech2026ServicesV2;
    ...enterpriseIT2026ServicesV2;
    ...innovative2026AIServicesV3;
    ...emergingTech2026ServicesV3;
    ...enterpriseIT2026ServicesV3
  ];

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length }
  ];

  const priceRanges = [
      }
    }
    // Price filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;

        default: return a.name.localeCompare(b.name)
      }
    })
    return filtered

=======
=======
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function Services2026ShowcaseEnhancedPage(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // Map service variants to supported card variants;
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {;
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural',;
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk',;
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('cloud')) return 'quantum-advanced',;
    if (serviceVariant.includes('security')) return 'cyberpunk',;
    if (serviceVariant.includes('data')) return 'neural',;
    if (serviceVariant.includes('mobility')) return 'holographic',;
    if (serviceVariant.includes('network')) return 'quantum-advanced',;
    if (serviceVariant.includes('backup')) return 'quantum-advanced',;
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('monitoring')) return 'neural',;
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced',;
    if (serviceVariant.includes('metaverse')) return 'holographic',;
    if (serviceVariant.includes('iot')) return 'quantum-iot',;
    if (serviceVariant.includes('edge')) return 'quantum-advanced',;
    if (serviceVariant.includes('ar')) return 'holographic',;
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced',;
    if (serviceVariant.includes('5g')) return 'quantum-advanced',;
    if (serviceVariant.includes('biometric')) return 'cyberpunk',;
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic',;
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced',;
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic',;
    if (serviceVariant.includes('api')) return 'quantum-advanced',;
    if (serviceVariant.includes('integration')) return 'quantum-advanced',;
    if (serviceVariant.includes('analytics')) return 'neural',;
    return 'default';
  },;
  const contactInfo = {;
    mobile: '+1 302 464 0950';
    email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';
    website: 'https://ziontechgroup.com';
  };
  // Combine all 2026 services including new ones;
  const all2026Services = [;
    ...innovative2026MicroSaasServicesV2;
    ...emergingTech2026ServicesV2;
    ...enterpriseIT2026ServicesV2;
    ...innovative2026AIServicesV3;
    ...emergingTech2026ServicesV3,;
    ...enterpriseIT2026ServicesV3;
  ],;
  // Enhanced categories for 2026;
  const categories = [;
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },;
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },;
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },;
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length },;
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: all2026Services.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech')).length },;
    { id: 'financial', name: 'Financial Technology', icon: '💰', count: all2026Services.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },;
    { id: 'manufacturing', name: 'Manufacturing & IoT', icon: '🏭', count: all2026Services.filter(s => s.category.includes('Manufacturing') || s.category.includes('IoT')).length   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },;
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },;
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },;
    { id: 'premium', name: '$20K+/month', range: '$20K+'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name A-Z' },;
    { id: 'price-low', name: 'Price Low to High' },;
    { id: 'price-high', name: 'Price High to Low' },;
    { id: 'popularity', name: 'Most Popular' },;
    { id: 'newest', name: 'Newest First' },;
    { id: 'rating', name: 'Highest Rated'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = all2026Services;
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
    // Category filter;
    if (selectedCategory !== 'all') {;
      if (selectedCategory === 'ai') {;
        filtered = filtered.filter(service => service.category.includes('AI'));
      } else if (selectedCategory === 'quantum') {;
        filtered = filtered.filter(service => service.category.includes('Quantum') || service.category.includes('Emerging'));
      } else if (selectedCategory === 'enterprise') {;
        filtered = filtered.filter(service => service.category.includes('Enterprise') || service.category.includes('IT'));
      } else if (selectedCategory === 'micro-saas') {;
        filtered = filtered.filter(service => service.category.includes('SaaS'));
      } else if (selectedCategory === 'healthcare') {;
        filtered = filtered.filter(service => service.category.includes('Healthcare') || service.category.includes('Biotech'));
      } else if (selectedCategory === 'financial') {;
        filtered = filtered.filter(service => service.category.includes('Financial') || service.category.includes('Trading'));
      } else if (selectedCategory === 'manufacturing') {;
        filtered = filtered.filter(service => service.category.includes('Manufacturing') || service.category.includes('IoT'));
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Price filter;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered.filter(service => {;
        const price = parseInt(service.price.replace(/[^0-9]/g, '')),;
        if (selectedPriceRange === 'low') return price < 1000,;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000,;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000,;
        if (selectedPriceRange === 'premium') return price >= 20000,;
        return true;
      });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    // Sort services;
    filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price-low':;
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),;
        case 'price-high':;
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),;
        case 'popularity':;
          return (b.rating * b.reviews) - (a.rating * a.reviews),;
        case 'newest':;
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime(),;
        case 'rating':;
          return b.rating - a.rating,;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),
    return filtered
  }, [all2026Services, searchTerm, selectedCategory, selectedPriceRange, sortBy]),

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <meta property="og:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase-enhanced" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          {/* Twitter */}          {/* Twitter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Enhanced 2026 Services Showcase - Zion Tech Group" />
          <meta name="twitter:description" content="Discover our comprehensive collection of innovative 2026 micro SAAS services, AI solutions, quantum computing, and enterprise IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
        </Head>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
        {/* Enhanced Header Section */}        {/* Enhanced Header Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >;
              <h1 className="text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6">;
                Enhanced 2026 Services Showcase;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
                Discover our comprehensive collection of innovative micro SAAS services, AI solutions, quantum computing, and enterprise IT services that will transform your business in 2026 and beyond.;
              </p>;
                    className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-3xl font-bold text-cyan-400">{value}</div>
                    <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </motion.div>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
              {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

                    className="bg - gradient - to - r from - gray - 800 / 50 to - gray - 700 / 50 backdrop - blur - sm rounded - xl p - 4 border border - gray - 600 / 30";
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Category</label>;
                  <select;
                    value={selected_category}
                    on_change={(e) => setSelectedCategory (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    {categories.map ((category) => (
                      <option key={category.id} value={category.id}>;
                        {category.name} ({category.count});
                      </option>))}
                  </select>;
                </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-center">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Enhanced Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */}
        {/* Enhanced Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
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
                  className="w-full bg-gray-800/50 border border-gray-600/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              {/* Filters and Controls */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Price Range Filter */}


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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSelectedPriceRange(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>

                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Price Range</label>;
                  <select;
                    value={selectedPriceRange}
                        {range.name}

                      </option>))}
                  </select>;
                </div>;
                {/* Sort Options */}


                        {range.name  } catch (error) {
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
                {/* Sort Options */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onChange={(e) => setSortBy(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>

                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">Sort By</label>;
                  <select;
                    value={sort_by}
                    on_change={(e) => setSortBy (e.target.value)}
                    className="w - full bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg px - 3 py - 2 text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500";
                  >;
                    {sort_options.map ((option) => (
                      <option key={option.id} value={option.id}>;
                        {option.name}

                      </option>))}
                  </select>;
                </div>;
                {/* View Mode Toggle */}


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
                {/* View Mode Toggle */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">View Mode</label>
                  <div className="flex bg-gray-800/50 border border-gray-600/30 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                        viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                <div>;
                  <label className="block text - sm font - medium text - gray - 300 mb - 2">View Mode</label>;
                  <div className="flex bg - gray - 800 / 50 border border - gray - 600 / 30 rounded - lg p - 1">;
                    <button;
                      on_click={() => setViewMode ('grid')}
                      className={`flex - 1 py - 2 px - 3 rounded - md text - sm font - medium transition - colors ${
                        view_mode === 'grid' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}
                    >;
                      <Grid className="w - 4 h - 4 mx - auto" />;
                    </button>;
                    <button;
                      on_click={() => setViewMode ('list')}
                      className={`flex - 1 py - 2 px - 3 rounded - md text - sm font - medium transition - colors ${
                        view_mode === 'list' ? 'bg - cyan - 600 text - white' : 'text - gray - 400 hover:text - white';
                      }`}

              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                  <span className="text-cyan-400 font-semibold">{all2026Services.length}</span> services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div


                  initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  exit={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                  <p className="text-gray-400">Try adjusting your search criteria or filters</p>
                </motion.div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                  {filteredServices.map((service, index) => (
                    <motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Enhanced Services Grid */}
        <section className="py - 16 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <AnimatePresence mode="wait">;
              {filtered_services.length === 0 ? (
                <motion.div;
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text - center py - 20";
                >;
                  <div className="text - 6xl mb - 4">🔍</div>;
                  <h3 className="text - 2xl font - semibold text - gray - 300 mb - 2">No services found</h3>;
                  <p className="text - gray - 400">Try adjusting your search criteria or filters</p>;
                </motion.div>) : (
                <div className={view_mode === 'grid' ? 'grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6' : 'space - y-4'}>;
                  {filtered_services.map ((service, index) => (
                    <motion.div;

                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl">{service.icon}</div>
                            {service.popular && (
                      className={view_mode === 'grid' ? '' : 'bg - gradient - to - r from - gray - 800 / 50 to - gray - 700 / 50 backdrop - blur - sm rounded - xl p - 6 border border - gray - 600 / 30'}
                    >;
                      <UltraFuturisticCard;
                        variant={mapServiceVariantToCardVariant (service.variant)}
                        className="h - full";
                      >;
                        <div className="p - 6">;
                          {/* Service Header */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
