'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and AI services',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'AI and machine learning platform',
      category: 'Cloud'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and quantum computing',
      category: 'Technology'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and customer experience solutions',
      category: 'Software'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise applications',
      category: 'Software'
    }
  ];

  const partnerTypes = [
    {
      icon: Globe,
      title: 'Technology Partners',
      description: 'Leading technology companies that provide the foundation for our solutions.',
      benefits: ['Access to cutting-edge technology', 'Joint product development', 'Technical support']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Resellers and integrators who help us reach customers in specific markets.',
      benefits: ['Market expansion', 'Local expertise', 'Customer relationships']
    },
    {
      icon: Shield,
      title: 'Security Partners',
      description: 'Cybersecurity experts who help us maintain the highest security standards.',
      benefits: ['Enhanced security', 'Compliance expertise', 'Risk mitigation']
    }
  ];

  const benefits = [
    'Access to cutting-edge technology and platforms',
    'Joint product development and innovation',
    'Technical support and training',
    'Market expansion opportunities',
    'Enhanced credibility and trust',
    'Cost-effective solutions for customers'
  ];

  const partnerPrograms = [
    {
      title: 'Technology Alliance',
      description: 'Strategic partnerships with leading technology providers for joint innovation.',
      requirements: ['Technology expertise', 'Market presence', 'Innovation focus']
    },
    {
      title: 'Channel Partner',
      description: 'Reseller and integration partnerships for market expansion.',
      requirements: ['Sales capabilities', 'Technical expertise', 'Customer relationships']
    },
    {
      title: 'Solution Partner',
      description: 'Partnerships focused on specific industry solutions and verticals.',
      requirements: ['Industry expertise', 'Solution development', 'Market knowledge']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Technology, channel, and solution partnerships available." />
        <meta name="keywords" content="partners, partnerships, technology alliance, channel partners, solution partners" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Building the future together
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We work with industry-leading partners to deliver comprehensive solutions and drive innovation 
              in AI, cloud computing, and enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Technology Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading technology companies to deliver the best solutions to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-colors">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl font-bold text-white">{partner.name.charAt(0)}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-300 mb-3">{partner.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Partnership Types</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer various partnership opportunities to suit different business models and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Partner Programs</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership program that best fits your business goals and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our partnership team to learn more about our programs and how to get started.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Partnership Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our Partner Ecosystem
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Become part of our growing network of partners and help shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Learn More
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage;