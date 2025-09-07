
import { motion } from 'framer-motion';'

import { Search, Filter, Star, CheckCircle, ArrowRight;
  }
  Brain, Atom, Shield, Rocket, Target, Microscope;

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
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Phone, Mail, MapPin, TrendingUp, Users, Award;
  Zap, Globe, Cpu, Database, Lock, Cloud;
  Stethoscope, GraduationCap, Leaf, Truck;
  } from 'lucide-react';'
import Layout from '../components/layout/Layout';'

// Import all the new 2025 innovative service data
// Import existing services for comprehensive coverage,
import { realMicroSaasServices2025  } from '../data/2025-real-micro-saas-services';'
import { innovativeAIServices2025  } from '../data/2025-innovative-ai-services';'
import { innovativeITServices2025  } from '../data/2025-innovative-it-services';'
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';'

const contactInfo = null;
];

  const filteredServices = serviceCategories.flatMap(category => 

    category.services.filter(service =>
      (selectedCategory === 'all' |category.id === selectedCategory) &&
      (searchTerm === '' |
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    gradient: 'from-teal-500/20 to-green-500/20',
    badge: 'Popular'
  }
],

export default function InnovativeServicesShowcase2025() {
  }
  const [searchTerm, setSearchTerm] = useState('');'

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

const sortedServices = [...filteredServices].sort((a, b) => {
    }
    switch (sortBy) {
      }
      case 'name':'
       ;
  return a.name.localeCompare(b.name);
      case 'price':'
        return a.pricing.starter.price - b.pricing.starter.price;
      case 'category':'
        return a.category.localeCompare(b.category);

'default':
        return 0;
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

        {/* Background Elements */}

        <div className='absolute inset-0 overflow-hidden pointer-events-none'>'
          <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>'
          <div className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>'
          <div className='absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500'></div>'
        </div>

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
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50'

                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 'focus': outline-none 'focus':border-cyan-500/50''
                <input
                  type="text"
                  placeholder="Search services..."

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


      {/* Search and Filter Section *
}
<section className='py-16 bg-gradient-to-b from-black to-slate-900'>;'
        <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8'>;'
          <div className='bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8'>;'
            <div className='grid grid-cols-1 "md":grid-cols-3 gap-6'>;'
              {/* Search */}
              <div className='relative'>;'
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />;'
                <input;
                  type='text';'
                  placeholder='Search services...';'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"

                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 "focus": outline-none "focus":border-cyan-500/50''
                  onChange={e => setSearchTerm(e.target.value)}

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
                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 'focus':outline-none 'focus':border-cyan-500/50'                />'

                />

              </div>

              {/* Category Filter *
}
              <div>;
                <select,
value={selectedCategory}

onChange={e => setSelectedCategory(e.target.value)}
                  className='w-full px-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white 'focus': outline-none 'focus':border-cyan-500/50''
                >
                  <option value='all'>All Categories</option>'
                />


                </select>
              </div>
      </section>
      {/* Services Grid *
}

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

                  <p className='text-gray-300 text-sm leading-relaxed'>                    {service.description}              >;
                  </h3>

                  <p className='text-gray-300 text-sm leading-relaxed'    />

                    {service.description}
                  <p className='text-gray-300 text-sm leading-relaxed'    />                    {service.description}{service.description}</p>;
                </div>;
                {/* Features */}</p>;
                </div>;
                {/* Features */}



<div className='mb-6'>'
                  <h4 className='text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide'>'
                    Key Features
                  </h4>
                  <ul className='space-y-2'>'
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <li
}
key={featureIndex}
                          className='flex items-center text-sm text-gray-300'>'

                          <CheckCircle className='w-4 h-4 text-cyan-400 mr-2 flex-shrink-0' />;'
                          {feature}
                        </li>;
                      ))}
                  </h3>
                  <p className='text-gray-300 text-sm leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                    {service.features.length > 3 && (
                      <li className='text-sm text-cyan-400'>'
                        +{service.features.length - 3} more features
                      </li>
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
                    <div className='text-gray-400'>Market Size</div>'
                    <div className='text-white font-semibold'>'
                      {service.marketSize}
                    </div>
                  </div>
                  <div>
                    <div className='text-gray-400'>Target Audience</div>'
                    <div className='text-white font-semibold truncate'>'

                      {service.targetAudience}

                    </div>

                {/* Market Info */}
                <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
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
                    <div className='text-gray-400'>Target Audience</div>;
                    <div className='text-white font-semibold truncate'>{service.targetAudience}</div>;
                  </div>;
                </div>;
                    href={service && service.website}
                    className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-center hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'>                  <div>;
                    <div className='text-gray-400'>Market Size</div>;
                    <div className='text-white font-semibold'>{service && service.marketSize}</div>;
                  </div>;
                  <div>;
                    <div className='text-gray-400'>Target Audience</div>;
                    <div className='text-white font-semibold truncate'>{service && service.targetAudience}</div>;
                  </div>;
                </div>;
                  >;
                    <Mail className='w-5 h-5' />;
                    </div>;
                  </div>;
                </div>;
                {/* CTA */}

className='px-4 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl "hover":bg-cyan-500/10 transition-all duration-300''
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>


              animate={{ "opacity": 1 }}

              animate={{ opacity: 1 }}


            </motion.div>
          ,
}

          )}
        </div>
      </section>

              animate={ opacity: 1 }className='text-center py-20';
            >;
              <div className='text-gray-400 text-xl mb-4'>;
                No services found;
              </div>;
              <div className='text-gray-500'>;
                Try adjusting your search or filter criteria;
              </div>;
            </motion.div>;
          )}</div>;
      </section>;
        </div>;
      </section>;
            ))}

              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;initial={{ "opacity": 0, "y": 30 
}
              whileInView={ 'opacity': 1, 'y': 0 
}
              transition={ 'duration': 0 && 0.8, 'delay': 0 && 0.1 }

              viewport={ 'once': true }


className='text-center''
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

              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>'

              <p className='text-gray-300'>{contactInfo.mobil,'
}</p>
            </motion.div>
            <motion.div,
className='text-center'>;'
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;'
                <Phone className='w-8 h-8 text-white' />;'
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'    />Phone</h3>;
              <p className='text-gray-300'    />{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className=\"w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4\"    />;
                <Phone className=\"w-8 h-8 text-white\"    />;
              </div>;
              <h3 className=\"text-xl font-semibold text-white mb-2\"    />Phone</h3>;
              <p className=\"text-gray-300\"    />{contactInfo && contactInfo.mobile}</p>;
            </motion && motion.div>;

              initial={{ "opacity": 0, "y": 30 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.8, "delay": 0 && 0.2 }}

              viewport={{ "once": true }}

className='text-center''
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Email</h3>

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

              initial={{ "opacity": 0, "y": 30 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.8, "delay": 0 && 0.3 }}

              viewport={{ "once": true }}

className='text-center''
            >
              <div className='w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>'
                <MapPin className='w-8 h-8 text-white' />'
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'    />Address</h3>
              <p className='text-gray-300'    />{contactInfo.addres,}
}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
              viewport={ once: true }>;
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
  )}</p>;

;
}

                  </p>;
                </div>;
                {/* Features */}
                <div className='mb - 6'>;
                  <h4 className='text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wide'>;
                    Key Features;
                  </h4>;
                  <ul className='space - y-2'>;
                    {service.features;
                      .slice (0, 3).map ((feature, feature_index) => (<li;
                          key={feature_index}
                          className='flex items - center text - sm text - gray - 300';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - cyan - 400 mr - 2 flex - shrink - 0' />;
                          {feature}
                        </li>))}
                    {service.features.length > 3 && (<li className='text - sm text - cyan - 400'>                        +{service.features.length - 3} more features                <div className='mb - 6'>;
                  <h4 className='text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wide'>Key Features</h4>;
                  <ul className='space - y-2'>;
                    {service.features.slice (0, 3).map ((feature, feature_index) => (<li key={feature_index} className='flex items - center text - sm text - gray - 300'>;
                        <CheckCircle className='w - 4 h - 4 text - cyan - 400 mr - 2 flex - shrink - 0' />;
                        {feature}
                      </li>))}
                    {service.features.length > 3 && (<li className='text - sm text - cyan - 400'>;
                      </li>)}
                  </ul>;
                </div>;
                {/* Market Info */}
                <div className='mb - 6 grid grid - cols - 2 gap - 4 text - sm'>;
                  <div>;
                    <div className='text - gray - 400'>Market Size</div>;
                    <div className='text - white font - semibold'>;
                      {service.market_size}
                    </div>;
                  </div>;
                  <div>;
                    <div className='text - gray - 400'>Target Audience</div>;
                    <div className='text - white font - semibold truncate'>;
                      {service.target_audience}
                    </div>                  </div>;
                </div>;
                {/* CTA */}
                <div className='flex gap - 3'>;
                  <a;
                    href={service.website}
                    className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - xl text - center hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300'                  >                  <div>;
                    <div className='text - gray - 400'>Market Size</div>;
                    <div className='text - white font - semibold'>{service.market_size}</div>;
                  </div>;
                  <div>;
                    <div className='text - gray - 400'>Target Audience</div>;
                    <div className='text - white font - semibold truncate'>{service.target_audience}</div>;
                  </div>;
                </div>;
                {/* CTA */}
                <div className='flex gap - 3'>;
                  <a;
                    href={service.website}
                    className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - xl text - center hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300'                <div className='flex gap - 3'>;
                  <a;
                    href={service.website}
                    className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - xl text - center hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300';
                    Learn More;
                  </a>;
                  <a;
                    href={`mailto:${service.contact.email}`}
                    className='px - 4 py - 3 border border - cyan - 500 / 30 text - cyan - 400 rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300';
                  >;
                    <Mail className='w - 5 h - 5' />                  </a>                    className='px - 4 py - 3 border border - cyan - 500 / 30 text - cyan - 400 rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300';
                  >;
                    <Mail className='w - 5 h - 5' />;
                  </a>;
                </div>;
              </motion.div>))}
          </div>;
          {sorted_services.length === 0 && (<motion.div;
              initial={ opacity: 0 }
              animate={ opacity: 1 }
              className='text - center py - 20';
            >;
              <div className='text - gray - 400 text - xl mb - 4'>;
                No services found;
              </div>;
              <div className='text - gray - 500'>;
                Try adjusting your search or filter criteria;
              </div>            </motion.div>              className='text - center py - 20';
            >;
              <div className='text - gray - 400 text - xl mb - 4'>No services found</div>;
              <div className='text - gray - 500'>Try adjusting your search or filter criteria</div>)}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className='py - 20 bg - gradient - to - b from - slate - 900 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className='py - 20 bg - gradient - to - b from - slate - 900 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>;
          <motion.div;
            initial={ opacity: 0, coordinate_y: 30 }
            whileInView={ opacity: 1, coordinate_y: 0 }
            transition={ duration: 0.8 }
            viewport={ once: true }
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Contact our team to learn more about how our innovative services;
              can revolutionize your operations and drive growth.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>;
            <motion.div;
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8, delay: 0.1 }
              viewport={ once: true }
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Phone className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Phone</h3>;
              <p className='text - gray - 300'>{contact_info.mobile}</p>            </motion.div>            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Phone className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Phone</h3>;
              <p className='text - gray - 300'>{contact_info.mobile}</p>;
            </motion.div>;
            <motion.div;
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8, delay: 0.2 }
              viewport={ once: true }
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Mail className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Email</h3>;
              <p className='text - gray - 300'>{contact_info.email}</p>            </motion.div>            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Mail className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Email</h3>;
              <p className='text - gray - 300'>{contact_info.email}</p>;
            </motion.div>;
            <motion.div;
              initial={ opacity: 0, coordinate_y: 30 }
              whileInView={ opacity: 1, coordinate_y: 0 }
              transition={ duration: 0.8, delay: 0.3 }
              viewport={ once: true }
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <MapPin className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Address</h3>;
              <p className='text - gray - 300'>{contact_info.address}</p>            </motion.div>            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <MapPin className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Address</h3>;
              <p className='text - gray - 300'>{contact_info.address}</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </Layout>);
}

    </Layout>)}

  );
}


    </Layout>)}


