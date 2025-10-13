import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Globe, Shield, Zap, Star, TrendingUp } from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Strategic partnerships with leading technology providers",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Access to cutting-edge technology", "Joint product development", "Technical support"]
    },
    {
      title: "Solution Partners",
      description: "Integration partners for comprehensive solutions",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Solution integration", "Market expansion", "Revenue sharing"]
    },
    {
      title: "Channel Partners",
      description: "Reseller and distribution partnerships",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Reseller programs", "Marketing support", "Training and certification"]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Programs",
      description: "Get certified in our technologies and solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technical Support",
      description: "Access to our technical support team and resources"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Marketing Support",
      description: "Co-marketing opportunities and promotional materials"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Partnership Opportunities</title>
        <meta
          name="description"
          content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology partnerships, solution integration, and strategic alliances available."
        />
        <meta
          name="keywords"
          content="partnerships, technology partners, solution partners, channel partners, strategic alliances, business partnerships, technology integration"
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partner <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">With Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem of partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Handshake className="w-8 h-8 text-blue-400" />
              <span className="text-gray-300">Strategic Partnerships</span>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6 text-blue-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                Become a Partner
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}