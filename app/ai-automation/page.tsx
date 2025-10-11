import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Workflow, Bot, Settings, Target, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.',
      benefits: ['Visual workflow builder', 'Conditional logic', 'Error handling', 'Process optimization']
    },
    {
      icon: Bot,
      title: 'AI Decision Making',
      description: 'Let AI make intelligent decisions based on data and predefined rules.',
      benefits: ['Smart routing', 'Risk assessment', 'Quality control', 'Exception handling']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Connect and automate across all your business systems and applications.',
      benefits: ['API integrations', 'Data synchronization', 'Real-time updates', 'Custom connectors']
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Monitor and optimize your automation processes with detailed analytics.',
      benefits: ['Process metrics', 'Performance dashboards', 'Bottleneck identification', 'ROI tracking']
    }
  ];

  const benefits = [
    'Reduce manual work by up to 90%',
    'Improve process accuracy and consistency',
    'Scale operations without scaling headcount',
    'Reduce operational costs significantly',
    'Eliminate human errors and delays',
    'Enable 24/7 automated operations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation - Zion Tech Group | Intelligent Process Automation</title>
        <meta name="description" content="Transform your business with AI-powered automation. Automate workflows, processes, and decision-making with our intelligent automation solutions." />
        <meta name="keywords" content="AI automation, process automation, workflow automation, business process automation, intelligent automation" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with intelligent automation. Automate workflows, processes, 
              and decision-making to improve efficiency, reduce costs, and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Automation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation solutions help you streamline operations, reduce costs, and improve efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Target className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your automation journey today and transform how your business operates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiAutomationPage;