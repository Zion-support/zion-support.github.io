import React, { useState, useEffect } from 'react';
export default EmergingTechShowcase2025;}}
import { Brain, import { EMERGING_TECH_SERVICES_2025 } from '../data/emergingTechServices2025';
export default function Page() {};
  return null;
}
    { id: 'Brain - Computer Interfaces', name: 'BCI', icon: Eye, color: 'from - red - 500 to - orange - 600' },;
    { id: 'Synthetic Biology', name: 'Synthetic Biology', icon: Dna, color: 'from - emerald - 500 to - teal - 600' },;
    { id: 'Fusion Energy', name: 'Fusion Energy', icon: Zap, color: 'from - yellow-500 to - orange - 600' },;
    { id: 'Space Mining', name: 'Space Mining', icon: Rocket, color: 'from - indigo - 500 to - purple - 600' },;
    { id: 'Digital Twins', name: 'Digital Twins', icon: Eye, color: 'from - cyan - 500 to - blue - 600' },;
    { id: 'Metaverse Infrastructure', name: 'Metaverse', icon: Globe, color: 'from - pink - 500 to - rose - 600' },;
    { id: 'Autonomous Systems', name: 'Autonomous', icon: Car, color: 'from - gray - 500 to - slate - 600' },;
    { id: 'Biocomputing', name: 'Biocomputing', icon: Cpu, color: 'from - lime - 500 to - green - 600' },;
    { id: 'Nanotechnology', name: 'Nanotechnology', icon: Microscope, color: 'from - amber - 500 to - yellow-600' },;
    { id: 'Advanced Robotics', name: 'Robotics', icon: Bot, color: 'from - slate - 500 to - gray - 600' }
  ];

    const filteredServices = selectedCategory === 'all';
    ? EMERGING_TECH_SERVICES_2025;
    : EMERGING_TECH_SERVICES_2025.filter(service => service.category === selectedCategory) ;
;
  useEffect(() => {};
}, []);
    if(autoPlay) {};
}, 5000) ;
      return () => clearInterval(interval) ;
}, [autoPlay, filteredServices.length]) ;
;
  const getCategoryIcon = (category: string) => {};
    return categoryData ? categoryData.icon : Globe};
;
          <div  className="grid md: grid - cols - 2 lg:grid - cols - 3 gap-8">;
            {};
                onClick={ () => setSelectedService(service.id) }

                <div  className="flex items - center gap-3 mb-4">;
                  <div  className={`p - 3 rounded-xl bg-gradient - to - r ${getCategoryColor(service.category) }`}>;
                    {React.createElement(getCategoryIcon (service.category) , { className: "w-6 h-6 text-white" }) }
                  </div>;
                  <div>;
                    <span className="text-sm text-gray - 400 uppercase tracking -wider">;
                      {service.category}
                    </span>;
                  </div>;
                </div>;

                <h3 className="text-xl font - bold text-white mb-3">{service.title}</h3>;
                <p className="text-gray - 300 mb-4 line - clamp -3">{service.description}</p>;

                <div  className="flex items - center justify - between mb-4">;
                  <div  className="text-2xl font - bold text-blue -400">{service.price}</div>;
                  <div  className="text-sm text-gray -400">per {service.billing}</div>;
                </div>;

                <div  className="space - y-3 mb-6">;
                  <div  className="flex items - center gap-2 text-sm text-gray -400">;
                    <TrendingUp className="w-4 h-4" />;
                    <span>{service.marketSize}</span>;
                  </div>;
                  <div  className="flex items - center gap-2 text-sm text-gray -400">;
                    <Users className="w-4 h-4" />;
                    <span>{service.targetAudience}</span>;
                  </div>;
                </div>;

                <div>Broken JSX</div>
                </motion.button>;
              </motion.div>) ) }
          </div>;
        </div>;
      </section>;

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient - to - r from - blue - 600 / 20 to - purple -600 / 20">;
        <div  className="max - w-4xl mx - auto text-center">;
          <h2 className="text-4xl font - bold text-white mb-6">Ready to Explore the Future?</h2>;
          <p className="text-xl text-gray - 300 mb-8">;
            Contact us to learn more about our emerging technology services and how they can transform your business.</p>;

          <div  className="grid md:grid - cols - 3 gap-8 mb-8">;
            <div  className="flex flex - col items - center gap-3">;
              <div  className="p - 4 bg-white / 10 rounded-full">;
                <Phone className="w-6 h-6 text-blue -400" />;
              </div>;
              <div>;
                <h3 className="font - semibold text-white mb-1">Phone</h3>;
                <p className="text-gray -300">+1 302 464 0950</p>;
              </div>;
            </div>;

            <div  className="flex flex - col items - center gap-3">;
              <div  className="p - 4 bg-white / 10 rounded-full">;
                <Mail className="w-6 h-6 text-purple -400" />;
              </div>;
              <div>;
                <h3 className="font - semibold text-white mb-1">Email</h3>;
                <p className="text-gray -300">kleber@ziontechgroup.com</p>;
              </div>;
            </div>;

            <div  className="flex flex - col items - center gap-3">;
              <div  className="p - 4 bg-white / 10 rounded-full">;
                <MapPin className="w-6 h-6 text-green -400" />;
              </div>;
              <div>;
                <h3 className="font - semibold text-white mb-1">Address</h3>;
                <p className="text-gray -300">364 E Main St STE 1008 < br />Middletown DE 19709</p>;
              </div>;
            </div>;
          </div>;

          <div>Broken JSX</div>
          </motion.button>;
        </div>;
      </section>;

      {/* Service Detail Modal */}
      <AnimatePresence>;
        {};
            onClick={ () => setSelectedService(null) }
;
            <div>Broken JSX</div>
              onClick={ (e) => e.stopPropagation () };
            >;
              {};
                        <div  className={`p - 3 rounded-xl bg-gradient - to - r ${getCategoryColor (service.category) }`}>;
                          {React.createElement(getCategoryIcon (service.category) , { className: "w-8 h-8 text-white" }) }
                        </div>;
                        <div>;
                          <span className="text-sm text-gray - 400 uppercase tracking -wider">;
                            {service.category}
                          </span>;
                        </div>;
                      </div>;
                      <button     onClick={ () => setSelectedService(null) }
                        className="p - 2 bg-white / 10 rounded-full hover:bg-white / 20 transition -all";

                        <ChevronLeft className="w-6 h-6 text-white" />;
                      </button>;
                    </div>;

                    <h2 className="text-3xl font - bold text-white mb-4">{service.title}</h2>;
                    <p className="text-lg text-gray - 300 mb-6">{service.description}</p>;

                    <div  className="grid md:grid - cols - 2 gap-8 mb-8">;
                      <div>;
                        <h3 className="text-xl font - semibold text-white mb-4">Features</h3>;
                        <div  className="space - y-2">;
                          {service.features.map((feature, index) => (<div  key={index} className="flex items - center gap-2 text-gray -300">;
                              <div  className="w-2 h-2 bg-blue - 400 rounded-full"></div>;
                              <span>{feature}</span>;
                            </div>) ) }
                        </div>;
                      </div>;

                      <div>;
                        <h3 className="text-xl font - semibold text-white mb-4">Benefits</h3>;
                        <div  className="space - y-2">;
                          {service.benefits.map((benefit, index) => (<div  key={index} className="flex items - center gap-2 text-gray -300">;
                              <div  className="w-2 h-2 bg-green - 400 rounded-full"></div>;
                              <span>{benefit}</span>;
                            </div>) ) }
                        </div>;
                      </div>;
                    </div>;

                    <div  className="grid md:grid - cols - 3 gap-6 mb-8">;
                      <div  className="bg-white / 10 rounded-xl p -4">;
                        <h4 className="font - semibold text-white mb-2">Market Size</h4>;
                        <p className="text-2xl font - bold text-green -400">{service.marketSize}</p>;
                      </div>;

                      <div  className="bg-white / 10 rounded-xl p -4">;
                        <h4 className="font - semibold text-white mb-2">Pricing</h4>;
                        <p className="text-2xl font - bold text-blue -400">{service.price}</p>;
                        <p className="text-sm text-gray -400">per {service.billing}</p>;
                      </div>;

                      <div  className="bg-white / 10 rounded-xl p -4">;
                        <h4 className="font - semibold text-white mb-2">Target Audience</h4>;
                        <p className="text-gray - 300 text-sm">{service.targetAudience}</p>;
                      </div>;
                    </div>;

                    <div  className="flex gap-4">;
                      <div>Broken JSX</div>
                      </motion.button>;
                      <div>Broken JSX</div>
                        onClick={ () => setSelectedService(null) }
                        className="px-8 py-3 border border-white / 20 text-white rounded-xl hover:bg-white / 10 transition -all">;
                        Close;
                      </motion.button>;
                    </div>;
                  </div>;) }) () }
            </motion.div>;
          </motion.div>) }
      </AnimatePresence>;
    </div>) }