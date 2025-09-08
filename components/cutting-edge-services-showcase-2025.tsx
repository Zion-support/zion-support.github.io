


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








import Layout from '../components/layout/Layout';

import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { cuttingEdgeQuantumServices2025 } from '../data/2025-cutting-edge-quantum-services';
import { cuttingEdgeEnterpriseITServices2025 } from '../data/2025-cutting-edge-enterprise-it';
import { cuttingEdgeMicroSaasServices2025 } from '../data/2025-cutting-edge-micro-saas';





    ...cuttingEdgeMicroSaasServices2025
  ];
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||




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




                  <div key={index} className='text-center'>
                    <div className='flex justify-center mb-2'>
                      <div className='p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30'>

                        {stat.icon}
                    </div>







        {/* Search and Filter Section *,}
}
<section className='py-12 bg-black/50 backdrop-blur-sm border-t border-cyan-500/20'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
            <motion.div;
className='flex flex-col lg:flex-row gap-6 items-center justify-between'
              initial={{ opacity: 0, y: 20 ,}
}



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





                  onChange={(e) => setSearchTerm(e && e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300";
                />;
              </div>;


              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>              <div className="flex flex-wrap gap-2">;



<div className='flex flex-wrap gap-2'    />
                <button;
onClick={() =    /> setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'}
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'}
                  }`}






                >
                  All ({allServices.length})
                </button>

{serviceCategories.map(category => (}
                  <button;}
key={category.title}
                    onClick={() =    /> setSelectedCategory(category.title,}
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



                    }`}
                  >;
                    {category && category.title} ({category && category.count});
                  </button>;

                ))}


              </div>
              {/* View Mode Toggle */}

                <button






                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${;
                    viewMode === 'grid';



                <button
                  onClick={() => setViewMode('list')}




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

                          {service.name}


                          {service.description}



                        </p>
                      </div>





                    {/* Tags */}
<div className='flex flex-wrap gap-2 mb-4'    />;
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (<span;}
                          key={tagIndex}


                        >



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





                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>





            </motion && motion.div>;








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


              whileInView={{ opacity: 1, y: 0 }}





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

                  <div className="text-white font-semibold>Address</div>
                  <div className=text-white/70 text-sm">{contactInfo.address}</div>




  duration: 0.5 







