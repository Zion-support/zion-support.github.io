import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

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
      description: "Enterprise AI and cloud solutions",
      category: "Enterprise Partner",
      tier: "Silver"
    },
    {
      name: "Oracle",
      logo: "/images/partners/oracle.png",
      description: "Database and enterprise software",
      category: "Database Partner",
      tier: "Silver"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Strategic technology alliances that enhance our solutions",
      icon: <Zap className="w-8 h-8" />,
      benefits: [
        "Joint product development",
        "Technical integration support",
        "Co-marketing opportunities",
        "Shared customer success"
      ]
    },
    {
      title: "Cloud Partners",
      description: "Cloud infrastructure and platform partnerships",
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        "Certified cloud expertise",
        "Infrastructure optimization",
        "Security compliance",
        "Cost management"
      ]
    },
    {
      title: "Channel Partners",
      description: "Reseller and distribution partnerships",
      icon: <Users className="w-8 h-8" />,
      benefits: [
        "Revenue sharing programs",
        "Sales enablement tools",
        "Training and certification",
        "Marketing support"
      ]
    },
    {
      title: "Solution Partners",
      description: "Complementary solution integrations",
      icon: <Shield className="w-8 h-8" />,
      benefits: [
        "API integrations",
        "Solution bundling",
        "Joint go-to-market",
        "Customer referrals"
      ]
    }
  ];

  const benefits = [
    "Access to cutting-edge technology",
    "Joint go-to-market opportunities",
    "Technical support and training",
    "Co-marketing and co-selling",
    "Revenue sharing programs",
    "Priority customer support"
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, cloud, and solution partnerships available." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, channel partners, solution partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Partners
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our growing ecosystem of technology partners and unlock new opportunities 
                for growth, innovation, and customer success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/about">
                  <FuturisticButton variant="outline" size="lg">
                    Learn More
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various partnership opportunities to fit your business model 
                and strategic objectives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Current Partners */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment 
                to innovation and customer success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{partner.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-3">{partner.description}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-sm text-gray-400">{partner.category}</span>
                    <span className="text-sm text-blue-400 font-semibold">•</span>
                    <span className="text-sm text-yellow-400 font-semibold">{partner.tier}</span>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Partner Benefits</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our partner program and unlock exclusive benefits designed to help 
                  you grow your business and serve your customers better.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Partner With Us?</h3>
                <p className="text-gray-300 mb-6">
                  Join our partner ecosystem and start growing your business with our 
                  innovative solutions and support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">No upfront costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Dedicated support team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Fast onboarding process</span>
                  </div>
                </div>
                <Link to="/contact" className="block mt-6">
                  <FuturisticButton className="w-full">
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Partner Ecosystem?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact us today to learn more about our partnership opportunities 
                and how we can help you grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/services">
                  <FuturisticButton variant="outline" size="lg">
                    View Our Services
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}