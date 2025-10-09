'use client';
import React from 'react';
import { Users, Award, Target, Globe, Brain, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group, a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services."
        keywords={['about us', 'company', 'team', 'mission', 'vision', 'AI solutions']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              quantum computing, and digital transformation services.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Our Team</h3>
                <p className="text-gray-300">50+ expert engineers, data scientists, and AI specialists</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-gray-300">Transform businesses with cutting-edge AI and technology solutions</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Target className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-gray-300">A world where AI empowers every business to achieve unprecedented success</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that have transformed their operations with our AI solutions.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;