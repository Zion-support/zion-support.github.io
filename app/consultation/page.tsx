import React from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Zap, Shield, Globe, Code } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  const consultationTypes = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Strategy Consultation",
      description: "Get expert advice on implementing AI solutions for your business",
      duration: "60 minutes",
      price: "Free",
      features: [
        "AI readiness assessment",
        "Custom AI strategy roadmap",
        "Technology recommendations",
        "Implementation timeline"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Migration Consultation",
      description: "Plan your cloud migration with our certified cloud architects",
      duration: "90 minutes",
      price: "Free",
      features: [
        "Current infrastructure analysis",
        "Cloud platform selection",
        "Migration strategy planning",
        "Cost optimization recommendations"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Assessment",
      description: "Evaluate your security posture and get expert recommendations",
      duration: "75 minutes",
      price: "Free",
      features: [
        "Security vulnerability assessment",
        "Compliance requirements review",
        "Security framework recommendations",
        "Implementation priority matrix"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategy consultation",
      duration: "120 minutes",
      price: "Free",
      features: [
        "Digital maturity assessment",
        "Technology stack evaluation",
        "Process optimization recommendations",
        "Change management strategy"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Get advice from certified professionals with years of experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "No Time Wasted",
      description: "Focused sessions that deliver actionable insights immediately"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Approach",
      description: "Tailored recommendations based on your specific business needs"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our experts for AI strategy, cloud migration, cybersecurity, and digital transformation." />
        <meta name="keywords" content="free consultation, AI strategy, cloud migration, cybersecurity, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 text-sm font-medium">Free Expert Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expert
              </span>
              <br />
              <span className="text-white">Consultation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our certified experts. No sales pitch, just valuable insights to help your business succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#consultation-types"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Your Free Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Choose Our Consultation?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section id="consultation-types" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Choose Your Consultation Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {type.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {type.duration}
                      </div>
                      <div className="text-cyan-400 font-semibold">
                        {type.price}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free consultation today and get expert guidance on your next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}