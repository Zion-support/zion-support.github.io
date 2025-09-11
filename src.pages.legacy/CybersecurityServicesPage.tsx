import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {};
} from 'lucide-react';
;
export default function CybersecurityServicesPage() {};
  return null;
}
},;
    {};
},;
    {};
}
  ];

  const features = [;
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
      <div>Broken JSX</div>
        }}      />;

      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">;
        {/* Hero Section */}
        <section className="py-32 px-4 relative overflow-hidden">;
          {/* Background Elements */}
          <div className="absolute inset-0">;
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse" />;
            <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />;
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-600/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />;
          </div>;

          <div className="relative z-10 max-w-6xl mx-auto text-center">;
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">;
                Cybersecurity;
              </span>;
              <br />;
              <span className="text-white">That Never Sleeps</span>;
            </h1>;

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">;
              Protect your business with enterprise-grade cybersecurity solutions. Our AI-powered security ;
              platform provides 24/7 protection against evolving cyber threats.;
            </p>;

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">;
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">;
                Get Security Assessment;
                <ArrowRight className="inline ml-2 h-5 w-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                View Case Studies;
              </Link>;
            </div>;
          </div>;
        </section>;

        {/* Features Section */}
        <section className="py-20 bg-black/20">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Why Choose Our Security?;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We combine advanced technology with proven expertise to deliver security that exceeds expectations;
              </p>;
            </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {};
                <div key={index} className="text-center">;
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center">;
                    <feature.icon className="h-8 w-8 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white mb-3">;
                    {feature.title}
                  </h3>;
                  <p className="text-gray-400">;
                    {feature.description}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* Services Section */}
        <section className="py-20 bg-black/20">;
          <div className="container mx-auto px-4">;
            <div className="text-center mb-16">;
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
                Our Security Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Comprehensive cybersecurity solutions designed to protect your business from all angles;
              </p>;
            </div>;

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">;
              {};
                <Card key={index} className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700">;
                  <CardHeader>;
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-lg w-16 h-16 mb-4 flex items-center justify-center">;
                      <service.icon className="h-8 w-8 text-white" />;
                    </div>;
                    <CardTitle className="text-xl text-white">;
                      {service.title}
                    </CardTitle>;
                    <CardDescription className="text-gray-400">;
                      {service.description}
                    </CardDescription>;
                  </CardHeader>;
                  <CardContent>;
                    <ul className="space-y-2 mb-6">;
                      {};
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">;
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />;
                          {feature}
                        </li>;
                      ))}
                    </ul>;
                    <div className="text-2xl font-bold text-red-400 mb-4">;
                      {service.price}
                    </div>;
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">;
                      Get Started;
                    </Button>;
                  </CardContent>;
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;

        {/* CTA Section */}
        <section className="py-20">;
          <div className="container mx-auto px-4 text-center">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Secure Your Business?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Don't wait until it's too late. Get a comprehensive security assessment and protect your business today.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">;
                Schedule Security Assessment;
                <ArrowRight className="inline ml-2 h-5 w-5" />;
              </Link>;
              <div>Broken JSX</div>
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">;
                View Security Case Studies;
              </Link>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
import React from "react";
import { SEO } from "@/components/SEO";
;,"});,"});,
}
export default function CybersecurityServicesPage() {};
  return null;
}
}
}