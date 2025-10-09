'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Bot, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    'Intelligent process automation',
    'Workflow optimization',
    'Data processing automation',
    'Customer service automation',
    'Document processing',
    'Email automation',
    'Task scheduling',
    'Report generation',
    'Data validation',
    'Integration management'
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual work by up to 80%',
      icon: Zap
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs significantly',
      icon: TrendingUp
    },
    {
      title: 'Scalability',
      description: 'Handle growing workloads automatically',
      icon: BarChart
    },
    {
      title: 'Accuracy',
      description: 'Minimize human errors in repetitive tasks',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce manual work, increase efficiency, and scale your operations." />
        <meta name="keywords" content="AI automation, business process automation, workflow automation, AI solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Streamline your business processes with intelligent automation
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;
