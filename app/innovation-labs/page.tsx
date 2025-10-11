'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FlaskConical, Lightbulb, Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const InnovationLabsPage: React.FC = () => {
  const projects = [
    {
      icon: FlaskConical,
      title: 'AI Research',
      description: 'Cutting-edge research in artificial intelligence and machine learning.',
      status: 'In Progress',
      benefits: ['Neural networks', 'Deep learning', 'Natural language processing', 'Computer vision']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Incubator',
      description: 'Supporting startups and entrepreneurs with innovative technology solutions.',
      status: 'Active',
      benefits: ['Startup support', 'Technology mentoring', 'Funding assistance', 'Market research']
    },
    {
      icon: Rocket,
      title: 'Future Technologies',
      description: 'Exploring emerging technologies and their potential applications.',
      status: 'Research',
      benefits: ['Quantum computing', 'Blockchain', 'IoT', 'Edge computing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Innovation Labs - Zion Tech Group</title>
        <meta name="description" content="Our innovation labs are where we research, develop, and test cutting-edge technologies that will shape the future." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation</span> Labs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Our innovation labs are where we research, develop, and test cutting-edge technologies that will shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Join Our Labs
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Active Projects</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current research and development projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="w-12 h-12 text-purple-400" />
                    <span className="text-sm text-green-400 font-medium">{project.status}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <ul className="space-y-2">
                    {project.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Innovation Journey</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of the future. Join our innovation labs and help us build tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Involved
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

export default InnovationLabsPage;