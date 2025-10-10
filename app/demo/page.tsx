'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, MessageSquare, BarChart, Eye, Mic, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer queries naturally.',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Easy Integration']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      icon: BarChart,
      features: ['Real-time Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Demo',
      description: 'Explore our computer vision capabilities for image recognition and analysis.',
      icon: Eye,
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis']
    },
    {
      id: 'voice-ai',
      title: 'Voice AI Demo',
      description: 'Test our voice AI solutions for speech recognition and synthesis.',
      icon: Mic,
      features: ['Speech Recognition', 'Voice Synthesis', 'Voice Commands', 'Multi-language Support']
    },
    {
      id: 'document-ai',
      title: 'Document AI Demo',
      description: 'See how our document AI can process and extract information from documents.',
      icon: FileText,
      features: ['Document Classification', 'Text Extraction', 'Form Processing', 'Data Validation']
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <Helmet>
        <title>Demo | Zion Tech Group - Try Our AI Solutions</title>
        <meta name="description" content="Experience our AI solutions firsthand with interactive demos. Try our chatbots, analytics, computer vision, and more." />
        <meta name="keywords" content="demo, AI demo, chatbot demo, analytics demo, computer vision, voice AI, document AI, try before you buy" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Try Our Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand with interactive demos and live examples.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose a Demo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select from our range of interactive demos to see our solutions in action.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`cursor-pointer rounded-lg p-6 border-2 transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {demo.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Interactive Demo
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Click the play button above to start the interactive demo. You'll be able to test the features and see how our solution works in real-time.
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Start Demo
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Personal Demo
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Want to see how our solutions can work for your specific use case? Request a personalized demo with our experts.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Request Personal Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the power of our solutions and see how they can transform your business.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DemoPage;