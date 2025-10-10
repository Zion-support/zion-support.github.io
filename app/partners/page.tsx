'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ExternalLink, 
  Award, 
  Users, 
  Handshake, 
  TrendingUp, 
  Building2, 
  Zap, 
  ArrowRight,
  Star,
  Globe,
  Shield
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      category: 'Technology Partner',
      description: 'Strategic partnership for Azure cloud solutions and AI services',
      logo: '/images/partners/microsoft.png',
      benefits: ['Azure integration', 'AI/ML services', 'Enterprise solutions']
    },
    {
      name: 'Amazon Web Services',
      category: 'Cloud Partner',
      description: 'Premier AWS partner delivering scalable cloud infrastructure',
      logo: '/images/partners/aws.png',
      benefits: ['AWS expertise', 'Cloud migration', 'Cost optimization']
    },
    {
      name: 'Google Cloud',
      category: 'AI Partner',
      description: 'Advanced AI and machine learning solutions on Google Cloud',
      logo: '/images/partners/google.png',
      benefits: ['AI/ML platforms', 'Data analytics', 'Vertex AI']
    },
    {
      name: 'IBM',
      category: 'Enterprise Partner',
      description: 'Enterprise-grade AI and blockchain solutions',
      logo: '/images/partners/ibm.png',
      benefits: ['Watson AI', 'Blockchain', 'Enterprise security']
    },
    {
      name: 'Salesforce',
      category: 'CRM Partner',
      description: 'Customer relationship management and automation solutions',
      logo: '/images/partners/salesforce.png',
      benefits: ['CRM integration', 'Sales automation', 'Customer insights']
    },
    {
      name: 'Oracle',
      category: 'Database Partner',
      description: 'Enterprise database and cloud infrastructure solutions',
      logo: '/images/partners/oracle.png',
      benefits: ['Database solutions', 'Cloud infrastructure', 'Enterprise apps']
    }
  ];

  const partnershipTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Long-term collaborations with industry leaders to deliver comprehensive solutions'
    },
    {
      icon: Building2,
      title: 'Technology Partnerships',
      description: 'Integration with cutting-edge technologies and platforms'
    },
    {
      icon: Users,
      title: 'Channel Partnerships',
      description: 'Reseller and referral programs for mutual growth'
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Certified expertise in partner technologies and solutions'
    }
  ];

  const benefits = [
    'Access to cutting-edge technology',
    'Reduced implementation costs',
    'Faster time to market',
    'Enhanced security and compliance',
    '24/7 technical support',
    'Regular training and updates'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Explore our strategic partnerships with leading technology companies. Learn about our partner ecosystem and how we deliver integrated solutions." />
        <meta name="keywords" content="partners, partnerships, Microsoft, AWS, Google Cloud, IBM, Salesforce, Oracle, technology partners" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We partner with industry leaders to deliver comprehensive, integrated solutions 
              that drive business success and innovation.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Types of Partnerships</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer various partnership opportunities to suit different business needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the world's leading technology companies to deliver exceptional solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 text-sm font-semibold">{partner.category}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{partner.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full border border-cyan-500 text-cyan-400 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Become Our Partner
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="mailto:partners@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contact Partners Team</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;