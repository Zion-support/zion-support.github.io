
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
]
>>>>>>> origin/cursor/delete-old-data-records-6bba

  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'popular': return b.customers - a.customers
case 'rating': return b.rating - a.rating
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ()
case 'price-low': setFilteredServices (filtered) 
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
}
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {
  Math.random () * 100 
}%`
top: `$ {
  Math.random () * 100 
}%` 
}
}/>) ) 
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}animate= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}> <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"> <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion.div>) ) 
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name 
}onClick= {
  () => setSelectedCategory (category.name) 
}className= {
  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {
  selectedCategory === category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' 
}` 
}> </span> </button>) ) 
}</div> </option>) ) 
}</select> {
  /* Sort Options */ 
}<select </option>) ) 
}</select> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' 
}` 
}> <Grid3X3 className=" w-4 h-4"/> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-md transition-all duration-200 $ {
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' 
}` 
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3 
}more features </div>) 
}</div> </div> Learn More </button> </motion.div>) ) 
}</div> </span> </div> </div> </div>) ) 
}</div> </div> </div> </div> </div> </div> </motion.div>) ) 
}</div>) 
}</div> <h3 className=" text-2xl font-bold text-white mb-2">No services found</h3> <p className=" text-gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button onClick= {
  () => {
  > Clear All Filters </button> </div>) 
}</div> <motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8 
}
}viewport= {
  {
  once: true 
}
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>) 
}
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid3X3, List, 
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings,
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3,
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
 } from 'lucide-react';'
// Import service data,
import { innovativeRealMicroSaasServices2025  } from '../data/2025-innovative-real-micro-saas-services';'
import { innovativeAIServicesEnhanced2025  } from '../data/2025-innovative-ai-services-enhanced';'
import { innovativeITServicesEnhanced2025  } from '../data/2025-innovative-it-services-enhanced';'
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';'

interface Service {
  }
  'id': string;

// Import service data;
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';

  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Users,
  TrendingUp,
  Zap,
  Brain,
  Atom,
  Shield,
  Rocket,
  Palette,
  BookOpen,
  Truck,
  DollarSign,
  Settings,
  ArrowRight,
  ChevronDown,
  CheckCircle,
  Clock,
  Award,
  Target,
  Globe,
  Sparkles,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Eye,
  Heart,
  Lightbulb,
  Palette as PaletteIcon,
  Code,
  Database,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,;
  Target as TargetIcon,;} from 'lucide-react';import {
  Search, Filter, Grid3X3, List, ;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Star, Users, TrendingUp, Zap, Brain, Atom, Shield, Rocket, Palette, BookOpen, Truck, DollarSign, Settings;
  ArrowRight, ChevronDown, CheckCircle, Clock, Award, Target, Globe, Sparkles, Cpu, Lock, Cloud, BarChart3;
  Eye, Heart, Lightbulb, Palette as PaletteIcon, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon

// Import service data
import { innovativeRealMicroSaasServices2025  } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025  } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025  } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/emerging-tech-services';


<<<<<<< HEAD

=======
interface Service {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;

  name: string;
  tagline: string;
  price: string,
  description: string;
  features: string[];
  category: string;
  rating: number;
  reviews: number;

  customers: number;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  growthRate: string;
  launchDate: string;

  badge?: string;
  icon?: React.ReactNode;}
}
}


const allServices: Service[] = [;
  ...innovativeRealMicroSaasServices2025.map(service;

                setSelectedPriceRange('all')
];

const sortOptions = [
  { label: 'Most Popular',}
  value: 'popular',}
},
  { label: 'Highest Rated',}
  value: 'rating',}
},
  { label: 'Newest',}
  value: 'newest',}
},
  { label: 'Price: Low to High',}
  value: 'price-low',}
},

{ label: 'Price: High to Low',}
  value: 'price-high',}
},
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }))
];
const categories = [
  {
    name: 'All Services'
    icon: <Globe className='w-5 h-5' />
    count: allServices.length
  }
  {
    name: 'Micro SAAS'
    icon: <Rocket className='w-5 h-5' />
    count: innovativeRealMicroSaasServices2025.length
  }
  {
    name: 'AI & Consciousness'
    icon: <Brain className='w-5 h-5' />
    count: innovativeAIServicesEnhanced2025.length
  }
  {
    name: 'Enterprise IT'
    icon: <Shield className='w-5 h-5' />
    count: innovativeITServicesEnhanced2025.length
  }
  {
    name: 'Quantum & Emerging Tech'
    icon: <Atom className='w-5 h-5' />
    count: emergingTechServicesEnhanced2025.length
  },];  { name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length }
  { name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: innovativeRealMicroSaasServices2025.length }
  { name: 'AI & Consciousness', icon: <Brain className="w-5 h-5" />, count: innovativeAIServicesEnhanced2025.length }
  { name: 'Enterprise IT', icon: <Shield className="w-5 h-5" />, count: innovativeITServicesEnhanced2025.length }
  { name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: emergingTechServicesEnhanced2025.length }
<<<<<<< HEAD

];

const priceRanges = [
const priceRanges = [


  { label: 'All Prices', value: 'all' }
  { label: 'Under $50/month', value: 'under-50' }
  { label: '$50 - $200/month', value: '50-200' }
  { label: '$200 - $500/month', value: '200-500' }
  { label: 'Over $500/month', value: 'over-500' },];  { label: 'Over $500/month', value: 'over-500' }
>>>>>>> origin/cursor/delete-old-data-records-6bba

const allServices: Service[] = [;
  ...innovativeRealMicroSaasServices2025.map(service;

                setSelectedPriceRange('all')
];

<<<<<<< HEAD
const priceRanges = [

=======
const sortOptions = [
  { label: 'Most Popular',}
  value: 'popular',}
},
  { label: 'Highest Rated',}
  value: 'rating',}
},
  { label: 'Newest',}
  value: 'newest',}
},
  { label: 'Price: Low to High',}
  value: 'price-low',}
},

{ label: 'Price: High to Low',}
  value: 'price-high',}
},
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50/month', value: 'under-50' },
  { label: '$50 - $200/month', value: '50-200' },
  { label: '$200 - $500/month', value: '200-500' },
  { label: 'Over $500/month', value: 'over-500' },];

  { label: 'Over $500/month', value: 'over-500' },];  { label: 'Over $500/month', value: 'over-500' }
  { label: 'Over $500/month', value: 'over-500' },];

];
const sortOptions = [
  icon?: React && React.ReactNode;
const allServices: Service[] = [;
  ...innovativeRealMicroSaasServices2025 && innovativeRealMicroSaasServices2025.map(service => ({;
    ...service,;
    category: 'Micro SAAS',;
    icon: <Rocket className='w-6 h-6' />,;
  })),;
  ...innovativeAIServicesEnhanced2025 && innovativeAIServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'AI & Consciousness',;
    icon: <Brain className='w-6 h-6' />,;
  })),;
  ...innovativeITServicesEnhanced2025 && innovativeITServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Enterprise IT',;
    icon: <Shield className='w-6 h-6' />,;
  })),;
  ...emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.map(service => ({;
    ...service,;
    category: 'Quantum & Emerging Tech',;
    icon: <Atom className='w-6 h-6' />,;
  })),;
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' }

>>>>>>> origin/cursor/delete-old-data-records-6bba
];
export default function ComprehensiveServicesShowcase2025() {

export default function ComprehensiveServicesShowcase2025() {;

export default function ComprehensiveServicesShowcase2025() {;

export default function ComprehensiveServicesShowcase2025() {;

const [searchTerm, setSearchTerm] = useState('');

const [selectedCategory, setSelectedCategory] = useState('All Services');
>>>>>>> origin/cursor/delete-old-data-records-6bba

const [selectedPriceRange, setSelectedPriceRange] = useState('all');

const [sortBy, setSortBy] = useState('popular');

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
<<<<<<< HEAD


=======
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices);
  useEffect(() => {
    let filtered = allServices;
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All Services') {
      filtered = filtered.filter(service => service.category === selectedCategory)
    }
// Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {
  useEffect(() => {;
    let filtered = allServices;
    // Filter by search term;
    if (searchTerm) {;
      filtered = filtered && filtered.filter(;
        service =>;
          service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );    }
    // Filter by category;
    if (selectedCategory !== 'All Services') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );    }      filtered = filtered && filtered.filter(service =>;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
      );
    // Filter by category;
    if (selectedCategory !== 'All Services') {;
      filtered = filtered && filtered.filter(;
        service => service && service.category === selectedCategory;
      );      filtered = filtered && filtered.filter(service => service && service.category === selectedCategory);
    }
    // Filter by price range;
    if (selectedPriceRange !== 'all') {;
      filtered = filtered && filtered.filter(service => {;
        const price = parseFloat(service && service.price.replace(/[^0-9.]/g, ''));
        switch (selectedPriceRange) {;
          case 'under-50':;
export default function ComprehensiveServicesShowcase2025() {;

const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/cursor/delete-old-data-records-6bba

const [selectedCategory, setSelectedCategory] = useState('All Services');

const [selectedPriceRange, setSelectedPriceRange] = useState('all');

const [sortBy, setSortBy] = useState('popular');

const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

<<<<<<< HEAD

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




=======
const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');'

const [filteredServices, setFilteredServices] =;
    useState<Service[]>(allServices);
export default function ComprehensiveServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState($2);
  const [selectedCategory, setSelectedCategory] = useState($2);
  const [selectedPriceRange, setSelectedPriceRange] = useState($2);
  const [sortBy, setSortBy] = useState($2);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),
  const [filteredServices, setFilteredServices] = useState<Service[]>(allServices),

  useEffect(() => {

    }

    let filtered = allServices;
    // Filter by search term,
if (searchTerm) {
}
filtered = filtered.filter(
        service => { return service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      ); }
    }

    // Filter by category,
if (selectedCategory !== 'All Services') {'
}
filtered = filtered.filter(
        service => { return service.category === selectedCategory
      ); }
    }
    // Filter by price range,
if (selectedPriceRange !== 'all') {'
      }
      filtered = filtered.filter((service) => {
       ;
  }
  const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));'
        switch (selectedPriceRange) {
}
case 'under-50':'

            return price < 50;
          case '50-200':;'
            return price >= 50 && price <= 200;
          case '200-500':;'
            return price > 200 && price <= 500;
          case 'over-500':;'

            return price > 500;

          'default':

            return true;
        }
      })}
    // Sort services;


          default:
}
            return true;}
        }
      })}
    // Sort services;
    filtered.sort((a, b) => {switch (sortBy) {case 'popular':;

          return b.customers - a.customers;
        case 'rating':;
          return b.rating - a.rating;



>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Sort services;
    filtered && filtered.sort((a, b) => {;
      switch (sortBy) {;
        case 'popular':;
          return b && b.customers - a && a.customers;
        case 'rating':;
          return b && b.rating - a && a.rating;
        case 'newest':;
<<<<<<< HEAD



          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();

          );

=======
          return (
            new Date(b && b.launchDate).getTime() - new Date(a && a.launchDate).getTime();
        case 'newest':
return (
            new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime()
          );
        case 'price-low':;'
return (;
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;'
            parseFloat(b && b.price.replace(/[^0-9.]/g, ''));'
          );
        case 'price-high':;'
return (;
            parseFloat(b && b.price.replace(/[^0-9.]/g, '')) -;'
            parseFloat(a && a.price.replace(/[^0-9.]/g, ''));'
          );

        case 'newest':;'
return (new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())case 'price-low':;'
          return (parseFloat(a && a.price.replace(/[^0-9.]/g, '')) -;'
            parseFloat(b && b.price.replace(/[^0-9.]/g, '')))case 'price-high':;'
          return (parseFloat(b && b.price.replace(/[^0-9.]/g, '')) -;'
            parseFloat(a && a.price.replace(/[^0-9.]/g, '')))case 'newest':;'
          return (new Date (b.launch_date).get_time () - new Date (a.launch_date).get_time ())case 'price - low':;'
          return (parse_float (a.price.replace (/[^0 - 9.]/g, '')) -;'
            parse_float (b.price.replace (/[^0 - 9.]/g, '')))case 'price - high':;'
          return (parse_float (b.price.replace (/[^0 - 9.]/g, '')) -;'
            parse_float (a.price.replace (/[^0 - 9.]/g, '')))'default':;'
          return 0;
      }
    })return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''))case 'price-high':;
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''))default: return 0;
      }
    })setFilteredServices(filtered)switch (category) {setFilteredServices(filtered)}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])const getCategoryColor = (category: string) => {switch (category) {setFilteredServices(filtered)}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])const getCategoryColor = (category: string) => {switch (category) {const getCategoryColor = (category: string) => {switch (category) {        case 'price-low':;
          return parseFloat(a && a.price.replace(/[^0-9.]/g, '')) - parseFloat(b && b.price.replace(/[^0-9.]/g, ''))case 'price-high':;
          return parseFloat(b && b.price.replace(/[^0-9.]/g, '')) - parseFloat(a && a.price.replace(/[^0-9.]/g, ''))default: return 0;
      }
    })setFilteredServices(filtered)}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])const getCategoryColor = (category: string) => {switch (category) {case 'Micro SAAS':;setFilteredServices(filtered)}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])const getCategoryColor = (category: string) => {switch (category) {case 'Micro SAAS':;
    });
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default: return 0
      }
    });

    setFilteredServices(filtered)
    switch (category) {

    setFilteredServices(filtered);  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {

    switch (category) {

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
  const getCategoryColor = (category: string) => {
    switch (category) {

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

=======
      case 'Micro SAAS':
        return 'from-blue-500 to-cyan-500';
>>>>>>> origin/cursor/delete-old-data-records-6bba
      case 'AI & Consciousness':;
        return 'from-purple-500 to-pink-500';
      case 'Enterprise IT':;
        return 'from-green-500 to-emerald-500';
      case 'Quantum & Emerging Tech':;

        return 'from-orange-500 to-red-500';
<<<<<<< HEAD

      default:;
        return 'from-gray-500 to-slate-500';    }      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'Micro SAAS': return 'from-blue-500 to-cyan-500';
      case 'AI & Consciousness': return 'from-purple-500 to-pink-500';
      case 'Enterprise IT': return 'from-green-500 to-emerald-500';
=======


      default:
        return 'from-gray-500 to-slate-500';) => {
  return $3;}
}
    }
  };

const getCategoryIcon = (
    switch (category) {
case 'Micro SAAS':

       ;
  return <Rocket className='w-5 h-5'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba

      case 'AI & Consciousness':;
        return <Brain className='w-5 h-5'    />;
      case 'Enterprise IT':;
        return <Shield className='w-5 h-5'    />;
      case 'Quantum & Emerging Tech':;

<<<<<<< HEAD
        return <Atom className='w-5 h-5' />;
      default:;
        return <Globe className='w-5 h-5' />;    }      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;

      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />,;
      default: return <Globe className="w-5 h-5" />
};

>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (
    <Layout    />
      <Head><title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
<meta;
name='description'
          content='Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.'
<<<<<<< HEAD

        />;
        <meta
          name='keywords'
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group'

        </div>;
<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'    />;

=======


           />;
        <meta;
          name='keywords';
          content='micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group';
        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden'    />;
          {[...Array(20)].map((_, i) => (<motion&& motion.div;}
              key={i}


              className='absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20'
              animate={{

  };

          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>          <motion.div                top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS': return <Rocket className="w-5 h-5" />;
      case 'AI & Consciousness': return <Brain className="w-5 h-5" />;
      case 'Enterprise IT': return <Shield className="w-5 h-5" />;
      case 'Quantum & Emerging Tech': return <Atom className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />
  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 - Zion Tech Group</title>
              }}              transition={{
                duration: 10 + i * 2;
repeat: Infinity;
delay: i * 0.5}
}
              }}
              style={{left: `${Math.random() * 10,}
}%`,top: `${Math.random() * 10,}
}%`,}}
               />;
          ))}

        </div>;
<div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,}
}
<<<<<<< HEAD

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
=======
          >;

            {/* Stats */}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
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



=======
                  <div className='text-sm text-cyan-300'>{stat.label}</div>'
                </motion.div>

                  </div>;

        <div className=relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6>
              <span className=bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className='text-white'>Services Showcase</span>
            </h1>
            <p className='text-xl sm:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto'>
              Discover our complete portfolio of {allServices.length}+ innovative micro SAAS, AI, IT, and emerging technology services
            </p>
            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
              {[
                { label: 'Total Services', value: allServices.length, icon: <Globe className = $2;
                { label: 'AI Solutions', value: innovativeAIServicesEnhanced2025.length, icon: <Brain className = $2;
                { label: 'IT Services', value: innovativeITServicesEnhanced2025.length, icon: <Shield className = $2;
                { label: 'Emerging Tech', value: emergingTechServicesEnhanced2025.length, icon: <Atom className='w-8 h-8' /> }
              ].map((stat, index) => (

>>>>>>> origin/cursor/delete-old-data-records-6bba
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'>
                    {stat.icon}
                  </div>

<<<<<<< HEAD
                  <div className='text-3xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>

                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>


                </motion.div>
              ))}
            </div>

=======
                  <div className='text-sm text-cyan-300'>{stat.label}</div>                </motion.div>

                  <div className="text-3xl font-bold text-white mb-1>{stat.value}</div>
                  <div className=text-sm text-cyan-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'    />;
              {[;
                {label: 'Total Services';
                  value: allServices.length;}
                  icon: <Globe className='w-8 h-8'    />;}
                }
                {label: 'AI Solutions';
                  value: innovativeAIServicesEnhanced2025.length;}
                  icon: <Brain className='w-8 h-8'    />;}
                }
                {label: 'IT Services';
                  value: innovativeITServicesEnhanced2025.length;}
                  icon: <Shield className='w-8 h-8'    />;}
                }
                {label: 'Emerging Tech',}
  value: emergingTechServicesEnhanced2025.length,icon: <Atom className='w-8 h-8'    />,},].map((stat, index) => (<motion.div;
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 ,}
}
                  animate={{ opacity: 1, y: 0 ,}
}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba

className='text-center'
                    />
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-3 text-cyan-400'    />

                    {stat.ico,}
}
                  </div>;
                  <div className='text-3xl font-bold text-white mb-1'    />;
                    {stat.value}

                  </div>

                  <div className='text-sm text-cyan-300'    />{stat.label}</div>
                </motion.div>


<<<<<<< HEAD



=======
              ))}
            </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Search Bar */}


<div className='max-w-2xl mx-auto'    />
              <div className='relative'    />
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'    />
                <input;
type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}

                  onChange={e =    /> setSearchTerm(e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD





                <input
                  type='text'
                  placeholder='Search for services, features, or solutions...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input


=======
              ))}
            </div>;
            {/* Search Bar */}

<div className='max-w-2xl mx-auto>;
              <div className=relative'>;
                <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 />;
                <input;
                  type=text';
                  placeholder='Search for services, features, or solutions...;
                  value={searchTerm}onChange={e => setSearchTerm(e && e.target.value)}
                  className=w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>;
              {/* Price Range Filter */}
              <select;
                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50'                />                <input
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>;
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={e => setSelectedPriceRange(e && e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50';
              >;
                {priceRanges && priceRanges.map(range => (;
                  <option
                    key={range && range.value}
                    value={range && range.value}
                    className='bg-gray-900 text-white'>                    {range && range.label}              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e && e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50';
              >;
            <div className='flex flex-wrap items-center space-x-2'>;
              {categories.map(category => (<button;
                {priceRanges && priceRanges.map((range) => (;
                  <option key={range && range.value} value={range && range.value} className='bg-gray-900 text-white'>;
                    {range && range.label}
                  </option>;

<<<<<<< HEAD


=======

      {/* Filters and Controls *,}
}
<div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'    />;
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'    />;
      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
                  type="text"
                  placeholder="Search for services, features, or solutions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Filters and Controls */}
      <div className='bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0'>
            {/* Category Filters */}
            <div className='flex flex-wrap items-center space-x-2'>
              {categories.map(category => (                <button      <div className="bg-black/50 backdrop-blur-lg border-b border-cyan-500/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}>{category.icon}
                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25';
                      : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
                  }`}
                >;
                  {category.icon}

                  <span>{category.name}</span>;
                  <span className='bg - white / 20 px - 2 py - 1 rounded - full text - xs'>                    {category.count}                  <span className="bg - white / 20 px - 2 py - 1 rounded - full text - xs">;

<<<<<<< HEAD


=======
                  <span>{category.name}</span>;
                  <span className='bg - white / 20 px - 2 py - 1 rounded - full text - xs'>                    {category.count}                  <span className="bg - white / 20 px - 2 py - 1 rounded - full text - xs">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {category.count}
                  </span>;
                </button>))}
            </div>;
            {/* Price and Sort Controls */}

<<<<<<< HEAD

=======
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}

                  {category.icon}

                  <span    />{category.name}</span>
<span className='bg-white/20 px-2 py-1 rounded-full text-xs'    />
                    {category.count}


                  </span>
                </button>
              ))}
            </div>

            {/* Price and Sort Controls */}

<div className='flex flex-wrap items-center space-x-4'>'

              {/* Price Range Filter */}
              <select;

>>>>>>> origin/cursor/delete-old-data-records-6bba
<div className='flex flex-wrap items-center space-x-4'    />

              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}</select    />;onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'>

                {priceRanges.map(range => (<option;}
<<<<<<< HEAD


            <div className='flex flex - wrap items - center space - x-4'>;
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}
              </select>;
                  <span>{category.name}</span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}

=======
                    key={range.value}
                    value={range.value}

                    className='bg-gray-900 text-white'

                      />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>                    {category.count}

                    {category.count}

<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </span>
                </button>
              ))}
            </div>
<<<<<<< HEAD



=======
            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>
>>>>>>> origin/cursor/delete-old-data-records-6bba

            {/* Price and Sort Controls */}
            <div className='flex flex-wrap items-center space-x-4'>

<<<<<<< HEAD




=======
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Price Range Filter */}
              <select;
                value={selectedPriceRange}

              </select>;

                onChange={e => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {priceRanges.map(range => (
                  <option
                    key={range.value}
                    value={range.value}
                    className='bg-gray-900 text-white'
<<<<<<< HEAD



=======
                  >                    {range.label}              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50">{priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-900 text-white">
                    {range.label}
                  </option>
                ))}
              </select>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  >                    {range.label}

                    {range.label}
                  </option>;
                ))}
<<<<<<< HEAD


=======
                    className='bg-gray-900 text-white';
                  >;
                    {range.label}
                  </option>;
                ))}
              </select>;
            <div className='flex flex-wrap items-center space-x-4'>
              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className='bg-gray-900 text-white'>
                    {range.label}
                  </option>
                ))}


              </select>


              {/* Sort Options */}
              <select;
                value={sortBy}
onChange={e =    /> setSortBy(e.target.value)}
                className='px-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50'>

                {sortOptions.map(option => (<option;}
                    key={option.value}
                    value={option.value}

                    className='bg-gray-900 text-white'
                      />
                    {option.label}
                  </option>
                ))}
              </select>
                  </option>
                    className='bg-gray-900 text-white';
                  >;
                    {option.label}</option>;
                ))}
              </select>;
              {/* Sort Options */}
              <select;
                value={sortBy}))}
              </select    />;
              {/* View Mode Toggle */}<button;
                <button;
              {/* View Mode Toggle */}

              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button



<div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'    />
                <button;
onClick={() =    /> setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'}
                      : 'text-gray-400 hover: text-white'}
                  }`}

>>>>>>> origin/cursor/delete-old-data-records-6bba
              {/* Sort Options */}
              <select
                value={sortBy}

                ))}
              </select>
              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button              <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
                <button
<<<<<<< HEAD

=======
                <button
>>>>>>> origin/cursor/delete-old-data-records-6bba

              {/* View Mode Toggle */}
              <div className='flex items-center space-x-1 bg-white/10 rounded-lg p-1'>                <button

                <button

<<<<<<< HEAD





=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${;
                    viewMode === 'grid';
                      ? 'bg-cyan-500 text-white';
                      : 'text-gray-400 hover:text-white';
<<<<<<< HEAD

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

=======
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                >
<Grid3X3 className='w-4 h-4'    />
                </button>
                <button;
onClick={() =    /> setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'}
                      : 'text-white'}

                  }`}
                >
                  <List className='w-4 h-4' />                </button>                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                >

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Services Grid/List *,}
}
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'    />;
        {/* Results Count */}

>>>>>>> origin/cursor/delete-old-data-records-6bba

        <div className='mb-8'    />
          <p className='text-gray-400'    />
            Showing {filteredServices.length} of {allServices.length} services;
          </p>
        </div>
        {viewMode === 'grid' ? (
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />
            {filteredServices.map((service, index) => (}
              <motion.div;}
key={service.id}
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}

                transition={{ duration: 0.5, delay: index * 0.1 }}


<<<<<<< HEAD
                <div className='absolute top-4 right-4'    />
                  <span;
className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}    />

=======
className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'
                  />
                {/* Category Badge */}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    {getCategoryIcon(service.category)}

                    <span className='ml-2'    />{service.category}</span>
                  </span>
                </div>

<<<<<<< HEAD
=======

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



              >
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className='ml-2'>{service && service.category}</span>                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb-4'>;
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                    {service && service.icon}              >;
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'

              >
                {/* Category Badge */}
                <div className='absolute top-4 right-4'>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}
                  >
                    {getCategoryIcon(service.category)}
                    <span className='ml-2'>{service.category}</span>                  </span>
                </div>
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
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2">{service.category}</span>
                  </span>
                </div>
                {/* Service Icon */}

                <div className="mb-4">

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}


                    {service.icon}


                  </div>
                </div>
                {/* Service Info */}

                <div className='mb-4'>
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300'>                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}

                    {service.icon}

                  </div>
                </div>
                {/* Service Info */}



                  {service.name}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'>;
                  {service.tagline}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}
                </h3>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'>

                  {service.name}
                </h3>
                <p className='text-gray-400 mb-3 line-clamp-2'>
                  {service.tagline}
                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>                  {service.description}
                </p>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                  {service.name}

                {/* Price */}                  {service.name}
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

                {/* Price */}

                  {service.description}
                </p>

                {/* Price */}

                    <span>{service.customers.toLocaleString()}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">;
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                    {getCategoryIcon(service && service.category)}
                    <span className="ml-2">{service && service.category}</span>;
                  </span>;
                </div>;
            {filtered_services.map ((service, index) => (<motion.div;
                }
                key={service.id}

                  <span;
                    className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>`
                    {getCategoryIcon (service.category)}

                </div>;
                {/* Service Icon */}<div className=mb - 4'>;
                {/* Service Icon */}
>>>>>>> origin/cursor/delete-old-data-records-6bba

<div className='mb-4'>'
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-'hover': scale-110 transition-transform duration-300'>'
                    {service.icon}
                  </div>
                </div>
                {/* Service Info */}

<h3 className='text-xl font-bold text-white mb-2 group-'hover':text-cyan-300 transition-colors duration-200'>'
                  {service.nam
}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'>;'
                  {service.tagline}

                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'>'

                  {service.description}
                </p>;
                {/* Price */}
<div className='mb-4'>;'
                  <span className='text-2xl font-bold text-cyan-400'>;'
                    {service.price}
                  </span>;
                  <span className='text-gray-500 text-sm ml-2'>/month</span>;'
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'>;'
                  <div className='flex items-center space-x-1 text-yellow-400'>;'
                    <Star className='w-4 h-4 fill-current' />;'
                    <span className='text-white'>{service.rating}</span>;'
                    <span className='text-gray-500'>({service.reviews})</span>;'
                  </div>;
                  <div className='flex items-center space-x-1 text-gray-400'>;'
                    <Users className='w-4 h-4' />;'
                    <span>{service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;

<<<<<<< HEAD
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
          <p className='text - gray - 400'>            Showing {filtered_services.length} of {all_services.length} services      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8 py-12">;
        {/* Results Count */}
        <div className="mb-8">;
          <p className="text-gray-400">;
          </p>;
        </div>;
        {view_mode === 'grid' ? (
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {filtered_services.map ((service, index) => (          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8">;
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
                <div className="absolute top-4 right-4">;
                  <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                    {getCategoryIcon (service.category)}
                    <span className="ml-2">{service.category}</span>;
                  </span>;
                </div>;
                {/* Service Icon */}
                <div className='mb - 4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition - transform duration - 300'>                <div className="mb-4">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition-transform duration-300">;
                    {service.icon}

                    {service.icon}

                  </div>
                </div>
                {/* Service Info */}

                <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200'>;

                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                {/* Service Info */}
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
                <p className="text - gray - 400 mb - 3 line-clamp-2">;
                  {service.tagline}
                </p>;
                <p className="text - sm text - gray - 500 mb - 4 line-clamp-3">;
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
=======
      {/* Services Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12>
        {/* Results Count */}
        <div className=mb-8">
          <p className="text-gray-400>
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>

        {viewMode === grid' ? (
          <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300
              >
                {/* Category Badge */}
                <div className=absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                    {getCategoryIcon(service.category)}
                    <span className="ml-2>{service.category}</span>
                  </span>
                </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

                {/* Service Icon */}

                    <span>{service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;
<<<<<<< HEAD

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


=======
                {/* Features Preview */}
<div className='mb-4'>;'
                  <div className='text-xs text-gray-500 mb-2'>;'
                    Key 'Features':;
                  </div>;
                  <div className='space-y-1'>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {service.features.slice(0, 3).map((feature, idx) => (<div;
                        }
                        key={idx}
                        className='flex items-center space-x-2 text-sm text-gray-400'>'

<<<<<<< HEAD

=======
                        <CheckCircle className='w-3 h-3 text-cyan-400' />;'
                        <span className='line-clamp-1'>{feature}</span>;'
                      </div>;
                    ))}
                    {service.features.length > 3 && (<div className='text-xs text-cyan-400'>;'
                {/* Service Info *,}
}
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'    />;
      {/* Services Grid / List */}
      <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12'    />;
        {/* Results Count */}
        <div className='mb - 8'    />;
          <p className='text - gray - 400'    />            Showing {filtered_services.length} of {all_services.length} services      <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px-8 py-12\"    />;
        {/* Results Count */}
        <div className=\"mb-8\"    />;
          <p className=\"text-gray-400\"    />;
          </p>;
        </div>;
        {view_mode === 'grid' ? (<div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'    />            {filtered_services.map ((service, index) => (          <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8\"    />;}
            {filtered_services.map ((service, index) => (<motion.div;}
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 20 ,}
}
                animate={{ opacity: 1, coordinate_y: 0 ,}
}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='group relative bg - gradient - to - br from - gray - 900 / 50 to - black / 50 backdrop - blur - lg border border - cyan - 500 / 20 rounded - 2xl p - 6 hover:border - cyan - 400 / 40 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 300'    />

                {/* Category Badge *,}
}
                <div className='absolute top - 4 right - 4'    />;
                  <span;
                    className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}    />

                    {getCategoryIcon (service.category)}
                    <span className='ml - 2'    />{service.category}</span>                  </span>;
                </div>;

                {/* Service Icon */}

<div className='mb-4'    />
                  <div className='w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-hover: scale-110 transition-transform duration-300'    />
                    {service.icon}
                  </div>
                </div>
                {/* Service Info */}

<h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200'    />
                  {service.nam,}
}
                </h3>;
                <p className='text - gray - 400 mb - 3 line - clamp - 2'    />;
                  {service.tagline}

                </p>
                <p className='text-sm text-gray-500 mb-4 line-clamp-3'    />

                  {service.description}
                </p>;
                {/* Price */}
<div className='mb-4'    />;
                  <span className='text-2xl font-bold text-cyan-400'    />;
                    {service.price}
                  </span>;
                  <span className='text-gray-500 text-sm ml-2'    />/month</span>;
                {/* Stats */}
                <div className='flex items-center justify-between mb-4 text-sm'    />;
                  <div className='flex items-center space-x-1 text-yellow-400'    />;
                    <Star className='w-4 h-4 fill-current'    />;
                    <span className='text-white'    />{service.rating}</span>;
                    <span className='text-gray-500'    />({service.reviews})</span>;
                  </div>;
                  <div className='flex items-center space-x-1 text-gray-400'    />;
                    <Users className='w-4 h-4'    />;
                    <span    />{service.customers.toLocaleString()}</span>;
                  </div>;
                </div>;
                {/* Features Preview */}
<div className='mb-4'    />;
                  <div className='text-xs text-gray-500 mb-2'    />;
                    Key Features:;
                  </div>;
                  <div className='space-y-1'    />;
                    {service.features.slice(0, 3).map((feature, idx) => (<div;}
                        key={idx}
                        className='flex items-center space-x-2 text-sm text-gray-400'    />

                        <CheckCircle className='w-3 h-3 text-cyan-400'    />;
                        <span className='line-clamp-1'    />{feature}</span>;
                      </div>;
                    ))}
                    {service.features.length > 3 && (<div className='text-xs text-cyan-400'    />;}
                        +{service.features.length - 3} more features;
                      </div>;
                    )}
                  </div>;
                </div>;
                {/* Market Info */}
                  <div className='flex items-center justify-between'>

<div className='mb-4 text-xs text-gray-500'>'
                  <div className='flex items-center justify-between'>'
                    <span>Market 'Size': {service.marketSize}</span>
                    <span>'Growth': {service.growthRate}</span>
                  </div>
                </div>
<div className='mb-4 text-xs text-gray-500'>;
                  <div className='flex items-center justify-between'>;
                    <span>Market Size: {service.marketSize}</span>;
                    <span>Growth: {service.growthRate}</span>;
                  </div>;
                </div>;


                {/* CTA Button *
}
<button className='w-full bg-gradient-to-r from-cyan-500 to-blue-600 'hover':from-cyan-600 'hover':to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 'hover':shadow-lg 'hover':shadow-cyan-500/25 group-'hover':scale-105'>;'
                  Learn More;
                </button>;
              </motion.div>;
            ))}
          </div>
        ) : (
<div className='space-y-6'>'
            {filteredServices.map((service, index) => (
              <motion.div
}
key={service.id}
                initial={ 'opacity': 0, 'x': -20 
}
                animate={ 'opacity': 1, 'x': 0 
}
                transition={ 'duration': 0.5, 'delay': index * 0.1 }

className='group bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-xl p-6 'hover':border-cyan-400/40 'hover':shadow-xl 'hover':shadow-cyan-500/20 transition-all duration-300''
              >
                <div className='flex items-start space-x-6'>'
                  {/* Service Icon */}
                  <div className='flex-shrink-0'>'
                    <div className='w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 group-'hover':scale-110 transition-transform duration-300'>'
                      {service.icon}
                    </div>
                  </div>
                  {/* Service Details */}

<div className='flex-1 min-w-0'>'
                    <div className='flex items-start justify-between mb-3'>'
                        <h3 className='text-2xl font-bold text-white mb-2 group-'hover':text-cyan-300 transition-colors duration-200'>'

                          {service.nam
}
                        </h3>;
                        <p className='text-lg text-cyan-300 mb-2'>;'
                          {service.tagline}
                        </p>;
                        <p className='text-gray-400 mb-4'>;'
                          {service.description}
                        </p>;
                      </div>;
                      <div className='text-right'>;'
                        <div className='text-3xl font-bold text-cyan-400 mb-2'>;'
                          {service.price}

                        </div>
                        <div className='text-gray-500 text-sm'>/month</div>'
                        <span,
className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}`                        >
                          {service.category}
                        </span>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Key Features:</div>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span className="line-clamp-1">{feature}</span>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </div>
                    </div>
                    {/* Stats Row */}

<<<<<<< HEAD

                  <div className="flex items-center justify-between">



                    <span>Market Size: {service.marketSize}</span>
                    <span>Growth: {service.growthRate}</span>
                  </div>
                </div>

              >
                <div className="flex items-start space-x-6">
                  {/* Service Icon */}
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

                  {/* Service Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                          {service.name}
                        </h3>
                        <p className="text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                        <div className="text-gray-500 text-sm">/month</div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white mt-2`}>
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


=======
<div className='flex items-center space-x-8 mb-4 text-sm'>'
                      <div className='flex items-center space-x-1 text-yellow-400'>'
                        <Star className='w-4 h-4 fill-current' />'
                        <span className='text-white font-medium'>'
                          {service.rating}
                        </span>
                        <span className='text-gray-500'>'
                          ({service.reviews} reviews)
                        </span>
                      <div className='flex items-center space-x-1 text-gray-400'>'
                        <Users className='w-4 h-4' />'
                        <span className='text-white font-medium'>'


                  {/* Service Details */}
                  <div className="flex-1 min-w-0>
                    <div className=flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200>
                          {service.name}
                        </h3>
                        <p className=text-lg text-cyan-300 mb-2">
                          {service.tagline}
                        </p>
                        <p className="text-gray-400 mb-4>
                          {service.description}
                          {service.customers.toLocaleString()}
                        </span>;

                          {service.marketSize}
                      <div className=flex items-center space-x-1 text-gray-400'>
                        <Users className='w-4 h-4 />
                        <span className=text-white font-medium'>
                          {service.customers.toLocaleString()}
                        </span>

<div className='flex items-center space-x-8 mb-4 text-sm'    />
                      <div className='flex items-center space-x-1 text-yellow-400'    />
                        <Star className='w-4 h-4 fill-current'    />
                        <span className='text-white font-medium'    />
                          {service.rating}
                        </span>
                        <span className='text-gray-500'    />
                          ({service.reviews} reviews)
                        </span>
                      <div className='flex items-center space-x-1 text-gray-400'    />
                        <Users className='w-4 h-4'    />
                        <span className='text-white font-medium'    />


                          {service.customers.toLocaleString()}
                        </span>;
                        <span className='text-gray-500'    />customers</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'    />;
                        <TrendingUp className='w-4 h-4'    />;
                        <span className='text-white font-medium'    />;
                          {service.growthRate}
                        </span>;
                        <span className='text-gray-500'    />growth</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'    />;
                        <Globe className='w-4 h-4'    />;
                        <span className='text-white font-medium'    />;
                          {service.marketSize}

                    <div className='flex items-center space-x-8 mb-4 text-sm'    />;
                      <div className='flex items-center space-x-1 text-yellow-400'    />;
                        <Star className='w-4 h-4 fill-current'    />;
                        <span className='text-white font-medium'    />;
                          {service && service.rating}
                        </span>;
                        <span className='text-gray-500'    />;
                          ({service && service.reviews} reviews)</span>;
                      <div className='flex items-center space-x-1 text-gray-400'    />;
                        <Users className='w-4 h-4'    />;
                        <span className='text-white font-medium'    />;
                          {service && service.customers.toLocaleString()}
                        </span>;
                        <span className='text-gray-500'    />customers</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'    />;
                        <TrendingUp className='w-4 h-4'    />;
                        <span className='text-white font-medium'    />;
                          {service && service.growthRate}
                        </span>;
                        <span className='text-gray-500'    />growth</span>;
                      </div>;
                      <div className='flex items-center space-x-1 text-gray-400'    />;
                        <Globe className='w-4 h-4'    />;
                        <span className='text-white font-medium'    />;
                          {service && service.marketSize}
                        </span>;
                        <span className='text-gray-500'    />market</span>                      </div>;
                    </div>;
                    {/* Features */}                      <div className=\"flex items-center space-x-1 text-gray-400\"    />;
                        <Globe className=\"w-4 h-4\"    />;
                        <span className=\"text-white font-medium\"    />{service && service.marketSize}</span>;
                        <span className=\"text-gray-500\"    />market</span>;
                    </div>;

                    {/* Features */}

<div className='mb-4'    />
                      <div className='text-sm text-gray-500 mb-2'    />
                        Key Features:
                      </div>
                      <div className='grid grid-cols-2 gap-2'    />
                        {service.features.slice(0, 6).map((feature, idx) => (}
                          <div;}
key={idx}
                            className='flex items-center space-x-2 text-sm text-gray-400'
                              />
                            <CheckCircle className='w-3 h-3 text-cyan-400 flex-shrink-0'    />
                            <span    />{feature}</span>
                          </div>

                        ))}
                    {/* CTA */}
<div className='flex items-center justify-between'    />;
                      <button className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 group-hover:scale-105'    />;
                        Learn More;
                      </button>;
                      <div className='text-xs text-gray-500'    />;
                        Launched: {' '}
                        {new Date(service.launchDate).toLocaleDateString(,}
}
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
                    {/* CTA */}


>>>>>>> origin/cursor/delete-old-data-records-6bba


                    {/* CTA */}


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            ))}
</div>;
        )}


<<<<<<< HEAD

=======
        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className='text-center py-20'>
            <div className='w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-cyan-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'>
              No services found
            </h3>
            <p className='text-gray-400 mb-6'>
              Try adjusting your search terms or filters to find what you're
              looking for.            </p>          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.

                      </div>;
                    </div>;




                    {/* CTA */}


            ))}
          </div>;
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (


>>>>>>> origin/cursor/delete-old-data-records-6bba
<div className='text-center py-20'    />
            <div className='w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6'    />
              <Search className='w-12 h-12 text-cyan-400'    />
            </div>
            <h3 className='text-2xl font-bold text-white mb-2'    />
              No services found;
            </h3>
            <p className='text-gray-400 mb-6'    />
              Try adjusting your search terms or filters to find what you're;
looking for.
            </p>
            <button;
onClick={() =    /> {;

<<<<<<< HEAD
            <button
              onClick={() => {;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                setSearchTerm('');
                setSelectedCategory('All Services');
}
setSelectedPriceRange('all');}
              }}
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200'
              }}
              className=\"bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200\"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            >
              Clear All Filters;
            </button>
          </div>
        )}
      </div>


      {/* CTA Section *,}
}
<div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'    />;
<<<<<<< HEAD

          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}

            whileInView={{ opacity: 1, y: 0 }}

=======
          <motion.div;
            initial={{ opacity: 0, y: 30 ,}
}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 }}
            viewport={{ "once": true 

            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
            transition={{ duration: 0.8 }}
            viewport={{ once: true ,}
}


              />

<h2 className='text-4xl font-bold text-white mb-6'    />
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'    />
              Our team of experts is ready to help you implement the perfect;
solution for your needs. Get in touch today and discover how our;
innovative services can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'    />
              <a;
href='/contact'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105'
                  />
                Get Started Today;
              </a>
              <a;
href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'
                  />
                View Pricing Plans;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
<<<<<<< HEAD

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
                <div className="flex items-start space-x-6">;
                  {/* Service Icon */}
                  <div className="flex-shrink-0">;
                    <div className="w - 20 h - 20 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - xl flex items - center justify - center text - cyan - 400 group - hover:scale - 110 transition-transform duration-300">;
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
                        >                          {service.category}                      <div className="text-right">;
                        <div className="text - 3xl font - bold text - cyan-400 mb-2">{service.price}</div>;
                        <div className="text - gray-500 text-sm">/month</div>;
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
                    {/* Features */}                      <div className="flex items - center space - x-1 text-gray-400">;
                        <Globe className="w-4 h-4" />;
                        <span className="text-white font-medium">{service.market_size}</span>;
                        <span className="text-gray-500">market</span>;
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
                            <CheckCircle className='w - 3 h - 3 text - cyan - 400 flex - shrink - 0' />                            <span>{feature}</span>                    <div className="mb-4">;
                      <div className="text - sm text - gray-500 mb-2">Key Features:</div>;
                      <div className="grid grid - cols-2 gap-2">;
                        {service.features.slice (0, 6).map ((feature, idx) => (
                          <div key={idx} className="flex items - center space - x-2 text - sm text-gray-400">;
                            <CheckCircle className="w - 3 h - 3 text - cyan - 400 flex-shrink-0" />;
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
                        {new Date (service.launch_date).toLocaleDateString ()}                      </div>                    <div className="flex items-center justify-between">;
                      <button className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover: from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 group-hover:scale-105">;
                        Learn More;
                      </button>;
                      <div className="text - xs text-gray-500">;
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
              looking for.            </p>          <div className="text-center py-20">;
            <div className="w - 24 h - 24 bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 rounded - full flex items - center justify - center mx-auto mb-6">;
              <Search className="w - 12 h - 12 text-cyan-400" />;
            </div>;
            <h3 className="text - 2xl font - bold text-white mb-2">No services found</h3>;
            <p className="text - gray-400 mb-6">;
              Try adjusting your search terms or filters to find what you're looking for.;
            <button;
              on_click={() => {
                setSearchTerm ('');
                setSelectedCategory ('All Services');
                setSelectedPriceRange ('all');
              }}


=======
          >

            <h2 className=text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
>>>>>>> origin/cursor/delete-old-data-records-6bba
              }}
              className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition-all duration-200;
            >;
              Clear All Filters;
            </button>;
          </div>)}
      </div>;
      {/* CTA Section */}

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </h2>
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>

<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">

=======
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6>
                className=border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'>              Ready to Transform Your Business?;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </h2>;
            <p className='text-xl text-cyan-300 mb-8 max-w-3xl mx-auto'>;
              Our team of experts is ready to help you implement the perfect solution for your needs. ;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;

);
<<<<<<< HEAD

  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 

}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {

  case 'popular':;
  return b.customers - a.customers;
=======
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {

  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}//Sort services filtered.sort ( (a, b) => {
  switch (sortBy) {

  case 'popular':;
  return b.customers - a.customers;
  filtered = filtered && filtered.filter (service => service && service.name.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.description.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) || service && service.tagline.toLowerCase () .includes (searchTerm && searchTerm.toLowerCase () ) ;
}//Sort services filtered && filtered.sort ( (a, b) => {;
  switch (sortBy) {;
  case 'popular': return b && b.customers - a && a.customers;
case 'rating': return b && b.rating - a && a.rating;
case 'newest': return new Date (b && b.launchDate) .getTime () - new Date (a && a.launchDate) .getTime ();
case 'price-low': setFilteredServices (filtered) ;
}, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);
};
description"content=" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs."/> <meta name=" keywords"content=" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group"/> </Head> left: `$ {;
  Math && Math.random () * 100 ;
}%`;
top: `$ {;
  Math && Math.random () * 100 ;
}%` ;
}/>) ) ;
}</div> <div className=" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> <motion&& motion.div initial= {
  {
  opacity: 0, y: 30
}animate= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0 && 0.8 
}> <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"> <span className=" bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion && motion.div>) ) ;
}</div> /> </div> </div> </motion && motion.div> </div> </div> key= {;
  category && category.name ;
}onClick= {;
  () => setSelectedCategory (category && category.name) ;
}className= {;
  `flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 $ {;
  selectedCategory === category && category.name ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25' : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' ;
}` ;
}> </span> </button>) ) ;
}</div> </option>) ) ;
}</select> {;
  /* Sort Options */ ;
}<select </option>) ) ;
}</select> <buttononClick= {
  () => setViewMode ('grid') ;
}className= {;
  `p-2 rounded-md transition-all duration-200 $ {;
  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white' ;
}` ;
}> <Grid3X3 className=" w-4 h-4"/> </button> <buttononClick= {
  () => setViewMode ('list') ;
}className= {;
  `p-2 rounded-md transition-all duration-200 $ {;
  viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-white' ;
}` ;
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {;
  service && service.features.length - 3 ;
}more features </div>) ;
}</div> </div> Learn More </button> </motion && motion.div>) ) ;
}</div> </span> </div> </div> </div>) ) ;
}</div> </div> </div> </div> </div> </div> </motion && motion.div>) ) ;
}</div>) ;
}</div> <h3 className=" text-2xl font-bold text-white mb-2">No services found</h3> <p className=" text-gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <buttononClick= {
  () => {;
  > Clear All Filters </button> </div>) ;
}</div> <motion&& motion.div initial= {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  duration: 0 && 0.8 
}viewport= {
  {
  once: true 
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion && motion.div> </div> </div> </Layout>)   );
      <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20'>;
}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className='bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>          <motion.div      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
              }}
              className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 3 px - 6 rounded - xl transition-all duration-200";
            >;
              Clear All Filters;
            </button>;
          </div>)}
      </div>;
      {/* CTA Section */}
            </h2>
            <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect solution for your needs.
              Get in touch today and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href='/pricing'
                className='border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200'                href="/pricing"
                className="border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200"
              >
                View Pricing Plans
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) |service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () )
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.tagline.toLowerCase () .includes (searchTerm.toLowerCase () ) 
}
case 'rating': return b.rating - a.rating;}
case 'newest': return new Date (b.launchDate) .getTime () - new Date (a.launchDate) .getTime ()case 'price-low': setFilteredServices (filtered)}, [searchTerm, selectedCategory, selectedPriceRange, sortBy])}
description\"content=\" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.\"/> <meta name=\" keywords\"content=\" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group\"   /> </Head> left: `$ {Math.random () * 100;}
}%`;
top: `$ {Math.random () * 100;}
}%`;
}/>) )}</div> <div className=\" relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto\"    /> <motion.div initial= {{opacity: 0, y: 30;}
}animate= {{opacity: 1, y: 0;}
}transition= {{{opacity: 0, y: 30;}
}whileInView= {{opacity: 1, y: 0;}
}transition= {{once: true;}
}    /> <h2 className=\" text-4xl font-bold text-white mb-6\"    /> Ready to Transform Your Business? </h2> <p className=\" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto\"    /> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=\" /contact\"className=\" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105\"    /> Get Started Today </a> <a href=\" /pricing\"className=\" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200\"     /> View Pricing Plans </a> </div> </motion && motion.div> </div> </div> </Layout>)   )once: true;
}> <h2 className=\" text-4xl font-bold text-white mb-6\"    /> Ready to Transform Your Business? </h2> <p className=\" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto\"    /> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=\" /contact\"className=\" bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105\"    /> Get Started Today </a> <a href=\" /pricing\"className=\" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200\"     /> View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   ,
}
      <div className='bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border - cyan - 500 / 20'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 20 text - center'>          <motion.div      <div className="bg - gradient - to - r from - cyan - 500 / 10 to - blue - 500 / 10 border - t border-cyan-500 / 20">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py-20 text-center">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 ,}
}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto'>;
              Our team of experts is ready to help you implement the perfect;
              solution for your needs. Get in touch today and discover how our;
              innovative services can drive your success.;
            </p>;
            <div className='flex flex - col sm:flex - row items - center justify - center space - y-4 sm:space - y-0 sm:space - x-6'>;
              <a;
                href='/contact';
                className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105'              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'              >              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - cyan - 300 mb - 8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement the perfect solution for your needs.;
              Get in touch today and discover how our innovative services can drive your success.;
            </p>;
            <div className="flex flex - col sm: flex - row items - center justify - center space - y-4 sm:space-y-0 sm:space-x-6">;
              <a;
                href="/contact";
                className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan-500 / 25 hover:scale-105";
              >;
                Get Started Today;
              </a>;
              <a;
                href='/pricing';
                className='border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200'                href="/pricing";
                className="border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition-all duration-200";
              >;
                View Pricing Plans;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </div>;
    </Layout>);
  filtered = filtered.filter (service => service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || service.tagline.toLowerCase () .includes (search_term.toLowerCase () );
}//Sort services filtered.sort ( (a, b) => {
  switch (sort_by) {
  case 'popular': return b.customers - a.customers;
case 'rating': return b.rating - a.rating;
case 'newest': return new Date (b.launch_date) .get_time () - new Date (a.launch_date) .get_time ();
case 'price - low': setFilteredServices (filtered);
}, [search_term, selected_category, selectedPriceRange, sort_by]);
;
}
          >;


    </Layout>)filtered = filtered.filter (service => service.name.toLowerCase () .includes (search_term.toLowerCase () ) || service.description.toLowerCase () .includes (search_term.toLowerCase () ) || service.tagline.toLowerCase () .includes (search_term.toLowerCase () )}//Sort services filtered.sort ( (a, b) => {switch (sort_by) {case 'popular':;
  return b.customers - a.customers;}
case 'rating': return b.rating - a.rating;}
case 'newest': return new Date (b.launch_date) .get_time () - new Date (a.launch_date) .get_time ()case 'price - low': setFilteredServices (filtered)}, [search_term, selected_category, selectedPriceRange, sort_by])}
description\"content=\" Explore our complete portfolio of innovative micro SAAS, AI, IT, and emerging technology services. Find the perfect solution for your business needs.\"/> <meta name=\" keywords\"content=\" micro SAAS, AI services, IT solutions, quantum computing, emerging technology, business solutions, Zion Tech Group\"   /> </Head> left: `$ {Math.random () * 100;}
>>>>>>> origin/cursor/delete-old-data-records-6bba

}%`;
top: `$ {Math.random () * 100;}
}%`;
}/>) );
}</div> <div className=" relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max-w-6xl mx-auto"> <motion.div initial= {
  {
  opacity: 0, coordinate_y: 30;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}transition= {
  {
  duration: 0.8;
}> <h1 className=" text - 4xl sm:text - 5xl lg:text - 7xl font - bold text-white mb-6"> <span className=" bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip-text text-transparent"> Comprehensive </span> <br /> <span className=" text-white">Services Showcase</span> </h1> </motion.div>) );
}</div> /> </div> </div> </motion.div> </div> </div> key= {
  category.name;
}on_click= {
  () => setSelectedCategory (category.name);
}className= {
  `flex items - center space - x-2 px - 4 py - 2 rounded - lg text - sm font - medium transition - all duration - 200 $ {
  selected_category === category.name ? 'bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white shadow - lg shadow - cyan - 500 / 25' : 'bg - white / 10 text - gray - 300 hover:bg - white / 20 hover:text - white';
}`;
}> </span> </button>) )}</div> </option>) )}</select> {/* Sort Options */;}
}<select </option    />) )}</select> <button on_click= {() =    /> setViewMode ('grid')}className= {`p - 2 rounded - md transition - all duration - 200 $ {view_mode === 'grid' ? 'bg - cyan - 500 text - white' : 'text - gray - 400 hover:text - white';}
}`;
}> <Grid3X3 className=" w-4 h-4"/> </button> <button on_click= {
  () => setViewMode ('list');
}className= {
  `p - 2 rounded - md transition - all duration - 200 $ {
  view_mode === 'list' ? 'bg - cyan - 500 text - white' : 'text - white';
}`;
}> <List className=" w-4 h-4"/> </button> </div> </div> </div> </div> </div> + {
  service.features.length - 3;
}more features </div>);
}</div> </div> Learn More </button> </motion.div>) );
}</div> </span> </div> </div> </div>) );
}</div> </div> </div> </div> </div> </div> </motion.div>) );
}</div>);
}</div> <h3 className=" text - 2xl font - bold text-white mb-2">No services found</h3> <p className=" text - gray-400 mb-6"> Try adjusting your search terms or filters to find what you're looking for. </p> <button on_click= {
  () => {
  > Clear All Filters </button> </div>);
}</div> <motion.div initial= {
  {
  }
  'opacity': 0, 'coordinate_y': 30;
}whileInView= {
  {
  }
  'opacity': 1, 'coordinate_y': 0;
}transition= {
  {
  }
  'duration': 0.8;
}viewport= {
  {
<<<<<<< HEAD


=======


  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true 


}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
}
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   )
}
;
}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
  once: true;
}> <h2 className=" text - 4xl font - bold text - white mb - 6"> Ready to Transform Your Business? </h2> <p className=" text - xl text - cyan - 300 mb - 8 max - w-3xl mx - auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium py - 4 px - 8 rounded - xl transition - all duration - 200 hover:shadow - lg hover:shadow - cyan - 500 / 25 hover:scale - 105"> Get Started Today </a> <a href=" /pricing"className=" border border - cyan - 500 / 50 text - cyan - 300 hover:text - white hover:bg - gradient - to - r hover:from - cyan - 500 / 20 hover:to - blue - 500 / 20 font - medium py - 4 px - 8 rounded - xl transition - all duration - 200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)   );
}

  once: true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)

  once: true 
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD
=======
  "once": true 

}> <h2 className=" text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 "hover":from-cyan-600 "hover":to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 "hover":shadow-lg "hover":shadow-cyan-500/25 "hover":scale-105"> Get Started Today </a> <a href=" /pricing"className=" border border-cyan-500/50 text-cyan-300 "hover":text-white "hover":bg-gradient-to-r "hover":from-cyan-500/20 "hover":to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)"

}> <h2 className=" text-4xl font-bold text-white mb-6> Ready to Transform Your Business? </h2> <p className= text-xl text-cyan-300 mb-8 max-w-3xl mx-auto"> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href=" /contactclassName= bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"> Get Started Today </a> <a href=" /pricingclassName= border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
}> <List className=" w-4 h-4/> </button> </div> </div> </div> </div> </div> + {service.features.length - 3;
}more features </div>)}</div> </div> Learn More </button> </motion.div>) )}</div> </span> </div> </div> </div>) )}</div> </div> </div> </div> </div> </div> </motion.div>) )}</div>)}</div> <h3 className= text - 2xl font - bold text-white mb-2">No services found</h3> <p className=" text - gray-400 mb-6> Try adjusting your search terms or filters to find what you're looking for. </p> <button on_click= {() => {> Clear All Filters </button> </div>)}</div> <motion.div initial= {{opacity: 0, coordinate_y: 30;
}whileInView= {{opacity: 1, coordinate_y: 0;
}transition= {{duration: 0.8;
}viewport= {{once: true;
}> <h2 className= text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className=" text-xl text-cyan-300 mb-8 max-w-3xl mx-auto> Our team of experts is ready to help you implement the perfect solution for your needs. Get in touch today and discover how our innovative services can drive your success. </p> <a href= /contact"className=" bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105> Get Started Today </a> <a href= /pricing"className=" border border-cyan-500/50 text-cyan-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 font-medium py-4 px-8 rounded-xl transition-all duration-200" > View Pricing Plans </a> </div> </motion.div> </div> </div> </Layout>)
  )
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
