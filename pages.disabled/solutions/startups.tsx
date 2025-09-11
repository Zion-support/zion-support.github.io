import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Rocket, Lightbulb, Target } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Startups: NextPage = () => {;
  const solutions = [;
    {;
      title: 'MVP Development',
      description: 'Fast-track your product launch with our rapid MVP development services',
      features: ['Rapid prototyping', 'User feedback integration', 'Scalable architecture', 'Launch support'],
      icon: Rocket,
      price: 'Starting at $5,000';
},
    {;
      title: 'Technical Co-founder',
      description: 'Get expert technical guidance and leadership for your startup',
      features: ['Technical strategy', 'Architecture planning', 'Team building', 'Mentorship'],
      icon: Users,
      price: 'Equity-based partnerships';
},
    {;
      title: 'AI Integration',
      description: 'Leverage cutting-edge AI to differentiate your product',
      features: ['Custom AI models', 'Machine learning pipelines', 'Data analytics', 'AI strategy'],
      icon: Lightbulb,
      price: 'Starting at $3,000';
},
    {;
      title: 'Cloud Infrastructure',
      description: 'Scalable, cost-effective cloud solutions for growing startups',
      features: ['Auto-scaling', 'Cost optimization', 'Security compliance', 'Monitoring'],
      icon: Globe,
      price: 'Starting at $299/month';
}
  ];
  const benefits = [;
    {;
      title: 'Speed to Market',
      description: 'Launch faster with our proven development processes',
      icon: Clock;
},
    {;
      title: 'Cost Effective',
      description: 'Flexible pricing models designed for startups',
      icon: TrendingUp;
},
    {;
      title: 'Expert Guidance',
      description: 'Access to experienced technical advisors',
      icon: Award;
},
    {;
      title: 'Scalable Solutions',
      description: 'Build for growth from day one',
      icon: Target;
}
  ];
  const stages = [;
    {;
      stage: 'Idea Validation',
      description: 'Validate your concept with market research and prototyping',
      services: ['Market analysis', 'User research', 'Prototype development', 'Feasibility study'];
},
    {;
      stage: 'MVP Development',
      description: 'Build and launch your minimum viable product',
      services: ['Rapid development', 'User testing', 'Iteration cycles', 'Launch support'];
},
    {;
      stage: 'Growth & Scale',
      description: 'Scale your product and team for growth',
      services: ['Performance optimization', 'Team expansion', 'Feature development', 'Market expansion'];
}
  ];
  return (;
    <MainLayout;
      title="Startup Solutions - Zion Tech Group";
      description="Accelerate your startup's success with our comprehensive technology solutions. From MVP development to scaling, we're your technical partner.";
      keywords="startup solutions, MVP development, technical co-founder, AI integration, cloud infrastructure, startup technology">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 relative overflow-hidden">;
        <div className="absolute inset-0 bg-black opacity-10"></div>;
        <div className="container mx-auto px-4 text-center relative z-10">;
          <motion.h1 ;
            className="text-5xl md:text-6xl font-bold mb-6";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>;
          </motion.h1>;
          <motion.p ;
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >;
            Accelerate your startup's success with our comprehensive technology solutions. ;
            From MVP development to scaling, we're your technical partner.;
          </motion.p>;
          <motion.div ;
            className="flex flex-col sm:flex-row justify-center gap-4";
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >;
            <Link;
              href="/contact";
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">;
              Start Your Journey;
            </Link>;
            <Link;
              href="/solutions";
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">;
              View All Solutions;
            </Link>;
          </motion.div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Startups Choose Us</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We understand the unique challenges startups face and provide solutions that help you ;
              move fast, stay lean, and scale efficiently.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;