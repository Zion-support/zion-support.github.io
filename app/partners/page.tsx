import React from "react";
"use client";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

const PartnersPage: React.FC = () => {
  
  const _partners = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      description:
        "Strategic partnership for Azure cloud solutions and AI services",
      category: "Cloud & AI",
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      description:
        "Leading cloud infrastructure and machine learning platform provider",
      category: "Cloud Computing",
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      description: "Advanced AI and machine learning solutions for enterprise",
      category: "AI & ML",
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      description: "Enterprise AI and hybrid cloud solutions",
      category: "Enterprise AI",
    },
    {
      name: "Salesforce",
      logo: "/api/placeholder/200/100",
      description: "CRM and customer experience platform integration",
      category: "CRM",
    },
    {
      name: "Oracle",
      logo: "/api/placeholder/200/100",
      description: "Database and enterprise application solutions",
      category: "Database",
    },
  ];

  const _benefits = [
    "Access to cutting-edge technology",
    "Enhanced service capabilities",
    "Reduced implementation costs",
    "Faster time to market",
    "Comprehensive support",
    "Continuous innovation",
  ];
  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Partners
                </span>
              </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Strategic partnerships with leading technology companies enable
                us to deliver world-class AI and IT solutions.
              </p>
        </div>
      </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
        
          </div><div className="text-center">
        
          </div><div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <ExternalLink className="w-8 h-8 text-white" />
          
          </div><p className="text-white/60 text-sm">Partner Logo</p>
        <div className="text-center">
          <h1 className="text-xl font-bold text-white mb-2">
                      {partner.name}
                    </h3>
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {partner.category}
                    </span>
          
          </div><p className="text-gray-300 text-sm">
                      {partner.description}
                    </p>
        </div>
      </div>
              ))}
        </div>
      </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          
        </section>
          <div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Benefits
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships provide significant advantages for
                our clients.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          
        </section>
          <div className="max-w-4xl mx-auto text-center">
        
          </div><div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Become Our Partner
              </h2>
          
          </div><p className="text-xl text-purple-100 mb-8">
                Join our network of technology partners and help us deliver
                exceptional solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Partner With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Learn More
                </button>
        </div>
      </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default PartnersPage;
