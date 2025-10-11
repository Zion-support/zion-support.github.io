import React from 'react';
import { CheckCircle, ArrowRight, Users, Clock, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const consultationTypes = [
    {
      title: 'Strategy Consultation',
      description: 'Strategic planning and technology roadmap development.',
      duration: '2-4 weeks',
      benefits: ['Technology Assessment', 'Roadmap Planning', 'Risk Analysis', 'Implementation Strategy'],
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Technical Review',
      description: 'Comprehensive technical audit and optimization recommendations.',
      duration: '1-2 weeks',
      benefits: ['Code Review', 'Performance Analysis', 'Security Audit', 'Best Practices'],
      icon: <Clock className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Security Assessment',
      description: 'Complete security evaluation and vulnerability assessment.',
      duration: '1-3 weeks',
      benefits: ['Vulnerability Scan', 'Penetration Testing', 'Compliance Check', 'Security Training'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'System performance analysis and optimization recommendations.',
      duration: '1-2 weeks',
      benefits: ['Performance Audit', 'Bottleneck Analysis', 'Optimization Plan', 'Monitoring Setup'],
      icon: <Zap className="w-8 h-8 text-orange-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Professional technology consultation and advisory services." />
        <meta name="keywords" content="consultation, technology advisory, strategy, technical review" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get expert advice and guidance from our technology consultants. 
              Make informed decisions with our professional consultation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Consultation Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {consultationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <p className="text-sm text-purple-300 mb-4">Duration: {type.duration}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Expert Advice?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book a consultation with our experts and get personalized recommendations for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
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
