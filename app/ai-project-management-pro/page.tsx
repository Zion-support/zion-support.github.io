import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Calendar } from 'lucide-react';

const AiProjectManagementProPage: React.FC = () => {
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
    { name: 'Slack' },
    { name: 'Microsoft Teams' },
    { name: 'Google Workspace' },
    { name: 'Jira' },
    { name: 'Trello' },
    { name: 'Asana' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management solution with intelligent automation, resource optimization, and advanced analytics." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Project Management Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your project management with AI-powered automation, intelligent resource allocation, and advanced analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered project management platform delivers intelligent automation and insights.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Measurable Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See immediate improvements in your project management efficiency and team productivity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and workflows for a unified project management experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-semibold">{integration.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Project Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with AI Project Management Pro and transform how your team works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiProjectManagementProPage;