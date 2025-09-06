import React, { useState, useEffect } from 'react';

import {;
  Search, Filter, Star, Users, TrendingUp,;
  Clock, Zap, Shield, Cloud, Brain,;
  Database, Globe, Robot, Cube, Sparkles;
} from 'lucide-react',;
interface Service {;

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

  market_size: string;
  growth_rate: string;
  contact_info: {

    mobile: string;
    email: string;
    address: string;

    website: string;

  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  real_implementation: boolean;
  implementation_details: string;
  launch_date: string;
  customers: number;
  rating: number;

  reviews: number;
const ComprehensiveServicesShowcase2026: React.FC = () => {;

import { 
  Search, Filter, Star, Users, TrendingUp, 
  Clock, Zap, Shield, Cloud, Brain, 
  Database, Globe, Robot, Cube, Sparkles
} from 'lucide-react';

interface Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition: string,
  targetAudience: string,
  trialDays: number,
  setupTime: string,
  category: string,
  realService: boolean,
  technology: string[],
  integrations: string[],
  useCases: string[],
  roi: string,
  competitors: string[],
  marketSize: string,
  growthRate: string,
  contactInfo: {
      
    mobile: string,
    email: string,
    address: string,
    website: string
  
    },
    realImplementation: boolean,
  implementationDetails: string,
  launchDate: string,
  customers: number,
  rating: number,
  reviews: number
}

const ComprehensiveServicesShowcase2026: React.FC = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesPrice =
      selectedPriceRange === 'all' |
      (() => {
        const price = parseInt(service.price.replace('$', ''));
        switch (selectedPriceRange) {
          case '0-100':
            return price <= 100;
          case '100-200':
            return price > 100 && price <= 200;
          case '200-400':
            return price > 200 && price <= 400;
          case '400-600':
            return price > 400 && price <= 600;
          case '600+':
            return price > 600;
          default: return true
        }
      })();
    return matchesSearch && matchesCategory && matchesPrice;  });
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'price-low':
        return (
          parseInt(a.price.replace('$', '')) -
          parseInt(b.price.replace('$', ''))
        );
      case 'price-high':
        return (
          parseInt(b.price.replace('$', '')) -
          parseInt(a.price.replace('$', ''))
        );      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;    }
  });

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

    const matchesCategory =;
      selectedCategory === 'all' || service && service.category === selectedCategory;

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

          default: return true,;

        }
      })();

        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
;
    return matches_search && matches_category && matches_price;  });
;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'popularity':;
        return b.popular ? 1 : -1;
      case 'price - low':;
        return (
          parse_int (a.price.replace ('$', '')) -;
          parse_int (b.price.replace ('$', '')));
      case 'price - high':;
        return (
          parse_int (b.price.replace ('$', '')) -;
          parse_int (a.price.replace ('$', '')));      case 'rating':;

        return b.rating - a.rating;
      case 'customers':;
        return b.customers - a.customers;


  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React && React.ReactNode } = {;
      'Business Intelligence & Analytics': <Database className='w-5 h-5' />,;
      'Content Creation & Marketing': <Sparkles className='w-5 h-5' />,;
      'Customer Service & Support': <Users className='w-5 h-5' />,;
      'E-commerce & Retail': <Globe className='w-5 h-5' />,;
      'HR & Recruitment': <Users className='w-5 h-5' />,;
      'Financial Management': <TrendingUp className='w-5 h-5' />,;
      'Project Management': <Clock className='w-5 h-5' />,;
      'Education & Training': <Brain className='w-5 h-5' />,;
      'Healthcare & Medical': <Shield className='w-5 h-5' />,;
      'Cloud Infrastructure & DevOps': <Cloud className='w-5 h-5' />,;
      'Cybersecurity & Threat Intelligence': <Shield className='w-5 h-5' />,;
      'Data Engineering & Analytics': <Database className='w-5 h-5' />,;
      'API Management & Integration': <Zap className='w-5 h-5' />,;
      'Network Monitoring & Management': <Globe className='w-5 h-5' />,;
      'Database Management & Optimization': <Database className='w-5 h-5' />,;
      'IT Service Management': <Users className='w-5 h-5' />,;
      'Backup & Disaster Recovery': <Cloud className='w-5 h-5' />,;
      'Quantum Computing & AI': <Brain className='w-5 h-5' />,;
      'Blockchain & Web3': <Cube className='w-5 h-5' />,;
      'Internet of Things (IoT)': <Zap className='w-5 h-5' />,;
      'Edge Computing & 5G': <Globe className='w-5 h-5' />,;
      'AR/VR & Immersive Technology': <Cube className='w-5 h-5' />,;
      'Robotics & Automation': <Robot className='w-5 h-5' />,;
      'Digital Twin & Simulation': <Cube className='w-5 h-5' />,;
    };
    return iconMap[category] || <Sparkles className='w-5 h-5' />;
  };


  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'>;
      {/* Hero Section */}
      <div className='relative overflow-hidden'>;
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20'></div>;
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24'>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0 && 0.8 }}
            className='text-center'>;
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>;
              ZionTech Group;
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>;
                2026 Services;
              </span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
      default:;
        return 0;    }
  });
;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ReactNode } = {
      'Business Intelligence & Analytics': <Database className='w - 5 h - 5' />,
      'Content Creation & Marketing': <Sparkles className='w - 5 h - 5' />,
      'Customer Service & Support': <Users className='w - 5 h - 5' />,
      'E - commerce & Retail': <Globe className='w - 5 h - 5' />,
      'HR & Recruitment': <Users className='w - 5 h - 5' />,
      'Financial Management': <TrendingUp className='w - 5 h - 5' />,
      'Project Management': <Clock className='w - 5 h - 5' />,
      'Education & Training': <Brain className='w - 5 h - 5' />,
      'Healthcare & Medical': <Shield className='w - 5 h - 5' />,
      'Cloud Infrastructure & DevOps': <Cloud className='w - 5 h - 5' />,
      'Cybersecurity & Threat Intelligence': <Shield className='w - 5 h - 5' />,
      'Data Engineering & Analytics': <Database className='w - 5 h - 5' />,
      'API Management & Integration': <Zap className='w - 5 h - 5' />,
      'Network Monitoring & Management': <Globe className='w - 5 h - 5' />,
      'Database Management & Optimization': <Database className='w - 5 h - 5' />,
      'IT Service Management': <Users className='w - 5 h - 5' />,
      'Backup & Disaster Recovery': <Cloud className='w - 5 h - 5' />,
      'Quantum Computing & AI': <Brain className='w - 5 h - 5' />,
      'Blockchain & Web3': <Cube className='w - 5 h - 5' />,
      'Internet of Things (IoT)': <Zap className='w - 5 h - 5' />,
      'Edge Computing & 5G': <Globe className='w - 5 h - 5' />,
      'AR / VR & Immersive Technology': <Cube className='w - 5 h - 5' />,
      'Robotics & Automation': <Robot className='w - 5 h - 5' />,
      'Digital Twin & Simulation': <Cube className='w - 5 h - 5' />,
    }
    return icon_map[category] || <Sparkles className='w - 5 h - 5' />;
  }
}
  }),

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Business Intelligence & Analytics': <Database className="w-5 h-5" />,
      'Content Creation & Marketing': <Sparkles className="w-5 h-5" />,
      'Customer Service & Support': <Users className="w-5 h-5" />,
      'E-commerce & Retail': <Globe className="w-5 h-5" />,
      'HR & Recruitment': <Users className="w-5 h-5" />,
      'Financial Management': <TrendingUp className="w-5 h-5" />,
      'Project Management': <Clock className="w-5 h-5" />,
      'Education & Training': <Brain className="w-5 h-5" />,
      'Healthcare & Medical': <Shield className="w-5 h-5" />,
      'Cloud Infrastructure & DevOps': <Cloud className="w-5 h-5" />,
      'Cybersecurity & Threat Intelligence': <Shield className="w-5 h-5" />,
      'Data Engineering & Analytics': <Database className="w-5 h-5" />,
      'API Management & Integration': <Zap className="w-5 h-5" />,
      'Network Monitoring & Management': <Globe className="w-5 h-5" />,
      'Database Management & Optimization': <Database className="w-5 h-5" />,
      'IT Service Management': <Users className="w-5 h-5" />,
      'Backup & Disaster Recovery': <Cloud className="w-5 h-5" />,
      'Quantum Computing & AI': <Brain className="w-5 h-5" />,
      'Blockchain & Web3': <Cube className="w-5 h-5" />,
      'Internet of Things (IoT)': <Zap className="w-5 h-5" />,
      'Edge Computing & 5G': <Globe className="w-5 h-5" />,
      'AR/VR & Immersive Technology': <Cube className="w-5 h-5" />,
      'Robotics & Automation': <Robot className="w-5 h-5" />,
      'Digital Twin & Simulation': <Cube className="w-5 h-5" />
    },
    return iconMap[category] || <Sparkles className="w-5 h-5" />
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                ZionTech Group
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  2026 Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our comprehensive suite of innovative micro SAAS services, IT solutions, and emerging technology platforms designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5" />
                  <span>{allServices.length}+ Services</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.5+ Average Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Growing Rapidly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
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
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              </div>
            </div>
          </div>
        </div>

            </div>
          </div>
        </div>
      </div>

  )
},
export default ComprehensiveServicesShowcase2026,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">;
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 border border-cyan-400/30">;
            <div className="text-center">;
              <h2 className="text-3xl font-bold text-white mb-4">;
                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Get in touch with our team to discuss how our innovative services can help you achieve your goals.;
              </p>;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">;
                <div className="text-center">;
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Users className="w-8 h-8 text-cyan-400" />;
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


  );
},;

export default ComprehensiveServicesShowcase2026;

