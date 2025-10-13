import React from "react";
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";

const PartnersPage = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/partners/microsoft.svg",
      description: "Cloud infrastructure and AI solutions",
      category: "Cloud & AI"
    },
    {
      name: "Amazon Web Services",
      logo: "/partners/aws.svg", 
      description: "Cloud computing and storage solutions",
      category: "Cloud"
    },
    {
      name: "Google Cloud",
      logo: "/partners/google-cloud.svg",
      description: "Machine learning and data analytics",
      category: "AI & Analytics"
    },
    {
      name: "IBM",
      logo: "/partners/ibm.svg",
      description: "Enterprise AI and blockchain solutions",
      category: "Enterprise AI"
    }
  ];

  const benefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to worldwide markets and customers through our partner network"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge technology and continuous innovation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Partners - Zion Tech Group | Strategic Technology Partnerships"
        description="Discover our strategic partnerships with leading technology companies to deliver world-class solutions."
        keywords="technology partners, strategic partnerships, cloud partners, AI partners"
        canonical="/partners"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Strategic Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and exceptional value to our clients.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
              <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner with Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our network of strategic partners and help us deliver innovative solutions to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Become a Partner</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
