import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Assessment & Strategy',
      description: 'Evaluate current state and develop a comprehensive digital transformation roadmap.',
      features: ['Current State Analysis', 'Gap Assessment', 'Strategic Planning', 'ROI Projections']
    },
    {
      icon: RefreshCw,
      title: 'Process Optimization',
      description: 'Streamline and modernize business processes for maximum efficiency.',
      features: ['Process Mapping', 'Workflow Automation', 'Efficiency Improvements', 'Change Management']
    },
    {
      icon: Users,
      title: 'Technology Integration',
      description: 'Implement cutting-edge technologies to enhance business capabilities.',
      features: ['System Integration', 'Cloud Migration', 'Data Modernization', 'Security Implementation']
    },
    {
      icon: Target,
      title: 'Performance Monitoring',
      description: 'Track progress and optimize digital initiatives for continuous improvement.',
      features: ['KPI Tracking', 'Performance Analytics', 'Continuous Optimization', 'Success Measurement']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes by up to 60%'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized and seamless customer interactions'
    },
    {
      icon: Target,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time insights and analytics'
    },
    {
      icon: CheckCircle,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with innovative digital solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Modernize processes, integrate technology, and drive growth." />
        <meta name="keywords" content="digital transformation, business modernization, process optimization, technology integration" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business for the digital age with our comprehensive digital transformation services. 
            Modernize processes, integrate cutting-edge technology, and drive sustainable growth.
          </p>
        </div>

        {/* Transformation Phases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Transformation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  <ul className="space-y-2 text-sm">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transformation Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:border-white/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how digital transformation can help your business thrive in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
                Start Transformation
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;