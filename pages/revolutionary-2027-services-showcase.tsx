

import { motion, AnimatePresence } from 'framer-motion';

import {;
  Search,;
  CheckCircle,;
  ArrowRight,;
  Rocket,;
  Mail,;
  Phone,;
  MapPin,;
  MessageSquare,;
  Globe,;

} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import {revolutionary2027AIServices} from '../data/revolutionary-2027-ai-services';
import {revolutionary2027ITServices} from '../data/revolutionary-2027-it-services';
import {revolutionary2027MicroSaasServices} from '../data/revolutionary-2027-micro-saas';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, ArrowRight, Rocket, Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import { revolutionary2027AIServices } from '../data/revolutionary-2027-ai-services';
import { revolutionary2027ITServices } from '../data/revolutionary-2027-it-services';
import { revolutionary2027MicroSaasServices } from '../data/revolutionary-2027-micro-saas';
export default function Revolutionary2027ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const allServices = [
    ...revolutionary2027AIServices;
    ...revolutionary2027ITServices;
    ...revolutionary2027MicroSaasServices
  ];
  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category.includes('Quantum')).length;
  const itCount = allServices.filter(service => service.category.includes('IT') || service.category.includes('Infrastructure')).length;
  const microSaasCount = allServices.filter(service => service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health')).length;
  const holographicCount = allServices.filter(service => service.category.includes('Holographic')).length;
  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum Services', icon: '⚛️', count: quantumCount },
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'holographic', name: 'Holographic', icon: '🎭', count: holographicCount }
];
  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' };
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' };
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' }
  ];
  const sortOptions = [
        if (selectedCategory === 'quantum') return service.category.includes('Quantum');
        if (selectedCategory === 'it') return service.category.includes('IT') || service.category.includes('Infrastructure');
        if (selectedCategory === 'micro-saas') return service.category.includes('Micro SaaS') || service.category.includes('Marketing') || service.category.includes('Legal') || service.category.includes('Health');
        if (selectedCategory === 'holographic') return service.category.includes('Holographic');
        return true
      })
    }


  const categories = [;
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices && allServices.length },;
    { id: 'ai', name: 'AI Services', icon: '🧠', count: aiCount },;
    {;
      id: 'quantum',;
      name: 'Quantum Services',;
      icon: '⚛️',;
      count: quantumCount,;
    },;
    { id: 'it', name: 'IT Infrastructure', icon: '⚙️', count: itCount },;
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },;
    {;
      id: 'holographic',;
      name: 'Holographic',;
      icon: '🎭',;
      count: holographicCount,;
    },  ];
  const priceRanges = [;
    { id: 'all', name: 'All Prices', range: 'All' },;
    { id: 'under-500', name: 'Under $500', range: 'Under $500' },;
    { id: '500-2000', name: '$500 - $2,000', range: '$500 - $2,000' },;
    { id: '2000-10000', name: '$2,000 - $10,000', range: '$2,000 - $10,000' },;
    { id: 'over-10000', name: 'Over $10,000', range: 'Over $10,000' },  ];
  const sortOptions = [;
    { id: 'name', name: 'Name' },;
    { id: 'price', name: 'Price' },;
    { id: 'rating', name: 'Rating' },;
    { id: 'customers', name: 'Customers' },;
    { id: 'launchDate', name: 'Launch Date' },  ];
  const filteredServices = useMemo(() => {;
    let filtered = allServices;
    // Category filter;
    if (selectedCategory !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        if (selectedCategory === 'ai') return service && service.category.includes('AI');
        if (selectedCategory === 'quantum');
          return service && service.category.includes('Quantum');
        if (selectedCategory === 'it');
          return (
            service && service.category.includes('IT') ||;
            service && service.category.includes('Infrastructure');
          );
        if (selectedCategory === 'micro-saas');
          return (

            service && service.category.includes('Micro SaaS') ||;
            service && service.category.includes('Marketing') ||;
            service && service.category.includes('Legal') ||;
            service && service.category.includes('Health');

          );
        if (selectedCategory === 'holographic');
          return service && service.category.includes('Holographic');
        return true;
      });    }


        if (selectedPriceRange === 'under-500') return price < 500;


          >


            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8'>;
              Revolutionary 2027;
            </h1>;
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>;
              Services Showcase;
            </h2>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
              Experience the future of technology with our revolutionary AI,;
              Quantum Computing, and Next-Generation IT services. Each solution;
              delivers measurable ROI and transforms industries.;
            </p>;



            {/* Contact Information */}
            <div className='flex flex-wrap items-center justify-center gap-6 text-center mb-8'>;
              <motion&& motion.div
                className='flex items-center gap-2 text-cyan-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Phone className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.mobile}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-purple-400'
                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <Mail className='w-5 h-5' />;
                <span className='font-semibold'>{contactInfo && contactInfo.email}</span>;
              </motion && motion.div>;
              <motion&& motion.div
                className='flex items-center gap-2 text-green-400'


              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                transition={{ type: 'spring', stiffness: 300 }}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI, Quantum Computing, and Next-Generation IT services.
              Each solution delivers measurable ROI and transforms industries.
            </p>
            {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center mb-8">
              <motion.div className="flex items-center gap-2 text-cyan-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-purple-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </motion.div>
              <motion.div className="flex items-center gap-2 text-green-400"
                whileHover={{ scale: 1.05 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ type: "spring", stiffness: 300 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              >
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </motion.div>
            </div>


                whileHover={{ scale: 1 && 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}>;
                <MapPin className='w-5 h-5' />;
                <span className='text-sm font-semibold'>;
                  {contactInfo && contactInfo.address}
                </span>              </motion && motion.div>;
            </div>;



            {/* CTA Buttons */}


                Get Started Today
              </a>
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                <Globe className="w-5 h-5 mr-2" />
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>


                className='border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300'>;
                <Globe className='w-5 h-5 mr-2' />                View All Services;
              </a>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;



      {/* Search and Filters */}


              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>


                onChange={e => setSearchTerm(e && e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'              />;
            </div>;



            {/* Filters */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}

            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
      {/* Search and Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
            {/* Search Bar */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search revolutionary services..."
                value={searchTerm  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            {/* Filters */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>

                </select>;
              </div>;


              {/* Price Range Filter */}


                  onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}

                </select>;
              </div>;

                  ))}

              {/* Sort By */  } catch (error) {
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
                  onChange={(e) => setSortBy(e.target.value)} className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
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
              {/* Results Count */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              <div className="flex items-end">
                <div className="text-gray-300">
                  <span className="text-sm">Showing </span>
                  <span className="font-semibold text-cyan-400">{filteredServices.length}</span>
                  <span className="text-sm"> of </span>
                  <span className="font-semibold text-purple-400">{allServices.length}</span>
                  <span className="text-sm"> services</span>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>

                </select>;
              </div>;
              {/* Results Count */}
              <div className='flex items-end'>;
                <div className='text-gray-300'>;
                  <span className='text-sm'>Showing </span>;
                  <span className='font-semibold text-cyan-400'>;
                    {filteredServices && filteredServices.length}
                  </span>;
                  <span className='text-sm'> of </span>;
                  <span className='font-semibold text-purple-400'>;
                    {allServices && allServices.length}
                  </span>;
                  <span className='text-sm'> services</span>                </div>;
        case 'launch_date':;
          return (
            new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ());
        default: return a.name.locale_compare (b.name),
      }
    });
;
    return filtered;  }, [all_services, search_term, selected_category, selectedPriceRange, sort_by]);
;
  const contact_info = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',  }
;
  return (
    <UltraQuantumHolographicBackground intensity={2.0}>;
      <Head>;
        <title>;
          Revolutionary 2027 Services Showcase - Zion Tech Group |;
          Next - Generation AI, Quantum & Technology Solutions;
        </title>;
        <meta;
          name='description';
          content='Discover the most revolutionary AI, Quantum, and Technology services of 2027. Cutting - edge solutions with proven ROI and real - world implementation.';
        />;
        <meta;
          property='og:title';
          content='Revolutionary 2027 Services Showcase - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Explore the future of technology with our revolutionary 2027 services showcase.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / revolutionary - 2027 - services - showcase';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / revolutionary - 2027 - services - showcase';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='pt - 24 pb - 16 px - 4 relative overflow - hidden'>;
        <div className='max - w-7xl mx - auto text - center relative z - 10'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 6xl md:text - 8xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 500 to - pink - 500 bg - clip - text text - transparent mb - 8'>;
              Revolutionary 2027;
            </h1>;
            <h2 className='text - 4xl md:text - 6xl font - bold text - white mb - 6'>;
              Services Showcase;
            </h2>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;
              Experience the future of technology with our revolutionary AI,
              Quantum Computing, and Next - Generation IT services. Each solution;
              delivers measurable ROI and transforms industries.;
            </p>;
            {/* Contact Information */}
            <div className='flex flex - wrap items - center justify - center gap - 6 text - center mb - 8'>;
              <motion.div;
                className='flex items - center gap - 2 text - cyan - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </motion.div>;
              <motion.div;
                className='flex items - center gap - 2 text - purple - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </motion.div>;
              <motion.div;
                className='flex items - center gap - 2 text - green - 400';
                while_hover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>              </motion.div>;
            </div>;
            {/* CTA Buttons */}
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Get Started Today;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                View All Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search and Filters */}
      <section className='py - 8 px - 4'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='bg - black / 40 backdrop - blur - lg rounded - 2xl p - 6 border border - gray - 700 / 50'>;
            {/* Search Bar */}
            <div className='relative mb - 6'>;
              <Search className='absolute left - 4 top - 1/2 transform -translate - y-1 / 2 text - gray - 400 w - 5 h - 5' />;
              <input;
                type='text';
                placeholder='Search revolutionary services...';
                value={search_term}
                on_change={e => setSearchTerm (e.target.value)}
                className='w - full pl - 12 pr - 4 py - 4 bg - gray - 900 / 50 border border - gray - 600 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 500 focus:border - transparent'              />;
            </div>;
            {/* Filters */}
            <div className='grid grid - cols - 1 md:grid - cols - 4 gap - 4'>;
              {/* Category Filter */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Category;
                </label>;
                <select;
                  value={selected_category}
                  on_change={e => setSelectedCategory (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {categories.map (category => (                    <option key={category.id} value={category.id}>;
                      {category.name} ({category.count});
                    </option>))}
                </select>;
              </div>;
              {/* Price Range Filter */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Price Range;
                </label>;
                <select;
                  value={selectedPriceRange}
                  on_change={e => setSelectedPriceRange (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {price_ranges.map (range => (                    <option key={range.id} value={range.id}>;
                      {range.name}
                    </option>))}
                </select>;
              </div>;
              {/* Sort By */}
              <div>;
                <label className='block text - sm font - medium text - gray - 300 mb - 2'>;
                  Sort By;
                </label>;
                <select;
                  value={sort_by}
                  on_change={e => setSortBy (e.target.value)}
                  className='w - full px - 3 py - 2 bg - gray - 900 / 50 border border - gray - 600 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500';
                >;
                  {sort_options.map (option => (                    <option key={option.id} value={option.id}>;
                      {option.name}
                    </option>))}
                </select>;
              </div>;
              {/* Results Count */}
              <div className='flex items - end'>;
                <div className='text - gray - 300'>;
                  <span className='text - sm'>Showing </span>;
                  <span className='font - semibold text - cyan - 400'>;
                    {filtered_services.length}
                  </span>;
                  <span className='text - sm'> of </span>;
                  <span className='font - semibold text - purple - 400'>;
                    {all_services.length}
                  </span>;
                  <span className='text - sm'> services</span>                </div>;

              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

                          )}

                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {service.tagline  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </p>;
                        {/* Price */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-white">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${service && service.color} text-white`}>                            {service && service.category}
                          </span>;
                        </div>;


                        {/* Action Buttons */}

                        {/* Action Buttons */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        <div className="flex gap-2">
                          <a
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />


                            Learn More
                          </Link>
                          <a
                            href={service && service.link}
                            className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'>;
                            <ArrowRight className='w-4 h-4 mr-1' />;
                            Learn More;
                          </a>;
                          <a
                            href='/contact'
                            className='px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300'>;
                            <MessageSquare className='w-4 h-4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion && motion.div>;

                        <div className="flex gap-2">
                          <a 
                            href={service.link} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm py-2 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                            <ArrowRight className="w-4 h-4 mr-1" />
                            Learn More
                          </a>
                          <a 
                            href="/contact" className="px-4 py-2 border border-gray-600 text-gray-200 hover:bg-gray-700 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                ))}


                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            ) : (;
              <motion&& motion.div
                            </div>;
                            <div className='text - xs text - gray - 400'>Reviews</div>                          </div>;
                        </div>;
                        {/* Category Badge */}
                        <div className='mb - 4'>;
                          <span;
                            className={`inline - block px - 3 py - 1 rounded - full text - xs font - semibold ${service.color} text - white`}
                          >                            {service.category}
                          </span>;
                        </div>;
                        {/* Action Buttons */}
                        <div className='flex gap - 2'>;
                          <a;
                            href={service.link}
                            className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm py - 2 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <ArrowRight className='w - 4 h - 4 mr - 1' />;
                            Learn More;
                          </a>;
                          <a;
                            href='/contact';
                            className='px - 4 py - 2 border border - gray - 600 text - gray - 200 hover:bg - gray - 700 hover:border - gray - 500 transform hover:scale - 105 transition - all duration - 300';
                          >;
                            <MessageSquare className='w - 4 h - 4' />                          </a>;
                        </div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>) : (
              <motion.div;


      {/* Contact CTA Section */}
      <section className='py-16 px-4'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

                initial={{ opacity: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                animate={{ opacity: 1 }} className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>



                <button
                  onClick={() => {
                    setSearchTerm(''),
                    setSelectedCategory('all'),
                    setSelectedPriceRange('all')
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Clear Filters
                </button>
              </motion.div>


              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Join the future of technology with our revolutionary 2027
              services. Each solution is designed to deliver measurable ROI and
              competitive advantage.
            </p>

            className='bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
                className='text - center py - 16';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - gray - 400 mb - 6'>;
                  Try adjusting your search criteria or filters;
                </p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                    setSelectedPriceRange ('all');
                  }}
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                >                  Clear Filters;
                </button>;
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </section>;
      {/* Contact CTA Section */}
      <section className='py - 16 px - 4'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg - gradient - to - r from - cyan - 900 / 50 to - purple - 900 / 50 backdrop - blur - lg rounded - 3xl p - 12 border border - cyan - 500 / 30';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;

              Join the future of technology with our revolutionary 2027;
              services. Each solution is designed to deliver measurable ROI and;
              competitive advantage.;
            </p>;


              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-semibold">{contactInfo.address}</span>
              </div>
            </div>

  )
}
            <div className='flex flex - wrap items - center justify - center gap - 6 mb - 8'>;
              <div className='flex items - center gap - 2 text - cyan - 400'>;
                <Phone className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.mobile}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - purple - 400'>;
                <Mail className='w - 5 h - 5' />;
                <span className='font - semibold'>{contact_info.email}</span>;
              </div>;
              <div className='flex items - center gap - 2 text - green - 400'>;
                <MapPin className='w - 5 h - 5' />;
                <span className='text - sm font - semibold'>;
                  {contact_info.address}
                </span>;
              </div>;
            </div>;
            <div className='flex flex - wrap items - center justify - center gap - 4'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - lg px - 8 py - 4 hover:from - cyan - 600 hover:to - blue - 700 transform hover:scale - 105 transition - all duration - 300';
              >;
                <Rocket className='w - 5 h - 5 mr - 2' />;
                Start Your Transformation;
              </a>;
              <a;
                href='/services';
                className='border - 2 border - purple - 500 text - purple - 400 text - lg px - 8 py - 4 hover:bg - purple - 500 hover:text - white transform hover:scale - 105 transition - all duration - 300';
              >;
                <Globe className='w - 5 h - 5 mr - 2' />                Explore All Services;
  )
      <section className="py-16 px-4">;
        <div className="max-w-4xl mx-auto text-center">;
          <motion.div;
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
            viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Join the future of technology with our revolutionary 2027 services.;
              Each solution is designed to deliver measurable ROI and competitive advantage.;
            </p>;
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">;
              <div className="flex items-center gap-2 text-cyan-400">;
                <Phone className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.mobile}</span>;
              </div>;
              <div className="flex items-center gap-2 text-purple-400">;
                <Mail className="w-5 h-5" />;
                <span className="font-semibold">{contactInfo.email}</span>;
              </div>;
              <div className="flex items-center gap-2 text-green-400">;
                <MapPin className="w-5 h-5" />;
                <span className="text-sm font-semibold">{contactInfo.address}</span>;
              </div>;
            </div>;
            <div className="flex flex-wrap items-center justify-center gap-4">;
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg px-8 py-4 hover: from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">;
                <Rocket className="w-5 h-5 mr-2" />;
                Start Your Transformation;
              </a>;
              <a href="/services" className="border-2 border-purple-500 text-purple-400 text-lg px-8 py-4 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300">;
                <Globe className="w-5 h-5 mr-2" />;
                Explore All Services;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

    </UltraQuantumHolographicBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


