'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'Getting Started with AI',
      description: 'Learn the fundamentals of artificial intelligence and how to implement it in your business.',
      category: 'AI & Machine Learning'
    },
    {
      title: 'Data Analytics Best Practices',
      description: 'Discover best practices for collecting, analyzing, and visualizing your business data.',
      category: 'Data & Analytics'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential cybersecurity practices to protect your business from threats.',
      category: 'Security'
    },
    {
      title: 'Cloud Migration Guide',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud.',
      category: 'Infrastructure'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Guides & Resources - Zion Tech Group</title>
        <meta name="description" content="Comprehensive guides and resources to help you understand and implement AI and IT solutions in your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Guides &</span> Resources
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guides and resources to help you understand and implement AI and IT solutions in your business.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Available Guides</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expert-written guides covering various aspects of AI and IT implementation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 text-purple-400 mr-3" />
                    <span className="text-sm text-purple-400 font-medium">{guide.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{guide.title}</h3>
                  <p className="text-gray-300 mb-6">{guide.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Read Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Custom Guidance?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our experts can provide personalized guidance tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Expert Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default GuidesPage;