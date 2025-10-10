'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, Building, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      website: 'https://microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced cloud computing and AI platform solutions',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise AI and hybrid cloud solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com'
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      website: 'https://salesforce.com'
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Enterprise Software',
      website: 'https://oracle.com'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features',
    'Dedicated partner success managers'
  ];

  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integration with leading technology platforms and tools',
      icon: <Building className="w-8 h-8" />
    },
    {
      title: 'Solution Partners',
      description: 'Joint solution development and delivery capabilities',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for market reach',
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group - Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business." />
        <meta name="keywords" content="partners, partnerships, technology partners, strategic alliances, partner program" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We work with industry leaders to deliver cutting-edge solutions and create mutual value for our clients and partners.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-32 h-16 object-contain mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-center mb-6">{partner.description}</p>
                  <div className="text-center">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center group"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Partnership Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Partner Benefits</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join our partner ecosystem and unlock exclusive benefits, resources, and opportunities for growth.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Become a Partner</h3>
                <p className="text-gray-300 mb-6">
                  Ready to join our partner ecosystem? Let's discuss how we can work together to deliver exceptional value to our clients.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/contact"
                    className="cyber-button w-full text-center inline-flex items-center justify-center"
                  >
                    Partner with Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/partners/application"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our growing ecosystem of technology partners and help us deliver innovative solutions to businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/partners/resources"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Partner Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;