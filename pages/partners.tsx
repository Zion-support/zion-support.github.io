import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Building, Globe, Award, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PartnersPage: NextPage = () => {
  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that provide cutting-edge solutions and platforms.',
      icon: Building,
      partners: [
        {
          name: 'Microsoft',
          description: 'Cloud infrastructure and AI services',
          logo: '/logos/microsoft.png'
        },
        {
          name: 'Google Cloud',
          description: 'Advanced analytics and machine learning',
          logo: '/logos/google-cloud.png'
        },
        {
          name: 'AWS',
          description: 'Scalable cloud computing solutions',
          logo: '/logos/aws.png'
        }
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Business partners that help us deliver comprehensive solutions to our clients.',
      icon: Handshake,
      partners: [
        {
          name: 'Deloitte',
          description: 'Digital transformation consulting',
          logo: '/logos/deloitte.png'
        },
        {
          name: 'Accenture',
          description: 'Technology implementation services',
          logo: '/logos/accenture.png'
        }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized partners that enhance our service offerings.',
      icon: Target,
      partners: [
        {
          name: 'Salesforce',
          description: 'CRM and customer experience solutions',
          logo: '/logos/salesforce.png'
        },
        {
          name: 'ServiceNow',
          description: 'IT service management platform',
          logo: '/logos/servicenow.png'
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Joint Go-to-Market',
      description: 'Collaborative marketing and sales initiatives to reach new markets.',
      icon: Globe
    },
    {
      title: 'Technical Integration',
      description: 'Seamless integration of complementary technologies and services.',
      icon: Award
    },
    {
      title: 'Shared Resources',
      description: 'Access to shared expertise, tools, and development resources.',
      icon: Users
    },
    {
      title: 'Certified Expertise',
      description: 'Certified professionals with deep expertise in partner technologies.',
      icon: CheckCircle
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Partner with Zion Tech Group
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join our ecosystem of innovative partners and together we'll transform businesses through cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Become a Partner
                </Link>
                <Link href="/solutions" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Partner Ecosystem
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with industry leaders to deliver comprehensive solutions that drive digital transformation and business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnerCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group and how we can grow together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth, innovation, and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PartnersPage;