'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle, Star, Award } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      category: 'Cloud & AI',
      tier: 'Platinum',
      benefits: ['Azure credits', 'Technical support', 'Co-marketing opportunities']
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Leading cloud infrastructure and machine learning platform provider',
      category: 'Cloud Computing',
      tier: 'Platinum',
      benefits: ['AWS credits', 'Training programs', 'Solution architecture support']
    },
    {
      name: 'Google Cloud',
      logo: '/api/placeholder/200/100',
      description: 'Advanced AI and machine learning platform with cutting-edge tools',
      category: 'AI & ML',
      tier: 'Gold',
      benefits: ['GCP credits', 'AI/ML training', 'Technical consultation']
    },
    {
      name: 'IBM',
      logo: '/api/placeholder/200/100',
      description: 'Enterprise solutions and Watson AI platform integration',
      category: 'Enterprise AI',
      tier: 'Gold',
      benefits: ['Watson AI access', 'Enterprise support', 'Industry solutions']
    },
    {
      name: 'Salesforce',
      logo: '/api/placeholder/200/100',
      description: 'CRM and customer experience platform integration',
      category: 'CRM & Sales',
      tier: 'Silver',
      benefits: ['Salesforce credits', 'Integration support', 'Training resources']
    },
    {
      name: 'Oracle',
      logo: '/api/placeholder/200/100',
      description: 'Database and enterprise application solutions',
      category: 'Database & ERP',
      tier: 'Silver',
      benefits: ['Oracle Cloud credits', 'Database optimization', 'Migration support']
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from all major technology partners'
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Access to dedicated partner support channels and resources'
    },
    {
      icon: Award,
      title: 'Co-Marketing',
      description: 'Joint marketing opportunities and case study development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Our strategic partnerships with leading technology companies enable us to deliver cutting-edge solutions to our clients." />
        <meta name="keywords" content="technology partners, Microsoft, AWS, Google Cloud, IBM, strategic partnerships" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with industry leaders to deliver the most advanced and reliable technology solutions to our clients.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-2xl text-cyan-400">🏢</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-gray-500/20 text-gray-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {partner.tier}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {partner.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {partner.category}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-gray-300">Benefits:</h4>
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Our Partnerships Matter
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our strategic partnerships enable us to provide you with the latest technology, 
                best practices, and industry-leading support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Request CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interested in Partnering with Us?
              </h2>
              <p className="text-gray-300 mb-6">
                We're always looking for new strategic partnerships that can benefit our clients 
                and expand our service offerings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Become a Partner
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
                <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                  Contact Partnership Team
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