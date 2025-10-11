'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-bba0
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
>>>>>>> origin/main

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
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
>>>>>>> origin/main
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
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
>>>>>>> origin/main
      description: 'Customer relationship management and business automation',
=======
      description: 'Customer relationship management and business automation platform',
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
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
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});;)
};
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b

const PagePage: React.FC = () => {
  return (
    <>
      <Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
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
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div></div>
              <div></div>
                {benefits.map((benefit, index) => (
                  <div></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
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
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
            </div>
          </div>
        </section>
      </div>
    </>
=======
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a15
>>>>>>> main
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-068b
  );
};

export default PagePage;
