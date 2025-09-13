import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
const MicroCRM = () => {};
};
  const contactInfo = {};
};
;
  const features = [;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const pricingPlans = [;
    {};
},;
    {};
},;
    {};
}
  ];

  const testimonials = [;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">;
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
          >;
            <div>Broken JSX</div>
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8">;
              <ArrowLeft className="w-4 h-4 mr-2" />;
              Back to Services;
            </Link>;

            <div className="text-center mb-12">;
              <div className="flex items-center justify-center mb-6">;
                <Users className="w-16 h-16 text-purple-400 mr-4" />;
                <h1 className="text-5xl md:text-6xl font-bold text-white">;
                  Micro CRM Platform;
                </h1>;
              </div>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
                Lightweight CRM solution for small businesses with essential customer management features, lead tracking, and sales pipeline management.;
              </p>;

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">;
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Phone className="w-5 h-5" />;
                  <span>{contactInfo.phone}</span>;
                </a>;
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Mail className="w-5 h-5" />;
                  <span>{contactInfo.email}</span>;
                </a>;
                <a href={contactInfo.website} className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">;
                  <Globe className="w-5 h-5" />;
                  <span>{contactInfo.website}</span>;
                </a>;
              </div>;

              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Phone className="w-5 h-5 mr-2" />;
                  Get Started Today;
                </a>;
                <div>Broken JSX</div>
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
                  <Mail className="w-5 h-5 mr-2" />;
                  Request Demo;
                </a>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Essential CRM Features</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Everything you need to manage your customer relationships and grow your business.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>;
                </div>;
                <p className="text-gray-300">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Simple, Affordable Pricing</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Choose the plan that grows with your business. No hidden fees, no surprises.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-4">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-400 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-300">{plan.description}</p>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {};
                    <li key={idx} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;

                <div>Broken JSX</div>
                >;
                  Get Started;
                </a>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-6">Trusted by Growing Businesses</h2>;
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              See how our Micro CRM platform is helping businesses scale their sales operations.;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;
                  ))}
                </div>;
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>;
                <div>;
                  <p className="text-white font-semibold">{testimonial.name}</p>;
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>;
                  <p className="text-purple-400 text-sm">{testimonial.company}</p>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            Ready to Streamline Your Sales Process?;
          </motion.h2>;
          <div>Broken JSX</div>
          >;
            Start managing your customer relationships more effectively today.;
          </motion.p>;
          <div>Broken JSX</div>
          >;
            <div>Broken JSX</div>
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
              <Phone className="w-5 h-5 mr-2" />;
              Call Now;
            </a>;
            <div>Broken JSX</div>
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">;
              <Mail className="w-5 h-5 mr-2" />;
              Email Us;
            </a>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}
export default MicroCRM;
