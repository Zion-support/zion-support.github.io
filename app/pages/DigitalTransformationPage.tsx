import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [{
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Automation', 'Document Processing', 'Data Integration', 'Quality Control']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation roadmaps aligned with your business objectives.',
      features: ['Technology Assessment', 'Gap Analysis', 'Implementation Roadmap', 'ROI Projections']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your digital infrastructure and processes for maximum performance and scalability.',
      features: ['Performance Monitoring', 'Bottleneck Analysis', 'Scalability Planning', 'Cost Optimization']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies that can give you a competitive advantage.',
      features: ['Technology Research', 'Pilot Programs', 'Innovation Workshops', 'Market Analysis']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure the quality and reliability of your digital transformation initiatives.',
      features: ['Testing Strategies', 'Quality Metrics', 'Risk Assessment', 'Compliance Monitoring']
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Assessment & Analysis',
      description: 'We analyze your current state, identify pain points, and assess your digital readiness.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'We create a comprehensive digital transformation strategy tailored to your business goals.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the transformation plan with careful project management and stakeholder engagement.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize your digital solutions for maximum performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, business optimization, innovation consulting" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with comprehensive digital solutions that drive growth, 
            efficiency, and innovation across all operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our digital transformation services can help you achieve your business goals 
              and stay competitive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Start Transformation
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;