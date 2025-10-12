
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-5 h-5ml-2" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];

  return (
    <>
      <Helmet>
        <title />System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="system integration, IT services, Zion Tech Group" />
        <meta property="og:title" content="System Integration - Zion Tech Group" />
        <meta property="og:description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/system-integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5 h-5ml-2" />
              <span className="w-5 h-5ml-2" />
                System Integration
              </span>
            </h1>
            <p className="w-5 h-5ml-2">Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup"
        >
          Get Started
                
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Why Choose Our System Integration Services?
              </h2>
              <p className="w-5 h-5ml-2">Our expert team helps you connect and optimize all your business systems
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{feature.title}</h3>
                  <p className="w-5 h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5 h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5 h-5ml-2" />
                Ready to Get Started?
              </h2>
              <p className="w-5 h-5ml-2">Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View All Services
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

