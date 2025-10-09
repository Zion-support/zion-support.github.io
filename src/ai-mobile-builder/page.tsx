import React from 'react';
import { Smartphone, Code, Zap, ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIMobileBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'AI-Assisted Development',
      description: 'Build mobile apps with AI-powered code generation and suggestions'
    },
    {
      icon: Code,
      title: 'Cross-Platform',
      description: 'Create apps for both iOS and Android from a single codebase'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quickly prototype and iterate on your mobile app ideas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Mobile Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build powerful mobile applications with the help of AI technology. 
            Create cross-platform apps faster and more efficiently than ever before.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="p-3 bg-purple-600/20 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIMobileBuilderPage;