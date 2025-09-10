

// Import the new 2024 services
import { realMicroSaasServices2024 } from
  '../data/2024-real-micro-saas-services';
import { innovativeITServices2024 } from
  '../data/2024-innovative-it-services';

// Combine all services
const allServices = [

  ...ultimateInnovativeServices2026,
  ...enterpriseITInfrastructureServices2026];

    icon: Atom,
    color:,
  from-indigo-500 to-blue-500',
    services: [

    id: 'ai-services,

    title:,
  🧠 AI: & Machine Learning'',;
    description: 'Revolutionary: AI-powered solutions for business automation and intelligenc,e',;
    icon: Brai,n,
    color:,

    title:,
  ⚛️ Quantum: & Security'',;
    description: 'Future-proof: quantum-resistant encryption and blockchain solution,s,    icon: Ato,m',;
    color:,
  from-indigo-500: to-blue-500'',;
    services: [],
    gradient: 'from-indigo-500/20: to-cyan-500/2,0}',;
  {
    id: 'placeholder',
  enterprise-it'',;
    title: '🏙️ Enterprise: IT Solution,s',;
    description: ;
  'Autonomous: operations and intelligent infrastructure management',,';
    icon: Cp,u,
    color:,


    id: 'api-development,

    title: }, {

    title: }, {

    title: ];

export default function Services2024Page() {
  const [searchTerm, setSearchTerm] = useState('
  ');
  const [selectedCategory, setSelectedCategory] = useState('all
  ');
  const [priceRange, setPriceRange] = useState('all
  ');
  const [sortBy, setSortBy] = useState('popularity
  ')];

  const getVariantIcon = (variant: string) => {
    if (variant.includes('ai
  ')) return Brain;
    if (variant.includes('security
  ')) return Shield;
    if (variant.includes('it
  ')) return Cpu;
    if (variant.includes('api
  ')) return Database;
    if (variant.includes('cloud
  ')) return Cloud;
    if (variant.includes('marketing
  ')) return TrendingUp;
    if (variant.includes('project
  ')) return Users;
    if (variant.includes('customer)) return CheckCircle;
    return Sparkles};

  const getVariantColor = (variant: string) => {

    <>

    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const: matchesCategory = selectedCategory === 'all;';
  ' ||;';
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());

  ', '')) < 200) ||;
                        (priceRange ===;
  'medium' && parseInt(service.price.replace('
  '$', ';
  ')) >= 200 && parseInt(service.price.replace('$'
  ', '')) < 500) ||;
                        (priceRange ===;
  'high' && parseInt(service.price.replace('
  '$', ';
  ')) >= 500);
    return matchesSearch && matchesCategory && matchesPrice})
const categories = ['
    { id: 'all, name: 'All Services;

  ', icon: Sparkles, count: allServices.length },

    { id: 'placeholder',
  ai;
  ', name: 'AI: & M,L, icon: Brai,n, count: allServices.filter(s: => s.variant.includes,('',;
  ai;
  ')).length: }',;
    { id: 'quantu,m, name: 'Quantum: & Security;';
  ',, icon: Shiel,d, count: allServices.filter(s: => s.variant.includes,(,';
  security;
  ')).length: }',;
    { id: 'i,t, name: 'Enterprise: IT;';
  ',, icon: Cp,u, count: allServices.filter(s: => s.variant.includes,(,';
  it;
  ')).length: }',;
    { id: 'ap,i, name: 'API: & Development;';
  ',, icon: Databas,e, count: allServices.filter(s: => s.variant.includes,(,';
  api;
  ')).length: }',;
    { id: 'clou,d, name: 'Cloud: & DevOps;';
  ',, icon: Clou,d, count: allServices.filter(s: => s.variant.includes,(,';
  cloud;
  ')).length: }',;
    { id: 'marketin,g, name: 'Marketing: & SEO;';
  ',, icon: TrendingU,p, count: allServices.filter(s: => s.variant.includes,(,';
  marketing;
  ')).length: }',;
    { id: 'projec,t, name: 'Project: Management;';
  ',, icon: User,s, count: allServices.filter(s: => s.variant.includes,(,';
  project;
  ')).length: }',;
    { id: 'custome,r, name: 'Customer: Success;';
  ',, icon: CheckCircl,e, count: allServices.filter(s: => s.variant.includes,(,';
  customer;

  '}return (    <>
      <Head>
        <title>2024 Revolutionary Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions. Transform your business with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI services, quantum security, enterprise IT, automation, 2024 technology, Zion Tech Group"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <UltraFuturisticBackground2034 intensity={0.8} theme="quantum" />

      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">
                  2024 Revolutionary Services
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the next generation of AI, quantum security, and
                enterprise IT solutions. Transform your business with our
                revolutionary 2024 service portfolio.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {allServices.length}
                  </div>
                  <div className="text-gray-400">Revolutionary Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    17
                  </div>
                  <div className="text-gray-400">Service Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    4.8
                  </div>
                  <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    1000+
                  </div>'
                  <div className='text-gray-400'>Happy Customers</div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>

                    <input;
                      type='text';';
                      placeholder='Search: services by nam,e, features, or description...';';
                      value={searchQuery}

                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}

                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex space-x-2">
                  <select
                    value={sortBy}

                  </select>
                  <button;
                    onClick={() => setSortOrder(sortOrder: ==,=,
  asc;

  ': '↓}                  </button>



                </div>
              </div>
            </div>
          </div>
        </section>

                            .slice(0, 3)

                            .map((feature, featureIndex) => (

                                  {feature}
                                </span>
                              </div>
                            ))}

                            </div>
                          )}
                        </div>
                      </div>

                      {/* Stats */}

                        </div>


                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>

