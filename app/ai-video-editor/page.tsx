<<<<<<< HEAD

=======
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Video, Scissors, Play, Upload, Download, Zap, Sparkles, CheckCircle, Brain, Target, Globe } from 'lucide-react';

const AIVideoEditorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Editing',
      description: 'Automatically edit videos using AI to detect scenes, optimize cuts, and enhance quality.',
      benefits: ['Auto scene detection', 'Smart cuts', 'Quality enhancement', 'Content analysis']
    },
    {
      icon: Video,
      title: 'Professional Tools',
      description: 'Access to professional-grade video editing tools with an intuitive interface.',
      benefits: ['Timeline editing', 'Multi-track support', 'Advanced effects', 'Color correction']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Render and process videos quickly with optimized AI algorithms and cloud computing.',
      benefits: ['Cloud rendering', 'Fast export', 'Batch processing', 'Real-time preview']
    },
    {
      icon: Target,
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and focus on creative aspects of video production.',
      benefits: ['Auto-sync audio', 'Smart transitions', 'Auto-captioning', 'Template matching']
    }
  ];

  const benefits = [
    'Reduce editing time by 60%',
    'Create professional videos without expertise',
    'Automate repetitive editing tasks',
    'Export in multiple formats',
    'Collaborate with team members'
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Editor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional videos with AI-powered editing, effects, and automation. 
              Advanced video editing made simple with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Editing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Video Editing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional video editing tools powered by AI to create stunning videos effortlessly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
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

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Video Editor?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your video production with intelligent automation and professional results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Create Amazing Videos?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join content creators and businesses using our AI video editor to produce professional videos at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Sales
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

export default AIVideoEditorPage;
>>>>>>> main
