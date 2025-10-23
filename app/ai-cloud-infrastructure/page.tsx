"use client";
import React from "react";
import {
  Cloud,
  Server,
  Database,
  Shield,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description:
        "Seamless migration to cloud platforms with minimal downtime",
    },
    {
      icon: Server,
      title: "Infrastructure Setup",
      description: "Complete cloud infrastructure setup and configuration",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Scalable database solutions and management services",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance standards",
    },
  ];

  const benefits = [
    "Scalable cloud infrastructure",
    "Cost-effective solutions",
    "High availability and reliability",
    "Automated scaling and management",
    "24/7 technical support",
    "Easy integration with existing systems",
    "Cost-effective pricing plans",
    "Proven track record of success",
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div><section className="relative py-20 px-4">
          
        </section><div className="max-w-7xl mx-auto text-center">
          <h$1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
            </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud infrastructure
              solutions. Powered by cutting-edge AI technology and industry
              expertise.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-12">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Infrastructure?
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced solutions designed for modern business needs
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
          <h$1 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
          
          </div><p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-12">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our cloud infrastructure solutions for
                your business.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
        
          </div><div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          
        </section><div className="max-w-4xl mx-auto text-center">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
          
          </div><p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your cloud infrastructure needs and
              get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
        </div>
      </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CloudInfrastructurePage;
