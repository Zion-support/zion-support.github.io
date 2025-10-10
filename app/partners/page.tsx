'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
>>>>>>> cursor/analyze-improve-and-deploy-application-3150

const PartnersPage: React.FC = () => {
  const partners = [
=======
import { ExternalLink, Award, Handshake, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  website: string;
  tier: 'preferred' | 'certified' | 'strategic';
}

const PartnersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('all');

  const partners: Partner[] = [
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
<<<<<<< HEAD
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
=======
      description: 'Strategic partner for Azure cloud services and AI solutions',
      category: 'Cloud & AI',
      website: 'https://microsoft.com',
      tier: 'strategic'
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    },
    {
      id: '2',
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
<<<<<<< HEAD
      description: 'Premier partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud & AI'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Technology partner for GPU-accelerated AI computing',
      category: 'Hardware & AI'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Partner for CRM and business automation solutions',
      category: 'Business Software'
    },
    {
      name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Partner for IT service management and workflow automation',
      category: 'IT Management'
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners',
      icon: CheckCircle
    },
    {
      title: 'Priority Support',
      description: 'Get priority access to partner resources and support channels',
      icon: CheckCircle
    },
    {
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early release features',
      icon: CheckCircle
    },
    {
      title: 'Cost Optimization',
      description: 'Leverage partner pricing and volume discounts for your projects',
      icon: CheckCircle
=======
      description: 'Preferred partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud Computing',
      website: 'https://aws.amazon.com',
      tier: 'preferred'
    },
    {
      id: '3',
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Certified partner for Google Cloud Platform and AI/ML services',
      category: 'Cloud & AI',
      website: 'https://cloud.google.com',
      tier: 'certified'
    },
    {
      id: '4',
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Strategic partnership for enterprise AI and quantum computing solutions',
      category: 'Enterprise AI',
      website: 'https://ibm.com',
      tier: 'strategic'
    },
    {
      id: '5',
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Certified partner for CRM integration and customer experience solutions',
      category: 'CRM & Sales',
      website: 'https://salesforce.com',
      tier: 'certified'
    },
    {
      id: '6',
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Preferred partner for database solutions and enterprise applications',
      category: 'Database & Enterprise',
      website: 'https://oracle.com',
      tier: 'preferred'
    },
    {
      id: '7',
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Strategic partner for AI hardware and GPU computing solutions',
      category: 'AI Hardware',
      website: 'https://nvidia.com',
      tier: 'strategic'
    },
    {
      id: '8',
      name: 'Intel',
      logo: '/images/partners/intel.png',
      description: 'Certified partner for processor optimization and AI acceleration',
      category: 'Hardware & Processing',
      website: 'https://intel.com',
      tier: 'certified'
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
    }
=======
    'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-innovation projects',
    'Global reach and scalability',
    'Certified expertise and solutions'
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
  ];

<<<<<<< HEAD
  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management'];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" />
      </Helmet>

      <Navigation />
      
=======
        <title>Partners | Zion Tech Group - Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Join our partner ecosystem and grow your business with Zion Tech Group." />
        <meta name="keywords" content="technology partners, strategic partnerships, cloud partners, AI partners, business partnerships" />
      </Helmet>

>>>>>>> cursor/analyze-improve-and-deploy-application-3150
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🏢</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
=======
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {partner.category}
                  </span>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
=======
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Partnership Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Partner With Us
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem and help shape the future of AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Our Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD

      <Footer />
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-3150
    </>
=======
  const categories = ['all', ...Array.from(new Set(partners.map(partner => partner.category)))];
  const tiers = ['all', ...Array.from(new Set(partners.map(partner => partner.tier)))];

  const filteredPartners = partners.filter(partner => {
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    const matchesTier = selectedTier === 'all' || partner.tier === selectedTier;
    return matchesCategory && matchesTier;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return 'from-purple-500 to-pink-600';
      case 'preferred':
        return 'from-blue-500 to-purple-600';
      case 'certified':
        return 'from-green-500 to-blue-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'strategic':
        return <Star className="w-4 h-4" />;
      case 'preferred':
        return <Award className="w-4 h-4" />;
      case 'certified':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Handshake className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Meet our strategic partners and learn about our technology partnerships that enable us to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, partnerships, strategic partners, technology partners, AI partners, cloud partners" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We work with industry leaders to deliver the best AI and IT solutions. 
            Our strategic partnerships enable us to provide comprehensive, cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive partnership programs that benefit both our partners and our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Strategic Collaboration</h3>
              <p className="text-gray-300">
                Work together to develop innovative solutions that benefit both organizations and their customers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Joint Go-to-Market</h3>
              <p className="text-gray-300">
                Leverage our combined expertise and market presence to reach new customers and expand market share.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Certification Programs</h3>
              <p className="text-gray-300">
                Access to training, certification, and technical resources to stay ahead of technology trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tiers.map(tier => (
                <option key={tier} value={tier}>
                  {tier === 'all' ? 'All Tiers' : tier.charAt(0).toUpperCase() + tier.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{partner.name.charAt(0)}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTierColor(partner.tier)} flex items-center gap-1`}>
                    {getTierIcon(partner.tier)}
                    {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{partner.category}</p>
                <p className="text-gray-300 mb-6">{partner.description}</p>

                <div className="flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center gap-2"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No partners found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Tiers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer different partnership levels to meet the needs of various organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certified Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Basic training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Marketing support materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Technical documentation access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 ring-2 ring-blue-400/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Preferred Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Advanced training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Co-marketing opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Priority technical support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Dedicated partner manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Strategic Partner</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Exclusive training and certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Joint product development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Executive relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our partner ecosystem and help us deliver innovative AI and IT solutions to businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply for Partnership
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
  );
};

export default PartnersPage;