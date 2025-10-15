import React from 'react';
import { Star, Target, MessageSquare } from "lucide-react";

const PartnershipsPage: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      benefits: [
        'API integrations',
        'Technical support',
        'Co-marketing opportunities',
        'Joint product development'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions through your network',
      icon: <Users className="w-8 h-8 text-green-400" />,
      benefits: [
        'Competitive margins',
        'Sales training',
        'Marketing materials',
        'Dedicated support'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term partnerships for mutual growth and innovation',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      benefits: [
        'Joint ventures',
        'Shared resources',
        'Market expansion',
        'Innovation collaboration'
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Complementary services and solutions integration',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      benefits: [
        'Solution bundling',
        'Cross-referrals',
        'Technical integration',
        'Shared customer success'
      ]
    }
  ];

  const requirements = [
    'Proven track record in your industry',
    'Strong customer relationships',
    'Technical expertise in relevant areas',
    'Commitment to customer success',
    'Alignment with our values and mission'
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Comprehensive training and support',
    'Marketing and sales resources',
    'Competitive partner program',
    'Joint go-to-market opportunities',
    'Technical integration support'
  ];

  return (
    <>
      <Helmet>
        <title>Partnerships - Zion Tech Group | Partner With Us</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Explore partnership opportunities and benefits." />
        <meta name="keywords" content="partnerships, partner program, technology partners, channel partners, strategic partnerships" />
        <link rel="canonical" href="https://ziontechgroup.com/partnerships" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Partner With
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our growing ecosystem of partners and unlock new opportunities for growth, 
              innovation, and mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/20 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type) => (
              <div key={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2 text-left">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Requirements</h2>
              <p className="text-gray-300 mb-8">
                We look for partners who share our commitment to excellence and customer success.
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Partner Benefits</h2>
              <p className="text-gray-300 mb-8">
                Join our partner program and unlock exclusive benefits and opportunities.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={index} className="flex items-start">
                    <Star className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our partner ecosystem and start growing your business with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;