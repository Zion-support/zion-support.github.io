import React from 'react';
import { Mail, Target, Send, BarChart, Users, TrendingUp, TrendingUp } from 'lucide-react';
const AiEmailMarketingPage: React.FC = () => {
import { Mail, CheckCircle, ArrowRight, Star } from 'lucide-react';
const AIEmailMarketingPage: React.FC = () => {
  return (
    <div>Coming Soon</div>
  );
};
  const _features = [
  // TODO: Add items;
];;
    {// TODO: Add content;}
};
  icon: Mail,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content that resonates with your audience'
    },
icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation for highly targeted campaigns',

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Coming Soon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
// Contact Us;
          </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
Learn More;
          </div>
      <Footer />
    </div>
  );
};

export default PagePage;