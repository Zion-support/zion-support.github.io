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
          category: 'Cloud & Infrastructure'
        },
        {
          name: 'Amazon Web Services',
          logo: '/partners/aws.png',
          description: 'Comprehensive cloud computing platform',
          category: 'Cloud & Infrastructure'
        },
        {
          name: 'Google Cloud',
          logo: '/partners/google-cloud.png',
          description: 'AI/ML and data analytics solutions',
          category: 'AI & Analytics'
        },
        {
          name: 'Salesforce',
          logo: '/partners/salesforce.png',
          description: 'Customer relationship management platform',
          category: 'CRM & Business'
        }
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Companies that help us deliver comprehensive solutions to our clients',
      partners: [
        {
          name: 'Deloitte',
          logo: '/partners/deloitte.png',
          description: 'Digital transformation consulting',
          category: 'Consulting'
        },
        {
          name: 'Accenture',
          logo: '/partners/accenture.png',
          description: 'Technology and business consulting',
          category: 'Consulting'
        },
        {
          name: 'IBM',
          logo: '/partners/ibm.png',
          description: 'Enterprise software and services',
          category: 'Enterprise Solutions'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Expertise',
      description: 'Our partnerships ensure we maintain the highest standards of technical expertise and certification.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Access to worldwide resources and support networks through our partner ecosystem.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Best-in-Class Solutions',
      description: 'We leverage the best technologies and methodologies from industry leaders.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Direct access to partner support teams and specialized resources.'
    }
  ];

  const partnershipTypes = [
    {
      title: 'Technology Integration',
      description: 'Seamless integration with leading technology platforms',
      features: ['API Integration', 'Custom Connectors', 'Data Synchronization', 'Real-time Updates']
    },
    {
      title: 'Joint Solutions',
      description: 'Co-developed solutions that combine our expertise with partner technologies',
      features: ['Co-marketing', 'Joint Development', 'Shared Resources', 'Combined Support']
    },
    {
      title: 'Certification Programs',
      description: 'Certified professionals and solutions for enterprise-grade implementations',
      features: ['Technical Certifications', 'Solution Validation', 'Best Practices', 'Compliance Standards']
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partnerships</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Building powerful alliances with industry leaders to deliver comprehensive technology solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
              Become a Partner
            </Link>
            <Link href="/solutions" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver cutting-edge solutions and exceptional value to our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-zion-cyan mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.partners.map((partner, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{partner.name}</h3>
                    <span className="text-zion-cyan font-medium">{partner.category}</span>
                  </div>
                  <p className="text-gray-600 text-center">{partner.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to meet different business needs and objectives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our network of strategic partners and help us deliver exceptional technology solutions to clients worldwide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Contact Partnership Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/solutions" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PartnersPage;