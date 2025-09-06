
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
import React, { useState, useEffect } from 'react';
} from 'lucide-react';

interface Service {;
import { motion } from 'framer-motion';
import { innovativeMicroSaasServices2026 } from '../data / 2026 - innovative - micro - saas - expansion';
import { specializedITSolutions2026 } from '../data / 2026 - specialized - it - solutions';
import { emergingTechServices2026 } from '../data / 2026 - emerging - tech - services';
import {
  Search,
  Filter,
  Star,
  Users,
  TrendingUp,
  Clock,
  Zap,
  Shield,
  Cloud,
  Brain,
  Database,
  Globe,
  Robot,
  Cube,
  Sparkles,
} from 'lucide-react';
;
interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  text_color: string;
  link: string;
  market_position: string;
  target_audience: string;
  trial_days: number;
  setup_time: string;
  category: string;
  real_service: boolean;
  technology: string[];
  integrations: string[];
  use_cases: string[];
  roi: string;
  competitors: string[];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
    ...emergingTechServices2026
  ];
  const categories = [

  const priceRanges = [;
    { value: 'all', label: 'All Prices' },;
    { value: '0-100', label: '$0 - $100' },;
    { value: '100-200', label: '$100 - $200' },;
    { value: '200-400', label: '$200 - $400' },;
    { value: '400-600', label: '$400 - $600' },;
    { value: '600+', label: '$600+' },;
  ];
  const filteredServices = allServices && allServices.filter(service => {;
    const matchesSearch =;
      service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
      service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    const matchesPrice =;
      selectedPriceRange === 'all' ||;
      (() => {;
        const price = parseInt(service && service.price.replace('$', ''));
        switch (selectedPriceRange) {;
          case '0-100':;
            return price <= 100;
          case '100-200':;
            return price > 100 && price <= 200;
          case '200-400':;
            return price > 200 && price <= 400;
          case '400-600':;
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState ('all');
  const [sort_by, setSortBy] = useState ('popularity');
;
  const all_services = [;
    ...innovativeMicroSaasServices2026,
    ...specializedITSolutions2026,
    ...emergingTechServices2026,
  ];
;
  const categories = [;
    'all',
    'Business Intelligence & Analytics',
    'Content Creation & Marketing',
    'Customer Service & Support',
    'E - commerce & Retail',
    'HR & Recruitment',
    'Financial Management',
    'Project Management',
    'Education & Training',
    'Healthcare & Medical',
    'Cloud Infrastructure & DevOps',
    'Cybersecurity & Threat Intelligence',
    'Data Engineering & Analytics',
    'API Management & Integration',
    'Network Monitoring & Management',
    'Database Management & Optimization',
    'IT Service Management',
    'Backup & Disaster Recovery',
    'Quantum Computing & AI',
    'Blockchain & Web3',
    'Internet of Things (IoT)',
    'Edge Computing & 5G',
    'AR / VR & Immersive Technology',
    'Robotics & Automation',
    'Digital Twin & Simulation',  ];
;
  const price_ranges = [;
    { value: 'all', label: 'All Prices' },
    { value: '0 - 100', label: '$0 - $100' },
    { value: '100 - 200', label: '$100 - $200' },
    { value: '200 - 400', label: '$200 - $400' },
    { value: '400 - 600', label: '$400 - $600' },
    { value: '600+', label: '$600+' },
  ];
;
  const filtered_services = all_services.filter (service => {
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.category.toLowerCase ().includes (search_term.toLowerCase ());
;
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
;
    const matches_price =;
      selectedPriceRange === 'all' ||;
      (() => {
        const price = parse_int (service.price.replace ('$', ''));
        switch (selectedPriceRange) {
          case '0 - 100':;
            return price <= 100;
          case '100 - 200':;
            return price > 100 && price <= 200;
          case '200 - 400':;
            return price > 200 && price <= 400;
          case '400 - 600':;
            return price > 400 && price <= 600;
          case '600+':;
            return price > 600;
        }
      })();
        return b.rating - a.rating;
      case 'customers':;
        return b.customers - a.customers;

        return (
          parseInt(a && a.price.replace('$', '')) -;
          parseInt(b && b.price.replace('$', ''));
        );
      case 'price-high':;
        return (
          parseInt(b && b.price.replace('$', '')) -;
          parseInt(a && a.price.replace('$', ''));
        );      case 'rating':;
        return b && b.rating - a && a.rating;
      case 'customers':;
        return b && b.customers - a && a.customers;
      default:;
        return 0;    }
  });
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'>;
      {/* Hero Section */}
      <div className='relative overflow-hidden'>;
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              Discover our comprehensive suite of innovative micro SAAS;
              services, IT solutions, and emerging technology platforms designed;
              to transform your business.;
            </p>;
            {/* Category Filter */}
            <div>;
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {categories && categories.map(category => (;
                  <option
                    key={category}
                    value={category}
                    className='bg-gray-800 text-white'>;
                    {category === 'all' ? 'All Categories' : category}
                  </option>;
                ))}
            {/* Price Range Filter */}
            <div>;
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-800 text-white'>;
                    {range && range.label}
                  </option>;
                ))}
            {/* Sort By */}
            <div>;
              <select
                value={sortBy}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
              className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105'>;
              {/* Service Header */}
              <div className='flex items-start justify-between mb-4'>;
                <div className='flex items-center space-x-3'>;
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service && service.color} flex items-center justify-center text-2xl`}>;
                    {service && service.icon}
                  </div>;
                  <div>;
                    <h3 className='text-xl font-bold text-white'>;
                      {service && service.name}
                    </h3>;
                    <p className='text-sm text-gray-300'>{service && service.category}</p>;
                  </div>;
                </div>;
                {service && service.popular && (;
                  <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold'>;
                    Popular;
                  </div>;
                )}
              {/* Price and Trial */}
              <div className='flex items - center justify - between mb - 4'>;
                <div className='text - 2xl font - bold text - white'>;
                  {service.price}
                  <span className='text - sm text - gray - 400'>;
                    {service.period}
              {/* Features */}
              <div className='mb-4'>;
                <h4 className='text-sm font-semibold text-white mb-2'>;
                  Key Features:;
                </h4>;
                <ul className='space-y-1'>;
                  {service && service.features.slice(0, 3).map((feature, idx) => (;
                    <li
                      key={idx}
                      className='text-xs text-gray-300 flex items-center'>;
                      <div className='w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full mr-2'></div>;
                      {feature}
                    </li>;
                  ))}
              {/* Stats */}
              <div className='grid grid - cols - 3 gap - 4 mb - 4 text - center'>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.rating}
                  </div>;
                  <div className='text - xs text - gray - 400'>Rating</div>;
                </div>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.customers}
              {/* CTA Button */}
              <a
                href={service && service.link}
                target='_blank'
                rel='noopener noreferrer'
              {/* Contact Info */}
              <div className='mt-4 text-center'>;
                <div className='text-xs text-gray-400'>;
                  Contact: {service && service.contactInfo.email}
                </div>;
                <div className='text-xs text-gray-400'>;
                  Phone: {service && service.contactInfo.mobile}
                </div>;
              </div>;
            </motion && motion.div>;
          ))}
      {/* Contact Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
        <div className='bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30'>;
          <div className='text-center'>;
            <h2 className='text-3xl font-bold text-white mb-4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Get in touch with our team to discuss how our innovative services;
              can help you achieve your goals.;
            </p>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Users className='w-8 h-8 text-cyan-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Expert Team;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Dedicated professionals ready to help;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Zap className='w-8 h-8 text-blue-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  Fast Implementation;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Quick setup and deployment;
                </p>;
              </div>;
              <div className='text-center'>;
                <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>;
                  <Shield className='w-8 h-8 text-purple-400' />;
                </div>;
                <h3 className='text-lg font-semibold text-white mb-2'>;
                  24/7 Support;
                </h3>;
                <p className='text-gray-300 text-sm'>;
                  Round-the-clock assistance;
                </p>;
              </div>;
            </div>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'>;
                Email Us;
              </a>;
              <a
                href='tel:+13024640950'
                  </div>;
                  <div className='text - xs text - gray - 400'>Customers</div>;
                </div>;
                <div>;
                  <div className='text - lg font - bold text - white'>;
                    {service.setup_time}
                  </div>;
                  <div className='text - xs text - gray - 400'>Setup</div>;
                </div>;
              </div>;
              {/* Market Info */}
              <div className='mb - 4 p - 3 bg - white / 5 rounded - lg'>;
                <div className='text - xs text - gray - 300 mb - 1'>;
                  Market Size: {service.market_size}
                </div>;
                <div className='text - xs text - gray - 300'>;
                  Growth Rate: {service.growth_rate}
                </div>;
              </div>;
              {/* CTA Button */}
              <a;
                href={service.link}
                target='_blank';
                rel='noopener noreferrer';
                className='block w - full bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - center py - 3 px - 4 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:scale - 105';
              >;
                Learn More & Get Started;
              </a>;
              {/* Contact Info */}
              <div className='mt - 4 text - center'>;
                <div className='text - xs text - gray - 400'>;
                  Contact: {service.contact_info.email}
                </div>;
                <div className='text - xs text - gray - 400'>;
                  Phone: {service.contact_info.mobile}
                </div>;
              </div>;
            </motion.div>))}
        </div>;
      </div>;
      {/* Contact Section */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 16'>;
        <div className='bg - gradient - to - r from - cyan - 600 / 20 to - blue - 600 / 20 rounded - 2xl p - 8 border border - cyan - 400 / 30'>;
          <div className='text - center'>;
            <h2 className='text - 3xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
              Get in touch with our team to discuss how our innovative services;
              can help you achieve your goals.;
            </p>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - cyan - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Users className='w - 8 h - 8 text - cyan - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Expert Team;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Dedicated professionals ready to help;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Zap className='w - 8 h - 8 text - blue - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  Fast Implementation;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Quick setup and deployment;
                </p>;
              </div>;
              <div className='text - center'>;
                <div className='w - 16 h - 16 bg - purple - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4'>;
                  <Shield className='w - 8 h - 8 text - purple - 400' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  24 / 7 Support;
                </h3>;
                <p className='text - gray - 300 text - sm'>;
                  Round - the - clock assistance;
                </p>;
              </div>;
            </div>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center items - center'>;
              <a;
                href='mailto:kleber@ziontechgroup.com';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300';
              >;
                Email Us;
              </a>;
              <a;
                href='tel:+13024640950';
                className='bg - white / 10 text - white px - 8 py - 3 rounded - lg font - semibold border border - white / 30 hover:bg - white / 20 transition - all duration - 300';
              >;
                Call Us;
              </a>            </div>;
          </div>;
        </div>;
      </div>;
export default ComprehensiveServicesShowcase2026;
    </div>),
}
;
  /* Category Filter */;
}<div> <select </option>) );
}</select> </div> {
  /* Price Range Filter */;
}<div> <select </option>) );
}</select> </div> {
  /* Sort By */;
}<div> <select > <option value="popularity" className="bg - gray - 800 text - white" >Sort by Popularity</option> <option value="price - low" className="bg - gray - 800 text - white" >Price: Low to High</option> <option value="price - high" className="bg - gray - 800 text - white" >Price: High to Low</option> <option value="rating" className="bg - gray - 800 text - white" >Sort by Rating</option> <option value="customers" className="bg - gray - 800 text - white" >Sort by Customers</option> </select> </div> </div> </div> </div> </h2> <p className="text - gray - 300" > Discover innovative solutions tailored to your business needs </p> </div> Popular </div>);
}</div> </li>) );
}</ul> </div> </div> {
  /* CTA Button */;
}<a > Learn More & Get Started </Link> </div> </div> </motion.div>) );
}</div> </div> <div className="bg - gradient - to - r from - cyan - 600 / 20 to - blue - 600 / 20 rounded - 2xl p - 8 border border - cyan - 400 / 30"> <div className="text - center"> <h2 className="text - 3xl font - bold text - white mb - 4"> text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto"> Get in touch with our team to discuss how our innovative services can help you achieve your goals. </p> <div className=" grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8"> <div className=" text - center"> <div className=" w - 16 h - 16 bg - cyan - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Users className=" w - 8 h - 8 text - cyan - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">Expert Team</h3> <p className=" text - gray - 300 text - sm">Dedicated professionals ready to help</p> </div> <div className=" text - center"> <div className=" w - 16 h - 16 bg - blue - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Zap className=" w - 8 h - 8 text - blue - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">Fast Implementation</h3> <p className=" text - gray - 300 text - sm">Quick setup and deployment</p> </div> <div className=" text - center"> <div className=" w - 16 h - 16 bg - purple - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 4"> <Shield className=" w - 8 h - 8 text - purple - 400"/> </div> <h3 className=" text - lg font - semibold text - white mb - 2">24 / 7 Support</h3> <p className=" text - gray - 300 text - sm">Round - the - clock assistance</p> </div> </div> <div className=" flex flex - col sm:flex - row gap - 4 justify - center items - center"> <a href=" mailto:kleber@ziontechgroup.com"className=" bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 8 py - 3 rounded - lg font - semibold hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300"> Email Us </Link> <a href=" tel:+13024640950"className=" bg - white / 10 text - white px - 8 py - 3 rounded - lg font - semibold border border - white / 30 hover:bg - white / 20 transition - all duration - 300" > Call Us </Link> </div> </div> </div> </div> </div>);
}
export default ComprehensiveServicesShowcase2026;
;
