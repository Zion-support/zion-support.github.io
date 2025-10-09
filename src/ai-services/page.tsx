import React from 'react';
import { Brain, Zap, Shield, BarChart , Brain, Zap, BarChart, import { Link } from 'react-router-dom';
import {Brain, Zap, Shield, BarChart, CheckCircle, Star, Phone} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const AIServicesPage: React.FC = () => {
  const services = [
    {
  // TODO: Add content;
};
  title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting',
      icon: Brain,
      features: ['AI Readiness Assessment', 'Strategic Planning', 'Implementation Roadmap', 'ROI Analysis'],
      price: 'Starting at $2,500/month'
    },










    }
  ];
  const benefits = [
    '300% Average ROI Increase',
    '95% Process Automation',
    '50% Cost Reduction',
    '99.9% Uptime Guarantee'
  return (
    
          
          
          
          
          
          
          
          <div>Coming Soon</div>
  )
    
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Advanced AI services solutions by Zion Tech Group." />
      </Helmet>
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
// Coming Soon - Advanced AI services solutions that will transform your business.
          
          
          
          
          
          
          
          
          
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
// Contact Us
            
          
          
          
          
          
          
          
          ;
          </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover: bg-cyan-400 hove,text-slate-900 transition-colors">
Learn More;
          </div>
      <Footer />
    </div>
  );
};

export default AiAnalyticsDashboardPage;