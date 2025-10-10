'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  category: string;
  website?: string;
  tier: 'strategic' | 'preferred' | 'certified'})
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'})
},
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'})
},
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'})
},
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'})
},
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'})
},
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'})
},
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified'})
},
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'})
}
  ];

  const benefits = [
    'Access to cutting-edge technology platforms',
    'Joint go-to-market strategies',
    'Co-marketing opportunities',
    'Technical training and certification',
    'Priority support and resources',
    'Innovation labs and R&D collaboration',
    'Global reach and local expertise',
    'Compliance and security standards',
    'Scalable solutions for any size business',
    'Dedicated partner success managers'
  ];

  const partnershipTiers = [
    {
      name: 'Strategic Partners',
      description: 'Deep integration and joint development',
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'})
},
    {
      name: 'Preferred Partners',
      description: 'Certified solutions and priority support',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'})
},
    {
      name: 'Certified Partners',
      description: 'Authorized implementation and support',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'})
}
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]})
};

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
      <Helmet></Helmet>
        <title></titl>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions." />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
        {/* Hero Section */}
        <section className="py-20 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto text-center"></di></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></spa>Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"></p>
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"></di></div>
              <div className="text-center"></di></div>
                <div className="text-3xl font-bold text-white mb-2"></di>50+</div>
                <div className="text-gray-400"></di>Technology Partners</div>
              </div>
              <div className="text-center"></di></div>
                <div className="text-3xl font-bold text-white mb-2"></di>15+</div>
                <div className="text-gray-400"></di>Years of Partnership</div>
              </div>
              <div className="text-center"></di></div>
                <div className="text-3xl font-bold text-white mb-2"></di>100%</div>
                <div className="text-gray-400"></di>Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Partnership Tiers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></di></div>
              {partnershipTiers.map((tier, index) => (
                <div key={index} className={`${tier.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${tier.borderColor} text-center`}></di></div>
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}></di></div>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}></h>{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We work with the world's leading technology companies to deliver comprehensive solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></di></div>
    </>
  )
                return (
    <>
      <div key={index} className={`${tierInfo.bgColor} backdrop-blur-lg rounded-2xl p-6 border ${tierInfo.borderColor} hover:border-purple-400 transition-all duration-300 group`}></di></div>
                    <div className="text-center"></di></div>
                      <div className="w-20 h-20 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center"></di></div>
                        <div className="text-2xl font-bold text-white"></di>{partner.name.charAt(0)}</div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tierInfo.color} ${tierInfo.bgColor}`}></di></div>
                        {partner.category}
                      </div>
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors mt-3 text-sm"
                        ></a>
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )})
})}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></di></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></di></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3"></di></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300"></spa>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-4xl mx-auto text-center"></di></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Interested in partnering with us? We're always looking for innovative companies to join our ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></di></div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                  <Handshake className="w-5 h-5" />
                  Partner With Us
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                  <TrendingUp className="w-5 h-5" />
                  View Partnership Program
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )})
};

export default PartnersPage;