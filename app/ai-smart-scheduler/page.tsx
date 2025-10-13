import { Link } from 'react-router-dom';
import React from 'react';
export default function AISmartScheduler() 
    },
    
    },
    
    }
  ];

  const features = [
    
    },
    
    },
    
    },
    
    },
  ];

  const pricingPlans = [
    
    },
    
    },
    
    },
  ];

  return (
    <Layout /></Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen flex items-center" /></section>
        <div className="container mx-auto px-4 py-20" /></div>
          <div className="text-center" /></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" /></h1>
              AI-Powered Scheduling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Transform your scheduling chaos into organized efficiency with our
              intelligent AI-powered scheduler. Optimize meetings, coordinate
              teams, and maximize productivity automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
               /></Link>
                Start Free Trial
              </Link>
              <Link
                to="#demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
               /></Link>
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900" /></section>
        <div className="container mx-auto px-4" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" /></h2>
              Intelligent Scheduling Features
            </h2>
            <p className="text-gray-300 text-lg" />
              Powered by advanced AI to make scheduling effortless and efficient
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
            
              <div key={index} className="bg-gray-800 p-6 rounded-lg" /></div>
                <div className="flex items-center mb-4" /></div>
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3" /></h3>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800" /></section>
        <div className="container mx-auto px-4" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" /></h2>
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-300 text-lg" />
              Choose the plan that fits your team size and needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8" /></div>
            
                key={index}
                className={`bg-gray-900 p-8 rounded-lg relative ${plan.popular ? "ring-2 ring-cyan-400" : ""}`}
              ></di></div>
                
                )}
                <h3 className="text-2xl font-bold text-white mb-2" /></h3>
                  {plan.name}
                </h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6" /></div>
                  <span className="text-4xl font-bold text-white" /></span>
                    {plan.price}
                  </span>
                  <span className="text-gray-400" />{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8" /></ul>
                  
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    ></l></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" / />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className=
                  }`}
                 /></Link>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900" /></section>
        <div className="container mx-auto px-4" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-3xl font-bold text-white mb-4" /></h2>
              Trusted by Teams Worldwide
            </h2>
            <p className="text-gray-300 text-lg" />
              See what our customers say about AI Smart Scheduler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8" /></div>
            
              <div key={index} className="bg-gray-800 p-6 rounded-lg" /></div>
                <div className="flex mb-4" /></div>
                  
                    <Clock key={i} className="w-5 h-5 text-yellow-400" / />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="font-semibold text-white" /></div>
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-400" /></div>
                  {testimonial.company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700" /></section>
        <div className="container mx-auto px-4 text-center" /></div>
          <h2 className="text-3xl font-bold text-white mb-4" /></h2>
            Ready to Transform Your Scheduling?
          </h2>
          <p className="text-gray-200 text-lg mb-8" />
            Join thousands of teams already using AI Smart Scheduler to optimize
            their productivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
             /></Link>
              Start Your Free Trial
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
             /></Link>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
