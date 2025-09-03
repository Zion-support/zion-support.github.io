
import {}
  Brain,;
  Shield,;
  Rocket,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  Users,;
  TrendingUp,;
  CheckCircle,;
  DollarSign,';



// Import the new service data;
;&apos;&apos;
const serviceCategories = []{}

    services: revolutionary2027AIInnovationServices}
];&apos;&apos;
export function ComprehensiveServicesShowcase() {}
';

      opacity: 1,
      transition: {}
        staggerChildren: 0.1, delayChildren: 0.2}

    }
  }
;
  const itemVariants = {}

    visible: {}
      y: 0, opacity: 1,
      transition: {}


    }
  }
;&apos;&apos;
  const cardVariants = {}

    visible: {}
      scale: 1, opacity: 1,
      transition: {}

          initial = {}, { opacity: 0, y: 30}}

          animate = {}, { opacity: 1,;
  y: 0}}

            Discover cutting-edge micro SAAS solutions, advanced IT infrastructure, and innovative AI services;
            designed to transform your business and drive exponential growth.&apos;

          </p>

              </p>
            </div>
          </div>
        </motion.div>

          initial = {}, { opacity: 0, y: 20}}

          animate = {}, { opacity: 1,;
  y: 0}}
          transition = {}

  delay: 0.2}}
        >{serviceCategories.map ( (category) => (&apos}&apos;<button;

              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${}
`;

              <span>{category.name}</span>
            </button>) ) }
        </motion.div>
        {/* Services Grid */}&apos;&apos;
&apos;&apos;
        <motion.div&apos;&apos;&apos;
          className=&apos;grid grid-cols-1 md:grid-cols-2 l,g:grid-cols-3 gap-8&apos;&apos;'';
          variants={containerVariants}&apos;&apos;'';
          initial=&apos;hidden&apos;&apos;'';
          animate=&apos;visible&apos;&apos;
>{currentServices.map((service) => (&apos}&apos;
            <motion.div&apos;&apos;;
              key={service.id}&apos;&apos;'';
              className=&apos;group cursor-pointer&apos;&apos;
;
              variants={itemVariants}
              onClick={ () => setSelectedService (service) }
            >&apos;&apos;&apos;&apos;
              <motion.div&apos;&apos;'';
                className=&apos;bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full&apos;&apos;
;
                variants={cardVariants}
                whileHover = {}, {}
&apos;&apos;;
                  y: -8,&apos;&apos;'';
                  boxShadow: &apos;0 20px 40px rgba(0, 0, 0,&apos;&apos;'';
  0.3)&apos}}
              >&apos;&apos;
{/* Service Header */}&apos;&apos;&apos;&apos;'
                <div className=&apos;flex items-start justify-between mb-4&apos;>'&apos;&apos;
&apos;&apos;
                  <div className=&apos;text-4xl&apos;>{service.icon}&apos;</div>&apos;&apos;{service.popular && (&apos;&apos;'&apos;&apos}'
                    <div className=&apos;bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium&apos;>
                      Popular&apos;
                    </div>) }
                </div>
&apos;&apos;
{/* Service Info */}&apos;&apos;&apos;&apos;

                <h3 className=&apos;text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors&apos;>
                  {service.name}&apos;&apos;&apos;&apos;
                </h3>&apos;&apos;
&apos;&apos;
                <p className=&apos;text-zion-cyan-light text-sm mb-4 line-clamp-2&apos;>
                  {service.tagline}&apos;
                </p>
&apos;&apos;
{/* Pricing */}&apos;&apos;&apos;&apos;'
                <div className=&apos;flex items-center justify-between mb-4&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex items-center space-x-2&apos;>'&apos;&apos;
&apos;&apos;
                    <DollarSign className=&apos;w-5 h-5 text-zion-cyan&apos; />&apos;&apos;&apos;&apos;

                    <span className=&apos;text-2xl font-bold text-white&apos;>{service.price}&apos;</span>&apos;&apos;&apos;&apos;

                    <span className=&apos;text-zion-cyan-light&apos;>{service.period}&apos;</span>&apos;&apos;&apos;&apos;
                  </div>&apos;&apos;
&apos;&apos;
                  <div className=&apos;flex items-center space-x-1&apos;>'&apos;&apos;
&apos;&apos;
                    <Star className=&apos;w-4 h-4 text-yellow-400 fill-current&apos; />&apos;&apos;&apos;&apos;

                    <span className=&apos;text-white text-sm&apos;>{service.rating}&apos;</span>&apos;&apos;&apos;&apos;

                    <span className=&apos;text-zion-cyan-light text-sm&apos;>({service.reviews})&apos;</span>
                  </div>
                </div>
&apos;&apos;{/* Features Preview */}&apos;&apos;
&apos;&apos;
                <div className=&apos;mb-4&apos;>'&apos;&apos;
&apos;&apos;
                  <div className=&apos;flex flex-wrap gap-2&apos;>
                    {service.features.slice(0, 3).map((feature, index) => (&apos}
                      <span&apos;&apos;
                        key={index}&apos;&apos;'';
                        className=&apos;bg-zion-slate/50 text-zion-cyan-light text-xs px-2 py-1 rounded-full &apos;>{feature}&apos;&apos;
                      </span>
                    ))}&apos;&apos;
{service.features.length > 3 && (&apos;&apos;&apos;&apos}'
                      <span className=&apos;bg-zion-cyan/20 text-zion-cyan text-xs px-2 py-1 rounded-full&apos;>
                        +{service.features.length-3} more&apos;
                      </span>) }
                  </div>
                </div>
&apos;&apos;
{/* Market Info */}&apos;&apos;&apos;&apos;'
                <div className=&apos;mb-4 p-3 bg-zion-slate/30 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex items-center justify-between text-xs&apos;>'&apos;&apos;
&apos;&apos;
                    <span className=&apos;text-zion-cyan-light&apos;>Market Size:&apos;</span>&apos;&apos;&apos;&apos;

                    <span className=&apos;text-white font-medium&apos;>{service.marketSize}&apos;</span>&apos;&apos;&apos;&apos;
                  </div>&apos;&apos;
&apos;&apos;
                  <div className=&apos;flex items-center justify-between text-xs mt-1&apos;>'&apos;&apos;
&apos;&apos;
                    <span className=&apos;text-zion-cyan-light&apos;>Growth Rate:&apos;</span>&apos;&apos;&apos;&apos;

                    <span className=&apos;text-green-400 font-medium&apos;>{service.growthRate}&apos;</span>
                  </div>
                </div>
&apos;&apos;{/* CTA Button */}&apos;&apos;
&apos;&apos;
                <div className=&apos;flex items-center justify-between&apos;>&apos;

                  <Link&apos;&apos;;
                    to={service.link}&apos;&apos;'';
                    className=&apos;flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 &apos;>'&apos;&apos;''
                    <span>Learn More</span>&apos;&apos;
&apos;&apos;
                    <ArrowRight className=&apos;w-4 h-4 group-hove,r:translate-x-1 transition-transform&apos; />&apos;&apos;
&apos;&apos;
                  </Link>&apos;&apos;&apos;&apos;'
                  <div className=&apos;text-xs text-zion-cyan-light&apos;>
                    {service.trialDays} day trial&apos;

          animate = {}, { opacity: 1,;
  y: 0}}
          transition = {}

              </a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Service Detail Modal */}
      <AnimatePresence>


            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={ () => setSelectedService (null) }

              initial = {}, { scale: 0.9, opacity: 0}}

              animate = {}, { scale: 1,;
  opacity: 1}}
              exit = {}

                      </li>
                    ))}
                  </ul>
                </div>

                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
    </section>







