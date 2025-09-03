import React from "react";
import Head from "next/head";
import Link from "next/link";
import {};
} from "lucide-react";

export default function InnovativeServices() {};
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

  return (;
    <>;
      <Head>;
        <title>Innovative Services - Zion Tech Group</title>;
        <meta name="description" content="Cutting-edge micro SaaS, IT, and AI services that drive innovation and business growth." />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
        {/* Hero Section */}
        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl font-bold text-gray-900 mb-6">;
              Innovative Technology Services;
            </h1>;
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
              Discover our cutting-edge micro SaaS, IT, and AI solutions designed to transform your business ;
              and drive unprecedented growth in the digital age.;
            </p>;
            <div className="flex justify-center space-x-4">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors">;
                <span>View All Services</span>;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Innovative Services</h2>;
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {};
                  <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">;
                    <div className="flex items-center mb-4">;
                      <IconComponent className="w-12 h-12 text-blue-600 mr-4" />;
                      <div>;
                        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>;
                        <span className="text-sm text-blue-600 font-medium">{service.category}</span>;
                      </div>;
                    </div>;

                    <p className="text-gray-600 mb-4">{service.description}</p>;

                    <div className="mb-4">;
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>;
                      <ul className="text-sm text-gray-600 space-y-1">;
                        {};
                          <li key={index} className="flex items-center">;
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                            {feature}
                          </li>;
                        ))}
                      </ul>;
                    </div>;

                    <div className="border-t pt-4 space-y-2">;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm font-medium text-gray-700">Pricing:</span>;
                        <span className="text-sm font-bold text-green-600">{service.pricing}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm font-medium text-gray-700">Delivery:</span>;
                        <span className="text-sm text-gray-600">{service.delivery}</span>;
                      </div>;
                      <div className="flex items-center justify-between">;
                        <span className="text-sm font-medium text-gray-700">Expected ROI:</span>;
                        <span className="text-sm font-bold text-blue-600">{service.roi}</span>;
                      </div>;
                    </div>;

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">;
                      <p className="text-sm text-blue-800 font-medium">{service.benefits}</p>;
                    </div>;

                    <div>Broken JSX</div>
                      className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">;
                      <span>Get Quote</span>;
                      <ArrowRight className="w-4 h-4 ml-2" />;
                    </Link>;
                  </div>;
                )})}
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>;
            <p className="text-xl mb-8 max-w-3xl mx-auto">;
              Transform your business with our cutting-edge technology solutions. ;
              Contact us today to discuss your project requirements.;
            </p>;
            <div className="grid md:grid-cols-3 gap-8 mb-8">;
              <div className="text-center">;
                <Phone className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Phone</h3>;
                <p>+1 302 464 0950</p>;
              </div>;
              <div className="text-center">;
                <MessageSquare className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Email</h3>;
                <p>kleber@ziontechgroup.com</p>;
              </div>;
              <div className="text-center">;
                <Globe className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Website</h3>;
                <p>https://ziontechgroup.com</p>;
              </div>;
            </div>;
            <div>Broken JSX</div>
              className="inline-flex items-center px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg transition-colors">;
              <span>Contact Us Today</span>;
              <ArrowRight className="w-5 h-5 ml-2" />;
            </Link>;
          </div>;
        </section>;
      </div>;
    </>;
  )}