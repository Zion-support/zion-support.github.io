import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Award, Globe, Shield, Zap, Star, CheckCircle, TrendingUp } from 'lucide-react';

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Strategic partnerships with leading technology providers",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Access to cutting-edge technology", "Joint go-to-market strategies", "Technical support and training", "Co-marketing opportunities"]
    },
    {
      title: "Solution Partners",
      description: "Collaborate on integrated solutions and services",
      icon: <Handshake className="w-8 h-8" />,
      benefits: ["Solution integration", "Joint development projects", "Shared customer success", "Revenue sharing opportunities"]
    },
    {
      title: "Channel Partners",
      description: "Reseller and distribution partnerships",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Reseller programs", "Marketing support", "Sales training", "Competitive pricing"]
    },
    {
      title: "Strategic Alliances",
      description: "Long-term strategic partnerships for mutual growth",
      icon: <Award className="w-8 h-8" />,
      benefits: ["Joint ventures", "Market expansion", "Innovation collaboration", "Strategic planning"]
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Revenue Growth', description: 'Increase revenue through joint sales and marketing efforts' },
    { icon: <Globe className="w-6 h-6" />, title: 'Market Expansion', description: 'Access new markets and customer segments through partnerships' },
    { icon: <Shield className="w-6 h-6" />, title: 'Risk Mitigation', description: 'Share risks and resources with trusted partners' },
    { icon: <Star className="w-6 h-6" />, title: 'Innovation', description: 'Collaborate on innovative solutions and technologies' }
  ];

  const requirements = [
    "Proven track record in your industry",
    "Complementary technology or service offerings",
    "Strong customer relationships and market presence",
    "Commitment to quality and customer success",
    "Financial stability and growth potential"
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Partner With Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing partner ecosystem and unlock new opportunities for growth, 
              innovation, and market expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partner Requirements</h2>
              <p className="text-xl text-gray-300">
                We look for partners who share our commitment to excellence and innovation
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and start growing your business with Zion Tech Group.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Partnership Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
=======
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Partners</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional partners services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}