class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


const container_variants = {
    }
    "hidden": { "opacity": 0
},
    "visible": {
      }
      "opacity": 1,
"transition": {

}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
  Brain,
  Atom,
  Shield,
  Rocket,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Target,
  Microscope,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Code,
  Palette,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  Phone,

  Mail,;
  MapPin,;} from 'lucide-react';import { ;
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,

    color: 'from - indigo - 500 to - blue - 600',
    gradient: 'bg - gradient - to - r from - indigo - 500 to - blue - 600',
    count: cuttingEdgeQuantumServices2025.length,
  },    count: cuttingEdgeQuantumServices2025.length;
  }

  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,

    color: 'from - blue - 500 to - cyan - 600',
    gradient: 'bg - gradient - to - r from - blue - 500 to - cyan - 600',
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {    count: cuttingEdgeEnterpriseITServices2025.length;
  }

  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,

    color: 'from - teal - 500 to - emerald - 600',
    gradient: 'bg - gradient - to - r from - teal - 500 to - emerald - 600',
    count: cuttingEdgeMicroSaasServices2025.length,
  }, ];    count: cuttingEdgeMicroSaasServices2025.length;

  }
];

    count: cuttingEdgeMicroSaasServices2025.length,
  },];



  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [

    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory

  });

        <section className='relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
    <>
      <Head>
<title>
          Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future,
Technology Solutions
        </title>
        <meta,
name='description''
          content='Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.'' />
        <meta,
name='keywords''
          content='cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology'' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />'
        <link rel='icon' href='/favicon.ico' />'
      </Head>

      <Layout>

        {/* Hero Section */}
<section className='relative overflow-hidden'>;'
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'></div>;'
          <div className='relative z-10 max-w-7xl mx-auto px-4 'sm':px-6 'lg':px-8 py-24 'lg':py-32'>;'
            <motion.div;
              initial={ 'opacity': 0, 'y': 30 
}
              animate={ 'opacity': 1, 'y': 0 }
              transition={ 'duration': 0.8 
}

    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',

    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',

  {

    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length,
  },  {

  {

    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length,
  },];

];
export default function CuttingEdgeServicesShowcase2025() {
export default function CuttingEdgeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const allServices = [
    ...cuttingEdgeAIServices2025
    ...cuttingEdgeQuantumServices2025
    ...cuttingEdgeEnterpriseITServices2025
    ...cuttingEdgeMicroSaasServices2025
  ];
  const filteredServices = allServices.filter(service => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory;  });    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' |service.category === selectedCategory;
    return matchesSearch && matchesCategory
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
      }
    },  };        staggerChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 }
    visible: {
      y: 0
      opacity: 1
      transition: {
        duration: 0.5
      }
    },  };        duration: 0.5
      }
    }
  }
        duration: 0.5,
      },
    },  };

  };

  return (
        <meta name="description" content="Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology." />
        <meta name="keywords" content="cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
            >
              <motion.h1,
className='text-4xl 'md':text-6xl 'lg':text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6''
                initial={ 'opacity': 0, 'scale': 0.9 
}
                animate={ 'opacity': 1, 'scale': 1 
}
                transition={ 'duration': 1, 'delay': 0.2 
}
              >
                Cutting-Edge Services
                <span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'>
                  Showcase 2025
                </span>
              </motion.h1>


      }
    }
  }

        duration: 0.5,
      },
    },  };

  };


  return (
              <motion.p
                className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90">
                  Showcase 2025
                </span>
              </motion.h1>

              <motion.p 

                className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed"

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 

                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div,
className='grid grid-cols-2 'md':grid-cols-4 gap-6 max-w-4xl mx-auto mb-12''
                initial={ 'opacity': 0, 'y': 20 
}
                animate={ 'opacity': 1, 'y': 0 
}

                transition={ 'duration': 0.8, 'delay': 0.6 
}
              >;
                {heroStats.map((stat, index) => (<div key={index} className='text-center'>;'
                    <div className='flex justify-center mb-2'>;'
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>;'
                        {stat.icon}
                      </div>;
                    </div>;
                    <div className='text-2xl 'md':text-3xl font-bold text-white mb-1'>;'
                      {stat.value}

              {/* Hero Stats */}
              <motion&& motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion && motion.p>;

              {/* Hero Stats */}
              <motion&& motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 

                Discover revolutionary technology solutions that are reshaping
                industries and defining the future. From AI consciousness to
                space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'                initial={{ opacity: 0, y: 20 }}                Discover revolutionary technology solutions that are reshaping industries and defining the future.
                From AI consciousness to space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div
                Discover revolutionary technology solutions that are reshaping industries and defining the future. 
From AI consciousness to space mining, experience the cutting edge of innovation.

                initial={{ opacity: 0, y: 20 }}


                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
                    <div className='text-2xl md:text-3xl font-bold text-white mb-1'>
                      {stat.value}
                    </div>


                className="flex flex-col sm:flex-row gap-4 justify-center"

                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={{ opacity: 0, y: 20 }}              <motion.div 

                className="flex flex-col sm:flex-row gap-4 justify-center"
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>

                  </div>
                    </div>;
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={ opacity: 0, y: 20 }              <motion.div;
                className='flex flex-col sm:flex-row gap-4 justify-center';
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>;
                  </div>;

                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />;
              </div>;
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>                <button<input
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
              <div className='relative flex-1 max-w-md'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />

                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}

                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />;
              </div>;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;
                <button
              <div className='flex flex-wrap gap-2'>                <button

                />
              </div>

              {/* Category Filter */}

<div className='flex flex-wrap gap-2'>'
                <button,
onClick={() => setSelectedCategory('all')}'
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${`                    }
                    selectedCategory === 'all''
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white''
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 'hover':bg-cyan-500/10''
                  }`}`
              <div className='flex flex-wrap gap-2'>                <button

                />
              </div>

              {/* Category Filter */}
                <button

                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  All ({allServices.length})
                </button>
                {serviceCategories.map(category => (                  <button                {serviceCategories.map((category) => (
                  <button

              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input

                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                <button
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />
              </div>
              {/* Category Filter */}
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;
                <button
              <div className='flex flex-wrap gap-2'>                <button


                />
              </div>

              {/* Category Filter */}

              <div className='flex flex-wrap gap-2'>                <button

                />
              </div>
                <button



                <button

                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === 'all';
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                  }`}


                  <button
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';
                  }`}
                >
                  <List className='w-5 h-5' />                </button>                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}

<List className='w-5 h-5'    />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Grid */}

                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className='ml-4'>'
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>'
                          <Star className='w-6 h-6 text-cyan-400' />'
                        </div>
                      </div>
                    </div>
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>;
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='flex-1'>;
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed'>;
                          {service && service.description}



                    {/* Pricing */}
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From

                      </h4>
                      <div className='text-2xl font-bold text-white'>
                        ${service.pricing.starter.price}

                        <span className="text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>

                        className='inline-flex items-center text-cyan-400 "hover": text-cyan-300 transition-colors duration-300 text-sm font-medium''
                      >
                        Learn More
                        <ExternalLink className='ml-1 w-4 h-4' />'
                      </a>
                      <a,
href='/contact''
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg 'hover':from-cyan-600 'hover':to-purple-700 transition-all duration-300 transform 'hover':scale-105''
                      >
                        Get Started
                        <ArrowRight className='ml-2 w-4 h-4' />'
                  {/* Service Details *
}

                    {/* Pricing */}
                    <div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service && service.pricing.starter && starter.price}
                        <span className='text-sm font-normal text-white/60'>;
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;

                    {/* CTA */}

                    <div className="flex items-center justify-between">
                      <a
                        href={service.website}
                        className="inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-1 w-4 h-4" />
                      </a>

                      <a
                        href="/contact"


                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4' />;
                      </a>;
                    </div>;
                  </div>;



                  {/* Hover Effect Overlay */}



                  {/* Hover Effect Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />;
                </motion && motion.div>;



              ))}
            </motion.div>
            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
}
initial={ 'opacity': 0 }
                animate={ 'opacity': 1 
}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300";
                >;
                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}

          </div>;
        </section>;





        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>;
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div

              initial={{ opacity: 0, y: 30 }}
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'>;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5' />;
                </a>;
                <a

              transition={{ "duration": 0.8 }}
              viewport={{ "once": true 
}
            >
<h2 className='text-3xl "md":text-4xl font-bold text-white mb-6'>'
                Ready to Transform Your Business?

              </h2>
              <p className='text-xl text-white/80 mb-8 leading-relaxed'    />
                Our cutting-edge services are designed to give you a competitive;
advantage in the rapidly evolving technology landscape. Let's;
discuss how we can help you achieve your goals.
              </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5'    />;
                </a>;
                <a


              {/* Contact Info */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className='flex flex-col items-center'>'
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>'
                    <MapPin className='w-6 h-6 text-cyan-400' />'
                  </div>
  const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || const containerVariants = {
  hidden: {
  opacity: 0
}
'visible': {'opacity': 1, 'transition': {'staggerChildren': 0.1;
}

const itemVariants = {'hidden': {'y': 20, 'opacity': 0;
}

'visible': {
  }
  'y': 0, 'opacity': 1, 'transition': {

  }

  'duration': 0.5 



}
visible: {opacity: 1, transition: {staggerChildren: 0.1;}
}

const itemVariants = {hidden: {y: 20, opacity: 0;}
}

visible: {
  y: 0, opacity: 1, transition: {

                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex flex-col items-center'>;
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;
                    <MapPin className='w-6 h-6 text-cyan-400' />;
                  </div>;
                  <div className='text-white font-semibold'>Address</div>;
                  <div className='text-white/70 text-sm'>;
                    {contactInfo && contactInfo.address}
                  </div>                </div>                  </div>;
                  <div className="text-white font-semibold">Phone</div>;
                  <a href={`tel:${contactInfo && contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">;
                    <Mail className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Email</div>;
                  <a href={`mailto:${contactInfo && contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">;
                    <MapPin className="w-6 h-6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Address</div>;
                  <div className="text-white/70 text-sm">{contactInfo && contactInfo.address}</div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>;
  );

  const matchesSearch = service && service.name.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.description.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || const containerVariants = {;
  hidden: {;
  opacity: 0 ;
};
visible: {;
  opacity: 1, transition: {;
  staggerChildren: 0 && 0.1 ;

};
const itemVariants = {;
  hidden: {;
  y: 20, opacity: 0 ;
};
visible: {;
  y: 0, opacity: 1, transition: {;
  duration: 0 && 0.5 ;

};}

                        </span>                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>                        Starting From;
                      </h4>;
                      <div className="text - 2xl font-bold text-white">;
                        ${service.pricing.starter.price}
                        <span className="text - sm font-normal text-white / 60">/{service.pricing.starter.period}</span>;
                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className='flex items - center justify - between'>;
                      <a;
                        href={service.website}
                        className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 text - sm font - medium';
                      >;
                        Learn More;
                        <ExternalLink className='ml - 1 w - 4 h - 4' />;
                      </a>;
                      <a;
                        href='/contact';
                        className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105';
                      >;
                        Get Started;
                        <ArrowRight className='ml - 2 w - 4 h - 4' />                      </a>                      <a;
                        href={service.website}
                        className="inline - flex items - center text - cyan - 400 hover: text - cyan - 300 transition - colors duration - 300 text-sm font-medium";
                      >;
                        Learn More;
                        <ExternalLink className="ml - 1 w-4 h-4" />;
                      </a>;
                      <a;
                        href="/contact";
                        className="inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white text - sm font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration-300 transform hover:scale-105";
                      >;
                        Get Started;
                        <ArrowRight className="ml - 2 w-4 h-4" />;
                      </a>;
                    </div>;
                  </div>;
                  {/* Hover Effect Overlay */}
                  <div className='absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer - events - none' />                </motion.div>                  <div className="absolute inset - 0 bg - gradient - to - t from - cyan - 500 / 5 to - transparent opacity - 0 group - hover:opacity - 100 transition - opacity duration - 500 pointer-events-none" />;
                </motion.div>))}
            </motion.div>;
            {/* No Results */}
            {filtered_services.length === 0 && (
              <motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='text - center py - 20';
              >;
                <div className='text - 6xl mb - 4'>🔍</div>;
                <h3 className='text - 2xl font - bold text - white mb - 2'>;
                  No services found;
                </h3>;
                <p className='text - white / 70 mb - 6'>;
                  Try adjusting your search terms or category filter;
                </p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                  }}
                  className='px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300'                >              >;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text - 2xl font - bold text-white mb-2">No services found</h3>;
                <p className="text-white / 70 mb-6">Try adjusting your search terms or category filter</p>;
                <button;
                  on_click={() => {
                    setSearchTerm ('');
                    setSelectedCategory ('all');
                  }}
                  className="px - 6 py - 3 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - medium rounded - lg hover:from - cyan - 600 hover:to - purple - 700 transition-all duration-300";
                >;
                  Clear Filters;
                </button>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Contact CTA Section */}
        <section className='py - 20 bg - gradient - to - br from - black via - purple - 900 / 20 to - black'>;
          <div className='max - w-4xl mx - auto text - center px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - br from - black via - purple-900 / 20 to-black">;
          <div className="max - w-4xl mx - auto text - center px - 4 sm:px-6 lg:px-8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 3xl md:text - 4xl font - bold text - white mb - 6'>;
                Ready to Transform Your Business?;
              </h2>;
              <p className='text - xl text - white / 80 mb - 8 leading - relaxed'>;
                Our cutting - edge services are designed to give you a competitive;
                advantage in the rapidly evolving technology landscape. Let's;
                discuss how we can help you achieve your goals.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8'>;
                <a;
                  href='/contact';
                  className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow - cyan - 500 / 25';
                >;
                  Start Your Journey;
                  <ArrowRight className='ml - 2 w - 5 h - 5' />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className='inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration - 300 transform hover:scale - 105';
                >;
                  <Phone className='mr - 2 w - 5 h - 5' />                  Call Now                Ready to Transform Your Business?;
              </h2>;
              <p className="text - xl text - white / 80 mb-8 leading-relaxed">;
                Our cutting - edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape.;
                Let's discuss how we can help you achieve your goals.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify-center mb-8">;
                <a;
                  href="/contact";
                  className="inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - full hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg hover:shadow-cyan-500 / 25";
                >;
                  Start Your Journey;
                  <ArrowRight className="ml - 2 w-5 h-5" />;
                </a>;
                <a;
                  href={`tel:${contact_info.mobile}`}
                  className="inline - flex items - center px - 8 py - 4 border - 2 border - cyan - 500 / 50 text - cyan - 400 font - semibold rounded - full hover:bg - cyan - 500 / 10 transition - all duration-300 transform hover:scale-105";
                >;
                  <Phone className="mr - 2 w-5 h-5" />;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 text - center'>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <Phone className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Phone</div>;
                  <a;
                    href={`tel:${contact_info.mobile}`}
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <Mail className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Email</div>;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className='flex flex - col items - center'>;
                  <div className='w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center mb - 3'>;
                    <MapPin className='w - 6 h - 6 text - cyan - 400' />;
                  </div>;
                  <div className='text - white font - semibold'>Address</div>;
                  <div className='text - white / 70 text - sm'>;
                    {contact_info.address}
                  </div>                </div>                  </div>;
                  <div className="text-white font-semibold">Phone</div>;
                  <a href={`tel:${contact_info.mobile}`} className="text - cyan - 400 hover:text - cyan - 300 transition-colors duration-300">;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify-center mb-3">;
                    <Mail className="w - 6 h - 6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Email</div>;
                  <a href={`mailto:${contact_info.email}`} className="text - cyan - 400 hover:text - cyan - 300 transition-colors duration-300">;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className="flex flex-col items-center">;
                  <div className="w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify-center mb-3">;
                    <MapPin className="w - 6 h - 6 text-cyan-400" />;
                  </div>;
                  <div className="text-white font-semibold">Address</div>;
                  <div className="text-white / 70 text-sm">{contact_info.address}</div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </Layout>;
    </>);
;
  const matches_search = service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || const container_variants = {
  hidden: {
  opacity: 0;
}
visible: {
  opacity: 1, transition: {
  stagger_children: 0.1;
}
const item_variants = {
  hidden: {
  coordinate_y: 20, opacity: 0;
}
visible: {
  coordinate_y: 0, opacity: 1, transition: {
  duration: 0.5;
}}
  y: 0, opacity: 1, transition: {
  duration: 0.5
};}
  duration: 0.5 

};
};}
};

  duration: 0.5 

};}
};
