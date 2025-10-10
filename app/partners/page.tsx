'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, Handshake, Users, Award } from 'lucide-react';

const PartnersPage = () => {
  const partners = [
    {
<<<<<<< HEAD
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified'});;)
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'});;)
},
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
<<<<<<< HEAD
      tier: 'strategic'
<<<<<<< HEAD
=======
      website: 'https://aws.amazon.com'
>>>>>>> cursor/analyze-improve-and-deploy-application-a851
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
    },
=======
      tier: 'strategic'});;)
},
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'});;)
},
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'});;)
},
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
      description: 'Customer relationship management and business automation',
=======
      description: 'Customer relationship management and business automation platform',
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {
<<<<<<< HEAD
=======
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'});;)
},
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified'});;)
},
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'});;)
}
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical support and training',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  const partnershipTiers = [
    {
<<<<<<< HEAD
      name: 'Strategic',
      description: 'Deep integration and co-innovation',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {
      name: 'Preferred',
      description: 'Enhanced support and collaboration',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      icon: Handshake
    },
    {
      name: 'Certified',
      description: 'Verified expertise and capabilities',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
      icon: CheckCircle
    }
=======
      name: 'Strategic Partners',
      description: 'Deep integration and joint development',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'});;)
},
    {
      name: 'Preferred Partners',
      description: 'Certified solutions and priority support',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'});;)
},
    {
      name: 'Certified Partners',
      description: 'Authorized implementation and support',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'});;)
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});;)
};

  return (
    <>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
=======
      <div></div>
      <Helmet></Helmet>
        <titl></titl>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Strategic <spa></spa>Partnerships</span>
            </h1>
            <p></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div></div>
              <div></div>
                <di></di>50+</div>
                <di></di>Technology Partners</div>
              </div>
              <div></div>
                <di></di>15+</div>
                <di></di>Years of Partnership</div>
              </div>
              <div></div>
                <di></di>100%</div>
                <di></di>Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Partnership Tiers</h2>
              <p></p>
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div></div>
              {partnershipTiers.map((tier, index) => (
                <div></div>
                  <div></div>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h></h>{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Our Technology Partners</h2>
              <p></p>
                We work with the world's leading technology companies to deliver comprehensive solutions.
              </p>
            </div>

            <div></div>
    </>
  )
                return (
    <>
      <div></div>
                    <div></div>
                      <div></div>
                        <di></di>{partner.name.charAt(0);</div>
                      </div>
                      <h3></h3>
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                      <div></div>
                        {partner.category}
                      </div>
                      {partner.website && (
                        <a></a>
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      );
                    </div>
                  </div>
                ););)
});;
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Partnership Benefits</h2>
              <p></p>
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div></div>
              <div></div>
                {benefits.map((benefit, index) => (
                  <div></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <spa></spa>{benefit}</span>
                  </div>
                ));
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Become a Partner</h2>
              <p></p>
                Interested in partnering with us? We're always looking for innovative companies to join our ecosystem.
              </p>
              <div></div>
                <button></button>
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </button>
                <button></button>
                  <TrendingUp className="w-5 h-5" />
                  View Partnership Program
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-19af
=======
      nam,
    e: 'Microsoft',
      logo: '/api/placeholder/200
      descriptio,
    n: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200
  ];

  return (<div>
                <)
              ))}
            <

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits<
              <div className="grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-4">
                {benefits.map((benefit), index) => (<div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" 
                    <span className="text-gray-300">{benefit}<
                  <)
                ))}
              <
            <
          <
        <
      <
    <
>>>>>>> cursor/fix-errors-and-merge-to-main-e8e3
=======
<<<<<<< HEAD
=======
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge AI and IT solutions that drive innovation and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => {
              const tierInfo = getTierInfo(partner.tier);
              return (
                <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <tierInfo.icon className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-400 font-medium">{partner.tier}</span>
                    </div>
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300">What you get when you partner with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem of technology partners and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <Handshake className="w-5 h-5" />
                Partner With Us
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <TrendingUp className="w-5 h-5" />
                View Partnership Program
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
>>>>>>> main
  );
=======
  ););)
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
};

export default PartnersPage;