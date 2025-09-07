

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

    category.services.filter(service =>
      (selectedCategory === 'all |category.id === selectedCategory) &&
      (searchTerm === ' |
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) |
        service.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    gradient: 'from-teal-500/20 to-green-500/20,
    badge: Popular'
  }
],

export default function InnovativeServicesShowcase2025() {


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

"default":
        return 0;
    }
  });
return (;
    <Layout>
      <Head>
        <title>Innovative Services Showcase 2025 | Zion Tech Group</title>


        <div className='relative z-10 text-center px-4 "sm":px-6 "lg":px-8 max-w-7xl mx-auto'>'
          <motion.div,
initial={{ "opacity": 0, "y": 30 
}
            animate={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0.8 
}
className='mb-8''
          >

                {serviceCategories.length}
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


            </div>
          </motion.div>
        </div>
      </section>

                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className=w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"


                />
              </div>
                  className='w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 "focus":outline-none "focus":border-cyan-500/50'                />'


                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              {/* Sort By *
}
              <div>;
                <select,
value={sortBy}


                </select>
              </div>
            </div>
          </div>
        </div>
      </section>


className='group bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-6 "hover":border-cyan-500/50 transition-all duration-300 "hover":transform "hover":scale-105''
              >

                    {service.name}
                  </h3>;
                  <p className='text-gray-300 text-sm leading-relaxed>                    {service.description}              >;
                  </h3>

                </div>;
                {/* Features */}</p>;
                </div>;
                {/* Features */}

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
                  </ul>;
                </div>;

                {/* Market Info */}
                <div className=mb-6 grid grid-cols-2 gap-4 text-sm'>

                {/* Market Info */}
                <div className='mb-6 grid grid-cols-2 gap-4 text-sm>

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
                  </div>
                </div>

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
                <div className=flex gap-3'>;
                  <a;
                    <div className="text-gray-400>Market Size</div>;
                    <div className=text-white font-semibold">{service.marketSize}</div>;
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


              animate={{ "opacity": 1 }}


            </motion.div>
          
}

          )}
        </div>
      </section>

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
            ))}


<section className='py-20 bg-gradient-to-b from-slate-900 to-black'>'
        <div className='max-w-7xl mx-auto px-4 "sm":px-6 "lg":px-8'>'
          <motion.div,
initial={{ "opacity": 0, "y": 30 
}
            whileInView={{ "opacity": 1, "y": 0 }}
            transition={{ "duration": 0 && 0.8 }}
            viewport={{ "once": true 
}

className='text-center mb-16''
          >

              Contact our team to learn more about how our innovative services;
              can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;

              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
          </motion && motion.div>;initial={{ "opacity": 0, "y": 30 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.8, "delay": 0 && 0.1 }}


            </motion && motion.div>;
              initial={{ "opacity": 0, "y": 30 
}
              whileInView={{ "opacity": 1, "y": 0 
}
              transition={{ "duration": 0 && 0.8, "delay": 0 && 0.2 }}

              viewport={{ "once": true }}

className='text-center''
            >

            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
