

import { 
  Cloud, 
  Zap, 
  BarChart3, 
  Leaf,
  Truck,
  FileText,
  Target,
  Users,
  Shield,
  Globe,
  Smartphone,
  Laptop,
  Monitor,
  Database,
  Camera,
  HardDrive,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  TrendingUp,
  Building,
  ShoppingCart,
  BookOpen,
  Heart,
  Car,
  Cpu,
  Settings,
  Lock,
  Wifi,
  Network,
  Server,
  Code,
  Package,
  GraduationCap,
  Atom,
  AlertTriangle,
  Link as LinkIcon,
  Award as AwardIcon,

import ErrorBoundary from '../components/ErrorBoundary';
export default function MicroSaaS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta
          name='description'
          content='Explore our 150+ innovative micro SaaS products including AI-powered tools, analytics dashboards, automation solutions, and security services.'

            </div>
          </section>

          {/* Category Filter */}


          {/* Products Grid */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {product.popular && (
                      <div className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}

                    <h3 className='text-xl font-bold mb-3'>{product.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {product.description}
                    </p>

                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0'></span>                            {feature}
                          </li>
                        ))}

                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {product.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {product.category}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Why Choose Our Micro SaaS Products?
              </h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />

                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>
                  <p className='text-slate-400'>
                    Quick setup and deployment in minutes, not months
                  </p>
                </div>


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'

                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}

                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cost Effective</h3>
                  <p className='text-slate-400'>
                    Affordable pricing with no hidden costs or long-term
                    contracts
                  </p>
                </div>

                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'

                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'

                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Focused Solutions</h3>
                  <p className='text-slate-400'>
                    Specialized tools that solve specific business problems
                  </p>
                </div>


                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'

                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}

                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Easy Integration</h3>
                  <p className='text-slate-400'>
                    Seamless integration with your existing tools and workflows
                  </p>                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>

                Ready to Get Started?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our experts to discuss which micro SaaS products are
                right for your business and get started with a free trial.
              </p>


                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors'
                >
                  Call {contact.phone}
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'                >
                  Email Us
                </a>
              </div>

            </motion.div>
          </div>
        </section>


                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <product.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {product.category}

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {product.pricing}
                    </span>
                  </div>

                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                  >

                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>
  );


        </main>
      </ErrorBoundary>
    </>
  )
}

