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
    'Marketing automation',
    'Report generation',
    'Task scheduling',
    'Error handling and recovery',
    'Integration with existing systems',
    'Real-time monitoring and analytics'
  ];

  const benefits = [
    'Reduce manual work by 80%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    '24/7 automated operations',
    'Faster response times',
    'Cost reduction',
    'Improved accuracy',
    'Scalable solutions'
  ];

  const automationTypes = [
    {
      title: 'Business Process Automation',
      description: 'Automate repetitive business tasks and workflows',
      icon: Settings,
      examples: ['Invoice processing', 'Data entry', 'Report generation', 'Approval workflows']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered customer support and engagement',
      icon: Bot,
      examples: ['Chatbots', 'Email responses', 'Ticket routing', 'FAQ automation']
    },
    {
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns and lead management',
      icon: BarChart,
      examples: ['Email campaigns', 'Social media posting', 'Lead scoring', 'Content scheduling']
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