'use client';
import React from 'react';
import { Brain, TrendingUp, BarChart, Target, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIMLPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Custom machine learning models for predictive analytics, decision-making, and intelligent automation. Transform your data into actionable insights with our ML expertise."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'data science', 'AI models', 'ML consulting']}
        canonicalUrl="https://ziontechgroup.com/ai-ml"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium neon-pulse">
              Transform Data into Intelligent Insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our machine learning experts build custom models that learn from your data to make predictions, 
              automate decisions, and uncover hidden patterns that drive business growth.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Custom ML Models</h3>
                <p className="text-gray-300">Tailored machine learning models designed for your specific business needs and data patterns</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">Forecast trends, customer behavior, and business outcomes with advanced predictive models</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <BarChart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Data Intelligence</h3>
                <p className="text-gray-300">Extract actionable insights from complex datasets using advanced ML algorithms</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our ML experts help you build intelligent systems that learn and adapt to your business needs.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get ML Consultation
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIMLPage;