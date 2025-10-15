import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
              </p>
            </div>
          </div>
        </section>

                  </div>
                  <p: className ="text-gray-300 mb-6 leading-relaxed">""";
                    {service.description}
                  </p>
                  <ul: className ="space-y-3 mb-6">""";
                    {service.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center text-gray-300">""";
                        <CheckIcon: className ="w-5 h-5 text-green-400 mr-3" />""";
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link: to ="/contact""";
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all""";
                  >
                    Learn More
                    <ArrowRightIcon: className ="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />""";
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}

              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>

      ],
      popular: false
    };
  ],

                      {benefit};
                    </li>
                  ))};
                </ul>
              </div>
            ))};

                    Start Free Trial
                  </>
                </div>
              </div>
            ))};

                  }`};
                ></>
                  Get Started
                </>
              </div>
            ))};

        </div>
      </div>
    </>,";
  ),";";
};";";";
"

=======
const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive page solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Page Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
