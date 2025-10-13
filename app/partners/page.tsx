import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Globe, Shield, Zap, Star, Award, Handshake, Building, Target, TrendingUp } from 'lucide-react';

export default function Partners() {
  const partnerCategories = [
    {
      title: "Technology Partners",
      description: "Leading technology companies that provide the foundation for our solutions",
      partners: [
        {
          name: "Microsoft",
          logo: "Microsoft",
          description: "Cloud infrastructure and AI services",
          type: "Cloud & AI",
          benefits: "Access to Azure AI services and cloud infrastructure"
        },
        {
          name: "Amazon Web Services",
          logo: "AWS",
          description: "Cloud computing and machine learning platforms",
          type: "Cloud & ML",
          benefits: "Advanced ML tools and scalable cloud infrastructure"
        },
        {
          name: "Google Cloud",
          logo: "Google Cloud",
          description: "AI and data analytics solutions",
          type: "AI & Analytics",
          benefits: "Cutting-edge AI tools and data processing capabilities"
        },
        {
          name: "IBM",
          logo: "IBM",
          description: "Enterprise AI and cybersecurity solutions",
          type: "Enterprise AI",
          benefits: "Enterprise-grade AI and security solutions"
        }
      ]
    },
    {
      title: "Security Partners",
      description: "Cybersecurity experts ensuring the highest level of protection",
      partners: [
        {
          name: "CrowdStrike",
          logo: "CrowdStrike",
          description: "Endpoint security and threat intelligence",
          type: "Endpoint Security",
          benefits: "Advanced threat detection and response capabilities"
        },
        {
          name: "Palo Alto Networks",
          logo: "Palo Alto",
          description: "Network security and firewall solutions",
          type: "Network Security",
          benefits: "Comprehensive network protection and monitoring"
        },
        {
          name: "Fortinet",
          logo: "Fortinet",
          description: "Unified threat management and security fabric",
          type: "UTM",
          benefits: "Integrated security across all network layers"
        }
      ]
    },
    {
      title: "Integration Partners",
      description: "Software and platform providers for seamless integrations",
      partners: [
        {
          name: "Salesforce",
          logo: "Salesforce",
          description: "CRM and business automation platform",
          type: "CRM",
          benefits: "Seamless CRM integration and automation"
        },
        {
          name: "ServiceNow",
          logo: "ServiceNow",
          description: "IT service management and workflow automation",
          type: "ITSM",
          benefits: "Streamlined IT operations and service delivery"
        },
        {
          name: "Slack",
          logo: "Slack",
          description: "Team communication and collaboration",
          type: "Communication",
          benefits: "Enhanced team collaboration and productivity"
        }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to international markets and customers through our partner network"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Leverage industry-leading security solutions and best practices"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Faster Innovation",
      description: "Accelerate development with cutting-edge tools and technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Access to specialized expertise and technical support"
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Integration",
      description: "Integrate our solutions with your existing technology stack",
      features: [
        "API integration and customization",
        "Data synchronization and migration",
        "Custom development and consulting",
        "Ongoing technical support"
      ],
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Reseller Partnership",
      description: "Sell our solutions to your customers and earn commissions",
      features: [
        "Competitive commission structure",
        "Sales training and support",
        "Marketing materials and resources",
        "Dedicated partner portal"
      ],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Strategic Alliance",
      description: "Long-term partnership for joint product development",
      features: [
        "Joint product development",
        "Shared intellectual property",
        "Co-marketing opportunities",
        "Revenue sharing agreements"
      ],
      icon: <Handshake className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "50+", label: "Active Partners", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Partner Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "200+", label: "Joint Projects", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Partner Support", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta
          name="description"
          content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology integration, reseller opportunities, and strategic alliances available."
        />
        <meta
          name="keywords"
          content="partners, partnerships, reseller, integration, strategic alliance, technology partners, Zion Tech Group partners"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Strategic
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Partnerships
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our growing ecosystem of technology partners, resellers, and strategic allies. 
              Together, we deliver innovative solutions that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#partnership-types"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Explore Partnerships
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Why Partner With Us?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join a growing ecosystem of technology leaders and unlock new opportunities 
                for growth, innovation, and customer success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnership-types" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Partnership Types
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <ul className="space-y-3">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Our Partners
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions to our customers.
              </p>
            </div>
            
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div
                      key={partnerIndex}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-white">{partner.logo}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-cyan-300 transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-gray-300 text-center mb-2">{partner.description}</p>
                        <div className="text-xs text-cyan-400 text-center mb-3">{partner.type}</div>
                        <p className="text-xs text-gray-400 text-center">{partner.benefits}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation. 
                Let's build the future of technology together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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