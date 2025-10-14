import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Automation', 'Document Processing', 'Data Integration', 'Quality Control']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Stakeholder Engagement', 'Performance Monitoring']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital strategies aligned with your business objectives and market demands.',
      features: ['Digital Roadmap', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive informed decision-making and growth.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Foster a culture of innovation and identify new opportunities for digital growth and expansion.',
      features: ['Innovation Workshops', 'Technology Scouting', 'Pilot Programs', 'Innovation Metrics']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure the highest quality standards throughout your digital transformation journey.',
      features: ['Testing Strategies', 'Performance Monitoring', 'User Acceptance Testing', 'Continuous Improvement']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 40%.',
      percentage: '40%'
    },
    {
      title: 'Cost Reduction',
      description: 'Optimize operations and reduce manual processes to cut costs by an average of 30%.',
      percentage: '30%'
    },
    {
      title: 'Better Customer Experience',
      description: 'Deliver personalized, seamless experiences that increase customer satisfaction by 60%.',
      percentage: '60%'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time data and analytics insights.',
      percentage: '100%'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: 'Evaluate current systems, processes, and digital maturity to identify transformation opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive digital transformation roadmap aligned with business objectives.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the transformation plan with careful change management and stakeholder engagement.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor, measure, and optimize digital solutions for maximum impact.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business operations and drive growth." />
        <meta name="keywords" content="digital transformation, process automation, change management, business modernization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive solutions that drive innovation and growth.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              From strategy to implementation, we guide you through every step of your digital transformation journey, 
              ensuring sustainable success and competitive advantage.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Transformation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Benefits</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements across all aspects of your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.percentage}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Process</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how our digital transformation expertise can modernize your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Start Transformation
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Download Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;