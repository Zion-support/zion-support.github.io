  FaRocket,
  FaBrain,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaNetworkWired,


  id: string;
  name: string;
  description: string;




} from 'react-icons/si';


  SiAws;}
  SiGooglecloud;}
  SiMicrosoftazure;} from 'react-icons/si';
interface Service  {} from 'react-icons/si';interface Service  {FaRocket,FaBrain,FaCloud,FaShieldAlt,FaChartLine,FaCogs,FaLightbulb,FaGlobe,FaMobile,FaDatabase,FaNetworkWired,FaRobot,FaSearch,import { SiNextdotjs,SiReact,SiTypescript,SiTailwindcss,SiPrisma,SiSupabase,SiVercel,SiDocker,SiKubernetes,SiAws,SiGooglecloud,SiMicrosoftazure,} from 'react-icons/si';

const services: Service[] = [;
  {id: 'ai-automation-suite',
  title: 'AI-Powered Automation Suite',description:;
      'Comprehensive automation platform leveraging artificial intelligence for business process optimization',icon: <FaRobot className='w-6 h-6'    />,category: 'automation',
  features: [;
  {id: 'security',
  name: 'Cybersecurity',description: 'Advanced security solutions for modern threats',{id: 'data',
  name: 'Data & Analytics',description: 'Comprehensive data management and analytics platforms',{id: 'iot',
  name: 'IoT & Edge Computing',description: 'Internet of Things and edge computing solutions',{id: 'automation',
  name: 'Process Automation',description: 'Intelligent automation for business processes',}
  starter: 299,professional: 799,enterprise: 1999;}
    },starter: 999,professional: 2499,enterprise: 4999;
    },starter: 399,professional: 999,enterprise: 2499;
    },starter: 299,professional: 799,enterprise: 1999;
    },technologies: [;'Intelligent workflow automation';
      'Natural language processing';
      'Predictive analytics';
      'Real-time decision making';
      'Custom AI model training';
      'Multi-platform integration';
    return filtered.sort((a, b) => {switch (sortBy) {case 'price':;
          return a.pricing.starter - b.pricing.starter;
        case 'category':;}
          return a.category.localeCompare(b.category)default:;}
          return a.title.localeCompare(b.title)}
    })}, [selectedCategory, searchTerm, sortBy])const handleServiceSelect = (setSelectedService(service)) => {
  return $3;}
}
  const closeModal = (setSelectedService(null)) => {
  return $3;}
}
  return (<div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'    />;
      {/* Header */}<div className='container mx-auto px-4 py-16'    />        <motion&& motion.div;

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricing.starter - b.pricing.starter;
        case 'category':
          return a.category.localeCompare(b.category);





  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
  }
  const closeModal = () => {

    if (searchTerm) {;
      filtered = filtered && filtered.filter(service => ;
        service && service.title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.technologies.some(tech => tech && tech.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
      );
    }
    return filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return a && a.pricing.starter - b && b.pricing.starter;
        case 'category':;
          return a && a.category.localeCompare(b && b.category);
        default:;
          return a && a.title.localeCompare(b && b.title);
      }
    });
  }, [selectedCategory, searchTerm, sortBy]);
  const handleServiceSelect = (service: Service) => {;
    setSelectedService(service);
  };
  const closeModal = () => {;
    setSelectedService(null);
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white'>;
      {/* Header */}
      <div className='container mx-auto px-4 py-16'>        <motion&& motion.div

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          className='text-center mb-16'      }

    })

      {/* Header */}
      <div className=\"container mx-auto px-4 py-16\"    />;
        <motion&& motion.div;
      <div className='container mx-auto px-4 py-16'    />;
        <motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}



      <div className='container mx - auto px - 4 py - 16'>        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          className='text - center mb - 16'      }
    });
  }, [selected_category, search_term, sort_by]);
;
  const handleServiceSelect = (service: Service) =>: any {
    setSelectedService (service);
  }
;
  const close_modal = () =>: any {
    setSelectedService (null);
  }
;

          animate={{ opacity: 1, coordinate_y: 0 }}

          transition={{ duration: 0.8 }}


        </motion && motion.div>;



            <select
              value={sortBy}
              onChange={e =>;
                setSortBy(e && e.target.value as 'name' | 'price' | 'category');
              }



          className='text - center mb - 16';

        >;
        </motion && motion.div>;className='text-center mb-16'>

          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />;
            2025 Services Showcase;
          </h1>;
          <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'    />;
            Discover our cutting-edge technology solutions designed for the;
            future. From AI-powered automation to quantum computing, we're;
            building tomorrow's innovations today.;

          </p>;
        </motion.div>;
        {/* Search and Filters */}
        <motion&& motion.div;

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.2 }}
className='mb-12';
            />;
          initial={{ opacity: 0, y: 20 ,}
}
          animate={{ opacity: 1, y: 0 ,}
}transition={{ duration: 0.8, delay: 0.2 ,}
}
className='mb-12'>

          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'    />;
            <div className='relative flex-1 max-w-md'    />;
            From AI - powered automation to quantum computing, we're building tomorrow's innovations today.;


          <div className='flex flex - col md:flex - row gap - 4 items - center justify - center'    />;
            <div className='relative flex - 1 max - w-md'    />;
              on_change={e =    />;}
                setSortBy (e.target.value as 'name' | 'price' | 'category')}
              className='px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - blue - 500';

              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}


              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </motion.div>

              <input;
                type=\'text\';
                placeholder=\'Search services, technologies, or features...\';
                value={searchTerm}
            <select;
              value={sortBy}
              onChange={(e) =    /> setSortBy(e && e.target.value as 'name' | 'price' | 'category')}
              className=\'px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500\';
          <div className=\"flex flex - col md:flex - row gap - 4 items - center justify - center\"    />;
            <div className=\"relative flex - 1 max - w-md\"    />;
              <input;
                type=\'text\';
                placeholder=\'Search services, technologies, or features...\';
                value={search_term}
                on_change={(e) =    /> setSearchTerm (e.target.value)}
                className=\'w - full px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent\';
              />;
              <FaSearch className=\"absolute right - 3 top - 1/2 transform -translate - y-1 / 2 text - gray - 400\"    />;
            </div>;
            <select;
              value={sort_by}

              on_change={(e) => setSortBy (e.target.value as 'name' | 'price' | 'category')}
              className="px - 4 py - 3 bg - white / 10 backdrop - blur - sm border border - white / 20 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - blue - 500";



        {/* Category Tabs */}

        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}


                onClick={() =    /> setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category.id;}
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`;
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';
              <button;
                key={category && category.id}
                onClick={() =    /> setSelectedCategory(category && category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${selectedCategory === category && category.id;}
                    ? `bg-gradient-to-r ${category && category.color} text-white shadow-lg`;
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20';

                }`}
              >;
                {category && category.icon}
                {category && category.name}
              </button>;

            ))}
        {/* Services Grid */}

        <motion&& motion.div;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.6 }}
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
            />;
          {filteredServices.map((service, index) => (<motion.div;}
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300';
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
          initial={{ opacity: 0, y: 20 ,}
}
          animate={{ opacity: 1, y: 0 ,}
}transition={{ duration: 0.8, delay: 0.6 ,}
}
className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />


          {filteredServices.map((service, index) => (<motion.div;}
              key={service.id}



        {/* Services Grid */}
        <motion&& motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}


        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
              whileHover={{ y: -5, scale: 1 && 1.02 }}
              className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300'





              onClick={() => handleServiceSelect(service)}

            >;
              <div className='flex items-center gap-3 mb-4'    />;
                <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg'    />;
                  {service && service.icon}
                </div>;
                <div    />;
                  <h3 className='text-xl font-bold text-white'    />;
                    {service && service.title}
                  </h3>;
                  <p className='text-sm text-gray-400'    />;
                    {serviceCategories && serviceCategories.find(c => c && c.id === service && service.category)?.name;}

                    }


          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
        </motion.div>;
        {/* Category Tabs */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb - 12';
        >;
          <div className='flex flex - wrap justify - center gap - 4'>            <button          className="mb - 12";
        >;
          <div className="flex flex - wrap justify - center gap - 4">;
            <button;
              on_click={() => setSelectedCategory ('all')}
              className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 ${
                selected_category === 'all';
                  ? 'bg - gradient - to - r from - blue - 500 to - purple - 500 text - white shadow - lg';
                  : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
              }`}
            >;
              All Services;
            </button>;
            {service_categories.map (category => (              <button            {service_categories.map ((category) => (
              <button;
                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - lg font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? `bg - gradient - to - r ${category.color} text - white shadow - lg`;
                    : 'bg - white / 10 backdrop - blur - sm border border - white / 20 text - gray - 300 hover:bg - white / 20';
                }`}
              >;
                {category.icon}
                {category.name}
              </button>))}
          </div>;
        </motion.div>;
        {/* Services Grid */}
        <motion.div;
          initial={{ opacity: 0, coordinate_y: 20 }}
          animate={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'        >          className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
        >;
          {filtered_services.map ((service, index) => (
            <motion.div;

                    {tech}
                  </span>
                ))}

                {service.technologies.length > 3 && (<span className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'    />;}


                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">


                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>





              <div className='flex items-center justify-between'    />;
                <div className='text-2xl font-bold text-blue-400'    />                  <span className=\"px-2 py-1 bg-white/10 rounded text-xs text-gray-300\"    />;


              <div className='flex items-center justify-between'    />;
                <div className='text-2xl font-bold text-blue-400'    />;
                <button className=\"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300\"    />;


        {filteredServices && filteredServices.length === 0 && (<motion&& motion.div;}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}className='text-center py-16';
              />;
            animate={{ opacity: 1 ,}
}className='text-center py-16'>
            <p className='text-gray-400'    />;


      <AnimatePresence    />;
        {selectedService && (<motion&& motion.div;}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            exit={{ opacity: 0 ,}
                    <p className='text-gray-400'    />;
                      {serviceCategories.find(c => c.id === selectedService.category;}
                        )?.name;}


                  onClick={closeModal}className='p-2 hover:bg-white/10 rounded-lg transition-colors';
                    />;
                  onClick={closeModal}className='p-2 hover:bg-white/10 rounded-lg transition-colors'>

                  <span className='text-2xl'    />×</span>;
                        <div className='w-2 h-2 bg-blue-500 rounded-full'    /></div>;


                {/* Benefits */}<div    />;
                  <h3 className='text-xl font-bold text-white mb-4'    />;
                    Key Benefits;
                  </h3>;
                  <ul className='space-y-2'    />;
                    {selectedService && selectedService.benefits.map((benefit, index) => (<li;}
                        key={index}
                        className='flex items-center gap-2 text-gray-300'    />;
                        <div className='w-2 h-2 bg-green-500 rounded-full'    /></div>                        {benefit}                  <h3 className=\"text-xl font-bold text-white mb-4\"    />Key Benefits</h3>;
                  <ul className=\"space-y-2\"    />;
                    {selectedService && selectedService.benefits.map((benefit, index) => (<li key={index} className=\"flex items-center gap-2 text-gray-300\"    />;
                        <div className=\"w-2 h-2 bg-green-500 rounded-full\"    /></div>;
                      </li>;<div    />;
<h3 className='text-xl font-bold text-white mb-4'    />;
                    Key Benefits;
                  </h3>;
                  <ul className='space-y-2'    />;
                    {selectedService.benefits.map((benefit, index) => (<li;}
                        key={index}
                        className='flex items-center gap-2 text-gray-300';
                          />;
                        className='flex items-center gap-2 text-gray-300'>

                        <div className='w-2 h-2 bg-green-500 rounded-full'    /></div>;


<div className='mt-8'    />;
                <h3 className='text-xl font-bold text-white mb-4'    />;
                  Technologies;
                </h3>;
                <div className='flex flex-wrap gap-3'    />;
                  {selectedService.technologies.map(tech => (<span;}
                      key={tech}className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                        />              <div className=\"mt-8\"    />;
                <h3 className=\"text-xl font-bold text-white mb-4\"    />Technologies</h3>;
                <div className=\"flex flex-wrap gap-3\"    />;
                  {selectedService.technologies.map((tech) => (<span;}
                      key={tech}
                      className=\'px-3 py-2 bg-white/10 rounded-lg text-gray-300\';
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                        />;
                    >;
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300';


              </div>;{/* Pricing */}<div className='mt-8'    />;
                <h3 className='text-xl font-bold text-white mb-4'    />;
                  Pricing Plans;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'    />;
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (<div;}
                        key={plan}
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center';
                          />;
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center'>

                        <h4 className='text-lg font-bold text-white capitalize mb-2'    />;
                        <button className='w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300'    />;


              <div className='mt-8'    />;
                <h3 className='text-xl font-bold text-white mb-4'    />;
                  Technologies;
                </h3>;
                <div className='flex flex-wrap gap-3'    />;
                  {selectedService && selectedService.technologies.map(tech => (<span;}
                      key={tech}
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'    />              <div className=\"mt-8\"    />;
                <h3 className=\"text-xl font-bold text-white mb-4\"    />Technologies</h3>;
                <div className=\"flex flex-wrap gap-3\"    />;
                  {selectedService && selectedService.technologies.map((tech) => (<span;}
                      key={tech}
                      className=\'px-3 py-2 bg-white/10 rounded-lg text-gray-300\';


              <div className='mt-8'    />;
                <h3 className='text-xl font-bold text-white mb-4'    />;
                  Pricing Plans;
                </h3>;
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'    />;
                  {Object && Object.entries(selectedService && selectedService.pricing).map(([plan, price]) => (<div;}
                        key={plan}
                        className='p-4 bg-white/5 border border-white/20 rounded-lg text-center'    />;
                        <h4 className='text-lg font-bold text-white capitalize mb-2'    />;
                    ))}                </div>                      <button className=\"w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover: from-blue-600 hover:to-purple-600 transition-all duration-300\"    />;


              while_hover={{ coordinate_y: -5, scale: 1.02 }}
                  <p className='text - sm text - gray - 400'    />;
                    {service_categories.find (c => c.id === service.category)?.name;}

              <p className='text - gray - 300 mb - 4 line - clamp - 3'    />;
                {service.description}
              </p>;
              <div className='flex flex - wrap gap - 2 mb - 4'    />;
                {service.technologies.slice (0, 3).map (tech => (<span;}
                    key={tech}
                    className='px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300'                      />              on_click={() => handleServiceSelect (service)}
            >;
              <div className=\"flex items - center gap - 3 mb - 4\"    />;
                <div className=\"p - 3 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg\"    />;
                  {service.icon}
                </div>;
                <div    />;
                  <h3 className=\"text - xl font - bold text - white\"    />{service.title}</h3>;
                  <p className=\"text - sm text - gray - 400\"    />{service_categories.find (c => c.id === service.category)?.name}</p>;
                </div>;
              </div>;
              <p className=\"text - gray - 300 mb - 4 line - clamp - 3\"    />{service.description}</p>;
              <div className=\"flex flex - wrap gap - 2 mb - 4\"    />;
                {service.technologies.slice (0, 3).map ((tech) => (<span;}
                    key={tech}
                    className=\"px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300\"    />

                    {tech}
                  </span>))}
                {service.technologies.length > 3 && (<span className='px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300'    />                    +{service.technologies.length - 3} more;
                  </span>)}
              </div>;
              <div className='flex items - center justify - between'    />;
                <div className='text - 2xl font - bold text - blue - 400'    />                  <span className=\"px - 2 py - 1 bg - white / 10 rounded text - xs text - gray - 300\"    />;
                    +{service.technologies.length - 3} more;
                  </span>)}
              </div>;
              <div className='flex items - center justify - between'    />;
                <div className='text - 2xl font - bold text - blue - 400'    />;
                  ${service.pricing.starter}
                  <span className='text - sm text - gray - 400 font - normal'    />;
                    /month;
                  </span>;
                </div>;
                <button className='px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover: from - blue - 600 hover:to - purple - 600 transition - all duration - 300'    />                  Learn More                  ${service.pricing.starte,}
}
                  <span className=\"text - sm text - gray - 400 font - normal\"    />/month</span>;
                </div>;
                <button className=\"px - 4 py - 2 bg - gradient - to - r from - blue - 500 to - purple - 500 rounded - lg text - white font - medium hover:from - blue - 600 hover:to - purple - 600 transition - all duration - 300\"    />;

                  Learn More;
                </button>;
              </div>;
            </motion.div>))}
        </motion.div>;


                  <span className="text-sm text-gray-400 font-normal">/month</span>


              </div>;



        {/* No Results */}
        {filteredServices && filteredServices.length === 0 && (;
          <motion&& motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}




        )}

      </div>;





      <AnimatePresence    />;
        {selected_service && (<motion.div;}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}









              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>;



                  </ul>;
                </div>;






                {/* Benefits */}

                <div    />;
                  <h3 className='text - xl font - bold text - white mb - 4'    />;
                        className='flex items - center gap - 2 text - gray - 300'    />



                    ))}


              {/* Technologies */}


                      {tech}
                    </span>;
                  ))}


                </div>;
              </div>;





              {/* Pricing */}






              <div className='mt - 8'    />;
                <h3 className='text - xl font - bold text - white mb - 4'    />;

      </AnimatePresence>
    </div>
  );
}
export default EnhancedServicesShowcase2025;

;







