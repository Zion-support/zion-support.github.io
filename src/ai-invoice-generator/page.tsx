import React, { memo } from 'react';
import { Phone, Star, Zap, Shield, Globe, Brain, BarChart, Eye, CheckCircle, Smartphone, Settings, ShoppingCart, Building, Car, Briefcase, Calculator, Receipt } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';

const AIInvoiceGeneratorPage: React.FC = memo(() => {
  const _features = [
    {
      icon: Brain,
      title: 'AI-Powered Invoice Generation',
      description: 'Automatically generate professional invoices with intelligent data extraction and formatting',
      benefits: ['90% time savings', 'Zero errors', 'Professional formatting']
    },
    {
      icon: Calculator,
      title: 'Automatic Calculations',
      description: 'Smart calculation of taxes, discounts, and totals with customizable business rules',
      benefits: ['Accurate calculations', 'Tax compliance', 'Custom rules']
    },
    {
      icon: Receipt,
      title: 'Multi-Format Support',
      description: 'Generate invoices in PDF, Word, Excel, and other formats with one click',
      benefits: ['Multiple formats', 'Easy sharing', 'Professional appearance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="AI Invoice Generator - Zion Tech Group"
        description="Automate your invoicing process with our AI-powered invoice generator. Save time, reduce errors, and create professional invoices instantly."
        keywords="AI invoice generator, automated invoicing, invoice automation, business invoicing, AI tools"
      />
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Invoice Generator</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your invoicing process with intelligent automation. Generate professional invoices instantly with our AI-powered solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {_features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-cyan-300">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Automate Your Invoicing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already saving time and reducing errors with our AI invoice generator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="/demo" 
              className="bg-transparent text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
});

export default AIInvoiceGeneratorPage;