'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Handshake, Award, Users, Globe, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Cloud & AI',
      description: 'Strategic partner for Azure cloud services and AI solutions',
      benefits: ['Azure Credits', 'Technical Support', 'Co-marketing']
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Infrastructure',
      description: 'Premier partner for AWS cloud infrastructure and services',
      benefits: ['AWS Credits', 'Training Programs', 'Joint Solutions']
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI & Machine Learning',
      description: 'Partner for Google Cloud AI and machine learning services',
      benefits: ['GCP Credits', 'AI/ML Tools', 'Technical Training']
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise Solutions',
      description: 'Strategic partner for enterprise AI and quantum computing',
      benefits: ['IBM Cloud Credits', 'Quantum Access', 'Enterprise Support']
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      category: 'AI Hardware',
      description: 'Partner for GPU-accelerated AI and machine learning',
      benefits: ['GPU Access', 'AI Frameworks', 'Technical Resources']
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      category: 'CRM & Automation',
      description: 'Partner for Salesforce CRM and automation solutions',
      benefits: ['Salesforce Credits', 'AppExchange', 'Integration Support']
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Technology Partners',
      description: 'Strategic technology partnerships with leading cloud and AI providers',
      benefits: ['Access to cutting-edge technology', 'Joint development opportunities', 'Co-marketing support']
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for our solutions',
      benefits: ['Revenue sharing opportunities', 'Sales training and support', 'Marketing materials']
    },
    {
      icon: Globe,
      title: 'Global Partners',
      description: 'International partnerships for global market expansion',
      benefits: ['Local market expertise', 'Cultural adaptation', 'Regional support']
    },
    {
      icon: Award,
      title: 'Certified Partners',
      description: 'Certified implementation and consulting partners',
      benefits: ['Certification programs', 'Technical training', 'Quality assurance']
    }
  ];

  const benefits = [
    'Access to exclusive partner resources and tools',
    'Joint go-to-market opportunities',
    'Technical training and certification programs',
    'Co-marketing and co-selling support',
    'Priority technical support',
    'Revenue sharing opportunities',
    'Early access to new products and features',
    'Partner advisory board participation'
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, channel partners, Microsoft, AWS, Google Cloud" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white neon-text-enhanced">
                  Strategic <span className="text-cyan-400">Partnerships</span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We partner with leading technology companies to deliver comprehensive solutions 
                and create mutual value for our clients and partners.
              </p>
            </div>
          </section>

          {/* Partners Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-2">{partner.category}</p>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-center">
                      {partner.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-3">Partnership Benefits:</h4>
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Types */}
          <section className="py-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Partnership <span className="text-cyan-400">Types</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We offer various partnership opportunities to suit different business models and goals
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipTypes.map((type, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Benefits */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Partnership <span className="text-cyan-400">Benefits</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join our partner ecosystem and unlock exclusive benefits and opportunities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Partnership Process</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Initial Discussion</h4>
                        <p className="text-gray-300 text-sm">Schedule a call to discuss partnership opportunities and mutual goals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Partnership Agreement</h4>
                        <p className="text-gray-300 text-sm">Review and sign partnership terms and conditions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Training & Onboarding</h4>
                        <p className="text-gray-300 text-sm">Complete training programs and access partner resources</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Launch & Support</h4>
                        <p className="text-gray-300 text-sm">Begin partnership activities with ongoing support and collaboration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 text-center border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Partner With Us?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join our growing partner ecosystem and unlock new opportunities for growth and success. 
                  Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Become a Partner
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PartnersPage;