<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced Page solutions by Zion Tech Group" />
      </Helmet>
      
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            Partners
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional partners services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced partners solutions. 
              Stay tuned for updates!
            </p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
        </div>
      </div>
    </div>
  );
}
=======

const PartnersPage: React.FC = () => {;
const partners = [
  // TODO: Add items
]
  // TODO: Add items
]
interface Partner {
  // TODO: Add properties
}
  // TODO: Add properties
}
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified';'
}
;
const PartnersPage: React.FC = () => {;
const partners: Partner[] = [
  // TODO: Add items
]
  // TODO: Add items
]
>>>>>>> origin/main
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: '1','
      name: 'Microsoft','
      logo: '/images/partners/microsoft.png',},'
    {id: '2','
      name: 'Amazon Web Services','
      logo: '/images/partners/aws.png',}'Access to cutting-edge technology','
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: '1','
      name: 'Microsoft','
      description: 'Strategic cloud and AI solutions partner','
      category: 'Cloud & AI','
      website: 'https://microsoft.com','
      tier: 'strategic''
>>>>>>> origin/main
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: '2','
      name: 'Amazon Web Services','
      description: 'Preferred cloud infrastructure partner','
      category: 'Cloud Infrastructure','
      website: 'https://aws.amazon.com','
      tier: 'strategic''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Google Cloud','
      logo: '/images/partners/google-cloud.png','
      description: 'AI and machine learning solutions partner','
      category: 'AI & ML','
      website: 'https://cloud.google.com','
      tier: 'strategic''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'IBM','
      logo: '/images/partners/ibm.png','
      description: 'Enterprise AI and quantum computing partner','
      category: 'Enterprise AI','
      website: 'https://ibm.com','
      tier: 'preferred''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Salesforce','
      logo: '/images/partners/salesforce.png','
      description: 'CRM and customer experience solutions','
      category: 'CRM','
      website: 'https://salesforce.com','
      tier: 'preferred''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Oracle','
      logo: '/images/partners/oracle.png','
      description: 'Database and enterprise applications','
      category: 'Database','
      website: 'https://oracle.com','
      tier: 'preferred''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'ServiceNow','
      logo: '/images/partners/servicenow.png','
      description: 'IT service management solutions','
      category: 'ITSM','
      website: 'https://servicenow.com','
      tier: 'certified''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Splunk','
      logo: '/images/partners/splunk.png','
      description: 'Data analytics and monitoring platform','
      category: 'Analytics','
      website: 'https://splunk.com','
      tier: 'certified''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      name: 'Snowflake','
      logo: '/images/partners/snowflake.png','
      description: 'Cloud data platform solutions','
      category: 'Data Platform','
      website: 'https://snowflake.com','
      tier: 'certified''
    }
  ];
;
const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: <Handshake className="w-8 h-8 text-blue-600" />,"
      title: 'Strategic Partnerships','
      description: 'Long-term relationships with industry leaders for mutual growth and innovation.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: <Award className="w-8 h-8 text-green-600" />,"
      title: 'Certified Expertise','
      description: 'Certified professionals with deep expertise in partner technologies and solutions.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: <Zap className="w-8 h-8 text-purple-600" />,"
      title: 'Faster Implementation','
      description: 'Accelerated project delivery through proven methodologies and best practices.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      icon: <Users className="w-8 h-8 text-orange-600" />,"
      title: 'Dedicated Support','
      description: 'Access to partner support teams and specialized resources for your projects.''
    }
  ];
;
const partnerTiers = {
  // TODO: Add properties
}
  // TODO: Add properties
}
    strategic: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Strategic Partners','
      description: 'Our most important partnerships with industry leaders','
      color: 'bg-blue-100 text-blue-800''
    },
    preferred: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Preferred Partners','
      description: 'Trusted partners with proven track records','
      color: 'bg-green-100 text-green-800''
    },
    certified: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Certified Partners','
      description: 'Certified solution providers with specialized expertise','
      color: 'bg-purple-100 text-purple-800''
    }
  };
;
const groupedPartners = partners.reduce((acc, partner) => {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (!acc[partner.tier]) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      acc[partner.tier] = [];
    }
    acc[partner.tier].push(partner);
    return acc;
  }, {} as Record<string, Partner[]>);

  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">"
<Helmet>
<title>Partners - Zion Tech Group</title>
<meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group's AI and IT solutions." /></Helmet>"'"
<Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">"
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />"
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />'"
<div className="relative max-w-7xl mx-auto text-center">"
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">"
            Partner With
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">"
              Zion Tech Group
            </span></h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">"
            Join our growing ecosystem of partners and unlock new opportunities for growth,
            innovation, and success in the AI and IT solutions market.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">"
              Become a Partner
              <ArrowRight className="inline-block ml-2 w-5 h-5" /></button>"
<button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">"
              View Partner Portal
            </button></div>
</div></section>

      {/* Benefits Section */}
      <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us</h2>"
<p className="text-xl text-gray-300">Join our ecosystem of successful partners</p></div>"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {benefits.map((benefit, index) => (
  // TODO: Add parameters
)
              <div key={index} className="text-center">"
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">"
<benefit.icon className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>"
<p className="text-gray-300">{benefit.description}</p></div>"
            ))}
          </div></div>
</section>

      {/* Partner Types Section */}
      <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Partnership Types</h2>"
<p className="text-xl text-gray-300">Choose the partnership model that fits your business</p></div>"
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
            {partnerTypes.map((type, index) => (
  // TODO: Add parameters
)
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300">"
<h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>"
<p className="text-gray-300 mb-6">{type.description}</p>"
<ul className="space-y-3">"
                  {type.features.map((feature, featureIndex) => (
  // TODO: Add parameters
)
                    <li key={featureIndex} className="flex items-center text-gray-300">"
<CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />"
                      {feature}
                    </li>
                  ))}
                </ul></div>
            ))}
          </div></div>
</section>

      {/* Success Stories Section */}
      <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>"
<p className="text-xl text-gray-300">See how our partners have grown with us</p></div>"
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
<div className="flex items-center mb-4">"
<Star className="w-5 h-5 text-yellow-400 mr-2" />"
<span className="text-yellow-400 font-semibold">5.0 Rating</span></div>"
<p className="text-gray-300 mb-4">"
                "Partnering with Zion Tech Group has transformed our business. "
                The AI solutions integration was seamless and our revenue increased by 300%.""
              </p>
<div className="text-cyan-400 font-semibold">- TechCorp Solutions</div></div>"
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
<div className="flex items-center mb-4">"
<Award className="w-5 h-5 text-cyan-400 mr-2" />"
<span className="text-cyan-400 font-semibold">Top Performer</span></div>"
<p className="text-gray-300 mb-4">"
                "The support and resources provided by Zion Tech Group helped us "
                expand into 15 new markets within 6 months.""
              </p>
<div className="text-cyan-400 font-semibold">- Global Systems Inc</div></div>"
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">"
<div className="flex items-center mb-4">"
<Zap className="w-5 h-5 text-purple-400 mr-2" />"
<span className="text-purple-400 font-semibold">Fast Growth</span></div>"
<p className="text-gray-300 mb-4">"
                "Their innovative AI solutions gave us a competitive edge. "
                We've seen 500% growth in our customer base.""'"
              </p>
<div className="text-cyan-400 font-semibold">- InnovateTech</div></div>"
</div></div>
</section>

      {/* CTA Section */}
      <section className="py-20 px-4">"
<div className="max-w-4xl mx-auto text-center">"
<div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-12">"
<h2 className="text-4xl font-bold text-white mb-6">"
              Ready to Join Our Partner Ecosystem?
            </h2>
<p className="text-xl text-gray-300 mb-8">"
              Let's discuss how we can work together to drive mutual success and '
              deliver exceptional value to your customers.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">"
                Apply to Partner
                <ArrowRight className="inline-block ml-2 w-5 h-5" /></button>"
<button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">"
                Download Partner Kit
              </button></div>
</div></div>
</section>
<Footer /></div>
  );
};
;
export default PartnersPage;
    'Joint go-to-market opportunities','
    'Technical support and training','
    'Co-innovation projects','
    'Global reach and scalability','
    'Certified expertise and solutions''
  ];
  const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Certified Expertise','
      description: 'Our team holds certifications from leading technology partners','
      icon: CheckCircle
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Priority Support','
      description: 'Get priority access to partner resources and support channels','
      icon: CheckCircle
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Latest Technology','
      description: 'Access to cutting-edge tools and early release features','
      icon: CheckCircle
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      title: 'Cost Optimization','
      description: 'Leverage partner pricing and volume discounts for your projects','
      icon: CheckCircle
    }
  ];
  const benefits = [
  // TODO: Add items
]
  // TODO: Add items
]
    {title: 'Certified Expertise','
      description: 'Our team holds certifications from leading technology partners','
      icon: CheckCircle;,},
    {title: 'Priority Support','
      description: 'Get priority access to partner resources and support channels','
      icon: CheckCircle;,},
    {title: 'Latest Technology','
      description: 'Access to cutting-edge tools and early release features','
      icon: CheckCircle;,},
    {title: 'Cost Optimization','
      description: 'Leverage partner pricing and volume discounts for your projects','
      icon: CheckCircle;,}];
  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management']'

  ];

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
<section className="py-20 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>"
                Our Technology Partners;
              </h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with leading technology companies to deliver the best solutions for our clients.</p></p>"
</div>
<div className="flex flex-wrap justify-center gap-4 mb-12">{categories.map((category) => (</div>"
<button;
                  key={category}className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover: bg-white/20 transition-all duration-300","
                >{category</button>} </button>
              ))}
            </div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16">,</div>"
              {partners.map((partner, index) => (
  // TODO: Add parameters
)
                <div key={index}className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover: border-cyan-400/30 transition-all duration-300">,</div>"
<div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">"
<div className="text-4xl opacity-50">🏢</div></div>"
<h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>"
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
                </div>
              ))}
            </div></div>
</div></section>

      {/* Partners by Tier */}
      <section className="py-16">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
            {Object.entries(partnerTiers).map(([tier, tierInfo]) => (
  // TODO: Add parameters
)
              <div key={tier} className="mb-16">"
<div className="text-center mb-8">"
<h2 className="text-3xl font-bold text-gray-900 mb-2">"
                    {tierInfo.title}
                  </h2>
<p className="text-xl text-gray-600">"
                    {tierInfo.description}
                  </p></div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
                  {groupedPartners[tier]?.map((partner, index) => (
  // TODO: Add parameters
)
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">"
<div className="flex items-center mb-4">"
<img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-12 h-12 object-contain mr-4""
                        />
<div>
<h3 className="text-lg font-semibold text-gray-900">"
                            {partner.name}
                          </h3>
<span className={`text-sm font-medium px-2 py-1 rounded-full ${tierInfo.color}`}>
                            {tierInfo.title}
                          </span></div>
</div>
<p className="text-gray-600 mb-4">"
                        {partner.description}
                      </p>
<div className="flex items-center justify-between">"
<span className="text-sm text-gray-500">"
                          {partner.category}
                        </span>
                        {partner.website && (
  // TODO: Add parameters
)
                          <a
                            href={partner.website}
                            target="_blank""
                            rel="noopener noreferrer""
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center""
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-1" /></a>"
                        )}
                      </div></div>
                  ))}
                </div></div>
            ))}
          </div></div>
</section>

      {/* Partnership Process */}
      <section className="py-16 bg-white">"
<div className="container mx-auto px-4">"
<div className="max-w-6xl mx-auto">"
<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">"
              Partnership Process
            </h2>
<div className="grid md:grid-cols-4 gap-8">"
<div className="text-center">"
<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-blue-600">1</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Discussion</h3>"
<p className="text-gray-600">We discuss your partnership goals and mutual benefits.</p></div>"
<div className="text-center">"
<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-green-600">2</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluation</h3>"
<p className="text-gray-600">We evaluate compatibility and potential for mutual success.</p></div>"
<div className="text-center">"
<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-purple-600">3</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Agreement</h3>"
<p className="text-gray-600">We formalize the partnership with clear terms and expectations.</p></div>"
<div className="text-center">"
<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">"
<span className="text-2xl font-bold text-orange-600">4</span></div>"
<h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>"
<p className="text-gray-600">We launch joint initiatives and begin delivering value together.</p></div>"
</div></div>
</div></section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">"
<div className="container mx-auto px-4">"
<div className="max-w-4xl mx-auto text-center">"
<h2 className="text-3xl font-bold mb-4">"
              Ready to Partner With Us?
            </h2>
<p className="text-xl mb-8 text-blue-100">"
              Join our network of strategic partners and help us deliver innovative solutions to clients worldwide.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">"
<Link
                to="/contact""
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center""
              >
<Building2 className="w-5 h-5 mr-2" />"
                Become a Partner
              </Link>
<Link
                to="/about""
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors""
              >
                Learn About Us
              </Link></div>
</div></div>
</section></div>
  );
};
            </div></div>
</section></div>;
const filteredPartners = partners.filter(partner => {);
const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;';
const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;'
    return matchesCategory && matchesTier;});
;
const getTierColor = (tier: string) => {,
    switch (tier) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'strategic':'
        return 'from-purple-500 to-pink-600''
      case 'preferred':'
        return 'from-blue-500 to-purple-600''
      case 'certified':'
        return 'from-green-500 to-blue-600';'
      default: return 'from-gray-500 to-gray-600';,}};'
;
const getTierIcon = (tier: string) => {,
    switch (tier) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      case 'strategic':'
        return <Star className="w-4 h-4" />"
      case 'preferred':'
        return <Award className="w-4 h-4" />"
      case 'certified':'
        return <CheckCircle className="w-4 h-4" />;"
      default: return <Handshake className="w-4 h-4" />;,}};"

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>"
<Helmet />
<title>Partners - Zion Tech Group | Strategic Partnerships</title>
<meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />"
<meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" /></Helmet>"
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe

      {/* Hero Section */} <section className="py-20 px-4">"
<div className="max-w-7xl mx-auto text-center">"
<h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>"
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span></h1>"
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We work with industry leaders to deliver the best AI and IT solutions.</p>"
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p></div>
</section>

      {/* Partnership Benefits */} <section className="py-16 px-4 bg-white/5">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>"
<p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer comprehensive partnership programs that benefit both our partners and our clients;</p></p>"
</div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>"
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">"
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
<Handshake className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>"
<p className="text-gray-300">Work together to develop innovative solutions that benefit both organizations and their customers.</p></p>"
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>"
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>"
<Users className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>"
<p className="text-gray-300">Leverage our combined expertise and market presence to reach new customers and expand market share.</p></p>"
</div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>"
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>"
<Award className="w-8 h-8 text-white" /></div>"
<h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>"
<p className="text-gray-300">Access to training, certification, and technical resources to stay ahead of technology trends.</p></p>"
</div></div>
</div></section>

      {/* Partners Grid */} <section className="py-16 px-4">"
<div className="max-w-7xl mx-auto">"
<div className="flex flex-col md: flex-row gap-4 mb-12">,</div>"
<select;
              value={selectedCategory}onChange={(e) => setSelectedCategory(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500","
            >
              {categories.map(category => ()
                <option key={category}value={category}>
                  {category === 'all' ? 'All Categories' : category} </option>'
              ))}
            </select>
<select;
              value={selectedTier}onChange={(e) => setSelectedTier(e.target.value)}className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-purple-500","
            >
              {tiers.map(tier => ()
                <option key={tier}value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)} </option>'
              ))}
            </select></div>
<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>"
            {filteredPartners.map((partner) => (
  // TODO: Add parameters
)
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)}flex items-center gap-1`}>{getTierIcon(partner.tier)</div>}{partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                    {getTierIcon(partner.tier)},
    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
>>>>>>> origin/main
                  </div></div>
<h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>"
<p className="text-gray-300 text-sm mb-4">{partner.category</p>}</p>"
<p className="text-gray-300 mb-6">{partner.description</p>}</p>"
<div className="flex items-center justify-between">"
<a;
                    href={partner.website}target="_blank""
                    rel="noopener noreferrer""
                    className="text-blue-400 hover: text-blue-300 font-medium transition-colors flex items-center gap-2","
                  >
                    Visit Website;
                    <ExternalLink className="w-4 h-4" /></a>"
</div></div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
  // TODO: Add parameters
)
            <div className="text-center py-12"></div>"
<p className="text-gray-400 text-lg">No partners found matching your criteria.</p></div>"
          )} </div></section>

      {/* Partnership Tiers */} <section className="py-16 px-4 bg-white/5">"
<div className="max-w-7xl mx-auto">"
<div className="text-center mb-16">"
<h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>"
<p className="text-xl text-gray-300 max-w-3xl mx-auto">We offer different partnership levels to meet the needs of various organizations;</p></p>"
</div>
<div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>"
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">"
<div className="flex items-center gap-3 mb-6">"
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">"
<CheckCircle className="w-6 h-6 text-white" /></div>"
<h3 className="text-2xl font-bold text-white">Certified Partner</h3></div>"
<ul className="space-y-3 text-gray-300"></ul>"
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Basic training and certification</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Marketing support materials</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Technical documentation access</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Email support</span></li>
</ul></div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20"></div>"
<div className="flex items-center gap-3 mb-6"></div>"
<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"></div>"
<Award className="w-6 h-6 text-white" /></div>"
<h3 className="text-2xl font-bold text-white">Preferred Partner</h3></div>"
<ul className="space-y-3 text-gray-300"></ul>"
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Advanced training and certification</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Co-marketing opportunities</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Priority technical support</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Dedicated partner manager</span></li>
</ul></div>
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>"
<div className="flex items-center gap-3 mb-6"></div>"
<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"></div>"
<Star className="w-6 h-6 text-white" /></div>"
<h3 className="text-2xl font-bold text-white">Strategic Partner</h3></div>"
<ul className="space-y-3 text-gray-300"></ul>"
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Exclusive training and certification</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Joint product development</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>24/7 priority support</span></li>
<li className="flex items-center gap-2"></li>"
<CheckCircle className="w-4 h-4 text-green-400" />"
<span>Executive relationship management</span></li>
</ul></div>
</div></div>
</section>

      {/* CTA Section */} <section className="py-20 px-4">"
<div className="max-w-4xl mx-auto text-center">"
<div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">"
<h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>"
              Become Our Partner;
            </h2>
<p className="text-xl text-gray-300 mb-8">Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.</p></p>"
<div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>"
<button className="bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>"
                Apply for Partnership;
                <ArrowRight className="inline-block ml-2 w-5 h-5" /></button>"
<button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>"
                Learn More;
              </button></div>
</div></div>
</section></div>
>>>>>>> origin/main
  );
};
;
export default PartnersPage;
>>>>>>> origin/main
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
