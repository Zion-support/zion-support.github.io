}
}
}
}
}
}
const renderServiceCard = (service: unknown, index: number) => (<motion.div <span>Popular</span> </div>) 
}</div> </div>) ) 
}</div> </div> > <span>Learn More</span> <ArrowRight className="w-4 h-4" /> </motion.button> </div> </div> </div> </div> > <div className="flex items-center justify-center space-x-2 mb-4" > <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center" > <Rocket className="w-5 h-5 text-white" /> </div> <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider" > Innovation 2026 </span> </div> <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" > Next-Generation <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" > AI & IT Services </span> </h2> </p> </motion.div> {
  /* AI Services Section */ 
}<motion.div > <div className="flex items-center space-x-3 mb-8" > <Brain className="w-6 h-6 text-cyan-400" /> <h3 className="text-2xl font-bold text-white" >AI-Powered Services</h3> </div> <motion.div > {
  innovative2026AIServices.map ( (service, index) => renderServiceCard (service, index) ) 
}</motion.div> </motion.div> {
  /* IT Infrastructure Section */ 
}<motion.div > <div className="flex items-center space-x-3 mb-8" > <Globe className="w-6 h-6 text-purple-400" /> <h3 className="text-2xl font-bold text-white" >IT Infrastructure & Security</h3> </div> <motion.div > {
  innovative2026ITInfrastructureServices.map ( (service, index) => renderServiceCard (service, index) ) 
}</motion.div> </motion.div> {
  /* Micro SAAS Section */ 
}<motion.div initial= {
  {
  opacity: 0, y: 30 
}
}whileInView= {
  {
  opacity: 1, y: 0 
}
}transition= {
  {
  duration: 0.8, delay: 0.6 
}

className='text-center mb-16'
         />
          <div className='flex items-center justify-center space-x-2 mb-4' />
            <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center' />
              <Rocket className='w-5 h-5 text-white' />
            </div>
            <span className='text-cyan-400 font-semibold text-sm uppercase tracking-wider' />
              Innovation 2026;
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6' />
            Next-Generation;
            <span className='block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' />
              AI & IT Services;
            </span>
          </h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed' />
            Discover our cutting-edge micro SAAS solutions, AI-powered;
platforms, and quantum-enhanced infrastructure services designed for;
the future of business.
          </p>
        </motion.div>

      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40' />;
      <div className='container mx-auto px-4 relative z-10' />;
        {/* Section header */}<motion.div;
          initial={{ opacity: 0, y: 30 }
}
          whileInView={{ opacity: 1, y: 0 }
}


          transition={{ duration: 0.8, delay: 0.2 }}
className='mb-20'
         />
          <div className='flex items-center space-x-3 mb-8' />
            <Brain className='w-6 h-6 text-cyan-400' />
            <h3 className='text-2xl font-bold text-white' />
              AI-Powered Services;
            </h3>
          </div>
          <motion.div;
variants={containerVariant}
}
            initial='hidden'
            whileInView='visible'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
           />
            {innovative2026AIServices.map((service, index) =>
              renderServiceCard(service, index)}
}
            )}
          </motion.div>
        </motion.div>

          transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }
}
          className='mb-20'>;
          <div className='flex items-center space-x-3 mb-8' />;
            <Brain className='w-6 h-6 text-cyan-400' />;
            <h3 className='text-2xl font-bold text-white' />;
              AI-Powered Services;
            </h3>;
          </div>;
            variants={containerVariants}
            initial='hidden';
            whileInView='visible';
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>;
            {innovative2026AIServices && innovative2026AIServices.map((service, index) =>;}
              renderServiceCard(service, index))}          </motion && motion.div>        >;
          <div className="flex items-center space-x-3 mb-8" />;"
            <Brain className="w-6 h-6 text-cyan-400" />;"
            <h3 className="text-2xl font-bold text-white" />AI-Powered Services</h3>;
          </div>;
          <motion&& motion.div;
            variants={containerVariants}"
            initial="hidden";"
            whileInView="visible";"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />;
            {innovative2026AIServices && innovative2026AIServices.map((service, index) => renderServiceCard(service, index))}
          </motion && motion.div>;
        </motion && motion.div>;{/* IT Infrastructure Section */}
        <motion&& motion.div;
          initial={{ opacity: 0, y: 30 }
}

          whileInView={{ opacity: 1, y: 0 }
}

          transition={{ duration: 0.8, delay: 0.4 }}
className='mb-20'
         />
          <div className='flex items-center space-x-3 mb-8' />
            <Globe className='w-6 h-6 text-purple-400' />
            <h3 className='text-2xl font-bold text-white' />
              IT Infrastructure & Security;
            </h3>
          </div>
          <motion.div;
variants={containerVariant}
}
            initial='hidden';
            whileInView='visible';
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' />

            {innovative2026ITInfrastructureServices.map((service, index) =>;}
              renderServiceCard(service, index))}
          </motion.div>;
        </motion.div>;
          transition={{ duration: 0 && 0.8, delay: 0 && 0.4 }
}
          className='mb-20'>;
          <div className='flex items-center space-x-3 mb-8' />;
            <Globe className='w-6 h-6 text-purple-400' />;
            <h3 className='text-2xl font-bold text-white' />;
              IT Infrastructure & Security;
            </h3>;
          </div>;
        {/* Micro SAAS Section */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }
}
          whileInView={{ opacity: 1, y: 0 }
}
          transition={{ duration: 0.8, delay: 0.6 }
}
         />;
<div className='flex items-center space-x-3 mb-8' />;
            <Zap className='w-6 h-6 text-pink-400' />;
            <h3 className='text-2xl font-bold text-white' />;
              Micro SAAS Solutions;
            </h3>;
          </div>;
          <motion.div;
          <motion&& motion.div;
            variants={containerVariants}

            initial='hidden'
            whileInView='visible'

            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
           />
            {innovative2026MicroSaasServices.map((service, index) =>}
              renderServiceCard(service, index)}
            )}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div;
          initial={{ opacity: 0, y: 30 }
}
          whileInView={{ opacity: 1, y: 0 }
}
          transition={{ duration: 0.8, delay: 0.8 }
}

className='text-center mt-16'
         />
          <div className='bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8' />
            <h3 className='text-2xl font-bold text-white mb-4' />
              Ready to Transform Your Business?
            </h3>
            <p className='text-slate-300 mb-6 max-w-2xl mx-auto' />
              Join thousands of businesses already leveraging our innovative AI;
and IT services to drive growth, efficiency, and competitive;
advantage.
            </p>
            <div className='flex flex-col sm: flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4' />
              <motion.button;
whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-cyan-500/25'
               />
                Start Free Trial;
              </motion.button>
              <motion.button;
whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }
}

className='border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-slate-800/50'
               />
                Schedule Demo;
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

  );
}

"