
  ...innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.map(service => ({
    ...service,
    category: 'Micro SAAS,
    icon: <Rocket className=w-6 h-6' />})),
  ...innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.map(service => ({
    ...service,
    category: 'AI & Consciousness,
    icon: <Brain className=w-6 h-6' />})),
  ...innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Enterprise IT,
    icon: <Shield className=w-6 h-6' />})),
  ...emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.map(service => ({
    ...service,
    category: 'Quantum & Emerging Tech,
    icon: <Atom className=w-6 h-6' />})),
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services;
import { innovativeAIServicesEnhanced2025 } from ../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced;
import { emergingTechServicesEnhanced2025 } from ../data/emerging-tech-services';



const priceRanges = [









const [filteredServices, setFilteredServices] =
    useState<Service[]    />(allServices);

  useEffect(() => {

    let filtered = allServices;
    // Filter by search term;
if (searchTerm) {
filtered = filtered.filter(
        service =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description;
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase())}
      );}
    }

    // Filter by category;
if (selectedCategory !== 'All Services') {
filtered = filtered.filter(
        service => service.category === selectedCategory}
      );}
    }
    // Filter by price range;
if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
       ;
  const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
case 'under-50':


            return price < 50;
          case '50-200':;
            return price >= 50 && price <= 200;
          case '200-500':;
            return price > 200 && price <= 500;
          case 'over-500':;

            return price > 500;

          default:;
            return true;        }          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true;
          case 'under-50': return price < 50;
          case '50-200': return price >= 50 && price <= 200;
          case '200-500': return price > 200 && price <= 500;
          case 'over-500': return price > 500;
          default: return true
        }
      });
    }

          return b.rating - a.rating;







          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();

          );






  const getCategoryColor = (category: string) => {;
    switch (category) {        case 'price-low':;
          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':;
          return parseFloat(b && b.price.replace(/[^0-9.]/g, '')) - parseFloat(a && a.price.replace(/[^0-9.]/g, ''));
        default: return 0;
      }
    });
    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'Micro SAAS':;


        return 'from-blue-500 to-cyan-500';


      default:;
        return 'from-gray-500 to-slate-500';    }      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
        return <Atom className='w-5 h-5' />;
      default:;
        return <Globe className='w-5 h-5' />;    }      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;


        />;
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'

        </div>;
<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'    />;


              />;
<h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6'    />;
              <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'    />;
              </span>;
              <br    />;
              <span className='text-white'    />Services Showcase</span>;
            </h1>;
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'    />;

              Discover our complete portfolio of {allServices.length}+;
              innovative micro SAAS, AI, IT, and emerging technology services;
            </p>;
                Comprehensive
              </span>
              <br />
              <span className="text-white>Services Showcase</span>
            </h1>
            <p className=text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
              Discover our complete portfolio of {allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>

            

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12>
              {[
                { label: 'Total Services, value: allServices.length, icon: <Globe className = $2;
                { label: AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className = $2;
                { label: 'IT Services, value: innovativeITServicesEnhanced2025.length, icon: <Shield className = $2;
                { label: Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className=w-8 h-8" /> }
              ].map((stat, index) => (



                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>

                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>


                </motion.div>
              ))}
            </div>










                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input














            <div className='flex flex - wrap items - center space - x-4'>;
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}
              </select>;
                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}


























                  }`}



                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500 text-white';
                      : 'text-white';

                  }`}


                >

        {/* Results Count */}
        <div className='mb-8'>;
          <p className='text-gray-400'>            Showing {filteredServices && filteredServices.length} of {allServices && allServices.length} services      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        {/* Results Count */}


            Showing {filteredServices.length} of {allServices.length} services

                <div className='absolute top-4 right-4'    />
                  <span;
className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />

            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
        <div className="mb-8">;
          <p className="text-gray-400">;
          </p>;
        </div>;
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {filteredServices && filteredServices.map((service, index) => (          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {filteredServices && filteredServices.map((service, index) => (;
              <motion&& motion.div
                key={service && service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}



                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'

              >


                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span

                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className='ml-2'>{service && service.category}</span>                  </span>;
                </div>;



                {/* Service Icon */}
                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service.icon}              >
                {/* Category Badge */}



                <div className="mb-4">

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}


                    {service.icon}


                  </div>
                </div>
                {/* Service Info */}


      {/* Services Grid / List */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'>;
        {/* Results Count */}
        <div className='mb - 8'>;
          <p className='text - gray - 400'>            Showing {filtered_services.length} of {all_services.length} services      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12">;
        {/* Results Count */}
        <div className="mb - 8">;
          <p className="text - gray - 400">;
          </p>;
        </div>;
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {filtered_services.map ((service, index) => (          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {filtered_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                {/* Category Badge */}
                <div className='absolute top - 4 right - 4'>;
                  <span;
                    className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}
                  >;
                    {getCategoryIcon (service.category)}
                    <span className='ml - 2'>{service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                    {service.icon}              >;
                {/* Category Badge */}
                <div className="absolute top - 4 right - 4">;
                  <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                    {getCategoryIcon (service.category)}
                    <span className="ml - 2">{service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                <div className="mb - 4">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300">;

                    {service.icon}

                    {service.icon}

                  </div>
                </div>
                {/* Service Info */}

                <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;



                  {service.name}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'>;
                  {service.tagline}



                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}



                </h3>
                <p className="text-gray-400 mb-3 line-clamp-2">
                </p>;
                <p className='text - sm text - gray - 500 mb - 4 line - clamp - 3'>                  {service.description}
                </p>;
                {/* Price */}                  {service.name}
                </h3>;
                <p className="text - gray - 400 mb - 3 line - clamp - 2">;
                  {service.tagline}
                </p>;
                <p className="text - sm text - gray - 500 mb - 4 line - clamp - 3">;
                  {service.description}



                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/month</span>
                </div>
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white">{service.rating}</span>
                    <span className="text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">


                    <Users className="w-4 h-4" />


                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">;
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className="ml-2">{service && service.category}</span>;
                  </span>;
                </div>;

                {/* Service Info */}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                  {service && service.name}
                </h3>;
                <p className='text-gray-400 mb-3 line-clamp-2'>;
                  {service && service.tagline}
                </p>;
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service && service.description}
                </p>;
                {/* Price */}                  {service && service.name}
                </h3>;
                <p className="text-gray-400 mb-3 line-clamp-2">;
                  {service && service.tagline}
                </p>;
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">;
                  {service && service.description}
                </p>;
                {/* Price */}
                <div className='mb-4'>;
                  <span className='text-2xl font-bold text-cyan-400'>;
                    {service && service.price}
                  </span>;
                  <span className='text-gray-500 text-sm ml-2'>/month</span>;
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>;
                  <div className='flex items-center space-x-1 text-yellow-400'>;
                    <Star className='w-4 h-4 fill-current' />;
                    <span className='text-white'>{service && service.rating}</span>;
                    <span className='text-gray-500'>({service && service.reviews})</span>;
                  </div>;
                  <div className='flex items-center space-x-1 text-gray-400'>;
                    <Users className='w-4 h-4' />                    <span>{service && service.customers.toLocaleString()}</span>                  <div className="flex items-center space-x-1 text-gray-400">;
                    <Users className="w-4 h-4" />;
                    <span>{service && service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;

                {/* Features Preview */}




                  <div className="flex items-center justify-between">



                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>


                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-shrink-0">;
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">;
                      {service && service.icon}
                    </div>;
                  </div>;



                  {/* Service Details */}
                  <div className='flex-1 min-w-0'>;
                    <div className='flex items-start justify-between mb-3'>;
                        <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-lg text-cyan-300 mb-2'>;
                          {service && service.tagline}
                        </p>;
                        <p className='text-gray-400 mb-4'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='text-right'>;
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>;
                          {service && service.price}
                        </div>;
                        <div className='text-gray-500 text-sm'>/month</div>;


                        </span>
                      </div>
                    </div>
                    {/* Stats Row */}





                      </div>





                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Users className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.customers.toLocaleString()}
                        </span>
                        <span className='text-gray-500'>customers</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <TrendingUp className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.growthRate}
                        </span>
                        <span className='text-gray-500'>growth</span>
                      </div>
                      <div className='flex items-center space-x-1 text-gray-400'>
                        <Globe className='w-4 h-4' />
                        <span className='text-white font-medium'>
                          {service.marketSize}
                        </span>
                        <span className='text-gray-500'>market</span>                      </div>
                    </div>
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-white font-medium">{service.marketSize}</span>
                        <span className="text-gray-500">market</span>
                      </div>
                    </div>
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>                          {service && service.category}                      <div className="text-right">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                        <div className="text-gray-500 text-sm">/month</div>;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white mt-2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items-center space-x-8 mb-4 text-sm'>;
                      <div className='flex items-center space-x-1 text-yellow-400'>;
                        <Star className='w-4 h-4 fill-current' />;
                        <span className='text-white font-medium'>;
                          {service && service.rating}
                        </span>;
                        <span className='text-gray-500'>;
                          ({service && service.reviews} reviews);
                        </span>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Users className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.customers.toLocaleString()}
                        </span>;
                        <span className='text-gray-500'>customers</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <TrendingUp className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.growthRate}
                        </span>;
                        <span className='text-gray-500'>growth</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'>;
                        <Globe className='w-4 h-4' />;
                        <span className='text-white font-medium'>;
                          {service && service.marketSize}
                        </span>;
                        <span className='text-gray-500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items-center space-x-1 text-gray-400">;
                        <Globe className="w-4 h-4" />;
                        <span className="text-white font-medium">{service && service.marketSize}</span>;
                        <span className="text-gray-500">market</span>;
                    </div>;
                    {/* Features */}




            <button
              onClick={() => {;



          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}

            whileInView={{ opacity: 1, y: 0 }}



      {/* CTA Section */}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'            >                setSelectedPriceRange('all');
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200";
            >;
              Clear All Filters;
            </button>;
          </div>;
        )}
      </div>;

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion && motion.div      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>;
              <a
                href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'>;
                Get Started Today;
              </a>;
              <a
                href='/pricing'



                setSelectedPriceRange('all')
                className='group bg - gradient - to - r from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - xl hover:shadow - cyan - 500 / 20 transition - all duration - 300';
              >;
                <div className='flex items - start space - x-6'>;
                  {/* Service Icon */}
                  <div className='flex - shrink - 0'>;
                    <div className='w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                      {service.icon}              >;
                <div className="flex items - start space - x-6">;
                  {/* Service Icon */}
                  <div className="flex - shrink - 0">;
                    <div className="w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300">;
                      {service.icon}
                    </div>;
                  </div>;
                  {/* Service Details */}
                  <div className='flex - 1 min - w-0'>;
                    <div className='flex items - start justify - between mb - 3'>;
                        <h3 className='text - 2xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;
                          {service.name}
                        </h3>;
                        <p className='text - lg text - cyan - 300 mb - 2'>;
                          {service.tagline}
                        </p>;
                        <p className='text - gray - 400 mb - 4'>;
                          {service.description}
                        </p>;
                      </div>;
                      <div className='text - right'>;
                        <div className='text - 3xl font - bold text - cyan - 400 mb - 2'>;
                          {service.price}
                        </div>;
                        <div className='text - gray - 500 text - sm'>/month</div>;
                        <span;
                          className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}
                        >                          {service.category}                      <div className="text - right">;
                        <div className="text - 3xl font - bold text - cyan - 400 mb - 2">{service.price}</div>;
                        <div className="text - gray - 500 text - sm">/month</div>;
                        <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white mt - 2`}>;
                        </span>;
                      </div>;
                    </div>;
                    {/* Stats Row */}
                    <div className='flex items - center space - x-8 mb - 4 text - sm'>;
                      <div className='flex items - center space - x-1 text - yellow - 400'>;
                        <Star className='w - 4 h - 4 fill - current' />;
                        <span className='text - white font - medium'>;
                          {service.rating}
                        </span>;
                        <span className='text - gray - 500'>;
                          ({service.reviews} reviews);
                        </span>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Users className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.customers.toLocaleString ()}
                        </span>;
                        <span className='text - gray - 500'>customers</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <TrendingUp className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.growth_rate}
                        </span>;
                        <span className='text - gray - 500'>growth</span>;
                      </div>;
                      <div className='flex items - center space - x-1 text - gray - 400'>;
                        <Globe className='w - 4 h - 4' />;
                        <span className='text - white font - medium'>;
                          {service.market_size}
                        </span>;
                        <span className='text - gray - 500'>market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className="flex items - center space - x-1 text - gray - 400">;
                        <Globe className="w - 4 h - 4" />;
                        <span className="text - white font - medium">{service.market_size}</span>;
                        <span className="text - gray - 500">market</span>;
                    </div>;
                    {/* Features */}
                    <div className='mb - 4'>;
                      <div className='text - sm text - gray - 500 mb - 2'>;
                        Key Features:;
                      </div>;
                      <div className='grid grid - cols - 2 gap - 2'>;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div;
                            key={idx}
                            className='flex items - center space - x-2 text - sm text - gray - 400';
                          >;
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="mb - 4">;
                      <div className="text - sm text - gray - 500 mb - 2">Key Features:</div>;
                      <div className="grid grid - cols - 2 gap - 2">;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div key={idx} className="flex items - center space - x-2 text - sm text - gray - 400">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 flex - shrink - 0" />;
                          </div>))}
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>;
                      <button className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105'>;
                        Learn More;
                      </button>;
                      <div className='text - xs text - gray - 500'>;
                        Launched:{' '}
                        {new Date (service.launch_date).toLocaleDateString ()}                      </div>                    <div className="flex items - center justify - between">;
                      <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover: from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group - hover:scale - 105">;
                        Learn More;
                      </button>;
                      <div className="text - xs text - gray - 500">;
                        Launched: {new Date (service.launch_date).toLocaleDateString ()}
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>)}
        {/* No Results */}
        {filtered_services.length === 0 && (
          <div className='text - center py - 20'>;
            <div className='w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6'>;
              <Search className='w - 12 h - 12 text - cyan - 400' />;
            </div>;
            <h3 className='text - 2xl font - bold text - white mb - 2'>;
              No services found;
            </h3>;
            <p className='text - gray - 400 mb - 6'>;
              Try adjusting your search terms or filters to find what you're;
              looking for.            </p>          <div className="text - center py - 20">;
            <div className="w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6">;
              <Search className="w - 12 h - 12 text - cyan - 400" />;
            </div>;
            <h3 className="text - 2xl font - bold text - white mb - 2">No services found</h3>;
            <p className="text - gray - 400 mb - 6">;
              Try adjusting your search terms or filters to find what you're looking for.;
            <button;
              on_click={() => {
                setSearchTerm ('');
                setSelectedCategory ('All Services');
                setSelectedPriceRange ('all');
              }}




            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">


  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 

}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {

  case 'popular':;
  return b.customers - a.customers;



