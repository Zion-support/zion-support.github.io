import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import {Brain, Zap, Shield, BarChart, CheckCircle, Star, Phone} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const _services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development and implementation consulting',
      icon: Brain,
      features: ['AI Readiness Assessment', 'Strategic Planning', 'Implementation Roadmap', 'ROI Analysis'],
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms for your business needs',
      icon: Zap,
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'AI Security & Compliance',
      description: 'Enterprise-grade AI security and compliance solutions',
      icon: Shield,
      features: ['AI Security Audit', 'Compliance Framework', 'Risk Assessment', 'Security Monitoring'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'AI Analytics & Insights',
      description: 'Advanced analytics and business intelligence powered by AI',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Automated Reporting'],
      price: 'Starting at $800/month'
    }
  ];

  const benefits = [
    '300% Average ROI Increase',
    '95% Process Automation',
    '50% Cost Reduction',
    '99.9% Uptime Guarantee'
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f

const AiServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Ai Services</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ai services solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AiServicesPage;