'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Cloud } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI analytics can transform your business data into actionable insights.',
      category: 'AI Services',
      duration: '5 min demo',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Automated insights'
      ]
    },
    {
      id: 2,
      title: 'Cloud Migration Simulator',
      description: 'Experience our cloud migration process and see the benefits in action.',
      category: 'IT Services',
      duration: '8 min demo',
      features: [
        'Migration planning',
        'Cost optimization',
        'Security assessment',
        'Performance monitoring'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Threat Detection',
      description: 'Watch our AI-powered security system identify and respond to threats in real-time.',
      category: 'Security',
      duration: '6 min demo',
      features: [
        'Threat detection',
        'Automated response',
        'Security analytics',
        'Compliance reporting'
      ]
    }
  ];

  const benefits = [
    'See real solutions in action',
    'Understand implementation process',
    'Ask questions to our experts',
    'Get personalized recommendations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations." />
        <meta name="keywords" content="demo, AI demo, IT demo, cloud demo, cybersecurity demo, business solutions" />
      </Helmet>

      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              See Our <span className="text-cyan-400">Solutions</span> in Action
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. 
              See how our technology can transform your business operations.
            </p>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Interactive Demos</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our solutions through hands-on demonstrations and see the results for yourself.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Play className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-3">
                      {demo.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {demo.duration}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {demo.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Start Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Try Our Demos?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get hands-on experience with our solutions before making a decision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to See More?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to see how our solutions 
                can address your specific business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Call (302) 464-0950</span>
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

export default DemoPage;
