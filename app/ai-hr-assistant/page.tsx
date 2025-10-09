'use client';
import React from 'react';
import { Users, FileText, BarChart, Target, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIHRAssistantPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI HR Assistant - Zion Tech Group"
        description="AI-powered HR solutions including resume screening, interview scheduling, employee analytics, and performance tracking. Streamline HR processes with intelligent automation."
        keywords={['AI HR assistant', 'resume screening', 'interview scheduling', 'employee analytics', 'HR automation', 'performance tracking']}
        canonicalUrl="https://ziontechgroup.com/ai-hr-assistant"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI HR Assistant
            </h1>
            <p className="text-xl text-purple-400 mb-8 font-medium">
              Intelligent Human Resources
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your HR processes with AI-powered automation. From recruitment to performance tracking, 
              our intelligent HR assistant helps you manage your workforce more effectively.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">HR Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Resume Screening</h3>
                <p className="text-gray-300">Automated resume analysis and candidate matching</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Interview Scheduling</h3>
                <p className="text-gray-300">Intelligent interview coordination and management</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <BarChart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Employee Analytics</h3>
                <p className="text-gray-300">Comprehensive workforce analytics and insights</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your HR?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our HR AI experts today to discuss how automation can improve your human resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIHRAssistantPage;