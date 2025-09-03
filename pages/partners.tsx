import React from 'react';
import { SEO } from '../src/components/SEO';
import { Handshake, Award, Users, Globe, Star, CheckCircle } from 'lucide-react';

const Partners: React.FC = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      partners: [
        {
          name: 'Microsoft',
          logo: '🏢',
          description: 'Cloud infrastructure and enterprise solutions',
          tier: 'Platinum'
        },
        {
          name: 'Amazon Web Services',
          logo: '☁️',
          description: 'Cloud computing and AI services',
          tier: 'Platinum'
        },
        {
          name: 'Google Cloud',
          logo: '🔍',
          description: 'AI and machine learning platforms',
          tier: 'Platinum'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners, ensuring expert-level knowledge and implementation.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with our partners to deliver integrated solutions that leverage the best of each technology.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Through our partner network, we can serve clients worldwide with local expertise and global capabilities.'
    },
    {
      icon: Star,
      title: 'Innovation Access',
      description: 'Early access to new technologies and features through our strategic partnerships with industry leaders.'
    }
  ];

  const partnershipTiers = [
    {
      name: 'Platinum',
      color: 'bg-gray-800',
      textColor: 'text-white',
      description: 'Strategic technology partners with deep integration and joint go-to-market initiatives.'
    },
    {
      name: 'Gold',
      color: 'bg-yellow-500',
      textColor: 'text-white',
      description: 'Key technology partners with significant collaboration and joint solution development.'
    },
    {
      name: 'Silver',
      color: 'bg-gray-400',
      textColor: 'text-white',
      description: 'Valued partners with proven track record of successful project delivery.'
    }
  ];

  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group"
        description="Learn about Zion Tech Group's strategic partnerships with leading technology companies and how we deliver integrated solutions."
        keywords="technology partners, strategic partnerships, Microsoft, AWS, Google Cloud, IBM, enterprise solutions"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Handshake className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-5xl font-bold mb-6">Strategic Partners</h1>
              <p className="text-xl text-gray-300 mb-8">
                We collaborate with industry leaders to deliver comprehensive technology solutions 
                that drive innovation and business success.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {partnerCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-4xl mb-4">{partner.logo}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                        <p className="text-gray-600 mb-4">{partner.description}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          partner.tier === 'Platinum' ? 'bg-gray-800 text-white' :
                          partner.tier === 'Gold' ? 'bg-yellow-500 text-white' :
                          'bg-gray-400 text-white'
                        }`}>
                          {partner.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our strategic partnerships enable us to deliver superior solutions and exceptional value to our clients.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                      <benefit.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Tiers</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We work with partners at different levels to ensure the right level of collaboration and support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {partnershipTiers.map((tier, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${tier.color} mb-6`}>
                      <span className={`text-2xl font-bold ${tier.textColor}`}>{tier.name[0]}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
              <p className="text-xl mb-8">
                Join our partner network and help us deliver innovative technology solutions to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Partner with Us
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Us: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;