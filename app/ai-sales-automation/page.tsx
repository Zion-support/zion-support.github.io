'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { TrendingUp, Target, Users, BarChart, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const AISalesAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Sales Automation Solutions | Zion Tech Group"
        description="Automate your sales processes with AI-powered tools for lead generation, qualification, and conversion optimization."
        keywords={['AI sales automation', 'lead generation', 'sales optimization', 'CRM automation']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Sales Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate your sales processes with AI-powered tools for lead generation, qualification, and conversion optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="cyber-button inline-flex items-center justify-center">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="cyber-card p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how AI can boost your sales performance and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button inline-flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="cyber-button-secondary inline-flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISalesAutomationPage;
