'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Users, Clock, DollarSign, Star, Phone, Mail, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ConsultationPackage {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
  const packages: ConsultationPackage[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Expert guidance on migrating your infrastructure to the cloud with minimal disruption.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Strategic planning for AI integration into your business processes and operations.',
      duration: '4-6 hours',
      price: '$1000',
      features: [
        'AI opportunity assessment',
        'Use case identification',
        'Technology stack selection',
        'ROI analysis and projections',
        'Implementation strategy'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Consultation',
      description: 'Comprehensive security assessment and strategy development to protect your business.',
      duration: '3-4 hours',
      price: '$600',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Security policy development',
        'Incident response planning',
        'Training recommendations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Get advice from industry experts with years of experience in technology and business.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Customized Solutions',
      description: 'Tailored recommendations based on your specific business needs and goals.',
      icon: <Star className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Cost Effective',
      description: 'Avoid costly mistakes with expert guidance and strategic planning.',
      icon: <DollarSign className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Quick Results',
      description: 'Get actionable insights and recommendations in just a few hours.',
      icon: <Clock className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT consultation services by Zion Tech Group. Get expert guidance on technology strategy, cloud migration, AI implementation, and cybersecurity." />
        <meta name="keywords" content="IT consultation, technology strategy, cloud migration, AI implementation, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert guidance on technology strategy, cloud migration, AI implementation, and cybersecurity from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Book Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the expert guidance you need to make informed technology decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Consultation Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation package that best fits your needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${pkg.popular ? 'border-yellow-400/50' : 'border-white/20'} hover:bg-white/20 transition-all duration-300`}>
                  {pkg.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-gray-300 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                    <div className="text-gray-400">{pkg.duration}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Book Now
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Book your consultation today and get expert guidance on your technology needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <Phone className="inline-block mr-2 w-5 h-5" />
                    Call Us Now
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    <Mail className="inline-block mr-2 w-5 h-5" />
                    Send Email
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    <Calendar className="inline-block mr-2 w-5 h-5" />
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;