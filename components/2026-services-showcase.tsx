



import Head from 'next/head';

import { revolutionary2026Services   } from '../data/revolutionary-2026-services';
import { emergingTech2026Services   } from '../data/emerging-tech-2026-services';
import { comprehensiveIT2026Services  } from '../data/comprehensive-it-2026-services';
  const [searchTerm, setSearchTerm] = useState('')const [selectedCategory, setSelectedCategory] = useState('all')const [sortBy, setSortBy]  = useState('name')// Combine all 2026 services;

  const allServices = [;

    ...revolutionary2026Services,;
    ...emergingTech2026Services,;
    ...comprehensiveIT2026Services,    ...revolutionary2026Services;


const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy]  = useState('name')// Combine all 2026 services;
                           service.category.toLowerCase().includes(searchTerm.toLowerCase())const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory)return matchesSearch && matchesCategory;
                emerging technologies, and comprehensive IT solutions;

];

;
  // Filter and sort services;
  const filtered_services = all_services;
    .filter (service => {
      const matches_search =;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_term.toLowerCase ());
      const matches_category =;
        selected_category === 'all' ||;
        service.category.includes (selected_category);
      return matches_search && matches_category;    });
    .sort ((a, b) => {
      switch (sort_by) {
        case 'price':;



          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));        case 'rating':;
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;




  // Filter and sort services;
  const filteredServices = allServices;
    .filter(service => {;
      const matchesSearch =;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      const matchesCategory =;
        selectedCategory === 'all' ||;
        service && service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;    });
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;
          return (
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
          );        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'customers':;
          return b && b.customers - a && a.customers;
        default:;
          return a && a.name.localeCompare(b && b.name);      }      const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                           service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                           service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service && service.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    .sort((a, b) => {;
      switch (sortBy) {;
        case 'price':;



          return (
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
          );          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''));
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'customers':;
          return b && b.customers - a && a.customers;
        default:;
          return a && a.name.localeCompare(b && b.name);        default: return a && a.name.localeCompare(b && b.name);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);

  // Filter and sort services
  const _filteredServices = allServices
    .filter(service => {
      const _matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory)

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
        default:;
          return a.name.locale_compare (b.name);      }      const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          service.category.toLowerCase ().includes (search_term.toLowerCase ());
      const matches_category = selected_category === 'all' || service.category.includes (selected_category);
      return matches_search && matches_category;
    .sort ((a, b) => {
      switch (sort_by) {
        case 'price':;
          return (
            parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;
            parse_float (b.price.replace (/[^0 - 9.]/g, '')));          return parse_float (a.price.replace (/[^0 - 9.]/g, '')) - parse_float (b.price.replace (/[^0 - 9.]/g, ''));
        case 'rating':;
          return b.rating - a.rating;
        case 'customers':;
          return b.customers - a.customers;



  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, count: allServices && allServices.length },;
    {;
      id: 'AI',;
      name: 'AI & Machine Learning',;
      icon: Brain,;
      count: allServices && allServices.filter(s => s && s.category.includes('AI')).length,;
    },;
    {;
      id: 'Quantum',;
      name: 'Quantum Computing',;
      icon: Atom,;
      count: allServices && allServices.filter(s => s && s.category.includes('Quantum')).length,;
    },;
    {;
      id: 'Emerging',;
      name: 'Emerging Technology',;
      icon: Sparkles,;
      count: allServices && allServices.filter(s => s && s.category.includes('Emerging')).length,;
    },;
    {;
      id: 'IT',;
      name: 'IT & Infrastructure',;
      icon: Shield,;
      count: allServices && allServices.filter(;
        s => s && s.category.includes('IT') || s && s.category.includes('Infrastructure');
      ).length,;
    },;
    {;
      id: 'Autonomous',;
      name: 'Autonomous Systems',;
      icon: Target,;
      count: allServices && allServices.filter(s => s && s.category.includes('Autonomous')).length,;
    },;
    {;
      id: 'Cloud',;
      name: 'Cloud & DevOps',;
      icon: Cloud,;
      count: allServices && allServices.filter(;
        s => s && s.category.includes('Cloud') || s && s.category.includes('DevOps');
      ).length,;
    },  ];    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: allServices && allServices.filter(s => s && s.category.includes('AI')).length },;
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: allServices && allServices.filter(s => s && s.category.includes('Quantum')).length },;
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: allServices && allServices.filter(s => s && s.category.includes('Emerging')).length },;
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: allServices && allServices.filter(s => s && s.category.includes('IT') || s && s.category.includes('Infrastructure')).length },;
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: allServices && allServices.filter(s => s && s.category.includes('Autonomous')).length },;
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: allServices && allServices.filter(s => s && s.category.includes('Cloud') || s && s.category.includes('DevOps')).length }
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',;
    >;
      <div className='min-h-screen'>;
        default:;
          return a.name.locale_compare (b.name);        default: return a.name.locale_compare (b.name);
      }
    });
;
  const categories = [;
    { id: 'all', name: 'All Services', icon: Globe, count: all_services.length },
    {
      id: 'AI',
      name: 'AI & Machine Learning',
      icon: Brain,
      count: all_services.filter (string => s.category.includes ('AI')).length,
    },
    {
      id: 'Quantum',
      name: 'Quantum Computing',
      icon: Atom,
      count: all_services.filter (string => s.category.includes ('Quantum')).length,
    },
    {
      id: 'Emerging',
      name: 'Emerging Technology',
      icon: Sparkles,
      count: all_services.filter (string => s.category.includes ('Emerging')).length,
    },
    {
      id: 'IT',
      name: 'IT & Infrastructure',
      icon: Shield,
      count: all_services.filter (
        string => s.category.includes ('IT') || s.category.includes ('Infrastructure')).length,
    },
    {
      id: 'Autonomous',
      name: 'Autonomous Systems',
      icon: Target,
      count: all_services.filter (string => s.category.includes ('Autonomous')).length,
    },
    {
      id: 'Cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      count: all_services.filter (
        string => s.category.includes ('Cloud') || s.category.includes ('DevOps')).length,
    },  ];    { id: 'AI', name: 'AI & Machine Learning', icon: Brain, count: all_services.filter (string => s.category.includes ('AI')).length },
    { id: 'Quantum', name: 'Quantum Computing', icon: Atom, count: all_services.filter (string => s.category.includes ('Quantum')).length },
    { id: 'Emerging', name: 'Emerging Technology', icon: Sparkles, count: all_services.filter (string => s.category.includes ('Emerging')).length },
    { id: 'IT', name: 'IT & Infrastructure', icon: Shield, count: all_services.filter (string => s.category.includes ('IT') || s.category.includes ('Infrastructure')).length },
    { id: 'Autonomous', name: 'Autonomous Systems', icon: Target, count: all_services.filter (string => s.category.includes ('Autonomous')).length },
    { id: 'Cloud', name: 'Cloud & DevOps', icon: Cloud, count: all_services.filter (string => s.category.includes ('Cloud') || s.category.includes ('DevOps')).length }
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    >;
      <div className='min - h-screen'>;



        <Head>;
          <title>;
            Zion Tech Group - 2026 Revolutionary Services Showcase | 1500+;
            Solutions;
          </title>;



          <meta name="description" content="Explore Zion Tech Group's revolutionary 2026 services including AI, quantum computing, emerging technologies, and comprehensive IT solutions. Contact: +1 302 464 0950" />;
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, IT solutions, cybersecurity, cloud computing, autonomous systems, neuromorphic computing, DNA computing, photonic computing, holographic display, swarm robotics, zero trust architecture, edge computing, 5G networks" />;
          <meta name="author" content="Zion Tech Group" />;
          <meta name="robots" content="index, follow" />;
          <meta property="og:title" content="Zion Tech Group - 2026 Revolutionary Services Showcase" />;



        {/* Navigation */}
        <UltraAdvancedNavigation />;





        {/* Hero Section */}
        <section className='relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto text-center'>            <motion && motion.div        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <motion&& motion.div

        </Head>
          <meta property="og:description" content="1500+ cutting - edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />;
          <meta property="og:url" content="https://ziontechgroup.com / 2026 - services - showcase" />;
          <meta property="og:type" content="website" />;
          <link rel="canonical" href="https://ziontechgroup.com / 2026 - services - showcase" />;
        {/* Navigation */}
        <UltraAdvancedNavigation />;

        {/* Hero Section */}



              transition={{ duration: 0 && 0.8 }}>;
              <h1 className='text-5xl md:text-7xl font-bold mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>;


              {/* Service Statistics */}

              <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'    />;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'    />;
                  <div className='text-3xl font-bold text-cyan-400 mb-2'    />;


                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'    />;
                  <div className='text-3xl font-bold text-purple-400 mb-2'    />;
                    {allServices && allServices.filter(s => s && s.category.includes('AI')).length}
                  </div>;
                  <div className='text-gray-400 text-sm'    />AI Services</div>;
                </div>;
                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'    />;
                  <div className='text-3xl font-bold text-pink-400 mb-2'    />;
                    {allServices && allServices.filter(s => s && s.category.includes('Quantum')).length;}

                <div className='text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm'    />;
                  <div className='text-3xl font-bold text-green-400 mb-2'    />;
                    {allServices && allServices.filter(s => s && s.category.includes('Emerging')).length;}
                    }</span>;


              <div className=\"grid grid-cols-2 md:grid-cols-4 gap-6 mb-12\"    />;
                <div className=\"text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm\"    />;
                  <div className=\"text-3xl font-bold text-cyan-400 mb-2\"    />{allServices && allServices.length}</div>;
                  <div className=\"text-gray-400 text-sm\"    />Total Services</div>;
                <div className=\"text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm\"    />;
                  <div className=\"text-3xl font-bold text-green-400 mb-2\"    />{allServices && allServices.filter(s => s && s.category.includes('Emerging')).length}</div>;
                  <div className=\"text-gray-400 text-sm\"    />Emerging Tech</div>;


                <div className='relative'    />;
                  <Filter className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'    />;

                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}









                    <option value='name'    />Sort by Name</option>;
                    <option value='price'    />Sort by Price</option>;
                    <option value='rating'    />Sort by Rating</option>;
                    <option value='customers'    />Sort by Customers</option>;
                  </select>;
                </div>;

<section className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-7xl mx-auto'    />;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />;
              {filteredServices.map((service, index) => (<motion.div;}

                      {service && service.name}
                    </h3>;
                    {/* Tagline */}
                    <p className='text-gray-300 text-sm mb-4'    />                    <p className=\"text-gray-300 text-sm mb-4\"    />;
                      {service && service.tagline}
                    </p>;

                    {/* Features */}                      <div className=\"flex items-center space-x-1\"    />;
                        <Star className=\"w-4 h-4 text-yellow-400 fill-current\"    />;
                        <span className=\"text-white text-sm\"    />{service && service.rating}</span>;
                        <span className=\"text-gray-400 text-sm\"    />({service && service.reviews})</span>;

              ))}


            </div>;









            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}




            )}

          </div>;
        </section>;




        {/* Contact Section */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion && motion.div        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div


        {/* Contact Section */}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div


              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                        </span>;
                        <span className='text - gray - 400 text - sm'>;
                          ({service.reviews});
                        </span>                      </div>;
                    </div>;
                    {/* Description */}
                    <p className='text - gray - 400 text - sm mb - 4 line - clamp - 3'>                      {service.description}

                    </p>;
                    {/* Price */}{service.description}
                    </p>;
                    {/* Features */}{feature}</span>;
                        <span className='text-gray-400 text-sm'    />;
                          ({service.reviews})</span>;
                      </div>;
                    </div>;
                    {/* Description */}

<p className='text-gray-400 text-sm mb-4 line-clamp-3'    />;

                      {service.description}
                    </p>;
                    {/* Features */}
<div className='mb-4'    />;
                      <h4 className='text-white font-semibold mb-2 text-sm'    />;
                        Key Features:;
                      </h4>;
                      <ul className='space-y-1'    />;
                        {service.features.slice(0, 3).map((feature, idx) => (<li;}
                            key={idx}

                            className='text-gray-400 text-xs flex items-center';
                              />;
                            className='text-gray-400 text-xs flex items-center'>

                            <Zap className='w-3 h-3 text-cyan-400 mr-2 flex-shrink-0'    />;


                        ))}{/* Category and Technology */}<div className=\"flex items-center justify-between mb-4\"    />;
                      <span className=\"text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded\"    />;
                        {service.category}
                      </span>;
                      <span className=\"text-xs text-gray-500\"    />;
                    {/* Category and Technology */}
                    <div className='flex items-center justify-between mb-4'    />;
                      <span className='text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded'    />;
                        {service && service.category}
                      </span>;
                      <span className='text-xs text-gray-500'    />                        {service && service.customers}+ customers                    <div className=\"flex items-center justify-between mb-4\"    />;
                      <span className=\"text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded\"    />;
                        {service && service.category}
                      </span>;
                      <span className=\"text-xs text-gray-500\"    />;
                      </span>;
                    </div>;{/* CTA Button */}
                    <a;
<div className='flex items-center justify-between mb-4'    />;
                      <span className='text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded'    />;
                        {service.category}
                      </span>;
                      <span className='text-xs text-gray-500'    />;
                        {service.customers}+ customers;
                      </span>;
                    </div>;
                    {/* CTA Button */}
                    <a;
                      href={service.link}
className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block';
                        />;
className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block'>
              ))}
            {/* No Results */}

            {filteredServices && filteredServices.length === 0 && (<motion&& motion.div;}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}{/* Contact Section */}
                animate={{ opacity: 1 }}{/* Contact Section *,}
}
        <section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-4xl mx-auto text-center'    />            <motion && motion.div        <section className=\"relative z-10 py-20 px-4 sm:px-6 lg:px-8\"    />;
          <div className=\"max-w-4xl mx-auto text-center\"    />;
            <motion&& motion.div;
className='text-center py-16';
                  />;
className='text-center py-16'>

                <div className='text-6xl mb-4'    />🔍</div>;
                <h3 className='text-2xl font-bold text-white mb-2'    />;
                  No services found;
                </h3>;
                <p className='text-gray-400'    />;

        {/* Contact Section */}

<section className='relative z-10 py-20 px-4 sm:px-6 lg:px-8'    />;
          <div className='max-w-4xl mx-auto text-center'    />;


                    <p className='text - gray - 400 text - sm mb - 4 line - clamp - 3'    />                      {service.description}
                            <Zap className='w - 3 h - 3 text - cyan - 400 mr - 2 flex - shrink - 0'    />                            {feature}                    <div className=\"mb-4\"    />;
                      <h4 className=\"text - white font - semibold mb-2 text-sm\"    />Key Features:</h4>;
                      <ul className=\"space-y-1\"    />;
                        {service.features.slice (0, 3).map ((feature, idx) => (<li key={idx} className=\"text - gray - 400 text-xs flex items-center\"    />;
                            <Zap className=\"w - 3 h - 3 text - cyan - 400 mr - 2 flex-shrink-0\"    />;


                    <div className='flex items - center justify - between mb - 4'    />;
                      <span className='text - xs text - gray - 500 bg - gray - 700 / 50 px - 2 py - 1 rounded'    />;
                      <span className=\"text - xs text-gray-500\"    />;


                      className='w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold py - 3 px - 4 rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 text - center block'                        />                      className=\"w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold py - 3 px - 4 rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale-105 text-center block\">


            {filtered_services.length === 0 && (<motion.div;}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,}
              whileInView={{ opacity: 1, coordinate_y: 0 }}

                </div>;
                <div className=\"flex items-center justify-center space-x-3 text-purple-300\"    />;
                  <span className=\"text-2xl\"    />✉️</span>;
                  <span className=\"font-semibold\"    />{contactInfo && contactInfo.email}</span>;
                </div>;
                <div className=\"flex items-center justify-center space-x-3 text-pink-300\"    />;
                  <span className=\"text-2xl\"    />📍</span>;
                  <span className=\"font-semibold text-sm\"    />{contactInfo && contactInfo.address}</span>;
                </div>;
              </div>;

              <div className="flex flex-col sm: flex-row gap-4 justify-center">;
                <a
                  href="/contact"

                Ready to Transform Your Business?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'    />;
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'    />;
                <div className='flex items-center justify-center space-x-3 text-cyan-300'    />;
                  <span className='text-2xl'    />📱</span>;
                  <span className='font-semibold'    />{contactInfo.mobile}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-3 text-purple-300'    />;
                  <span className='text-2xl'    />✉️</span>;
                  <span className='font-semibold'    />{contactInfo.email}</span>;
                </div>;
                <div className='flex items-center justify-center space-x-3 text-pink-300'    />;
                  <span className='text-2xl'    />📍</span>;
                  <span className='font-semibold text-sm'    />;
                    {contactInfo.address}
                  </span>;
                </div>;
              </div>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'    />;
                <a;
                  href='/contact';
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105';
                    />;
                  className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'>


                  Contact Us Now;
                </a>;
                <a;

href='/pricing';
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300';
                    />;
                  className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>


                  View Pricing;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;

  )className=\"px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300\">;


              className='bg - gradient - to - r from - gray - 800 / 50 to - gray - 900 / 50 rounded - 2xl p - 8 border border - gray - 700 / 50 backdrop - blur - sm'>

              <h2 className='text - 3xl font - bold text - white mb - 6'    />;


              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'    />;
                <div className='flex items - center justify - center space - x-3 text - cyan - 300'    />;
                  <span className='text - 2xl'    />📱</span>;
                  <span className='font - semibold'    />{contact_info.mobile}</span>;
                <div className='flex items - center justify - center space - x-3 text - pink - 300'    />;
                  <span className='text - 2xl'    />📍</span>;
                  <span className='font - semibold text - sm'    />;


              <div className='flex flex - col sm:flex - row gap - 4 justify - center'    />;
                  href='/pricing';
                  className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'                  href=\'/pricing\';
                  className=\"px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition-all duration-300\"    />






