import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Workflow, Zap, Target, BarChart, CheckCircle, Star, ArrowRight, Clock, Users } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate complex business processes and workflows with intelligent AI systems'
    },
    {
      icon: Zap,
      title: 'Smart Triggers',
      description: 'Set up intelligent triggers that respond to data changes and events automatically'
    },
    {
      icon: Target,
      title: 'Task Optimization',
      description: 'AI-powered task prioritization and resource allocation for maximum efficiency'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time analytics and insights to optimize workflow performance'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 90%',
    'Eliminate human errors and inconsistencies',
    'Improve process efficiency by 400%',
    'Enable 24/7 business operations',
    'Scale operations without additional staff',
    'Focus on strategic tasks instead of routine work'
  ];

  const services = [
    {
      title: 'Workflow Design',
      description: 'Custom workflow design and automation strategy development',
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Process Automation',
      description: 'End-to-end process automation and implementation',
      price: 'Starting at $5,000/month'
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing systems and tools',
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization of automated workflows',
      price: 'Starting at $1,500/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your business operations with intelligent workflow automation that works 24/7 to improve efficiency and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Workflow Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Workflow Features</h2>
            <p className="text-xl text-gray-600">Powerful automation capabilities for business workflows</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Workflow Automation?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI workflow automation solutions help you eliminate repetitive tasks, reduce errors,
                and focus on what matters most - growing your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Manual Work Reduction</span>
                  <span className="text-2xl font-bold text-green-600">90%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Error Reduction</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Efficiency Gain</span>
                  <span className="text-2xl font-bold text-purple-600">+400%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Savings</span>
                  <span className="text-2xl font-bold text-orange-600">-70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Workflow Services</h2>
            <p className="text-xl text-gray-600">Comprehensive workflow automation solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Automation Process</h2>
            <p className="text-xl text-gray-600">How we implement AI workflow automation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Process Analysis</h3>
              <p className="text-gray-600 text-sm">Analyze your current workflows to identify automation opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Design</h3>
              <p className="text-gray-600 text-sm">Design custom automation workflows tailored to your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Deploy and configure automation systems in your environment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring & Optimization</h3>
              <p className="text-gray-600 text-sm">Monitor performance and continuously optimize for better results</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl mb-8">Contact us today to discover how AI can transform your business operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free Workflow Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkflowAutomationPage;