import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Handshake, Globe, Shield, Zap, Award, CheckCircle } from "lucide-react";

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate our AI and IT solutions into your platform",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["API Access", "Technical Support", "Co-marketing", "Revenue Sharing"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Solution Partners",
      description: "Resell our solutions to your clients",
      icon: <Handshake className="w-8 h-8" />,
      benefits: ["Partner Portal", "Training", "Certification", "Lead Sharing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Channel Partners",
      description: "Distribute our services through your network",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Global Reach", "Local Support", "Custom Pricing", "Joint Ventures"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Strategic Partners",
      description: "Long-term partnerships for mutual growth",
      icon: <Award className="w-8 h-8" />,
      benefits: ["Exclusive Rights", "Joint Development", "Market Expansion", "Investment"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const currentPartners = [
    {
      name: "Microsoft",
      logo: "Microsoft",
      description: "Cloud infrastructure and AI solutions",
      type: "Technology Partner"
    },
    {
      name: "Amazon Web Services",
      logo: "AWS",
      description: "Cloud computing and machine learning",
      type: "Technology Partner"
    },
    {
      name: "Google Cloud",
      logo: "Google",
      description: "AI and data analytics solutions",
      type: "Technology Partner"
    },
    {
      name: "IBM",
      logo: "IBM",
      description: "Enterprise AI and quantum computing",
      type: "Strategic Partner"
    },
    {
      name: "Salesforce",
      logo: "Salesforce",
      description: "CRM integration and automation",
      type: "Solution Partner"
    },
    {
      name: "Oracle",
      logo: "Oracle",
      description: "Database and enterprise solutions",
      type: "Technology Partner"
    }
  ];

  const benefits = [
    "Access to cutting-edge AI and IT solutions",
    "Comprehensive partner support and training",
    "Co-marketing opportunities and lead sharing",
    "Flexible partnership models and pricing",
    "Technical integration support",
    "Revenue sharing and growth opportunities"
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Technology Partnerships</title>
        <meta
          name="description"
          content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions. Technology, solution, channel, and strategic partnerships available."
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
                Partner with Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our growing partner ecosystem and unlock new opportunities with our 
              cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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
                Choose the partnership model that best fits your business goals and objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 text-sm leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners Section */}
        <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders and innovative companies worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {partner.logo.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{partner.description}</p>
                  <span className="text-cyan-400 text-xs font-medium">{partner.type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Partner with Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of joining our partner ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Users className="mr-2 h-5 w-5" />
                Learn More
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}