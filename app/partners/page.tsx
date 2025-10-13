import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap } from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      category: "Cloud & AI",
      description: "Leading cloud and AI solutions provider",
      tier: "Platinum",
      benefits: ["Azure credits", "Co-marketing opportunities", "Technical support"]
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      category: "Cloud Infrastructure",
      description: "World's most comprehensive cloud platform",
      tier: "Platinum",
      benefits: ["AWS credits", "Training resources", "Joint go-to-market"]
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      category: "Cloud & Analytics",
      description: "Advanced cloud and data analytics solutions",
      tier: "Gold",
      benefits: ["GCP credits", "Technical training", "Marketing support"]
    },
    {
      name: "Salesforce",
      logo: "/api/placeholder/200/100",
      category: "CRM & Automation",
      description: "Customer relationship management platform",
      tier: "Gold",
      benefits: ["Salesforce credits", "Integration support", "Co-selling opportunities"]
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      category: "AI & Enterprise",
      description: "Enterprise AI and hybrid cloud solutions",
      tier: "Silver",
      benefits: ["IBM Cloud credits", "Technical resources", "Partner enablement"]
    },
    {
      name: "Oracle",
      logo: "/api/placeholder/200/100",
      category: "Database & Cloud",
      description: "Database and enterprise cloud solutions",
      tier: "Silver",
      benefits: ["Oracle Cloud credits", "Technical support", "Training programs"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Technical Support",
      description: "Access to dedicated technical resources and support teams"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Reach",
      description: "Expand your market reach through our global partner network"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance certifications"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Community Access",
      description: "Join our exclusive partner community and networking events"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta
          name="description"
          content="Join Zion Tech Group's partner ecosystem. Access exclusive resources, technical support, and co-marketing opportunities with leading technology companies."
        />
        <meta
          name="keywords"
          content="technology partners, strategic partnerships, cloud partners, AI partners, enterprise solutions, partner program, Zion Tech Group"
        />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Star className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Strategic Partnerships</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Our Partners
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We work with industry leaders to deliver cutting-edge solutions. 
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Technology Partners
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-2xl font-bold text-white/60">ZT</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'Platinum' 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                        : partner.tier === 'Gold'
                        ? 'bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 text-yellow-300 border border-yellow-600/30'
                        : 'bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-300 border border-gray-500/30'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-cyan-400 text-sm font-medium mb-3">
                    {partner.category}
                  </p>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Partner Benefits
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}