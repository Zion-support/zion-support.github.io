'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, Star, Users, Globe, Shield } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/api/placeholder/200/100',
      description: 'Cloud and AI solutions partner',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/api/placeholder/200/100',
      description: 'Cloud infrastructure partner',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
logo: '/images/partners/google-cloud.png',
      description: 'Advanced AI and machine learning platforms',
      category: 'AI/ML'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Quantum computing and enterprise solutions',
      category: 'Quantum'
}
  ];

  const benefits = [
<<<<<<< HEAD
'Access to cutting-edge technology',
    'Joint go-to-market opportunities',
    'Technical support and training',
    'Co-marketing and co-selling',
    'Early access to new features',
    'Dedicated partner success manager'

=======
    {
      icon: Handshake,
    {}
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborate with industry leaders to deliver cutting-edge solutions'},
    {
      icon: Globe,
    {}
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to worldwide markets through our partner network'},
    {
      icon: Award,
    {}
      icon: Award,
      title: 'Certified Solutions',
      description: 'Verified and certified integrations with top platforms'},
    {
      icon: Users,
    {}
      icon: Users,
      title: 'Joint Innovation',
      description: 'Co-develop innovative solutions with our partners'}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  ];

  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, technology partnerships, strategic alliances, Microsoft, AWS, Google Cloud, IBM, NVIDIA" />

<<<<<<< HEAD
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Partners
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We work with industry leaders to deliver cutting-edge technology solutions. 
                Our strategic partnerships enable us to provide the best tools and services to our clients.
              </p>

            </div>
=======
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Navigation />)
      {/* Hero Section */})
      <section className="relative py-20 overflow-hidden">)
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></section>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Partners;</h1>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Strategic partnerships with industry leaders to deliver world-class AI and IT solutions;
          </p>
        </div>,
      </section>,
,
      {/* Partners Grid */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the world's leading technology companies to deliver exceptional solutions;
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {partners.map((partner, index) => (</div>
              <div;
                key={index}
                className="cyber-card p-8 hover: scale-105 transition-all duration-300 relative",
              >,</div>
                <div className="text-center">,</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </section>

<<<<<<< HEAD
{/* Partners Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Strategic Partners</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Collaborating with the world's leading technology companies to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="text-2xl font-bold text-gray-800">{partner.name.charAt(0)}</div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {partners.map((partner, index) => (</div>
            {partners.map((partner, index) => (}
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              ></div>
                <div className="text-center"></div>
                  <div className="text-6xl mb-4">{partner.logo}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>

                  <div className="flex items-center justify-center space-x-4 mb-4"></div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  <div className="flex items-center justify-center space-x-4 mb-4"></div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${}
                      partner.tier === 'Platinum' ? 'bg-yellow-500/20 text-yellow-400' :
                      partner.tier === 'Gold' ? 'bg-yellow-600/20 text-yellow-300' :}
                      'bg-gray-500/20 text-gray-300'}
                    }`}>
                      {partner.tier}
                    </span>
                    <span className="text-sm text-gray-400">{partner.category}</spa>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                  <p className="text-cyan-400 mb-3">{partner.category}</p>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our partnerships bring together the best of both worlds: cutting-edge technology and proven expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
<div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Global reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Enterprise focus</span>

                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              <Link
                to="/contact"
                className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Apply to Partner</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Partner With Us?
=======
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partnership Benefits;
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to deliver exceptional 
              value to our mutual customers.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Partnership Discussion
              </Link>
              <Link
                to="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
=======
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {benefits.map((benefit, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (}</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </div>
    </>

<<<<<<< HEAD
  );
=======
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Partner;
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our partner ecosystem and unlock new opportunities for growth and innovation;
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Apply to Partner;
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Learn More;
            </button>
          </div>
        </div>
      </section>

      <Footer />,
    </div>);
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
};

export default PartnersPage;