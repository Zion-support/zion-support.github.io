'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MessageCircle, Calendar, Award, Globe, Heart } from 'lucide-react';
const CommunityPage: React.FC = () => {const communityFeatures = [
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with industry professionals and AI experts from around the world.'
<<<<<<< HEAD
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Users, MessageCircle, Calendar, Award } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with industry experts and like-minded professionals'
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    },
    {
      icon: MessageCircle,
      title: 'Knowledge Sharing',
      description: 'Share insights, ask questions, and learn from the community.'
    },
    {
      icon: Calendar,
      title: 'Events & Webinars',
      description: 'Join our regular events, workshops, and educational sessions.'
<<<<<<< HEAD
=======
      description: 'Share insights and learn from community discussions'
    },
    {
      icon: Calendar,
      title: 'Events & Workshops',
      description: 'Participate in exclusive events and training sessions'
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Get recognized for your contributions and achievements.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with professionals from different countries and cultures.'
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'Get help and support from fellow community members.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join the Zion Tech Group community and connect with AI and IT professionals worldwide." />
        <meta name="keywords" content="tech community, AI professionals, IT network, knowledge sharing, tech events" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Community</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with like-minded professionals, share knowledge, and grow together in the world of AI and technology.
            </p>
<<<<<<< HEAD
            ));
=======
      description: 'Get recognized for your contributions and achievements'
    }
  ];

  const benefits = [
    'Access to exclusive content',
    'Networking opportunities',
    'Expert mentorship',
    'Early access to new features',
    'Community support',
    'Professional development',
    'Industry insights',
    'Collaboration opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Community | Zion Tech Group</title>
        <meta name="description" content="Join our community of AI and IT professionals. Connect, learn, and grow together." />
        <meta name="keywords" content="community, networking, AI professionals, IT community, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Community
              </span>
              <br />
              <span className="text-white">Connect & Grow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our vibrant community of AI and IT professionals. 
              Connect, learn, and grow together in the tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our community offers unique opportunities for growth and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Become part of our growing community and start your journey with us today.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes our community special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-8ef1
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Become part of our growing community and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default CommunityPage;
    </div>)
export default PagePage;
