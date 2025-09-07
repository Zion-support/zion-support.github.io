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
}
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
                    {service.features.length > 3 && (<li className='text - sm text - cyan - 400'>                        +{service.features.length - 3} more features                <div className="mb - 6">;
                  <h4 className="text - sm font - semibold text - gray - 400 mb - 3 uppercase tracking - wide">Key Features</h4>;
                  <ul className="space - y-2">;
                    {service.features.slice (0, 3).map ((feature, feature_index) => (<li key={feature_index} className="flex items - center text - sm text - gray - 300">;
                        <CheckCircle className="w - 4 h - 4 text - cyan - 400 mr - 2 flex - shrink - 0" />;
                        {feature}
                      </li>))}
                    {service.features.length > 3 && (<li className="text - sm text - cyan - 400">;
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
                    <div className="text - gray - 400">Market Size</div>;
                    <div className="text - white font - semibold">{service.market_size}</div>;
                  </div>;
                  <div>;
                    <div className="text - gray - 400">Target Audience</div>;
                    <div className="text - white font - semibold truncate">{service.target_audience}</div>;
                  </div>;
                </div>;
                {/* CTA */}
                <div className='flex gap - 3'>;
                  <a;
                    href={service.website}
                    className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - xl text - center hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300'                <div className="flex gap - 3">;
                  <a;
                    href={service.website}
                    className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - xl text - center hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 300";
                    Learn More;
                  </a>;
                  <a;
                    href={`mailto:${service.contact.email}`}
                    className='px - 4 py - 3 border border - cyan - 500 / 30 text - cyan - 400 rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300';
                  >;
                    <Mail className='w - 5 h - 5' />                  </a>                    className="px - 4 py - 3 border border - cyan - 500 / 30 text - cyan - 400 rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
                  >;
                    <Mail className="w - 5 h - 5" />;
                  </a>;
                </div>;
              </motion.div>))}
          </div>;
          {sorted_services.length === 0 && (<motion.div;
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='text - center py - 20';
            >;
              <div className='text - gray - 400 text - xl mb - 4'>;
                No services found;
              </div>;
              <div className='text - gray - 500'>;
                Try adjusting your search or filter criteria;
              </div>            </motion.div>              className="text - center py - 20";
            >;
              <div className="text - gray - 400 text - xl mb - 4">No services found</div>;
              <div className="text - gray - 500">Try adjusting your search or filter criteria</div>)}
        </div>;
      </section>;
      {/* Contact Section */}
      <section className='py - 20 bg - gradient - to - b from - slate - 900 to - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - b from - slate - 900 to - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">;
              Ready to Transform Your Business?;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Contact our team to learn more about how our innovative services can revolutionize your operations and drive growth.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Phone className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Phone</h3>;
              <p className='text - gray - 300'>{contact_info.mobile}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <Phone className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Phone</h3>;
              <p className="text - gray - 300">{contact_info.mobile}</p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Mail className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Email</h3>;
              <p className='text - gray - 300'>{contact_info.email}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <Mail className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Email</h3>;
              <p className="text - gray - 300">{contact_info.email}</p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <MapPin className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Address</h3>;
              <p className='text - gray - 300'>{contact_info.address}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <MapPin className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Address</h3>;
              <p className="text - gray - 300">{contact_info.address}</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </Layout>);
}

    </Layout>)}
