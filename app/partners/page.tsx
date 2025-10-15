import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      description: "Leading cloud and productivity solutions",
      category: "Technology Partner",
      tier: "Platinum"
    },
    {
      name: "Amazon Web Services",
      logo: "/images/partners/aws.png",
      description: "Comprehensive cloud computing platform",
      category: "Cloud Partner",
      tier: "Platinum"
    },
    {
      name: "Google Cloud",
      logo: "/images/partners/google-cloud.png",
      description: "AI and machine learning cloud services",
      category: "AI Partner",
      tier: "Gold"
    },
    {
      name: "Salesforce",
      logo: "/images/partners/salesforce.png",
      description: "Customer relationship management platform",
      category: "CRM Partner",
      tier: "Gold"
    },
    {
      name: "IBM",
      logo: "/images/partners/ibm.png",
      description: "Enterprise AI and hybrid cloud solutions",
      category: "Enterprise Partner",
      tier: "Silver"
    },
    {
      name: "Oracle",
      logo: "/images/partners/oracle.png",
      description: "Database and enterprise software solutions",
      category: "Database Partner",
      tier: "Silver"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Joint Marketing",
      description: "Collaborative marketing campaigns and co-branded content"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to our worldwide network of clients and opportunities"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technical Support",
      description: "Dedicated technical resources and training programs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Labs",
      description: "Joint innovation initiatives and R&D projects"
    }
  ];

  const tiers = [
    {
      name: "Platinum",
      color: "from-gray-400 to-gray-600",
      requirements: "Strategic partnership with significant revenue commitment",
      benefits: ["Highest priority support", "Dedicated account manager", "Custom solutions", "Joint go-to-market"]
    },
    {
      name: "Gold",
      color: "from-yellow-400 to-yellow-600",
      requirements: "Strong partnership with regular collaboration",
      benefits: ["Priority support", "Training programs", "Marketing support", "Technical resources"]
    },
    {
      name: "Silver",
      color: "from-gray-300 to-gray-500",
      requirements: "Partnership with mutual business opportunities",
      benefits: ["Standard support", "Partner portal access", "Co-marketing opportunities", "Technical documentation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, strategic alliances" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic partnerships that drive innovation and deliver exceptional value to our clients.
            </p>
          </div>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-12 h-12 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      partner.tier === 'Platinum' ? 'bg-gray-400 text-gray-900' :
                      partner.tier === 'Gold' ? 'bg-yellow-400 text-yellow-900' :
                      'bg-gray-300 text-gray-800'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-2">{partner.description}</p>
                <p className="text-cyan-400 text-xs">{partner.category}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Partnership Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partnership Tiers */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Partnership Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{tier.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-6 text-center">{tier.requirements}</p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of innovative partners and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}