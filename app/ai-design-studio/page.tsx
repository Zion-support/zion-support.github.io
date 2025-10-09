'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, ArrowRight, CheckCircle, Sparkles, Image, Layers, Wand2 } from 'lucide-react';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Design Generation',
      description: 'Create stunning visuals with AI that understands your brand and style.',
      benefits: ['Brand-consistent designs', 'Multiple variations', 'Instant generation']
    },
    {
      icon: Image,
      title: 'Smart Image Enhancement',
      description: 'Automatically enhance and optimize images for any platform.',
      benefits: ['Auto color correction', 'Background removal', 'Resolution upscaling']
    },
    {
      icon: Layers,
      title: 'Template Library',
      description: 'Access thousands of professional templates for every use case.',
      benefits: ['Industry-specific designs', 'Customizable layouts', 'Regular updates']
    },
    {
      icon: Wand2,
      title: 'Collaborative Design',
      description: 'Work together with your team in real-time on design projects.',
      benefits: ['Real-time collaboration', 'Version control', 'Comment system']
    }
  ];

  const benefits = [
    { icon: Sparkles, text: '10x faster design process' },
    { icon: Image, text: 'Professional quality output' },
    { icon: Layers, text: 'Unlimited templates' },
    { icon: Wand2, text: 'AI-powered suggestions' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-pink-500/20 rounded-full px-4 py-2 mb-8">
                <Palette className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 text-sm font-medium">AI Design Studio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI-Powered
                <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Design Studio
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create stunning designs with AI assistance. From logos to social media graphics, 
                our AI design studio helps you create professional visuals in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Start Designing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  View Gallery
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{benefit.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI Design Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI tools to accelerate your design workflow and create amazing visuals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIDesignStudioPage;
