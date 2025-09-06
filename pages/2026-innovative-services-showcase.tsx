

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

    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'low':

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'rating':

  const itemVariants = {;
    hidden: { y: 20, opacity: 0 },;
    visible: {;
      y: 0,;
      opacity: 1,;
      transition: {;

  return (

    <>
      <Head>
        <title>2026 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2026 services, innovative technology, AI services, quantum computing, emerging tech, enterprise IT, micro SaaS, Zion Tech Group" />
        <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover cutting-edge 2026 innovative services including AI, Quantum Computing, Emerging Technologies, and Enterprise IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
      </Head>

        animationSpeed={3.0}
        enableHolographic={true}
        enableQuantumEffects={true}
        enableNeuralNetworks={true}
        enableMultidimensional={true}

            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                2026 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

                From AI-powered solutions to quantum computing and emerging technologies,
                transform your business with next-generation innovation.
              </p>
            </motion.div>
            <motion.div

            >
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
                <span className="text-blue-400 font-semibold">{allServices.length}+ Services</span>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
                <span className="text-purple-400 font-semibold">AI-Powered</span>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
                <span className="text-green-400 font-semibold">Quantum Ready</span>
              </div>
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3">
                <span className="text-orange-400 font-semibold">Future-Proof</span>
              </div>
            </motion.div>

            >
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."

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
                    }`}
                  >;
                    <span className='mr-2'>{category && category.icon}</span>                    {category && category.name} ({category && category.count});
                  </button>;
                ))}
                    }`}

                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name} ({category.count})
                  </button>
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>

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

              </div>;
            </motion.div>;
          </div>;
        </section>;

            <motion.div
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

                    <div className={`p-6 bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{service.icon}</span>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>

                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300 text-sm">{service.customers}+</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{service.setupTime}</span>

                        </div>
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300 text-sm">{service.trialDays} days trial</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-gray-300 text-xs">{feature}</span>
                            </div>

                      <Link href={service.link}>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">

                          <span className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </button>
                      </Link>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl' />                  </div>;
                </motion && motion.div>;
              ))}

              >
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {

                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all')
                  }}

                  Clear Filters
                </button>
              </motion.div>
            )}

            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </section>;
        {/* Contact Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            >

              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our team to learn more about our innovative 2026 services and how they can revolutionize your operations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-blue-300">+1 302 464 0950</p>

                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-purple-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
                  <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-green-300">ziontechgroup.com</p>
                </div>
              </div>

                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>

          </div>;
        </section>;
      </div>;
    </>;
  );
