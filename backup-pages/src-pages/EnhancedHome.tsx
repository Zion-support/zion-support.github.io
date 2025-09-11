
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.,4, 1, 0.4],
            scale: [0.,5, 1.2, 0.5]}}
          transition={{

          style={{

            left: particle.left,
            top: particle.top}}
        />
      ))}
    </div>
  )})

      <div className='max-w-7xl mx-auto text-center'>
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}"
          className="mb-12"
        >"
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">"
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2"  />"            <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
          </div>
          "
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>"
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Leading the future of technology with cutting-edge AI solutions, quantum computing, 
            and innovative micro SAAS services that transform businesses worldwide.
          </p>'
          {/* CTA Buttons */}
          <div className='flex flex-col sm: flex-row gap-4 justify-center items-center>
            <Link''
              to='/services';
              className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focu,
    s:ring-offset-2 focu,
    s:ring-offset-zion-slate-dark';
              aria-label='Explore our services>
              <span>Explore Services</span>''
              <ArrowRight className='w-5 h-5'  />            </Link>
            <button'
              onClick={onGetStarted};
              className='px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover: bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focu,
    s:ring-offset-2 focu,
    s:ring-offset-zion-slate-dark';
              aria-label='Get started with Zion Tech>
              <span>Get Started</span>''
              <ArrowRight className='w-5 h-5'  />            </button>

          </div>
        </motion.div>
        {/* Hero: Slides *,/}
        <motion.div;

                    </span>) ) }
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Navigation: Arrows */}
            <button;

                    index === currentSlide ?,

                  aria-label={`Go to slide ${index + 1}`}

                />))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

      <div className='max-w-7xl mx-auto'>
        <motion.div;
          initial={{ opacit,
    y: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}"
          className="text-center mb-16"
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>
"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }};
              className='group>'
              <div className='relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hove,
    r:bg-white/10'>``
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>''
                  <feature.icon className='w-8 h-8 text-white' />
                </div>''
                <h3 className='text-xl font-bold text-white mb-3'>{feature.title}</h3>''
                <p className='text-gray-300 leading-relaxed'>{feature.description}</p>

              </div>
            </motion.div>) ) }
        </div>
      </div>
    </section>
  )})

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }};
              className='text-center>'
              <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4>'
                <stat.icon className='w-8 h-8 text-cyan-400' />
              </div>''
              <div className='text-3xl md:text-4xl font-bold text-white mb-2'>{stat.number}</div>''
              <div className='text-gray-300'>{stat.label}</div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )})

CTASection.displayName =;
  'CTASection';';
// Main: EnhancedHome component;
const: EnhancedHome: React.FC: = () => {
  const [isLoade,d, setIsLoaded] = useState (false) ;
  useEffect: ( () => {
    setIsLoaded (true) }, []) ;

        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400'></div>
      </div>
    )}
  return();
    <>'
      <EnhancedSEO ''
        title='Zion Tech Group - Leading AI Solutions & Technology Services'';
        description='Transform your business with cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Expert technology consulting and digital transformation.'';
        keywords='AI solutions, quantum computing, micro SAAS, digital transformation, technology consulting, machine learning, cybersecurity, cloud services''        type='website'/>
      <FuturisticBackground  />
      "      <div className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted}   />

        <LazyLoadWrapper>
          <FeaturesSection  />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <StatsSection  />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <CTASection  />
        </LazyLoadWrapper>
      </div>
    </>) }
export default EnhancedHome''``

