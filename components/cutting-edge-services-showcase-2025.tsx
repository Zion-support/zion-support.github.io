

  CheckCircle, ArrowRight, Zap, Target, Microscope;
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
  MapPin;} from lucide-react';import { Brain,Atom,Shield,Rocket,Star,Award,TrendingUp,CheckCircle,ArrowRight,Zap,Target,Microscope,Lock,Cloud,BarChart3,Settings,Eye,Code,Palette,Search,Filter,Grid,List,ExternalLink,Phone,Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;import React, { useState  } from 'react;
import Head from next/head';
import { motion  } from 'framer-motion;
import { Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;CheckCircle, ArrowRight, Zap, Target, Microscope;
import React, { useState } from react';
import Head from 'next/head;
import { motion } from framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Star, Award, TrendingUp;
  CheckCircle, ArrowRight, Zap, Target, Microscope;
  Lock, Cloud, BarChart3, Settings, Eye, Code, Palette;

];

const serviceCategories = [
  {
    title: 'AI & Consciousness,
    description: Revolutionary AI platforms with consciousness and emotional intelligence',
    services: cuttingEdgeAIServices2025,
    icon: Brain,
    color: 'from-violet-500 to-purple-600,
    gradient: bg-gradient-to-r from-violet-500 to-purple-600',
    count: cuttingEdgeAIServices2025.length
  }
  {
    title: 'Quantum & Emerging Tech,
    description: Breakthrough quantum computing and space technology solutions',
    services: cuttingEdgeQuantumServices2025,
    icon: Atom,
    color: 'from-indigo-500 to-blue-600,
    gradient: bg-gradient-to-r from-indigo-500 to-blue-600',
    count: cuttingEdgeQuantumServices2025.length
  }
  {
    title: 'Enterprise IT,
    description: Advanced enterprise infrastructure and security solutions',
    services: cuttingEdgeEnterpriseITServices2025,
    icon: Shield,
    color: 'from-blue-500 to-cyan-600,
    gradient: bg-gradient-to-r from-blue-500 to-cyan-600',
    count: cuttingEdgeEnterpriseITServices2025.length
  }
  {
    title: 'Micro SAAS,
    description: Innovative business solutions for modern enterprises',
    services: cuttingEdgeMicroSaasServices2025,
    icon: Rocket,

    ...cuttingEdgeAIServices2025;
    ...cuttingEdgeQuantumServices2025;
    ...cuttingEdgeEnterpriseITServices2025;
    color: 'from-teal-500 to-emerald-600,
    gradient: bg-gradient-to-r from-teal-500 to-emerald-600',
    count: cuttingEdgeMicroSaasServices2025.length
  }
];

export default function CuttingEdgeServicesShowcase2025() {


const [selectedCategory, setSelectedCategory] = useState('all');'

const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');'

const allServices = [;

...cuttingEdgeAIServices2025,
    ...cuttingEdgeQuantumServices2025,
    ...cuttingEdgeEnterpriseITServices2025,
    ...cuttingEdgeMicroSaasServices2025
  ];



const container_variants = {
    }
    "hidden": { "opacity": 0
},
    "visible": {
      }
      "opacity": 1,
"transition": {

}

"staggerChildren": 0.1
      }
    }
  }

const itemVariants = {
    }
    "hidden": { "y": 20, "opacity": 0
},
    "visible": {
      }
      "y": 0,
      "opacity": 1,
      "transition": {
}
"duration": 0.5
      }
    }
  }

return (;
    <>
      <Head>

      </Head>

      <Layout>

        {/* Hero Section */}

              >

Discover revolutionary technology solutions that are reshaping,
industries and defining the future. From AI consciousness to,
space mining, experience the cutting edge of innovation.
              </motion.p>
              {/* Hero Stats */}
              <motion.div,
className='grid grid-cols-2 "md":grid-cols-4 gap-6 max-w-4xl mx-auto mb-12''
                initial={{ "opacity": 0, "y": 20 
}
                animate={{ "opacity": 1, "y": 0 
}

                transition={{ "duration": 0.8, "delay": 0.6 
}
              >;
                {heroStats.map((stat, index) => (<div key={index} className='text-center'>;'
                    <div className='flex justify-center mb-2'>;'
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>;'
                        {stat.icon}
                      </div>;
                    </div>;
                    <div className='text-2xl "md":text-3xl font-bold text-white mb-1'>;'
                      {stat.value}

              {/* Hero Stats */}
              <motion.div 
                className=grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center>
                    <div className=flex justify-center mb-2">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30>
                        {stat.icon}
                    </div>



                className=flex flex-col sm:flex-row gap-4 justify-center"
                    <div className=text-sm text-white/70'>{stat.label}</div>                  </div>

                  </div>
                    </div>;
                className='flex flex-col sm:flex-row gap-4 justify-center                initial={{ opacity: 0, y: 20 }}              <motion.div;
                className="flex flex-col sm:flex-row gap-4 justify-center;
                    <div className=text-sm text-white/70'>{stat.label}</div>                  </div>;
                  </div>;
                ))}
              </motion.div>;
              {/* CTA Buttons */}

                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

                  value={searchTerm}
                  type=text"
                  placeholder="Search services...
                  value={searchTerm}
              {/* Category Filter */}
              <div className=flex flex-wrap gap-2'>              <div className=flex flex-wrap gap-2">;
                <button
              <div className='flex flex-wrap gap-2>                <button


                />
              </div>

              {/* Category Filter */}


                >
                  All ({allServices.length})
                </button>
                {serviceCategories.map((category) => (
                  <button

                ))}
              </div>

              {/* View Mode Toggle */}
<div className='flex items-center gap-2'>'
                <button,
onClick={() => setViewMode('grid')}'
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === 'grid';'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';'
                      : 'bg-black/50 text-white/70 "hover":text-white "hover":bg-black/70';'


                </button>
                <button,
onClick={() => setViewMode('list')}'
                  className={`p-2 rounded-lg transition-all duration-300 ${;`                    }
                    viewMode === 'list';'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50';'
                      : 'bg-black/50 text-white/70 "hover":text-white "hover":bg-black/70';'
                  }`}`
                >

                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}

            >
              {filteredServices.map((service, index) => (
                <motion.div
}
key={service.id}
                  variants={itemVariants}

                          {service.description}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed>
                          {service.description}
                        </p>
                      </div>

                        </div>
                      </div>
                    </div>
                        </p>;
                      </div>;
                      <div className=ml-4">;
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center>;
                          <Star className=w-6 h-6 text-cyan-400" />;
                        </div>;
                      </div>;
                    </div>;
                    className={`p-6 ${viewMode === 'list ? lg:w-1/3' : '}`}>;
                    <div className=flex items-start justify-between mb-4'>;
                      <div className='flex-1>;
                        <h3 className=text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-white/70 text-sm leading-relaxed>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className=ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center>;
                          <Star className=w-6 h-6 text-cyan-400' />                        </div>                          {service && service.name}
                        </h3>;
                        <p className="text-white/70 text-sm leading-relaxed>;
                          {service && service.description}
                        </p>;
                      </div>;
                      <div className=ml-4">;
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center>;
                          <Star className=w-6 h-6 text-cyan-400" />;
                        </div>;
                      </div>;
                    </div>;className='px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20                        >;
                        >;
                        </p>;
                      </div>;
                      <div className=ml-4'>;
                        <div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center>;
                          <Star className=w-6 h-6 text-cyan-400' />;
                        </div>;
                      </div>;
                    </div>;
                    {/* Tags */}

                      {service.tags.slice(0, 3).map((tag, tagIndex) => (<span;
                          }
                          key={tagIndex}


                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Market Info */}
                    <div className=flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>Market: {service.marketSize}</span>
                          className=px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20';
                        >;
                          {tag}
                        </span>;
                      ))}{/* Market Info */}
<div className='flex items-center justify-between text-sm text-white/60 mb-4>;
                      <span>Market: {service.marketSize}</span>;
                      <span className=text-cyan-400'>{service.category}</span>                    </div>;
                      <span className='text-cyan-400>{service.category}</span>                    </div>
                          {tag}
                        </span>;
                      ))}

                        {service.features;
                          .slice(0, 3).map((feature, featureIndex) => (<li;
                              }
                              key={featureIndex}

                              <span>{feature}</span>;
                            </li>;
                          ))}
                          .slice(0, 3);
                          .map((feature, featureIndex) => (;
                            <li
                              key={featureIndex}
                    </div>

                              <span>{feature}</span>;
                            </li>;
                          ))}                      </ul>;
                      <span className="text-cyan-400>{service.category}</span>
                    </div>
                  </div>


                    </div>

                    {/* Pricing */}
                    <div className="mb-6>
                      <h4 className=text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                        Starting From
                      </h4>
                      <div className="text-2xl font-bold text-white>
                        ${service.pricing.starter.price}
                        <span className=text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>
                      </div>
                    </div>
                    </div>;{/* Pricing */}{/* Pricing */}
                    <div className='mb - 6>;
                      <h4 className=text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white>;<div className=mb-6'>;
                      <h4 className='text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider>;
                        Starting From;
                      </h4>;
                      <div className=text-2xl font-bold text-white'>;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60>;
                          /{service.pricing.starter.period}</h4>;
                      <div className="text-2xl font-bold text-white>;
                        ${service.pricing.starter.price}
                        <span className=text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>;
                        </span>;
                      </div>;
                    </div>;
                    {/* CTA */}

                      <a;
                        href={service.website}
                    {/* Pricing */}
                    <div className='mb - 6>;
                      <h4 className=text - sm font - semibold text - cyan - 400 mb - 3 uppercase tracking - wider'>;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white>;
                        ${service.pricing.starter.price}
                        <span className=text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}
                      </h4>
                      <div className="text-2xl font-bold text-white>
                        ${service.pricing.starter.price}
                        <span className=text-sm font-normal text-white/60">/{service.pricing.starter.period}</span>

                        className='inline-flex items-center text-cyan-400 "hover": text-cyan-300 transition-colors duration-300 text-sm font-medium''
                      >
                        Learn More
                        <ExternalLink className='ml-1 w-4 h-4' />'
                      </a>
                      <a,
href='/contact''
                        className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg "hover":from-cyan-600 "hover":to-purple-700 transition-all duration-300 transform "hover":scale-105''
                      >
                        Get Started
                        <ArrowRight className='ml-2 w-4 h-4' />'
                      </a>
                    </div>
                  </div>

                  {/* Service Details *
}

                      </div>
                    </div>
                        className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium;
                      >;
                        Learn More;
                        <ExternalLink className=ml-1 w-4 h-4' />;
                      </a>;
                      <a;
                        href='/contact;
                        className=inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105';
                      >;
                        Get Started;
                        <ArrowRight className='ml-2 w-4 h-4 />;
                      </a>;
                    </div>;
                  </div>;
                  {/* Service Details */}</div>;
                    </div>;
                    </div>;
                    {/* Pricing */}

                      </a>;
                    </div>;


                  {/* Hover Effect Overlay */}
                  <div className=absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />                </motion && motion.div>                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none />;
                </motion && motion.div>;


                </motion.div>
              )
}

            </motion && motion.div>;


            {/* No Results */}
            {filteredServices && filteredServices.length === 0 && (;
              <motion&& motion.div
}
initial={{ "opacity": 0 }}
                animate={{ "opacity": 1 
}


                  Call Now;
                </a>;
              </div>;
              {/* Contact Info */}

                  <a;
                    href={`"tel": ${contactInfo.mobile}`}`                    className='text-cyan-400 "hover":text-cyan-300 transition-colors duration-300'>'

                    {contactInfo.mobil
}
                  </a>;
                </div>;

                  </div>;
                  <div className='text-white font-semibold'>Email</div>;'
                  <a;

                    {contactInfo.email}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8>
                <a
                  href=/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25
                >
                  Start Your Journey
                  <ArrowRight className=ml-2 w-5 h-5" />
                </a>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105
                >
                  <Phone className=mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center>
                <div className=flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3>
                    <Phone className=w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-white font-semibold>Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className=text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                    {contactInfo.mobile}
                  </a>
                </div>

                  </div>
                  <div className="text-white font-semibold>Address</div>
                  <div className=text-white/70 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>






>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
