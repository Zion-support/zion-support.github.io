import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Award, Globe, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Strategic alliances with leading technology companies",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Access to cutting-edge technology",
        "Joint go-to-market opportunities",
        "Technical support and training",
        "Co-marketing initiatives"
      ],
      examples: ["Microsoft", "Amazon Web Services", "Google Cloud", "Salesforce"]
    },
    {
      title: "Solution Partners",
      description: "Complementary service providers and integrators",
      icon: <Handshake className="w-8 h-8" />,
      benefits: [
        "Expanded service offerings",
        "Cross-referral opportunities",
        "Joint solution development",
        "Shared resources and expertise"
      ],
      examples: ["System Integrators", "Consulting Firms", "Software Vendors", "Hardware Providers"]
    },
    {
      title: "Channel Partners",
      description: "Resellers and distributors of our solutions",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: [
        "Revenue sharing opportunities",
        "Sales and marketing support",
        "Product training and certification",
        "Dedicated partner portal"
      ],
      examples: ["Value-Added Resellers", "Distributors", "Managed Service Providers", "Consultants"]
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      type: "Technology Partner",
      description: "Strategic partnership for Azure cloud solutions and AI services",
      tier: "Gold"
    },
    {
      name: "Amazon Web Services",
      logo: "/images/partners/aws.png",
      type: "Technology Partner",
      description: "Premier partner for cloud infrastructure and machine learning",
      tier: "Gold"
    },
    {
      name: "Google Cloud",
      logo: "/images/partners/google-cloud.png",
      type: "Technology Partner",
      description: "Partner for AI/ML solutions and data analytics platforms",
      tier: "Silver"
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.png",
      type: "Solution Partner",
      description: "Integration partner for CRM and business automation",
      tier: "Silver"
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Access to comprehensive training and certification programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Dedicated partner success managers and technical support"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Exclusive access to new markets and revenue streams"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Expand your business globally through our partner network"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta
          name="description"
          content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies."
        />
        <meta
          name="keywords"
          content="partners, partnerships, technology partners, cloud partners, strategic alliances, partner program"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Strategic
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Partners
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our growing partner ecosystem and unlock new opportunities for growth. 
              We work with leading technology companies to deliver exceptional solutions to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Partner Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Partnership Types
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various partnership opportunities to fit different business models and goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {type.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Partners
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry-leading technology companies and solution providers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        partner.tier === 'Gold' 
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {partner.tier} Partner
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Partner Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner program and unlock exclusive benefits and opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth. 
                Let's work together to deliver exceptional solutions to our clients.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Partner Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}