
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';
const RevolutionaryServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
  const categories = [
const RevolutionaryServicesShowcase: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
    { id: 'all', name: 'All Services', count: revolutionary2025MicroSaasServices.length + emergingTech2025Services.length + enterpriseIT2025Services.length },
    { id: 'ai', name: 'AI & ML', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('AI')).length };
    { id: 'quantum', name: 'Quantum Tech', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('Quantum')).length };
    { id: 'emerging', name: 'Emerging Tech', count: emergingTech2025Services.length },
    { id: 'enterprise', name: 'Enterprise IT', count: enterpriseIT2025Services.length },
    { id: 'revolutionary', name: 'Revolutionary', count: revolutionary2025MicroSaasServices.length }
  ];

  const categories = [;
    {;
      id: 'all',;
      name: 'All Services',;
      count:;
        revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length +;
        emergingTech2025Services && emergingTech2025Services.length +;
        enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'ai',;
      name: 'AI & ML',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('AI')).length,;
    },;
    {;
      id: 'quantum',;
      name: 'Quantum Tech',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('Quantum')).length,;
    },;
    {;
      id: 'emerging',;
      name: 'Emerging Tech',;
      count: emergingTech2025Services && emergingTech2025Services.length,;
    },;
    {;
      id: 'enterprise',;
      name: 'Enterprise IT',;
      count: enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'revolutionary',;
      name: 'Revolutionary',;
      count: revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length,;
    },  ];
  const allServices = [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services];
  const containerVariants = {
    hidden: { opacity: 0 }
;
  const all_services = [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services];
;
  const filtered_services = active_category === 'all';
    ? all_services;
    : all_services.filter (service => {
        if (return service.category.includes ('AI')) {
  $2
}
        if (return service.category.includes ('Quantum')) {
  $2
}
        if (return emergingTech2025Services.includes (service)) {
  $2
}
        if (return enterpriseIT2025Services.includes (service)) {
  $2
}
        if (return revolutionary2025MicroSaasServices.includes (service)) {
  $2
}
        return true;
      });
;
  const load_more = () =>: any {
    setVisibleServices (prev => Math.min (prev + 12, filtered_services.length));    setVisibleServices (prev => Math.min (prev + 12, filtered_services.length));
  }
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }
    visible: {
      opacity: 1
      y: 0
      transition: {

  const filteredServices = activeCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => {;
        if (activeCategory === 'ai') return service && service.category.includes('AI');
        if (activeCategory === 'quantum') return service && service.category.includes('Quantum');
        if (activeCategory === 'emerging') return emergingTech2025Services && emergingTech2025Services.includes(service);
        if (activeCategory === 'enterprise') return enterpriseIT2025Services && enterpriseIT2025Services.includes(service);
        if (activeCategory === 'revolutionary') return revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.includes(service);
        return true;
      });
  const loadMore = () => {;
    setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length));    setVisibleServices(prev => Math && Math.min(prev + 12, filteredServices && filteredServices.length));
  };

  return (
    <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
      <div className='max-w-7xl mx-auto'>;
        {/* Header */}
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}
            </span>
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions.
            Transform your business with services that were once science fiction.
          </p>
        </motion.div>
        {/* Category Filter */}
            </span>;
            <br />;
            <span className="text-white">Services</span>;
          </h2>;
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">;
            Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions. ;
            Transform your business with services that were once science fiction.;
          </p>;
        </motion && motion.div>;
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                activeCategory === category && category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25';
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50';
              }`}
        {/* Services Grid */}
        <motion&& motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'          viewport={{ once: true }}          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible">;
          {filteredServices && filteredServices.slice(0, visibleServices).map((service, index) => (;
            <motion&& motion.div
              key={service && service.id}
              variants={itemVariants}
              className='group relative cursor-pointer'
              style={{ perspective: '1000px' }}>;
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75'></div>;
              <div className='relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full'>;
                {/* Background Effects */}
                {/* Popular Badge */}
                {service && service.popular && (;
                  <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'>;
                    <Star className='w-3 h-3 inline mr-1' />                    POPULAR              style={{ perspective: '1000px' }}
            >;
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-75"></div>;
              <div className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden h-full">;
        stagger_children: 0.1,
      },
    },  }        stagger_children: 0.1;
      }
    }
  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 20 },
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
;
  return (
    <section className='relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8'>;
      <div className='max - w-7xl mx - auto'>;
        {/* Header */}
        <motion.div;
          className='text - center mb - 16'          initial={{ opacity: 0, coordinate_y: 30 }}  }
;
  return (
    <section className="relative z - 10 py - 20 px - 4 sm:px - 6 lg:px - 8">;
      <div className="max - w-7xl mx - auto">;
        {/* Header */}
        <motion.div;
          className="text - center mb - 16";
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h2 className='text - 5xl md:text - 6xl font - bold text - white mb - 6'>;
            <span className='bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent'>;
              Revolutionary 2025;
            </span>;
            <br />;
            <span className='text - white'>Services</span>;
          </h2>;
          <p className='text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed'>;
            Experience the future with our cutting - edge AI, quantum computing,
            and emerging technology solutions. Transform your business with;
            services that were once science fiction.          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          className='flex flex - wrap justify - center gap - 4 mb - 12'          initial={{ opacity: 0, coordinate_y: 20 }}              Revolutionary 2025;
            </span>;
            <br />;
            <span className="text - white">Services</span>;
          </h2>;
          <p className="text - xl md:text - 2xl text - gray - 300 max - w-4xl mx - auto leading - relaxed">;
            Experience the future with our cutting - edge AI, quantum computing, and emerging technology solutions.;
            Transform your business with services that were once science fiction.;
          </p>;
        </motion.div>;
        {/* Category Filter */}
        <motion.div;
          className='flex flex - wrap justify - center gap - 4 mb - 12'        <motion.div;
          className="flex flex - wrap justify - center gap - 4 mb - 12";
          initial={{ opacity: 0, coordinate_y: 20 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >;
          {categories.map (category => (            <button;
              key={category.id}
              on_click={() => {
                setActiveCategory (category.id);
                setVisibleServices (12);              }}          {categories.map ((category) => (
            <button;
              key={category.id}
              on_click={() => {
                setActiveCategory (category.id);
                setVisibleServices (12);                setVisibleServices (12);
              }}
              className={`px - 6 py - 3 rounded - full font - semibold transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 ${
                active_category === category.id;
                  ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                  : 'bg - gray - 800 / 50 text - gray - 300 hover:bg - gray - 700 / 50 border border - gray - 600 / 50';
              }`}
            >;
              {category.name}
              <span className='ml - 2 px - 2 py - 1 bg - white / 20 rounded - full text - xs'>                {category.count}              <span className="ml - 2 px - 2 py - 1 bg - white / 20 rounded - full text - xs">;
                {category.count}
              </span>;
            </button>))}
        </motion.div>;
        {/* Services Grid */}
                {/* Popular Badge */}
                {service && service.popular && (;
                  <div className='absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300'>;
                    <Star className='w-3 h-3 inline mr-1' />                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">;
                    <Star className="w-3 h-3 inline mr-1" />;
                    POPULAR;
                  </div>;
                )}
                          {service.name}
                        </h3>;
                        <p className='text - gray - 400 text - sm'>;
                          {service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    <div className='text - right'>;
                      <div className='text - 2xl font - bold text - white'>;
                        {service.price}
                      </div>;
                      <div className='text - gray - 400 text - sm'>;
                        {service.period}
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-gray-400 text-sm">{service.period}</div>
                    </div>
                  </div>
                  {/* Description */}

                  {/* Stats Grid */}
                  <div className='grid grid-cols-2 gap-3 mb-4'>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Users className='w-4 h-4 text-cyan-400' />;
                      <span className='text-gray-300'>;
                        {service && service.customers}+ users;
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Star className='w-4 h-4 text-yellow-400' />;
                      <span className='text-gray-300'>;
                        {service && service.rating}/5 ({service && service.reviews});
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <TrendingUp className='w-4 h-4 text-green-400' />;
                      <span className='text-gray-300'>;
                        {service && service.growthRate}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Shield className='w-4 h-4 text-blue-400' />;
                      <span className='text-gray-300'>;
                        {service && service.trialDays} day trial;
                      </span>                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space-x-3 mt-6'>;
                  {/* Stats Grid */}
                  {/* Action Buttons */}
                      target="_blank"
                      rel="noopener noreferrer"
                      Learn More;
                    </button>;
                  </div>;
                </div>;

                {/* Floating Particles */}
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '20%', top: '30%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '35%', top: '40%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '50%', top: '50%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '65%', top: '60%' }}></div>;
                  <div
                    className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
                    style={{ left: '80%', top: '70%' }}></div>                </div>                <div className="absolute inset-0 pointer-events-none overflow-hidden">;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '20%', top: '30%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '35%', top: '40%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '50%', top: '50%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '65%', top: '60%' }}></div>;
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60" style={{ left: '80%', top: '70%' }}></div>;
              </div>;
            </motion && motion.div>;
          ))}
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <button
              onClick={loadMore}
            >
              Load More Revolutionary Services
            </button>
          </motion.div>
        )}
        {/* Call to Action */}
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}>;
          <h3 className='text-3xl font-bold text-white mb-4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
            Join the revolution with our cutting-edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;
            <a
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'>;
              Start Your Transformation;
            </a>;
            <a
              href='/pricing'
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services.
            Transform your business and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Start Your Transformation
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
              className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>            Ready to Experience the Future?;
          </h3>;
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services. ;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">;
            <a
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">;
              Start Your Transformation;
            </a>;
            <a
              href="/pricing" 
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
              View Pricing;
            </a>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
};
};

export default RevolutionaryServicesShowcase;
                {/* Floating Particles */}
                <div className='absolute inset - 0 pointer - events - none overflow - hidden'>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '20%', top: '30%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '35%', top: '40%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '50%', top: '50%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '65%', top: '60%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '80%', top: '70%' }}
                  ></div>                </div>                <div className="absolute inset - 0 pointer - events - none overflow - hidden">;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '20%', top: '30%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '35%', top: '40%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '50%', top: '50%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '65%', top: '60%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '80%', top: '70%' }}></div>;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Load More Button */}
        {visible_services < filtered_services.length && (
          <motion.div;
            className='text - center'            initial={{ opacity: 0 }}          <motion.div;
            className="text - center";
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <button;
              on_click={load_more}
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40'            >              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Load More Revolutionary Services;
            </button>;
          </motion.div>)}
        {/* Call to Action */}
        <motion.div;
          className='text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20'          initial={{ opacity: 0, coordinate_y: 30 }}        <motion.div;
          className="text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20";
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h3 className='text - 3xl font - bold text - white mb - 4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
            Join the revolution with our cutting - edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex - col sm:flex - row items - center justify - center gap - 4'>;
            <a;
              href='/contact';
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40';
            >;
              Start Your Transformation;
            </a>;
            <a;
              href='/pricing';
              className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'            >            Ready to Experience the Future?;
          </h3>;
          <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
            Join the revolution with our cutting - edge AI, quantum, and emerging technology services.;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex - col sm: flex - row items - center justify - center gap - 4">;
            <a;
              href="/contact";
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Start Your Transformation;
            </a>;
            <a;
              href="/pricing";
              className="px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
            >;
              View Pricing;
            </a>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default RevolutionaryServicesShowcase);
}
;
export default RevolutionaryServicesShowcase;
;
