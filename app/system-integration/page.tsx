'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-12-h-12text-cyan-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
    {
      icon: <Zap className="w-12-h-12text-purple-400" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {
      icon: <Shield className="w-12-h-12text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];

  return (
    <>
      <Helmet />
        <title />System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="system integration, IT services, Zion Tech Group" />
        <meta property="og:title" content="System Integration - Zion Tech Group" />
        <meta property="og:description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/system-integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900pt-16">
        {/* Hero Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4 text-center">
            <h1 className="text-5-xl md:text-6xl font-boldtext-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400-bg-clip-texttext-transparent" />
                System Integration
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8-max-w-3xlmx-auto" />
              Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4-justify-centermb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
                Get Started
                <ArrowRight className="ml-2-group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105" />
                Learn More
                      </Link>
      </div>
    </div>
        </section>

        {/* Features Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4-xl font-boldtext-white mb-6" />
                Why Choose Our System Integration Services?
              </h2>
              <p className="text-xl text-gray-300-max-w-3xlmx-auto" />
                Our expert team helps you connect and optimize all your business systems
              </p>
            </div>
            
            <div className="grid grid-cols-1-md:grid-cols-3gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50-transition-all duration-300" />
                  <div className="flexjustify-centermb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="containermx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2-xlp-12 text-center">
              <h2 className="text-4-xl font-boldtext-white mb-6" />
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8-max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transform hover:scale-105-shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300-transformhover:scale-105" />
                  View All Services
                        </Link>
      </div>
    </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;