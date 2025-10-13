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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Strategic Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology leaders and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                Partner Portal
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to deliver cutting-edge solutions and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <Star className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${partner.tier === 'Platinum' ? 'from-gray-400 to-gray-600' : partner.tier === 'Gold' ? 'from-yellow-400 to-yellow-600' : 'from-gray-300 to-gray-500'} text-white`}>
                      {partner.tier}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <p className="text-sm text-blue-400 font-semibold">{partner.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business goals and collaboration needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.color} rounded-full mb-4`}>
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 text-sm">{tier.requirements}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock exclusive benefits and opportunities through our strategic partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                    <div className="text-blue-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Partner With Us?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Start Partnership
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}