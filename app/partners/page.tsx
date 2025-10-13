import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle, Star, Award, Users, Globe } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  website: string;
  benefits: string[];
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      id: "1",
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      description: "Leading cloud platform provider offering comprehensive solutions for modern businesses.",
      category: "Cloud Platform",
      tier: "platinum",
      website: "https://microsoft.com",
      benefits: [
        "Azure cloud credits",
        "Co-marketing opportunities",
        "Technical support",
        "Training resources"
      ]
    },
    {
      id: "2",
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      description: "World's most comprehensive and broadly adopted cloud platform.",
      category: "Cloud Services",
      tier: "platinum",
      website: "https://aws.amazon.com",
      benefits: [
        "AWS credits",
        "Solution architect support",
        "Marketing support",
        "Certification programs"
      ]
    },
    {
      id: "3",
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      description: "Enterprise cloud platform with AI and machine learning capabilities.",
      category: "Cloud Platform",
      tier: "gold",
      website: "https://cloud.google.com",
      benefits: [
        "GCP credits",
        "Technical training",
        "Co-selling opportunities",
        "API access"
      ]
    },
    {
      id: "4",
      name: "IBM",
      logo: "/api/placeholder/200/100",
      description: "Global technology company providing AI, cloud, and security solutions.",
      category: "Enterprise Solutions",
      tier: "gold",
      website: "https://ibm.com",
      benefits: [
        "IBM Cloud credits",
        "Watson AI access",
        "Technical workshops",
        "Joint solutions"
      ]
    },
    {
      id: "5",
      name: "Salesforce",
      logo: "/api/placeholder/200/100",
      description: "Customer relationship management platform with extensive customization options.",
      category: "CRM Platform",
      tier: "silver",
      website: "https://salesforce.com",
      benefits: [
        "Salesforce credits",
        "AppExchange listing",
        "Technical support",
        "Training materials"
      ]
    },
    {
      id: "6",
      name: "Oracle",
      logo: "/api/placeholder/200/100",
      description: "Enterprise software and cloud computing solutions provider.",
      category: "Database & Cloud",
      tier: "silver",
      website: "https://oracle.com",
      benefits: [
        "Oracle Cloud credits",
        "Database licensing",
        "Technical support",
        "Training programs"
      ]
    },
    {
      id: "7",
      name: "Cisco",
      logo: "/api/placeholder/200/100",
      description: "Networking and cybersecurity solutions for enterprise environments.",
      category: "Networking & Security",
      tier: "bronze",
      website: "https://cisco.com",
      benefits: [
        "Cisco equipment discounts",
        "Technical training",
        "Certification support",
        "Joint marketing"
      ]
    },
    {
      id: "8",
      name: "Dell Technologies",
      logo: "/api/placeholder/200/100",
      description: "Infrastructure solutions provider for data centers and cloud environments.",
      category: "Infrastructure",
      tier: "bronze",
      website: "https://dell.com",
      benefits: [
        "Hardware discounts",
        "Technical support",
        "Training resources",
        "Co-marketing"
      ]
    }
  ];

  const tiers = {
    platinum: { color: "from-gray-100 to-gray-300", textColor: "text-gray-800", icon: "👑" },
    gold: { color: "from-yellow-400 to-yellow-600", textColor: "text-yellow-800", icon: "🥇" },
    silver: { color: "from-gray-300 to-gray-500", textColor: "text-gray-800", icon: "🥈" },
    bronze: { color: "from-orange-400 to-orange-600", textColor: "text-orange-800", icon: "🥉" }
  };

  const categories = ["All", "Cloud Platform", "Cloud Services", "Enterprise Solutions", "CRM Platform", "Database & Cloud", "Networking & Security", "Infrastructure"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry-leading technology partners to deliver comprehensive solutions that drive innovation and business success.
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Partner With Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Joint Go-to-Market</h3>
            <p className="text-gray-300">Collaborate on marketing initiatives and co-selling opportunities</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Technical Support</h3>
            <p className="text-gray-300">Access to technical resources and expert support</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
            <p className="text-gray-300">Expand your market reach through our global network</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Co-develop innovative solutions and cutting-edge technologies</p>
          </div>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Technology Partners</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to work with industry leaders who share our commitment to innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${tiers[partner.tier].color} ${tiers[partner.tier].textColor}`}>
                  {tiers[partner.tier].icon} {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {partner.name}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {partner.description}
              </p>

              <div className="mb-4">
                <span className="text-xs text-cyan-400 font-medium">{partner.category}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Partnership Benefits:</h4>
                <ul className="space-y-1">
                  {partner.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Partner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Become Our Partner
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth, innovation, and market expansion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Partner With Us
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/partnership-program"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;