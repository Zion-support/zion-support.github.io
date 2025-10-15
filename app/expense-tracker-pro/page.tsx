
import { 

  CurrencyDollarIcon, 
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
    }
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

                Everything you need to track, manage, and analyze your expenses.
              </p>
            </div>
            

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
                  

                      </li>
                    ))}
                  </ul>
                  
                  <button  className ={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
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

