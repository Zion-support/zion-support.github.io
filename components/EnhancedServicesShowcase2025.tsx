

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


                        Get Started
                      </button>
                    </div>
                  ))}

              </div>
            </motion.div>
          </motion.div>
        )}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
