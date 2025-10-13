<<<<<<< HEAD
=======
'use client;

<<<<<<< HEAD
import React from 'react;

<<<<<<< HEAD
import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { CheckCircle, ExternalLink, ArrowRight, Building2, Handshake, Award, Users, Zap } from 'lucide-react;

import { Link } from 'react-router-dom;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

import { CheckCircle, Handshake, Users, Award } from 'lucide-react;

const PartnersPage = () => {;
  const partners = [;
    {
      name: 'Microsoft,
      logo: '/api/placeholder/200/100,
    },
    {
      name: 'Amazon Web Services,
      logo: '/api/placeholder/200/100,
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react;
=======
const PartnersPage = () => {}
  const partners = [
    {}
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
    },
    {}
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d054

interface Partner {}
  name: string;

  logo: string;

  description: string;

  category: string;

  website?: string;

  tier: 'strategic' | 'preferred' | 'certified});)
}

const PartnersPage: React.FC = () => {}
  const partners: Partner[] = [
<<<<<<< HEAD
    {
      name: 'Microsoft,
      logo: '/images/partners/microsoft.png,
      description: 'Strategic partnership for Azure cloud solutions and AI services,
      category: 'Cloud & AI,
      website: 'https://microsoft.com,
      tier: 'strategic
    },    {
      name: 'Amazon Web Services,
      logo: '/images/partners/aws.png,
      description: 'Leading cloud infrastructure and machine learning platform provider,
      category: 'Cloud Computing,
      website: 'https://aws.amazon.com,
      tier: 'strategic
    },
      tier: 'strategic});)},
    {
      name: 'Google Cloud,
      logo: '/images/partners/google-cloud.png,
      description: 'Advanced AI and machine learning platform with global reach,
      category: 'Cloud & AI,
      website: 'https://cloud.google.com,
      tier: 'strategic
    },    {
      name: 'IBM,
      logo: '/images/partners/ibm.png,
      description: 'Enterprise AI solutions and hybrid cloud platform,
      category: 'Enterprise AI,
      website: 'https://ibm.com,
      tier: 'preferred
    },
    {
      name: 'Salesforce,
      logo: '/images/partners/salesforce.png,
      description: 'Customer relationship management and business automation,
      description: 'Customer relationship management and business automation platform',      category: 'CRM & Automation,
      website: 'https://salesforce.com,
      tier: 'preferred});)
},
    {
      name: 'Oracle,
      logo: '/images/partners/oracle.png,
      description: 'Database solutions and enterprise applications,
      category: 'Database & Enterprise,
      website: 'https://oracle.com,
      tier: 'preferred});)
},
    {
      name: 'ServiceNow,
      logo: '/images/partners/servicenow.png,
      description: 'IT service management and workflow automation,
      category: 'IT Management,
      website: 'https://servicenow.com,
      tier: 'certified});)
},
    {
      name: 'Splunk,
      logo: '/images/partners/splunk.png,
      description: 'Data analytics and security monitoring platform,
      category: 'Analytics & Security,
      website: 'https://splunk.com,
      tier: 'certified
    }  ];

  const benefits = [;;

    'Access to cutting-edge technology platforms,
    'Joint go-to-market strategies,
    'Co-marketing opportunities,
    'Technical support and training,
    'Early access to new features,
    Dedicated partner success manager
  ];

  const partnershipTiers = [;;

    {
      name: 'Strategic,
      description: 'Deep integration and co-innovation,
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20,
      borderColor: 'border-purple-400/50,
      icon: Award
    },
    {
      name: 'Preferred,
      description: 'Enhanced support and collaboration,
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20,
      borderColor: 'border-blue-400/50,
      icon: Handshake
    },
    {
      name: 'Certified,
      description: 'Verified expertise and capabilities,
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20,
      borderColor: 'border-green-400/50,
=======
    {}
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {}
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
      tier: 'strategic'});;)
},
    {}
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {}
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {}
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      description: 'Customer relationship management and business automation platform',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'});;)
},
    {}
      name: 'Splunk',
      logo: '/images/partners/splunk.png',
      description: 'Data analytics and security monitoring platform',
      category: 'Analytics & Security',
      website: 'https://splunk.com',
      tier: 'certified'
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
    {}
      name: 'Strategic',
      description: 'Deep integration and co-innovation',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-blue-500/20',
      borderColor: 'border-purple-400/50',
      icon: Award
    },
    {}
      name: 'Preferred',
      description: 'Enhanced support and collaboration',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-400/50',
      icon: Handshake
    },
    {}
      name: 'Certified',
      description: 'Verified expertise and capabilities',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-400/50',
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      icon: CheckCircle
    }

  ];

<<<<<<< HEAD
  const getTierInfo = (tier: string) => {;;

    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});)
=======
  const getTierInfo = (tier: string) => {}
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2]});;)
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
};

const PagePage: React.FC = () => {}
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PartnersPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  return (

    <>
      <Helmet>
<<<<<<< HEAD
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
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
<<<<<<< HEAD
              {partnershipTiers.map((tier, index) => (

=======
              {partnershipTiers.map((tier, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <div></div>
                  <div></div>
                    <tier.icon className={`w-8 h-8 ${tier.color}} />
                  </div>
                  <h></h>{tier.name}</h3>
                  <p className="text-gray-300>{tier.description}</p>
                </div>
              ));

            </div>
          </div>
        </section>

        {/* Partners Grid */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Our Technology Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                We work with the worlds leading technology companies to deliver comprehensive solutions.
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
                        <di></di>{partner.name.charAt(0);</div>}
                      </div>
                      <h3></h3>
                        {partner.name}

                      </h3>
                      <p className="text-sm text-gray-300 mb-3>{partner.description}</p>
                      <div></div>
                        {partner.category}

                      </div>
<<<<<<< HEAD
                      {partner.website && (

=======
                      {partner.website && (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                        <a></a>
                          Visit Website
                          <ExternalLink className="w-3 h-3 />
                        </a>
                      );

                    </div>
                  </div>
                );

              })}

            </div>
          </div>
        </section>

        {/* Partnership Benefits */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-6>Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div></div>
              <div></div>
<<<<<<< HEAD
                {benefits.map((benefit, index) => (

=======
                {benefits.map((benefit, index) => (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  <div></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 />
                    <span className="text-gray-300>{benefit}</span>
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
                Interested in partnering with us? Were always looking for innovative companies to join our ecosystem.
              </p>
              <div></div>
                <button></button>
                  <Handshake className="w-5 h-5 />
                  Partner With Us
                </button>
                <button></button>
                  <TrendingUp className="w-5 h-5 />
                  View Partnership Program
                </button>
              </div>
<<<<<<< HEAD
      nam,    e: 'Microsoft,
      logo: /api/placeholder/200
      descriptio,
    n: 'Strategic partnership for Azure cloud solutions and AI services,
      category: Cloud & AI
    },
    {
      name: 'Amazon Web Services,
      logo: /api/placeholder/200
      descriptio,
    n: 'Leading cloud infrastructure and machine learning platform provider,
      category: Cloud Computing
    },
    {
      name: 'Google Cloud,
      logo: /api/placeholder/200
    },
    {
      name: 'IBM,
      logo: /api/placeholder/200
=======
      nam,
    e: 'Microsoft',
      logo: '/api/placeholder/200
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {}
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing'
    },
    {}
      name: 'Google Cloud',
      logo: '/api/placeholder/200
    },
    {}
      name: 'IBM',
      logo: '/api/placeholder/200
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  ];

  return (<div>
                <)
              ))}

            <

            <div className=bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white
              <h2 className="text-2xl font-bold text-white mb-6 text-center>Partnership Benefits<
              <div className=grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-4>
                {benefits.map((benefit), index) => (<div key={index} className="flex items-center space-x-3>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 
                    <span className="text-gray-300>{benefit}<
                  <)
                ))}

              <
            <
          <
        <
      <
    <
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. We work with Microsoft, AWS, Google Cloud, and more to deliver cutting-edge solutions. />
        <meta name="keywords" content="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4 sm:px-6 lg:px-8>
        <div className="max-w-7xl mx-auto>
          <div className="text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400>Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
              Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <Link
                to="/contact
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
              >
                Get Started
                <ArrowRight className="w-5 h-5 />
              </Link>
              <Link
                to="/services
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
              >
                Learn More
                <ArrowRight className="w-5 h-5 />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Why Choose Our Page Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Expert Solutions</h3>
                <p className="text-gray-300>Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>24/7 Support</h3>
                <p className="text-gray-300>Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Custom Solutions</h3>
                <p className="text-gray-300>Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl font-bold text-white mb-4>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                Contact our experts to discuss your Page needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
                >
                  <Phone className="w-5 h-5 />
                  Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-600 hover:bg-slate-600 transition-all duration-300
                >
                  <Mail className="w-5 h-5 />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
        </div>
      </section>
    </div>
  );};
=======
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Partners services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Partners</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

export default PartnersPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
