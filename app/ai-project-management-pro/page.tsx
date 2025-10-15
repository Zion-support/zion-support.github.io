import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, BarChart3, Clock, Shield, Zap } from 'lucide-react';

const AIProjectManagementProPage: React.FC = () => {
  const features = [
    'AI-powered task prioritization and scheduling',
    'Intelligent resource allocation and workload balancing',
    'Automated project timeline generation',
    'Real-time collaboration and communication tools',
    'Advanced analytics and performance insights',
    'Risk assessment and mitigation suggestions',
    'Custom workflow automation',
    'Integration with 100+ popular tools',
    'Mobile app for on-the-go management',
    'Advanced reporting and dashboard customization'
  ];

  const benefits = [
    'Increase project completion rate by 40%',
    'Reduce project delays by 60%',
    'Improve team productivity by 35%',
    'Save 15+ hours per week on project management',
    'Better resource utilization and cost control',
    'Enhanced team collaboration and communication'
  ];

  const integrations = [
    { name: 'Slack', icon: <Zap className="w-6 h-6" /> },
    { name: 'Microsoft Teams', icon: <Users className="w-6 h-6" /> },
    { name: 'Google Workspace', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Jira', icon: <Clock className="w-6 h-6" /> },
    { name: 'Trello', icon: <Shield className="w-6 h-6" /> },
    { name: 'Asana', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered project management solution with intelligent automation and analytics." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Project Management Pro</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced project management powered by artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Integrations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-slate-800 rounded-lg">
                  <div className="text-blue-400 mb-2">
                    {integration.icon}
                  </div>
                  <span className="text-sm text-gray-300">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIProjectManagementProPage;