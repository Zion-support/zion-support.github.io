import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star, Users, Shield, Clock, TrendingUp, BarChart3, Database, Smartphone, Globe, Target, Lightbulb, Rocket, Award, Phone, Mail, MapPin } from "lucide-react";

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Advanced tower installation", "Fiber optic connectivity", "Network optimization", "Coverage expansion"],
      icon: <Globe className="w-8 h-8 text-cyan-400" />
    },
    {
      name: "5G IoT Solutions",
      description: "Comprehensive IoT solutions powered by 5G technology for smart cities and industries.",
      features: ["Smart city integration", "Industrial IoT", "Real-time monitoring", "Data analytics"],
      icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
      name: "5G Security Solutions",
      description: "Advanced security solutions to protect 5G networks and connected devices.",
      features: ["Network security", "Device protection", "Threat detection", "Compliance management"],
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network infrastructure, IoT integration, and security services. Transform your business with next-generation connectivity." />
        <meta property="og:title" content="5G Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive 5G solutions including network infrastructure, IoT integration, and security services. Transform your business with next-generation connectivity." />
        <meta property="og:url" content="https://ziontechgroup.com/5g-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                5G Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with next-generation 5G connectivity. From infrastructure to IoT solutions, 
                we provide comprehensive 5G services that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started with 5G
                </button>
                <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  View Our Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed to meet your specific business needs and drive innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="text-sm text-gray-400 space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with 5G?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your 5G needs and help you choose the best solutions for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start 5G Implementation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;