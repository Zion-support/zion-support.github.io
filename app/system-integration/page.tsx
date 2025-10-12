import React  from 'react';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

const Page: React.FC = () => {
  features = [
    {
      icon: <Cloud className="w-12 h-12text-cyan-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
    {
      icon: <Zap className="w-12 h-12text-purple-400" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {
      icon: <Shield className="w-12 h-12text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="system integration, IT services, Zion Tech Group" />
        <meta property="og:title" content="System Integration - Zion Tech Group" />
        <meta property="og:description" content="Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/system-integration" />
      </Helmet>
    </>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </div>
        {/* Hero Section */}
    <>
        <section className="p y-20" />
          <div className="containe r mx-autopx-4text-center">
            <h1 className="tex t-5xl md:text-6xl font-bold text-white mb-6" />
              <span className="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
    </>
                System Integration
    <>
              </span>
        <section className="p y-20">
          <div className="containe r mx-auto px-4 text-center">
            <h1 className="tex t-5xl md:text-6xl font-bold text-white mb-6">
              <span className="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Services</span>
            </h1>
            <p className="tex t-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>
            </p>
            <div className="fle x flex-col sm:flex-row gap-4justify-centermb-12">
              <Link to="/contact" className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="m l-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="borde r border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
    </>
                Learn More
    <>
              </Link>
            </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="p y-20" />
          <div className="containerm x-autopx-4">
            <div className="tex t-centermb-16">
              <h2 className="tex t-4xl font-bold text-white mb-6" />
                Why Choose Our System Integration Services?
    <>
              </h2>
              <p className="tex t-xl text-gray-300max-w-3xlmx-auto">
              Our expert team helps you connect and optimize all your business systems
              </p>
            </div>
    </>
            
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
        </div>
              {features.map((feature, index) => (
    <>
                <div key={index} className="b g-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustif y-centermb-4">
                    {feature.icon}
    <>
                  </div>
                  <h3 className="tex t-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="tex t-gray-300">
              {feature.description}</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="p y-20" />
          <div className="containerm x-autopx-4">
            <div className="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="tex t-4xl font-bold text-white mb-6" />
                Ready to Get Started?
    <>
              </h2>
              <p className="tex t-xl text-gray-300 mb-8max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="fle x flex-col sm:flex-rowgap-4justify-center">
                <Link to="/contact" className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
    </>
                  Contact Us
    <>
                </Link>
                <Link to="/services" className="borde r border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
    </>
                  View All Services
    <>
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
    </div>
  );
};

export default Page;
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SystemIntegrationPage() {
  return (
    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="tex t-4xl font-bold text-white mb-6">System Integration</h1>
        <p className="tex t-lg text-gray-300 mb-8">Professional system integration services coming soon.</p>
        <Link
          to="/contact"
          className="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 m l-2" />
        </Link>
      </div>
    </div>
  );
}
