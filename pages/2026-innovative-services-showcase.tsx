import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import UltraAdvancedFuturisticBackground2026 from '../components/ui/UltraAdvancedFuturisticBackground2026';
import UltraAdvancedNavigation2026 from '../components/layout/UltraAdvancedNavigation2026';
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length }
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount }
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount }
    {
      id: 'enterprise'
      name: 'Enterprise IT'
      icon: '🏢'
      count: enterpriseCount
    }
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount }
    {
      id: 'emerging'
      name: 'Emerging Tech'
      icon: '🔬'
      count: emergingTechCount
    },  ];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' }
    { id: 'low', name: 'Under $500', range: 'Under $500' }
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' }
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000' },  ];
  const sortOptions = [
    { id: 'name', name: 'Name' }
    { id: 'price', name: 'Price' }
    { id: 'rating', name: 'Rating' }
    { id: 'popularity', name: 'Popularity' },  ];
  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        switch (selectedCategory) {
          case 'ai':
          case 'quantum':
            return service.category?.includes('Quantum');
          case 'enterprise':
            return service.category?.includes('Enterprise');
          case 'micro-saas':
            return service.category?.includes('Micro SaaS');
          case 'emerging':
    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'low':

    // Sort;
    filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          const priceA = parseInt(a && a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b && b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'popularity':;
          return b && b.customers - a && a.customers;
        default: return a && a.name.localeCompare(b && b.name),;
      }
    });
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };
        duration: 0.5,
      },
    },  };

export default function Innovative2026ServicesShowcase(req, res) {
  try {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [;
    ...innovative2026MicroSaasServicesV4;
    ...emergingTech2026ServicesV4;
    ...enterpriseIT2026ServicesV4;
  ];
  // Dynamic category counts;
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length;
  const microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length;
  const emergingTechCount = allServices.filter(service => service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic')).length;
  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    { id: 'quantum', name: 'Quantum Tech', icon: '⚛️', count: quantumCount },;
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    { id: 'emerging', name: 'Emerging Tech', icon: '🔬', count: emergingTechCount   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'low', name: 'Under $500', range: 'Under $500' },;
    { id: 'medium', name: '$500 - $1,000', range: '$500 - $1,000' },;
    { id: 'high', name: 'Over $1,000', range: 'Over $1,000'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'popularity', name: 'Popularity'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  // Filter and sort services;
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered.filter(service => {;
        switch (selectedCategory) {;
          case 'ai':;
            return service.category?.includes('AI');
          case 'quantum':;
            return service.category?.includes('Quantum');
          case 'enterprise':;
            return service.category?.includes('Enterprise');
          case 'micro-saas':;
            return service.category?.includes('Micro SaaS');
          case 'emerging':;
            return service.category?.includes('Emerging') || service.category?.includes('Neuromorphic') || service.category?.includes('Synthetic');
          default: return true;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
        switch (selectedPriceRange) {;
          case 'low':;
            return price < 500,;
          case 'medium':;
            return price >= 500 && price <= 1000,;
          case 'high':;
            return price > 1000,;
          default: return true;
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
          const priceA = parseInt(a.price.replace(/[^0-9]/g, '')),;
          const priceB = parseInt(b.price.replace(/[^0-9]/g, '')),;
          return priceA - priceB,;
        case 'rating':;
          return b.rating - a.rating,;
        case 'popularity':;
          return b.customers - a.customers,;
        default: return a.name.localeCompare(b.name);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    }),;
    return filtered;
  }, [allServices, selectedCategory, selectedPriceRange, searchTerm, sortBy]),;
  const containerVariants = {;
    hidden: { opacity: 0 };
    visible: {;
      opacity: 1;
      transition: {;
        staggerChildren: 0.1;
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
  };
  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;
        duration: 0.5;
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
  },
      </Head>
      <UltraAdvancedFuturisticBackground2026
        intensity='extreme'
        colorScheme='neural-network'        particleCount={800}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetworks={true}
        enableMultidimensional={true}
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto text-center'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6'>
                2026 Innovative Services
              </h1>
            >
              <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3'>
                <span className='text-blue-400 font-semibold'>
                  {allServices.length}+ Services
                </span>
              </div>
              <div className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3'>
                <span className='text-purple-400 font-semibold'>
                  AI-Powered
                </span>
              </div>
              <div className='bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3'>
                <span className='text-green-400 font-semibold'>
                  Quantum Ready
                </span>
              </div>
            >
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                />
              </div>
              <div className='flex flex-wrap gap-4 justify-center mb-8'>
                {categories.map(category => (                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent';
                />;
              </div>;

              <div className='flex flex-wrap gap-4 justify-center mb-8'>;
                {categories && categories.map(category => (                  <button
                    key={category && category.id}
                    onClick={() => setSelectedCategory(category && category.id)}
                    className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${;
                      selectedCategory === category && category.id;
                        ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30 border-blue-500/50 text-blue-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${
                      selectedPriceRange === range.id
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300'
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50'
              </div>;

              <div className='flex flex-wrap gap-4 justify-center'>;
                {priceRanges && priceRanges.map(range => (                  <button
                    key={range && range.id}
                    onClick={() => setSelectedPriceRange(range && range.id)}
                    className={`px-4 py-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${;
                      selectedPriceRange === range && range.id;
                        ? 'bg-gradient-to-r from-green-600/30 to-emerald-600/30 border-green-500/50 text-green-300';
                        : 'bg-gray-900/30 border-gray-700/50 text-gray-300 hover:bg-gray-800/50';
                    }`}
              variants={containerVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  variants={itemVariants  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105">
                    {/* Service Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className={`p-6 bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>
                        )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm">{service.tagline}</p>
                    </div>
                        <div className='flex items-center space-x-2'>
                          <Star className='w-4 h-4 text-yellow-500 fill-current' />
                          <span className='text-white text-sm'>
                            {service.rating}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{service.customers}+</span>
                        </div>
                      </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300 text-sm">{service.trialDays} days trial</span>
                        </div>
                      </div>
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-2'>
                          <Clock className='w-4 h-4 text-green-400' />
                          <span className='text-gray-300 text-sm'>
                            {service.setupTime}
                          </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <Zap className='w-4 h-4 text-yellow-400' />
                          <span className='text-gray-300 text-sm'>
                            {service.trialDays} days trial
                          </span>                        </div>
                      </div>
                      {/* Features Preview */}
                      {/* Features Preview */}
                      <div className='mb-4'>;
                        <h4 className='text-white font-semibold mb-2'>;
                          Key Features:;
                        </h4>;
                        <div className='space-y-1'>;
                          {service && service.features;
                            .slice(0, 3);
                            .map((feature, index) => (;
                              <div
                                key={index}
                                className='flex items-center space-x-2'>;
                                <CheckCircle className='w-3 h-3 text-green-400' />;
                                <span className='text-gray-300 text-xs'>;
                                  {feature}
                                </span>;
                              </div>;
                            ))}
                          {service && service.features.length > 3 && (;
                            <span className='text-gray-500 text-xs'>;
                              +{service && service.features.length - 3} more features;
                            </span>                          )}
                        </div>;
                      </div>;

                      {/* Category Badge */}
                      <div className='mb-4'>;
                        <span
                      <Link href={service.link}>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          <span className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className='w-4 h-4' />                          </span>
                        </button>
                      </Link>
                    </div>
              ))}
            </motion.div>

                      {/* CTA Button */}
                      <Link href={service && service.link}>;
                        <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>;
                          <span className='flex items-center justify-center space-x-2'>;
                            <span>Learn More</span>;
                            <ArrowRight className='w-4 h-4' />                          </span>;
                        </button>;
                      </Link>;
                    </div>;
            </motion.div>
            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');

                  }}
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className='bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6'>
                  <Phone className='w-8 h-8 text-blue-400 mx-auto mb-4' />
                  <h3 className='text-white font-semibold mb-2'>Call Us</h3>
                  <p className='text-blue-300'>+1 302 464 0950</p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started Today
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
                </button>;
              </Link>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
