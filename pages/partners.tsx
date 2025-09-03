import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
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
          logo: '/partners/microsoft.png',
          description: 'Azure cloud services and enterprise solutions',
          category: 'Cloud & Enterprise'
        },
        {
          name: 'Amazon Web Services',
          logo: '/partners/aws.png',
          description: 'Cloud infrastructure and AI services',
          category: 'Cloud & AI'
        },
        {
          name: 'Google Cloud',
          logo: '/partners/google-cloud.png',
          description: 'Machine learning and data analytics platforms',
          category: 'AI & Analytics'
        }
      ]
    },
    {
      title: 'Solution Partners',
      description: 'Specialized solution providers that enhance our service offerings',
      partners: [
        {
          name: 'Salesforce',
          logo: '/partners/salesforce.png',
          description: 'CRM and customer experience solutions',
          category: 'CRM & CX'
        },
        {
          name: 'ServiceNow',
          logo: '/partners/servicenow.png',
          description: 'IT service management and automation',
          category: 'ITSM & Automation'
        }
      ]
    }
  ];

  const partnershipTypes = [
    {
      title: 'Strategic Partners',
      icon: <Handshake className="w-8 h-8" />,
      description: 'Long-term strategic relationships with shared business objectives',
      features: ['Joint Go-to-Market', 'Technology Integration', 'Shared Resources', 'Revenue Sharing']
    },
    {
      title: 'Technology Partners',
      icon: <Building className="w-8 h-8" />,
      description: 'Technology providers that enhance our solution capabilities',
      features: ['API Integration', 'Technical Support', 'Co-development', 'Certification Programs']
    },
    {
      title: 'Channel Partners',
      icon: <Globe className="w-8 h-8" />,
      description: 'Resellers and distributors that extend our market reach',
      features: ['Sales Enablement', 'Marketing Support', 'Training Programs', 'Partner Portal']
    },
    {
      title: 'Certified Partners',
      icon: <Award className="w-8 h-8" />,
      description: 'Certified professionals and solutions for enterprise-grade implementations',
      features: ['Technical Certifications', 'Solution Validation', 'Best Practices', 'Compliance Standards']
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building the future of technology through strategic partnerships
              that drive business success and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      {partnerCategories.map((category, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, partnerIndex) => (
                <div key={partnerIndex} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{partner.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to meet different business needs and objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become a Partner
            </Link>
            <Link href="/solutions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PartnersPage;