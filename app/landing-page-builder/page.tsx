'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Globe, ArrowRight, CheckCircle, Zap, Smartphone, Palette, Code } from 'lucide-react';

const LandingPageBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Drag & Drop Builder',
      description: 'Create stunning landing pages without coding using our intuitive drag-and-drop interface.',
      benefits: ['No coding required', 'Visual editor', 'Real-time preview']
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'All pages automatically adapt to any device for perfect mobile experience.',
      benefits: ['Auto-responsive', 'Mobile optimization', 'Touch-friendly']
    },
    {
      icon: Palette,
      title: 'Custom Templates',
      description: 'Choose from hundreds of professionally designed templates for every industry.',
      benefits: ['Industry-specific designs', 'Customizable layouts', 'Brand integration']
    },
    {
      icon: Code,
      title: 'Advanced Customization',
      description: 'Fine-tune every detail with advanced customization options and custom CSS.',
      benefits: ['Custom CSS', 'Advanced settings', 'API integration']
    }
  ];

  const benefits = [
    { icon: Zap, text: '5x faster page creation' },
    { icon: Smartphone, text: '100% mobile responsive' },
    { icon: Palette, text: '500+ templates' },
    { icon: Code, text: 'Advanced customization' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-indigo-500/20 rounded-full px-4 py-2 mb-8">
                <Globe className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 text-sm font-medium">Landing Page Builder</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                AI Landing Page
                <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Builder
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create high-converting landing pages in minutes with our AI-powered builder. 
                No coding required, just drag, drop, and launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  View Examples
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
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional landing pages that convert visitors into customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-indigo-400" />
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

export default LandingPageBuilderPage;
