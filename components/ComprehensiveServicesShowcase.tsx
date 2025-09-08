
  ChevronRight, Shield, Zap, Globe, Rocket, Brain, Atom;
  Search, Filter, Grid, List, ArrowRight, Award, Target;
} from 'lucide-react';
import { comprehensiveMicroSaasServices } from '../data/comprehensive-2025-micro-saas-expansion';
import { specializedEmergingTechServices } from '../data/specialized-emerging-tech-services-2025';

export default function ComprehensiveServicesShowcase() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<string | null>(null),
  const [searchTerm, setSearchTerm] = useState('');


  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popularity' | 'price' | 'rating' | 'newest'>('popularity');

  // Combine all services
  const allServices = [...comprehensiveMicroSaasServices, ...specializedEmergingTechServices];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', icon: '🧠', count: allServices.filter(s => s.category === 'AI & Machine Learning').length },
    { id: 'Healthcare AI', name: 'Healthcare', icon: '🏥', count: allServices.filter(s => s.category === 'Healthcare AI').length },
    { id: 'Fintech AI', name: 'Fintech', icon: '💰', count: allServices.filter(s => s.category === 'Fintech AI').length },
    { id: 'Cybersecurity', name: 'Security', icon: '🛡️', count: allServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', count: allServices.filter(s => s.category === 'IoT & Smart Cities').length },
    { id: 'Blockchain & DeFi', name: 'Blockchain', icon: '🔗', count: allServices.filter(s => s.category === 'Blockchain & DeFi').length },
    { id: 'Quantum Computing', name: 'Quantum', icon: '⚛️', count: allServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Space Technology', name: 'Space Tech', icon: '🚀', count: allServices.filter(s => s.category === 'Space Technology').length },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🤖', count: allServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'AR/VR & Metaverse', name: 'AR/VR', icon: '🥽', count: allServices.filter(s => s.category === 'AR/VR & Metaverse').length },
    { id: '5G/6G Networks', name: '5G/6G', icon: '📡', count: allServices.filter(s => s.category === '5G/6G Networks').length },
    { id: 'Biotechnology AI', name: 'Biotech', icon: '🧬', count: allServices.filter(s => s.category === 'Biotechnology AI').length },
    { id: 'Renewable Energy', name: 'Energy', icon: '⚡', count: allServices.filter(s => s.category === 'Renewable Energy').length },
    { id: 'Edge Computing', name: 'Edge', icon: '🌐', count: allServices.filter(s => s.category === 'Edge Computing').length },
    { id: 'Quantum Internet', name: 'Q-Internet', icon: '🌍', count: allServices.filter(s => s.category === 'Quantum Internet').length },
    { id: 'Neuromorphic Computing', name: 'Neuro', icon: '🧠', count: allServices.filter(s => s.category === 'Neuromorphic Computing').length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch
    })


    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'price':


  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<;
    'popularity' | 'price' | 'rating' | 'newest';
  >('popularity');
  // Combine all services;
  const allServices = [;
    ...comprehensiveMicroSaasServices,;
    ...specializedEmergingTechServices,;
  ];



              <div>;
                <div className="text-3xl font-bold text-orange-400">500%+</div>;
                <div className="text-white/60">Average ROI</div>;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;










            {/* Sort and View Controls */}




            {/* Sort and View Controls */}
            <div className='flex items - center gap - 4'>;
              <select;
                value={sort_by}
                on_change={e => setSortBy (e.target.value as any)}
                className='bg - white / 10 border border - white / 20 rounded - xl px - 4 py - 3 text - white focus:outline - none focus:border - blue - 400';


              </div>
            </div>
          </div>
        </motion.div>


                >;


                  <List className="w-5 h-5" />;
              </div>;
            </div>;
          </div>;
        </motion && motion.div>;








                key={category.id}
                on_click={() => setSelectedCategory (category.id)}
                className={`px - 6 py - 3 rounded - full font - medium transition - all duration - 300 flex items - center gap - 2 ${
                  selected_category === category.id;
                    ? 'bg - gradient - to - r from - blue - 600 to - cyan - 600 text - white shadow - lg';
                    : 'bg - white / 10 text - white / 70 hover:bg - white / 20 hover:text - white';
                }`}




          </div>
        </motion.div>




        {/* Services Display */}
        {viewMode === 'grid' ? (;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <AnimatePresence>;
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                <span className='text-xs bg-white/20 px-2 py-1 rounded-full'>
                  {category.count}
                </span>              </button>                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </motion.div>

            ))}
          </div>
        </motion.div>

        {/* Services Display */}
        {viewMode === 'grid' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            <AnimatePresence>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}



        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            <AnimatePresence>          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <AnimatePresence>;
              {filtered_services.map ((service, index) => (
                <motion.div;

                  transition={{ duration: 0.6, delay: index * 0.1 }}

                      <Star className='w-3 h-3' />                      Popular

                      Popular




                    </div>
                  )}
                  {/* Service Content */}







                    {/* CTA */}
                    <a

                      )}



                >
                  <div className='flex flex-col lg:flex-row gap-6'>
                    {/* Left Side - Icon and Basic Info */}
                    <div className='flex-shrink-0'>
                      <div className='text-6xl mb-4'>{service.icon}</div>
                      {service.popular && (

                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular



                          Popular

                        </div>
                      )}
                    </div>
                    {/* Center - Service Details */}
                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>
                        <div className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full text-center'>                          Popular

                          Popular

                        </div>
                      )}
                    </div>

                    {/* Center - Service Details */}


                    <div className='flex-1'>
                      <div className='flex items-start justify-between mb-4'>





                        <div>
                          <h3 className='text-2xl font-bold text-white mb-2'>
                            {service.name}
                          </h3>
                          <p className='text-white/70 text-lg mb-3'>
                            {service.tagline}
                          </p>
                          <p className='text-white/60 text-sm'>
                            {service.description}
                          </p>
                        </div>
                        <div className='text-right'>
                          <div className='text-3xl font-bold text-white'>
                            {service.price}
                          </div>
                          <div className='text-white/60'>{service.period}</div>                        </div>
                      </div>
                      {/* Features Grid */}                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-white/70 text-lg mb-3">{service.tagline}</p>
                          <p className="text-white/60 text-sm">{service.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white">{service.price}</div>
                          <div className="text-white/60">{service.period}</div>
                        </div>
                      </div>
                      {/* Features Grid */}                        <div>;
                          <h3 className="text-2xl font-bold text-white mb-2">{service && service.name}</h3>;
                          <p className="text-white/70 text-lg mb-3">{service && service.tagline}</p>;
                          <p className="text-white/60 text-sm">{service && service.description}</p>;

                      {/* Features Grid */}

                      <a









        <motion&& motion.div




              <a
                href='mailto:kleber@ziontechgroup.com'
                className='bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-8 rounded-xl font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2'
              >
                Contact Sales Team
                <ArrowRight className='w-5 h-5' />
              </a>
              <a
                href='tel:+13024640950'

                className='bg-white/10 text-white py-4 px-8 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2'>        >;
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 border border-blue-500/30">;
            <h3 className="text-3xl font-bold text-white mb-4">;


