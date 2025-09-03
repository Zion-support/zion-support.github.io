import type { NextPage } from 'next';
import { Handshake, Building, Globe, Award, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PartnersPage: NextPage = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions',
      partners: [
        {
          name: 'Microsoft',
          logo: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=200&h=100',
          description: 'Cloud infrastructure and AI services',
          category: 'Cloud & AI'
        },
        {
          name: 'Google Cloud',
          logo: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=200&h=100',
          description: 'Machine learning and data analytics',
          category: 'AI & ML'
        },
        {
          name: 'AWS',
          logo: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=200&h=100',
          description: 'Scalable cloud computing solutions',
          category: 'Cloud Infrastructure'
        }
      ]
    },
    {
      title: 'Industry Partners',
      description: 'Strategic partners across key industries',
      partners: [
        {
          name: 'Healthcare Systems',
          logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=200&h=100',
          description: 'Healthcare AI and diagnostics solutions',
          category: 'Healthcare'
        },
        {
          name: 'Financial Services',
          logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=200&h=100',
          description: 'Fintech and fraud detection solutions',
          category: 'Financial'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
              Building the future of AI together with industry leaders and technology innovators
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver cutting-edge AI solutions
            </p>
          </div>

          <div className="space-y-16">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <Building className="w-10 h-10 text-indigo-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h4>
                        <p className="text-gray-600 mb-3">{partner.description}</p>
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                          {partner.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Become a Partner
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join our network of innovative partners and help shape the future of AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Handshake className="w-5 h-5 mr-2" />
              Partner With Us
            </Link>
            <Link 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;