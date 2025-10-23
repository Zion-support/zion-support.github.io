import React from "react";
"use client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const HomePage: React.FC = () => {
  
  const _features = [
    {
      icon: CheckCircle,
      title: "AI-Powered Solutions",
      description: "Advanced artificial intelligence solutions for modern businesses",
    },
    {
      icon: Star,
      title: "IT Excellence",
      description: "Comprehensive IT services and infrastructure solutions",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div>
        <section className="relative py-20 px-4 overflow-hidden">
          
        </section>
          <div className="relative max-w-7xl mx-auto text-center">
            
          </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Zion Tech Group
              </span>
            </h1>
            </h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions for modern businesses. 
              We help you transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Contact Us
              </Link>
        </div>
      </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-7xl mx-auto">
            
          </div><div className="text-center mb-16">
              
          </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              </h1><p className="text-xl text-gray-300">
                Comprehensive AI and IT solutions for your business needs
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                
          </div><div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:border-purple-500/50 transition-all duration-300">
                  
          </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
          
          </div><h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  </h1><p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          
        </section>
          <div className="max-w-4xl mx-auto text-center">
            
          </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            </h1><p className="text-xl text-gray-300 mb-8">
              Let us help you implement cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More
              </Link>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default HomePage;