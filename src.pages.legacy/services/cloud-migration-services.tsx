import React from 'react';
import {};
} from 'lucide-react';
;
const CloudMigrationServices = () => {};
};
  const features = [;
    'Zero-downtime migration',;
    'Data security & encryption',;
    'Performance optimization',;
    '24/7 monitoring & support',;
    'Disaster recovery setup',;
    'Cost optimization analysis',;
    'Compliance & governance',;
    'Training & documentation';
  ];

  const benefits = [;
    'Reduce infrastructure costs by 40%',;
    'Improve scalability & flexibility',;
    'Enhanced security & compliance',;
    'Disaster recovery & backup',;
    'Global accessibility',;
    'Automatic updates & maintenance',;
    'Better performance & reliability',;
    'Future-proof technology stack';
  ];

  const migrationSteps = [;
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
;
  const pricing = {};
},;
    medium: {};
},;
    enterprise: {};
}
  };
;
  const contactInfo = {};
};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">;
      {/* Header */}
      <div className="bg-white shadow-lg">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <div>Broken JSX</div>
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mb-6">;
              <Cloud className="w-10 h-10 text-white" />;
            </div>;
            <div>Broken JSX</div>
              className="text-5xl font-bold text-gray-900 mb-4">;
              Cloud Migration Services;
            </h1>;
            <div>Broken JSX</div>
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
              Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, and significant cost savings.;
            </p>;
            <div>Broken JSX</div>
              className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-lg font-semibold">;
                <Phone className="w-5 h-5 mr-2" />;
                Call Now: {contactInfo.phone}
              </a>;
              <div>Broken JSX</div>
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-lg font-semibold">;
                <Mail className="w-5 h-5 mr-2" />;
                Get Free Assessment;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Migration Features</h2>;
          <p className="text-xl text-gray-600">Everything you need for a successful cloud migration</p>;
        </div>;

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {};
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>;
            </div>;
          ))}
        </div>;
      </div>;

      {/* Migration Process */}
      <div className="bg-white py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Migration Process</h2>;
            <p className="text-xl text-gray-600">A proven 5-step approach to successful cloud migration</p>;
          </div>;

          <div className="space-y-8">;
            {};
                  {step.step}
                </div>;
                <div className="flex-grow">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>;
                  <p className="text-gray-600 mb-2">{step.description}</p>;
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">;
                    {step.duration}
                  </span>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="text-center mb-12">;
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Cloud Migration?</h2>;
          <p className="text-xl text-gray-600">Measurable results that drive business growth</p>;
        </div>;

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {};
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>;
            </div>;
          ))}
        </div>;
      </div>;

      {/* Pricing Section */}
      <div className="bg-white py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Migration Pricing Plans</h2>;
            <p className="text-xl text-gray-600">Choose the plan that fits your migration needs</p>;
          </div>;

          <div className="grid md:grid-cols-3 gap-8">;
            {};
                )}
                <div className="text-center mb-6">;
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>;
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>;
                  <p className="text-gray-500 line-through">{plan.marketPrice}</p>;
                  <p className="text-green-600 font-semibold">Save up to 40%</p>;
                  <p className="text-gray-600 mt-2">{plan.description}</p>;
                </div>;

                <ul className="space-y-3 mb-8">;
                  {};
                    <li key={featureIndex} className="flex items-center text-gray-600">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                ;
                <div>Broken JSX</div>
                >;
                  Get Started;
                </a>;
              </div>;
            ))}
          </div>;
        </div>;
      </div>;

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-16">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-12">;
            <h2 className="text-4xl font-bold mb-4">Ready to Migrate to the Cloud?</h2>;
            <p className="text-xl text-gray-300">Contact us today for a free migration assessment</p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            <div className="text-center">;
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Phone</h3>;
              <a href={`tel:${contactInfo.phone}`} className="text-blue-400 hover:text-blue-300">;
                {contactInfo.phone}
              </a>;
            </div>;
            <div className="text-center">;
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Email</h3>;
              <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300">;
                {contactInfo.email}
              </a>;
            </div>;
            <div className="text-center">;
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Address</h3>;
              <p className="text-gray-300">{contactInfo.address}</p>;
            </div>;
            <div className="text-center">;
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />;
              <h3 className="text-lg font-semibold mb-2">Website</h3>;
              <a href={contactInfo.website} className="text-blue-400 hover:text-blue-300">;
                {contactInfo.website}
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>;
          <p className="text-gray-400 mt-2">;
            Professional cloud migration services;
          </p>;
        </div>;
      </footer>;
    </div>;
  )}
export default CloudMigrationServices;