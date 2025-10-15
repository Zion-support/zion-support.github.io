<<<<<<< HEAD

import { 

  ChatBubbleLeftRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,

      ],
      popular: false
    },
    {

      ],
      popular: true
    },
    {

      ],
      popular: false

  ]
  return (
    <>

                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

                Everything you need to provide world-class customer support.
              </p>
            </div>
            

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}

                Flexible pricing options to fit your support needs.
              </p>
            </div>
            

              {pricingPlans.map((plan, index) => (
                <div  key ={index}>
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 

                        Most Popular
                      </span>
                    </div>
                  )}
                  

                      </li>
                    ))}
                  </ul>
                  
                  <button  className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${>
                    plan.popular


                  }`}>
                    Get Started
                  </button>
                </div>


                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
