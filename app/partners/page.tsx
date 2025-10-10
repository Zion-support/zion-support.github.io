'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ExternalLink, Award, Users, Handshake, TrendingUp, Building2, Zap, ArrowRight } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  description: string;
  website: string;
  category: 'Technology' | 'Cloud' | 'Security' | 'AI' | 'Consulting';
  partnershipType: 'Technology' | 'Strategic' | 'Channel' | 'Integration';
}

const PartnersPage: React.FC = () => {
  const partners: Partner[] = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership for enterprise solutions',
      website: 'https://microsoft.com',
      category: 'Cloud',
      partnershipType: 'Strategic'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services partnership',
      website: 'https://aws.amazon.com',
      category: 'Cloud',
      partnershipType: 'Technology'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform integration',
      website: 'https://cloud.google.com',
      category: 'AI',
      partnershipType: 'Technology'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Watson AI and enterprise solutions collaboration',
      website: 'https://ibm.com',
      category: 'AI',
      partnershipType: 'Strategic'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM integration and customer success solutions',
      website: 'https://salesforce.com',
      category: 'Technology',
      partnershipType: 'Integration'
    },
    {
      name: 'Cisco',
      logo: '/images/partners/cisco.png',
      description: 'Network security and infrastructure solutions',
      website: 'https://cisco.com',
      category: 'Security',
      partnershipType: 'Channel'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise application integration',
      website: 'https://oracle.com',
      category: 'Technology',
      partnershipType: 'Technology'
    },
    {
      name: 'Deloitte',
      logo: '/images/partners/deloitte.png',
      description: 'Consulting and digital transformation services',
      website: 'https://deloitte.com',
      category: 'Consulting',
      partnershipType: 'Strategic'
    },
    {
      name: 'Accenture',
      logo: '/images/partners/accenture.png',
      description: 'Digital transformation and technology consulting',
      website: 'https://accenture.com',
      category: 'Consulting',
      partnershipType: 'Strategic'
    },
    {
      name: 'Palantir',
      logo: '/images/partners/palantir.png',
      description: 'Data analytics and AI platform collaboration',
      website: 'https://palantir.com',
      category: 'AI',
      partnershipType: 'Technology'
    },
    {
      name: 'Snowflake',
      logo: '/images/partners/snowflake.png',
      description: 'Data cloud and analytics platform integration',
      website: 'https://snowflake.com',
      category: 'Technology',
      partnershipType: 'Integration'
    },
    {
      name: 'Databricks',
      logo: '/images/partners/databricks.png',
      description: 'Unified analytics platform for AI and data science',
      website: 'https://databricks.com',
      category: 'AI',
      partnershipType: 'Technology'
    }
  ];

  const partnershipTypes = [
    { id: 'all', name: 'All Partnerships' },
    { id: 'Technology', name: 'Technology' },
    { id: 'Strategic', name: 'Strategic' },
    { id: 'Channel', name: 'Channel' },
    { id: 'Integration', name: 'Integration' }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Leverage our partner ecosystem to accelerate your business growth and market reach.'
    },
    {
      icon: Users,
      title: 'Expanded Network',
      description: 'Access to our extensive network of technology partners and industry experts.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Collaborate on cutting-edge solutions and stay ahead of technology trends.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Gain recognition as a trusted partner in the AI and technology space.'
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'We discuss your business goals and how we can work together to achieve them.'
    },
    {
      step: 2,
      title: 'Partnership Agreement',
      description: 'We formalize our partnership with clear terms and mutual benefits.'
    },
    {
      step: 3,
      title: 'Integration & Training',
      description: 'We provide training and support to ensure smooth integration.'
    },
    {
      step: 4,
      title: 'Ongoing Collaboration',
      description: 'We maintain regular communication and collaboration for mutual success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and collaborate with leading technology companies to deliver innovative solutions." />
        <meta name="keywords" content="partners, technology partnerships, business collaboration, partner program" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              We collaborate with industry-leading technology companies to deliver 
              comprehensive solutions that drive innovation and business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#become-partner"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Become a Partner
              </Link>
              <Link
                to="/contact"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various partnership opportunities to suit different business models and goals.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.slice(1).map((type, index) => (
                <div key={type.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                  <p className="text-gray-300 text-sm">
                    {type.id === 'Technology' && 'Technical integration and co-development partnerships'}
                    {type.id === 'Strategic' && 'Long-term strategic alliances and joint ventures'}
                    {type.id === 'Channel' && 'Reseller and distribution partnerships'}
                    {type.id === 'Integration' && 'Platform integration and API partnerships'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our commitment to innovation and excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-600 transition-colors">
                    <Building2 className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="bg-slate-700 text-cyan-400 px-2 py-1 rounded text-xs">
                      {partner.category}
                    </span>
                    <span className="bg-slate-700 text-purple-400 px-2 py-1 rounded text-xs">
                      {partner.partnershipType}
                    </span>
                  </div>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined process makes it easy to become a partner and start collaborating.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="become-partner" className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Become a Partner?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join our partner ecosystem and start collaborating with industry leaders 
                to deliver innovative solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Apply Now
                </Link>
                <Link
                  to="/consultation"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

PartnersPage.displayName = 'PartnersPage';

export default PartnersPage;