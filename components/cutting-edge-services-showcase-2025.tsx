
<<<<<<< HEAD


=======
]

import React, { useState } from 'react';'
import Head from 'next/head';'
import { motion } from 'framer-motion';'
import { Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  }


const container_variants = {
    }
    "hidden": { "opacity": 0
},
    "visible": {
      }
      "opacity": 1,
"transition": {

>>>>>>> origin/cursor/delete-old-data-records-6bba
}
visible: {
  opacity: 1, transition: {
  staggerChildren: 0.1 
}
<<<<<<< HEAD

}
}
const itemVariants = {
  hidden: {
  y: 20, opacity: 0 
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5 
}
}
}
return (<> <Head> <title>Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future Technology Solutions</title> > Cutting-Edge Services <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90" > Showcase 2025 </span> </motion.h1> <motion.p > Discover revolutionary technology solutions that are reshaping industries and defining the future. From AI consciousness to space mining, experience the cutting edge of innovation. </motion.p> {
  /* Hero Stats */ 
}<motion.div </div>) ) 
}</motion.div> {
  /* CTA Buttons */ 
}<motion.div > <a href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25" > Explore Services <ArrowRight className="ml-2 w-5 h-5" /> </a> <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105" > Get Started </a> </motion.div> </motion.div> </div> </section> <button onClick= {
  () => setSelectedCategory ('all') 
}className= {
  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === 'all' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' 
}` 
}> All ({
  allServices.length 
}) </button> {
  serviceCategories.map ( (category) => (<button key= {
  category.title 
}onClick= {
  () => setSelectedCategory (category.title) 
}className= {
  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 $ {
  selectedCategory === category.title ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10' 
}` 
}> {
  category.title 
}({
  category.count 
}) </button>) ) 
}</div> <button onClick= {
  () => setViewMode ('grid') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70' 
}` 
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list') 
}className= {
  `p-2 rounded-lg transition-all duration-300 $ {
  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70' 
}` 
}> <List className="w-5 h-5" /> </button> </div> </motion.div> </div> </section> > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}variants= {
  itemVariants 
}className= {
  `group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 $ {
  viewMode === 'list' ? 'flex flex-col lg:flex-row' : '' 
}` 
}> </p> </div> <div className="ml-4" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center" > <Star className="w-6 h-6 text-cyan-400" /> </div> </div> </div> <span key= {
  tagIndex 
}className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20" > {
  tag 
}</span>) ) 
}</div> </li>) ) 
}</ul> </div> > Learn More <ExternalLink className="ml-1 w-4 h-4" /> </a> <a href="/contact" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105" > Get Started <ArrowRight className="ml-2 w-4 h-4" /> </a> </div> </div> </motion.div>) ) 
}</motion.div> > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-white mb-2" >No services found</h3> <p className="text-white/70 mb-6" >Try adjusting your search terms or category filter</p> <button > Clear Filters </button> </motion.div>) 
}</div> </section> <motion.div initial= {
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
}> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" > Ready to Transform Your Business? </h2> <p className="text-xl text-white/80 mb-8 leading-relaxed" > Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. Let's discuss how we can help you achieve your goals. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8" > <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25" > Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /> </a> <a > <Phone className="mr-2 w-5 h-5" /> Call Now </a> </div> </a> </div> <div className="flex flex-col items-center" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3" > <Mail className="w-6 h-6 text-cyan-400" /> </div> </a> </div> <div className="flex flex-col items-center" > <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3" > <MapPin className="w-6 h-6 text-cyan-400" /> </div> </div> </div> </motion.div> </div> </section> </Layout> </>) 
}
  Brain
  Atom
  Shield
  Rocket
  Star
  Award
  TrendingUp
  CheckCircle
  ArrowRight
  Zap
  Target
  Microscope
  Lock
  Cloud
  BarChart3
  Settings
  Eye
  Code
  Palette
  Search
  Filter
  Grid
  List
  ExternalLink
  Phone
  Mail
  MapPin;} from 'lucide-react';import {




=======
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD




import Layout from '../components/layout/Layout';

import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';





=======
  CheckCircle, ArrowRight, Zap, Target, Microscope;

;
  Brain;
  Atom;
  Shield;
  Rocket;
  Star;
  Award;
  TrendingUp;
  CheckCircle;
  ArrowRight;
  Zap;
  Target;
  Microscope;
  Lock;
  Cloud;
  BarChart3;
  Settings;
  Eye;
  Code;
  Palette;
  Search;
  Filter;
  Grid;
  List;
  ExternalLink;
  Phone;
  Mail;
  MapPin;} from 'lucide-react';import { Brain,Atom,Shield,Rocket,Star,Award,TrendingUp,CheckCircle,ArrowRight,Zap,Target,Microscope,Lock,Cloud,BarChart3,Settings,Eye,Code,Palette,Search,Filter,Grid,List,ExternalLink,Phone,Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;import React, { useState  } from 'react';
import Head from 'next/head';
import { motion  } from 'framer-motion';
import { Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;CheckCircle, ArrowRight, Zap, Target, Microscope;
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;
 } from 'lucide-react';'
import Layout from '../components/layout/Layout';'

import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';'
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';'
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';'
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';'

const contactInfo = null;
];

const serviceCategories = [
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    gradient: 'bg-gradient-to-r from-violet-500 to-purple-600',
    count: cuttingEdgeAIServices2025.length
  };
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    gradient: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    count: cuttingEdgeQuantumServices2025.length
  };
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length
  };
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,
>>>>>>> origin/cursor/delete-old-data-records-6bba

    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
<<<<<<< HEAD
    ...cuttingEdgeMicroSaasServices2025
  ];
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||



=======
    color: 'from-teal-500 to-emerald-600',
    gradient: 'bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length
  }
];

export default function CuttingEdgeServicesShowcase2025() {
  }
  const [searchTerm, setSearchTerm] = useState('');'

const [selectedCategory, setSelectedCategory] = useState('all');'

const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');'

const allServices = [;

...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ];

const filteredServices = allServices.filter((service) => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory
  });

<<<<<<< HEAD

const filteredServices = allServices.filter(service => {

   ;
  const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;}
    return matchesSearch && matchesCategory;}
  });

const containerVariants = {}
    hidden: { opacity: 0,}
}

;

export default /**
 * CuttingEdgeServicesShowcase2025 - Function description;
 */
function CuttingEdgeServicesShowcase2025() {
  const [search_term, setSearchTerm] = useState ('');

const [selected_category, setSelectedCategory] = useState ('all');

const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');
;

const all_services = [
  ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025,
  ];
;

const filtered_services = all_services.filter (service => {
   ;
=======
const container_variants = {
    }
    "hidden": { "opacity": 0

   ;
}
const matchesSearch =;
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tags.some(tag => { return tag.toLowerCase().includes(searchTerm.toLowerCase())
      ); }

const matchesCategory =;
      selectedCategory === 'all' || service.category === selectedCategory;'
    return matchesSearch && matchesCategory;
  });

const containerVariants = {
    }
    'hidden': { 'opacity': 0
}
;

export default /**
 * CuttingEdgeServicesShowcase2025 - Function description
 */
function CuttingEdgeServicesShowcase2025() {
  }
  const [search_term, setSearchTerm] = useState ('');'

const [selected_category, setSelectedCategory] = useState ('all');'

const [view_mode, setViewMode] = useState<'grid' | 'list'>('grid');'
;

const all_services = [;
  ...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ];
;

const filtered_services = all_services.filter ((service) => {
   ;
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const matches_search =;

      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tags.some (tag =>;
<<<<<<< HEAD
        tag.toLowerCase ().includes (search_term.toLowerCase ()))const matches_category =;}
      selected_category === 'all' || service.category === selected_category;}
    return matches_search && matches_category;  })const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tags.some (tag = > tag.toLowerCase ().includes (search_term.toLowerCase ());
  const matches_category = selected_category === 'all' || service.category === selected_category;
    return matches_search && matches_category;

  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {

      },
    }}


"duration": 0.5
      }
    }
  }

      },
    }}



  };



  return (
    <>

      <Head><title>
          Cutting-Edge Services Showcase 2025 - Zion Tech Group | Future;
Technology Solutions;
        </title>
        <meta;
name='description'
          content='Explore our revolutionary cutting-edge services including AI consciousness, quantum computing, space mining, and advanced enterprise solutions. Transform your business with future technology.'
           />
        <meta;
name='keywords'
          content='cutting-edge services, AI consciousness, quantum computing, space mining, enterprise IT, micro SAAS, future technology'
           />
        <meta name='viewport' content='width=device-width, initial-scale=1'    />
        <link rel='icon' href='/favicon.ico'    />

      </Head>

      <Layout    />

        {/* Hero Section */}

<section className='relative overflow-hidden'    />;
          <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black'    /></div>;
          <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'    />;
            <motion.div;
              initial={{ opacity: 0, y: 30 ,}
=======
        tag.toLowerCase ().includes (search_term.toLowerCase ()))const matches_category =;
      selected_category === 'all' || service.category === selected_category;'
    return matches_search && matches_category;  })const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.description.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tags.some (tag = > tag.toLowerCase ().includes (search_term.toLowerCase ());
  const matches_category = selected_category === 'all' || service.category === selected_category;'
    return matches_search && matches_category;
  }),

const container_variants = {
    }
    'hidden': { 'opacity': 0
},
    'visible': {
      }
      'opacity': 1,
'transition': {

}

'staggerChildren': 0.1
      }
    }
  };

const itemVariants = {
    }
    'hidden': { 'y': 20, 'opacity': 0
},
    'visible': {
      }
      'y': 0,
      'opacity': 1,
      'transition': {
}
'duration': 0.5
      }
    }
  };

return (;
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

className='text-center''
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

<span className='block text-2xl 'md':text-3xl 'lg':text-4xl mt-4 text-white/90'>'
                  Showcase 2025
                </span>
              </motion.h1>
              <motion.p,
className='text-xl 'md':text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed''
                initial={ 'opacity': 0, 'y': 20 
"staggerChildren": 0.1
      }
  };

const itemVariants = {
    }
    "hidden": { "y": 20, "opacity": 0
},
    "visible": {
      }
      "y": 0,
      "opacity": 1,
      "transition": {
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
                animate={ 'opacity': 1, 'y': 0 
}
                transition={ 'duration': 0.8, 'delay': 0.4 
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

className='text-center'
                />
              <motion.h1;
className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'
                initial={{ opacity: 0, scale: 0.9 ,}
}
                animate={{ opacity: 1, scale: 1 ,}
}
                transition={{ duration: 1, delay: 0.2 ,}
}
                  />
                Cutting-Edge Services;
<span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'    />
                  Showcase 2025;
<<<<<<< HEAD

                </span>
              </motion.h1>



                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >

              <motion.p;
className='text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed'
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0.8, delay: 0.4 ,}
}
                  />


=======
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

return (;
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
          <div className='relative z-10 max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8 py-24 "lg":py-32'>;'
            <motion.div;
              initial={{ "opacity": 0, "y": 30 
}
              animate={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0.8 
}

className='text-center''
            >
              <motion.h1,
className='text-4xl "md":text-6xl "lg":text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6''
                initial={{ "opacity": 0, "scale": 0.9 
}
                animate={{ "opacity": 1, "scale": 1 
}
                transition={{ "duration": 1, "delay": 0.2 
}
              >
                Cutting-Edge Services

<span className='block text-2xl "md":text-3xl "lg":text-4xl mt-4 text-white/90'>'
                  Showcase 2025
                </span>
              </motion.h1>
              <motion.p,
className='text-xl "md":text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed''
                initial={{ "opacity": 0, "y": 20 
}
                animate={{ "opacity": 1, "y": 0 
}
                transition={{ "duration": 0.8, "delay": 0.4 
}
              >

Discover revolutionary technology solutions that are reshaping,
industries and defining the future. From AI consciousness to,
space mining, experience the cutting edge of innovation.
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
              <motion.div 
                className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12'
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: 0.6 }
              >
                {heroStats.map((stat, index) => (

                  <div key={index} className='text-center'>
                    <div className='flex justify-center mb-2'>
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
<<<<<<< HEAD


                  <div key={index} className='text-center'>
                    <div className='flex justify-center mb-2'>
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>

                        {stat.icon}
                    </div>




=======
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                        {stat.icon}
                    </div>

                    <div className='text-sm text-white/70'>{stat.label}</div>'
                  </div>

                className='flex flex-col sm:flex-row gap-4 justify-center'
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  </div>
                    </div>;
                className='flex flex-col sm:flex-row gap-4 justify-center'                initial={ opacity: 0, y: 20 }              <motion.div;
                className='flex flex-col sm:flex-row gap-4 justify-center';
                    <div className='text-sm text-white/70'>{stat.label}</div>                  </div>;
                  </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                ))}
              </motion.div>;
              {/* CTA Buttons */}


<<<<<<< HEAD
=======
<motion.div,
className='flex flex-col "sm":flex-row gap-4 justify-center''
                initial={{ "opacity": 0, "y": 20 
}
                animate={{ "opacity": 1, "y": 0 
}
                transition={{ "duration": 0 && 0.8, "delay": 0 && 0.8 
}>;
                <a,
href='#services''
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full "hover": from-cyan-600 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105 shadow-lg "hover":shadow-cyan-500/25''
                >
                  Explore Services
                  <ArrowRight className='ml-2 w-5 h-5' />'
                </a>
                <a,
href='/contact''

>>>>>>> origin/cursor/delete-old-data-records-6bba
<motion.div;
className='flex flex-col sm:flex-row gap-4 justify-center'
                initial={{ opacity: 0, y: 20 ,}
}
                animate={{ opacity: 1, y: 0 ,}
}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.8 ,}
}    />;
                <a;
href='#services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover: from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                    />
                  Explore Services;
                  <ArrowRight className='ml-2 w-5 h-5'    />
                </a>
                <a;
href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'
                    />
                  Get Started;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </a>
              </motion.div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Search and Filter Section *,}
}
<section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
            <motion.div;
className='flex flex-col lg:flex-row gap-6 items-center justify-between'
              initial={{ opacity: 0, y: 20 ,}
}

=======
        {/* Search and Filter Section *
}
<section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>'
          <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8'>'
            <motion.div,
className='flex flex-col "lg":flex-row gap-6 items-center justify-between''
              initial={{ "opacity": 0, "y": 20 
}
              whileInView={{ "opacity": 1, "y": 0 }}
              transition={{ "duration": 0 && 0.6 }}
              viewport={{ "once": true 
}>;
              {/* Search */}

<div className='relative flex-1 max-w-md'>'
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />'
                <input,
type='text''
                  placeholder='Search services...''
                  value={searchTerm}
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;
                <button
              <div className='flex flex-wrap gap-2'>                <button

                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 "focus": outline-none "focus":border-cyan-500 "focus":ring-2 "focus":ring-cyan-500/20 transition-all duration-300''
>>>>>>> origin/cursor/delete-old-data-records-6bba
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: 0 && 0.8 }}>;
                <a

<<<<<<< HEAD


                <a
                  href="/contact"

        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">;
                  Get Started;
                </a>;
              </motion && motion.div>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Search and Filter Section */}
        <section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <motion&& motion.div
              className='flex flex-col lg:flex-row gap-6 items-center justify-between'              initial={{ opacity: 0, y: 20 }}        <section className="py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20">;
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div 


              className="flex flex-col lg:flex-row gap-6 items-center justify-between"




              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.6 }}
              viewport={{ once: true ,}
}    />;
              {/* Search */}




                <input
                  type='text'

                  placeholder='Search services...'
                  value={searchTerm}



=======
                  href='#services'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                >
                  Explore Services
                  <ArrowRight className='ml-2 w-5 h-5' />
                </a>
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'                >                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section *
}
<section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'>'
          <div className='max-w-7xl mx-auto px-4 'sm':px-6 'lg':px-8'>'
            <motion.div,
className='flex flex-col 'lg':flex-row gap-6 items-center justify-between''
              initial={ 'opacity': 0, 'y': 20 
}
              whileInView={ 'opacity': 1, 'y': 0 }
              transition={ 'duration': 0 && 0.6 }
              viewport={ 'once': true 
}>;
              {/* Search */}

<div className='relative flex-1 max-w-md'>'
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5' />'
                <input,
type='text''
                  placeholder='Search services...''
                  value={searchTerm}
                  type='text'
                  placeholder='Search services...'
                  value={searchTerm}
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className='flex flex-wrap gap-2'>;
                <button
              <div className='flex flex-wrap gap-2'>                <button


                  onChange={e => setSearchTerm(e && e.target.value)}
                  className='w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300'                />;
              </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
<<<<<<< HEAD


                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300";
                />;
              </div>;


              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;



=======
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;
                <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <div className='flex flex-wrap gap-2'>                <button


                />
              </div>

              {/* Category Filter */}


<<<<<<< HEAD
<div className='flex flex-wrap gap-2'    />
                <button;
onClick={() =    /> setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'}
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}
                  }`}



=======
                <button



                <button

>>>>>>> origin/cursor/delete-old-data-records-6bba
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${;
                    selectedCategory === 'all';
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';
                  }`}
<<<<<<< HEAD



                >
                  All ({allServices.length})
                </button>

{serviceCategories.map(category => (}
                  <button;}
key={category.title}
                    onClick={() =    /> setSelectedCategory(category.title,}
=======
                >
                  All ({allServices.length})
                </button>
                {serviceCategories.map((category) => (
                  <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
key={category.title}
                    onClick={() => setSelectedCategory(category.title
}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.title;`                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';'
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 'hover':bg-cyan-500/10';'
                    }
                    key={category && category.title}
                    onClick={() => setSelectedCategory(category && category.title)}
<<<<<<< HEAD
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category && category.title;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';}
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10';}
                    }`}>








                    key={category.title}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.title
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
                    }`}>{category.title} ({category.count})
                  </button>
                ))}


              </div>
              {/* View Mode Toggle */}

                <button






                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';

=======
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category && category.title;`                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white';'
                        : 'bg-black/50 border border-cyan-500/30 text-cyan-400 'hover':bg-cyan-500/10';'
                    }`}>`


                    {category && category.title} ({category && category.count});
                  </button>;
                ))}
              </div>

              {/* View Mode Toggle */}
<div className='flex items-center gap-2'>'
                <button,
onClick={() => setViewMode('grid')}'
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';'
                      : 'bg-black/50 text-white/70 'hover':text-white 'hover':bg-black/70';'






                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';}
}
                  }`}

<<<<<<< HEAD


                <button
                  onClick={() => setViewMode('list')}

=======
                <button
                  onClick={() => setViewMode('list')}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'list';
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';}
                      : 'bg-black/50 text-white/70 hover:text-white hover:bg-black/70';}
                  }`}
<<<<<<< HEAD



=======
                >
                  <List className='w-5 h-5' />                </button>                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}

<List className='w-5 h-5'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Services Grid */}

<<<<<<< HEAD
<section;
id='services'
          className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'
            />
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'    />
            <motion.div;
variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-6'}
             ,}

}
                />
              {filteredServices.map((service, index) => (}
                <motion.div;}
key={service.id}


              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}





                  variants={itemVariants}

                  className={`group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-black/80 via-purple-900/10 to-black/80 backdrop-blur-sm hover: border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${}
                    viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''}
                  }`}    />

                  {/* Service Header */}
                  <div
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}><div className='flex items-start justify-between mb-4'>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>
                          {service.name}

=======

                          {service.nam
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </h3>;
                        <p className='text - white / 70 text - sm leading - relaxed'    />;
                          {service.description}</h3>;
                        <p className=\"text-white/70 text-sm leading-relaxed\"    />;
<<<<<<< HEAD

                          {service.description}



                        </p>
                      </div>

=======
                          {service.description}
                        </p>
                      </div>
                      <div className='ml-4'>'
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>'
                          <Star className='w-6 h-6 text-cyan-400' />'
                        </div>

                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />;
                        </div>;
                      </div>;
                    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    className={`p-6 ${viewMode === 'list' ? 'lg:w-1/3' : ''}`}>;
                    <div className='flex items-start justify-between mb-4'>;
                      <div className='flex-1'>;
                        <h3 className='text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed'>;
                          {service && service.description}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />                        </div>                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed'>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />;
                        </div>;
                      </div>;
                    </div>;className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'                        >;
                        >;
                        </p>;
                      </div>;
                      <div className='ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center'>;
                          <Star className='w-6 h-6 text-cyan-400' />;
                        </div>;
                      </div>;
                    </div>;
                    {/* Tags */}
<<<<<<< HEAD



                    {/* Tags */}
<div className='flex flex-wrap gap-2 mb-4'    />;
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (<span;}
                          key={tagIndex}


                        >


=======
<div className='flex flex-wrap gap-2 mb-4'>;'
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (<span;
                          }
                          key={tagIndex}

                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20''
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Market Info */}
                    <div className='flex items-center justify-between text-sm text-white/60 mb-4'>
                      <span>Market: {service.marketSize}</span>
                          className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20';
                        >;
                          {tag}
                        </span>;
                      ))}{/* Market Info */}
<div className='flex items-center justify-between text-sm text-white/60 mb-4'>;
                      <span>Market: {service.marketSize}</span>;
                      <span className='text-cyan-400'>{service.category}</span>                    </div>;
                      <span className='text-cyan-400'>{service.category}</span>                    </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba

                          {tag}
                        </span>;
                      ))}






<<<<<<< HEAD
=======
                    {/* Market Info */}
<div className='flex items-center justify-between text-sm text-white/60 mb-4'>'
                      <span>'Market': {service.marketSize}</span>

                      <span className='text-cyan-400'>{service.category}</span>'
                    </div>
                  </div>

                  {/* Service Details *
}
<div;
                    className={`px-6 pb-6 ${viewMode === 'list' ? ''lg': w-2/3' : ''},'
}>

                    <div className='mb-6'>;'
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;'
                        Key Features;
                      </h4>;
                      <ul className='space-y-2'>;'
                        {service.features;
                          .slice(0, 3).map((feature, featureIndex) => (<li;
                              }
                              key={featureIndex}
                              className='flex items-start text-sm text-white/80'>'

                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0' />;'
                              <span>{feature}</span>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                            </li>;
                          ))}
                          .slice(0, 3);
                          .map((feature, featureIndex) => (;
                            <li
                              key={featureIndex}
                              className='flex items-start text-sm text-white/80'><CheckCircle className='w-4 h-4 text-cyan-400 mt-0.5 mr-2 flex-shrink-0' />
                              <span>{feature}</span>
                            </li>
                          ))}                      </ul>
                    </div>

<<<<<<< HEAD

                              className='flex items-start text-sm text-white/80'>;
                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0 && 0.5 mr-2 flex-shrink-0'    />;
                              <span    />{feature}</span>;
                            </li>;
                          ))}                      </ul>;




                            </li>))}                      </ul>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>                      <ul className="space - y-2">;
                        {service.features.slice (0, 3).map ((feature, feature_index) => (
                          <li key={feature_index} className="flex items - start text - sm text - white / 80">;
                            <CheckCircle className="w - 4 h - 4 text - cyan - 400 mt - 0.5 mr - 2 flex - shrink - 0" />;
                            <span>{feature}</span>;
                          </li>))}
                    </div>;
=======
                              className='flex items-start text-sm text-white/80'>;'
                              <CheckCircle className='w-4 h-4 text-cyan-400 mt-0 && 0.5 mr-2 flex-shrink-0' />;'
                              <span>{feature}</span>;
                            </li>;
                          ))}                      </ul>;
                      <span className='text-cyan-400'>{service.category}</span>
                    </div>
                  </div>

                    </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    {/* Pricing */}

<div className='mb-6'>'
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>'
                        Starting From
                      </h4>
                      <div className='text-2xl font-bold text-white'>'
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;'
                          /{service.pricing.starter.period}
<<<<<<< HEAD
                      </h4>
                      <div className="text-2xl font-bold text-white>
                        ${service.pricing.starter.price}
                        <span className=text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>


                        className='inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors duration-300 text-sm font-medium'
                          />
                        Learn More;
                        <ExternalLink className='ml-1 w-4 h-4'    />
                      </a>
                      <a;
href='/contact'
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105'
                          />
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4'    />
                      </a>
                    </div>
                  </div>

                  {/* Service Details *,}
}




                      </div>
                    </div>
                    </div>;
=======

                        </span>
                      </div>
                    </div>

>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {/* Pricing */}
                    <div className='mb-6'>
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>
                        Starting From
                      </h4>
                      <div className='text-2xl font-bold text-white'>
                        ${service.pricing.starter.price}
                        <span className='text-sm font-normal text-white/60'>/{service.pricing.starter.period}</span>
                      </div>
                    </div>
                    </div>;{/* Pricing */}{/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;<div className='mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}</h4>;
                      <div className='text-2xl font-bold text-white'>;
                        ${service.pricing.starter.price}
                        <span className='text-sm font-normal text-white/60'>/{service.pricing.starter.period}</span>;
                        </span>;
                      </div>;
                    </div>;
                    {/* CTA */}
<<<<<<< HEAD
=======
<div className='flex items-center justify-between'>;'
                      <a;
                        href={service.website}
                    {/* Pricing */}
                    <div className='mb - 6'>;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}
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
                      </a>
                    </div>
                  </div>

                  {/* Service Details *
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

                      </div>

<<<<<<< HEAD

=======
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium';
                      >;
                        Learn More;
                        <ExternalLink className='ml-1 w-4 h-4' />;
                      </a>;
                      <a;
                        href='/contact';
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105';
                      >;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4' />;
                      </a>;
                    </div>;
                  </div>;
<<<<<<< HEAD


=======
                  {/* Service Details */}</div>;
                    </div>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb-6'>;'
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'>;'
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'>;'
                        ${service && service.pricing.starter && starter.price}
                        <span className='text-sm font-normal text-white/60'>;'
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg 'hover':from-cyan-600 'hover':to-purple-700 transition-all duration-300 transform 'hover':scale-105'>;'
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4' />;'

>>>>>>> origin/cursor/delete-old-data-records-6bba

                    </div>;
                    {/* Pricing */}
                    <div className='mb-6'    />;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider'    />;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white'    />;
                        ${service && service.pricing.starter && starter.price}
                        <span className='text-sm font-normal text-white/60'    />;
                          /{service && service.pricing.starter && starter.period}
                        </span>                      </div>;
                    </div>;
                        className=\"inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105\">;
                        Get Started;
                        <ArrowRight className=\"ml-2 w-4 h-4\"    />;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      </a>;
                    </div>;


                  {/* Hover Effect Overlay */}
<<<<<<< HEAD

                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>




=======

                  <div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </motion && motion.div>;



<<<<<<< HEAD
=======
<div className='absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover: opacity-100 transition-opacity duration-500 pointer-events-none'    />
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </motion.div>
              ),
}

<<<<<<< HEAD

            </motion && motion.div>;






=======
            </motion && motion.div>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
}
initial={ 'opacity': 0 }
                animate={ 'opacity': 1 
}


<<<<<<< HEAD


                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}

                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300'                >              >;
                <div className="text-6xl mb-4">🔍</div>;
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>;
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>;


              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-white/70 mb-6">Try adjusting your search terms or category filter</p>



                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all')
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

=======
className='text-center py-20''
              >
                <div className='text-6xl mb-4'>🔍</div>'
                <h3 className='text-2xl font-bold text-white mb-2'>'
                  No services found
                </h3>
                <p className='text-white/70 mb-6'>'
                  Try adjusting your search terms or category filter
                </p>
                <button,
onClick={() => {
                    }
                    setSearchTerm('');'
                    setSelectedCategory('all');'
                  }

                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg 'hover': from-cyan-600 'hover':to-purple-700 transition-all duration-300''
                    setSelectedCategory('all')'
                  
}


className='text-center py-20'
                  />
                <div className='text-6xl mb-4'    />🔍</div>
                <h3 className='text-2xl font-bold text-white mb-2'    />
                  No services found;
                </h3>
                <p className='text-white/70 mb-6'    />
                  Try adjusting your search terms or category filter;
                </p>
                <button;
onClick={() =    /> {
                    setSearchTerm('');}
                    setSelectedCategory('all');}
                  }}

                  className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover: from-cyan-600 hover:to-purple-700 transition-all duration-300'
                    setSelectedCategory('all')
                  ,
}

                  className=\"px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300\">

                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}

        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-br from-black via-purple-900/20 to-black'>;
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>            <motion && motion.div        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">;
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">;
            <motion&& motion.div
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div




              initial={{ opacity: 0, y: 30 }}
<<<<<<< HEAD

              whileInView={{ opacity: 1, y: 0 }}




=======
              whileInView={{ opacity: 1, y: 0 }}


              transition={{ "duration": 0.8 }}
              viewport={{ "once": true 
}
            >
<h2 className='text-3xl "md":text-4xl font-bold text-white mb-6'>'
                Ready to Transform Your Business?
>>>>>>> origin/cursor/delete-old-data-records-6bba
              </h2>
              <p className='text-xl text-white/80 mb-8 leading-relaxed'    />
                Our cutting-edge services are designed to give you a competitive;
advantage in the rapidly evolving technology landscape. Let's;
discuss how we can help you achieve your goals.
              </p>
<<<<<<< HEAD

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  href={`tel:${contactInfo && contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'>;
                  <Phone className='mr-2 w-5 h-5' />                  Call Now                Ready to Transform Your Business?;
              </h2>;
              <p className="text-xl text-white/80 mb-8 leading-relaxed">;
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape. ;
                Let's discuss how we can help you achieve your goals.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;

                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;

                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5'    />;
                </a>;

                <a

=======
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'    />
                <a;
href='/contact'

                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'    />;
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;
                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5'    />;
                </a>;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}
<div className='grid grid-cols-1 'md':grid-cols-3 gap-6 text-center'>;'
                <div className='flex flex-col items-center'>;'
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;'
                    <Phone className='w-6 h-6 text-cyan-400' />;'
                  </div>;
                  <div className='text-white font-semibold'>Phone</div>;'

                <a;
href={`tel: ${contactInfo.mobile},
}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'    />

                  <Phone className='mr-2 w-5 h-5'    />;
                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}

                  <a;
                    href={`'tel': ${contactInfo.mobile}`}`                    className='text-cyan-400 'hover':text-cyan-300 transition-colors duration-300'>'

                    {contactInfo.mobil
}
                  </a>;
                </div>;
                <div className='flex flex-col items-center'>;'
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>;'
                    <Mail className='w-6 h-6 text-cyan-400' />;'
                  </div>;
                  <div className='text-white font-semibold'>Email</div>;'
                  <a;
                    href={`'mailto': ${contactInfo.email}`}`
                    className='text-cyan-400 'hover':text-cyan-300 transition-colors duration-300'>'

                    {contactInfo.email}
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
                <a
                  href='/contact'
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className='ml-2 w-5 h-5' />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className='inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105'
                >
                  <Phone className='mr-2 w-5 h-5' />                  Call Now                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our cutting-edge services are designed to give you a competitive advantage in the rapidly evolving technology landscape.
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"><Phone className="mr-2 w-5 h-5" />
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className='flex flex-col items-center'>'
                  <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3'>'
                    <MapPin className='w-6 h-6 text-cyan-400' />'
                  </div>
<<<<<<< HEAD
                  <div className="text-white font-semibold>Address</div>
                  <div className=text-white/70 text-sm">{contactInfo.address}</div>

=======
                  <div className='text-white font-semibold'>Address</div>'
                  <div className='text-white/70 text-sm'>'
                    {contactInfo.addres
}
                  </div>
                  <div className='text-white font-semibold'>Address</div>
                  <div className='text-white/70 text-sm'>{contactInfo.address}</div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  );

const matchesSearch = service.name.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) ||;
  const containerVariants = {
<<<<<<< HEAD


  duration: 0.5 







=======
  }
  'hidden': {
  }
  'opacity': 0

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


"visible": {
  }
  "y": 0, "opacity": 1, "transition": {

  }

  "duration": 0.5 


};

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


  duration: 0.5 


  y: 0, opacity: 1, transition: {
  duration: 0.5
};}
  duration: 0.5 

};
};}
};
>>>>>>> origin/cursor/delete-old-data-records-6bba
