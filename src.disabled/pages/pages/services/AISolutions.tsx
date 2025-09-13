import React from 'react';
import { Link } from 'react-router-dom';
import {};
} from 'lucide-react';
;
const AISolutions: React.FC = () => {};
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

  const industries = [;
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">;
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center">;
            <div className="flex justify-center mb-6">;
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">;
                <Brain className="w-10 h-10" />;
              </div>;
            </div>;
            <h1 className="text-4xl md:text-6xl font-bold mb-6">;
              AI Solutions;
            </h1>;
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">;
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation, efficiency, and growth.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">;
                Start AI Journey;
                <ArrowRight className="ml-2 w-5 h-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">;
                View All Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Solutions Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Comprehensive AI Solutions;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              From machine learning to workflow automation, we provide end-to-end AI solutions tailored to your business needs.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                    {solution.title}
                  </h3>;
                  <p className="text-gray-600 mb-4">;
                    {solution.description}
                  </p>;
                  <ul className="space-y-2">;
                    {};
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                </div>;
              )})}
          </div>;
        </div>;
      </section>;

      {/* Industries Section */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              AI Solutions Across Industries;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Our AI solutions are designed to address the unique challenges and opportunities in various industry sectors.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                    {industry.name}
                  </h3>;
                  <p className="text-gray-600">;
                    {industry.description}
                  </p>;
                </div>;
              )})}
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Why Choose Our AI Solutions?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Experience the transformative power of AI with our comprehensive solutions and expert support.;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {};
                <div key={index} className="text-center">;
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <Icon className="w-8 h-8 text-purple-600" />;
                  </div>;
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">;
                    {benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit.description}
                  </p>;
                </div>;
              )})}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Ready to Harness the Power of AI?;
          </h2>;
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">;
            Transform your business with intelligent AI solutions. Get in touch with our experts today to start your AI journey.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <div>Broken JSX</div>
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">;
              Get AI Consultation;
              <ArrowRight className="ml-2 w-5 h-5" />;
            </Link>;
            <div>Broken JSX</div>
              className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">;
              Explore All Services;
            </Link>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default AISolutions;