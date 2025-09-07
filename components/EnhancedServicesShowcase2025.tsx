
;

;
benefits: [ 'Reduce manual tasks by 80%Improve accuracy by 95%24/7 automated operationsScalable AI infrastructure' ] 
}
benefits: [ 'Solve previously impossible problemsExponential speed improvementsFuture-proof technologyResearch and development support' ] 
}
benefits: [ 'Reduced latency by 90%Lower bandwidth costsEnhanced privacyScalable edge deployment' ] 
}
benefits: [ 'Future-proof securityQuantum-resistant encryptionComprehensive complianceAdvanced threat protection' ] 
}
benefits: [ 'Unified data viewReal-time insightsImproved data qualityReduced integration costs' ] 
}
benefits: [ 'Faster deploymentImproved scalabilityBetter resource utilizationEnhanced reliability' ] 
}]
if (searchTerm) {
  filtered = filtered.filter (service => service.title.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.description.toLowerCase () .includes (searchTerm.toLowerCase () ) || service.technologies.some (tech => tech.toLowerCase () .includes (searchTerm.toLowerCase () ) ) return filtered.sort ( (a, b) => {
  switch (sortBy) {
  case 'price': return a.pricing.starter - b.pricing.starter
case 'category': > <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > 2025 Services Showcase </h1> <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed" > Discover our cutting-edge technology solutions designed for the future. From AI-powered automation to quantum computing, we're building tomorrow's innovations today. </p> </motion.div> {
  /* Search and Filters */ 
}<motion.div > <div className="flex flex-col md:flex-row gap-4 items-center justify-center" > <div className="relative flex-1 max-w-md" > <input /> <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> </div> <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="category" >Sort by Category</option> </select> </div> </motion.div> {
  /* Category Tabs */ 
}<motion.div > <div className="flex flex-wrap justify-center gap-4" > <button onClick= {
  () => setSelectedCategory ('all') 
}className= {
  `px-6 py-3 rounded-lg font-medium transition-all duration-300 $ {
  selectedCategory === 'all' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20' 
}` 
}> All Services </button> {
  serviceCategories.map ( (category) => (<button key= {
  category.id 
}onClick= {
  () => setSelectedCategory (category.id) 
}className= {
  `px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category.id ? `bg-gradient-to-r $ {
  category.color 
}text-white shadow-lg`: 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20' 
}` 
}> {
  category.icon 
}{
  category.name 
}</button>) ) 
}</div> </motion.div> {
  /* Services Grid */ 
}<motion.div > {
  filteredServices.map ( (service, index) => (<motion.div key= {
  service.id 
}<span key= {
  tech 
}className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300" > {
  tech 
}</span>) ) 
}+ {
  service.technologies.length - 3 
}more </span>) 
}</div> </div> <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300" > Learn More </button> </div> </motion.div>) ) 
}</motion.div> {
  /* No Results */ 
}{
  filteredServices.length === 0 && (<motion.div > <div className="text-6xl mb-4" >🔍</div> <h3 className="text-2xl font-bold text-gray-300 mb-2" >No services found</h3> <p className="text-gray-400" >Try adjusting your search terms or category filters</p> </motion.div>) 
}</div> {
  /* Service Detail Modal */ 
}<AnimatePresence> > <span className="text-2xl" >×</span> </button> </div> </li>) ) 
}</ul> </div> {
  /* Benefits */ 
}<div> </li>) ) 
}</ul> </div> </div> <span key= {
  tech 
}className="px-3 py-2 bg-white/10 rounded-lg text-gray-300" > {
  tech 
}</span>) ) 
}</div> </div> <div key= {
  plan 
}className="p-4 bg-white/5 border border-white/20 rounded-lg text-center" > </div> <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300" > Get Started </button> </div>) ) 
}</div> </div> </motion.div> </motion.div>) 
}</AnimatePresence> </div>) 
}
export default EnhancedServicesShowcase2025
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
import { FaRocket;
  }
  FaBrain;
  FaCloud;
  FaShieldAlt;
  FaChartLine;
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch;

import { SiNextdotjs;
  }
  SiReact;
  SiTypescript;
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
import React, { useState, useEffect, useMemo } from react';
import { motion, AnimatePresence } from 'framer-motion;
import { 
  FaRocket;
  FaBrain, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine, 
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch
} from react-icons/fa';
  SiNextdotjs;
  SiReact, 
  SiTypescript, 
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
  SiMicrosoftazure
} from 'react-icons/si;

interface Service {
  id: string,
  title: string,
  description: string,
  icon: React.ReactNode,
  category: string,
  features: string[],
  pricing: {
    starter: number,
    professional: number,
    enterprise: number
  }
  technologies: string[],
  benefits: string[]
}

interface ServiceCategory {
  SiMicrosoftazure;
  SiMicrosoftazure;
  } from react-icons/si';
  FaBrain;
  FaCloud;
  FaShieldAlt;
  FaChartLine;
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch;
import {SiNextdotjs;
  SiReact;
  SiTypescript;
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;
  SiMicrosoftazure;} from 'react-icons/si;
interface Service  {} from react-icons/si';interface Service  {FaRocket,FaBrain,FaCloud,FaShieldAlt,FaChartLine,FaCogs,FaLightbulb,FaGlobe,FaMobile,FaDatabase,FaNetworkWired,FaRobot,FaSearch,import { SiNextdotjs,SiReact,SiTypescript,SiTailwindcss,SiPrisma,SiSupabase,SiVercel,SiDocker,SiKubernetes,SiAws,SiGooglecloud,SiMicrosoftazure} from 'react-icons/si;
interface Service  {id: string;
  title: string;
  description: string;
    starter: number;
    professional: number;enterprise: number;
  SiMicrosoftazure;

  FaBrain;
  FaCloud;
  FaShieldAlt;
  FaChartLine;
  FaCogs;
  FaLightbulb;
  FaGlobe;
  FaMobile;
  FaDatabase;
  FaNetworkWired;
  FaRobot;
  FaSearch;
  }
  SiReact;
  SiTypescript;
  SiTailwindcss;
  SiPrisma;
  SiSupabase;
  SiVercel;
  SiDocker;
  SiKubernetes;
  SiAws;
  SiGooglecloud;

      )}
    if (searchTerm) {filtered = filtered.filter(service =>;
          }
          service.title.toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.description;
            .toLowerCase().includes(searchTerm.toLowerCase()) |;
          service.technologies.some(tech =>;
            tech.toLowerCase().includes(searchTerm.toLowerCase())))}

          return a.title.localeCompare(b.title)}
    })}, [selectedCategory, searchTerm, sortBy])const handleServiceSelect = ("service": Service) => {setSelectedService(service)}
  const closeModal = () => {setSelectedService(null)}

          </p>;
        </motion.div>;
        {/* Search and Filters */}
        <motion&& motion.div;

                value={searchTerm}
            <select;
              value={sortBy}
              onChange={e =>;

          </p>;
        </motion.div>;
        {/* Search and Filters */}
        <motion.div;
          initial={{ "opacity": 0, "coordinate_y": 20 
}
          animate={{ "opacity": 1, "coordinate_y": 0 
}
          transition={{ "duration": 0.8, "delay": 0.2 
}
          className='mb - 12'>'


                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              />
              <FaSearch className=absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={sortBy}


              <option value="name">Sort by Name</option>;"
              <option value="price">Sort by Price</option>;"
              <option value="category">Sort by Category</option>;"
            </select>;
          </div>;className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white "focus":outline-none "focus":ring-2 "focus":ring-blue-500';'
            >;
          </div>;className='px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white "focus":outline-none "focus":ring-2 "focus":ring-blue-500'>'

              <option value='name'>Sort by Name</option>;'
              <option value='price'>Sort by Price</option>;'
              <option value='category'>Sort by Category</option>;'
            </select>;
          </div>;
        </motion.div>;
        {/* Category Tabs */}

              All Services;
            </button>;
{serviceCategories.map(category => { return (<button; }
                }
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}

            ))}
          </div>
        </motion.div>

        {/* Services Grid */}

          {filteredServices.map((service, index) => (<motion.div;
              }
              key={service.id}

                    }
              key={service.id}
              initial={{ "opacity": 0, "coordinate_y": 20 
}
              animate={{ "opacity": 1, "coordinate_y": 0 
}
              transition={{ "duration": 0.6, "delay": index * 0.1 
}
                  </p>;
                </div>;

                  >;
                ))}className='px-2 py-1 bg-white/10 rounded text-xs text-gray-300'>'

                    {tech}
                  </span>;
                ))}

                    +{service.technologies.length - 3} more;
                  </span>;
                )}
              </div>;

                  Learn More;
                </button>;
              </div>;
            </motion.div>;
          ))}
        </motion.div>;

                    +{service && service.technologies.length - 3} more;
                  </span>;
                )}
              </div>;

                  Learn More;
                </button>;
              </div>;
            </motion && motion.div>;
          ))}
        </motion && motion.div>;{/* No Results */}
        {filteredServices && filteredServices.length === 0 && (<motion&& motion.div;

              Try adjusting your search terms or category filters;
            </p>;
          </motion.div>;
        )}
      {/* Service Detail Modal */}
      <AnimatePresence>;
        {selectedService && (<motion&& motion.div;

                        )?.name;
                      }
                    </p>;
                  </div>;
                </div>;
                <button;

                        {feature}</li>;
                    ))}
                  </ul>;
                </div>;
                    ))}
                {/* Benefits */}<div>;

                    {selectedService && selectedService.benefits.map((benefit, index) => (<li;
                        }
                        key={index}

                    {selectedService.benefits.map((benefit, index) => (<li;
                        }
                        key={index}

                        {benefit}
                      </li>;
                      </li>;
                    ))}
              {/* Technologies */}

                  {selectedService.technologies.map((tech) => (<span;
                      }
                      key={tech}

                    >;
                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'                    >>'

                      className='px-3 py-2 bg-white/10 rounded-lg text-gray-300'>'

                      {tech}
                    </span>;
                  ))}</div>;

                  {Object.entries(selectedService.pricing).map(([plan, price]) => (<div;
                        }
                        key={plan}

                          Get Started;
                        </button>;
                      </div>;
                    ))}
                </div>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}{/* Technologies */}

                  {selectedService && selectedService.technologies.map((tech) => (<span;
                      }
                      key={tech}

                      {tech}
                    </span>;
                  ))}
              {/* Pricing */}

                  {Object && Object.entries(selectedService && selectedService.pricing).map(([plan, price]) => (<div;
                        }
                        key={plan}

                        Get Started;
                      </button>;
                    </div>;
                  ))}
              </div>;
            </motion && motion.div>;
          </motion && motion.div>;
        )}
}export default EnhancedServicesShowcase2025;  ))}export default EnhancedServicesShowcase2025;

                    }
                  </p>;
                </div>;
              </div>;

                {service.technologies.slice (0, 3).map ((tech) => (<span;
                    }
                    key={tech}

                  Learn More;
                </button>;
              </div>;
            </motion.div>))}
        </motion.div>;
                  <span className=text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}


            <div className='text - 6xl mb - 4'>🔍</div>;'
            <h3 className='text - 2xl font - bold text - gray - 300 mb - 2'>;'
              No services found;
            </h3>;
            <p className='text - gray - 400'>;'
              Try adjusting your search terms or category filters;
            </p>          </motion.div>            className="text - center py - 16">"

            <div className="text - 6xl mb - 4">🔍</div>;"
            <h3 className="text - 2xl font - bold text - gray - 300 mb - 2">No services found</h3>;"
            <p className="text - gray - 400">Try adjusting your search terms or category filters</p>)}"
      </div>;
      {/* Service Detail Modal */}

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}


                        <div className='w - 2 h - 2 bg - green - 500 rounded - full'></div>                        {benefit}                  <h3 className="text - xl font - bold text - white mb - 4">Key Benefits</h3>;"
                  <ul className="space - y-2">;"
                    {selected_service.benefits.map ((benefit, index) => (<li key={index} className="flex items - center gap - 2 text - gray - 300">;"
                        <div className="w - 2 h - 2 bg - green - 500 rounded - full"></div>;"
                      </li>))}
                  </ul>;
                </div>;
              </div>;
              {/* Technologies */}

                      {tech}
                    </span>))}
                </div>;
              </div>;
              {/* Pricing */}
)}export default EnhancedServicesShowcase2025;
)}export default EnhancedServicesShowcase2025;
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div
                      key={plan}
                      className="p-4 bg-white/5 border border-white/20 rounded-lg text-center"
                    >
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};

export default EnhancedServicesShowcase2025;
