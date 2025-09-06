import React, { useState } from 'react',
import React, { useState } from 'react';
import Head from 'next/head';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import { motion } from 'framer-motion';



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



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
// Import all the new 2025 innovative service data

import { innovativeFinancialServices2025 } from '../data/2025-innovative-financial-services';
import { innovativeHealthcareServices2025 } from '../data/2025-innovative-healthcare-services';
import { innovativeEducationServices2025 } from '../data/2025-innovative-education-services';
import { innovativeSustainabilityServices2025 } from '../data/2025-innovative-sustainability-services';
import { innovativeLogisticsServices2025 } from '../data/2025-innovative-logistics-services';

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
  {
    id: 'financial-technology'
    title: '💰 Financial Technology'
    description: 'Innovative fintech, DeFi, and financial services'
    icon: TrendingUp
    color: 'from-green-500 to-emerald-500'
    services: [...innovativeFinancialServices2025]
    gradient: 'from-green-500/20 to-emerald-500/20'
    badge: 'New'
  },  {    badge: 'New'
  }
  {
    id: 'healthcare-biotech'
    title: '🏥 Healthcare & Biotech'
    description: 'AI-powered healthcare and biotechnology solutions'
    icon: Stethoscope
    color: 'from-blue-500 to-indigo-500'
    services: [...innovativeHealthcareServices2025]
    gradient: 'from-blue-500/20 to-indigo-500/20'
    badge: 'Hot'
  },  {    badge: 'Hot'
  }
  {
    id: 'education-technology'
    title: '🎓 Education Technology'
    description: 'AI-powered learning and educational innovation'
    icon: GraduationCap
    color: 'from-purple-500 to-pink-500'
    services: [...innovativeEducationServices2025]
    gradient: 'from-purple-500/20 to-pink-500/20'
    badge: 'Innovative'
  },  {    badge: 'Innovative'
  }
  {
    id: 'sustainability-green-tech'
    title: '🌱 Sustainability & Green Tech'
    description: 'Environmental technology and sustainability solutions'
    icon: Leaf
    color: 'from-emerald-500 to-teal-500'
    services: [...innovativeSustainabilityServices2025]
    gradient: 'from-emerald-500/20 to-teal-500/20'
    badge: 'Eco-Friendly'
  },  {    badge: 'Eco-Friendly'
  }
  {
    id: 'logistics-supply-chain'
    title: '🚚 Logistics & Supply Chain'
    description: 'Autonomous logistics and supply chain optimization'
    icon: Truck
    color: 'from-orange-500 to-red-500'
    services: [...innovativeLogisticsServices2025]
    gradient: 'from-orange-500/20 to-red-500/20'
    badge: 'Autonomous'
  }
  {
    id: 'ai-consciousness'
    title: '🧠 AI & Consciousness'
    description:
      'Revolutionary AI consciousness and emotional intelligence platforms',    icon: Brain
    color: 'from-violet-500 to-purple-500'
    services: [...innovativeAIServices2025]
    gradient: 'from-violet-500/20 to-indigo-500/20'
    badge: 'Revolutionary'
  },  {    badge: 'Autonomous'
  }
  {
    id: 'ai-consciousness'
    title: '🧠 AI & Consciousness'
    description: 'Revolutionary AI consciousness and emotional intelligence platforms'
    color: 'from-violet-500 to-purple-500'
    services: [...innovativeAIServices2025]
    gradient: 'from-violet-500/20 to-indigo-500/20'
    badge: 'Revolutionary'
  },    badge: 'Revolutionary'
  }
  {
    id: 'quantum-emerging'
    title: '⚛️ Quantum & Emerging Tech'
    description: 'Quantum computing, DNA computing, and beyond'
    icon: Atom
    color: 'from-indigo-500 to-blue-500'
    services: [...emergingTechServices2025]
    gradient: 'from-indigo-500/20 to-cyan-500/20'
    badge: 'Quantum'
  },  {    badge: 'Quantum'
  }
  {
    id: 'enterprise-it'
    title: '🏙️ Enterprise IT'
    description: 'Autonomous operations and zero-trust security'
    icon: Shield
    color: 'from-blue-500 to-cyan-500'
    services: [...innovativeITServices2025]
    gradient: 'from-blue-500/20 to-teal-500/20'
    badge: 'Enterprise'
  },  {    badge: 'Enterprise'
  }
  {

    id: 'micro-saas'
    title: '🎯 Micro SAAS'
    description: 'Innovative solutions for every business need'
    icon: Target
    color: 'from-teal-500 to-green-500'
    services: [...realMicroSaasServices2025]
    gradient: 'from-teal-500/20 to-green-500/20'
    badge: 'Popular'
  },];    badge: 'Popular'
  }
];


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');


  const filteredServices = serviceCategories.flatMap(category => 

    category.services.filter(service =>
      (selectedCategory === 'all' |category.id === selectedCategory) &&
      (searchTerm === '' |
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))

    )

  );
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':
        return a.category.localeCompare(b.category);


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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
  });

  return (





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          {/* Stats */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


          >
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                {serviceCategories.reduce(
                  (total, category) => total + category.services.length
                  0
                )}
                +
              </div>
              <div className='text-gray-400'>Services</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                {serviceCategories.length}
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {serviceCategories.reduce((total, category) => total + category.services.length, 0)}+
              </div>
              <div className="text-gray-400">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {serviceCategories.length}
              </div>
              <div className="text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

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


              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'                />

                />

              </div>


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              {/* Category Filter */}
              <div>;
                <select
                  value={selectedCategory}


                  ))}
                </select>
              </div>


                </select>;
              </div>;



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50'
                >
                  <option value='all'>All Categories</option>                  {serviceCategories.map(category => (                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">All Categories</option>
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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


                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


              >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}              >
                {/* Service Header */}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
                    </div>;
                    <div className='text - right'>;
                      <div className='text - sm text - gray - 400'>;
                        {service.category}
                      </div>;
                      <div className='text - 2xl font - bold text - white'>;
                        ${service.pricing?.starter?.price || 'Custom'}
                      </div>;
                      <div className='text - sm text - gray - 400'>/month</div>;
                    </div>;
                  </div>;
                  <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors'>;
                    {service.name}
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
                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}

                    {service.description}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                  </p>
                </div>

                {/* Features */}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  </p>
                </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />

                        {feature}
                      </li>;
                    ))}

                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    )}
                  </ul>
                </div>
                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>

                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                  <div>

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
                  </div>;
                  <div>;
                    <div className="text-gray-400">Target Audience</div>;
                    <div className="text-white font-semibold truncate">{service && service.targetAudience}</div>;
                  </div>;
                </div>;
                {/* CTA */}

                <div className="flex gap-3">

                  <a
                    href={service && service.website}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"

                  >

                    Learn More
                  </a>;
                  <a

                    href={`mailto:${service.contact.email}`}

                    className='px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300'
                  >
                    <Mail className='w-5 h-5' />                  </a>                    className="px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"

                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>


            ))}
          </div>




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
          {sortedServices.length === 0 && (
            <motion.div


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

      {/* Contact Section */}
      <section className='py-20 bg-gradient-to-b from-slate-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div


            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Contact our team to learn more about how our innovative services;
              can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion && motion.div          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39




>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
              viewport={{ once: true }}
              className='text-center'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>
            <motion.div

              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.mobile}</p>;
            </motion && motion.div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}
              className='text-center'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>
            <motion.div

              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Mail className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.email}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.email}</p>;
            </motion && motion.div>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
              viewport={{ once: true }}
              className='text-center'




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

            >

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>            </motion.div>            >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  );

}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
