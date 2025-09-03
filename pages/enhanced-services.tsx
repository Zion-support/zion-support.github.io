import React from "react";
import Head from "next/head";
import Link from "next/link";
import {};
} from "lucide-react";

export default function EnhancedServices() {};
  return null;
}
},;
        {};
},;
        {};
}
      ];,
},;
    {};
},;
        {};
},;
        {};
}
      ];,
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
      ];,
}
  ];

  const stats = [;
    { label: "Projects Completed", value: "500+", icon: Award },;
    { label: "Client Satisfaction", value: "99.9%", icon: Star },;
    { label: "Uptime Guarantee", value: "99.9%", icon: Shield },;
    { label: "Expert Team", value: "50+", icon: Users }
  ];

  return (;
    <>;
      <Head>;
        <title>Enhanced Services - Zion Tech Group</title>;
        <meta name="description" content="Comprehensive technology services including AI, cloud, cybersecurity, and micro SaaS solutions." />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
      </Head>;

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">;
        {/* Hero Section */}
        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl font-bold text-gray-900 mb-6">;
              Enhanced Technology Services;
            </h1>;
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;
              Comprehensive technology solutions designed to accelerate your business growth, ;
              enhance security, and drive innovation across all digital touchpoints.;
            </p>;
            <div className="flex justify-center space-x-4">;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">;
                <span>Get Started</span>;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors">;
                <span>View Innovative Services</span>;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">;
          <div className="max-w-6xl mx-auto">;
            <div className="grid md:grid-cols-4 gap-8">;
              {};
                  <div key={index} className="text-center">;
                    <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />;
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>;
                    <div className="text-gray-600">{stat.label}</div>;
                  </div>;
                )})}
            </div>;
          </div>;
        </section>;

        {/* Service Categories */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Service Categories</h2>;
            <div className="space-y-16">;
              {};
                  <div key={category.id} className="bg-white rounded-lg shadow-lg p-8">;
                    <div className="flex items-center mb-8">;
                      <IconComponent className="w-16 h-16 text-blue-600 mr-6" />;
                      <div>;
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h3>;
                        <p className="text-lg text-gray-600">{category.description}</p>;
                      </div>;
                    </div>;

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">;
                      {};
                        <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">;
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h4>;
                          <p className="text-gray-600 mb-4">{service.description}</p>;

                          <div className="mb-4">;
                            <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>;
                            <ul className="text-sm text-gray-600 space-y-1">;
                              {};
                                <li key={featureIndex} className="flex items-center">;
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
                      ))}
                    </div>;
                  </div>;
                )})}
            </div>;
          </div>;
        </section>;

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-gray-100">;
          <div className="max-w-6xl mx-auto">;
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Zion Tech Group?</h2>;
            <div className="grid md:grid-cols-3 gap-8">;
              <div className="text-center">;
                <Zap className="w-16 h-16 text-blue-600 mx-auto mb-6" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Delivery</h3>;
                <p className="text-gray-600">;
                  We deliver high-quality solutions quickly without compromising on quality or security.;
                </p>;
              </div>;
              <div className="text-center">;
                <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Expertise</h3>;
                <p className="text-gray-600">;
                  Our team has extensive experience in cutting-edge technologies and industry best practices.;
                </p>;
              </div>;
              <div className="text-center">;
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>;
                <p className="text-gray-600">;
                  All our solutions are built with security-first principles and enterprise-grade reliability.;
                </p>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-20 px-4">;
          <div className="max-w-6xl mx-auto text-center">;
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>;
            <p className="text-xl mb-8 max-w-3xl mx-auto">;
              Let's discuss how our enhanced technology services can drive your business forward. ;
              Contact us today for a free consultation.;
            </p>;
            <div className="grid md:grid-cols-3 gap-8 mb-8">;
              <div className="text-center">;
                <Phone className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Phone</h3>;
                <p>+1 302 464 0950</p>;
              </div>;
              <div className="text-center">;
                <Mail className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Email</h3>;
                <p>kleber@ziontechgroup.com</p>;
              </div>;
              <div className="text-center">;
                <Globe className="w-8 h-8 mx-auto mb-4" />;
                <h3 className="font-semibold mb-2">Website</h3>;
                <p>https://ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className="text-center mb-8">;
              <p className="text-lg font-semibold">Address:</p>;
              <p>364 E Main St STE 1008, Middletown DE 19709</p>;
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