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
  tier: 'strategic' | 'preferred' | 'certified';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'strategic'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and cognitive computing solutions',
      category: 'AI & Analytics',
      website: 'https://ibm.com',
      tier: 'preferred'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Customer relationship management and business automation',
      category: 'CRM & Automation',
      website: 'https://salesforce.com',
      tier: 'preferred'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise software solutions',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'SAP',
      logo: '/images/partners/sap.png',
      description: 'Enterprise resource planning and business intelligence',
      category: 'ERP & BI',
      website: 'https://sap.com',
      tier: 'certified'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'ITSM & Automation',
      website: 'https://servicenow.com',
      tier: 'certified'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Cloud data platform and analytics solutions',
      category: 'Data & Analytics',
      website: 'https://snowflake.com',
      tier: 'certified'
    }
  ];

  const partnerTiers = {
    strategic: {
      title: 'Strategic Partners',
      description: 'Our closest technology partners with deep integration and joint go-to-market initiatives',
      color: 'from-purple-500 to-blue-500',
      icon: Award
    },
    preferred: {
      title: 'Preferred Partners',
      description: 'Trusted partners with proven track records and comprehensive solution offerings',
      color: 'from-blue-500 to-cyan-500',
      icon: Handshake
    },
    certified: {
      title: 'Certified Partners',
      description: 'Validated partners with specialized expertise and certified solutions',
      color: 'from-green-500 to-emerald-500',
      icon: CheckCircle
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Leverage our partner ecosystem to accelerate your digital transformation journey'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Access to certified professionals and specialized expertise across all technologies'
    },
    {
      icon: Handshake,
      title: 'Joint Solutions',
      description: 'Collaborative development of integrated solutions that address complex business challenges'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology providers. Learn how we collaborate to deliver comprehensive AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, cloud partners, AI partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We collaborate with industry leaders to deliver comprehensive, integrated solutions that drive digital transformation and business success.
            </p>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {Object.entries(partnerTiers).map(([tierKey, tierInfo]) => {
              const tierPartners = partners.filter(partner => partner.tier === tierKey);
              const IconComponent = tierInfo.icon;

              return (
                <div key={tierKey} className="mb-16">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tierInfo.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{tierInfo.title}</h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">{tierInfo.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tierPartners.map((partner, index) => (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300"
                      >
                        <div className="text-center">
                          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <img
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              className="w-12 h-12 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                              }}
                            />
                            <div className="hidden text-2xl font-bold text-white">
                              {partner.name.charAt(0)}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                          <p className="text-gray-300 mb-4">{partner.description}</p>
                          <div className="inline-block bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm mb-4">
                            {partner.category}
                          </div>
                          {partner.website && (
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              Visit Website
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships are built on mutual success, shared expertise, and a commitment to delivering exceptional value to our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem of technology leaders and help us deliver innovative solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Apply to Partner
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;