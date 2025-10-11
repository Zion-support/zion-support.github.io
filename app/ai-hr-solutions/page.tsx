import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import { Brain, Users, BarChart, Target, Zap, Shield } from 'lucide-react';

const AIHRSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Recruitment',
      description: 'Advanced AI algorithms for intelligent candidate screening and matching.',
      benefits: ['Resume screening', 'Candidate matching', 'Interview scheduling', 'Talent acquisition']
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive AI-driven employee lifecycle management.',
      benefits: ['Performance tracking', 'Skill assessment', 'Career development', 'Employee engagement']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Data-driven insights for workforce optimization and decision making.',
      benefits: ['Performance metrics', 'Trend analysis', 'Predictive insights', 'ROI tracking']
    },
    {
      icon: Target,
      title: 'Workforce Optimization',
      description: 'AI-powered strategies for optimal workforce planning and allocation.',
      benefits: ['Resource planning', 'Skill gap analysis', 'Succession planning', 'Capacity optimization']
    },
    {
      icon: Zap,
      title: 'HR Automation',
      description: 'Streamline HR processes with intelligent automation and workflows.',
      benefits: ['Process automation', 'Workflow optimization', 'Time tracking', 'Compliance management']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Enterprise-grade security and compliance for all HR operations.',
      benefits: ['Data protection', 'Privacy compliance', 'Audit trails', 'Security monitoring']
    }
  ];

  const benefits = [
    'Reduce recruitment time by 60%',
    'Improve employee retention by 40%',
    'Increase HR efficiency by 50%',
    'Enhance decision-making with data insights',
    'Streamline compliance and reporting'
  ];

  return (
    <>
      <Helmet>
        <title>AI HR Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your HR operations with AI-powered solutions for recruitment, employee management, performance analytics, and workforce optimization." />
        <meta name="keywords" content="AI HR solutions, HR automation, recruitment AI, employee management, performance analytics, workforce optimization" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                AI HR Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionize your human resources with intelligent AI solutions for recruitment,
                employee management, performance analytics, and workforce optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Comprehensive AI-driven HR solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI HR Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your HR operations with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI HR Solutions and experience the future of intelligent human resource management.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIHRSolutionsPage;