import React from 'react';
import SEOHead from '../components/SEOHead';
import { Code, Zap, Users, BarChart, CheckCircle, Rocket } from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Micro SaaS Development',
      description: 'Tailored micro SaaS applications designed specifically for your business needs.',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance & Support']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Rapid Prototyping',
      description: 'Quick development and deployment of MVP solutions to test market viability.',
      features: ['MVP Development', 'Quick Deployment', 'Market Testing', 'Iterative Improvement']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Management Systems',
      description: 'Comprehensive user authentication, authorization, and management solutions.',
      features: ['Authentication', 'User Roles', 'Profile Management', 'Security']
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics & Reporting',
      description: 'Built-in analytics and reporting features to track usage and performance.',
      features: ['Usage Analytics', 'Custom Reports', 'Data Visualization', 'Export Options']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Infrastructure',
      description: 'Cloud-based infrastructure that scales with your business growth.',
      features: ['Auto Scaling', 'Load Balancing', 'High Availability', 'Performance Monitoring']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality assurance to ensure reliable performance.',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing']
    }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS development, rapid prototyping, and scalable solutions for modern businesses looking to launch their own software products."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch your own software product with our custom micro SaaS development services. 
              From concept to deployment, we help you build scalable solutions that grow with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="text-purple-400 mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Fast Time to Market</h3>
                <p className="text-gray-300">Launch your product 3x faster with our proven development process</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
                <p className="text-gray-300">Start with a minimal viable product and scale as you grow</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-gray-300">Continuous support and updates to keep your product competitive</p>
              </div>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Start Your Micro SaaS Journey
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;