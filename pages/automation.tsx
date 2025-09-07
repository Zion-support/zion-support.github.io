import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation - Zion Tech Group',
  description: 'Professional automation services to help your business grow and succeed.',
  keywords: 'automation, business solutions, professional services'
};

export default function AutomationPage() {
  const features = null;
import React from 'react',
import Head from 'next/head';

import {
  RefreshCw
  Zap
  Bot
  Workflow
  ArrowRight
  Check
  BarChart3;
} from 'lucide-react';
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className='w-8 h-8 text-white' />
      title: 'Workflow Automation'
      description: 'Create complex workflows with drag-and-drop interface'
    }
    {
      icon: <Bot className='w-8 h-8 text-white' />
      title: 'AI-Powered Bots'
      description: 'Intelligent automation agents that learn and adapt'
    }
    {
      icon: <BarChart3 className='w-8 h-8 text-white' />
      title: 'Process Analytics'
      description: 'Real-time insights into your automation performance'
    }
    {
      icon: <Zap className='w-8 h-8 text-white' />
      title: 'Smart Triggers'
      description: 'Automated responses based on events and conditions'
    }
  ];
  const benefits = [
    'Reduce manual tasks by 80%'
    'Improve process accuracy'
    'Scale operations efficiently'
    '24/7 automated operations'
    'Real-time monitoring'
    'Custom integration support',  ];
export default function AutomationPage() {
  const features = [
    {
      icon: <Workflow className="w-8 h-8 text-white" />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions',
    },;
  ];

  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name="description" content="AI-powered workflow automation platform that streamlines your business processes and increases efficiency." />
      </Head>
      <div className='min-h-screen bg-black'>
        {/* Hero Section */}
        <section className='pt-32 pb-20 relative overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]' />
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6'>
                <RefreshCw className='w-4 h-4 mr-2' />
                Intelligent Automation
              </div>
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight'>
              Automation Hub
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <a href='/contact' className='shadow-2xl shadow-blue-500/25'>
                Start Automating
                <ArrowRight className='w-5 h-5 ml-2' />
              </a>
              <a
                href='/contact'
                className='border-white/20 hover:border-white/40'
              >                View Demo
              </a>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
                Automation Features
              </h2>
              <p className='text-xl text-gray-400 max-w-3xl mx-auto'>                Powerful tools to automate any business process
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    {feature.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
