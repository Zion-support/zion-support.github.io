import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Globe, Users, Award, CheckCircle, Star, ArrowRight } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/api/placeholder/200/100",
      category: "Technology Partner",
      description: "Strategic partnership for Azure cloud services and AI solutions",
      benefits: [
        "Access to Azure AI services",
        "Joint go-to-market initiatives",
        "Technical support and training",
        "Co-marketing opportunities"
      ],
    },
    {
      name: "Amazon Web Services",
      logo: "/api/placeholder/200/100",
      category: "Cloud Partner",
      description: "Premier AWS partner delivering scalable cloud solutions",
      benefits: [
        "AWS certified solutions",
        "Cost optimization services",
        "Migration expertise",
        "24/7 cloud support"
      ],
    },
    {
      name: "Google Cloud",
      logo: "/api/placeholder/200/100",
      category: "AI Partner",
      description: "Advanced AI and machine learning solutions on Google Cloud",
      benefits: [
        "Google AI/ML services",
        "Data analytics solutions",
        "Machine learning expertise"]
        "Scalable infrastructure"]]
    },
    {
      name: "Salesforce",
      logo: "/api/placeholder/200/100",
      category: "CRM Partner",
      description: "Certified Salesforce implementation and customization partner",
      benefits: [
        "Salesforce certified experts",
        "Custom development",
        "Integration services"]
        "Training and support"]]
    },
    {
      name: "IBM",
      logo: "/api/placeholder/200/100",
      category: "Enterprise Partner",
      description: "Enterprise solutions and Watson AI integration",
      benefits: [
        "IBM Watson AI services",
        "Enterprise security solutions",
        "Legacy system modernization"]
        "Consulting services"]]
    },
    {
      name: "Oracle",
      logo: "/api/placeholder/200/100",
      category: "Database Partner",
      description: "Oracle database and cloud infrastructure solutions",
      benefits: [
        "Oracle database expertise",
        "Cloud migration services",
        "Performance optimization"]
        "Security and compliance"]]
    }
  ];

const partnershipTypes = [
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Technology Partners",
      description: "Strategic partnerships with leading technology providers to deliver best-in-class solutions",
      benefits: [
        "Access to cutting-edge technology",
        "Joint product development",
        "Technical support and training"]
        "Co-marketing opportunities"]]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Channel Partners",
      description: "Reseller and distribution partnerships to expand our market reach",
      benefits: [
        "Competitive pricing and margins",
        "Marketing support and materials",
        "Sales training and certification"]
        "Dedicated partner support"]]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Solution Partners",
      description: "Integration partners who complement our solutions with specialized expertise",
      benefits: [
        "Joint solution development",
        "Technical integration support",
        "Customer success collaboration"]
        "Revenue sharing opportunities"]]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Strategic Partners",
      description: "Long-term strategic partnerships for mutual growth and innovation",
      benefits: [
        "Joint R&D initiatives",
        "Market expansion support",
        "Exclusive partnership benefits"]
        "Strategic planning collaboration"]]
    }
  ];

const stats = [
    { number: "50+", label: "Partners Worldwide" },
    { number: "25+", label: "Countries" },
    { number: "95%", label: "Partner Satisfaction" },
    { number: "200%", label: "Growth in Partner Revenue" }
  ];
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology providers. Join our partner ecosystem and grow your business with us." />
        <meta name="keywords" content="partners, partnerships, technology partners, channel partners, strategic alliances" />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships for mutual growth and innovation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Strategic partnerships with leading technology providers to deliver comprehensive solutions and drive mutual growth.
              </p>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  
        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  
        <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Partnership Types */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various partnership opportunities to suit different business models and objectives.
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{type.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  
          <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Current Partners */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Technology Partners</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with industry leaders to deliver the best solutions to our clients.
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  
        <div className="text-center mb-6">
                    
        <div className="w-32 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{partner.name}</span>
                    </div>
                    
        <div className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm inline-block mb-4">
                      {partner.category}
                    </div>
                    
          <p className="text-gray-300 text-sm">{partner.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Become a Partner */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Become a Partner</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and success. 
                We provide comprehensive support, training, and resources to help you succeed.
              </p>
              
        <div className="grid md:grid-cols-3 gap-8 mb-12">
                
        <div className="text-center">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">1. Apply</h3>
                  
          <p className="text-gray-300">Submit your partnership application and tell us about your business</p>
                </div>
                
        <div className="text-center">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">2. Review</h3>
                  
          <p className="text-gray-300">We review your application and discuss partnership terms</p>
                </div>
                
        <div className="text-center">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">3. Launch</h3>
                  
          <p className="text-gray-300">Start your partnership journey with training and support</p>
                </div>
              </div>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="/contact?type=partnership"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Apply to Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
    href="mailto:partners@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Partnership Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PartnersPage;