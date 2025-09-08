import React, { useState } from 'react';
import Head from 'next / head';


import React, { useState } from 'react';

import Head from 'next/head';
import { motion } from 'framer-motion';

import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 

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
const [selectedCategory, setSelectedCategory] = useState('all');'

const [sortBy, setSortBy] = useState('name');'

const filteredServices = serviceCategories.flatMap(category => { return category.services.filter(
      service =>
        (selectedCategory === 'all' |category.id === selectedCategory) &&'
        (searchTerm === '' |'
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.category.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  ); }

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
      default:
        return 0;    }      default: return 0
    }
  });
return (;
    <Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>
<meta,
name='description''
          content='Discover our comprehensive collection of innovative micro SAAS, AI, healthcare, fintech, and emerging technology services for 2025 and beyond.'' />
        <meta,
name='keywords''
          content='innovative services, micro SAAS, AI services, healthcare technology, fintech, Zion Tech Group'' />
        <meta,
property=''og': title''
          content='Innovative Services Showcase 2025 - Zion Tech Group'' />
        <meta,
property=''og':description''
          content='Comprehensive collection of innovative technology services.'' />
        <meta,
property=''og':url''
          content=''https'://ziontechgroup.com/innovative-services-showcase-2025'' />
      </Head>
      {/* Hero Section *
}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>;'
        <div className='absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black'></div>;'


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

            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
      <section className="py-16 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}


                  onChange={e => setSearchTerm(e.target.value)}

                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'                />

                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
                />
              </div>
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
              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50'><option value='name'>Sort by Name</option>
                  <option value='price'>Sort by Price</option>
                  <option value='category'>Sort by Category</option>                </select>                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="category">Sort by Category</option>
              </div>
              <div className='text-gray-400'>Categories</div>'
            </div>
            <div className='text-center'>'
              <div className='text-3xl "md": text-4xl font-bold text-pink-400 mb-2'>'
                24/7
              </div>
              <div className='text-gray-400'>Support</div>'
            </div>
            <div className='text-center'>'
              <div className='text-3xl "md":text-4xl font-bold text-green-400 mb-2'>'
                99.9%
              </div>

              <div className='text-gray-400'>Uptime</div>'
            </div>
          </motion.div>
        </div>
      </section>
                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 'focus':outline-none 'focus':border-cyan-500/50'                />'

                        {feature}
                      </li>;
                    ))}
                    {service.features.length > 3 && (
                      <li className='text-sm text-cyan-400'>
                    {service.features.length > 3 && (<li className='text-sm text-cyan-400'>;
                        +{service.features.length - 3} more features;
                      </li>;
                    {service.features.length > 3 && (<li className='text-sm text-cyan-400'>;
                        +{service.features.length - 3} more features;
                      </li>;
                    )}
                  </ul>;
                </div>;
                {/* Market Info */}<div className='mb-6 grid grid-cols-2 gap-4 text-sm'>;'
                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>

                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm'>

<div className='mb-6 grid grid-cols-2 gap-4 text-sm'>'
                  <div>
                {/* CTA */}
                <div className='flex gap-3'>;
                  <a
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
                    className="px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
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
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'    />Phone</h3>;
              <p className='text-gray-300'    />{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4\"    />;
                <Phone className=\"w-8 h-8 text-white\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Phone</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.mobile}</p>;
              viewport={{ once: true }}


            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
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

              <p className='text-gray-300'    />{contactInfo.emai,}
}</p>
            </motion.div>

              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>'

              <p className='text-gray-300'>{contactInfo.emai,'
}</p>
            </motion.div>
            <motion.div,
className='text-center'>;'
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;'
                <Mail className='w-8 h-8 text-white' />;'
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'    />Email</h3>;
              <p className='text-gray-300'    />{contactInfo && contactInfo.email}</p>            </motion && motion.div>            >;
              <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4\"    />;
                <Mail className=\"w-8 h-8 text-white\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Email</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.email}</p>;
            </motion && motion.div>;

