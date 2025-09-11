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

const RevolutionaryServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
  const categories = [
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const RevolutionaryServicesShowcase: React.FC = () => {;
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState(12);
    { id: 'all', name: 'All Services', count: revolutionary2025MicroSaasServices.length + emergingTech2025Services.length + enterpriseIT2025Services.length },
    { id: 'ai', name: 'AI & ML', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('AI')).length };
    { id: 'quantum', name: 'Quantum Tech', count: [...revolutionary2025MicroSaasServices, ...emergingTech2025Services, ...enterpriseIT2025Services].filter(s => s.category.includes('Quantum')).length };
    { id: 'emerging', name: 'Emerging Tech', count: emergingTech2025Services.length },
    { id: 'enterprise', name: 'Enterprise IT', count: enterpriseIT2025Services.length },
    { id: 'revolutionary', name: 'Revolutionary', count: revolutionary2025MicroSaasServices.length }
  ];
  const categories = [;
    {;
      id: 'all',;
      name: 'All Services',;
      count:;
        revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length +;
        emergingTech2025Services && emergingTech2025Services.length +;
        enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'ai',;
      name: 'AI & ML',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('AI')).length,;
    },;
    {;
      id: 'quantum',;
      name: 'Quantum Tech',;
      count: [;
        ...revolutionary2025MicroSaasServices,;
        ...emergingTech2025Services,;
        ...enterpriseIT2025Services,;
      ].filter(s => s && s.category.includes('Quantum')).length,;
    },;
    {;
      id: 'emerging',;
      name: 'Emerging Tech',;
      count: emergingTech2025Services && emergingTech2025Services.length,;
    },;
    {;
      id: 'enterprise',;
      name: 'Enterprise IT',;
      count: enterpriseIT2025Services && enterpriseIT2025Services.length,;
    },;
    {;
      id: 'revolutionary',;
      name: 'Revolutionary',;
      count: revolutionary2025MicroSaasServices && revolutionary2025MicroSaasServices.length,;
    },  ];


    visible: {
      opacity: 1
      transition: {

  };


=======

        <motion&& motion.div
          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  }

  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-7xl mx-auto">;
        {/* Header */}

          className='text-center mb-16'          initial={{ opacity: 0, y: 30 }}  };



          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

        {/* Category Filter */}
        <motion&& motion.div
          className='flex flex-wrap justify-center gap-4 mb-12'          initial={{ opacity: 0, y: 20 }}              Revolutionary 2025

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary 2025

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

              </span>
            </button>
          ))}

        </motion && motion.div>;





        </motion && motion.div>;
                setVisibleServices(12);                setVisibleServices(12)
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
=======
                setVisibleServices(12)              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                activeCategory === category && category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25';
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }`}
            >
              {category.name}
              <span className='ml-2 px-2 py-1 bg-white/20 rounded-full text-xs'>                {category.count}              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              <span className='ml-2 px-2 py-1 bg-white/20 rounded-full text-xs'>                {category.count}

              </span>
            </button>
          ))}
        </motion.div>

=======
                setVisibleServices(12)>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 ${;
                activeCategory === category && category.id;
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25';
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50';
              }`}


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </span>
            </button>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          ))}
        </motion && motion.div>;


=======




=======
                <div className='relative z-10'>;
                  <div className='flex items-start justify-between mb-4'>;
                    <div className='flex items-center space-x-3'>;
                      <div className='text-4xl'>{service && service.icon}</div>;
                      <div>;
                        <h3 className='text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-400 text-sm'>;
                          {service && service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    <div className='text-right'>;
                      <div className='text-2xl font-bold text-white'>;
                        {service && service.price}
                      </div>;
                      <div className='text-gray-400 text-sm'>;
                        {service && service.period}
                      </div>                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text-gray-300 mb-4 leading-relaxed'>;
                    {service && service.description}
                  </p>                      <div>;
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">;
                          {service && service.name}
                        </h3>;
                        <p className="text-gray-400 text-sm">{service && service.tagline}</p>;
                      </div>;
                    </div>;
                    <div className="text-right">;
                      <div className="text-2xl font-bold text-white">{service && service.price}</div>;
                      <div className="text-gray-400 text-sm">{service && service.period}</div>;
                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text-gray-300 mb-4 leading-relaxed'>;
                    {service && service.description}
                  </p>;
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {/* Stats Grid */}
                  <div className='grid grid-cols-2 gap-3 mb-4'>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Users className='w-4 h-4 text-cyan-400' />;
                      <span className='text-gray-300'>;
                        {service && service.customers}+ users;
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Star className='w-4 h-4 text-yellow-400' />;
                      <span className='text-gray-300'>;
                        {service && service.rating}/5 ({service && service.reviews});
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <TrendingUp className='w-4 h-4 text-green-400' />;
                      <span className='text-gray-300'>;
                        {service && service.growthRate}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2 text-sm'>;
                      <Shield className='w-4 h-4 text-blue-400' />;
                      <span className='text-gray-300'>;
                        {service && service.trialDays} day trial;
                      </span>                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space-x-3 mt-6'>;
                  {/* Stats Grid */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  <div className="grid grid-cols-2 gap-3 mb-4">;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Users className="w-4 h-4 text-cyan-400" />;
                      <span className="text-gray-300">{service && service.customers}+ users</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Star className="w-4 h-4 text-yellow-400" />;
                      <span className="text-gray-300">{service && service.rating}/5 ({service && service.reviews})</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <TrendingUp className="w-4 h-4 text-green-400" />;
                      <span className="text-gray-300">{service && service.growthRate}</span>;
                    </div>;
                    <div className="flex items-center space-x-2 text-sm">;
                      <Shield className="w-4 h-4 text-blue-400" />;
                      <span className="text-gray-300">{service && service.trialDays} day trial</span>;
                    </div>;
                  </div>;

                  {/* Action Buttons */}

                  <div className="flex space-x-3 mt-6">
                    <a
                      href={service.link}

                      target="_blank"
                      rel="noopener noreferrer"

                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group/btn">;
                      <span>Get Started</span>;
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />;
                    </a>;
                    <button className="px-4 py-3 border border-white/20 hover:border-cyan-400/50 text-white rounded-lg transition-all duration-300 hover:bg-white/5">;
                  </p>                      <div>;
                        <h3 className="text - xl font - bold text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                          {service.name}
                        </h3>;
                        <p className="text - gray - 400 text - sm">{service.tagline}</p>;
                      </div>;
                    </div>;
                    <div className="text - right">;
                      <div className="text - 2xl font - bold text - white">{service.price}</div>;
                      <div className="text - gray - 400 text - sm">{service.period}</div>;
                    </div>;
                  </div>;
                  {/* Description */}
                  <p className='text - gray - 300 mb - 4 leading - relaxed'>;
                    {service.description}
                  </p>;
                  {/* Stats Grid */}
                  <div className='grid grid - cols - 2 gap - 3 mb - 4'>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Users className='w - 4 h - 4 text - cyan - 400' />;
                      <span className='text - gray - 300'>;
                        {service.customers}+ users;
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Star className='w - 4 h - 4 text - yellow - 400' />;
                      <span className='text - gray - 300'>;
                        {service.rating}/5 ({service.reviews});
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <TrendingUp className='w - 4 h - 4 text - green - 400' />;
                      <span className='text - gray - 300'>;
                        {service.growth_rate}
                      </span>;
                    </div>;
                    <div className='flex items - center space - x-2 text - sm'>;
                      <Shield className='w - 4 h - 4 text - blue - 400' />;
                      <span className='text - gray - 300'>;
                        {service.trial_days} day trial;
                      </span>                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space - x-3 mt - 6'>;
                  {/* Stats Grid */}
                  <div className="grid grid - cols - 2 gap - 3 mb - 4">;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Users className="w - 4 h - 4 text - cyan - 400" />;
                      <span className="text - gray - 300">{service.customers}+ users</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Star className="w - 4 h - 4 text - yellow - 400" />;
                      <span className="text - gray - 300">{service.rating}/5 ({service.reviews})</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <TrendingUp className="w - 4 h - 4 text - green - 400" />;
                      <span className="text - gray - 300">{service.growth_rate}</span>;
                    </div>;
                    <div className="flex items - center space - x-2 text - sm">;
                      <Shield className="w - 4 h - 4 text - blue - 400" />;
                      <span className="text - gray - 300">{service.trial_days} day trial</span>;
                    </div>;
                  </div>;
                  {/* Action Buttons */}
                  <div className='flex space - x-3 mt - 6'>;
                    <a;
                      href={service.link}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2 group / btn';
                    >;
                      <span > Get Started</span>;
                      <ArrowRight className='w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 300' />;
                    </a>;
                    <button className='px - 4 py - 3 border border - white / 20 hover:border - cyan - 400 / 50 text - white rounded - lg transition - all duration - 300 hover:bg - white / 5'>                      Learn More                    <a;
                      href={service.link}
                      target="_blank";
                      rel="noopener noreferrer";
                      className="flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - semibold py - 3 px - 4 rounded - lg transition - all duration - 300 flex items - center justify - center space - x-2 group / btn";
                    >;
                      <span > Get Started</span>;
                      <ArrowRight className="w - 4 h - 4 group - hover / btn:translate - x-1 transition - transform duration - 300" />;
                    </a>;
                    <button className="px - 4 py - 3 border border - white / 20 hover:border - cyan - 400 / 50 text - white rounded - lg transition - all duration - 300 hover:bg - white / 5">;

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
            >
              Load More Revolutionary Services
            </button>
          </motion.div>
        )}
        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
=======        {/* Call to Action */}
        <motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion.div
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className='text-3xl font-bold text-white mb-4'>
            Ready to Experience the Future?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Join the revolution with our cutting-edge AI, quantum, and emerging
            technology services. Transform your business and stay ahead of the
            competition.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <a
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
            >
              Start Your Transformation
            </a>
            <a
              href='/pricing'
              className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'            >            Ready to Experience the Future?
=======

        <motion&& motion.div
          className='text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20'          initial={{ opacity: 0, y: 30 }}        <motion && motion.div 

          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
=======          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 && 0.8 }}
          viewport={{ once: true }}>;
          <h3 className='text-3xl font-bold text-white mb-4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
            Join the revolution with our cutting-edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;
            <a
              href='/contact'
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'>;
              Start Your Transformation;
            </a>;
            <a
              href='/pricing'


  )
};
export default RevolutionaryServicesShowcase;
=======
=======

              className='px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300'>            Ready to Experience the Future?;
          </h3>;
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
            Join the revolution with our cutting-edge AI, quantum, and emerging technology services. ;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex-col sm: flex-row items-center justify-center gap-4">;
            <a
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40">;
              Start Your Transformation;
            </a>;
            <a
              href="/pricing" 
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">;
              View Pricing;
            </a>;
          </div>;
        </motion && motion.div>;
      </div>;
    </section>;
  );
};
export default RevolutionaryServicesShowcase;  );

=======
  )


=======                {/* Floating Particles */}
                <div className='absolute inset - 0 pointer - events - none overflow - hidden'>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '20%', top: '30%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '35%', top: '40%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '50%', top: '50%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '65%', top: '60%' }}
                  ></div>;
                  <div;
                    className='absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60';
                    style={{ left: '80%', top: '70%' }}
                  ></div>                </div>                <div className="absolute inset - 0 pointer - events - none overflow - hidden">;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '20%', top: '30%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '35%', top: '40%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '50%', top: '50%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '65%', top: '60%' }}></div>;
                  <div className="absolute w - 1 h - 1 bg - cyan - 400 rounded - full opacity - 60" style={{ left: '80%', top: '70%' }}></div>;
              </div>;
            </motion.div>))}
        </motion.div>;
        {/* Load More Button */}
        {visible_services < filtered_services.length && (
          <motion.div;
            className='text - center'            initial={{ opacity: 0 }}          <motion.div;
            className="text - center";
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >;
            <button;
              on_click={load_more}
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40'            >              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Load More Revolutionary Services;
            </button>;
          </motion.div>)}
        {/* Call to Action */}
        <motion.div;
          className='text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20'          initial={{ opacity: 0, coordinate_y: 30 }}        <motion.div;
          className="text - center mt - 20 p - 8 bg - gradient - to - r from - cyan - 500 / 10 via - purple - 500 / 10 to - pink - 500 / 10 rounded - 2xl border border - cyan - 500 / 20";
          initial={{ opacity: 0, coordinate_y: 30 }}
          whileInView={{ opacity: 1, coordinate_y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >;
          <h3 className='text - 3xl font - bold text - white mb - 4'>;
            Ready to Experience the Future?;
          </h3>;
          <p className='text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto'>;
            Join the revolution with our cutting - edge AI, quantum, and emerging;
            technology services. Transform your business and stay ahead of the;
            competition.;
          </p>;
          <div className='flex flex - col sm:flex - row items - center justify - center gap - 4'>;
            <a;
              href='/contact';
              className='px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40';
            >;
              Start Your Transformation;
            </a>;
            <a;
              href='/pricing';
              className='px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300'            >            Ready to Experience the Future?;
          </h3>;
          <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
            Join the revolution with our cutting - edge AI, quantum, and emerging technology services.;
            Transform your business and stay ahead of the competition.;
          </p>;
          <div className="flex flex - col sm: flex - row items - center justify - center gap - 4">;
            <a;
              href="/contact";
              className="px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white font - semibold rounded - xl hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 shadow - lg shadow - cyan - 500 / 25 hover:shadow - cyan - 500 / 40";
            >;
              Start Your Transformation;
            </a>;
            <a;
              href="/pricing";
              className="px - 8 py - 4 border border - cyan - 500 / 30 text - cyan - 300 font - semibold rounded - xl hover:bg - cyan - 500 / 10 transition - all duration - 300";
            >;
              View Pricing;
            </a>;
          </div>;
        </motion.div>;
      </div>;
    </section>);
}
;
export default RevolutionaryServicesShowcase);
}
;
export default RevolutionaryServicesShowcase;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default RevolutionaryServicesShowcase;

export default RevolutionaryServicesShowcase;
;=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

};


export default RevolutionaryServicesShowcase;  )
}
export default RevolutionaryServicesShowcase;

export default RevolutionaryServicesShowcase;
export default RevolutionaryServicesShowcase;
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
