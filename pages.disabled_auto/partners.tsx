import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Handshake, Star, Users, Award, Globe, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const Partners: NextPage = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      icon: Zap,
      description: 'Leading technology companies that provide the tools and platforms we use to deliver exceptional solutions.',
      partners: [
        {
          name: 'Microsoft',
          logo: 'Microsoft',
          description: 'Cloud computing and enterprise solutions',
          category: 'Cloud & Enterprise'
        },
        {
          name: 'Amazon Web Services',
          logo: 'AWS',
          description: 'Cloud infrastructure and services',
          category: 'Cloud Infrastructure'
        },
        {
          name: 'Google Cloud',
          logo: 'Google Cloud',
          description: 'AI and machine learning platforms',
          category: 'AI & ML'
        },
        {
          name: 'Salesforce',
          logo: 'Salesforce',
          description: 'Customer relationship management',
          category: 'CRM'
        }
      ]
    },
    {
      title: 'Solution Partners',
      icon: Globe,
      description: 'Strategic partners who help us deliver comprehensive solutions to our clients.',
      partners: [
        {
          name: 'IBM',
          logo: 'IBM',
          description: 'Enterprise software and consulting',
          category: 'Enterprise Solutions'
        },
        {
          name: 'Oracle',
          logo: 'Oracle',
          description: 'Database and enterprise applications',
          category: 'Database & Applications'
        },
        {
          name: 'SAP',
          logo: 'SAP',
          description: 'Business process management',
          category: 'Business Process'
        },
        {
          name: 'ServiceNow',
          logo: 'ServiceNow',
          description: 'IT service management',
          category: 'IT Management'
        }
      ]
    },
    {
      title: 'Security Partners',
      icon: Shield,
      description: 'Cybersecurity experts who help us maintain the highest security standards.',
      partners: [
        {
          name: 'Cisco',
          logo: 'Cisco',
          description: 'Network security and infrastructure',
          category: 'Network Security'
        },
        {
          name: 'Palo Alto Networks',
          logo: 'Palo Alto',
          description: 'Next-generation firewalls',
          category: 'Firewall Solutions'
        },
        {
          name: 'CrowdStrike',
          logo: 'CrowdStrike',
          description: 'Endpoint protection and response',
          category: 'Endpoint Security'
        },
        {
          name: 'Okta',
          logo: 'Okta',
          description: 'Identity and access management',
          category: 'Identity Management'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners, ensuring we deliver solutions using best practices and latest technologies.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with our partners to provide integrated solutions that leverage the strengths of multiple platforms and technologies.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our partnerships have resulted in successful implementations across various industries, delivering measurable business value to our clients.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Through our partner network, we can provide support and solutions to clients worldwide, ensuring consistent quality and service.'
    }
  ];

  const partnershipPrograms = [
    {
      title: 'Technology Alliance',
      description: 'Join our technology alliance program to access cutting-edge tools, training, and co-marketing opportunities.',
      benefits: [
        'Access to beta programs and early releases',
        'Technical training and certification programs',
        'Co-marketing and lead sharing opportunities',
        'Dedicated partner support and resources'
      ],
      cta: 'Learn More',
      href: '/partners/technology-alliance'
    },
    {
      title: 'Solution Provider',
      description: 'Become a solution provider partner and help us deliver comprehensive solutions to enterprise clients.',
      benefits: [
        'Revenue sharing opportunities',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Sales and marketing enablement'
      ],
      cta: 'Apply Now',
      href: '/partners/solution-provider'
    },
    {
      title: 'Referral Program',
      description: 'Earn rewards by referring qualified leads to Zion Tech Group and help us grow our client base.',
      benefits: [
        'Competitive referral fees',
        'No upfront investment required',
        'Flexible partnership terms',
        'Ongoing support and training'
      ],
      cta: 'Get Started',
      href: '/partners/referral-program'
    }
  ];

  return (
    <MainLayout
      title="Partners - Zion Tech Group"
      description="Discover our strategic partnerships with leading technology companies and learn how to become a Zion Tech Group partner."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Handshake className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Strategic partnerships with leading technology companies to deliver exceptional solutions and value to our clients.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive, cutting-edge solutions that drive business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <benefit.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with industry leaders across different technology domains to provide comprehensive solutions.
            </p>
          </div>
          
          <div className="space-y-16">
            {partnerTypes.map((type, typeIndex) => (
              <div key={typeIndex}>
                <div className="flex items-center mb-8">
                  <type.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {type.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-center">
                        <div className="h-16 flex items-center justify-center mb-4">
                          <div className="text-2xl font-bold text-gray-700">{partner.logo}</div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
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

      {/* Partnership Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth and collaboration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={program.href}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  {program.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our partner network and help us deliver exceptional technology solutions to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Become a Partner
            </Link>
            <Link href="/partners/benefits" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Partners;