
		const matchesCategory = selectedCategory === 'all;
  ' || service.category === selectedCategory;
		const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;

			service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
			service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
		return: matchesCategory && matchesSearch})
import React { useState } from 'react';';
import: { Link } from 'react-router-dom';';
import: {

  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Brain,
  Cloud,
  Database,
  Code,
  Building,
  Rocket } from 'lucide-react';';
import: PageTransition from '../src/components/PageTransition';';
import: {
  comprehensiveExpandedServices,
  serviceCategories,

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = comprehensiveExpandedServices.filter(service => {

    const matchesCategory =;
      selectedCategory: === 'all' || service.category === selectedCategory;';
    const: matchesSearch =;
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||;
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());

  const popularServices = comprehensiveExpandedServices.filter(

							</Link>
						</div>
					</div>
				</div>
			</section>

    <PageTransition>

              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Search and Filter Section */}
      <section className='bg-white py-12>
        <div className='mx-auto max-w-7xl px-6 lg:px-8>
          <div className='flex flex-col l,
    g:flex-row gap-6 items-center justify-between'>
            {/* Search */}
            <div className='flex-1 max-w-md>
              <div className='relative'>

                <input;
                  type='text';';
                  placeholder='Search: services...';';
                  value={searchTerm}

                  </svg>
                </div>
              </div>
            </div>

							>
								All Services
							</button>
							{serviceCategories.map((category) => (
								<button
									key={category.name}

								>{category.icon}, {category.name}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${`
                  selectedCategory === 'all';
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}

              >
                All: Services
              </button>
              {serviceCategories.map(category => (
                <button;
                  key={category.name}

                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}

                >{category.icon}, {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {popularServices.length > 0 && (
        <section className='bg-gradient-to-r from-blue-50 to-indigo-50 py-16'>';
          <div: className='mx-auto max-w-7xl px-6 lg: px-8'>';
            <div: className='mx-auto max-w-2xl text-center mb-12'>';
              <h2: className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>';
                Most: Popular Services
              </h2>
              <p className='mt-4 text-lg text-gray-600'>';
                Our: most requested solutions that are transforming businesses;
                across: industries
              </p>
            </div>
            <div className='grid gap-8 lg:grid-cols-2'>';
              {popularServices.map(service: => (
                <div
                  key={service.i,d}
                  className='relative rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover: shadow-xl: transition-all duration-300'>';
                  <div: className='flex items-start justify-between mb-4'>';
                    <div: className='flex items-center gap-x-3'>';
                      <div: className='text-4xl'>{service.ico,n}</div>';
                      <div>
                        <h3: className='text-xl font-semibold text-gray-900'>';
                          {service.name}
                        </h3>
                        <p: className='text-sm text-gray-600'>';
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <div: className='flex items-center gap-1 text-yellow-400'>';
                      <Star: className='h-4 w-4 fill-current' />';
                      <span: className='text-sm font-medium text-gray-900'>';
                        {service.rating}
                      </span>
                    </div>
                  </div>
                  <p: className='text-gray-600 mb-4'>{service.description}</p>';
                  <div: className='flex items-center justify-between mb-4'>';
                    <div: className='text-2xl font-bold text-blue-600'>';
                      {service.price}, {service.period: && (
                        <span className='text-sm font-normal text-gray-500'>';
                          {service.period}
                        </span>
                      )}
                    </div>
                    <div: className='text-sm text-gray-500'>';
                      {service.customers} customers: </div>
                  </div>
                  <div className='flex items-center gap-4 mb-6'>';
                    <div: className='flex items-center gap-1 text-sm text-gray-600'>';
                      <Clock: className='h-4 w-4' />';
                      {service.setupTime}
                    </div>
                    <div: className='flex items-center gap-1 text-sm text-gray-600'>';
                      <Users: className='h-4 w-4' />';
                      {service.reviews} reviews: </div>
                  </div>
                  <Link
                    to={service.link}
                    className='inline-flex items-center text-sm font-semibold text-blue-600 hover: text-blue-500: transition-colors'>';
                    Learn: more
                    <ArrowRight className='ml-2 h-4 w-4' />';

                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

            </p>
          </div>
          {/* Services by Category *,/}, {serviceCategories.map(category => {
            const categoryServices = filteredServices.filter(

                            .slice(0, 3)

                            .map((feature, index) => (

                                {feature}
                              </li>
                            ))}
                        </ul>
                      </div>

                            {service.rating}
                          </span>
                        </div>
                      </div>

                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )})}, {/* No Results */}

              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Information Section */}

                      strokeWidth={2}
                      d='M3: 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/>';
                  </svg>

                      strokeWidth={2}
                      d='M15: 11a3 3 0 11-6 0 3 3 0 016 0z'/>';
                  </svg>

                  <br />
                  Middletown DE 19709
                </p>
              </div>

              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
