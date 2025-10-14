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
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights to drive better business decisions.',
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Development', 'Insight Generation']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to stay competitive in the digital age.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircle,
      title: 'Digital Maturity',
      description: 'Assess and improve your organization\'s digital maturity across all business functions.',
      features: ['Maturity Assessment', 'Gap Analysis', 'Improvement Plans', 'Progress Tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Digital Transformation</h1>
          <p className="text-lg text-gray-300 mb-12">
            Transform your business with our comprehensive digital transformation services.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;