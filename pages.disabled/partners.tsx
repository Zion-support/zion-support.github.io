import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Building, Globe, Award, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
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
          tier: 'Gold'
        }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Companies that help us deliver comprehensive solutions to our clients',
      partners: [
        {
          name: 'Salesforce',
          logo: '💼',
          description: 'CRM and business automation',
          tier: 'Gold'
        },
        {
          name: 'HubSpot',
          logo: '📈',
          description: 'Marketing and sales automation',
          tier: 'Silver'
        }
      ]
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling programs',
    'Early access to new features',
    'Dedicated partner success manager'
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Partnership Program
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Partner with Zion Tech Group
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our ecosystem of technology partners and help businesses transform 
              their digital presence with cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Partner Ecosystem
              </h2>
              <p className="text-xl text-gray-600">
                We work with industry leaders to deliver comprehensive solutions
              </p>
            </div>

            <div className="space-y-12">
              {partnerCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <Building className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{partner.logo}</span>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {partner.name}
                            </h4>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              partner.tier === 'Platinum' ? 'bg-yellow-100 text-yellow-800' :
                              partner.tier === 'Gold' ? 'bg-gray-100 text-gray-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {partner.tier}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partner Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Why partner with Zion Tech Group?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our partner ecosystem and help businesses achieve their digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Partners;