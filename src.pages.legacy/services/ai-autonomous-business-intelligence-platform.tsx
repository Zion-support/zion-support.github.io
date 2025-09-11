import React from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
export function AIAutonomousBusinessIntelligencePlatform() {};
  return null;
}
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

  return (;
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-darkest">;
      {/* Hero Section */}
      <section className="relative overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>;
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">;
          <div className="text-center max-w-4xl mx-auto">;
            <div className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan text-sm font-medium mb-6">;
              <Brain className="w-4 h-4 mr-2" />;
              AI-Powered Business Intelligence;
            </div>;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">;
              Autonomous Business Intelligence;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">;
                Platform;
              </span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
              Transform your business with AI-driven insights that work autonomously. ;
              Get real-time analytics, predictive intelligence, and actionable recommendations ;
              without the manual effort.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">;
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300">;
                Watch Demo;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Features Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Powerful Features for Modern Business;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Our AI platform combines cutting-edge technology with intuitive design ;
              to deliver business intelligence that actually works for you.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                  {feature.title}
                </h3>;
                <p className="text-gray-400 leading-relaxed">;
                  {feature.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Why Choose Our AI BI Platform?;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Experience measurable improvements in efficiency, decision-making, and business outcomes.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
                    {benefit.title}
                  </h3>;
                  <p className="text-gray-400 leading-relaxed">;
                    {benefit.description}
                  </p>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Use Cases Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Real-World Applications;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              See how businesses across industries are leveraging our AI platform ;
              to drive growth and efficiency.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {};
                  {useCase.title}
                </h3>;
                <p className="text-gray-400 leading-relaxed">;
                  {useCase.description}
                </p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/30">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
              Choose the plan that fits your business needs. All plans include ;
              our core AI capabilities and 24/7 support.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {};
                )}
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <div className="flex items-baseline justify-center mb-4">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-400 ml-1">{plan.period}</span>;
                  </div>;
                  <p className="text-gray-400">{plan.description}</p>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {};
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <div>Broken JSX</div>
                >;
                  {plan.cta}
                </Link>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center max-w-4xl mx-auto">;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business Intelligence?;
            </h2>;
            <p className="text-xl text-gray-400 mb-8">;
              Join thousands of businesses that have already revolutionized their ;
              decision-making with AI-powered insights.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105">;
                Start Your Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/10 transition-all duration-300">;
                Schedule Demo;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Footer */}
      <footer className="py-12 border-t border-zion-slate">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <p className="text-gray-400">;
            © 2025 Zion Tech Group. All rights reserved. | ;
            <Link to="/privacy" className="text-zion-cyan hover:text-zion-cyan-light ml-2">;
              Privacy Policy;
            </Link> | ;
            <Link to="/terms" className="text-zion-cyan hover:text-zion-cyan-light ml-2">;
              Terms of Service;
            </Link>;
          </p>;
        </div>;
      </footer>;
    </div>;
  )}

export default AIAutonomousBusinessIntelligencePlatform;