'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Smartphone, Code, Database, Cloud, Lock, Users, Target, TrendingUp, Brain, Settings, BarChart } from 'lucide-react';

const ARVRSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Immersive Experiences',
      description: 'Create stunning AR/VR experiences that engage users and drive business results across industries.'
    },
    {
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'High-performance real-time rendering for smooth, interactive AR/VR applications.'
    },
    {
      icon: Shield,
      title: 'Cross-Platform Support',
      description: 'Develop once, deploy everywhere - support for iOS, Android, WebXR, and major VR headsets.'
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Integrate AI and machine learning for intelligent AR/VR experiences and object recognition.'
    },
    {
      icon: Target,
      title: 'Enterprise Solutions',
      description: 'Custom AR/VR solutions for training, remote collaboration, and industrial applications.'
    },
    {
      icon: Users,
      title: 'Multi-User Experiences',
      description: 'Create shared virtual spaces for collaboration, meetings, and social interactions.'
    }
  ];

  const applications = [
    {
      title: 'Virtual Training',
      description: 'Immersive training simulations for healthcare, manufacturing, and corporate education.',
      icon: Users
    },
    {
      title: 'Remote Collaboration',
      description: 'Virtual meeting spaces and collaborative workspaces for remote teams.',
      icon: Globe
    },
    {
      title: 'Retail & E-commerce',
      description: 'Virtual try-on experiences, product visualization, and virtual showrooms.',
      icon: Target
    },
    {
      title: 'Real Estate',
      description: 'Virtual property tours, interior design visualization, and architectural walkthroughs.',
      icon: Eye
    },
    {
      title: 'Healthcare',
      description: 'Medical training, patient education, and therapeutic VR applications.',
      icon: Shield
    },
    {
      title: 'Entertainment',
      description: 'Gaming, virtual events, and immersive entertainment experiences.',
      icon: Zap
    }
  ];

  const benefits = [
    'Increase user engagement by up to 300%',
    'Reduce training costs by 60%',
    'Improve learning retention by 80%',
    'Enable remote collaboration and meetings',
    'Create unique brand experiences',
    'Drive innovation and competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              AR/VR Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Immersive AR/VR
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge augmented and virtual reality solutions that create engaging, immersive experiences for your customers and employees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AR/VR Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AR/VR development team creates immersive experiences using the latest technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to retail, our AR/VR solutions deliver value across diverse industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <application.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-gray-300">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AR/VR solutions deliver quantifiable results that transform user engagement and business outcomes.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-300 mb-6">User Engagement Increase</div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 mb-6">Training Cost Reduction</div>
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-gray-300">Learning Retention Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Immersive Experiences?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking companies already using AR/VR to transform their business and engage their audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ARVRSolutionsPage;