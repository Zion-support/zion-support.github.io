'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Cloud, BarChart, Smartphone, Code, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-dashboard');
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      id: 'ai-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time AI-powered analytics and insights for your business data',
      icon: BarChart,
      duration: '5 min',
      category: 'AI & Analytics'
    },
    {
      id: 'chatbot-demo',
      title: 'Intelligent Chatbot',
      description: 'Experience our advanced AI chatbot with natural language processing',
      icon: Brain,
      duration: '3 min',
      category: 'AI & NLP'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Tool',
      description: 'See how we can help migrate your infrastructure to the cloud',
      icon: Cloud,
      duration: '7 min',
      category: 'Cloud Solutions'
    },
    {
      id: 'security-audit',
      title: 'Security Assessment',
      description: 'Comprehensive security analysis and threat detection demo',
      icon: Shield,
      duration: '4 min',
      category: 'Cybersecurity'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: 'Cross-platform mobile application development showcase',
      icon: Smartphone,
      duration: '6 min',
      category: 'Mobile Development'
    },
    {
      id: 'web-platform',
      title: 'Web Platform Demo',
      description: 'Modern web application with advanced features and performance',
      icon: Code,
      duration: '8 min',
      category: 'Web Development'
    }
  ];

  const demoCategories = [
    'All Demos',
    'AI & Analytics',
    'AI & NLP',
    'Cloud Solutions',
    'Cybersecurity',
    'Mobile Development',
    'Web Development'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Interactive Demos',
      description: 'Hands-on experience with our solutions'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'See real AI capabilities in action'
    },
    {
      icon: Shield,
      title: 'Secure Environment',
      description: 'Safe sandbox for testing and exploration'
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Tailor demos to your specific needs'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  const handlePlayDemo = () => {
    setIsPlaying(true);
    // Simulate demo loading
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Live Demos - Zion Tech Group"
        description="Experience our AI and technology solutions through interactive demos. See how our solutions can transform your business."
        keywords="demos, AI demos, technology demos, interactive demos, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Live <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Demos</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience our AI and technology solutions firsthand. Try our interactive demos to see how we can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Demo
              <Play className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Try Our Demos?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our interactive demos give you a hands-on experience with our cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of interactive demos to explore different aspects of our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo List */}
            <div className="space-y-4">
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedDemo === demo.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{demo.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{demo.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{demo.category}</span>
                        <span>•</span>
                        <span>{demo.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">4.8</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Player */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedDemoData?.title}
                </h3>
                <p className="text-gray-300 mb-4">{selectedDemoData?.description}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span>{selectedDemoData?.category}</span>
                  <span>•</span>
                  <span>{selectedDemoData?.duration}</span>
                </div>
              </div>

              <div className="aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                {isPlaying ? (
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white">Loading demo...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white mb-4">Click to start demo</p>
                    <button
                      onClick={handlePlayDemo}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      Play Demo
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">What you'll see:</h4>
                <ul className="space-y-2">
                  {[
                    'Real-time data visualization',
                    'Interactive user interface',
                    'AI-powered insights',
                    'Performance metrics',
                    'Customization options'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our demos by technology category to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {demoCategories.map((category) => (
              <button
                key={category}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-white font-medium">{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a personalized demo with our experts to see how our solutions can meet your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Live Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;