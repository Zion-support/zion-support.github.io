import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business goals and market opportunities.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights that drive informed business decisions.',
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Creation', 'Predictive Modeling']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies that give your business a competitive advantage.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircle,
      title: 'Digital Readiness',
      description: 'Assess and improve your organization\'s readiness for digital transformation initiatives.',
      features: ['Readiness Assessment', 'Gap Analysis', 'Capability Building', 'Success Planning']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes, technology, and culture for the digital age." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, innovation consulting" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business for the digital age with our comprehensive digital transformation services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let us help you navigate the digital transformation journey and unlock your business's full potential.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;