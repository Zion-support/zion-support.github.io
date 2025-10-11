'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {  ExternalLink, Award, Handshake, TrendingUp } from 'lucide-react';

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
      description: 'Advanced AI and machine learning platform with global reach',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'strategic'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI solutions and hybrid cloud platform',
      category: 'Enterprise AI',
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
      description: 'Database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'IT service management and workflow automation',
      category: 'IT Management',
      website: 'https://servicenow.com',
      tier: 'certified'
    },
    {
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
      borderColor: 'border-yellow-400/30'
    },
    {
      name: 'Preferred Partners',
      description: 'Certified solutions and priority support',
      icon: Handshake,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'Certified Partners',
      description: 'Authorized implementation and support',
      icon: 
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    }
  ];

  const getTierInfo = (tier: string) => {
    return partnershipTiers.find(t => t.name.toLowerCase().includes(tier)) || partnershipTiers[2];
  };

  return (
    <div>

    <>
      <Helmet>
  
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta>
  
        <meta>
  
      </Helmet>

      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <h1>
  
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
            </h1>
            <p>
  
              We partner with industry leaders to deliver cutting-edge AI and IT solutions. Our strategic alliances ensure you get the best technology available.
            </p>

            <div>
  
              <div>
  
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Technology Partners</div>
              </div>
              <div>
  
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Years of Partnership</div>
              </div>
              <div>
  
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400">Certified Solutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Tiers</h2>
              <p>
  
                Our partnerships are structured to provide maximum value and support for our clients.
              </p>
            </div>

            <div>
  
              {partnershipTiers.map((tier, index) => (
                <div>
  
                  <div>
  
                    <tier>
  
                  </div>
                  <h3 className={`text-2xl font-bold ${tier.color} mb-4`}>{tier.name}</h3>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl font-bold text-white mb-6">Our Technology Partners</h2>
              <p>
  
                We work with the world's leading technology companies to deliver comprehensive solutions.
              </p>
            </div>

            <div>
  
              {partners.map((partner, index) => {
                const tierInfo = getTierInfo(partner.tier);
                return (
    <div>

                  <div>
  
                    <div>
  
                      <div>
  
                        <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                      </div>
                      <h3>
  
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">{partner.description}</p>
                      <div>
  
                        {partner.category}
                      </div>
                      {partner.website && (
                        <a>
  
                          Visit Website
                          <ExternalLink>
  
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p>
  
                Our strategic partnerships provide significant advantages for your business.
              </p>
            </div>

            <div>
  
              <div>
  
                {benefits.map((benefit, index) => (
                  <div>
  
                    <CheckCircle>
  
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Become a Partner CTA */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl font-bold text-white mb-6">Become a Partner</h2>
              <p>
  
                Interested in partnering with us? We're always looking for innovative companies to join our ecosystem.
              </p>
              <div>
  
                <button>
  
                  <Handshake>
  
                  Partner With Us
                </button>
                <button>
  
                  <TrendingUp>
  
                  View Partnership Program
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