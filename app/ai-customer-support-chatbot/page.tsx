import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import React from 'react';
export default function AICustomerSupportChatbot() 
    },
    
    },
    
    }
  ];

  const chatbotFeatures = [
    
    },
    
    },
    
    },
  ];

  const pricingPlans = [
    
    },
    
    },
    
    },
  ];
  const features = [
    
    },
    
    },
    
    },
    
    },
  ];

  const testimonials = [
    
    },
    
    },
    
    }
  ];

  return (
    <div /></div>
      <Helmet /></Helmet>
        <title />AI Customer Support Chatbot - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional AI customer support chatbot services by Zion Tech Group. Expert solutions tailored to your business needs."
        / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" /></div>
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20" /></div>
          <div className="text-center mb-16" /></div>
            <h1 className="text-5xl font-bold text-white mb-6" /></h1>
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" />
              Professional AI customer support chatbot services by Zion Tech
              Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
               /></Link>
                Get Started
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
               /></Link>
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" /></div>
            
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              ></di></div>
                <div className="flex justify-center mb-4" />{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2" /></h3>
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Chatbot Features Section */}
          <div className="mb-16" /></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12" /></h2>
              Comprehensive Chatbot Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
              
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                ></di></div>
                  <h3 className="text-xl font-semibold text-white mb-4" /></h3>
                    {category.category}
                  </h3>
                  <ul className="space-y-2" /></ul>
                    
                        key={itemIndex}
                        className="text-gray-300 flex items-center"
                      ></l></li>
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" /></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16" /></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12" /></h2>
              Simple, Transparent Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8" /></div>
              
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? "ring-2 ring-cyan-400" : ""}`}
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
                        className="text-gray-300 flex items-center"
                      ></l></li>
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" /></span>
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

          {/* Testimonials Section */}
          <div className="mb-16" /></div>
            <h2 className="text-3xl font-bold text-white text-center mb-12" /></h2>
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8" /></div>
              
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                ></di></div>
                  <div className="flex mb-4" /></div>
                    
                      <span key={i} className="text-yellow-400" /></span>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div /></div>
                    <p className="font-semibold text-white" />
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm" />
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center" /></div>
            <h2 className="text-3xl font-bold text-white mb-4" /></h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8" />
              Contact us to learn more about our solutions and how we can help
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
               /></Link>
                Contact Us
              </Link>
              <Link
                to="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
               /></Link>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}
