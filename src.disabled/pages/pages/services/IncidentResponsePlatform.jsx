import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {};
};
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
},;
        {};
},;
        {};
},;
        {};
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto text-center">;
            <div>Broken JSX</div>
}} transition={{ duration: 0.6 }} className="text-6xl mb-6">;
              🚨;
            </motion.div>;
            <div>Broken JSX</div>
}}>;
              Intelligent;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">;
                {" "}Incident Response Platform;
              </span>;
            </motion.h1>;
            <div>Broken JSX</div>
}}>;
              Comprehensive incident management platform that uses AI to detect, respond to, and analyze ;
              security incidents in real-time, reducing response time and improving resolution quality.;
            </motion.p>;

            {/* Key Metrics */}
            <div>Broken JSX</div>
}}>;
              {benefits.map((benefit, index) => (<div key={index} className="text-center">;
                  <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>;
                  <div className="text-sm text-gray-300">{benefit.description}</div>;
                </div>))}
            </motion.div>;

            <div>Broken JSX</div>
}}>;
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">;
                Start Free Trial;
              </Link>;
              <Link to="/enhanced-services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">;
                View All Services;
              </Link>;
            </motion.div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
          <div className="max-w-7xl mx-auto">;
            <div>Broken JSX</div>
}} transition={{ duration: 0.6 }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Advanced Security Features;
              </h2>;
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
                Comprehensive incident response capabilities that protect your organization 24/7;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {};
}}>;
                  <div className="text-red-400 mb-4">{feature.icon}</div>;
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>;
                  <p className="text-gray-300">{feature.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <div>Broken JSX</div>
}} transition={{ duration: 0.6 }}>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                Flexible Security Solutions;
              </h2>;
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
                Choose the security level that matches your organization's needs;
              </p>;
            </motion.div>;

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
              {};
}}>;
                  {};
                    </div>)}

                  <div className="text-center mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                    <div className="text-4xl font-bold text-red-400 mb-2">;
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>;
                    </div>;
                    <p className="text-gray-300">{plan.description}</p>;
                  </div>;

                  <ul className="space-y-3 mb-8">;
                    {plan.features.map((feature, idx) => (<li key={idx} className="flex items-center text-gray-300">;
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>;
                        {feature}
                      </li>))}
                  </ul>;

                  <div>Broken JSX</div>
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`}>;
                    Get Started;
                  </Link>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;

        {/* Integrations & Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">;
              {/* Integrations */}
              <div>Broken JSX</div>
}} transition={{ duration: 0.6 }}>;
                <h3 className="text-2xl font-bold text-white mb-6">Security Integrations</h3>;
                <div className="grid grid-cols-2 gap-4">;
                  {integrations.map((integration, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3"/>;
                      <span className="text-gray-300">{integration}</span>;
                    </div>))}
                </div>;
              </motion.div>;

              {/* Use Cases */}
              <div>Broken JSX</div>
}} transition={{ duration: 0.6 }}>;
                <h3 className="text-2xl font-bold text-white mb-6">Perfect For</h3>;
                <div className="space-y-3">;
                  {useCases.map((useCase, index) => (<div key={index} className="flex items-center bg-white/10 rounded-lg p-3">;
                      <Target className="w-5 h-5 text-yellow-400 mr-3"/>;
                      <span className="text-gray-300">{useCase}</span>;
                    </div>))}
                </div>;
              </motion.div>;
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/50 to-pink-900/50">;
          <div className="max-w-4xl mx-auto text-center">;
            <div>Broken JSX</div>
}} transition={{ duration: 0.6 }}>;
              Ready to Enhance Your Security Posture?;
            </motion.h2>;
            <div>Broken JSX</div>
}}>;
              Join organizations already using our intelligent incident response platform;
            </motion.p>;
            ;
            <div>Broken JSX</div>
}}>;
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300">;
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5"/>;
              </Link>;
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">;
                Call: +1 302 464 0950;
              </a>;
            </motion.div>;

            <div>Broken JSX</div>
}}>;
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Our Incident Response Platform?</h3>;
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">;
                <div className="flex items-center">;
                  <span className="text-green-400 mr-2">✓</span>;
                  AI-Powered Threat Detection;
                </div>;
                <div className="flex items-center">;
                  <span className="text-green-400 mr-2">✓</span>;
                  Automated Response Workflows;
                </div>;
                <div className="flex items-center">;
                  <span className="text-green-400 mr-2">✓</span>;
                  24/7 Security Monitoring;
                </div>;
                <div className="flex items-center">;
                  <span className="text-green-400 mr-2">✓</span>;
                  Compliance Assurance;
                </div>;
              </div>;
            </motion.div>;

            <div>Broken JSX</div>
}}>;
              <p>Email: kleber@ziontechgroup.com</p>;
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>;
              <p>Website: <a href="https://ziontechgroup.com" className="text-red-400 hover:text-red-300">https://ziontechgroup.com</a></p>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>)}
export default IncidentResponsePlatform}}}}

export { IncidentResponsePlatform }
export { IncidentResponsePlatform }
export { IncidentResponsePlatform }
export { IncidentResponsePlatform }
export { IncidentResponsePlatform }