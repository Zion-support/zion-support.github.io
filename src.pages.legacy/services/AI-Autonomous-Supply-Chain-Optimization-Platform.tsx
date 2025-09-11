import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import {};
} from 'lucide-react';
;
const AIAutonomousSupplyChainOptimizationPlatform: React.FC = () => {};
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

  const useCases = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  const benefits = [;
    {};
},;
    {};
},;
    {};
},;
    {};
}
  ];

  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">;
      <div>Broken JSX</div>
      />;

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            <div className="flex items-center justify-center mb-6">;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">;
                <Brain className="w-8 h-8 text-white" />;
              </div>;
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">;
                <Truck className="w-8 h-8 text-white" />;
              </div>;
            </div>;

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              AI Autonomous Supply Chain Optimization Platform;
            </h1>;

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">;
              Transform your supply chain operations with the world's most advanced AI platform that autonomously optimizes logistics, inventory management, and demand forecasting.;
            </p>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">;
                Get Started Today;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300">;
                <Phone className="mr-2 w-5 h-5" />;
                +1 302 464 0950;
              </a>;
            </div>;
          </motion.div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Proven Results;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Our platform delivers measurable improvements across all supply chain operations;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {};
                <div className="text-5xl font-bold text-green-400 mb-2">{benefit.metric}</div>;
                <div className="text-xl font-semibold text-white mb-2">{benefit.description}</div>;
                <div className="text-slate-300">{benefit.detail}</div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary Features;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Experience the future of supply chain management with cutting-edge AI capabilities;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>;
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>;

                <ul className="space-y-3">;
                  {};
                    <li key={idx} className="flex items-center text-slate-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
                      {benefit}
                    </li>;
                  ))}
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Choose the plan that fits your business needs and scale as you grow;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            {};
                )}

                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <p className="text-slate-400 mb-6">{plan.description}</p>;

                  <div className="flex items-baseline justify-center">;
                    <span className="text-5xl font-bold text-white">{plan.price}</span>;
                    <span className="text-slate-400 ml-1">{plan.period}</span>;
                  </div>;
                </div>;

                <ul className="space-y-4 mb-8">;
                  {};
                    <li key={idx} className="flex items-center text-slate-300">;
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

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div>Broken JSX</div>
            className="text-center mb-16">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">;
              Discover how leading companies are leveraging our platform across industries;
            </p>;
          </motion.div>;

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>;
                <p className="text-slate-300 leading-relaxed">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">;
        <div className="max-w-4xl mx-auto text-center">;
          <div>Broken JSX</div>
          >;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Optimize Your Supply Chain?;
            </h2>;

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">;
              Join the future of supply chain management with our AI Autonomous Optimization Platform. ;
              Get in touch today to schedule a personalized demo and see the results for yourself.;
            </p>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">;
                Schedule Demo;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </a>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-all duration-300">;
                Contact Sales;
              </a>;
            </div>;

            <div className="mt-8 text-slate-400">;
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 302 464 0950</a></p>;
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  )}
export default AIAutonomousSupplyChainOptimizationPlatform;