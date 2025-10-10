'use client';
import React, { useState } from 'react';
import { Play, Calendar, Phone, Mail, CheckCircle, ArrowRight, Star, Users, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'Experience our AI-powered solutions including machine learning, natural language processing, and computer vision',
      duration: '30 minutes',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Automated Decision Making'
      ],
      icon: '🤖'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'See how quantum computing can solve complex optimization problems and advance scientific research',
      duration: '45 minutes',
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Scientific Simulations',
        'Cryptography',
        'Quantum Machine Learning'
      ],
      icon: '⚛️'
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions Demo',
      description: 'Explore our blockchain solutions including smart contracts, DeFi protocols, and enterprise applications',
      duration: '40 minutes',
      features: [
        'Smart Contracts',
        'DeFi Protocols',
        'Enterprise Applications',
        'Tokenization',
        'Decentralized Identity'
      ],
      icon: '⛓️'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services Demo',
      description: 'Discover our scalable cloud infrastructure and managed services for modern applications',
      duration: '35 minutes',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps & CI/CD',
        '24/7 Monitoring',
        'Auto-scaling'
      ],
      icon: '☁️'
    },
    {
      id: 'custom',
      title: 'Custom Demo',
      description: 'Get a personalized demo tailored to your specific business needs and requirements',
      duration: '60 minutes',
      features: [
        'Customized Solution',
        'Industry-Specific Features',
        'Integration Planning',
        'ROI Analysis',
        'Implementation Roadmap'
      ],
      icon: '💻'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-slate-900 to-purple-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Experience Our Solutions
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  See our AI and IT solutions in action. Schedule a personalized demo and discover how we can transform your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo Video
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Live Demo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Selection */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                  Choose Your Demo Experience
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {demos.map((demo) => (
                    <div
                      key={demo.id}
                      onClick={() => setSelectedDemo(demo.id)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedDemo === demo.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="text-4xl mb-4">{demo.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{demo.title}</h3>
                      <p className="text-gray-600 mb-4">{demo.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {demo.duration}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Demo Details */}
                {selectedDemoData && (
                  <div className="bg-white rounded-lg shadow-md p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {selectedDemoData.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{selectedDemoData.description}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-indigo-600 mr-3" />
                            <span className="text-gray-700">Duration: {selectedDemoData.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-indigo-600 mr-3" />
                            <span className="text-gray-700">Up to 10 participants</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-indigo-600 mr-3" />
                            <span className="text-gray-700">Interactive Q&A included</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll See</h4>
                        <ul className="space-y-2">
                          {selectedDemoData.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to See It in Action?
                </h2>
                <p className="text-xl text-indigo-100 mb-8">
                  Schedule your personalized demo today and discover how our solutions can transform your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (302) 464-0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-8 text-indigo-100">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>24/7 Support</span>
                  </div>
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

export default DemoPage;