<<<<<<< HEAD
=======
<<<<<<< HEAD
import { motion  } from 'framer-motion';
  Search;
  Filter;
  Star;
  CheckCircle;
  ArrowRight;
  Brain;
  Atom;
  Shield;
  Rocket;
  Target;
  Microscope;
  Phone;
  Mail;
  MapPin;
  TrendingUp;
  Users;
  Award;
  Zap;
  Globe;
  Cpu;
  Database;
  Lock;
  Cloud;
  Stethoscope;
  GraduationCap;
  Leaf;
  Truck;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import { Search, Filter, Star, CheckCircle, ArrowRight;
  Search,Filter,Star,CheckCircle,ArrowRight,Brain,Atom,Shield,Rocket,Target,Microscope,Phone,Mail,MapPin,TrendingUp,Users,Award,Zap,Globe,Cpu,Database,Lock,Cloud,Stethoscope,GraduationCap,Leaf,Truck,} from 'lucide-react';
import Layout from '../components/layout/Layout';import { Search, Filter, Star, CheckCircle, ArrowRight,import { Search, Filter, Star, CheckCircle, ArrowRight;Brain, Atom, Shield, Rocket, Target, Microscope;
>>>>>>> merged-prs-20250907-203621
const filteredServices = serviceCategories.flatMap (category => category.services.filter (service => (selectedCategory === 'all' || category.id === selectedCategory) && (searchTerm === ''|| service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.category.toLowerCase () .includes (searchTerm.toLowerCase () ) ) ) )
const sortedServices = [...filteredServices].sort ( (a, b) => {
  switch (sortBy) {
  case 'name': return a.name.localeCompare (b.name)
case 'price': return a.pricing.starter.price - b.pricing.starter.price
case 'category': return (<Layout> <Head> <title>Innovative Services Showcase 2025 | Zion Tech Group</title> </div> <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" > <motion.div > <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6" > <Star className="w-4 h-4 mr-2" /> Innovation Showcase 2025 </div> <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" > <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > Innovative Services </span> <br /> <span className="text-white" >Showcase</span> </h1> </p> </motion.div> {
  /* Stats */ 
}<motion.div </div> <div className="text-gray-400" >Services</div> </div> </div> <div className="text-gray-400" >Categories</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2" > 24/7 </div> <div className="text-gray-400" >Support</div> </div> <div className="text-center" > <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2" > 99.9% </div> <div className="text-gray-400" >Uptime</div> </div> </motion.div> </div> </section> /> </div> {
  /* Category Filter */ 
}<div> <select </option>) ) 
}</select> </div> {
  /* Sort By */ 
}<div> <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="category" >Sort by Category</option> </select> </div> </div> </div> </div> </section> + {
  service.features.length - 3 
}more features </li>) 
}</ul> </div> > Learn More </a> <a > <Mail className="w-5 h-5" /> </a> </div> </motion.div>) ) 
}</div> {
  sortedServices.length === 0 && (<motion.div > <div className="text-gray-400 text-xl mb-4" >No services found</div> <div className="text-gray-500" >Try adjusting your search or filter criteria</div> </motion.div>) 
}</div> </section> > <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth. </p> </motion.div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8" > <motion.div > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Phone className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <Mail className="w-8 h-8 text-white" /> </div> > <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4" > <MapPin className="w-8 h-8 text-white" /> </div> </motion.div> </div> </div> </section> </Layout>) 
<<<<<<< HEAD
}
=======
}
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next / head';
import React, { useState } from 'react',
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
=======

import React, { useState } from 'react';
import Head from 'next / head';

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import React, { useState } from 'react';

import Head from 'next/head';
<<<<<<< HEAD
import { motion } from 'framer-motion';


import {
  Search
  Filter
  Star
  CheckCircle
  ArrowRight
  Brain
  Atom
  Shield
  Rocket
  Target
  Microscope
  Phone
  Mail
  MapPin
  TrendingUp
  Users
  Award
  Zap
  Globe
  Cpu
  Database
  Lock
  Cloud
  Stethoscope
  GraduationCap
  Leaf
  Truck;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import {
  Search, Filter, Star, CheckCircle, ArrowRight

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { motion } from 'framer-motion';

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  Microscope,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe,
  Cpu,
  Database,
  Lock,
  Cloud,
  Stethoscope,
  GraduationCap,
  Leaf,;
  Truck,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import {
  Search, Filter, Star, CheckCircle, ArrowRight, ;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
// Import all the new 2025 innovative service data
<<<<<<< HEAD
import { innovativeFinancialServices2025  } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025  } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025  } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025  } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025  } from '../data/2025-innovative-logistics-services';
=======

import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Import existing services for comprehensive coverage
import { realMicroSaasServices2025  } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025  } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025  } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  Search,
  Filter,
  Star,
  CheckCircle,
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  Target,
  Microscope,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Zap,
  Globe,
  Cpu,
  Database,
  Lock,
  Cloud,
  Stethoscope,
  GraduationCap,
  Leaf,
  Truck} from lucide-react';
import Layout from '../components/layout/Layout;import {
  Search, Filter, Star, CheckCircle, ArrowRight,
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck;


  const filteredServices = serviceCategories.flatMap(category => 

<<<<<<< HEAD
export default function InnovativeServicesShowcase2025() {

export default function InnovativeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(
      service =>
        (selectedCategory === 'all' |category.id === selectedCategory) &&
        (searchTerm === '' |
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) |
          service.category.toLowerCase().includes(searchTerm.toLowerCase()))    )  const filteredServices = serviceCategories.flatMap(category =>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    category.services.filter(service =>
      (selectedCategory === 'all |category.id === selectedCategory) &&
      (searchTerm === ' |
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

    )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
    gradient: 'from-teal-500/20 to-green-500/20,
    badge: Popular'
  }
],

export default function InnovativeServicesShowcase2025() {

=======
import { motion } from 'framer-motion';

import { Search, Filter, Star, CheckCircle, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;

  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;}
  Stethoscope, GraduationCap, Leaf, Truck;}
  } from 'lucide-react';
import Layout from '../components/layout/Layout';

// Import all the new 2025 innovative service data;
// Import existing services for comprehensive coverage;
import { realMicroSaasServices2025  } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025  } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025  } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';

const contactInfo = null;
];


export default function InnovativeServicesShowcase2025() {
  const [searchTerm, setSearchTerm] = useState('');
>>>>>>> origin/chore/fix-lint-and-merge

const [selectedCategory, setSelectedCategory] = useState('all');

const [sortBy, setSortBy] = useState('name');

const filteredServices = serviceCategories.flatMap(category =>
    category.services.filter(
      service =>
        (selectedCategory === 'all' |category.id === selectedCategory) &&
        (searchTerm === '' |
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description;
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
       ;
  return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':
        return a.category.localeCompare(b.category);
<<<<<<< HEAD
=======

<<<<<<< HEAD
default:}
        return 0;}
    }
  });
<<<<<<< HEAD
return (;
    <Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>

=======
  return (
    <Layout    />
      <Head><title>Innovative Services Showcase 2025 | Zion Tech Group</title>
<meta;
name='description'
          content='Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 2025 and beyond.'
           />
        <meta;
name='keywords'
          content='innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group'
           />
        <meta;
property='og: title'
          content='Innovative Services Showcase 2025 - Zion Tech Group'
           />
        <meta;
property='og:description'
          content='Comprehensive collection of innovative technology services.'
           />
        <meta;
property='og:url'
          content='https://ziontechgroup.com/innovative-services-showcase-2025'
           />
      </Head>
      {/* Hero Section *,}
}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'    />;
        <div className='absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black'    /></div>;

        {/* Background Elements */}

        <div className='absolute inset-0 overflow-hidden pointer-events-none'    />
          <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'    /></div>
          <div className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'    /></div>
          <div className='absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500'    /></div>
        </div>
>>>>>>> origin/chore/fix-lint-and-merge

        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'    />
          <motion.div;
initial={{ opacity: 0, y: 30 ,}
}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 ,}
}
<<<<<<< HEAD
className='mb-8''
=======

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
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Search,;
  Filter,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Brain,;
  Atom,;
  Shield,;
  Rocket,;
  Target,;
  Microscope,;
  Phone,;
  Mail,;
  MapPin,;
  TrendingUp,;
  Users,;
  Award,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Lock,;
  Cloud,;
  Stethoscope,;
  GraduationCap,;
  Leaf,;
  Truck,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import { ;
  Search, Filter, Star, CheckCircle, ArrowRight, ;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck;
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services';
// Import existing services for comprehensive coverage;
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};  website: 'https://ziontechgroup && ziontechgroup.com';
};

const serviceCategories = [;
  {;
    id: 'financial-technology',;
    title: '💰 Financial Technology',;
    description: 'Innovative fintech, DeFi, and financial services',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-500',;
    services: [...innovativeFinancialServices2025],;
    gradient: 'from-green-500/20 to-emerald-500/20',;
    badge: 'New',;
  },  {    badge: 'New';
  };
  {;
    id: 'healthcare-biotech',;
    title: '🏥 Healthcare & Biotech',;
    description: 'AI-powered healthcare and biotechnology solutions',;
    icon: Stethoscope,;
    color: 'from-blue-500 to-indigo-500',;
    services: [...innovativeHealthcareServices2025],;
    gradient: 'from-blue-500/20 to-indigo-500/20',;
    badge: 'Hot',;
  },  {    badge: 'Hot';
  };
  {;
    id: 'education-technology',;
    title: '🎓 Education Technology',;
    description: 'AI-powered learning and educational innovation',;
    icon: GraduationCap,;
    color: 'from-purple-500 to-pink-500',;
    services: [...innovativeEducationServices2025],;
    gradient: 'from-purple-500/20 to-pink-500/20',;
    badge: 'Innovative',;
  },  {    badge: 'Innovative';
  };
  {;
    id: 'sustainability-green-tech',;
    title: '🌱 Sustainability & Green Tech',;
    description: 'Environmental technology and sustainability solutions',;
    icon: Leaf,;
    color: 'from-emerald-500 to-teal-500',;
    services: [...innovativeSustainabilityServices2025],;
    gradient: 'from-emerald-500/20 to-teal-500/20',;
    badge: 'Eco-Friendly',;
  },  {    badge: 'Eco-Friendly';
  };
  {;
    id: 'logistics-supply-chain',;
    title: '🚚 Logistics & Supply Chain',;
    description: 'Autonomous logistics and supply chain optimization',;
    icon: Truck,;
    color: 'from-orange-500 to-red-500',;
    services: [...innovativeLogisticsServices2025],;
    gradient: 'from-orange-500/20 to-red-500/20',;
    badge: 'Autonomous',;
  },;
  {;
    id: 'ai-consciousness',;
    title: '🧠 AI & Consciousness',;
    description:;
      'Revolutionary AI consciousness and emotional intelligence platforms',    icon: Brain,;
    color: 'from-violet-500 to-purple-500',;
    services: [...innovativeAIServices2025],;
    gradient: 'from-violet-500/20 to-indigo-500/20',;
    badge: 'Revolutionary',;
  },  {    badge: 'Autonomous';
  };
  {;
    id: 'ai-consciousness',;
    title: '🧠 AI & Consciousness',;
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',;
    color: 'from-violet-500 to-purple-500',;
    services: [...innovativeAIServices2025],;
    gradient: 'from-violet-500/20 to-indigo-500/20',;
    badge: 'Revolutionary',;
  },    badge: 'Revolutionary';
  };
  {;
    id: 'quantum-emerging',;
    title: '⚛️ Quantum & Emerging Tech',;
    description: 'Quantum computing, DNA computing, and beyond',;
    icon: Atom,;
    color: 'from-indigo-500 to-blue-500',;
    services: [...emergingTechServices2025],;
    gradient: 'from-indigo-500/20 to-cyan-500/20',;
    badge: 'Quantum',;
  },  {    badge: 'Quantum';
  };
  {;
    id: 'enterprise-it',;
    title: '🏙️ Enterprise IT',;
    description: 'Autonomous operations and zero-trust security',;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-500',;
    services: [...innovativeITServices2025],;
    gradient: 'from-blue-500/20 to-teal-500/20',;
    badge: 'Enterprise',;
  },  {    badge: 'Enterprise';
  };
  {;
    id: 'micro-saas',;
    title: '🎯 Micro SAAS',;
    description: 'Innovative solutions for every business need',;
    icon: Target,;
    color: 'from-teal-500 to-green-500',;
    services: [...realMicroSaasServices2025],;
    gradient: 'from-teal-500/20 to-green-500/20',;
    badge: 'Popular',;
  },];    badge: 'Popular';
  }
];

export default function InnovativeServicesShowcase2025() {;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = serviceCategories && serviceCategories.flatMap(category =>;
    category && category.services.filter(;
      service =>;
        (selectedCategory === 'all' || category && category.id === selectedCategory) &&;
        (searchTerm === '' ||;
          service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.description;
            .toLowerCase();
            .includes(searchTerm && searchTerm.toLowerCase()) ||;
          service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()))    )  const filteredServices = serviceCategories && serviceCategories.flatMap(category => ;
    category && category.services.filter(service =>;
      (selectedCategory === 'all' || category && category.id === selectedCategory) &&;
      (searchTerm === '' || ;
        service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.description.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
        service && service.category.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()));
  );

  const sortedServices = [...filteredServices].sort((a, b) => {;
    switch (sortBy) {;
      case 'name':;
        return a && a.name.localeCompare(b && b.name);
      case 'price':;
        return a && a.pricing.starter && starter.price - b && b.pricing.starter && starter.price;
      case 'category':;
        return a && a.category.localeCompare(b && b.category);
      default:;
        return 0;    }      default: return 0;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    gradient: 'from - teal - 500 / 20 to - green - 500 / 20',
    badge: 'Popular',
  }, ];    badge: 'Popular';
  }
];
;
export default /**
 * InnovativeServicesShowcase2025 - Function description
 */
function InnovativeServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState ('');
  const [selected_category, setSelectedCategory] = useState ('all');
  const [sort_by, setSortBy] = useState ('name');
;
  const filtered_services = service_categories.flat_map (category =>;
    category.services.filter (
      service =>;
        (selected_category === 'all' || category.id === selected_category) &&;
        (search_term === '' ||;
          service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
          service.description;
            .toLowerCase ();
            .includes (search_term.toLowerCase ()) ||;
          service.category.toLowerCase ().includes (search_term.toLowerCase ()))    )  const filtered_services = service_categories.flat_map (category =>;
    category.services.filter (service =>;
      (selected_category === 'all' || category.id === selected_category) &&;
      (search_term === '' ||;
        service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
        service.category.toLowerCase ().includes (search_term.toLowerCase ())));
;
  const sorted_services = [...filtered_services].sort ((a, b) => {
    switch (sort_by) {
      case 'name':;
        return a.name.locale_compare (b.name);
      case 'price':;
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':;
        return a.category.locale_compare (b.category);
      default:;
        return 0;    }      default: return 0;
<<<<<<< HEAD
      default:
        return 0;    }      default: return 0
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
  });

  return (
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
        <meta
          name='description'
          content='Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 2025 and beyond.'
        />
        <meta
          name='keywords'
          content='innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group'
        />
        <meta
          property='og:title'
          content='Innovative Services Showcase 2025 - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Comprehensive collection of innovative technology services.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/innovative-services-showcase-2025'
        />
      </Head>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black'></div>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
          <div className='absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500'></div>
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'      </Head>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6'>
              <Star className='w-4 h-4 mr-2' />
              Innovation Showcase 2025
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Innovative Services
              </span>
              <br />
              <span className='text-white'>Showcase</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Discover our comprehensive collection of revolutionary micro SAAS
              AI, healthcare, fintech, and emerging technology services that are
              transforming industries worldwide.            </p>          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovation Showcase 2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovative Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of revolutionary micro SAAS, AI, healthcare, fintech, and emerging technology services that are transforming industries worldwide.
            </p>
          </motion.div>


=======


            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'      </Head>;
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>;
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">;
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>;
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>;
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>;
        </div>;
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6'>;
              <Star className='w-4 h-4 mr-2' />;
              Innovation Showcase 2025;
            </div>;
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Innovative Services;
              </span>;
              <br />;
              <span className='text-white'>Showcase</span>;
            </h1>;
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
              Discover our comprehensive collection of revolutionary micro SAAS,;
              AI, healthcare, fintech, and emerging technology services that are;
              transforming industries worldwide.            </p>          >;
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">;
              <Star className="w-4 h-4 mr-2" />;
              Innovation Showcase 2025;
            </div>;
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                Innovative Services;
              </span>;
              <br />;
              <span className="text-white">Showcase</span>;
            </h1>;
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">;
              Discover our comprehensive collection of revolutionary micro SAAS, AI, healthcare, fintech, and emerging technology services that are transforming industries worldwide.;
            </p>;
          </motion && motion.div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          {/* Stats */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}


<<<<<<< HEAD
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          >

                {serviceCategories.length}
<<<<<<< HEAD
              <div className='text-gray-400>Uptime</div>            </div>          >
              </div>;
              <div className=text-gray-400'>Categories</div>;
            </div>;
            <div className='text-center>;
              <div className=text-3xl md:text-4xl font-bold text-pink-400 mb-2'>;
                24/7;
              </div>;
              <div className='text-gray-400>Support</div>;
            </div>;
            <div className=text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2>;
                99.9%;
              </div>;
              <div className=text-gray-400'>Uptime</div>            </div>          >;


=======
className='mb-8'
              />
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6'    />
              <Star className='w-4 h-4 mr-2'    />
              Innovation Showcase 2025;
=======
              </div>
              <div className='text-gray-400'>Categories</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>
                24/7
              </div>
              <div className='text-gray-400'>Support</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
                99.9%
              </div>
              <div className='text-gray-400'>Uptime</div>            </div>          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {serviceCategories.reduce((total, category) => total + category.services.length, 0)}+
              </div>
              <div className="text-gray-400">Services</div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'    />
              <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'    />
                Innovative Services;
              </span>
              <br    />
              <span className='text-white'    />Showcase</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'    />
              Discover our comprehensive collection of revolutionary micro SAAS;
AI, healthcare, fintech, and emerging technology services that are;
transforming industries worldwide.
            </p>
          </motion.div>

          {/* Stats */}
          <motion&& motion.div;
            initial={{ opacity: 0, y: 30 ,}
}

            animate={{ opacity: 1, y: 0 ,}
}

            transition={{ duration: 0.8, delay: 0.2 ,}
}
className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'
              />
            <div className='text-center'    />
              <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'    />
                {serviceCategories.reduce(
                  (total, category) => total + category.services.length;
0}
}
                )}
                +;
              </div>;
              <div className='text-gray-400'    />Services</div>;
            </div>;
            <div className='text-center'    />;
              <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'    />;
                {serviceCategories.length}

              </div>
              <div className='text-gray-400'    />Categories</div>
            </div>
            <div className='text-center'    />
              <div className='text-3xl md: text-4xl font-bold text-pink-400 mb-2'    />
                24/7;
              </div>
              <div className='text-gray-400'    />Support</div>
            </div>
            <div className='text-center'    />
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'    />
                99.9%
              </div>

              <div className='text-gray-400'    />Uptime</div>
>>>>>>> origin/chore/fix-lint-and-merge
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>;
                {serviceCategories && serviceCategories.reduce(;
                  (total, category) => total + category && category.services.length,;
                  0;
                )}
                +;
              </div>;
              <div className='text-gray-400'>Services</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>;
                {serviceCategories && serviceCategories.length}
              </div>;
              <div className='text-gray-400'>Categories</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-pink-400 mb-2'>;
                24/7;
              </div>;
              <div className='text-gray-400'>Support</div>;
            </div>;
            <div className='text-center'>;
              <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>;
                99 && 99.9%;
              </div>;
              <div className='text-gray-400'>Uptime</div>            </div>          >;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">;
                {serviceCategories && serviceCategories.reduce((total, category) => total + category && category.services.length, 0)}+;
              </div>;
              <div className="text-gray-400">Services</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">;
                {serviceCategories && serviceCategories.length}
              </div>;
              <div className="text-gray-400">Categories</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">;
                24/7;
              </div>;
              <div className="text-gray-400">Support</div>;
            </div>;
            <div className="text-center">;
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">;
                99 && 99.9%;
              </div>;
              <div className="text-gray-400">Uptime</div>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
      {/* Search and Filter Section */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
      {/* Search and Filter Section */}
      <section className='py-16 bg-gradient-to-b from-black to-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Search */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'                />              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <input
                  type="text"
                  placeholder="Search services..."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className=w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"


=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onChange={e => setSearchTerm(e.target.value)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {/* Search and Filter Section *,}
}
<section className='py-16 bg-gradient-to-b from-black to-slate-900'    />;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />;
          <div className='bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8'    />;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'    />;
              {/* Search */}
              <div className='relative'    />;
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5'    />;
                <input;
                  type='text';
                  placeholder='Search services...';
                  value={searchTerm}
                  onChange={e =    /> setSearchTerm(e.target.value)}

                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:border-cyan-500/50'
>>>>>>> origin/chore/fix-lint-and-merge
                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'                />

<<<<<<< HEAD
=======
<<<<<<< HEAD
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'                />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
=======
              </div>

<<<<<<< HEAD
              {/* Category Filter *,}
}
              <div    />;
                <select;
value={selectedCategory}

onChange={e =    /> setSelectedCategory(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus: outline-none focus:border-cyan-500/50'
                >
                  <option value='all'    />All Categories</option>
                  {serviceCategories.map(category => (}
                    <option key={category.id} value={category.id}    />
>>>>>>> origin/chore/fix-lint-and-merge
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              {/* Sort By *,}
}
              <div    />;
                <select;
value={sortBy}
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Category Filter */}
              <div>;
                <select
                  value={selectedCategory}
<<<<<<< HEAD
=======


                  ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD




<<<<<<< HEAD
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">All Categories</option>
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                  onChange={(e) => setSortBy(e.target.value)}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50'
                >
                  <option value='name'>Sort by Name</option>
                  <option value='price'>Sort by Price</option>
                  <option value='category'>Sort by Category</option>                </select>                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
      {/* Services Grid */}
      <section className='py-20 bg-slate-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {sortedServices.map((service, index) => (      <section className="py-20 bg-slate-900">
=======
<<<<<<< HEAD
onChange={e =    /> setSortBy(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus: outline-none focus:border-cyan-500/50'
                >
                  <option value='name'    />Sort by Name</option>
                  <option value='price'    />Sort by Price</option>
                  <option value='category'    />Sort by Category</option>
>>>>>>> origin/chore/fix-lint-and-merge
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

=======
      {/* Services Grid *,}
}
<section className='py-20 bg-slate-900'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'    />
            {sortedServices.map((service, index) => (}
              <motion.div;}
key={service.id}
                initial={{ opacity: 0, y: 30 ,}
}
                whileInView={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              {/* Sort By */}
              <div>;
                <select
                  value={sortBy}


                >;
                  <option value="name">Sort by Name</option>;
                  <option value="price">Sort by Price</option>;
                  <option value="category">Sort by Category</option>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;

=======
      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                viewport={{ once: true }}
>>>>>>> origin/chore/fix-lint-and-merge

className='group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'
                  />

<<<<<<< HEAD
<<<<<<< HEAD
                    {service.name}
                  </h3>;
                  <p className='text-gray-300 text-sm leading-relaxed>                    {service.description}              >;
                  </h3>

=======
                {/* Service Header *,}
}
                <div className='mb-6'    />;
                  <div className='flex items-center justify-between mb-4'    />;
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'    />;
                      <Target className='w-6 h-6 text-white'    />;
=======
              >
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Service Header */}
<<<<<<< HEAD
                className='group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'

              >
                {/* Service Header */}
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'>
                      <Target className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-right'>
                      <div className='text-sm text-gray-400'>
                        {service.category}
                      </div>
                      <div className='text-2xl font-bold text-white'>
                        ${service.pricing?.starter?.price |'Custom'}
                      </div>
                      <div className='text-sm text-gray-400'>/month</div>
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>
                    {service.name}
                  </h3>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >

<<<<<<< HEAD
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}              >
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                                      <div className="text-right">
                    <div className="text-sm text-gray-400">{service.category}</div>
                    <div className="text-2xl font-bold text-white">${service.pricing?.starter?.price |'Custom'}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
      {/* Services Grid */}
      <section className='py - 20 bg - slate - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {sorted_services.map ((service, index) => (      <section className="py - 20 bg - slate - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            {sorted_services.map ((service, index) => (
              <motion.div;
                key={service.id}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg - gradient - to - br from - slate - 800 / 50 to - slate - 700 / 50 border border - slate - 600 / 30 rounded - 2xl p - 6 hover:border - cyan - 500 / 50 transition - all duration - 300 hover:transform hover:scale - 105';
              >;
                {/* Service Header */}
                <div className='mb - 6'>;
                  <div className='flex items - center justify - between mb - 4'>;
                    <div className='w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items - center justify - center'>;
                      <Target className='w - 6 h - 6 text - white' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </div>;
                    <div className='text-right'    />;
                      <div className='text-sm text-gray-400'    />;
                        {service.category}
                      </div>;
                      <div className='text-2xl font-bold text-white'    />;
                        ${service.pricing?.starter?.price |'Custom'}
                      </div>;
                      <div className='text-sm text-gray-400'    />/month</div>;
                    </div>;
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'    />;
                    {service.name}
<<<<<<< HEAD
=======
                  </h3>;
                  <p className='text - gray - 300 text - sm leading - relaxed'>                    {service.description}              >;
                {/* Service Header */}
                <div className="mb - 6">;
                  <div className="flex items - center justify - between mb - 4">;
                    <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - xl flex items - center justify - center">;
                      <Target className="w - 6 h - 6 text - white" />;
                    </div>;
                                      <div className="text - right">;
                    <div className="text - sm text - gray - 400">{service.category}</div>;
                    <div className="text - 2xl font - bold text - white">${service.pricing?.starter?.price || 'Custom'}</div>;
                    <div className="text - sm text - gray - 400">/month</div>;
                  </div>;
                  </div>;
                  <h3 className="text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors">;
                    {service.name}
                  </h3>;
                  <p className="text - gray - 300 text - sm leading - relaxed">;
                    {service.description}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

                  </h3>

<<<<<<< HEAD
                  <p className='text-gray-300 text-sm leading-relaxed'    />

                    {service.description}
                  <p className='text-gray-300 text-sm leading-relaxed'    />                    {service.description}{service.description}</p>;
>>>>>>> origin/chore/fix-lint-and-merge
                </div>;
                {/* Features */}</p>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}

                    {service.description}

                  </p>
                </div>
<<<<<<< HEAD
=======
=======
                <div className='mb-6'>;
                  <div className='flex items-center justify-between mb-4'>;
                    <div className='w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center'>;
                      <Target className='w-6 h-6 text-white' />;
                    </div>;
                    <div className='text-right'>;
                      <div className='text-sm text-gray-400'>;
                        {service && service.category}
                      </div>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service && service.pricing?.starter?.price || 'Custom'}
                      </div>;
                      <div className='text-sm text-gray-400'>/month</div>;
                    </div>;
                  </div>;
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors'>;
                    {service && service.name}
                  </h3>;
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service && service.description}              >;
                {/* Service Header */}
                <div className="mb-6">;
                  <div className="flex items-center justify-between mb-4">;
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">;
                      <Target className="w-6 h-6 text-white" />;
                    </div>;
                                      <div className="text-right">;
                    <div className="text-sm text-gray-400">{service && service.category}</div>;
                    <div className="text-2xl font-bold text-white">${service && service.pricing?.starter?.price || 'Custom'}</div>;
                    <div className="text-sm text-gray-400">/month</div>;
                  </div>;
                  </div>;
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">;
                    {service && service.name}
                  </h3>;
                  <p className="text-gray-300 text-sm leading-relaxed">;
                    {service && service.description}
                  </p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </div>;
                {/* Features */}

<<<<<<< HEAD
<<<<<<< HEAD
                          {feature}
                        </li>;
                      ))}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed>
                    {service.description}
                  </p>
                </div>


                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400>
                    {service.features.length > 3 && (<li className='text-sm text-cyan-400>;
                        +{service.features.length - 3} more features;
                      </li>;
                    {service.features.length > 3 && (<li className=text-sm text-cyan-400'>;
                        +{service.features.length - 3} more features;
                      </li>;
                    )}
=======
=======
=======
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}

                    {service.description}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </p>
                </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
=======

                        {feature}
                      </li>;
                    ))}

                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    )}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>



                  <div>
                    <div className='text-gray-400'>Market Size</div>
                    <div className='text-white font-semibold'>
                      {service.marketSize}
                    </div>
                  </div>
                  <div>
                    <div className='text-gray-400'>Target Audience</div>
                    <div className='text-white font-semibold truncate'>
                      {service.targetAudience}
                    </div>                  </div>
                </div>
<<<<<<< HEAD
                        {feature}
                      </li>;
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </ul>;
                </div>;
                {/* Market Info */}
                <div className=mb-6 grid grid-cols-2 gap-4 text-sm'>

                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm>
=======

<div className='mb-6'    />
                  <h4 className='text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide'    />
                    Key Features;
                  </h4>
                  <ul className='space-y-2'    />
                    {service.features;
                      .slice(0, 3)
                      .map((feature, featureIndex) => (}
                        <li;}
key={featureIndex}
                          className='flex items-center text-sm text-gray-300'    />

                          <CheckCircle className='w-4 h-4 text-cyan-400 mr-2 flex-shrink-0'    />;
                          {feature}
                        </li>;
                      ))}

                    {service.features.length > 3 && (}
                      <li className='text-sm text-cyan-400'    />}
                        +{service.features.length - 3} more features;
                      </li>


                    )}
                  </ul>;
                </div>;
                {/* Market Info */}<div className='mb-6 grid grid-cols-2 gap-4 text-sm'    />;
                {/* Market Info */}

>>>>>>> origin/chore/fix-lint-and-merge

<div className='mb-6 grid grid-cols-2 gap-4 text-sm'    />
                  <div    />
                    <div className='text-gray-400'    />Market Size</div>
                    <div className='text-white font-semibold'    />
                      {service.marketSize}
                    </div>
                  </div>
                  <div    />
                    <div className='text-gray-400'    />Target Audience</div>
                    <div className='text-white font-semibold truncate'    />
                      {service.targetAudience}

                    </div>
                  </div>
                </div>

<<<<<<< HEAD
                {/* Market Info */}
                <div className=mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400>Market Size</div>
                    <div className=text-white font-semibold">{service.marketSize}</div>
                  </div>
                  <div>
                    </div>                  </div>
                </div>
                <div className=mb-6 grid grid-cols-2 gap-4 text-sm'>;
<div className='mb-6 grid grid-cols-2 gap-4 text-sm>;
                  <div>;
                    <div className=text-gray-400'>Market Size</div>;
                    <div className='text-white font-semibold>;
                      {service.marketSize}
                    </div>;
                  </div>;
                  <div>;
                    <div className=text-gray-400'>Target Audience</div>;
                    <div className='text-white font-semibold truncate>;
                      {service.targetAudience}</div>                  </div>;
                </div>;
                {/* CTA */}
<<<<<<< HEAD
                <div className=flex gap-3'>;
                  <a;
                    <div className="text-gray-400>Market Size</div>;
                    <div className=text-white font-semibold">{service.marketSize}</div>;
=======
                <div className='flex gap-3'>;
                  <a

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                      </li>
                    )}
                  </ul>
                </div>
                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>

                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>

                  <div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <div className="text-gray-400">Market Size</div>
                    <div className="text-white font-semibold">{service.marketSize}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Target Audience</div>
                    <div className="text-white font-semibold truncate">{service.targetAudience}</div>
                  </div>
                </div>
                    href={service && service.website}
                    className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'>                  <div>;
                    <div className="text-gray-400">Market Size</div>;
                    <div className="text-white font-semibold">{service && service.marketSize}</div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                  <div>;
                    <div className="text-gray-400>Target Audience</div>;
                    <div className=text-white font-semibold truncate">{service.targetAudience}</div>;
                  </div>;
                </div>;
                    href={service && service.website}
                    className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300>                  <div>;
                    <div className="text-gray-400>Market Size</div>;
                    <div className=text-white font-semibold">{service && service.marketSize}</div>;
                  </div>;
                  <div>;
                    <div className="text-gray-400>Target Audience</div>;
                    <div className=text-white font-semibold truncate">{service && service.targetAudience}</div>;
                  </div>;
                </div>;
                  >;
                    <Mail className="w-5 h-5 />;
                    </div>;
                  </div>;
                </div>;
                {/* CTA */}
<<<<<<< HEAD
                <div className="flex gap-3">
                  <a
                    href={service && service.website}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    Learn More
                  </a>;
                  <a
=======

=======
                {/* CTA */}
<div className='flex gap-3'    />;
                  <a;
                    href={service.website}
                    className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'    />

                    Learn More;
                  </a>;
                  <a;
                    href={`mailto: ${service.contact.email}`}

<<<<<<< HEAD
className='px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300'
                      />
                    <Mail className='w-5 h-5'    />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    href={`mailto:${service.contact.email}`}
                    className='px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300'
                  >
                    <Mail className='w-5 h-5' />                  </a>                    className="px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </a>
                </div>
              </motion.div>

<<<<<<< HEAD
            ),
}
          </div>;
          {sortedServices.length === 0 && (<motion.div;}
=======
            ))}





          {sortedServices.length === 0 && (
            <motion.div
          </div>;

<<<<<<< HEAD
            ))}


          )}

              className="text-center py-20"
          </div>

          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text-center py-20'
            >
              <div className='text-gray-400 text-xl mb-4'>
                No services found
              </div>
              <div className='text-gray-500'>
                Try adjusting your search or filter criteria
              </div>            </motion.div>              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <div className="text-gray-500">Try adjusting your search or filter criteria</div>
            </motion.div>
          )}
=======
          {sortedServices && sortedServices.length === 0 && (;
            <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              initial={{ opacity: 0 }}
>>>>>>> origin/chore/fix-lint-and-merge

              animate={{ opacity: 1 }}

<<<<<<< HEAD

=======
className='text-center py-20'
                />
              <div className='text-gray-400 text-xl mb-4'    />
                No services found;
              </div>
              <div className='text-gray-500'    />
                Try adjusting your search or filter criteria;
              </div>
>>>>>>> origin/chore/fix-lint-and-merge
            </motion.div>
          ,
}


<<<<<<< HEAD
              animate={{ opacity: 1 }}className='text-center py-20;
            >;
              <div className=text-gray-400 text-xl mb-4'>;
                No services found;
              </div>;
              <div className='text-gray-500>;
                Try adjusting your search or filter criteria;
              </div>;
            </motion.div>;
          )}</div>;
      </section>;
        </div>;
      </section>;
<<<<<<< HEAD
            ))}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        </div>
      </section>
              </div>            </motion.div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

            </motion.div>

          )}
        </div>
      </section>

=======
=======
        </div>;
      </section>;
            ))}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 ,}
}
              className='text-center py-20'>;
              <div className='text-gray-400 text-xl mb-4'    />;
                No services found;
              </div>;
              <div className='text-gray-500'    />;
                Try adjusting your search or filter criteria;
              </div>            </motion && motion.div>              className=\"text-center py-20\">

<<<<<<< HEAD
              <div className=\"text-gray-400 text-xl mb-4\"    />No services found</div>;
              <div className=\"text-gray-500\"    />Try adjusting your search or filter criteria</div>;
          )}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-b from-slate-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      {/* Contact Section */}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
<section className='py-20 bg-gradient-to-b from-slate-900 to-black'    />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
          <motion.div;
initial={{ opacity: 0, y: 30 ,}
}
=======



<<<<<<< HEAD
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true ,}
}

<<<<<<< HEAD
<<<<<<< HEAD
className='text-center mb-16''
          >

=======
className='text-center mb-16'
              />
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'    />
=======
            className="text-center mb-16"
          >
            className='text-center mb-16'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Contact our team to learn more about how our innovative services
              can revolutionize your operations and drive growth.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />
              Contact our team to learn more about how our innovative services;
can revolutionize your operations and drive growth.
            </p>
          </motion.div>


          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />
            <motion.div;
className='text-center mb-16'    />;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'    />;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              Contact our team to learn more about how our innovative services;
              can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
<<<<<<< HEAD

=======
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'    />            <motion && motion.div              />;
            <h2 className=\"text-3xl md:text-5xl font-bold text-white mb-6\"    />;
=======
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion && motion.div          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              Ready to Transform Your Business?;
            </h2>;
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
<<<<<<< HEAD
          </motion && motion.div>;initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
=======
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion&& motion.div
<<<<<<< HEAD





=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}

<<<<<<< HEAD

=======
              viewport={{ once: true }}

className='text-center'
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />
                <Phone className='w-8 h-8 text-white'    />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Phone</h3>

<<<<<<< HEAD
              <p className='text-gray-300'    />{contactInfo.mobil,}
}</p>
            </motion.div>
            <motion.div;
className='text-center'    />;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />;
                <Phone className='w-8 h-8 text-white'    />;
=======
<<<<<<< HEAD
              className="text-center"
            >
              className='text-center'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>
            <motion.div
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'    />Phone</h3>;
              <p className='text-gray-300'    />{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4\"    />;
                <Phone className=\"w-8 h-8 text-white\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Phone</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.mobile}</p>;
>>>>>>> origin/chore/fix-lint-and-merge
            </motion && motion.div>;
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
=======
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}

              viewport={{ once: true }}

className='text-center'
            >
<<<<<<< HEAD

<<<<<<< HEAD
=======
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />
                <Mail className='w-8 h-8 text-white'    />
=======
<<<<<<< HEAD
              className="text-center"
            >
              className='text-center'

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Email</h3>

              <p className='text-gray-300'    />{contactInfo.emai,}
}</p>
            </motion.div>
<<<<<<< HEAD
            <motion.div;
className='text-center'    />;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />;
                <Mail className='w-8 h-8 text-white'    />;
=======
            <motion.div
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Mail className='w-8 h-8 text-white' />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'    />Email</h3>;
              <p className='text-gray-300'    />{contactInfo && contactInfo.email}</p>            </motion && motion.div>            >;
              <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4\"    />;
                <Mail className=\"w-8 h-8 text-white\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Email</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.email}</p>;
            </motion && motion.div>;
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 ,}
}
              whileInView={{ opacity: 1, y: 0 ,}
}
=======
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}

              viewport={{ once: true }}

<<<<<<< HEAD
className='text-center'
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'    />
                <MapPin className='w-8 h-8 text-white'    />
=======

<<<<<<< HEAD
              className="text-center"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              className='text-center'

            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Address</h3>
              <p className='text-gray-300'    />{contactInfo.addres,}
}</p>
>>>>>>> origin/chore/fix-lint-and-merge
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD
  )
}
              viewport={{ once: true }}>;
              className='text-center';
className='text-center';
            >;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <MapPin className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>;
              <p className='text-gray-300'>{contactInfo.address}</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  )}}</p>;
=======


  );
}
}
;
}
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

;
=======
  );
>>>>>>> origin/chore/fix-lint-and-merge
}


<<<<<<< HEAD
    </Layout>)}
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
