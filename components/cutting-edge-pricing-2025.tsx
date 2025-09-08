


import { motion } from 'framer-motion';
import {
  Check
  Zap
  Shield
  Brain
  Atom
  Target
  Rocket
  Star
  TrendingUp
  Award
  Users
  ArrowRight
  ExternalLink
  Phone
  Mail
  MapPin;} from 'lucide-react';import {
  Check, Zap, Shield, Brain, Atom, Target, Rocket, Star, TrendingUp, Award, Users, ArrowRight, ExternalLink, Phone, Mail, MapPin


    name: 'Quantum & Emerging Tech',
  icon: <Atom className='w-8 h-8'    />
    color: 'from-purple-500 to-pink-500',
  services: cuttingEdgeQuantumServices2025.slice(0, 6)
    description: 'Breakthrough quantum computing and space technology solutions'}
 ,}
}
  {
    name: 'Enterprise IT Solutions',
  icon: <Shield className='w-8 h-8'    />,
    color: 'from-blue-500 to-cyan-500',
  services: cuttingEdgeEnterpriseITServices2025.slice(0, 6),}
    description: 'Advanced enterprise infrastructure and security solutions',}
  },
  {
    name: 'Micro SAAS Solutions',
  icon: <Rocket className='w-8 h-8'    />,
    color: 'from-teal-500 to-emerald-500',
  services: cuttingEdgeMicroSaasServices2025.slice(0, 6),}
    description: 'Innovative business solutions for modern enterprises',}
  },
];


  const [selectedCategory, setSelectedCategory] = useState('all');
  const allServices = [


const allServices = [





  const filteredServices = selectedCategory === 'all' ;
    ? allServices ;
    : allServices && allServices.filter(service => service && service.category === selectedCategory);
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
      },;
    },  };        staggerChildren: 0 && 0.1;





  return (
    <>



                className='text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6';
                initial={{ opacity: 0, scale: 0.9 ,}


                  />
                Cutting-Edge;
<span className='block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90'    />
                  Pricing 2025;



                  </div>


        {/* Pricing Tiers Section */}


<section className='py-20 bg-gradient-to-b from-black via-purple-900/10 to-black'    />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'    />
            <motion.div;
initial={{ opacity: 0, y: 30 ,}
}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}


className='text-center mb-16'
                />
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'    />
                  Flexible;
                </span>{' ,}
}
                Pricing Plans;
              </h2>
<p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'    />
                Choose the perfect plan for your business needs. All plans;
include our cutting-edge technology and world-class support to;
ensure your success.
              </p>
            </motion.div>


                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}


                    <a

                      href={tier && tier.ctaLink}


                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover: scale-105 ${
                        tier && tier.popular;
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                          : 'border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'






              initial={{ opacity: 0, y: 30 }}


className='text-center mb-16'
                />
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'    />
                <span className='bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'    />
                  Service;
                </span>{' '}
                Categories;
              </h2>
<p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'    />
                Explore our comprehensive range of cutting-edge services across;

              </p>
            </motion.div>








                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-black/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'



                  }`}
                >;
                  {category && category.name} ({category && category.services.length});
                </button>;
              ))}

            </div>;
            </div>



            {/* Services Grid */}
            <motion&& motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              initial="hidden";
              whileInView="visible";
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
              {filteredServices && filteredServices.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  variants={itemVariants}



                      <ArrowRight className='ml - 2 w - 4 h - 4' />                    </a>                      <ArrowRight className="ml - 2 w - 4 h - 4" />;
                    </a>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Service Categories Section */}
        <section className='py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black'>;
          <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>            <motion.div        <section className="py - 20 bg - gradient - to - b from - black via - purple - 900 / 10 to - black">;
          <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text - center mb - 16';
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent'>                  Service;
                </span>{' '}
                Categories;
              </h2>;
              <p className='text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
                Explore our comprehensive range of cutting - edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              </p>;
            </motion.div>;
            {/* Category Filter */}
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              <button              className="text - center mb - 16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
                <span className="bg - gradient - to - r from - cyan - 400 to - purple - 500 bg - clip - text text - transparent">;
                </span>{' '}
                Categories;
              </h2>;
              <p className='text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
                Explore our comprehensive range of cutting - edge services across;
                multiple technology domains. Each category offers specialized;
                solutions for different business needs.              <p className="text - xl text - white / 80 max - w-3xl mx - auto leading - relaxed">;
                Explore our comprehensive range of cutting - edge services across multiple technology domains.;
                Each category offers specialized solutions for different business needs.;
              </p>;
            </motion.div>;
            {/* Category Filter */}
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>            <div className="flex flex - wrap justify - center gap - 4 mb - 12">;

              >;
                All Categories ({all_services.length});
              </button>;
              {service_categories.map (category => (                <button              {service_categories.map ((category) => (
                <button;
                  key={category.name}
                  on_click={() => setSelectedCategory (category.name)}
                  className={`px - 6 py - 3 rounded - full text - sm font - medium transition - all duration - 300 ${
                    selected_category === category.name;
                      ? 'bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white';
                      : 'bg - black / 50 border border - cyan - 500 / 30 text - cyan - 400 hover:bg - cyan - 500 / 10';
                  }`}
                >;
                  {category.name} ({category.services.length});
                </button>))}
            </div>;
            {/* Services Grid */}
            <motion.div;
              variants={container_variants}
              initial='hidden';
              whileInView='visible';
              viewport={{ once: true }}
              className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'            >              initial="hidden";
              whileInView="visible";
              viewport={{ once: true }}
              className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8";
              {filtered_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  variants={item_variants}
                  className='group relative overflow - hidden rounded - 2xl border border - cyan - 500 / 20 bg - gradient - to - br from - black / 80 via - purple - 900 / 10 to - black / 80 backdrop - blur - sm hover:border - cyan - 500 / 50 transition - all duration - 500 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20';
                >;
                  <div className='p - 6'>;
                    <div className='flex items - start justify - between mb - 4'>;
                      <div className='flex - 1'>;
                        <h3 className='text - xl font - bold text - white mb - 2 group - hover:text - cyan - 400 transition - colors duration - 300'>;





                        </p>;
                      </div>;

                      <div className=\"ml - 4\"    />;
                        <div className=\"w - 12 h - 12 rounded - full bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 flex items - center justify - center\"    />;
                          <Star className=\"w - 6 h - 6 text - cyan - 400\"    />;

                        <span className='text - sm font - normal text - white / 60'>;
                          /{service.pricing.starter.period}

                        </span>                      </div>;
                          /{service.pricing.starter.period}</span>                      </div>;
                    </div>;
                    {/* CTA */}
                    <div className=flex items - center justify - between'>                      <span > Market: {service.market_size}</span>;
                      <span className=text - cyan - 400">{service.category}</span>;
                    </div>;
                      <div className="text - 2xl font - bold text - white>;
                        ${service.pricing.starter.price}


                    {/* Pricing */}
                    <div className='mb-6>;
                      <h4 className=text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider'>;
                        Starting From;
                      </h4>;
                      <div className='text-2xl font-bold text-white>;
                    <div className='flex items - center justify - between text - sm text - white / 60 mb - 4'    />;
                      <span     /> Market: {service.market_siz,}
}</span>;
                      <span className='text - cyan - 400'    />{service.category}</span>;
                    </div>;
                    {/* Pricing */}
                    <div className='mb - 6'    />;
                      <h4 className='text - sm font - semibold text - cyan - 400 mb - 2 uppercase tracking - wider'    />;
                        Starting From;
                      </h4>;
                      <div className='text - 2xl font - bold text - white'    />;
                        ${service.pricing.starter.price}
                        <span className='text - sm font - normal text - white / 60'    />;

                          /{service.pricing.starter.period}

                        </span>
                      </div>
                    </div>

                    {/* CTA */}
<div className='flex items-center justify-between'    />;
                      <a;
                        href={service.website}

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





            </motion && motion.div>;
          </div>;
        </section>;







        {/* Contact CTA Section */}





              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}



                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">;

                  Start Your Journey;
                  <ArrowRight className='ml-2 w-5 h-5'    />;
                </a>;

                <a


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>



                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                  <div className=text-white font-semibold">Address</div>
                  <div className="text-white/70 text-sm>{contactInfo.address}</div>






