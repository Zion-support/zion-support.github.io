import React from 'react';
import { Handshake, Star, Award, Globe, Shield, Cloud, Code, Database } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that provide the foundation for our solutions",
      icon: <Code className="w-6 h-6" />,
      partners: [
        { name: "Microsoft Azure", logo: "🔵", description: "Cloud infrastructure and AI services" },
        { name: "Amazon Web Services", logo: "🟠", description: "Cloud computing and machine learning" },
        { name: "Google Cloud", logo: "🔴", description: "Data analytics and AI platforms" },
        { name: "IBM", logo: "🔵", description: "Enterprise AI and quantum computing" }
      ]
    },
    {
      title: "Security Partners",
      description: "Cybersecurity experts ensuring the highest level of protection",
      icon: <Shield className="w-6 h-6" />,
      partners: [
        { name: "CrowdStrike", logo: "🛡️", description: "Endpoint security and threat intelligence" },
        { name: "Palo Alto Networks", logo: "🔶", description: "Network security and firewalls" },
        { name: "Fortinet", logo: "🟢", description: "Unified threat management" },
        { name: "Check Point", logo: "🔵", description: "Advanced threat prevention" }
      ]
    },
    {
      title: "Integration Partners",
      description: "Specialized solution providers for seamless integrations",
      icon: <Handshake className="w-6 h-6" />,
      partners: [
        { name: "Salesforce", logo: "☁️", description: "CRM and business automation" },
        { name: "ServiceNow", logo: "🔵", description: "IT service management" },
        { name: "Workday", logo: "🟠", description: "Human capital management" },
        { name: "SAP", logo: "🔵", description: "Enterprise resource planning" }
      ]
    }
  ];

  const benefits = [
    {
      title: "Joint Solutions",
      description: "Co-developed solutions that combine our expertise with partner technologies",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Global Reach",
      description: "Access to partner networks and markets worldwide",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Enhanced Security",
      description: "Multi-layered security through strategic partnerships",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Leverage partner cloud infrastructure for optimal performance",
      icon: <Cloud className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We work with industry leaders to deliver comprehensive solutions that drive innovation and success for our clients.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16 mb-16">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 text-cyan-400">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="text-center">
                      <div className="text-4xl mb-4">{partner.logo}</div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Partner with Us?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem of technology leaders and help us deliver innovative solutions to clients worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Technology Partners</h3>
                <p className="text-gray-300 text-sm">
                  Integrate your technology with our AI and IT solutions
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Channel Partners</h3>
                <p className="text-gray-300 text-sm">
                  Resell our solutions and expand your service offerings
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Strategic Partners</h3>
                <p className="text-gray-300 text-sm">
                  Long-term partnerships for joint market development
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partners@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-cyan-500/25"
              >
                <Handshake className="w-5 h-5" />
                <span>Contact Partnership Team</span>
              </a>
              <a
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold border border-gray-600 hover:border-gray-500"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Partnership Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <h3 className="text-xl font-semibold text-white">Microsoft Azure Partnership</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Our partnership with Zion Tech Group has enabled us to deliver cutting-edge AI solutions to enterprise clients, resulting in 40% faster deployment times and 60% cost reduction."
              </p>
              <p className="text-cyan-400 text-sm font-medium">
                - Microsoft Azure Team
              </p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <h3 className="text-xl font-semibold text-white">Salesforce Integration</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "The seamless integration of Zion's AI capabilities with our CRM platform has transformed how our clients manage customer relationships and drive sales growth."
              </p>
              <p className="text-cyan-400 text-sm font-medium">
                - Salesforce Partner Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;