'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Globe, Zap, Shield, ArrowRight, Brain, Target, Users, Star, Phone, Mail, MapPin, Cloud, Server, Database, Settings, Activity, TrendingUp } from 'lucide-react';

const AIContentDeliveryNetworkPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Edge Network',
      description: 'Worldwide network of edge servers for ultra-fast content delivery and reduced latency.',
      benefits: ['Global coverage', 'Low latency', 'High availability', 'Edge computing']
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Intelligent content optimization and caching strategies powered by machine learning.',
      benefits: ['Smart caching', 'Content optimization', 'Predictive loading', 'Performance tuning']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Comprehensive security features including DDoS protection and SSL encryption.',
      benefits: ['DDoS protection', 'SSL encryption', 'WAF integration', 'Security monitoring']
    },
    {
      icon: Brain,
      title: 'Intelligent Routing',
      description: 'AI-driven traffic routing and load balancing for optimal performance.',
      benefits: ['Smart routing', 'Load balancing', 'Traffic optimization', 'Failover protection']
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with major cloud providers and content management systems.',
      benefits: ['Cloud integration', 'CMS support', 'API compatibility', 'Easy deployment']
    },
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and monitoring for performance insights and optimization.',
      benefits: ['Real-time metrics', 'Performance monitoring', 'Usage analytics', 'Custom dashboards']
    }
  ];

  const benefits = [
    'Improve page load speed by 80%',
    'Reduce bandwidth costs by 60%',
    'Increase global reach by 95%',
    'Lower server load by 70%',
    'Enable global scalability',
    'Automate content optimization',
    'Enhance user experience',
    'Reduce infrastructure costs'
  ];

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Accelerate product images and content for better shopping experience',
      icon: '🛒'
    },
    {
      title: 'Media & Streaming',
      description: 'Deliver video and audio content with minimal buffering and high quality',
      icon: '🎬'
    },
    {
      title: 'Web Applications',
      description: 'Optimize web app performance and reduce load times globally',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Accelerate mobile app content delivery and improve user experience',
      icon: '📱'
    },
    {
      title: 'Gaming',
      description: 'Deliver game assets and updates with minimal latency for better gaming',
      icon: '🎮'
    },
    {
      title: 'Software Distribution',
      description: 'Distribute software updates and downloads efficiently worldwide',
      icon: '💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Delivery Network - Zion Tech Group</title>
        <meta name="description" content="Accelerate your content delivery with our AI-powered CDN. Global edge network, intelligent optimization, and advanced security for better performance." />
        <meta name="keywords" content="AI CDN, content delivery network, edge computing, global CDN, content optimization, CDN security" />
      </Helmet>


      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Delivery Network
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your content delivery with our AI-powered CDN. Global edge network, 
              intelligent optimization, and advanced security for better performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center">
                Start Delivering
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIContentDeliveryNetworkPage;
