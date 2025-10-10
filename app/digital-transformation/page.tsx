'use client';
import React from 'react';
import { RefreshCw, Target, Users, BarChart, Cloud, Shield, Zap, ArrowRight, Phone, Mail, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const DigitalTransformationPage: React.FC = () => {
  const phases = [
    {
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of current state and digital readiness',
      icon: Target,
      duration: '2-4 weeks',
      deliverables: [
        'Digital maturity assessment',
        'Technology gap analysis',
        'Strategic roadmap development',
        'ROI projections'
      ]
    },
    {
      title: 'Planning & Design',
      description: 'Detailed planning and architecture design for transformation',
      icon: Users,
      duration: '3-6 weeks',
      deliverables: [
        'Solution architecture design',
        'Implementation timeline',
        'Change management plan',
        'Resource allocation strategy'
      ]
    },
    {
      title: 'Implementation',
      description: 'Phased implementation of digital solutions and processes',
      icon: Cloud,
      duration: '8-16 weeks',
      deliverables: [
        'System integration',
        'Process automation',
        'User training',
        'Performance monitoring'
      ]
    },
    {
      title: 'Optimization',
      description: 'Continuous improvement and optimization of digital systems',
      icon: TrendingUp,
      duration: 'Ongoing',
      deliverables: [
        'Performance optimization',
        'User feedback integration',
        'Technology updates',
        'Continuous monitoring'
      ]
    }
  ];

  const solutions = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows',
      benefits: ['50% time savings', 'Reduced errors', 'Improved efficiency'],
      icon: Zap
    },
    {
      title: 'Cloud Migration',
      description: 'Move to cloud infrastructure for scalability and flexibility',
      benefits: ['Cost reduction', 'Better scalability', 'Enhanced security'],
      icon: Cloud
    },
    {
      title: 'Data Analytics',
      description: 'Implement advanced analytics for data-driven decisions',
      benefits: ['Better insights', 'Predictive analytics', 'Improved forecasting'],
      icon: BarChart
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen cybersecurity and compliance measures',
      benefits: ['Enhanced protection', 'Compliance assurance', 'Risk mitigation'],
      icon: Shield
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work by up to 70%',
      metric: '70% efficiency gain'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimization',
      metric: '40% cost savings'
    },
    {
      title: 'Better Customer Experience',
      description: 'Improve customer satisfaction with faster, more reliable services',
      metric: '85% customer satisfaction'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern digital capabilities',
      metric: '3x faster innovation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-cyan-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge digital solutions. Our comprehensive approach helps you modernize operations, 
            improve efficiency, and stay competitive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Start Transformation
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Free Assessment
            </Link>
          </div>
        </div>

        {/* Transformation Phases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-cyan-400">Transformation</span> Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <phase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
                <div className="text-cyan-400 text-sm font-medium mb-4">
                  Duration: {phase.duration}
                </div>
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Digital <span className="text-cyan-400">Solutions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-400 rounded-lg">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-cyan-400">
                          <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transformation <span className="text-cyan-400">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
              <p className="text-gray-300 mb-4">HIPAA-compliant digital solutions for healthcare providers</p>
              <ul className="text-sm text-cyan-400 space-y-1">
                <li>• Electronic Health Records</li>
                <li>• Telemedicine Platforms</li>
                <li>• Patient Management Systems</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Finance</h3>
              <p className="text-gray-300 mb-4">Secure financial technology solutions and compliance</p>
              <ul className="text-sm text-cyan-400 space-y-1">
                <li>• Banking Systems</li>
                <li>• Payment Processing</li>
                <li>• Risk Management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
              <p className="text-gray-300 mb-4">Industry 4.0 solutions for smart manufacturing</p>
              <ul className="text-sm text-cyan-400 space-y-1">
                <li>• IoT Integration</li>
                <li>• Predictive Maintenance</li>
                <li>• Supply Chain Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Success <span className="text-cyan-400">Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Manufacturing Company</h3>
              <p className="text-gray-300 mb-4">
                "Zion Tech Group helped us implement IoT sensors and predictive analytics, 
                reducing equipment downtime by 60% and increasing production efficiency by 40%."
              </p>
              <div className="text-cyan-400 font-semibold">- CEO, Tech Manufacturing Inc.</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Healthcare Provider</h3>
              <p className="text-gray-300 mb-4">
                "Their digital transformation solution streamlined our patient management, 
                reducing administrative overhead by 50% and improving patient satisfaction scores."
              </p>
              <div className="text-purple-400 font-semibold">- CTO, Regional Medical Center</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have successfully transformed their operations with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <BarChart className="w-5 h-5 mr-2" />
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;