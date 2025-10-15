

import { 

  CurrencyDollarIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,

  ChartBarIcon, ReceiptPercentIcon;
} from '@heroicons/react/24/outline'";
const ExpenseTrackerProPage: React.FC = () => {
  const features  = ['Smart Receipt Scanning',"'Automatic Categorization',"'Real-time Expense Tracking',"'Budget Management',"'Multi-Currency Support',"'Team Collaboration',"'Advanced Reporting',"'Mobile App Integration'";
  ];
  const pricingPlans  = [    {name: 'Personal',;      price: '$9',";
      period: '/month',";      description: 'Perfect for individuals',;
      features: [

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
    }
  ]
  return (
    <>

      />
            <div className ="min-h-screen bg-slate-900 text-white">";
        {/* Hero Section */}
        <section className ="relative overflow-hidden py-20 lg:py-32">";
          <div className ="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-slate-900 to-orange-900/30"></div>";
          <div className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className ="text-center">";
              <h1 className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";
                <span className ="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">";
                  Expense Tracker Pro
                </span>
              </h1>
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Take control of your finances with our advanced expense tracking solution. 
                Smart receipt scanning, automatic categorization, and comprehensive reporting.
              </p>
              <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className ="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">";
                  Start Free Trial
                </button>

                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

                Everything you need to track, manage, and analyze your expenses.
              </p>
            </div>

              {features.map((feature, index) => (
                <div key ={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
                >

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}

                Flexible pricing options to fit your financial tracking needs.
              </p>
            </div>

              {pricingPlans.map((plan, index) => (
                <div  key ={index}
                  className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    plan.popular 

                        Most Popular
                      </span>
                    </div>
                  )}

                    </div>
                  </div>
                  
                  <ul className ="space-y-3 mb-8">";
                    {plan.features.map((feature, featureIndex) => (

                      </li>
                    ))}
                  </ul>
                  
                  <button  className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular

                  }`}>
                    Get Started
                  </button>
                </div>

              Ready to Take Control of Your Expenses?
            </h2>
            <p className ="text-lg text-gray-300 mb-8">";
              Start your free trial today and see how our expense tracker can simplify your financial management.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">";
                Start Free Trial
              </button>

                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>

