

import { 

  ChatBubbleLeftRightIcon, 
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,

  PhoneIcon, EnvelopeIcon;
} from '@heroicons/react/24/outline'";
const CustomerSupportHubPage: React.FC = () => {
  const features  = ['Multi-Channel Support',"'AI-Powered Chatbots',"'Ticket Management System',"'Knowledge Base Integration',"'Real-time Analytics',"'Customer Satisfaction Tracking',"'Automated Workflows',"'24/7 Support Availability'";
  ];
  const pricingPlans  = [    {name: 'Basic',;      price: '$49',";
      period: '/month',";      description: 'Perfect for small teams',;
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
          <div className ="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>";
          <div className ="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">";
            <div className ="text-center">";
              <h1 className ="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">";
                <span className ="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">";
                  Customer Support Hub
                </span>
              </h1>
              <p className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">";
                Deliver exceptional customer support with our comprehensive platform. 
                Multi-channel support, AI-powered chatbots, and advanced analytics all in one place.
              </p>
              <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
                <button className ="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">";
                  Start Free Trial
                </button>

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

              {features.map((feature, index) => (
                <div key ={index}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105"
                >

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

              Ready to Transform Your Support?
            </h2>
            <p className ="text-lg text-gray-300 mb-8">";
              Start your free trial today and see how our customer support hub can revolutionize your customer experience.
            </p>
            <div className ="flex flex-col sm:flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">";
                Start Free Trial
              </button>

                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>

