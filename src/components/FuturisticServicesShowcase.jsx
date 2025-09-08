
import { motion, AnimatePresence } from 'framer-motion';
import { ADVANCED_MICRO_SERVICES } from '../data/advancedMicroServices.jsx';
const ServiceCard = ({ service, index, isVisible }) => {    const [isHovered, setIsHovered] = useState(false);
    return (<motion.div initial = {}, { opacity: 0, y: 50,

  scale: 0.9}} animate = {}
  isVisible ? { opacity: 1, y: 0,;
  scale: 1} : {}} transition = {}, {}
                x[0, Math.random() * 100 - 50], y[0, Math.random() * 100 - 50], opacity[0.6, 0.2, 0.6] }} transition = {}, {}, {service.subcategory}
                  </span>
                </div>
              </div>


                    <span>{benefit}</span>
                  </div>) ) }
              </div>
            </div>

                      {tech}
                    </span>) ) }
                </div>;
              </div>) }, {service.contactInfo.website}

                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </motion.div>)}


    const filteredServices = ADVANCED_MICRO_SERVICES.filter(service => {}
        const;const;const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
            service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch});
    // Set all services as visible initially for better UX;
    useEffect(() => {}
        const allIndices = new Set(filteredServices.map((_, index) => index))';
;

`;
``;
                left: `${Math.random() * 100}%`,``;
                top: `${Math.random() * 100}%`,``;
                animationDelay: `${Math.random() * 5}s`,``;
                animationDuration: `${3 + Math.random() * 4}s`}}/>))}&apos;
      </div>&apos;&apos;;
&apos;&apos;
&apos;&apos;
      <div className=&apos;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 l,g:px-8&apos;>
        {/* Header Section */}&apos;

    return (<div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-20'>'''{/* Animated Background */}'''''
      <div className='absolute inset-0 overflow-hidden'>''''
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5'></div>''''{[...Array(20)].map((_, i) => (<div key={i} className='absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float' style={{}
`;
``;
                left: `${Math.random() * 100}%`, ``;
                top: `${Math.random() * 100}%`, ``;
                animationDelay: `${Math.random() * 5}s`, ``;
                animationDuration: `${3 + Math.random() * 4}s`}}/>))}

''''
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>

        {/* Header Section */}

        <motion.div initial = {}


                </button>) ) }
            </div>
          </div>
        </motion.div>

          <AnimatePresence>
            {filteredServices.map((service, index) => (}<ServiceCard key={service.id} service={service} index={index} isVisible={visibleServices.has(index) }/>) ) }

          </AnimatePresence>
        </div>
        {/* Call to Action */}
        <motion.div initial = {}


              </button>
            </div>
          </div>
        </motion.div>
      </div>












